import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { extname } from 'path';
import { SupabaseService } from '../../shared/supabase/supabase.service';
import { RegisterProviderDto } from './dto/register-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { ProviderRegistrationResult } from './types/provider-registration.types';

// ── Multer file shape (memory storage) ──────────────────────────
interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  buffer: Buffer;
}

export type ProviderDocumentFiles = {
  nicFrontImage?: MulterFile[];
  nicBackImage?: MulterFile[];
  selfieImage?: MulterFile[];
  portfolio?: MulterFile[];
};

const DOCUMENT_KEYS: Array<{ field: keyof ProviderDocumentFiles; docType: string }> = [
  { field: 'nicFrontImage', docType: 'nic_front' },
  { field: 'nicBackImage', docType: 'nic_back' },
  { field: 'selfieImage', docType: 'selfie' },
  { field: 'portfolio', docType: 'portfolio' },
];

/*
 * Required Supabase migration before using uploadDocuments:
 *
 * create table provider_document (
 *   id           uuid primary key default gen_random_uuid(),
 *   provider_id  uuid not null references service_provider(id) on delete cascade,
 *   doc_type     text not null,        -- 'nic_front' | 'nic_back' | 'selfie' | 'portfolio'
 *   storage_path text not null,        -- e.g. providers/{uuid}/nic_front.jpg
 *   mime_type    text,
 *   original_name text,
 *   created_at   timestamptz default now(),
 *   unique(provider_id, doc_type)
 * );
 */

@Injectable()
export class ProvidersService {
  private readonly logger = new Logger(ProvidersService.name);

  constructor(private readonly supabase: SupabaseService) {}

  async register(
    dto: RegisterProviderDto,
  ): Promise<ProviderRegistrationResult> {
    // ── 1. Create Supabase auth user — UUID becomes ServiceProvider PK ──
    const { data, error: authError } = await this.supabase.admin.createUser({
      email: dto.email,
      password: dto.password,
      email_confirm: true,
      user_metadata: { full_name: dto.fullName },
    });

    if (authError) {
      if (
        authError.status === 422 ||
        authError.message?.toLowerCase().includes('already')
      ) {
        throw new ConflictException(
          'An account with this email already exists',
        );
      }
      throw new InternalServerErrorException('Failed to create auth account');
    }

    const authUserId = data.user.id;

    // ── 2. Persist rows sequentially; cascade-delete sp on any failure ──
    try {
      // 2a. ServiceProvider
      const { data: spRow, error: spError } = await this.supabase.db
        .from('service_provider')
        .insert({
          id: authUserId,
          full_name: dto.fullName,
          mobile_number: dto.mobileNumber,
          whatsapp_number: dto.whatsappNumber ?? null,
          email: dto.email,
          nic_number: dto.nicNumber,
          province: dto.province ?? null,
          district: dto.district ?? null,
          is_active: false,
        })
        .select(
          'id, full_name, mobile_number, email, nic_number, province, district, is_active, created_at',
        )
        .single();

      if (spError) {
        await this.supabase.admin.deleteUser(authUserId);
        if (spError.code === '23505') {
          throw new ConflictException(
            'A provider with this mobile number or NIC already exists',
          );
        }
        throw new InternalServerErrorException('Registration failed');
      }

      const spId: string = spRow.id;

      // 2b. ServiceZones
      if (dto.serviceZones?.length) {
        const { error: szError } = await this.supabase.db
          .from('service_zone')
          .insert(
            dto.serviceZones.map((zoneName) => ({
              provider_id: spId,
              zone_name: zoneName,
            })),
          );

        if (szError) {
          await this.supabase.db.from('service_provider').delete().eq('id', spId);
          await this.supabase.admin.deleteUser(authUserId);
          throw new InternalServerErrorException('Registration failed');
        }
      }

      // 2c. ProviderService (expertise / services)
      if (dto.services?.length) {
        for (const svc of dto.services) {
          const { data: mainCat } = await this.supabase.db
            .from('main_category')
            .select('id')
            .eq('name', svc.mainCategory)
            .maybeSingle();

          if (!mainCat) {
            this.logger.warn(
              `Main category "${svc.mainCategory}" not found — skipping service entry`,
            );
            continue;
          }

          const { data: subCat } = await this.supabase.db
            .from('sub_category')
            .select('id')
            .eq('name', svc.subCategory)
            .eq('main_category_id', mainCat.id)
            .maybeSingle();

          if (!subCat) {
            this.logger.warn(
              `Sub category "${svc.subCategory}" under "${svc.mainCategory}" not found — skipping`,
            );
            continue;
          }

          const { error: psError } = await this.supabase.db
            .from('provider_service')
            .insert({
              provider_id: spId,
              main_category_id: mainCat.id,
              sub_category_id: subCat.id,
              experience_level: svc.experienceLevel ?? null,
              description: svc.description ?? null,
            });

          if (psError) {
            await this.supabase.db.from('service_provider').delete().eq('id', spId);
            await this.supabase.admin.deleteUser(authUserId);
            throw new InternalServerErrorException('Registration failed');
          }
        }
      }

      // 2d. Availability
      if (dto.availability) {
        const av = dto.availability;
        const normalizedDays = normalizeServiceDays(av.serviceDays);
        const compactDays = toCompactServiceDays(normalizedDays);
        const availabilityInsert = {
          provider_id: spId,
          available_days: compactDays,
          available_from: av.workStartTime
            ? parseTimeToDbTime(av.workStartTime)
            : null,
          available_to: av.workEndTime
            ? parseTimeToDbTime(av.workEndTime)
            : null,
          night_service: av.nightService ?? false,
          is_24_7: false,
          is_available_now: false,
        };

        const { error: avError } = await this.supabase.db
          .from('availability')
          .insert(availabilityInsert);

        if (avError) {
          this.logger.error(
            `Availability insert failed: ${avError.message}`,
            avError,
          );
          await this.supabase.db.from('service_provider').delete().eq('id', spId);
          await this.supabase.admin.deleteUser(authUserId);
          throw new InternalServerErrorException('Registration failed');
        }
      }

      // 2e. ProviderAgreement
      if (dto.agreements) {
        const ag = dto.agreements;
        const now = new Date().toISOString();
        const { error: agError } = await this.supabase.db
          .from('provider_agreement')
          .insert({
            provider_id: spId,
            terms_accepted: ag.agreeTerms,
            terms_accepted_at: ag.agreeTerms ? now : null,
            commission_accepted: ag.agreeCommission,
            commission_accepted_at: ag.agreeCommission ? now : null,
          });

        if (agError) {
          await this.supabase.db.from('service_provider').delete().eq('id', spId);
          await this.supabase.admin.deleteUser(authUserId);
          throw new InternalServerErrorException('Registration failed');
        }
      }

      return {
        id: spRow.id,
        fullName: spRow.full_name,
        mobileNumber: spRow.mobile_number,
        email: spRow.email,
        nicNumber: spRow.nic_number,
        province: spRow.province,
        district: spRow.district,
        isActive: spRow.is_active,
        createdAt: new Date(spRow.created_at),
      };
    } catch (err: unknown) {
      this.logger.error('Provider registration error', err);
      if (
        err instanceof ConflictException ||
        err instanceof InternalServerErrorException ||
        err instanceof BadRequestException
      ) {
        throw err;
      }
      throw new InternalServerErrorException('Registration failed');
    }
  }

  async getMe(token: string) {
    const user = await this.supabase.verifyToken(token);
    if (!user) throw new UnauthorizedException('Invalid or expired token');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data, error } = await this.supabase.db
      .from('service_provider')
      .select(
        `id, full_name, mobile_number, whatsapp_number, email, nic_number,
        province, district, is_active, created_at,
        service_zone(zone_name),
        provider_service(experience_level, description, main_category(name), sub_category(name)),
        availability(available_days, available_from, available_to, night_service)`,
      )
      .eq('id', user['id'] as string)
      .single();

    if (error || !data) throw new NotFoundException('Provider profile not found');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return toProviderProfileFull(data as unknown as SpRowFull);
  }

  async uploadDocuments(
    providerId: string,
    files: ProviderDocumentFiles,
  ): Promise<{ providerId: string; uploaded: string[]; failed: string[] }> {
    const { data: provider } = await this.supabase.db
      .from('service_provider')
      .select('id')
      .eq('id', providerId)
      .single();

    if (!provider) throw new NotFoundException('Provider not found');

    const bucket = 'private-documents';
    const basePath = `providers/${providerId}`;
    const uploaded: string[] = [];
    const failed: string[] = [];
    const dbRows: Array<{
      provider_id: string;
      doc_type: string;
      storage_path: string;
      mime_type: string;
      original_name: string;
    }> = [];

    for (const { field, docType } of DOCUMENT_KEYS) {
      const file = files[field]?.[0];
      if (!file) continue;

      const ext = extname(file.originalname).toLowerCase() || '.bin';
      const storagePath = `${basePath}/${docType}${ext}`;

      const { error: storageError } = await this.supabase.storage
        .from(bucket)
        .upload(storagePath, file.buffer, {
          contentType: file.mimetype,
          upsert: true,
        });

      if (storageError) {
        this.logger.error(
          `Storage upload failed [${docType}]: ${storageError.message}`,
        );
        failed.push(docType);
        continue;
      }

      uploaded.push(docType);
      dbRows.push({
        provider_id: providerId,
        doc_type: docType,
        storage_path: storagePath,
        mime_type: file.mimetype,
        original_name: file.originalname,
      });
    }

    if (dbRows.length > 0) {
      const { error: dbError } = await this.supabase.db
        .from('provider_document')
        .upsert(dbRows, { onConflict: 'provider_id,doc_type' });

      if (dbError) {
        this.logger.error(`Document DB persist failed: ${dbError.message}`, dbError);
      }
    }

    return { providerId, uploaded, failed };
  }

  async updateMe(token: string, dto: UpdateProviderDto) {
    const user = await this.supabase.verifyToken(token);
    if (!user) throw new UnauthorizedException('Invalid or expired token');
    const userId = user['id'] as string;

    // ── 1. Update service_provider row ──────────────────────────────────
    const updates: Record<string, unknown> = {};
    if (dto.fullName !== undefined) updates['full_name'] = dto.fullName;
    if (dto.mobileNumber !== undefined) updates['mobile_number'] = dto.mobileNumber;
    if (dto.whatsappNumber !== undefined) updates['whatsapp_number'] = dto.whatsappNumber;
    if (dto.province !== undefined) updates['province'] = dto.province || null;
    if (dto.district !== undefined) updates['district'] = dto.district || null;

    if (Object.keys(updates).length > 0) {
      const { error } = await this.supabase.db
        .from('service_provider')
        .update(updates)
        .eq('id', userId);
      if (error) throw new InternalServerErrorException('Failed to update profile');
    }

    // ── 2. Service zones ─────────────────────────────────────────────────
    if (dto.serviceZones !== undefined) {
      await this.supabase.db.from('service_zone').delete().eq('provider_id', userId);
      if (dto.serviceZones.length > 0) {
        const { error } = await this.supabase.db.from('service_zone').insert(
          dto.serviceZones.map((zoneName) => ({ provider_id: userId, zone_name: zoneName })),
        );
        if (error) throw new InternalServerErrorException('Failed to update service zones');
      }
    }

    // ── 3. Services / expertise ──────────────────────────────────────────
    if (dto.services !== undefined) {
      await this.supabase.db.from('provider_service').delete().eq('provider_id', userId);
      for (const svc of dto.services) {
        const { data: mainCat } = await this.supabase.db
          .from('main_category').select('id').eq('name', svc.mainCategory).maybeSingle();
        if (!mainCat) { this.logger.warn(`Main category "${svc.mainCategory}" not found — skipping`); continue; }

        const { data: subCat } = await this.supabase.db
          .from('sub_category').select('id')
          .eq('name', svc.subCategory).eq('main_category_id', mainCat.id).maybeSingle();
        if (!subCat) { this.logger.warn(`Sub category "${svc.subCategory}" not found — skipping`); continue; }

        await this.supabase.db.from('provider_service').insert({
          provider_id: userId,
          main_category_id: mainCat.id,
          sub_category_id: subCat.id,
          experience_level: svc.experienceLevel ?? null,
          description: svc.description ?? null,
        });
      }
    }

    // ── 4. Availability ──────────────────────────────────────────────────
    if (dto.availability !== undefined) {
      const av = dto.availability;
      const normalizedDays = normalizeServiceDays(av.serviceDays);
      const compactDays = toCompactServiceDays(normalizedDays);
      const availData = {
        available_days: compactDays,
        available_from: av.workStartTime ? parseTimeToDbTime(av.workStartTime) : null,
        available_to: av.workEndTime ? parseTimeToDbTime(av.workEndTime) : null,
        night_service: av.nightService,
      };

      const { data: existing } = await this.supabase.db
        .from('availability').select('id').eq('provider_id', userId).maybeSingle();

      if (existing) {
        await this.supabase.db.from('availability').update(availData).eq('provider_id', userId);
      } else {
        await this.supabase.db.from('availability').insert({
          provider_id: userId, ...availData, is_24_7: false, is_available_now: false,
        });
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.getMe(token);
  }
}

// ── Helpers ──────────────────────────────────────────────────────

interface SpRow {
  id: string;
  full_name: string;
  mobile_number: string;
  whatsapp_number: string | null;
  email: string;
  nic_number: string;
  province: string | null;
  district: string | null;
  is_active: boolean;
  created_at: string;
}

interface SpRowFull extends SpRow {
  service_zone: Array<{ zone_name: string }>;
  provider_service: Array<{
    experience_level: string | null;
    description: string | null;
    main_category: { name: string } | null;
    sub_category: { name: string } | null;
  }>;
  availability: Array<{
    available_days: string;
    available_from: string | null;
    available_to: string | null;
    night_service: boolean;
  }>;
}

function toProviderProfileFull(row: SpRowFull) {
  const avRow = row.availability?.[0] ?? null;
  return {
    id: row.id,
    fullName: row.full_name,
    mobileNumber: row.mobile_number,
    whatsappNumber: row.whatsapp_number,
    email: row.email,
    nicNumber: row.nic_number,
    province: row.province,
    district: row.district,
    isActive: row.is_active,
    createdAt: new Date(row.created_at),
    serviceZones: (row.service_zone ?? []).map((z) => z.zone_name),
    services: (row.provider_service ?? [])
      .filter((s) => s.main_category && s.sub_category)
      .map((s) => ({
        mainCategory: s.main_category!.name,
        subCategory: s.sub_category!.name,
        experienceLevel: s.experience_level,
        description: s.description,
      })),
    availability: avRow
      ? {
          availableDays: avRow.available_days,
          availableFrom: avRow.available_from
            ? avRow.available_from.substring(0, 5)
            : null,
          availableTo: avRow.available_to
            ? avRow.available_to.substring(0, 5)
            : null,
          nightService: avRow.night_service,
        }
      : null,
  };
}

function parseTimeToDbTime(hhmm: string): string {
  const isValid = /^([01]\d|2[0-3]):([0-5]\d)$/.test(hhmm);
  if (!isValid) {
    throw new BadRequestException('Availability times must be in HH:mm format');
  }

  return `${hhmm}:00`;
}

function normalizeServiceDays(serviceDays: string): string[] {
  const validDays = new Set(['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']);
  const days = serviceDays
    .split(',')
    .map((d) => d.trim().toUpperCase())
    .filter(Boolean);

  if (!days.length) {
    throw new BadRequestException('serviceDays must include at least one day');
  }

  for (const day of days) {
    if (!validDays.has(day)) {
      throw new BadRequestException(
        'serviceDays must use comma-separated day codes (MON..SUN)',
      );
    }
  }

  return [...new Set(days)];
}

function toCompactServiceDays(days: string[]): string {
  const dayMap: Record<string, string> = {
    MON: 'MO',
    TUE: 'TU',
    WED: 'WE',
    THU: 'TH',
    FRI: 'FR',
    SAT: 'SA',
    SUN: 'SU',
  };

  return days.map((day) => dayMap[day]).join(',');
}

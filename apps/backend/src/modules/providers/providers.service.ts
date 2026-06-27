import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { extname } from 'path';
import { SupabaseService } from '../../shared/supabase/supabase.service';
import { RegisterProviderDto } from './dto/register-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { ProviderRegistrationResult } from './types/provider-registration.types';

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

const VERIFICATION_FIELDS: Array<{
  field: keyof ProviderDocumentFiles;
  docType: string;
}> = [
  { field: 'nicFrontImage', docType: 'NIC_FRONT' },
  { field: 'nicBackImage', docType: 'NIC_BACK' },
  { field: 'selfieImage', docType: 'OTHER' },
];

const DAY_CODE_TO_NUM: Record<string, number> = {
  SUN: 0,
  MON: 1,
  TUE: 2,
  WED: 3,
  THU: 4,
  FRI: 5,
  SAT: 6,
};

const DAY_NUM_TO_CODE: Record<number, string> = {
  0: 'SUN',
  1: 'MON',
  2: 'TUE',
  3: 'WED',
  4: 'THU',
  5: 'FRI',
  6: 'SAT',
};

@Injectable()
export class ProvidersService {
  private readonly logger = new Logger(ProvidersService.name);

  constructor(private readonly supabase: SupabaseService) {}

  async register(dto: RegisterProviderDto): Promise<ProviderRegistrationResult> {
    // ── 1. Create Supabase Auth user ─────────────────────────────────
    const { data: authData, error: authError } = await this.supabase.admin.createUser({
      email: dto.email,
      password: dto.password,
      email_confirm: true, // mobile OTP already verified the user
    });

    if (authError) {
      if (authError.message.toLowerCase().includes('already registered')) {
        throw new ConflictException('An account with this email already exists');
      }
      this.logger.error('Supabase auth user creation failed', authError);
      throw new InternalServerErrorException('Registration failed');
    }

    const authUserId: string = authData.user.id;

    // ── 2. Insert service_provider row ───────────────────────────────
    const { data: spRow, error: spError } = await this.supabase.db
      .from('service_provider')
      .insert({
        full_name: dto.fullName,
        mobile_number: dto.mobileNumber,
        whatsapp_number: dto.whatsappNumber ?? null,
        email: dto.email,
        nic_number: dto.nicNumber,
        province: dto.province ?? null,
        district: dto.district ?? null,
        is_active: false,
      })
      .select('id, full_name, mobile_number, email, nic_number, province, district, is_active, created_at')
      .single();

    if (spError) {
      await this.supabase.admin.deleteUser(authUserId);
      if (spError.code === '23505') {
        throw new ConflictException(
          'A provider with this mobile number, NIC or email already exists',
        );
      }
      this.logger.error('service_provider insert failed', spError);
      throw new InternalServerErrorException('Registration failed');
    }

    const spId: string = spRow.id;

    // ── 3. Insert related rows ───────────────────────────────────────
    try {
      if (dto.serviceZones?.length) {
        await this.insertServiceZones(spId, dto.serviceZones);
      }

      if (dto.services?.length) {
        await this.insertProviderServices(spId, dto.services);
      }

      if (dto.availability) {
        await this.insertAvailability(spId, dto.availability);
      }

      if (dto.agreements) {
        const now = new Date().toISOString();
        const { error: agError } = await this.supabase.db
          .from('provider_agreement')
          .insert({
            provider_id: spId,
            terms_accepted: dto.agreements.agreeTerms,
            terms_accepted_at: dto.agreements.agreeTerms ? now : null,
            commission_accepted: dto.agreements.agreeCommission,
            commission_accepted_at: dto.agreements.agreeCommission ? now : null,
          });

        if (agError) {
          this.logger.error('provider_agreement insert failed', agError);
          throw new InternalServerErrorException('Registration failed');
        }
      }
    } catch (err: unknown) {
      await this.supabase.db.from('service_provider').delete().eq('id', spId);
      await this.supabase.admin.deleteUser(authUserId);
      if (
        err instanceof ConflictException ||
        err instanceof InternalServerErrorException ||
        err instanceof BadRequestException
      ) {
        throw err;
      }
      throw new InternalServerErrorException('Registration failed');
    }

    // ── 4. Link provider ID into Supabase app_metadata ───────────────
    // Best-effort: allows the login flow to resolve SP-XXXXX from the auth token.
    const { error: metaError } = await this.supabase.admin.updateUserById(authUserId, {
      app_metadata: { provider_id: spId },
    });
    if (metaError) {
      this.logger.warn(`Failed to set app_metadata for auth user ${authUserId}: ${metaError.message}`);
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
  }

  async getMe(providerId: string) {
    const { data, error } = await this.supabase.db
      .from('service_provider')
      .select(
        `id, full_name, mobile_number, whatsapp_number, email, nic_number,
         province, district, is_active, created_at,
         provider_service_zone(zone_id, service_zone(zone_name)),
         provider_service(experience_level, description, main_category(name), sub_category(name)),
         provider_availability(available_from, available_to, is_24_7, is_available_now, night_service),
         provider_availability_day(day_of_week)`,
      )
      .eq('id', providerId)
      .single();

    if (error || !data) throw new NotFoundException('Provider profile not found');

    return toProviderProfileFull(data as unknown as SpRowFull);
  }

  async updateMe(providerId: string, dto: UpdateProviderDto) {
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
        .eq('id', providerId);
      if (error) {
        if (error.code === '23505') throw new ConflictException('Mobile number already in use');
        throw new InternalServerErrorException('Failed to update profile');
      }
    }

    if (dto.serviceZones !== undefined) {
      await this.supabase.db
        .from('provider_service_zone')
        .delete()
        .eq('provider_id', providerId);
      if (dto.serviceZones.length > 0) {
        await this.insertServiceZones(providerId, dto.serviceZones);
      }
    }

    if (dto.services !== undefined) {
      await this.supabase.db
        .from('provider_service')
        .delete()
        .eq('provider_id', providerId);
      if (dto.services.length > 0) {
        await this.insertProviderServices(providerId, dto.services);
      }
    }

    if (dto.availability !== undefined) {
      // CASCADE on provider_availability deletes provider_availability_day rows too
      await this.supabase.db
        .from('provider_availability')
        .delete()
        .eq('provider_id', providerId);
      await this.insertAvailability(providerId, dto.availability);
    }

    return this.getMe(providerId);
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

    // Verification docs: NIC front/back and selfie
    for (const { field, docType } of VERIFICATION_FIELDS) {
      const file = files[field]?.[0];
      if (!file) continue;

      const ext = extname(file.originalname).toLowerCase() || '.bin';
      const storagePath = `${basePath}/verification/${docType.toLowerCase()}${ext}`;

      const { error: storageError } = await this.supabase.storage
        .from(bucket)
        .upload(storagePath, file.buffer, { contentType: file.mimetype, upsert: true });

      if (storageError) {
        this.logger.error(`Storage upload failed [${docType}]: ${storageError.message}`);
        failed.push(docType);
        continue;
      }

      const { error: dbError } = await this.supabase.db.from('verification_document').insert({
        provider_id: providerId,
        doc_type: docType,
        storage_path: storagePath,
        mime_type: file.mimetype,
        original_name: file.originalname,
        status: 'PENDING',
      });

      if (dbError) {
        this.logger.error(`verification_document insert failed [${docType}]: ${dbError.message}`);
        failed.push(docType);
      } else {
        uploaded.push(docType);
      }
    }

    // Portfolio docs
    for (const file of files.portfolio ?? []) {
      const docType = resolvePortfolioDocType(file.mimetype);
      const ext = extname(file.originalname).toLowerCase() || '.bin';
      const storagePath = `${basePath}/portfolio/${Date.now()}${ext}`;

      const { error: storageError } = await this.supabase.storage
        .from(bucket)
        .upload(storagePath, file.buffer, { contentType: file.mimetype, upsert: false });

      if (storageError) {
        this.logger.error(`Storage upload failed [portfolio]: ${storageError.message}`);
        failed.push('portfolio');
        continue;
      }

      const { error: dbError } = await this.supabase.db.from('portfolio_document').insert({
        provider_id: providerId,
        doc_type: docType,
        storage_path: storagePath,
        mime_type: file.mimetype,
        original_name: file.originalname,
      });

      if (dbError) {
        this.logger.error(`portfolio_document insert failed: ${dbError.message}`);
        failed.push('portfolio');
      } else {
        uploaded.push('portfolio');
      }
    }

    return { providerId, uploaded, failed };
  }

  async findByMobile(mobileNumber: string): Promise<{ id: string } | null> {
    const { data } = await this.supabase.db
      .from('service_provider')
      .select('id')
      .eq('mobile_number', mobileNumber)
      .maybeSingle();
    return data ?? null;
  }

  async markMobileVerified(mobileNumber: string): Promise<void> {
    await this.supabase.db
      .from('service_provider')
      .update({ mobile_verified: true })
      .eq('mobile_number', mobileNumber);
  }

  // ── Private helpers ──────────────────────────────────────────────────

  private async insertServiceZones(providerId: string, zoneNames: string[]): Promise<void> {
    for (const zoneName of zoneNames) {
      const { data: zone } = await this.supabase.db
        .from('service_zone')
        .select('id')
        .eq('zone_name', zoneName)
        .maybeSingle();

      if (!zone) {
        this.logger.warn(`Zone "${zoneName}" not found in service_zone — skipping`);
        continue;
      }

      const { error } = await this.supabase.db
        .from('provider_service_zone')
        .insert({ provider_id: providerId, zone_id: zone.id });

      if (error && error.code !== '23505') {
        this.logger.error(`provider_service_zone insert failed: ${error.message}`);
        throw new InternalServerErrorException('Failed to assign service zones');
      }
    }
  }

  private async insertProviderServices(
    providerId: string,
    services: Array<{
      mainCategory: string;
      subCategory: string;
      experienceLevel?: string;
      description?: string;
    }>,
  ): Promise<void> {
    for (const svc of services) {
      const { data: mainCat } = await this.supabase.db
        .from('main_category')
        .select('id')
        .eq('name', svc.mainCategory)
        .maybeSingle();

      if (!mainCat) {
        this.logger.warn(`Main category "${svc.mainCategory}" not found — skipping`);
        continue;
      }

      const { data: subCat } = await this.supabase.db
        .from('sub_category')
        .select('id')
        .eq('name', svc.subCategory)
        .eq('main_category_id', mainCat.id)
        .maybeSingle();

      if (!subCat) {
        this.logger.warn(`Sub category "${svc.subCategory}" not found — skipping`);
        continue;
      }

      const { error } = await this.supabase.db.from('provider_service').insert({
        provider_id: providerId,
        main_category_id: mainCat.id,
        sub_category_id: subCat.id,
        experience_level: svc.experienceLevel ?? null,
        description: svc.description ?? null,
      });

      if (error && error.code !== '23505') {
        this.logger.error(`provider_service insert failed: ${error.message}`);
        throw new InternalServerErrorException('Failed to save services');
      }
    }
  }

  private async insertAvailability(
    providerId: string,
    av: {
      serviceDays: string;
      workStartTime?: string;
      workEndTime?: string;
      nightService: boolean;
    },
  ): Promise<void> {
    const dayNumbers = parseDayNumbers(av.serviceDays);

    const { error: avError } = await this.supabase.db.from('provider_availability').insert({
      provider_id: providerId,
      available_from: av.workStartTime ? `${av.workStartTime}:00` : null,
      available_to: av.workEndTime ? `${av.workEndTime}:00` : null,
      night_service: av.nightService ?? false,
      is_24_7: false,
      is_available_now: false,
    });

    if (avError) {
      this.logger.error(`provider_availability insert failed: ${avError.message}`);
      throw new InternalServerErrorException('Failed to save availability');
    }

    if (dayNumbers.length > 0) {
      const { error: dayError } = await this.supabase.db
        .from('provider_availability_day')
        .insert(dayNumbers.map((d) => ({ provider_id: providerId, day_of_week: d })));

      if (dayError) {
        this.logger.error(`provider_availability_day insert failed: ${dayError.message}`);
        throw new InternalServerErrorException('Failed to save availability days');
      }
    }
  }
}

// ── Helpers ──────────────────────────────────────────────────────────

interface SpRowFull {
  id: string;
  full_name: string;
  mobile_number: string;
  whatsapp_number: string | null;
  email: string | null;
  nic_number: string;
  province: string | null;
  district: string | null;
  is_active: boolean;
  created_at: string;
  provider_service_zone: Array<{
    zone_id: string;
    service_zone: { zone_name: string } | null;
  }>;
  provider_service: Array<{
    experience_level: string | null;
    description: string | null;
    main_category: { name: string } | null;
    sub_category: { name: string } | null;
  }>;
  provider_availability: Array<{
    available_from: string | null;
    available_to: string | null;
    is_24_7: boolean;
    is_available_now: boolean;
    night_service: boolean;
  }>;
  provider_availability_day: Array<{ day_of_week: number }>;
}

function toProviderProfileFull(row: SpRowFull) {
  const avRow = row.provider_availability?.[0] ?? null;
  const days = (row.provider_availability_day ?? []).map((d) => DAY_NUM_TO_CODE[d.day_of_week]);

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
    serviceZones: (row.provider_service_zone ?? [])
      .map((z) => z.service_zone?.zone_name)
      .filter(Boolean),
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
          availableDays: days,
          availableFrom: avRow.available_from?.substring(0, 5) ?? null,
          availableTo: avRow.available_to?.substring(0, 5) ?? null,
          is24_7: avRow.is_24_7,
          isAvailableNow: avRow.is_available_now,
          nightService: avRow.night_service,
        }
      : null,
  };
}

function parseDayNumbers(serviceDays: string): number[] {
  const validCodes = new Set(Object.keys(DAY_CODE_TO_NUM));
  const days = serviceDays
    .split(',')
    .map((d) => d.trim().toUpperCase())
    .filter(Boolean);

  if (!days.length) {
    throw new BadRequestException('serviceDays must include at least one day');
  }

  for (const day of days) {
    if (!validCodes.has(day)) {
      throw new BadRequestException(
        'serviceDays must use comma-separated codes: MON, TUE, WED, THU, FRI, SAT, SUN',
      );
    }
  }

  return [...new Set(days)].map((d) => DAY_CODE_TO_NUM[d]);
}

function resolvePortfolioDocType(mimetype: string): string {
  if (mimetype.startsWith('image/')) return 'PROJECT_PHOTO';
  if (mimetype === 'application/pdf') return 'PROJECT_PDF';
  if (mimetype === 'application/zip' || mimetype === 'application/x-zip-compressed')
    return 'PORTFOLIO_ZIP';
  return 'OTHER';
}

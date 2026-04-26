import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { SupabaseService } from '../../shared/supabase/supabase.service';
import { RegisterProviderDto } from './dto/register-provider.dto';
import { ProviderRegistrationResult } from './types/provider-registration.types';

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
      email_confirm: false,
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
}

// ── Helpers ──────────────────────────────────────────────────────

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

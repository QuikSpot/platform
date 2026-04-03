import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { SupabaseService } from '../../shared/supabase/supabase.service';
import { RegisterProviderDto } from './dto/register-provider.dto';
import { ProviderLoginDto } from './dto/provider-login.dto';
import { UpdateProviderProfileDto } from './dto/update-provider-profile.dto';
import { ProviderRegistrationResult } from './types/provider-registration.types';

@Injectable()
export class ProvidersService {
  private readonly logger = new Logger(ProvidersService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly supabase: SupabaseService,
    private readonly jwtService: JwtService,
  ) {}

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

    // ── 2. Persist everything in a single DB transaction ────────────────
    try {
      const provider = await this.prisma.$transaction(async (tx) => {
        // 2a. ServiceProvider
        const sp = await tx.serviceProvider.create({
          data: {
            id: authUserId,
            fullName: dto.fullName,
            mobileNumber: dto.mobileNumber,
            whatsappNumber: dto.whatsappNumber ?? null,
            email: dto.email,
            nicNumber: dto.nicNumber,
            province: dto.province ?? null,
            district: dto.district ?? null,
            isActive: false,
          },
          select: {
            id: true,
            fullName: true,
            mobileNumber: true,
            email: true,
            nicNumber: true,
            province: true,
            district: true,
            isActive: true,
            createdAt: true,
          },
        });

        // 2b. ServiceZones
        if (dto.serviceZones?.length) {
          await tx.serviceZone.createMany({
            data: dto.serviceZones.map((zoneName) => ({
              providerId: sp.id,
              zoneName,
            })),
          });
        }

        // 2c. ProviderService (expertise / services)
        if (dto.services?.length) {
          for (const svc of dto.services) {
            // Look up the main category by name
            const mainCat = await tx.mainCategory.findFirst({
              where: { name: svc.mainCategory },
            });
            if (!mainCat) {
              this.logger.warn(
                `Main category "${svc.mainCategory}" not found — skipping service entry`,
              );
              continue;
            }

            // Look up the sub category by name under that main category
            const subCat = await tx.subCategory.findFirst({
              where: {
                name: svc.subCategory,
                mainCategoryId: mainCat.id,
              },
            });
            if (!subCat) {
              this.logger.warn(
                `Sub category "${svc.subCategory}" under "${svc.mainCategory}" not found — skipping`,
              );
              continue;
            }

            await tx.providerService.create({
              data: {
                providerId: sp.id,
                mainCategoryId: mainCat.id,
                subCategoryId: subCat.id,
                experienceLevel: svc.experienceLevel ?? null,
                description: svc.description ?? null,
              },
            });
          }
        }

        // 2d. Availability
        if (dto.availability) {
          const av = dto.availability;
          await tx.availability.create({
            data: {
              providerId: sp.id,
              availableDays: av.serviceDays ?? null, // e.g. "MON,TUE,WED"
              availableFrom: av.workStartTime
                ? parseTimeToDate(av.workStartTime)
                : null,
              availableTo: av.workEndTime
                ? parseTimeToDate(av.workEndTime)
                : null,
              nightService: av.nightService ?? false,
              is24_7: false,
              isAvailableNow: false,
            },
          });
        }

        // 2e. ProviderAgreement
        if (dto.agreements) {
          const ag = dto.agreements;
          const now = new Date();
          await tx.providerAgreement.create({
            data: {
              providerId: sp.id,
              termsAccepted: ag.agreeTerms,
              termsAcceptedAt: ag.agreeTerms ? now : null,
              commissionAccepted: ag.agreeCommission,
              commissionAcceptedAt: ag.agreeCommission ? now : null,
            },
          });
        }

        return sp;
      });

      return provider;
    } catch (dbError: unknown) {
      await this.supabase.admin.deleteUser(authUserId);

      this.logger.error('Provider registration DB error', dbError);
      if (dbError instanceof Error) {
        this.logger.error(`Error name: ${dbError.name}`);
        this.logger.error(`Error message: ${dbError.message}`);
        this.logger.error(`Error stack: ${dbError.stack}`);
      }

      const isPrismaUniqueViolation =
        dbError instanceof Error &&
        dbError.message.includes('Unique constraint');

      if (isPrismaUniqueViolation) {
        throw new ConflictException(
          'A provider with this mobile number or NIC already exists',
        );
      }

      throw new InternalServerErrorException('Registration failed');
    }
  }

  async login(dto: ProviderLoginDto) {
    // Find provider by WhatsApp number
    const provider = await this.prisma.serviceProvider.findFirst({
      where: { whatsappNumber: dto.whatsappNumber },
    });

    if (!provider || !provider.email) {
      throw new UnauthorizedException('Invalid WhatsApp number or password');
    }

    // Verify password via Supabase
    const { error } = await this.supabase.signInWithPassword(provider.email, dto.password);

    if (error) {
      throw new UnauthorizedException('Invalid WhatsApp number or password');
    }

    // Issue our JWT
    const accessToken = this.jwtService.sign({
      sub: provider.id,
      email: provider.email,
      roles: ['provider'],
    });

    return {
      accessToken,
      provider: {
        id: provider.id,
        fullName: provider.fullName,
        email: provider.email,
        mobileNumber: provider.mobileNumber,
        whatsappNumber: provider.whatsappNumber,
        isActive: provider.isActive,
      },
    };
  }

  async getProfile(providerId: string) {
    const provider = await this.prisma.serviceProvider.findUnique({
      where: { id: providerId },
      select: {
        id: true,
        fullName: true,
        mobileNumber: true,
        whatsappNumber: true,
        email: true,
        nicNumber: true,
        isActive: true,
        createdAt: true,
      },
    });

    if (!provider) {
      throw new NotFoundException('Provider not found');
    }

    return provider;
  }

  async updateProfile(providerId: string, dto: UpdateProviderProfileDto) {
    const provider = await this.prisma.serviceProvider.findUnique({
      where: { id: providerId },
    });

    if (!provider) {
      throw new NotFoundException('Provider not found');
    }

    const updated = await this.prisma.serviceProvider.update({
      where: { id: providerId },
      data: {
        ...(dto.fullName !== undefined && { fullName: dto.fullName }),
        ...(dto.whatsappNumber !== undefined && { whatsappNumber: dto.whatsappNumber }),
        ...(dto.email !== undefined && { email: dto.email }),
      },
      select: {
        id: true,
        fullName: true,
        mobileNumber: true,
        whatsappNumber: true,
        email: true,
        nicNumber: true,
        isActive: true,
        createdAt: true,
      },
    });

    return updated;
  }
}

// ── Helpers ──────────────────────────────────────────────────────

/**
 * Convert an "HH:mm" string to a Date that Prisma can store in a `@db.Time`
 * column. The date portion is set to the Unix epoch (1970-01-01).
 */
function parseTimeToDate(hhmm: string): Date {
  const [h, m] = hhmm.split(':').map(Number);
  const d = new Date('1970-01-01T00:00:00Z');
  d.setUTCHours(h, m, 0, 0);
  return d;
}

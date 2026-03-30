import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { SupabaseService } from '../../shared/supabase/supabase.service';
import { RegisterProviderDto } from './dto/register-provider.dto';
import { ProviderRegistrationResult } from './types/provider-registration.types';

@Injectable()
export class ProvidersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly supabase: SupabaseService,
  ) {}

  async register(dto: RegisterProviderDto): Promise<ProviderRegistrationResult> {
    // 1. Create Supabase auth user — their UUID becomes the ServiceProvider PK
    const { data, error: authError } = await this.supabase.admin.createUser({
      email: dto.email,
      password: dto.password,
      email_confirm: false,
      user_metadata: { full_name: dto.fullName },
    });

    if (authError) {
      // Supabase returns a 422 when the email is already registered
      if (authError.status === 422 || authError.message?.toLowerCase().includes('already')) {
        throw new ConflictException('An account with this email already exists');
      }
      throw new InternalServerErrorException('Failed to create auth account');
    }

    const authUserId = data.user.id;

    // 2. Persist ServiceProvider in the database using the same UUID
    try {
      const provider = await this.prisma.serviceProvider.create({
        data: {
          id: authUserId,
          fullName: dto.fullName,
          mobileNumber: dto.mobileNumber,
          whatsappNumber: dto.whatsappNumber ?? null,
          email: dto.email,
          nicNumber: dto.nicNumber,
          isActive: false,
        },
        select: {
          id: true,
          fullName: true,
          mobileNumber: true,
          email: true,
          nicNumber: true,
          isActive: true,
          createdAt: true,
        },
      });

      return provider;
    } catch (dbError: unknown) {
      // Roll back the Supabase user so auth and DB stay in sync
      await this.supabase.admin.deleteUser(authUserId);

      const isPrismaUniqueViolation =
        dbError instanceof Error && dbError.message.includes('Unique constraint');

      if (isPrismaUniqueViolation) {
        throw new ConflictException(
          'A provider with this mobile number or NIC already exists',
        );
      }

      throw new InternalServerErrorException('Registration failed');
    }
  }
}

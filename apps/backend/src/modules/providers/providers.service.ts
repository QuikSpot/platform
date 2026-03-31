import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
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
  constructor(
    private readonly prisma: PrismaService,
    private readonly supabase: SupabaseService,
    private readonly jwtService: JwtService,
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
      if (authError.status === 422 || authError.message?.toLowerCase().includes('already')) {
        throw new ConflictException('An account with this email already exists');
      }
      throw new InternalServerErrorException('Failed to create auth account');
    }

    const authUserId = data.user.id;

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

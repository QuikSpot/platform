import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

// ── Enums ──────────────────────────────────────────────────────

export enum ExperienceLevelDto {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  EXPERT = 'EXPERT',
}

// ── Nested DTOs ────────────────────────────────────────────────

export class ServiceDto {
  @IsNotEmpty()
  @IsString()
  mainCategory: string;

  @IsNotEmpty()
  @IsString()
  subCategory: string;

  @IsOptional()
  @IsEnum(ExperienceLevelDto)
  experienceLevel?: ExperienceLevelDto;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;
}

export class AvailabilityDto {
  @IsBoolean()
  nightService: boolean;

  /** Comma-separated day codes, e.g. "MON,TUE,WED" */
  @IsNotEmpty()
  @IsString()
  serviceDays: string;

  /** HH:mm format */
  @IsOptional()
  @IsString()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: 'workStartTime must be in HH:mm format',
  })
  workStartTime?: string;

  /** HH:mm format */
  @IsOptional()
  @IsString()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: 'workEndTime must be in HH:mm format',
  })
  workEndTime?: string;
}

export class AgreementsDto {
  @IsBoolean()
  agreeTerms: boolean;

  @IsBoolean()
  agreeCommission: boolean;
}

// ── Main DTO ───────────────────────────────────────────────────

export class RegisterProviderDto {
  // ─── Personal ────────────────────────────────────────────────
  @IsNotEmpty()
  @IsString()
  @MaxLength(150)
  fullName: string;

  /** Sri Lankan mobile: 07XXXXXXXX */
  @IsNotEmpty()
  @Matches(/^07[0-9]{8}$/, {
    message: 'Mobile number must be a valid Sri Lankan number (07XXXXXXXX)',
  })
  mobileNumber: string;

  @IsOptional()
  @Matches(/^07[0-9]{8}$/, {
    message: 'WhatsApp number must be a valid Sri Lankan number',
  })
  whatsappNumber?: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(150)
  email: string;

  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  password: string;

  /** Old NIC: 9 digits + V/X, New NIC: 12 digits */
  @IsNotEmpty()
  @Matches(/^([0-9]{9}[vVxX]|[0-9]{12})$/, { message: 'Invalid NIC format' })
  nicNumber: string;

  // ─── Location ────────────────────────────────────────────────
  @IsOptional()
  @IsString()
  @MaxLength(100)
  province?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  district?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  serviceZones?: string[];

  // ─── Services / Expertise ────────────────────────────────────
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ServiceDto)
  services?: ServiceDto[];

  // ─── Availability ────────────────────────────────────────────
  @IsOptional()
  @ValidateNested()
  @Type(() => AvailabilityDto)
  availability?: AvailabilityDto;

  // ─── Agreements ──────────────────────────────────────────────
  @IsOptional()
  @ValidateNested()
  @Type(() => AgreementsDto)
  agreements?: AgreementsDto;
}
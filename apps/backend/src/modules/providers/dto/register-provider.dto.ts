import { Type } from 'class-transformer';
import {
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

export enum ExperienceLevelDto {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  EXPERT = 'EXPERT',
}

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

  /** Comma-separated day codes e.g. "MON,TUE,WED" */
  @IsNotEmpty()
  @IsString()
  serviceDays: string;

  /** HH:mm */
  @IsOptional()
  @IsString()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'workStartTime must be HH:mm' })
  workStartTime?: string;

  /** HH:mm */
  @IsOptional()
  @IsString()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'workEndTime must be HH:mm' })
  workEndTime?: string;
}

export class AgreementsDto {
  @IsBoolean()
  agreeTerms: boolean;

  @IsBoolean()
  agreeCommission: boolean;
}

export class RegisterProviderDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(150)
  fullName: string;

  @IsNotEmpty()
  @Matches(/^07[0-9]{8}$/, { message: 'Mobile number must be a valid Sri Lankan number (07XXXXXXXX)' })
  mobileNumber: string;

  @IsOptional()
  @Matches(/^07[0-9]{8}$/, { message: 'WhatsApp number must be a valid Sri Lankan number' })
  whatsappNumber?: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(254)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  password: string;

  /** Old NIC: 9 digits + V/X  |  New NIC: 12 digits */
  @IsNotEmpty()
  @Matches(/^([0-9]{9}[vVxX]|[0-9]{12})$/, { message: 'Invalid NIC format' })
  nicNumber: string;

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

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ServiceDto)
  services?: ServiceDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => AvailabilityDto)
  availability?: AvailabilityDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => AgreementsDto)
  agreements?: AgreementsDto;
}

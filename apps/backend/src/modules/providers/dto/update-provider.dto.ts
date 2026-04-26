import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  ValidateNested,
} from 'class-validator';

export class UpdateServiceDto {
  @IsNotEmpty()
  @IsString()
  mainCategory: string;

  @IsNotEmpty()
  @IsString()
  subCategory: string;

  @IsOptional()
  @IsEnum(['BEGINNER', 'INTERMEDIATE', 'EXPERT'], {
    message: 'experienceLevel must be BEGINNER, INTERMEDIATE, or EXPERT',
  })
  experienceLevel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;
}

export class UpdateAvailabilityDto {
  @IsBoolean()
  nightService: boolean;

  @IsNotEmpty()
  @IsString()
  serviceDays: string;

  @IsOptional()
  @IsString()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: 'workStartTime must be in HH:mm format',
  })
  workStartTime?: string;

  @IsOptional()
  @IsString()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: 'workEndTime must be in HH:mm format',
  })
  workEndTime?: string;
}

export class UpdateProviderDto {
  @IsOptional()
  @IsString()
  @MaxLength(150)
  fullName?: string;

  @IsOptional()
  @Matches(/^07[0-9]{8}$/, {
    message: 'Mobile number must be a valid Sri Lankan number (07XXXXXXXX)',
  })
  mobileNumber?: string;

  @IsOptional()
  @Matches(/^07[0-9]{8}$/, {
    message: 'WhatsApp number must be a valid Sri Lankan number',
  })
  whatsappNumber?: string;

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
  @Type(() => UpdateServiceDto)
  services?: UpdateServiceDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateAvailabilityDto)
  availability?: UpdateAvailabilityDto;
}

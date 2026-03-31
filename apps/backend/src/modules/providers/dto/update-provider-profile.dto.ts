import { IsEmail, IsOptional, IsString, Matches, MaxLength } from 'class-validator';

export class UpdateProviderProfileDto {
  @IsOptional()
  @IsString()
  @MaxLength(150)
  fullName?: string;

  @IsOptional()
  @Matches(/^07[0-9]{8}$/, {
    message: 'WhatsApp number must be a valid Sri Lankan number (07XXXXXXXX)',
  })
  whatsappNumber?: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(150)
  email?: string;
}

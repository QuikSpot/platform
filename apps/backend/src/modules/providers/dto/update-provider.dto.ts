import { IsOptional, IsString, Matches, MaxLength } from 'class-validator';

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
}

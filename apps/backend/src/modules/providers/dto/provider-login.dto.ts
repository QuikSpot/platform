import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class ProviderLoginDto {
  // Sri Lankan mobile: 07XXXXXXXX
  @IsNotEmpty()
  @Matches(/^07[0-9]{8}$/, {
    message: 'WhatsApp number must be a valid Sri Lankan number (07XXXXXXXX)',
  })
  whatsappNumber: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  password: string;
}

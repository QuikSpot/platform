import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterProviderDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(150)
  fullName: string;

  // Sri Lankan mobile: 07XXXXXXXX
  @IsNotEmpty()
  @Matches(/^07[0-9]{8}$/, { message: 'Mobile number must be a valid Sri Lankan number (07XXXXXXXX)' })
  mobileNumber: string;

  @IsOptional()
  @Matches(/^07[0-9]{8}$/, { message: 'WhatsApp number must be a valid Sri Lankan number' })
  whatsappNumber?: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(150)
  email: string;

  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  password: string;

  // Old NIC: 9 digits + V/X, New NIC: 12 digits
  @IsNotEmpty()
  @Matches(/^([0-9]{9}[vVxX]|[0-9]{12})$/, { message: 'Invalid NIC format' })
  nicNumber: string;
}
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class VerifyOtpDto {
  @IsString()
  @IsNotEmpty()
  mobileNumber: string;

  @IsString()
  @Length(6, 6)
  code: string;
}

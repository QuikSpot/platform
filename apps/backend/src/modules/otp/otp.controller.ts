import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { SendOtpDto } from './dto/send-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { OtpService } from './otp.service';

@Controller('otp')
export class OtpController {
  constructor(private readonly otpService: OtpService) {}

  @Public()
  @Post('send')
  @HttpCode(HttpStatus.OK)
  async send(@Body() dto: SendOtpDto) {
    await this.otpService.send(dto.mobileNumber);
    return { message: 'OTP sent successfully' };
  }

  @Public()
  @Post('verify')
  @HttpCode(HttpStatus.OK)
  verify(@Body() dto: VerifyOtpDto) {
    this.otpService.verify(dto.mobileNumber, dto.code);
    return { message: 'Phone number verified successfully' };
  }
}

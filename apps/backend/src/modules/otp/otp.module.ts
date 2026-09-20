import { Module } from '@nestjs/common';
import { ConfigModule } from '../../config/config.module';
import { ProvidersModule } from '../providers/providers.module';
import { AuthModule } from '../auth/auth.module';
import { OtpController } from './otp.controller';
import { OtpService } from './otp.service';

@Module({
  imports: [ConfigModule, AuthModule, ProvidersModule],
  controllers: [OtpController],
  providers: [OtpService],
})
export class OtpModule {}

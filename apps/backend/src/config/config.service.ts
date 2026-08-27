import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly config: ConfigService) {}

  get nodeEnv(): string {
    return this.config.get<string>('NODE_ENV', 'development');
  }

  get port(): number {
    return this.config.get<number>('PORT', 3001);
  }

  get jwtSecret(): string {
    return this.config.getOrThrow<string>('JWT_SECRET');
  }

  get jwtExpiresIn(): string {
    return this.config.get<string>('JWT_EXPIRES_IN', '7d');
  }

  get appName(): string {
    return this.config.get<string>('APP_NAME', 'instaFixd');
  }

  get isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  /** Lets local/dev environments verify OTPs with a fixed '000000' code instead of a real SMS.
   *  Must be explicitly opted into via env — never true by default, and ignored outside production
   *  as a second guard (see OtpService). */
  get isOtpDevBypassEnabled(): boolean {
    return this.config.get<boolean>('OTP_DEV_BYPASS_ENABLED', false);
  }
}

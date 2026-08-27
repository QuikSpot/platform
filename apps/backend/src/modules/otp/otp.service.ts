import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AppConfigService } from '../../config/config.service';
import { ProvidersService } from '../providers/providers.service';

/** Fixed code accepted in place of a real OTP when AppConfigService.isOtpDevBypassEnabled is on. */
const DEV_BYPASS_CODE = '000000';

interface OtpEntry {
  code: string;
  expiresAt: number;
  attempts: number;
}

const OTP_TTL_MS = 5 * 60 * 1000;
const MAX_ATTEMPTS = 5;

@Injectable()
export class OtpService {
  private readonly logger = new Logger(OtpService.name);
  private readonly store = new Map<string, OtpEntry>();

  constructor(
    private readonly config: ConfigService,
    private readonly appConfig: AppConfigService,
    private readonly jwtService: JwtService,
    private readonly providersService: ProvidersService,
  ) {}

  async send(mobileNumber: string): Promise<void> {
    const normalized = this.normalizeMobile(mobileNumber);
    const code = this.generateCode();

    this.store.set(normalized, {
      code,
      expiresAt: Date.now() + OTP_TTL_MS,
      attempts: 0,
    });

    await this.callTextLk(normalized, code);
  }

  async verifyAndLogin(
    mobileNumber: string,
    code: string,
  ): Promise<{ verified: boolean; accessToken?: string; providerId?: string }> {
    const normalized = this.normalizeMobile(mobileNumber);
    this.verifyCode(normalized, code);

    // Mark mobile as verified and look up the provider
    await this.providersService.markMobileVerified(mobileNumber);
    const provider = await this.providersService.findByMobile(mobileNumber);

    if (!provider) {
      // Phone verified but no account yet — frontend should prompt registration
      return { verified: true };
    }

    const accessToken = this.jwtService.sign({
      sub: provider.id,
      mobileNumber,
      roles: ['provider'],
    });

    return { verified: true, accessToken, providerId: provider.id };
  }

  private verifyCode(normalized: string, code: string): void {
    // Dev-only shortcut so local testing doesn't need a real SMS round-trip each time.
    // Double-gated: the env flag must be explicitly on, AND we must not be in production,
    // so a misconfigured flag in prod can never bypass real verification.
    if (code === DEV_BYPASS_CODE && this.appConfig.isOtpDevBypassEnabled && !this.appConfig.isProduction) {
      this.logger.warn(`[OTP] Dev bypass code used for ${normalized}`);
      this.store.delete(normalized);
      return;
    }

    const entry = this.store.get(normalized);

    if (!entry) {
      throw new BadRequestException('OTP not found. Please request a new one.');
    }
    if (Date.now() > entry.expiresAt) {
      this.store.delete(normalized);
      throw new BadRequestException(
        'OTP has expired. Please request a new one.',
      );
    }
    if (entry.attempts >= MAX_ATTEMPTS) {
      this.store.delete(normalized);
      throw new BadRequestException(
        'Too many attempts. Please request a new OTP.',
      );
    }

    entry.attempts++;

    if (entry.code !== code) {
      throw new BadRequestException('Incorrect OTP. Please try again.');
    }

    this.store.delete(normalized);
  }

  private generateCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  private normalizeMobile(mobile: string): string {
    let m = mobile.replace(/\s+/g, '').replace(/[^0-9+]/g, '');
    if (m.startsWith('+')) m = m.slice(1);
    if (m.startsWith('0')) m = '94' + m.slice(1);
    return m;
  }

  private async callTextLk(recipient: string, code: string): Promise<void> {
    const apiKey = this.config.get<string>('TEXT_LK_API_KEY');

    if (!apiKey) {
      this.logger.warn(
        `[OTP] TEXT_LK_API_KEY not set —  skipping SMS. Code for ${recipient}: ${code}`,
      );
      return;
    }

    const res = await fetch('https://app.text.lk/api/v3/sms/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        recipient,
        sender_id: 'TextLKDemo',
        type: 'plain',
        message: `Your Instafixd verification code is: ${code}. Valid for 5 minutes. Do not share this code.`,
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      this.logger.error(`[OTP] text.lk error ${res.status}: ${text}`);
      throw new InternalServerErrorException(
        'Failed to send OTP. Please try again.',
      );
    }
  }
}

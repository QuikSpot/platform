import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { SupabaseService } from '../../../shared/supabase/supabase.service';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private readonly reflector: Reflector,
    private readonly supabaseService: SupabaseService,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    // Two kinds of bearer token reach this guard: our own JWT (signed with JWT_SECRET, issued
    // by the OTP-login flow) and a Supabase session token (issued by supabase.auth.signInWithPassword
    // for the email/password login flow). They're signed with different secrets, so passport-jwt
    // below can only ever verify the former — a Supabase token has to be checked with Supabase
    // itself first, or every email/password login fails with 401 regardless of credentials.
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractBearerToken(request);

    if (token) {
      const supabaseUser = await this.supabaseService.verifyToken(token);
      if (supabaseUser) {
        const providerId = supabaseUser.app_metadata?.provider_id;
        if (!providerId) {
          throw new UnauthorizedException('No provider account is linked to this login');
        }
        request.user = { id: providerId, email: supabaseUser.email, roles: ['provider'] };
        return true;
      }
    }

    return super.canActivate(context) as Promise<boolean>;
  }

  private extractBearerToken(request: Request): string | null {
    const header = request.headers.authorization;
    if (!header?.startsWith('Bearer ')) return null;
    return header.slice(7);
  }
}

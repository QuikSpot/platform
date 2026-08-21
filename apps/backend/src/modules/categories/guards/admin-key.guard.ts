import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';

/**
 * Gates the category-management write endpoints with a shared secret instead of the normal
 * provider JWT flow — there's no admin-user concept in this app, and these endpoints are only
 * reachable via an unlisted frontend path anyway. Set ADMIN_API_KEY in the backend's .env and
 * send it back as the "x-admin-key" header.
 */
@Injectable()
export class AdminKeyGuard implements CanActivate {
  constructor(private readonly config: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const providedKey = request.headers['x-admin-key'];
    const expectedKey = this.config.get<string>('ADMIN_API_KEY');

    if (!expectedKey) {
      throw new ForbiddenException('Category management is not configured on this server');
    }
    if (providedKey !== expectedKey) {
      throw new ForbiddenException('Invalid admin key');
    }
    return true;
  }
}

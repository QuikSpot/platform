import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private client: SupabaseClient;

  constructor(private config: ConfigService) {
    this.client = createClient(
      this.config.getOrThrow<string>('SUPABASE_URL'),
      this.config.getOrThrow<string>('SUPABASE_SERVICE_ROLE_KEY'),
    );
  }

  get admin() {
    return this.client.auth.admin;
  }

  get db() {
    return this.client;
  }

  get storage(): SupabaseClient['storage'] {
    return this.client.storage;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async verifyToken(token: string): Promise<Record<string, any> | null> {
    try {
      const { data, error } = await this.client.auth.getUser(token);
      if (error || !data?.user) return null;
      return data.user as Record<string, any>;
    } catch {
      return null;
    }
  }
}
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private adminClient: SupabaseClient;
  private anonClient: SupabaseClient;

  constructor(private config: ConfigService) {
    const url = this.config.getOrThrow<string>('SUPABASE_URL');

    this.adminClient = createClient(
      url,
      this.config.getOrThrow<string>('SUPABASE_SERVICE_ROLE_KEY'),
    );

    this.anonClient = createClient(
      url,
      this.config.getOrThrow<string>('SUPABASE_ANON_KEY'),
    );
  }

  get admin() {
    return this.adminClient.auth.admin;
  }

  async signInWithPassword(email: string, password: string) {
    return this.anonClient.auth.signInWithPassword({ email, password });
  }
}
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from '../../shared/supabase/supabase.service';

@Injectable()
export class LocationsService {
  constructor(private readonly supabase: SupabaseService) {}

  async getProvinces(): Promise<{ id: string; name: string }[]> {
    const { data, error } = await this.supabase.db
      .from('province')
      .select('id, name')
      .eq('is_active', true)
      .order('name', { ascending: true });

    if (error) throw new InternalServerErrorException('Failed to load provinces');
    return data ?? [];
  }

  async getDistricts(provinceId: string): Promise<{ id: string; name: string }[]> {
    const { data, error } = await this.supabase.db
      .from('district')
      .select('id, name')
      .eq('province_id', provinceId)
      .eq('is_active', true)
      .order('name', { ascending: true });

    if (error) throw new InternalServerErrorException('Failed to load districts');
    return data ?? [];
  }

  async getZones(districtId: string): Promise<{ id: string; zone_name: string }[]> {
    const { data, error } = await this.supabase.db
      .from('service_zone')
      .select('id, zone_name')
      .eq('district_id', districtId)
      .eq('is_active', true)
      .order('zone_name', { ascending: true });

    if (error) throw new InternalServerErrorException('Failed to load service zones');
    return data ?? [];
  }
}

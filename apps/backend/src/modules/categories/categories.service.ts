import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from '../../shared/supabase/supabase.service';

export interface SubCategoryDto {
  id: string;
  name: string;
}

export interface MainCategoryDto {
  id: string;
  name: string;
  iconUrl: string | null;
  subCategories: SubCategoryDto[];
}

@Injectable()
export class CategoriesService {
  constructor(private readonly supabase: SupabaseService) {}

  async getAll(): Promise<MainCategoryDto[]> {
    const { data, error } = await this.supabase.db
      .from('main_category')
      .select('id, name, icon_url, sub_category(id, name)')
      .eq('is_active', true)
      .eq('sub_category.is_active', true)
      .order('name', { ascending: true });

    if (error) throw new InternalServerErrorException('Failed to load categories');

    return (data ?? []).map((row) => ({
      id: row.id,
      name: row.name,
      iconUrl: row.icon_url ?? null,
      subCategories: ((row.sub_category as SubCategoryDto[]) ?? [])
        .map((s) => ({ id: s.id, name: s.name }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }
}

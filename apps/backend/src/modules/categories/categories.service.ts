import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { SupabaseService } from '../../shared/supabase/supabase.service';
import { CreateMainCategoryDto } from './dto/create-main-category.dto';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';

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

  async createMainCategory(dto: CreateMainCategoryDto): Promise<MainCategoryDto> {
    const id = await this.nextId('main_category', 'CAT', 2);

    const { data, error } = await this.supabase.db
      .from('main_category')
      .insert({ id, name: dto.name, icon_url: dto.iconUrl ?? null, is_active: true })
      .select('id, name, icon_url')
      .single();

    if (error) throw this.categoryInsertError(error, 'category');

    return { id: data.id, name: data.name, iconUrl: data.icon_url ?? null, subCategories: [] };
  }

  async createSubCategory(
    mainCategoryId: string,
    dto: CreateSubCategoryDto,
  ): Promise<SubCategoryDto> {
    const { data: mainCat } = await this.supabase.db
      .from('main_category')
      .select('id')
      .eq('id', mainCategoryId)
      .maybeSingle();

    if (!mainCat) throw new NotFoundException('Main category not found');

    const id = await this.nextId('sub_category', 'SUB', 3);

    const { data, error } = await this.supabase.db
      .from('sub_category')
      .insert({ id, name: dto.name, main_category_id: mainCategoryId, is_active: true })
      .select('id, name')
      .single();

    if (error) throw this.categoryInsertError(error, 'sub-category');

    return { id: data.id, name: data.name };
  }

  /**
   * main_category/sub_category use hand-formatted ids ("CAT-07", "SUB-065") instead of an
   * auto-generated column default, so inserts have to compute and supply the next one
   * themselves — omitting id falls back to a stale default that every insert collides on.
   */
  private async nextId(
    table: 'main_category' | 'sub_category',
    prefix: string,
    width: number,
  ): Promise<string> {
    const { data } = await this.supabase.db.from(table).select('id');
    const pattern = new RegExp(`^${prefix}-(\\d+)$`);

    const maxNum = (data ?? []).reduce((max: number, row: { id: string }) => {
      const match = pattern.exec(row.id);
      return match ? Math.max(max, parseInt(match[1], 10)) : max;
    }, 0);

    return `${prefix}-${String(maxNum + 1).padStart(width, '0')}`;
  }

  /** Distinguishes a genuine name clash from the rare id-generation race (two inserts computing
   * the same "next" id concurrently) so the error message doesn't blame the wrong field. */
  private categoryInsertError(
    error: { code?: string; details?: string | null },
    label: string,
  ): ConflictException | InternalServerErrorException {
    if (error.code === '23505') {
      if (error.details?.includes('(id)')) {
        return new ConflictException(`Two ${label} inserts collided — please try again`);
      }
      return new ConflictException(`A ${label} with this name already exists`);
    }
    return new InternalServerErrorException(`Failed to create ${label}`);
  }
}

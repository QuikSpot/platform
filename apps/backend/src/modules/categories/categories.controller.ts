import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { CategoriesService } from './categories.service';
import { CreateMainCategoryDto } from './dto/create-main-category.dto';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Public()
  @Get()
  getAll() {
    return this.categoriesService.getAll();
  }

  /** TODO: unprotected for now (admin-key gating removed at request) — this is only reachable
   * via an unlisted frontend page, but re-add AdminKeyGuard (see ./guards/admin-key.guard.ts)
   * before this is depended on for anything real. */
  @Public()
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createMainCategory(@Body() dto: CreateMainCategoryDto) {
    return this.categoriesService.createMainCategory(dto);
  }

  @Public()
  @Post(':mainCategoryId/sub-categories')
  @HttpCode(HttpStatus.CREATED)
  createSubCategory(
    @Param('mainCategoryId') mainCategoryId: string,
    @Body() dto: CreateSubCategoryDto,
  ) {
    return this.categoriesService.createSubCategory(mainCategoryId, dto);
  }
}

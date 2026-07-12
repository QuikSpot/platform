import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { AiService } from './ai.service';
import { PredictCategoryDto } from './dto/predict-category.dto';
import { ImproveTextDto } from './dto/improve-text.dto';

@Public()
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('predict-category')
  @HttpCode(HttpStatus.OK)
  predictCategory(@Body() dto: PredictCategoryDto) {
    return this.aiService.predictCategory(dto.query);
  }

  @Post('improve-text')
  @HttpCode(HttpStatus.OK)
  improveText(@Body() dto: ImproveTextDto) {
    return this.aiService.improveText(dto.text);
  }
}

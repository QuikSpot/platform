import { IsNotEmpty, IsString } from 'class-validator';

export class PredictCategoryDto {
  @IsString()
  @IsNotEmpty()
  query: string;
}

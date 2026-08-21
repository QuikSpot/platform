import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSubCategoryDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;
}

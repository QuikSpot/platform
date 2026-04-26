import { IsNotEmpty, IsUUID } from 'class-validator';

export class UploadDocumentsDto {
  @IsNotEmpty()
  @IsUUID(4, { message: 'providerId must be a valid UUID' })
  providerId: string;
}

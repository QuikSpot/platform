import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class UploadDocumentsDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^SP-\d{5}$/, { message: 'providerId must be a valid provider ID (e.g. SP-00001)' })
  providerId: string;
}

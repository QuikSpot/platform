import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsIn,
  IsNotEmpty,
  IsString,
  Matches,
  ValidateNested,
} from 'class-validator';
import { ALLOWED_DOCUMENT_MIME_TYPES, DOCUMENT_CATEGORIES } from './sign-document.dto';
import type { DocumentCategory } from './sign-document.dto';

export class ConfirmedDocumentDto {
  @IsIn(DOCUMENT_CATEGORIES)
  category: DocumentCategory;

  /** Storage path returned by the earlier /documents/sign call */
  @IsNotEmpty()
  @IsString()
  storagePath: string;

  @IsIn(ALLOWED_DOCUMENT_MIME_TYPES, { message: 'Unsupported file type' })
  mimeType: string;

  @IsNotEmpty()
  @IsString()
  originalName: string;
}

export class ConfirmDocumentsDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^SP-\d{5}$/, { message: 'providerId must be a valid provider ID (e.g. SP-00001)' })
  providerId: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ConfirmedDocumentDto)
  documents: ConfirmedDocumentDto[];
}

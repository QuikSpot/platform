import { IsIn, IsNotEmpty, IsString, Matches } from 'class-validator';

export const DOCUMENT_CATEGORIES = ['NIC_FRONT', 'NIC_BACK', 'SELFIE', 'PORTFOLIO'] as const;
export type DocumentCategory = (typeof DOCUMENT_CATEGORIES)[number];

export const ALLOWED_DOCUMENT_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'application/pdf',
  'application/zip',
  'application/x-zip-compressed',
];

export class SignDocumentDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^SP-\d{5}$/, { message: 'providerId must be a valid provider ID (e.g. SP-00001)' })
  providerId: string;

  @IsIn(DOCUMENT_CATEGORIES)
  category: DocumentCategory;

  /** Original filename — only used to derive the storage file extension */
  @IsNotEmpty()
  @IsString()
  fileName: string;

  @IsIn(ALLOWED_DOCUMENT_MIME_TYPES, { message: 'Unsupported file type' })
  mimeType: string;
}

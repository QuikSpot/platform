import { supabase } from '@/lib/supabase';

export type DocumentCategory = 'NIC_FRONT' | 'NIC_BACK' | 'SELFIE' | 'PORTFOLIO';

export interface ConfirmedDocument {
  category: DocumentCategory;
  storagePath: string;
  mimeType: string;
  originalName: string;
}

const DOCUMENTS_BUCKET = 'private-documents';

/**
 * Uploads a provider verification/portfolio file straight to Supabase Storage using a
 * short-lived signed URL from the backend, instead of sending the file through our own
 * API. Vercel Serverless Functions cap request bodies at ~4.5MB platform-wide — routing
 * these files through the backend hit that ceiling in production (worked locally only
 * because local dev has no such proxy limit).
 */
export async function uploadProviderDocument(
  backendUrl: string | undefined,
  providerId: string,
  category: DocumentCategory,
  file: File,
): Promise<ConfirmedDocument> {
  const signRes = await fetch(`${backendUrl}/api/v1/provider/documents/sign`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ providerId, category, fileName: file.name, mimeType: file.type }),
  });

  if (!signRes.ok) {
    const body = await signRes.json().catch(() => ({}));
    throw new Error((body as { message?: string }).message ?? `Failed to prepare upload for ${category}`);
  }

  const { data } = (await signRes.json()) as { data: { path: string; token: string } };

  const { error: uploadError } = await supabase.storage
    .from(DOCUMENTS_BUCKET)
    .uploadToSignedUrl(data.path, data.token, file, { contentType: file.type });

  if (uploadError) {
    throw new Error(`Upload failed for ${category}: ${uploadError.message}`);
  }

  return { category, storagePath: data.path, mimeType: file.type, originalName: file.name };
}

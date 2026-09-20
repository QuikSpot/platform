'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { CheckCircle2, FileText, IdCard, ShieldCheck, Upload, User, X } from 'lucide-react';
import { Checkbox, Field } from './fields';

interface VerificationStepProps {
  values: {
    nicFrontImage: File | null;
    nicBackImage: File | null;
    selfieImage: File | null;
    portfolio: File | null;
    agreeTerms: boolean;
    agreeCommission: boolean;
  };
  errors: Record<string, string>;
  onChange: <K extends keyof VerificationStepProps['values']>(key: K, value: VerificationStepProps['values'][K]) => void;
  onSubmit: () => void;
}

interface FileSlotProps {
  label: string;
  description: string;
  file: File | null;
  error?: string;
  accept: string;
  icon: React.ReactNode;
  onChange: (f: File | null) => void;
}

function FileSlot({ label, description, file, error, accept, icon, onChange }: FileSlotProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Build preview URL for images when a file is chosen
  if (file && !previewUrl && file.type.startsWith('image/')) {
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  }
  if (!file && previewUrl) {
    URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
  }

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className={`w-full text-left rounded-2xl border-2 border-dashed transition-colors p-3.5 ${
          error
            ? 'border-red-300 bg-red-50/30'
            : file
              ? 'border-emerald-300 bg-emerald-50/30'
              : 'border-slate-200 bg-white hover:border-[#1aae74] hover:bg-emerald-50/20'
        }`}
      >
        <div className="flex items-start gap-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
              file ? 'bg-[#1aae74] text-white' : 'bg-slate-100 text-slate-500'
            }`}
          >
            {file ? <CheckCircle2 className="w-4.5 h-4.5" /> : icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-900 text-sm">{label}</p>
            <p className="text-xs text-slate-500 mt-0.5">{description}</p>
            {file && (
              <p className="text-xs text-[#1aae74] mt-1.5 font-medium flex items-center gap-1.5">
                <span className="truncate max-w-[180px]">{file.name}</span>
                <span className="text-slate-400 font-normal">· {formatSize(file.size)}</span>
              </p>
            )}
          </div>
          {file ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange(null);
              }}
              className="flex-shrink-0 w-7 h-7 rounded-full hover:bg-white/80 flex items-center justify-center text-slate-500 hover:text-red-500 transition-colors"
              aria-label={`Remove ${label}`}
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <Upload className="w-4 h-4 text-slate-400 flex-shrink-0" />
          )}
        </div>

        {previewUrl && (
          <div className="mt-3 rounded-xl overflow-hidden border border-slate-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={previewUrl} alt="" className="w-full h-28 object-cover" />
          </div>
        )}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.files?.[0] ?? null)}
      />
      {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
    </div>
  );
}

export function VerificationStep({ values, errors, onChange }: VerificationStepProps) {
  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-3 flex items-start gap-3">
        <ShieldCheck className="w-4.5 h-4.5 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-amber-900">
          Files are encrypted and used only for verification.
        </p>
      </div>

      <Field label="National ID (NIC)" required>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
          <FileSlot
            label="NIC — Front"
            description="Clear photo of the front side"
            file={values.nicFrontImage}
            error={errors.nicFrontImage}
            accept="image/*"
            icon={<IdCard className="w-4.5 h-4.5" />}
            onChange={(f) => onChange('nicFrontImage', f)}
          />
          <FileSlot
            label="NIC — Back"
            description="Clear photo of the back side"
            file={values.nicBackImage}
            error={errors.nicBackImage}
            accept="image/*"
            icon={<IdCard className="w-4.5 h-4.5" />}
            onChange={(f) => onChange('nicBackImage', f)}
          />
        </div>
      </Field>

      <Field label="Verification selfie" required>
        <FileSlot
          label="Selfie holding your NIC"
          description="Face and NIC clearly visible"
          file={values.selfieImage}
          error={errors.selfieImage}
          accept="image/*"
          icon={<User className="w-4.5 h-4.5" />}
          onChange={(f) => onChange('selfieImage', f)}
        />
      </Field>

      <Field label="Portfolio" optional hint="PDF, ZIP, or images. Recommended.">
        <FileSlot
          label="Past work / portfolio"
          description="Optional"
          file={values.portfolio}
          error={errors.portfolio}
          accept=".zip,.pdf,image/*"
          icon={<FileText className="w-4.5 h-4.5" />}
          onChange={(f) => onChange('portfolio', f)}
        />
      </Field>

      <div className="space-y-2.5 pt-4 border-t border-slate-200">
        <Field error={errors.agreeTerms}>
          <Checkbox
            checked={values.agreeTerms}
            onChange={(v) => onChange('agreeTerms', v)}
            label="I agree to the Terms & Conditions"
          />
        </Field>
        <Field error={errors.agreeCommission}>
          <Checkbox
            checked={values.agreeCommission}
            onChange={(v) => onChange('agreeCommission', v)}
            label="I acknowledge the 10% platform commission"
          />
        </Field>
      </div>
    </div>
  );
}

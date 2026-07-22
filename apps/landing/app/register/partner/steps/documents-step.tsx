'use client';

import { Camera, UserRound, Upload } from 'lucide-react';
import type { BaseStepProps } from '../types';

const TILES = [
  { key: 'nicFrontImage' as const, icon: Camera, label: 'NIC Front Side', sub: 'Clear photo of the front', accept: 'image/*' },
  { key: 'nicBackImage' as const, icon: Camera, label: 'NIC Back Side', sub: 'Clear photo of the back', accept: 'image/*' },
  { key: 'selfieImage' as const, icon: UserRound, label: 'Verification Selfie', sub: 'Holding your ID card', accept: 'image/*' },
  { key: 'portfolio' as const, icon: Upload, label: 'Portfolio / Work', sub: 'Past project photos (optional)', accept: '.zip,.pdf,image/*' },
];

export function DocumentsStep({ form, set, errors }: BaseStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Verify your identity</h2>
      <p className="text-sm text-slate-500 mb-8">We use these to confirm you&apos;re a real, trustworthy professional.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {TILES.map(({ key, icon: Icon, label, sub, accept }) => (
          <div key={key}>
            <label
              className={`flex flex-col items-center justify-center border-2 border-dashed ${errors[key] ? 'border-red-400' : 'border-slate-200'} rounded-2xl p-6 cursor-pointer hover:border-[#1aae74] transition-colors group bg-slate-50/50 min-h-[140px]`}
            >
              <input type="file" accept={accept} className="hidden" onChange={e => set(key, e.target.files?.[0] ?? null)} />
              <Icon className="w-6 h-6 text-slate-300 group-hover:text-[#1aae74] mb-2 transition-colors" />
              <p className="font-semibold text-slate-700 text-xs text-center">{label}</p>
              <p className="text-[11px] text-slate-400 text-center mt-1">{sub}</p>
              {form[key] && (
                <p className="text-[11px] text-[#1aae74] mt-2 text-center truncate max-w-full px-2 font-medium">
                  {(form[key] as File).name}
                </p>
              )}
            </label>
            {errors[key] && <p className="text-xs text-red-500 mt-1.5">{errors[key]}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

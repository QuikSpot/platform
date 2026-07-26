'use client';

import type { ReactNode } from 'react';
import type { BaseStepProps } from '../types';

interface ReviewStepProps extends BaseStepProps {
  phoneVerified: boolean;
  apiError: string | null;
  onEdit: (stepId: string) => void;
}

interface SummaryRow {
  label: string;
  value: ReactNode;
}

function SummaryGroup({ title, onEdit, rows }: { title: string; onEdit: () => void; rows: SummaryRow[] }) {
  return (
    <div className="border-b border-slate-100 last:border-b-0 py-4 first:pt-0 last:pb-0">
      <div className="flex items-center justify-between mb-2.5">
        <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">{title}</p>
        <button type="button" onClick={onEdit} className="text-xs font-semibold text-[#1aae74] hover:underline">
          Edit
        </button>
      </div>
      <dl className="space-y-1.5">
        {rows.map(row => (
          <div key={row.label} className="flex items-start justify-between gap-4 text-sm">
            <dt className="text-slate-400 flex-shrink-0">{row.label}</dt>
            <dd className="text-slate-700 font-medium text-right">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

const AGREEMENTS = [
  {
    key: 'agreeTerms' as const,
    title: 'I agree to the InstaFixd Terms & Conditions',
    desc: 'By checking this, you agree to our professional code of conduct and service quality standards.',
  },
  {
    key: 'agreeCommission' as const,
    title: 'I acknowledge the 10% Platform Commission',
    desc: 'InstaFixd retains a small commission on successful bookings to maintain the platform and customer support.',
  },
];

function formatDays(days: string[]): string {
  if (days.length === 0) return '—';
  return days.map(d => d.charAt(0) + d.charAt(1).toLowerCase()).join(', ');
}

export function ReviewStep({ form, set, errors, phoneVerified, apiError, onEdit }: ReviewStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Review & submit</h2>
      <p className="text-sm text-slate-500 mb-6">Make sure everything looks right before you apply.</p>

      <div className="mb-6">
        <SummaryGroup
          title="Account"
          onEdit={() => onEdit('account')}
          rows={[
            { label: 'Name', value: form.fullName || '—' },
            { label: 'NIC', value: form.nicNumber || '—' },
            { label: 'Mobile', value: <>{form.mobileNumber || '—'} {phoneVerified && <span className="text-[#1aae74]">(verified)</span>}</> },
            { label: 'Email', value: form.email || '—' },
          ]}
        />
        <SummaryGroup
          title="Address"
          onEdit={() => onEdit('address')}
          rows={[
            { label: 'Home address', value: form.address || '—' },
            { label: 'WhatsApp', value: form.whatsappNumber || 'Not provided' },
          ]}
        />
        <SummaryGroup
          title="Location"
          onEdit={() => onEdit('location')}
          rows={[
            { label: 'Region', value: [form.district, form.province].filter(Boolean).join(', ') || '—' },
            { label: 'Zones', value: form.serviceZones.length ? form.serviceZones.join(', ') : '—' },
          ]}
        />
        <SummaryGroup
          title="Expertise"
          onEdit={() => onEdit('specializations')}
          rows={[
            { label: 'Trade', value: form.primaryCategory || '—' },
            { label: 'Specializations', value: form.subCategories.length ? form.subCategories.join(', ') : '—' },
            { label: 'Experience', value: form.experienceLevel || '—' },
          ]}
        />
        <SummaryGroup
          title="Availability"
          onEdit={() => onEdit('availability')}
          rows={[
            { label: 'Days', value: formatDays(form.serviceDays) },
            { label: 'Hours', value: `${form.workStartTime} – ${form.workEndTime}` },
            { label: 'Night service', value: form.nightService ? 'Yes' : 'No' },
          ]}
        />
        <SummaryGroup
          title="Documents"
          onEdit={() => onEdit('documents')}
          rows={[
            { label: 'NIC front', value: form.nicFrontImage ? '✓ Uploaded' : 'Missing' },
            { label: 'NIC back', value: form.nicBackImage ? '✓ Uploaded' : 'Missing' },
            { label: 'Selfie', value: form.selfieImage ? '✓ Uploaded' : 'Missing' },
            { label: 'Portfolio', value: form.portfolio ? '✓ Uploaded' : 'Not provided' },
          ]}
        />
      </div>

      <div className="bg-slate-50 rounded-2xl p-6 space-y-5">
        {AGREEMENTS.map(({ key, title, desc }) => (
          <div key={key}>
            <button type="button" onClick={() => set(key, !form[key])} className="flex items-start gap-4 w-full text-left">
              <div
                className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 transition-colors flex items-center justify-center ${
                  form[key] ? 'bg-[#1aae74] border-[#1aae74]' : errors[key] ? 'border-red-400' : 'border-slate-300'
                }`}
              >
                {form[key] && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">{title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
              </div>
            </button>
            {errors[key] && <p className="text-xs text-red-500 mt-1.5 ml-9">{errors[key]}</p>}
          </div>
        ))}
      </div>

      {apiError && <p className="text-sm text-red-600 font-medium mt-4">{apiError}</p>}
      <p className="text-xs text-slate-400 italic mt-4">
        Your application will be reviewed by our curation team within 48 hours.
      </p>
    </div>
  );
}

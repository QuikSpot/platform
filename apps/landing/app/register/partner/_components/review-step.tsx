'use client';

import { Calendar, CheckCircle2, FileCheck, MapPin, Pencil, User, Wrench } from 'lucide-react';
import { ReactNode } from 'react';

interface ReviewStepProps {
  fullName: string;
  mobileNumber: string;
  email: string;
  province: string;
  district: string;
  serviceZones: string[];
  primaryCategory: string;
  subCategories: string[];
  experienceLevel: string;
  bio: string;
  nightService: boolean;
  serviceDays: string[];
  workStartTime: string;
  workEndTime: string;
  nicFrontImage: File | null;
  nicBackImage: File | null;
  selfieImage: File | null;
  portfolio: File | null;
  isSubmitting: boolean;
  apiError: string | null;
  onEdit: (step: number) => void;
  onSubmit: () => void;
}

interface SectionProps {
  icon: ReactNode;
  title: string;
  step: number;
  onEdit: (step: number) => void;
  children: ReactNode;
}

function Section({ icon, title, step, onEdit, children }: SectionProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4">
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-[#1aae74]">
            {icon}
          </div>
          <h3 className="font-semibold text-slate-900 text-sm">{title}</h3>
        </div>
        <button
          type="button"
          onClick={() => onEdit(step)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#1aae74] hover:underline"
        >
          <Pencil className="w-3 h-3" /> Edit
        </button>
      </div>
      <div className="text-sm text-slate-600 space-y-0.5">{children}</div>
    </div>
  );
}

const DAY_LABELS: Record<string, string> = {
  MON: 'Mon',
  TUE: 'Tue',
  WED: 'Wed',
  THU: 'Thu',
  FRI: 'Fri',
  SAT: 'Sat',
  SUN: 'Sun',
};

export function ReviewStep(props: ReviewStepProps) {
  const {
    fullName,
    mobileNumber,
    email,
    province,
    district,
    serviceZones,
    primaryCategory,
    subCategories,
    experienceLevel,
    bio,
    nightService,
    serviceDays,
    workStartTime,
    workEndTime,
    nicFrontImage,
    nicBackImage,
    selfieImage,
    portfolio,
    apiError,
    onEdit,
  } = props;

  const docs = [
    { name: 'NIC Front', file: nicFrontImage },
    { name: 'NIC Back', file: nicBackImage },
    { name: 'Selfie', file: selfieImage },
    { name: 'Portfolio', file: portfolio },
  ];

  return (
    <div className="space-y-3">
      <Section icon={<User className="w-4 h-4" />} title="Personal info" step={1} onEdit={onEdit}>
        <p className="font-medium text-slate-900">{fullName}</p>
        {email ? <p>{email}</p> : <p className="italic text-slate-400">No email provided</p>}
        <p>{mobileNumber}</p>
      </Section>

      <Section icon={<MapPin className="w-4 h-4" />} title="Service area" step={2} onEdit={onEdit}>
        <p className="font-medium text-slate-900">
          {district}, {province}
        </p>
        <p>{serviceZones.join(', ') || 'No areas selected'}</p>
      </Section>

      <Section icon={<Wrench className="w-4 h-4" />} title="Expertise" step={3} onEdit={onEdit}>
        <p className="font-medium text-slate-900">{primaryCategory}</p>
        <p>{subCategories.join(', ') || 'No sub-categories'}</p>
        <p className="text-xs text-slate-500 mt-1.5 italic">“{bio.slice(0, 140)}{bio.length > 140 ? '…' : ''}”</p>
        <p className="text-xs text-slate-500">Experience: {experienceLevel}</p>
      </Section>

      <Section icon={<Calendar className="w-4 h-4" />} title="Availability" step={4} onEdit={onEdit}>
        <p className="font-medium text-slate-900">
          {nightService ? '24/7 — every day' : `${serviceDays.length} day${serviceDays.length === 1 ? '' : 's'} a week`}
        </p>
        {!nightService && (
          <p>
            {serviceDays.map((d) => DAY_LABELS[d] ?? d).join(', ')} · {workStartTime}–{workEndTime}
          </p>
        )}
      </Section>

      <Section icon={<FileCheck className="w-4 h-4" />} title="Documents" step={5} onEdit={onEdit}>
        <ul className="space-y-0.5">
          {docs.map(({ name, file }) => (
            <li key={name} className="flex items-center gap-2">
              {file ? (
                <CheckCircle2 className="w-4 h-4 text-[#1aae74] flex-shrink-0" />
              ) : (
                <span className="w-4 h-4 rounded-full border-2 border-slate-200 flex-shrink-0" />
              )}
              <span className={file ? 'text-slate-900' : 'text-slate-400'}>
                {name} {file ? <span className="text-slate-500">— {file.name}</span> : name === 'Portfolio' ? '(optional)' : '(missing)'}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {apiError && (
        <div className="bg-red-50 border border-red-100 rounded-2xl p-3 text-sm text-red-700">
          {apiError}
        </div>
      )}

      <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3 flex items-start gap-3">
        <CheckCircle2 className="w-4 h-4 text-[#1aae74] flex-shrink-0 mt-0.5" />
        <p className="text-xs text-emerald-900">
          Reviewed within 48 hours. You'll get an SMS and email when approved.
        </p>
      </div>
    </div>
  );
}

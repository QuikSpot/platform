'use client';

import { Moon, Sun } from 'lucide-react';
import { Chip, Field, SelectInput } from './fields';

interface ScheduleStepProps {
  values: {
    nightService: boolean;
    serviceDays: string[];
    workStartTime: string;
    workEndTime: string;
  };
  errors: Record<string, string>;
  onChange: <K extends keyof ScheduleStepProps['values']>(key: K, value: ScheduleStepProps['values'][K]) => void;
  onSubmit: () => void;
}

const DAYS = [
  { code: 'MON', label: 'Mon' },
  { code: 'TUE', label: 'Tue' },
  { code: 'WED', label: 'Wed' },
  { code: 'THU', label: 'Thu' },
  { code: 'FRI', label: 'Fri' },
  { code: 'SAT', label: 'Sat' },
  { code: 'SUN', label: 'Sun' },
];

const TIME_OPTIONS = Array.from({ length: 24 }, (_, i) => {
  const hh = i.toString().padStart(2, '0');
  return { value: `${hh}:00`, label: `${hh}:00` };
});

function formatTime12(hhmm: string): string {
  const [hStr = '0'] = hhmm.split(':');
  const h = parseInt(hStr, 10);
  if (h === 0) return '12 AM';
  if (h === 12) return '12 PM';
  if (h < 12) return `${h} AM`;
  return `${h - 12} PM`;
}

export function ScheduleStep({ values, errors, onChange }: ScheduleStepProps) {
  const toggleDay = (code: string) => {
    onChange(
      'serviceDays',
      values.serviceDays.includes(code)
        ? values.serviceDays.filter((d) => d !== code)
        : [...values.serviceDays, code],
    );
  };

  return (
    <div className="space-y-6">
      {/* 24/7 toggle — premium callout */}
      <button
        type="button"
        onClick={() => onChange('nightService', !values.nightService)}
        className={`w-full p-4 rounded-2xl border-2 transition-all text-left flex items-center gap-4 ${
          values.nightService
            ? 'border-[#1aae74] bg-emerald-50/50'
            : 'border-slate-200 bg-white hover:border-slate-300'
        }`}
      >
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
            values.nightService ? 'bg-[#1aae74] text-white' : 'bg-slate-100 text-slate-500'
          }`}
        >
          {values.nightService ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-slate-900 text-sm">24/7 availability</p>
          <p className="text-xs text-slate-500">Every day, including nights</p>
        </div>
        <div
          className={`w-6 h-11 rounded-full p-1 transition-colors flex-shrink-0 ${
            values.nightService ? 'bg-[#1aae74]' : 'bg-slate-200'
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
              values.nightService ? 'translate-y-5' : 'translate-y-0'
            }`}
          />
        </div>
      </button>

      <Field label="Working days" required error={errors.serviceDays}>
        <div className="grid grid-cols-7 gap-2">
          {DAYS.map((d) => {
            const selected = values.serviceDays.includes(d.code);
            return (
              <button
                key={d.code}
                type="button"
                onClick={() => toggleDay(d.code)}
                className={`flex flex-col items-center justify-center py-2.5 rounded-xl border-2 font-semibold text-sm transition-all ${
                  selected
                    ? 'bg-[#1aae74] border-[#1aae74] text-white shadow-sm shadow-emerald-500/20'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </div>
      </Field>

      {!values.nightService && (
        <div className="grid grid-cols-2 gap-x-4 gap-y-5">
          <SelectInput
            label="Start time"
            required
            value={values.workStartTime}
            onChange={(v) => onChange('workStartTime', v)}
            options={TIME_OPTIONS.map((t) => ({ value: t.value, label: formatTime12(t.value) }))}
          />
          <SelectInput
            label="End time"
            required
            value={values.workEndTime}
            onChange={(v) => onChange('workEndTime', v)}
            options={TIME_OPTIONS.map((t) => ({ value: t.value, label: formatTime12(t.value) }))}
            error={errors.workEndTime}
          />
        </div>
      )}

      {/* Preview chip */}
      {values.serviceDays.length > 0 && (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Your schedule
          </p>
          <p className="text-sm text-slate-700">
            {values.nightService ? (
              <span className="font-medium">Available 24/7</span>
            ) : (
              <>
                {values.serviceDays.length} day{values.serviceDays.length === 1 ? '' : 's'} a week
                {values.workStartTime && values.workEndTime && (
                  <span className="text-slate-500">
                    {' '}· {formatTime12(values.workStartTime)} – {formatTime12(values.workEndTime)}
                  </span>
                )}
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
}

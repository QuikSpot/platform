'use client';

import { ArrowRight, Clock, Moon, Sun } from 'lucide-react';
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

export function ScheduleStep({ values, errors, onChange, onSubmit }: ScheduleStepProps) {
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
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center">
          <Clock className="w-5 h-5 text-[#1aae74]" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">When are you available?</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Set the days and hours customers can book you.
          </p>
        </div>
      </div>

      {/* 24/7 toggle — premium callout */}
      <button
        type="button"
        onClick={() => onChange('nightService', !values.nightService)}
        className={`w-full p-5 rounded-2xl border-2 transition-all text-left flex items-center gap-4 ${
          values.nightService
            ? 'border-[#1aae74] bg-emerald-50/50'
            : 'border-slate-200 bg-white hover:border-slate-300'
        }`}
      >
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            values.nightService ? 'bg-[#1aae74] text-white' : 'bg-slate-100 text-slate-500'
          }`}
        >
          {values.nightService ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-slate-900">24/7 Availability</p>
          <p className="text-sm text-slate-500 mt-0.5">
            Available every day, including nights and emergencies.
          </p>
        </div>
        <div
          className={`w-6 h-11 rounded-full p-1 transition-colors ${
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
                className={`flex flex-col items-center justify-center py-3 rounded-xl border-2 font-semibold text-sm transition-all ${
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
        <div className="grid grid-cols-2 gap-4">
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
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Your schedule
          </p>
          <p className="text-sm text-slate-700">
            {values.nightService ? (
              <span className="font-medium">Available 24/7, every day</span>
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

      <button
        type="button"
        onClick={onSubmit}
        className="hidden lg:inline-flex items-center justify-center gap-2 bg-[#1a3d2b] text-white px-6 py-3.5 rounded-2xl font-semibold text-sm hover:bg-[#114b2e] transition-colors shadow-sm hover:shadow-md"
      >
        Continue
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

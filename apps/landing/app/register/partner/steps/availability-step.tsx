'use client';

import { Toggle } from '../toggle';
import type { BaseStepProps } from '../types';

const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const TIME_OPTIONS = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

export function AvailabilityStep({ form, set, errors }: BaseStepProps) {
  const toggleDay = (day: string) =>
    set('serviceDays', form.serviceDays.includes(day)
      ? form.serviceDays.filter(d => d !== day)
      : [...form.serviceDays, day]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Set your availability</h2>
      <p className="text-sm text-slate-500 mb-8">Let customers know when they can book you.</p>

      <div className="mb-6 bg-slate-50 rounded-2xl p-5 flex items-center justify-between">
        <div>
          <p className="font-semibold text-slate-800 text-sm">24/7 Night Service</p>
          <p className="text-xs text-slate-400 mt-0.5">Available for emergency call-outs at night</p>
        </div>
        <Toggle on={form.nightService} onToggle={() => set('nightService', !form.nightService)} />
      </div>

      <div className="mb-6">
        <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-3">Service Days</p>
        <div className="flex gap-2 flex-wrap">
          {DAYS.map(day => (
            <button
              key={day}
              type="button"
              onClick={() => toggleDay(day)}
              className={`w-12 h-12 rounded-full text-xs font-bold transition-colors ${
                form.serviceDays.includes(day) ? 'bg-[#1aae74] text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
        {errors.serviceDays && <p className="text-xs text-red-500 mt-2">{errors.serviceDays}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-2">Start Time</p>
          <select
            value={form.workStartTime}
            onChange={e => set('workStartTime', e.target.value)}
            className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1aae74]/30 focus:border-[#1aae74] transition"
          >
            {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-2">End Time</p>
          <select
            value={form.workEndTime}
            onChange={e => set('workEndTime', e.target.value)}
            className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1aae74]/30 focus:border-[#1aae74] transition"
          >
            {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.workEndTime && <p className="text-xs text-red-500 mt-1.5">{errors.workEndTime}</p>}
        </div>
      </div>
    </div>
  );
}

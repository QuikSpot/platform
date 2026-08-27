'use client';

import { Check, ShieldCheck } from 'lucide-react';
import { STEP_REGISTRY } from './step-config';

interface ProgressSummaryProps {
  currentStep: number;
  completedSteps: Set<number>;
  /** Phone number that already passed the OTP gate, shown as a settled fact above the wizard steps. */
  verifiedPhone?: string;
}

/**
 * Desktop-only sidebar showing the full roadmap. Each completed step gets a check,
 * the current step is highlighted, future steps are muted.
 */
export function ProgressSummary({ currentStep, completedSteps, verifiedPhone }: ProgressSummaryProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
      <div className="mb-5">
        <h2 className="text-base font-bold text-slate-900">Become a Partner</h2>
        <p className="text-xs text-slate-500 mt-0.5">~5 min · reviewed in 48h</p>
      </div>

      {verifiedPhone && (
        <div className="flex items-center gap-2.5 mb-4 px-3 py-2.5 rounded-xl bg-emerald-50/70">
          <ShieldCheck className="w-4 h-4 text-[#1aae74] flex-shrink-0" />
          <p className="text-xs font-medium text-slate-600">
            <span className="text-slate-900">{verifiedPhone}</span> verified
          </p>
        </div>
      )}

      <ol className="space-y-1">
        {STEP_REGISTRY.map((step) => {
          const isCompleted = completedSteps.has(step.id);
          const isCurrent = step.id === currentStep;
          return (
            <li
              key={step.id}
              className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${
                isCurrent ? 'bg-emerald-50' : 'bg-transparent'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${
                  isCompleted
                    ? 'bg-[#1aae74] text-white'
                    : isCurrent
                      ? 'bg-white border-2 border-[#1aae74] text-[#1aae74]'
                      : 'bg-slate-100 text-slate-400'
                }`}
              >
                {isCompleted ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : step.id}
              </div>
              <p
                className={`text-sm font-semibold ${
                  isCurrent ? 'text-[#114b2e]' : isCompleted ? 'text-slate-700' : 'text-slate-400'
                }`}
              >
                {step.title}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

'use client';

import { Check } from 'lucide-react';
import { STEP_REGISTRY } from './step-config';

interface ProgressSummaryProps {
  currentStep: number;
  completedSteps: Set<number>;
}

/**
 * Desktop-only sidebar showing the full roadmap. Each completed step gets a check,
 * the current step is highlighted, future steps are muted.
 */
export function ProgressSummary({ currentStep, completedSteps }: ProgressSummaryProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
      <h2 className="text-lg font-bold text-slate-900 mb-1">Become a Partner</h2>
      <p className="text-sm text-slate-500 mb-6">
        Onboarding takes about 5 minutes. We&apos;ll review your application within 48 hours.
      </p>

      <ol className="space-y-1.5">
        {STEP_REGISTRY.map((step) => {
          const isCompleted = completedSteps.has(step.id);
          const isCurrent = step.id === currentStep;
          return (
            <li
              key={step.id}
              className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${
                isCurrent ? 'bg-emerald-50' : 'bg-transparent'
              }`}
            >
              <div
                className={`mt-0.5 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${
                  isCompleted
                    ? 'bg-[#1aae74] text-white'
                    : isCurrent
                      ? 'bg-white border-2 border-[#1aae74] text-[#1aae74]'
                      : 'bg-slate-100 text-slate-400'
                }`}
              >
                {isCompleted ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : step.id}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm font-semibold ${
                    isCurrent ? 'text-[#114b2e]' : isCompleted ? 'text-slate-700' : 'text-slate-400'
                  }`}
                >
                  {step.title}
                </p>
                <p
                  className={`text-xs mt-0.5 ${
                    isCurrent ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  {step.subtitle}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

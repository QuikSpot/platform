'use client';

import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageChrome } from './page-chrome';
import { ProgressBar, type WizardSection } from './progress-bar';

const MAX_WIDTH_CLASS = {
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
} as const;

interface WizardShellProps {
  sections: WizardSection[];
  globalStepIndex: number;
  sectionLabel: string;
  stepInSection: number;
  stepsInSection: number;
  hero?: { title: string; subtitle: string };
  onBack?: () => void;
  primaryLabel: string;
  onPrimary: () => void;
  primaryDisabled?: boolean;
  primaryLoading?: boolean;
  secondaryAction?: ReactNode;
  maxWidth?: keyof typeof MAX_WIDTH_CLASS;
  children: ReactNode;
}

export function WizardShell({
  sections,
  globalStepIndex,
  sectionLabel,
  stepInSection,
  stepsInSection,
  hero,
  onBack,
  primaryLabel,
  onPrimary,
  primaryDisabled,
  primaryLoading,
  secondaryAction,
  maxWidth = 'md',
  children,
}: WizardShellProps) {
  return (
    <PageChrome>
      {hero && (
        <div className="text-center mb-10 animate-in fade-in duration-300">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#1aae74]/60 bg-[#1aae74]/10 text-[#1aae74] text-xs font-bold tracking-widest uppercase mb-4">
            Partner Registration
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#114b2e] mb-3 leading-tight">
            {hero.title}
          </h1>
          <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      )}

      <div className={`w-full ${MAX_WIDTH_CLASS[maxWidth]}`}>
        <div className="mb-3">
          <ProgressBar sections={sections} globalStepIndex={globalStepIndex} />
        </div>
        <p className="text-xs font-semibold text-slate-400 tracking-wide uppercase mb-8">
          {sectionLabel} · Step {stepInSection} of {stepsInSection}
        </p>

        <div key={globalStepIndex} className="bg-white rounded-3xl p-8 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#114b2e] transition-colors mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
          )}

          {children}

          {primaryDisabled && !primaryLoading && (
            <p className="text-xs text-slate-400 italic text-center mt-6">
              Complete all required fields to continue.
            </p>
          )}

          <button
            type="button"
            onClick={onPrimary}
            disabled={primaryDisabled || primaryLoading}
            className="w-full inline-flex items-center justify-center gap-2 mt-3 px-6 py-3.5 rounded-xl bg-[#1a3d2b] text-white text-sm font-semibold hover:bg-[#114b2e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {primaryLoading ? 'Please wait…' : primaryLabel}
            {!primaryLoading && <ArrowRight className="w-4 h-4" />}
          </button>

          {secondaryAction && <div className="mt-4 text-center">{secondaryAction}</div>}
        </div>
      </div>
    </PageChrome>
  );
}

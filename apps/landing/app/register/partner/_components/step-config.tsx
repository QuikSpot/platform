'use client';

import { ReactNode } from 'react';

export interface StepConfig {
  id: number;
  title: string;
  subtitle: string;
}

/**
 * Canonical step list. Order matches the order screens appear in the flow.
 * Update both this and the parent component when adding/removing screens.
 *
 * Phone/OTP verification is deliberately NOT part of this registry — it's a
 * gate the user passes through before the wizard ever mounts (see page.tsx),
 * the same way Uber-style onboarding flows verify a phone number up front
 * and never let you navigate back into that step once you're inside the form.
 */
export const STEP_REGISTRY: StepConfig[] = [
  { id: 1, title: 'Personal info', subtitle: 'Who you are.' },
  { id: 2, title: 'Service area', subtitle: 'Where you work.' },
  { id: 3, title: 'Expertise', subtitle: 'Your specialty and story.' },
  { id: 4, title: 'Availability', subtitle: 'When customers can book.' },
  { id: 5, title: 'Verification', subtitle: 'Verify your identity.' },
  { id: 6, title: 'Review', subtitle: 'A final look.' },
];

export const TOTAL_STEPS = STEP_REGISTRY.length;

export interface StepFooterProps {
  primaryLabel: string;
  primaryAction: () => void;
  primaryDisabled?: boolean;
  primaryIcon?: ReactNode;
  secondaryLabel?: string;
  secondaryAction?: () => void;
}

export function StepFooter({
  primaryLabel,
  primaryAction,
  primaryDisabled,
  primaryIcon,
  secondaryLabel,
  secondaryAction,
}: StepFooterProps) {
  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={primaryAction}
        disabled={primaryDisabled}
        className="w-full lg:w-auto lg:min-w-[160px] inline-flex items-center justify-center gap-2 bg-[#1a3d2b] text-white px-6 py-3 rounded-2xl font-semibold text-sm hover:bg-[#114b2e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
      >
        {primaryLabel}
        {primaryIcon}
      </button>
      {secondaryLabel && secondaryAction && (
        <button
          type="button"
          onClick={secondaryAction}
          className="w-full text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors"
        >
          {secondaryLabel}
        </button>
      )}
    </div>
  );
}

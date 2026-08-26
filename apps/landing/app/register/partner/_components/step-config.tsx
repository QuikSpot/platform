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
 */
export const STEP_REGISTRY: StepConfig[] = [
  { id: 1, title: 'Phone number', subtitle: 'Verify your mobile number with a one-time code.' },
  { id: 2, title: 'Personal info', subtitle: 'Tell us who you are so customers can trust you.' },
  { id: 3, title: 'Service area', subtitle: 'Where in Sri Lanka do you operate?' },
  { id: 4, title: 'Your expertise', subtitle: 'Pick the services you offer — and tell your story.' },
  { id: 5, title: 'Availability', subtitle: 'When can customers book you?' },
  { id: 6, title: 'Identity & documents', subtitle: 'Verify your identity to get the verified badge.' },
  { id: 7, title: 'Review & submit', subtitle: 'A final look before you send it off.' },
];

/** Steps where an OTP screen is shown *between* this step and the next. */
export const PHONE_STEP = 1;
/** Personal info step is after OTP, so OTP is treated as part of phone. */

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
        className="w-full lg:w-auto lg:min-w-[180px] inline-flex items-center justify-center gap-2 bg-[#1a3d2b] text-white px-6 py-3.5 rounded-2xl font-semibold text-sm hover:bg-[#114b2e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
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

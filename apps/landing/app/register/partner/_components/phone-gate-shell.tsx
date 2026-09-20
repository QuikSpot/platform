'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface PhoneGateShellProps {
  children: ReactNode;
  /** Clears any in-progress signup state before the Exit link navigates away. */
  onExit?: () => void;
}

/**
 * Standalone layout for the phone/OTP gate — deliberately NOT the multi-step
 * wizard shell. It has no step counter, no progress bar, and no sidebar,
 * because verifying a phone number isn't "step 1 of N": it's a precondition
 * you pass once, the way Uber-style onboarding verifies a number before the
 * actual signup form ever appears. There is no way back into this screen
 * once the wizard mounts.
 */
export function PhoneGateShell({ children, onExit }: PhoneGateShellProps) {
  return (
    <div className="h-screen bg-[#f6f8f7] flex flex-col overflow-hidden">
      <header className="shrink-0 border-b border-slate-200/70 bg-white/80 backdrop-blur-sm z-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="instaFixd" className="h-7 w-auto" />
          </Link>
          <Link
            href="/"
            onClick={onExit}
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Exit
          </Link>
        </div>
      </header>

      <main className="flex-1 min-h-0 w-full overflow-y-auto">
        <div className="min-h-full flex items-center justify-center px-4 py-10 sm:py-16">
          <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

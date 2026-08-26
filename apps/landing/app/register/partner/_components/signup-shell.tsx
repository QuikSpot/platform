'use client';

import Link from 'next/link';
import { ArrowLeft, ChevronLeft } from 'lucide-react';
import { ReactNode } from 'react';

interface SignupShellProps {
  step: number;
  totalSteps: number;
  stepTitle: string;
  stepSubtitle?: string;
  canGoBack: boolean;
  onBack: () => void;
  children: ReactNode;
  primaryAction: ReactNode;
  /** Right column summary content shown on desktop */
  summary?: ReactNode;
  /** Show a thin progress bar instead of dots */
  showProgressBar?: boolean;
}

/**
 * Shell for every signup screen. Renders:
 *  - top bar (logo + back link)
 *  - left: progress summary (desktop) or step header (mobile)
 *  - right: the active screen content + sticky bottom CTA on mobile
 */
export function SignupShell({
  step,
  totalSteps,
  stepTitle,
  stepSubtitle,
  canGoBack,
  onBack,
  children,
  primaryAction,
  summary,
}: SignupShellProps) {
  return (
    <div className="min-h-screen bg-[#f6f8f7] flex flex-col">
      {/* Top bar */}
      <header className="border-b border-slate-200/70 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="instaFixd" className="h-7 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-2 text-xs text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Step {step} of {totalSteps}
            </span>
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Exit
            </Link>
          </div>
        </div>
        {/* Thin progress bar */}
        <div className="h-1 bg-slate-100">
          <div
            className="h-full bg-[#1aae74] transition-all duration-500 ease-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </header>

      {/* Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: progress summary (desktop only) */}
          {summary && (
            <aside className="hidden lg:block lg:col-span-4 xl:col-span-4">
              <div className="sticky top-24 space-y-6">{summary}</div>
            </aside>
          )}

          {/* Right: active screen */}
          <section
            className={
              summary
                ? 'lg:col-span-8 xl:col-span-8'
                : 'lg:col-span-12 max-w-2xl mx-auto w-full'
            }
          >
            {/* Mobile back button */}
            {canGoBack && (
              <button
                type="button"
                onClick={onBack}
                className="lg:hidden inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 mb-4 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            )}

            {/* Step header */}
            <div className="mb-6 sm:mb-8">
              <p className="text-xs font-semibold text-[#1aae74] tracking-widest uppercase mb-2">
                {stepTitle}
              </p>
              {stepSubtitle && (
                <p className="text-sm text-slate-500 leading-relaxed">
                  {stepSubtitle}
                </p>
              )}
            </div>

            {/* Screen content */}
            <div className="pb-28 lg:pb-0">{children}</div>

            {/* Desktop primary action */}
            <div className="hidden lg:flex items-center justify-between gap-4 pt-8 mt-8 border-t border-slate-200">
              <button
                type="button"
                onClick={onBack}
                disabled={!canGoBack}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <div className="flex-1 flex justify-end">{primaryAction}</div>
            </div>
          </section>
        </div>
      </main>

      {/* Mobile sticky bottom CTA */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 border-t border-slate-200 bg-white/95 backdrop-blur-md p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        {primaryAction}
      </div>
    </div>
  );
}

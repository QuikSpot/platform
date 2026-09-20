'use client';

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
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
  /** Clears any in-progress signup state (including phone verification) before the Exit link navigates away. */
  onExit?: () => void;
}

/**
 * Shell for every signup screen. Renders:
 *  - top bar (logo + back link) — fixed
 *  - left: progress summary (desktop) — fixed
 *  - right: the active screen content — only this column scrolls
 *  - sticky bottom action bar inside the right column
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
  onExit,
}: SignupShellProps) {
  return (
    <div className="h-screen bg-[#f6f8f7] flex flex-col overflow-hidden">
      {/* Top bar — fixed */}
      <header className="shrink-0 border-b border-slate-200/70 bg-white/80 backdrop-blur-sm z-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
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
              onClick={onExit}
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

      {/* Hero — experimental: testing a title band above the form instead of relying on padding alone for nav-to-form spacing. */}
      <div className="shrink-0 bg-gradient-to-b from-emerald-50 to-[#f6f8f7]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/70 px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase text-[#1aae74]">
            Partner Registration
          </span>
          <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#114b2e]">
            Become an instaFixd Expert
          </h1>
        </div>
      </div>

      {/* Body — two columns. Outer page never scrolls. */}
      <main className="flex-1 min-h-0 w-full">
        <div className="h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10">
          <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left: progress summary (desktop) — sizes to its content, top-aligned */}
            {summary && (
              <aside className="hidden lg:block lg:col-span-4 xl:col-span-4">
                {summary}
              </aside>
            )}

            {/* Right: active screen — only this column scrolls */}
            <section
              className={`${
                summary ? 'lg:col-span-8 xl:col-span-8' : 'lg:col-span-12'
              } flex flex-col min-h-0`}
            >
              {/* Scrollable area: form + footer scroll together. Keying on step resets scroll. */}
              <div key={step} className="flex-1 min-h-0 overflow-y-auto pr-1 -mr-1">
                {/* Mobile back button — sits above the form on small screens */}
                {canGoBack && (
                  <div className="lg:hidden pt-4">
                    <button
                      type="button"
                      onClick={onBack}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back
                    </button>
                  </div>
                )}

                {/* Step header */}
                <div className="pb-4">
                  <p className="text-xs font-semibold text-[#1aae74] tracking-widest uppercase mb-1">
                    {stepTitle}
                  </p>
                  {stepSubtitle && (
                    <p className="text-sm text-slate-500 leading-relaxed">{stepSubtitle}</p>
                  )}
                </div>

                {/* Screen content */}
                <div>{children}</div>

                {/* Action bar follows the form, inside the scroll column */}
                {primaryAction ? (
                  <div className="hidden lg:flex items-center justify-between gap-4 pt-6 mt-6 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={onBack}
                      disabled={!canGoBack}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back
                    </button>
                    <div className="flex-1 flex justify-end">{primaryAction}</div>
                  </div>
                ) : null}
                <div className="h-6" />
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Mobile sticky bottom CTA */}
      {primaryAction ? (
        <div className="lg:hidden shrink-0 border-t border-slate-200 bg-white/95 backdrop-blur-md p-4 pb-[max(1rem,env(safe-area-inset-bottom))] z-20">
          {primaryAction}
        </div>
      ) : null}
    </div>
  );
}

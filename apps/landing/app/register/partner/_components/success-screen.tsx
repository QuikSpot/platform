'use client';

import Link from 'next/link';
import { CheckCircle2, MessageCircle, Home } from 'lucide-react';

interface SuccessScreenProps {
  onRegisterAnother: () => void;
}

export function SuccessScreen({ onRegisterAnother }: SuccessScreenProps) {
  return (
    <div className="min-h-screen bg-[#f6f8f7] flex flex-col">
      <header className="border-b border-slate-200/70 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="instaFixd" className="h-7 w-auto" />
          </Link>
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="max-w-md w-full text-center">
          <div className="relative inline-flex items-center justify-center mb-8">
            <div className="absolute inset-0 bg-emerald-200/40 rounded-full blur-2xl scale-150" />
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#1aae74] to-[#114b2e] flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2.5} />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Application submitted!
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-2">
            Thanks for applying to become an instaFixd partner.
          </p>
          <p className="text-sm text-slate-500 mb-10">
            Our team will review your application within <span className="font-semibold text-slate-700">48 hours</span> and get back to you via SMS and email.
          </p>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 text-left space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <span className="text-[#1aae74] font-bold text-sm">1</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Application review</p>
                <p className="text-xs text-slate-500">We check your details and documents.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <span className="text-[#1aae74] font-bold text-sm">2</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Quick onboarding call</p>
                <p className="text-xs text-slate-500">We&apos;ll reach out to confirm and answer questions.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <span className="text-[#1aae74] font-bold text-sm">3</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Start receiving jobs</p>
                <p className="text-xs text-slate-500">Get booked and earn on your schedule.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={onRegisterAnother}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
            >
              Register another partner
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#1a3d2b] text-white font-semibold text-sm hover:bg-[#114b2e] transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to home
            </Link>
          </div>

          <p className="mt-10 text-xs text-slate-400">
            Questions?{' '}
            <a href="#" className="text-[#1aae74] font-medium hover:underline">
              Contact support
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

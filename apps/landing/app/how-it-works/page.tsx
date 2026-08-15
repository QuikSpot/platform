import Link from 'next/link';
import { Zap, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { HowItWorksExplorer } from '@/components/how-it-works-explorer';

export const metadata: Metadata = {
  title: 'How It Works – InstaFixd',
  description:
    'See exactly how InstaFixd works — a step-by-step walkthrough of the journey for customers booking a service and for professionals offering their services.',
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-white">

      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25d366]/20 text-[#006d2f] font-bold text-sm tracking-wide uppercase mb-5">
              <Zap className="w-4 h-4" /> How It Works
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#191c1d] tracking-tight leading-[1.1]">
              One platform,<br />
              <span className="text-[#006d2f]">two simple journeys.</span>
            </h1>
            <p className="text-slate-500 text-lg mt-5 leading-relaxed">
              Whether you need a job done or you&apos;re the pro who does it, InstaFixd keeps everything
              inside a simple WhatsApp conversation. Choose your path below to see how.
            </p>
          </div>

          {/* Interactive explorer */}
          <HowItWorksExplorer />

          {/* Cross CTA */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 flex flex-col">
              <MessageCircle className="w-8 h-8 text-[#006d2f]" />
              <h3 className="text-xl font-extrabold text-[#191c1d] mt-4">Need something fixed?</h3>
              <p className="text-slate-500 mt-2 flex-1">
                Skip the forms and the wait — message our WhatsApp assistant and get matched in seconds.
              </p>
              <Link
                href="/get-started"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-[linear-gradient(135deg,#006d2f_0%,#25d366_100%)] text-white font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-md shadow-[#006d2f]/20 self-start"
              >
                Book a Service
              </Link>
            </div>
            <div className="rounded-3xl bg-[#114b2e] text-white shadow-sm p-8 flex flex-col">
              <Zap className="w-8 h-8 text-[#6ee7a8]" />
              <h3 className="text-xl font-extrabold mt-4">Want to earn as a pro?</h3>
              <p className="text-white/70 mt-2 flex-1">
                Join InstaFixd as a verified professional and get a steady stream of nearby jobs.
              </p>
              <Link
                href="/register/partner"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-[#114b2e] font-bold text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-colors self-start"
              >
                Become a Provider
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

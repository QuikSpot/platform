'use client';

import Link from 'next/link';
import { ArrowRight, ShoppingCart, Briefcase, Search, Hammer } from 'lucide-react';

export default function GetStarted() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #e8f5ee 0%, #d4eddf 50%, #e8f5ee 100%)' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5">
        <span className="text-xl font-bold text-[#114b2e]">FixMate</span>
        <Link
          href="/"
          className="text-sm font-medium text-slate-700 hover:text-[#114b2e] transition-colors"
        >
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Heading */}
        <div className="text-center mb-14 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#114b2e] leading-tight mb-5">
            Choose your role to get started
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Join our premium community of skilled professionals and local seekers.
            Select how you want to experience the sanctuary today.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          {/* Hire Help Card */}
          <div className="relative bg-white rounded-3xl p-8 shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-shadow duration-300">
            {/* Watermark icon */}
            <div className="absolute bottom-4 right-4 opacity-[0.08]">
              <ShoppingCart className="w-36 h-36 text-slate-900" />
            </div>

            {/* Icon badge */}
            <div className="w-14 h-14 rounded-2xl bg-[#1aae74] flex items-center justify-center mb-8 relative z-10">
              <Search className="w-7 h-7 text-white" />
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-3 relative z-10">
              I want to hire help
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 relative z-10">
              Browse vetted professionals for home maintenance, specialized services,
              and creative local expertise.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2 text-[#1aae74] font-semibold text-sm hover:gap-3 transition-all duration-200 relative z-10"
            >
              Explore services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Provide Services Card */}
          <div className="relative bg-[#1a3d2b] rounded-3xl p-8 shadow-sm overflow-hidden group cursor-pointer hover:bg-[#163324] transition-colors duration-300">
            {/* Watermark icon */}
            <div className="absolute bottom-4 right-4 opacity-[0.15]">
              <Briefcase className="w-36 h-36 text-white" />
            </div>

            {/* Icon badge */}
            <div className="w-14 h-14 rounded-2xl bg-[#1aae74] flex items-center justify-center mb-8 relative z-10">
              <Hammer className="w-7 h-7 text-white" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-3 relative z-10">
              I want to provide services
            </h2>
            <p className="text-emerald-200/80 text-sm leading-relaxed mb-10 relative z-10">
              Showcase your talent, manage your bookings, and grow your local business
              within our curated network.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2 text-[#1aae74] font-semibold text-sm hover:gap-3 transition-all duration-200 relative z-10"
            >
              Apply as partner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Support link */}
        <p className="mt-12 text-sm text-slate-500">
          Need help deciding?{' '}
          <Link href="#" className="text-[#1aae74] font-semibold hover:underline">
            Contact our support sanctuary
          </Link>
        </p>
      </main>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row items-center justify-between px-8 py-5 border-t border-emerald-100/60">
        <p className="text-xs text-slate-400">© 2024 FixMate. All rights reserved.</p>
        <div className="flex items-center gap-6 mt-3 md:mt-0">
          <Link href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Privacy</Link>
          <Link href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Terms</Link>
          <Link href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Support</Link>
        </div>
      </footer>
    </div>
  );
}

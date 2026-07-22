'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';

export function PageChrome({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #e8f5ee 0%, #d4eddf 50%, #e8f5ee 100%)' }}>
      <header className="flex items-center justify-between px-8 py-5">
        <span className="text-xl font-bold text-[#114b2e]">InstaFixd</span>
        <Link href="/" className="text-sm font-medium text-slate-700 hover:text-[#114b2e] transition-colors">
          Back to Home
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center px-6 py-10">
        {children}
      </main>

      <footer className="flex flex-col md:flex-row items-center justify-between px-8 py-5 border-t border-emerald-100/60">
        <p className="text-xs text-slate-400">© 2024 InstaFixd. All rights reserved.</p>
        <div className="flex items-center gap-6 mt-3 md:mt-0">
          <Link href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Privacy</Link>
          <Link href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Terms</Link>
          <Link href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Support</Link>
        </div>
      </footer>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Wrench, Menu, X, UserCircle, LogOut } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/agreement', label: 'Privacy Policy' },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const { profile, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  function handleLogout() {
    logout();
    setProfileMenuOpen(false);
  }

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none px-3 sm:px-4">
      <motion.nav
        layout
        transition={{ duration: 0.55, ease: EASE }}
        className={cn(
          'pointer-events-auto relative w-full flex items-center justify-between gap-x-4 border backdrop-saturate-150 overflow-hidden isolate',
          'transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
          scrolled
            ? 'mt-3 max-w-5xl rounded-full px-6 py-2.5 gap-x-8 bg-white/60 backdrop-blur-2xl border-white/60 shadow-[0_8px_32px_-4px_rgba(15,23,42,0.16),inset_0_1px_0_rgba(255,255,255,0.7)]'
            : 'mt-0 max-w-7xl rounded-b-2xl px-4 py-4 sm:px-6 gap-x-6 bg-white/25 backdrop-blur-md border-transparent shadow-none'
        )}
      >
        {/* Liquid-glass sheen */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-70 mix-blend-overlay"
          style={{
            background:
              'linear-gradient(115deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.05) 22%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.12) 68%, rgba(255,255,255,0.55) 100%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-1/2 left-0 h-[200%] w-2/5 -z-10 opacity-50 blur-2xl animate-liquid-sheen"
          style={{
            background:
              'radial-gradient(closest-side, rgba(255,255,255,0.9), rgba(255,255,255,0) 70%)',
          }}
        />

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <motion.div
            layout
            transition={{ duration: 0.55, ease: EASE }}
            className={cn(
              'bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center shrink-0',
              scrolled ? 'w-8 h-8' : 'w-10 h-10'
            )}
          >
            <Wrench className={cn('text-white transition-all duration-500', scrolled ? 'w-4.5 h-4.5' : 'w-6 h-6')} />
          </motion.div>
          <span className="text-lg font-bold text-gray-900 tracking-tight">InstaFixd</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(l =>
            l.href.startsWith('/') ? (
              <Link key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-green-700 transition-colors font-medium whitespace-nowrap">
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-green-700 transition-colors font-medium whitespace-nowrap">
                {l.label}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          {profile ? (
            <div className="relative">
              <button
                onClick={() => setProfileMenuOpen(o => !o)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-black/5 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shrink-0">
                  <UserCircle className="w-5 h-5 text-white" />
                </div>
                <span className="hidden sm:block text-sm font-medium text-gray-700 max-w-[120px] truncate">
                  {profile.fullName}
                </span>
              </button>
              <AnimatePresence>
                {profileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/60 py-1.5 z-50"
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs font-semibold text-gray-900 truncate">{profile.fullName}</p>
                      <p className="text-xs text-gray-400 truncate">{profile.email}</p>
                    </div>
                    <button
                      onClick={() => { setProfileMenuOpen(false); router.push('/profile'); }}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
                    >
                      <UserCircle className="w-4 h-4 text-gray-400" /> My Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" /> Sign out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link href="/login" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-2">
                Sign in
              </Link>
              <Link href="/register/partner" className="hidden sm:block">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">Get Started</Button>
              </Link>
            </>
          )}
          {/* Mobile Get Started */}
          {!profile && (
            <Link href="/register/partner" className="md:hidden">
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1.5 rounded-full">Get Started</Button>
            </Link>
          )}
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-full text-gray-600 hover:bg-black/5 transition-colors"
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EASE }}
            className={cn(
              'md:hidden pointer-events-auto absolute left-3 right-3 sm:left-4 sm:right-4 overflow-hidden',
              'bg-white/85 backdrop-blur-2xl backdrop-saturate-150 border border-white/60 rounded-3xl shadow-[0_16px_40px_-8px_rgba(15,23,42,0.18)]',
              scrolled ? 'top-16' : 'top-20'
            )}
            style={{ maxWidth: scrolled ? '64rem' : undefined, marginInline: 'auto' }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(l =>
                l.href.startsWith('/') ? (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                  >
                    {l.label}
                  </a>
                )
              )}
              {profile ? (
                <>
                  <Link href="/profile" onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors flex items-center gap-2">
                    <UserCircle className="w-4 h-4" /> My Profile
                  </Link>
                  <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                    className="px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors flex items-center gap-2 w-full text-left">
                    <LogOut className="w-4 h-4" /> Sign out
                  </button>
                </>
              ) : (
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full mt-2 border-gray-200 rounded-xl">Sign in</Button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

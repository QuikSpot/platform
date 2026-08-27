'use client';

import { ArrowRight, Loader2, Phone as PhoneIcon, ShieldCheck } from 'lucide-react';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { TextInput } from './fields';

interface PhoneStepProps {
  initialValue: string;
  onVerified: (phone: string) => void;
  backendUrl: string | undefined;
  /** When true, the screen is rendered as a child of an existing step (e.g. user clicked "change number") */
  compact?: boolean;
}

type OtpState = 'idle' | 'sending' | 'verifying' | 'error';

const SL_DIAL = '+94';

function formatDisplay(raw: string): string {
  // Strip everything except digits; we don't auto-insert spaces — the user types
  // 9 digits and we render them as XXX XXX XXXX for readability.
  const digits = raw.replace(/\D/g, '');
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
  return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 10)}`;
}

export function PhoneStep({ initialValue, onVerified, backendUrl, compact }: PhoneStepProps) {
  // local number is the 9-digit part after the SL dial code
  const [local, setLocal] = useState<string>(() => initialValue.replace(/\D/g, '').replace(/^94/, ''));
  const [otpState, setOtpState] = useState<OtpState>('idle');
  const [error, setError] = useState<string | null>(null);
  const [showOtp, setShowOtp] = useState(false);
  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [resendCountdown, setResendCountdown] = useState(0);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  // countdown timer
  useEffect(() => {
    if (resendCountdown <= 0) return;
    const t = setTimeout(() => setResendCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [resendCountdown]);

  const fullNumber = `${SL_DIAL}${local}`;
  const isValidSriLankan = /^(\+94|0)[0-9]{9}$/.test(fullNumber) || /^0[0-9]{9}$/.test(`0${local}`);

  const handleSend = async () => {
    if (!isValidSriLankan) {
      setError('Enter a valid 9-digit Sri Lankan mobile number.');
      return;
    }
    setError(null);
    setOtpState('sending');
    try {
      const res = await fetch(`${backendUrl}/api/v1/otp/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobileNumber: fullNumber }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { message?: string };
        setError(body?.message ?? 'Could not send the code. Please try again.');
        setOtpState('error');
        return;
      }
      setDigits(['', '', '', '', '', '']);
      setShowOtp(true);
      setResendCountdown(30);
      setOtpState('idle');
      // focus first box
      setTimeout(() => refs.current[0]?.focus(), 80);
    } catch {
      setError('Unable to reach the server. Please check your connection.');
      setOtpState('error');
    }
  };

  const handleDigit = (idx: number, v: string) => {
    if (!/^\d?$/.test(v)) return;
    const next = [...digits];
    next[idx] = v;
    setDigits(next);
    if (v && idx < 5) refs.current[idx + 1]?.focus();
  };

  const handleKey = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[idx] && idx > 0) refs.current[idx - 1]?.focus();
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;
    const next = [...digits];
    for (let i = 0; i < pasted.length; i++) next[i] = pasted[i];
    setDigits(next);
    refs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const handleVerify = async (code: string) => {
    if (code.length < 6) return;
    setOtpState('verifying');
    setError(null);
    try {
      const res = await fetch(`${backendUrl}/api/v1/otp/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobileNumber: fullNumber, code }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { message?: string };
        setError(body?.message ?? 'That code didn\u2019t work. Please try again.');
        setOtpState('error');
        return;
      }
      onVerified(fullNumber);
    } catch {
      setError('Could not verify the code. Please try again.');
      setOtpState('error');
    }
  };

  // Auto-verify the instant all 6 digits are present — no click required.
  const autoSubmittedCode = useRef<string>('');
  useEffect(() => {
    const code = digits.join('');
    if (code.length === 6 && code !== autoSubmittedCode.current && otpState !== 'verifying') {
      autoSubmittedCode.current = code;
      handleVerify(code);
    }
    if (code.length < 6) autoSubmittedCode.current = '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [digits]);

  // ── Phone entry view ───────────────────────────────────────────
  if (!showOtp) {
    return (
      <div className="space-y-6">
        {!compact && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center">
              <PhoneIcon className="w-5 h-5 text-[#1aae74]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">What&apos;s your number?</h1>
              <p className="text-sm text-slate-500 mt-0.5">
                We&apos;ll send a 6-digit verification code to confirm it&apos;s you.
              </p>
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Mobile number
          </label>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-medium select-none">
              <span className="text-base">🇱🇰</span>
              <span>+94</span>
            </div>
            <input
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="77 123 4567"
              value={formatDisplay(local)}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setLocal(e.target.value.replace(/\D/g, '').slice(0, 9));
                if (error) setError(null);
              }}
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1aae74]/30 focus:border-[#1aae74] transition-colors text-base tracking-wide"
            />
          </div>
          {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
          <p className="text-xs text-slate-500 mt-2">
            By continuing, you agree to our{' '}
            <a href="#" className="text-[#1aae74] font-medium hover:underline">Terms</a> and{' '}
            <a href="#" className="text-[#1aae74] font-medium hover:underline">Privacy Policy</a>.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSend}
          disabled={!isValidSriLankan || otpState === 'sending'}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#1a3d2b] text-white px-6 py-3.5 rounded-2xl font-semibold text-sm hover:bg-[#114b2e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          {otpState === 'sending' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending code…
            </>
          ) : (
            <>
              Send verification code
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    );
  }

  // ── OTP entry view ─────────────────────────────────────────────
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-[#1aae74]" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Enter the code</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            We sent a 6-digit code to <span className="font-semibold text-slate-700">+94 {formatDisplay(local)}</span>{' '}
            <button
              type="button"
              onClick={() => {
                setShowOtp(false);
                setError(null);
                setDigits(['', '', '', '', '', '']);
              }}
              className="text-[#1aae74] font-medium hover:underline ml-1"
            >
              change
            </button>
          </p>
        </div>
      </div>

      <div onPaste={handlePaste} className="flex gap-2 sm:gap-3 justify-between">
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={d}
            disabled={otpState === 'verifying'}
            onChange={(e) => handleDigit(i, e.target.value)}
            onKeyDown={(e) => handleKey(i, e)}
            className={`w-full h-14 sm:h-16 text-center text-2xl font-bold rounded-2xl border-2 transition-colors focus:outline-none focus:border-[#1aae74] focus:ring-2 focus:ring-[#1aae74]/20 disabled:opacity-60 ${
              d
                ? 'border-[#1aae74] bg-emerald-50 text-[#114b2e]'
                : 'border-slate-200 bg-white text-slate-900'
            }`}
          />
        ))}
      </div>

      {/* No submit button — verification fires automatically once all 6 digits are in. */}
      <div className="flex items-center justify-center h-5">
        {otpState === 'verifying' && (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
            <Loader2 className="w-4 h-4 animate-spin text-[#1aae74]" />
            Verifying…
          </span>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-500">Didn&apos;t get a code?</span>
        {resendCountdown > 0 ? (
          <span className="text-slate-400">Resend in {resendCountdown}s</span>
        ) : (
          <button
            type="button"
            onClick={handleSend}
            disabled={otpState === 'sending'}
            className="text-[#1aae74] font-semibold hover:underline disabled:opacity-50"
          >
            Resend code
          </button>
        )}
      </div>
    </div>
  );
}

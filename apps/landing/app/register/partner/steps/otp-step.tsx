'use client';

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

interface OtpStepProps {
  mobileNumber: string;
  value: string;
  onChange: (value: string) => void;
  error: string | null;
}

const SLOT_CLASS =
  'h-14 w-12 rounded-xl border border-slate-200 bg-slate-50 text-lg font-bold text-slate-700 transition-colors data-[active=true]:border-[#1aae74] data-[active=true]:ring-2 data-[active=true]:ring-[#1aae74]/30 data-[active=true]:bg-emerald-50 first:rounded-xl first:border-l last:rounded-xl';

export function OtpStep({ mobileNumber, value, onChange, error }: OtpStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Enter the code</h2>
      <p className="text-sm text-slate-500 mb-8">
        We sent a 6-digit code to <span className="font-semibold text-slate-700">{mobileNumber}</span>
      </p>

      <div className="flex justify-center">
        <InputOTP maxLength={6} value={value} onChange={onChange} autoFocus>
          <InputOTPGroup className="gap-2">
            {Array.from({ length: 6 }, (_, i) => (
              <InputOTPSlot key={i} index={i} className={SLOT_CLASS} />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>

      {error && <p className="text-sm text-red-500 text-center mt-4">{error}</p>}
    </div>
  );
}

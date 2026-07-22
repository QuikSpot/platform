'use client';

import { labelCls, fieldInputCls, FieldError } from '../field-styles';
import type { BaseStepProps } from '../types';

interface PhoneStepProps extends BaseStepProps {
  apiError?: string | null;
}

export function PhoneStep({ form, set, errors, apiError }: PhoneStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">What&apos;s your mobile number?</h2>
      <p className="text-sm text-slate-500 mb-8">
        We&apos;ll text you a verification code to confirm it&apos;s really you.
      </p>

      <label className={labelCls}>Mobile Number</label>
      <input
        type="tel"
        autoFocus
        placeholder="+94 77 123 4567"
        value={form.mobileNumber}
        onChange={e => set('mobileNumber', e.target.value)}
        className={fieldInputCls(errors, 'mobileNumber')}
      />
      <FieldError errors={errors} field="mobileNumber" />
      {apiError && <p className="text-xs text-red-500 mt-1.5">{apiError}</p>}
      <p className="text-xs text-slate-400 mt-2">Standard messaging rates may apply.</p>
    </div>
  );
}

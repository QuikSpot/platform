'use client';

import { labelCls, fieldInputCls, FieldError } from '../field-styles';
import type { BaseStepProps } from '../types';

export function AddressStep({ form, set, errors }: BaseStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Where are you based?</h2>
      <p className="text-sm text-slate-500 mb-8">
        This helps customers know you&apos;re a local, verified professional.
      </p>

      <div className="space-y-5">
        <div>
          <label className={labelCls}>Permanent Address</label>
          <input type="text" placeholder="123, Lush Lane, Garden City" value={form.address}
            onChange={e => set('address', e.target.value)} className={fieldInputCls(errors, 'address')} />
          <FieldError errors={errors} field="address" />
        </div>
        <div>
          <label className={labelCls}>
            WhatsApp Number <span className="text-slate-400 normal-case font-normal tracking-normal">(optional)</span>
          </label>
          <input type="tel" placeholder="+94 77 123 4567" value={form.whatsappNumber}
            onChange={e => set('whatsappNumber', e.target.value)} className={fieldInputCls(errors, 'whatsappNumber')} />
          <FieldError errors={errors} field="whatsappNumber" />
        </div>
      </div>
    </div>
  );
}

'use client';

import { labelCls, fieldInputCls, FieldError } from '../field-styles';
import { PasswordChecklist } from '../password-checklist';
import type { BaseStepProps } from '../types';

export function AccountStep({ form, set, errors }: BaseStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Create your account</h2>
      <p className="text-sm text-slate-500 mb-8">Tell us who you are and set up your login.</p>

      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls}>Full Name</label>
            <input type="text" placeholder="Johnathan Doe" value={form.fullName}
              onChange={e => set('fullName', e.target.value)} className={fieldInputCls(errors, 'fullName')} />
            <FieldError errors={errors} field="fullName" />
          </div>
          <div>
            <label className={labelCls}>NIC / ID Number</label>
            <input type="text" placeholder="987654321V" value={form.nicNumber}
              onChange={e => set('nicNumber', e.target.value)} className={fieldInputCls(errors, 'nicNumber')} />
            <FieldError errors={errors} field="nicNumber" />
          </div>
        </div>

        <div>
          <label className={labelCls}>Email Address</label>
          <input type="email" placeholder="johnathan@instafixd.com" value={form.email}
            onChange={e => set('email', e.target.value)} className={fieldInputCls(errors, 'email')} />
          <FieldError errors={errors} field="email" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls}>Password</label>
            <input type="password" placeholder="Min. 8 characters" value={form.password}
              onChange={e => set('password', e.target.value)} className={fieldInputCls(errors, 'password')} />
            {(form.password.length > 0 || errors.password) && <PasswordChecklist password={form.password} />}
          </div>
          <div>
            <label className={labelCls}>Confirm Password</label>
            <input type="password" placeholder="Re-enter your password" value={form.confirmPassword}
              onChange={e => set('confirmPassword', e.target.value)} className={fieldInputCls(errors, 'confirmPassword')} />
            <FieldError errors={errors} field="confirmPassword" />
          </div>
        </div>
      </div>
    </div>
  );
}

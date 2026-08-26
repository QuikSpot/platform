'use client';

import { ArrowRight, User } from 'lucide-react';
import { useState } from 'react';
import { Checkbox, Field, PasswordInput, SelectInput, TextInput } from './fields';

interface PersonalStepProps {
  values: {
    fullName: string;
    nicNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
    languageCode: string;
    address: string;
  };
  errors: Record<string, string>;
  onChange: <K extends keyof PersonalStepProps['values']>(key: K, value: PersonalStepProps['values'][K]) => void;
  onSubmit: () => void;
  primaryLabel?: string;
  primaryIcon?: React.ReactNode;
}

const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'si', label: 'Sinhala' },
  { value: 'ta', label: 'Tamil' },
];

function passwordScore(p: string): number {
  if (!p) return 0;
  let s = 0;
  if (p.length >= 8) s++;
  if (/[A-Z]/.test(p) && /[a-z]/.test(p)) s++;
  if (/[0-9]/.test(p)) s++;
  if (/[^A-Za-z0-9]/.test(p)) s++;
  return s;
}

export function PersonalStep({
  values,
  errors,
  onChange,
  onSubmit,
  primaryLabel = 'Continue',
  primaryIcon,
}: PersonalStepProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center">
          <User className="w-5 h-5 text-[#1aae74]" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tell us about you</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            This is what customers will see on your profile.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <TextInput
          label="Full name"
          required
          placeholder="e.g. Kamal Perera"
          value={values.fullName}
          onChange={(e) => onChange('fullName', e.target.value)}
          error={errors.fullName}
        />
        <TextInput
          label="NIC / National ID"
          required
          placeholder="200012345678 or 987654321V"
          value={values.nicNumber}
          onChange={(e) => onChange('nicNumber', e.target.value)}
          error={errors.nicNumber}
        />
        <div className="md:col-span-2">
          <TextInput
            label="Email"
            required
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => onChange('email', e.target.value)}
            error={errors.email}
          />
        </div>
        <PasswordInput
          label="Password"
          required
          autoComplete="new-password"
          placeholder="At least 8 characters"
          value={values.password}
          onChange={(e) => onChange('password', e.target.value)}
          error={errors.password}
          showStrength
          strengthScore={passwordScore(values.password)}
        />
        <PasswordInput
          label="Confirm password"
          required
          autoComplete="new-password"
          placeholder="Re-enter your password"
          value={values.confirmPassword}
          onChange={(e) => onChange('confirmPassword', e.target.value)}
          error={errors.confirmPassword}
        />
        <SelectInput
          label="Preferred language"
          required
          hint="Used for your WhatsApp bot conversations"
          value={values.languageCode}
          onChange={(v) => onChange('languageCode', v)}
          options={LANGUAGES}
        />
        <div className="md:col-span-2">
          <TextInput
            label="Permanent address"
            required
            placeholder="House No, Street, City"
            value={values.address}
            onChange={(e) => onChange('address', e.target.value)}
            error={errors.address}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={onSubmit}
        className="hidden lg:inline-flex items-center justify-center gap-2 bg-[#1a3d2b] text-white px-6 py-3.5 rounded-2xl font-semibold text-sm hover:bg-[#114b2e] transition-colors shadow-sm hover:shadow-md"
      >
        {primaryLabel}
        {primaryIcon ?? <ArrowRight className="w-4 h-4" />}
      </button>
    </div>
  );
}

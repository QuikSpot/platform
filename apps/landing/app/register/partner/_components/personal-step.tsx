'use client';

import { useState } from 'react';
import { Field, PasswordInput, SelectInput, TextInput } from './fields';

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
}: PersonalStepProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
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
            optional
            hint="Used for login and account recovery, if provided."
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
          hint="For WhatsApp bot conversations"
          value={values.languageCode}
          onChange={(v) => onChange('languageCode', v)}
          options={LANGUAGES}
        />
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
  );
}

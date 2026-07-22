'use client';

import { CheckCircle2, X } from 'lucide-react';

const PASSWORD_RULES = [
  { label: 'At least 8 characters', test: (p: string) => p.length >= 8 },
  { label: 'One uppercase letter (A–Z)', test: (p: string) => /[A-Z]/.test(p) },
  { label: 'One number (0–9)', test: (p: string) => /[0-9]/.test(p) },
  { label: 'One special character (e.g. !@#$)', test: (p: string) => /[^A-Za-z0-9]/.test(p) },
];

export function PasswordChecklist({ password }: { password: string }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {PASSWORD_RULES.map(rule => {
        const ok = rule.test(password);
        return (
          <li key={rule.label} className={`flex items-center gap-2 text-xs transition-colors ${ok ? 'text-[#1aae74]' : 'text-slate-400'}`}>
            {ok
              ? <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              : <X className="w-3.5 h-3.5 flex-shrink-0 text-slate-300" />}
            {rule.label}
          </li>
        );
      })}
    </ul>
  );
}

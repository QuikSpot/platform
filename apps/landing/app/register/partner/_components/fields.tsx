'use client';

import { ChangeEvent, InputHTMLAttributes, ReactNode, forwardRef, useId } from 'react';
import { Check, ChevronDown, Eye, EyeOff } from 'lucide-react';

/** Shared classes for every text-style input */
const BASE_INPUT =
  'w-full px-4 py-3 rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1aae74]/30 focus:border-[#1aae74] transition-colors disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed';

function fieldBorderCls(hasError: boolean) {
  return hasError
    ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
    : 'border-slate-200';
}

interface FieldProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  htmlFor?: string;
  children: ReactNode;
}

export function Field({ label, hint, error, required, optional, htmlFor, children }: FieldProps) {
  const autoId = useId();
  const id = htmlFor ?? autoId;
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="flex items-center justify-between text-sm font-semibold text-slate-700">
          <span>
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </span>
          {optional && <span className="text-xs font-normal text-slate-400">Optional</span>}
        </label>
      )}
      <div data-field-id={id}>{children}</div>
      {error ? (
        <p className="text-xs text-red-500 flex items-center gap-1">{error}</p>
      ) : hint ? (
        <p className="text-xs text-slate-500">{hint}</p>
      ) : null}
    </div>
  );
}

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  rightAdornment?: ReactNode;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  { label, hint, error, optional, rightAdornment, className = '', id, required, ...props },
  ref,
) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <Field label={label} hint={hint} error={error} optional={optional} htmlFor={fieldId} required={required}>
      <div className="relative">
        <input
          ref={ref}
          id={fieldId}
          className={`${BASE_INPUT} ${fieldBorderCls(!!error)} ${rightAdornment ? 'pr-12' : ''} ${className}`}
          aria-invalid={!!error}
          {...props}
        />
        {rightAdornment && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">{rightAdornment}</div>
        )}
      </div>
    </Field>
  );
});

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  showStrength?: boolean;
  strengthScore?: number;
  strengthLabels?: string[];
}

export function PasswordInput({
  label,
  hint,
  error,
  optional,
  showStrength,
  strengthScore = 0,
  strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong'],
  id,
  required,
  value,
  onChange,
  ...props
}: PasswordInputProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const [visible, setVisible] = useToggleState(false);
  const showStrengthBar = showStrength && typeof value === 'string' && value.length > 0;
  const strengthColor =
    strengthScore <= 1
      ? 'bg-red-500'
      : strengthScore === 2
        ? 'bg-amber-500'
        : strengthScore === 3
          ? 'bg-blue-500'
          : 'bg-emerald-500';

  return (
    <Field label={label} hint={hint} error={error} optional={optional} htmlFor={fieldId} required={required}>
      <div className="relative">
        <input
          id={fieldId}
          type={visible ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          className={`${BASE_INPUT} ${fieldBorderCls(!!error)} pr-12`}
          aria-invalid={!!error}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Hide password' : 'Show password'}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-100"
        >
          {visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
      {showStrengthBar && (
        <div className="mt-2 flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full ${strengthColor} transition-all duration-300`}
              style={{ width: `${Math.max(8, (strengthScore / 4) * 100)}%` }}
            />
          </div>
          <span className="text-xs font-medium text-slate-500 w-12 text-right">
            {strengthLabels[strengthScore] || ''}
          </span>
        </div>
      )}
    </Field>
  );
}

interface SelectInputProps {
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string; disabled?: boolean }[];
  placeholder?: string;
  disabled?: boolean;
  id?: string;
}

export function SelectInput({
  label,
  hint,
  error,
  optional,
  required,
  value,
  onChange,
  options,
  placeholder,
  disabled,
  id,
}: SelectInputProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <Field label={label} hint={hint} error={error} optional={optional} htmlFor={fieldId} required={required}>
      <div className="relative">
        <select
          id={fieldId}
          value={value}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
          disabled={disabled}
          aria-invalid={!!error}
          className={`${BASE_INPUT} ${fieldBorderCls(!!error)} appearance-none pr-10 ${disabled ? 'opacity-60' : ''}`}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      </div>
    </Field>
  );
}

interface CheckboxProps {
  label: ReactNode;
  description?: ReactNode;
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
}

export function Checkbox({ label, description, checked, onChange, error }: CheckboxProps) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <span
        className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
          checked
            ? 'bg-[#1aae74] border-[#1aae74]'
            : error
              ? 'border-red-400 bg-white'
              : 'border-slate-300 bg-white group-hover:border-[#1aae74]'
        }`}
      >
        {checked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </span>
      <span className="flex-1">
        <span className="block text-sm font-medium text-slate-800">{label}</span>
        {description && <span className="block text-xs text-slate-500 mt-1">{description}</span>}
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        aria-invalid={!!error}
      />
    </label>
  );
}

interface ChipProps {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
  size?: 'sm' | 'md';
}

export function Chip({ selected, onClick, children, size = 'md' }: ChipProps) {
  const sizeCls = size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2.5 text-sm';
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${sizeCls} rounded-xl font-medium border transition-all ${
        selected
          ? 'bg-[#1aae74] border-[#1aae74] text-white shadow-sm shadow-emerald-500/20'
          : 'bg-white border-slate-200 text-slate-600 hover:border-[#1aae74] hover:text-[#114b2e]'
      }`}
    >
      {children}
    </button>
  );
}

// local helper to keep imports tight
import { useState as useToggleState } from 'react';

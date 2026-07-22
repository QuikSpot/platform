export const labelCls = 'block text-xs font-semibold text-slate-500 tracking-widest uppercase mb-2';
export const inputCls = 'w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1aae74]/30 focus:border-[#1aae74] transition';
export const selectCls = `${inputCls} appearance-none`;

export function fieldInputCls(errors: Record<string, string>, field: string) {
  return `w-full px-4 py-3 rounded-xl border ${errors[field] ? 'border-red-400' : 'border-slate-200'} bg-slate-50 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1aae74]/30 focus:border-[#1aae74] transition`;
}

export function fieldSelectCls(errors: Record<string, string>, field: string) {
  return `${fieldInputCls(errors, field)} appearance-none`;
}

export function FieldError({ errors, field }: { errors: Record<string, string>; field: string }) {
  return errors[field] ? <p className="text-xs text-red-500 mt-1.5">{errors[field]}</p> : null;
}

export function SelectChevron() {
  return (
    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

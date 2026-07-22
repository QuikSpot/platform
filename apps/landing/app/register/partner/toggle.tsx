'use client';

export function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-checked={on}
      role="switch"
      className={`relative inline-flex w-12 h-6 rounded-full transition-colors duration-200 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1aae74] focus-visible:ring-offset-1 ${on ? 'bg-[#1aae74]' : 'bg-slate-300'}`}
    >
      <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${on ? 'translate-x-[22px]' : 'translate-x-0'}`} />
    </button>
  );
}

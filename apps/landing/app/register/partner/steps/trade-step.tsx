'use client';

import { CheckCircle2 } from 'lucide-react';
import { getCategoryIcon } from '../category-icons';
import type { BaseStepProps, Category } from '../types';

interface TradeStepProps extends BaseStepProps {
  categories: Category[];
  categoriesLoading: boolean;
}

export function TradeStep({ form, set, categories, categoriesLoading }: TradeStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">What&apos;s your primary trade?</h2>
      <p className="text-sm text-slate-500 mb-8">Choose the main category customers should find you under.</p>

      {categoriesLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-24 rounded-2xl bg-slate-100 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {categories.map(cat => {
            const Icon = getCategoryIcon(cat.name);
            const selected = form.primaryCategory === cat.name;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => { set('primaryCategory', cat.name); set('subCategories', []); }}
                className={`relative flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-colors ${
                  selected ? 'border-[#1aae74] bg-emerald-50' : 'border-slate-200 bg-white hover:border-[#1aae74]/40'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${selected ? 'bg-[#1aae74] text-white' : 'bg-emerald-50 text-[#1aae74]'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-slate-800 text-sm truncate">{cat.name}</p>
                  <p className="text-xs text-slate-400">{cat.subCategories.length} specializations</p>
                </div>
                {selected && <CheckCircle2 className="w-5 h-5 text-[#1aae74] absolute top-3 right-3" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

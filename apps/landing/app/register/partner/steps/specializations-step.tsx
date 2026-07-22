'use client';

import { Sparkles } from 'lucide-react';
import { labelCls, fieldSelectCls, SelectChevron, FieldError } from '../field-styles';
import type { BaseStepProps, Category } from '../types';

const EXPERIENCE_LEVELS = ['Entry Level (1–2 years)', 'Intermediate (3–5 years)', 'Expert (5–10 years)', 'Master (10+ years)'];

interface SpecializationsStepProps extends BaseStepProps {
  categories: Category[];
  toggleSubCategory: (name: string) => void;
  predictingCategory: boolean;
  enhancingBio: boolean;
  bioError: string | null;
  onEnhanceBio: () => void;
  onBioBlur: () => void;
}

export function SpecializationsStep({
  form,
  set,
  errors,
  categories,
  toggleSubCategory,
  predictingCategory,
  enhancingBio,
  bioError,
  onEnhanceBio,
  onBioBlur,
}: SpecializationsStepProps) {
  const subCategoryOptions = categories.find(c => c.name === form.primaryCategory)?.subCategories ?? [];

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Your specializations</h2>
      <p className="text-sm text-slate-500 mb-8">
        Pick what you specialize in within {form.primaryCategory || 'your trade'}, and tell customers about yourself.
      </p>

      <div className="mb-6">
        <label className={labelCls}>Specializations</label>
        <div className="flex flex-wrap gap-2 mt-3 mb-1">
          {subCategoryOptions.map(sub => (
            <button
              key={sub.id}
              type="button"
              onClick={() => toggleSubCategory(sub.name)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                form.subCategories.includes(sub.name)
                  ? 'bg-[#1aae74] border-[#1aae74] text-white shadow-sm'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-[#1aae74] hover:text-[#1aae74]'
              }`}
            >
              {sub.name}
            </button>
          ))}
          {predictingCategory && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 text-transparent text-xs font-semibold animate-pulse w-24">
              loading
            </span>
          )}
        </div>
        <FieldError errors={errors} field="subCategories" />
      </div>

      <div className="mb-6">
        <label className={labelCls}>Experience Level</label>
        <div className="relative">
          <select value={form.experienceLevel} onChange={e => set('experienceLevel', e.target.value)} className={fieldSelectCls(errors, 'experienceLevel')}>
            {EXPERIENCE_LEVELS.map(l => <option key={l}>{l}</option>)}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><SelectChevron /></div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label className={labelCls}>Professional Bio</label>
          <button
            type="button"
            onClick={onEnhanceBio}
            disabled={enhancingBio || !form.bio.trim()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-[#1aae74] hover:bg-emerald-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {enhancingBio ? 'Enhancing…' : 'Enhance'}
          </button>
        </div>
        <textarea
          placeholder="Tell customers about your craftsmanship and values..."
          value={form.bio}
          onChange={e => set('bio', e.target.value)}
          onBlur={onBioBlur}
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1aae74]/30 focus:border-[#1aae74] transition resize-none"
        />
        <div className="flex items-center justify-between mt-1.5">
          {errors.bio
            ? <p className="text-xs text-red-500">{errors.bio}</p>
            : bioError
              ? <p className="text-xs text-red-500">{bioError}</p>
              : <span />}
          <p className={`text-xs ml-auto ${form.bio.length > 500 ? 'text-red-500' : 'text-slate-400'}`}>
            {form.bio.length}/500
          </p>
        </div>
      </div>
    </div>
  );
}

'use client';

import { ArrowRight, Loader2, Sparkles, Wrench, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Chip, Field, SelectInput, TextInput } from './fields';

interface Category {
  id: string;
  name: string;
  subCategories: { id: string; name: string }[];
}

interface ExpertiseStepProps {
  values: {
    primaryCategory: string;
    experienceLevel: string;
    subCategories: string[];
    bio: string;
  };
  errors: Record<string, string>;
  onChange: <K extends keyof ExpertiseStepProps['values']>(
    key: K,
    value: ExpertiseStepProps['values'][K],
  ) => void;
  onSubmit: () => void;
  backendUrl: string | undefined;
}

const EXPERIENCE_LEVELS = [
  { value: 'BEGINNER', label: 'Entry Level (1–2 years)' },
  { value: 'INTERMEDIATE', label: 'Intermediate (3–5 years)' },
  { value: 'EXPERT', label: 'Expert (5–10 years)' },
  { value: 'EXPERT', label: 'Master (10+ years)' },
];

const BIO_MIN = 50;
const BIO_MAX = 500;

export function ExpertiseStep({
  values,
  errors,
  onChange,
  onSubmit,
  backendUrl,
}: ExpertiseStepProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [enhancing, setEnhancing] = useState(false);
  const [enhanceError, setEnhanceError] = useState<string | null>(null);
  const [predicting, setPredicting] = useState(false);
  const lastPredictedBio = useRef('');

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${backendUrl}/api/v1/categories`, { signal: controller.signal })
      .then((r) => r.json())
      .then((res: { data?: Category[] }) => {
        const list = res.data ?? [];
        setCategories(list);
        if (list.length > 0 && !values.primaryCategory) {
          onChange('primaryCategory', list[0].name);
        }
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setCategoriesLoading(false);
      })
      .finally(() => setCategoriesLoading(false));
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const subCategories =
    categories.find((c) => c.name === values.primaryCategory)?.subCategories ?? [];

  const applyPredicted = (predictions: { main_category_name: string; sub_category_name: string }[]) => {
    if (predictions.length === 0) return;
    const main = predictions[0].main_category_name;
    const subs = predictions.map((p) => p.sub_category_name);
    onChange('primaryCategory', values.primaryCategory || (categories.some((c) => c.name === main) ? main : values.primaryCategory));
    onChange('subCategories', Array.from(new Set([...values.subCategories, ...subs])));
  };

  const predictFromBio = async (bioText: string) => {
    if (!bioText.trim() || bioText === lastPredictedBio.current) return;
    lastPredictedBio.current = bioText;
    setPredicting(true);
    try {
      const res = await fetch(`${backendUrl}/api/v1/ai/predict-category`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: bioText }),
      });
      if (!res.ok) return;
      const body = (await res.json()) as { data?: { main_category_name: string; sub_category_name: string }[] };
      applyPredicted(body.data ?? []);
    } catch {
      /* silent */
    } finally {
      setPredicting(false);
    }
  };

  const handleEnhance = async () => {
    if (!values.bio.trim()) {
      setEnhanceError('Write a short bio first, then enhance it.');
      return;
    }
    setEnhancing(true);
    setEnhanceError(null);
    try {
      const res = await fetch(`${backendUrl}/api/v1/ai/improve-text`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: values.bio }),
      });
      if (!res.ok) {
        setEnhanceError('Could not enhance right now. Please try again.');
        return;
      }
      const body = (await res.json()) as { data?: { improved?: string } };
      const improved = body.data?.improved;
      if (improved) {
        onChange('bio', improved);
        await predictFromBio(improved);
      }
    } catch {
      setEnhanceError('Could not reach the enhancement service.');
    } finally {
      setEnhancing(false);
    }
  };

  const toggleSub = (name: string) => {
    onChange(
      'subCategories',
      values.subCategories.includes(name)
        ? values.subCategories.filter((s) => s !== name)
        : [...values.subCategories, name],
    );
  };

  const bioTooShort = values.bio.length > 0 && values.bio.length < BIO_MIN;
  const bioTooLong = values.bio.length > BIO_MAX;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center">
          <Wrench className="w-5 h-5 text-[#1aae74]" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Your expertise</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Pick your specialty and tell customers your story.
          </p>
        </div>
      </div>

      {/* Bio with AI enhance */}
      <Field
        label="About you"
        hint={`A short bio customers will see. ${BIO_MIN}–${BIO_MAX} characters.`}
        error={enhanceError ?? errors.bio}
      >
        <div className="relative">
          <textarea
            value={values.bio}
            onChange={(e) => onChange('bio', e.target.value)}
            onBlur={() => predictFromBio(values.bio)}
            placeholder="Hi! I\u2019m an experienced plumber with 8 years of residential and commercial work. I focus on emergency repairs, leak detection, and full bathroom installations…"
            rows={5}
            className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1aae74]/30 focus:border-[#1aae74] transition-colors resize-none ${
              bioTooShort || bioTooLong || errors.bio ? 'border-red-300' : 'border-slate-200'
            }`}
          />
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            {predicting && (
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1">
                <Loader2 className="w-3 h-3 animate-spin" /> AI suggesting
              </span>
            )}
            <button
              type="button"
              onClick={handleEnhance}
              disabled={enhancing || !values.bio.trim()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-[#1aae74] hover:bg-emerald-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {enhancing ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Sparkles className="w-3.5 h-3.5" />
              )}
              {enhancing ? 'Enhancing…' : 'Enhance with AI'}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className={bioTooShort ? 'text-red-500' : 'text-slate-400'}>
            {values.bio.length} / {BIO_MAX} characters
            {bioTooShort && ` (need ${BIO_MIN - values.bio.length} more)`}
          </span>
        </div>
      </Field>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <SelectInput
          label="Main category"
          required
          placeholder={categoriesLoading ? 'Loading…' : 'Select category'}
          value={values.primaryCategory}
          onChange={(v) => {
            onChange('primaryCategory', v);
            onChange('subCategories', []);
          }}
          options={categories.map((c) => ({ value: c.name, label: c.name }))}
          disabled={categoriesLoading}
          error={errors.primaryCategory}
        />
        <SelectInput
          label="Experience level"
          required
          value={values.experienceLevel}
          onChange={(v) => onChange('experienceLevel', v)}
          options={EXPERIENCE_LEVELS}
          error={errors.experienceLevel}
        />
      </div>

      <Field label="Sub-specialties" required error={errors.subCategories}>
        {subCategories.length === 0 ? (
          <p className="text-sm text-slate-400 italic">Select a main category to see options.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {subCategories.map((s) => (
              <Chip
                key={s.id}
                selected={values.subCategories.includes(s.name)}
                onClick={() => toggleSub(s.name)}
              >
                {s.name}
              </Chip>
            ))}
          </div>
        )}
      </Field>

      {/* Selected sub-categories summary */}
      {values.subCategories.length > 0 && (
        <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-4">
          <p className="text-xs font-semibold text-[#114b2e] uppercase tracking-wider mb-2">
            You selected
          </p>
          <div className="flex flex-wrap gap-2">
            {values.subCategories.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#114b2e] text-white text-xs font-semibold"
              >
                {c}
                <button
                  type="button"
                  onClick={() => toggleSub(c)}
                  className="hover:text-emerald-300 transition-colors"
                  aria-label={`Remove ${c}`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={onSubmit}
        className="hidden lg:inline-flex items-center justify-center gap-2 bg-[#1a3d2b] text-white px-6 py-3.5 rounded-2xl font-semibold text-sm hover:bg-[#114b2e] transition-colors shadow-sm hover:shadow-md"
      >
        Continue
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

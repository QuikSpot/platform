'use client';

import { useEffect, useState } from 'react';
import { Plus, Tag } from 'lucide-react';

interface SubCategory {
  id: string;
  name: string;
}

interface MainCategory {
  id: string;
  name: string;
  iconUrl: string | null;
  subCategories: SubCategory[];
}

const inputCls =
  'w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1aae74]/30 focus:border-[#1aae74] transition';

export function AdminCategoriesClient() {
  const [categories, setCategories] = useState<MainCategory[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);

  const [newName, setNewName] = useState('');
  const [newIconUrl, setNewIconUrl] = useState('');
  const [addingCategory, setAddingCategory] = useState(false);
  const [addCategoryError, setAddCategoryError] = useState<string | null>(null);

  const [subCategoryInputs, setSubCategoryInputs] = useState<Record<string, string>>({});
  const [addingSubCategoryFor, setAddingSubCategoryFor] = useState<string | null>(null);
  const [subCategoryErrors, setSubCategoryErrors] = useState<Record<string, string>>({});

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const fetchCategories = async () => {
    setCategoriesLoading(true);
    setCategoriesError(null);
    try {
      const res = await fetch(`${backendUrl}/api/v1/categories`);
      const body = await res.json() as { data?: MainCategory[] };
      setCategories(body.data ?? []);
    } catch {
      setCategoriesError('Unable to load categories. Please refresh.');
    } finally {
      setCategoriesLoading(false);
    }
  };

  useEffect(() => {
    void fetchCategories();
  }, []);

  const postJson = async (path: string, body: unknown) => {
    const res = await fetch(`${backendUrl}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const parsed = await res.json() as { data?: unknown; message?: string };
    if (!res.ok) throw new Error(parsed?.message ?? 'Request failed.');
    return parsed.data;
  };

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) {
      setAddCategoryError('Category name is required.');
      return;
    }
    setAddingCategory(true);
    setAddCategoryError(null);
    try {
      await postJson('/api/v1/categories', {
        name: newName.trim(),
        iconUrl: newIconUrl.trim() || undefined,
      });
      setNewName('');
      setNewIconUrl('');
      await fetchCategories();
    } catch (err) {
      setAddCategoryError(err instanceof Error ? err.message : 'Failed to add category.');
    } finally {
      setAddingCategory(false);
    }
  };

  const handleAddSubCategory = async (mainCategoryId: string) => {
    const name = (subCategoryInputs[mainCategoryId] ?? '').trim();
    if (!name) {
      setSubCategoryErrors(prev => ({ ...prev, [mainCategoryId]: 'Name is required.' }));
      return;
    }
    setAddingSubCategoryFor(mainCategoryId);
    setSubCategoryErrors(prev => { const e = { ...prev }; delete e[mainCategoryId]; return e; });
    try {
      await postJson(`/api/v1/categories/${mainCategoryId}/sub-categories`, { name });
      setSubCategoryInputs(prev => ({ ...prev, [mainCategoryId]: '' }));
      await fetchCategories();
    } catch (err) {
      setSubCategoryErrors(prev => ({
        ...prev,
        [mainCategoryId]: err instanceof Error ? err.message : 'Failed to add sub-category.',
      }));
    } finally {
      setAddingSubCategoryFor(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-slate-900">Category Management</h1>
          <p className="text-sm text-slate-500">Add main categories and their specializations.</p>
        </div>

        {/* Add main category */}
        <form onSubmit={handleAddCategory} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-8">
          <h2 className="text-sm font-bold text-slate-900 mb-4">Add a main category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-[2fr_2fr_auto] gap-3">
            <input
              type="text"
              placeholder="Category name (e.g. Roofing)"
              value={newName}
              onChange={e => setNewName(e.target.value)}
              className={inputCls}
            />
            <input
              type="text"
              placeholder="Icon URL (optional)"
              value={newIconUrl}
              onChange={e => setNewIconUrl(e.target.value)}
              className={inputCls}
            />
            <button
              type="submit"
              disabled={addingCategory}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#1aae74] text-white text-sm font-semibold hover:bg-[#159e67] transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              <Plus className="w-4 h-4" /> {addingCategory ? 'Adding…' : 'Add'}
            </button>
          </div>
          {addCategoryError && <p className="text-xs text-red-500 mt-2">{addCategoryError}</p>}
        </form>

        {/* Existing categories */}
        {categoriesLoading ? (
          <p className="text-sm text-slate-400">Loading categories…</p>
        ) : categoriesError ? (
          <p className="text-sm text-red-500">{categoriesError}</p>
        ) : categories.length === 0 ? (
          <p className="text-sm text-slate-400 italic">No categories yet — add one above.</p>
        ) : (
          <div className="space-y-4">
            {categories.map(cat => (
              <div key={cat.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Tag className="w-4 h-4 text-[#1aae74]" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{cat.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.subCategories.length === 0 ? (
                    <p className="text-xs text-slate-400 italic">No specializations yet.</p>
                  ) : (
                    cat.subCategories.map(sub => (
                      <span key={sub.id} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium">
                        {sub.name}
                      </span>
                    ))
                  )}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a specialization…"
                    value={subCategoryInputs[cat.id] ?? ''}
                    onChange={e => setSubCategoryInputs(prev => ({ ...prev, [cat.id]: e.target.value }))}
                    onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); void handleAddSubCategory(cat.id); } }}
                    className={`${inputCls} flex-1`}
                  />
                  <button
                    type="button"
                    onClick={() => void handleAddSubCategory(cat.id)}
                    disabled={addingSubCategoryFor === cat.id}
                    className="px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-semibold hover:border-[#1aae74] hover:text-[#1aae74] transition-colors disabled:opacity-60 whitespace-nowrap"
                  >
                    {addingSubCategoryFor === cat.id ? 'Adding…' : 'Add'}
                  </button>
                </div>
                {subCategoryErrors[cat.id] && (
                  <p className="text-xs text-red-500 mt-1.5">{subCategoryErrors[cat.id]}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

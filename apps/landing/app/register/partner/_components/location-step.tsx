'use client';

import { ArrowRight, MapPin, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useLocations } from '@/hooks/use-locations';
import { Chip, Field, SelectInput } from './fields';

interface LocationStepProps {
  values: { province: string; district: string; serviceZones: string[] };
  errors: Record<string, string>;
  onChange: <K extends keyof LocationStepProps['values']>(key: K, value: LocationStepProps['values'][K]) => void;
  onSubmit: () => void;
}

export function LocationStep({ values, errors, onChange, onSubmit }: LocationStepProps) {
  const { provinces, districts, zones, provincesLoading, districtsLoading, zonesLoading } =
    useLocations(values.province, values.district);

  const [zoneSearch, setZoneSearch] = useState('');

  const provinceOptions = useMemo(
    () => provinces.map((p) => ({ value: p.name, label: p.name })),
    [provinces],
  );
  const districtOptions = useMemo(
    () => districts.map((d) => ({ value: d.name, label: d.name })),
    [districts],
  );

  const filteredZones = useMemo(
    () => zones.filter((z) => z.zone_name.toLowerCase().includes(zoneSearch.toLowerCase())),
    [zones, zoneSearch],
  );

  const toggleZone = (name: string) => {
    const next = values.serviceZones.includes(name)
      ? values.serviceZones.filter((z) => z !== name)
      : [...values.serviceZones, name];
    onChange('serviceZones', next);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center">
          <MapPin className="w-5 h-5 text-[#1aae74]" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Where do you work?</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Pick the areas where you accept bookings.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <SelectInput
          label="Province"
          required
          placeholder={provincesLoading ? 'Loading…' : 'Select province'}
          value={values.province}
          onChange={(v) => {
            onChange('province', v);
            onChange('district', '');
            onChange('serviceZones', []);
          }}
          options={provinceOptions}
          disabled={provincesLoading}
          error={errors.province}
        />
        <SelectInput
          label="District"
          required
          placeholder={!values.province ? 'Select a province first' : districtsLoading ? 'Loading…' : 'Select district'}
          value={values.district}
          onChange={(v) => {
            onChange('district', v);
            onChange('serviceZones', []);
          }}
          options={districtOptions}
          disabled={!values.province || districtsLoading}
          error={errors.district}
        />
      </div>

      {/* Selected zones as chips */}
      {values.district && (
        <Field label="Selected service zones" required error={errors.serviceZones}>
          <div className="rounded-2xl border border-slate-200 bg-white p-3 min-h-[60px]">
            {values.serviceZones.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {values.serviceZones.map((z) => (
                  <span
                    key={z}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#114b2e] text-white text-xs font-semibold"
                  >
                    {z}
                    <button
                      type="button"
                      onClick={() => toggleZone(z)}
                      className="hover:text-emerald-300 transition-colors"
                      aria-label={`Remove ${z}`}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-400 italic px-2 py-2">No areas selected yet.</p>
            )}
          </div>
        </Field>
      )}

      {/* Zone search/picker */}
      {values.district && (
        <Field
          label="Add areas"
          hint="Type to filter, then tap to add."
        >
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search areas in this district…"
              value={zoneSearch}
              onChange={(e) => setZoneSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1aae74]/30 focus:border-[#1aae74] transition-colors"
            />
          </div>

          <div className="mt-3 max-h-64 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2">
            {zonesLoading ? (
              <p className="text-sm text-slate-400 italic px-2 py-3">Loading areas…</p>
            ) : filteredZones.length === 0 ? (
              <p className="text-sm text-slate-400 italic px-2 py-3">
                {zoneSearch ? 'No areas match your search.' : 'Start typing to find areas.'}
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {filteredZones.map((z) => (
                  <Chip
                    key={z.id}
                    size="sm"
                    selected={values.serviceZones.includes(z.zone_name)}
                    onClick={() => toggleZone(z.zone_name)}
                  >
                    {z.zone_name}
                  </Chip>
                ))}
              </div>
            )}
          </div>
        </Field>
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

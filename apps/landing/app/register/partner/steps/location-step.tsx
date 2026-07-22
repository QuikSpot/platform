'use client';

import { CheckCircle2 } from 'lucide-react';
import { labelCls, fieldSelectCls, FieldError, SelectChevron } from '../field-styles';
import type { BaseStepProps } from '../types';
import type { Province, District, Zone } from '@/hooks/use-locations';

interface LocationStepProps extends BaseStepProps {
  provinces: Province[];
  districts: District[];
  zones: Zone[];
  provincesLoading: boolean;
  districtsLoading: boolean;
  zonesLoading: boolean;
  zoneSearch: string;
  setZoneSearch: (value: string) => void;
  toggleZone: (zone: string) => void;
}

export function LocationStep({
  form,
  set,
  errors,
  provinces,
  districts,
  zones,
  provincesLoading,
  districtsLoading,
  zonesLoading,
  zoneSearch,
  setZoneSearch,
  toggleZone,
}: LocationStepProps) {
  const filteredZones = zones.filter(z => z.zone_name.toLowerCase().includes(zoneSearch.toLowerCase()));

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Where do you work?</h2>
      <p className="text-sm text-slate-500 mb-8">Select the province, district, and specific areas you serve.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label className={labelCls}>Province</label>
          <div className="relative">
            <select
              value={form.province}
              onChange={e => { set('province', e.target.value); set('district', ''); set('serviceZones', []); }}
              disabled={provincesLoading}
              className={`${fieldSelectCls(errors, 'province')} disabled:opacity-50`}
            >
              <option value="">{provincesLoading ? 'Loading…' : 'Select province'}</option>
              {provinces.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><SelectChevron /></div>
          </div>
          <FieldError errors={errors} field="province" />
        </div>
        <div>
          <label className={labelCls}>District</label>
          <div className="relative">
            <select
              value={form.district}
              onChange={e => { set('district', e.target.value); set('serviceZones', []); }}
              disabled={!form.province || districtsLoading}
              className={`${fieldSelectCls(errors, 'district')} disabled:opacity-50`}
            >
              <option value="">{districtsLoading ? 'Loading…' : 'Select district'}</option>
              {districts.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><SelectChevron /></div>
          </div>
          <FieldError errors={errors} field="district" />
        </div>
      </div>

      <div className="mb-4 p-5 bg-slate-50/50 border border-slate-100 rounded-2xl relative">
        <label className={labelCls}>Search Service Zones {form.district && `in ${form.district}`}</label>
        <div className="relative mt-3">
          <input
            type="text"
            placeholder="Search for towns (e.g. Maharagama...)"
            value={zoneSearch}
            onChange={e => setZoneSearch(e.target.value)}
            disabled={!form.district}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1aae74]/30 focus:border-[#1aae74] transition disabled:opacity-50"
          />
          {zonesLoading && (
            <div className="absolute z-50 left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl px-4 py-3 text-xs text-slate-400 italic">
              Loading zones…
            </div>
          )}
          {!zonesLoading && zoneSearch.trim() && (
            <div className="absolute z-50 left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl max-h-48 overflow-y-auto">
              {filteredZones.map(z => (
                <button
                  key={z.id}
                  type="button"
                  onClick={() => { toggleZone(z.zone_name); setZoneSearch(''); }}
                  className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-emerald-50 transition-colors ${
                    form.serviceZones.includes(z.zone_name) ? 'bg-emerald-50/50 text-[#1aae74] font-semibold' : 'text-slate-600'
                  }`}
                >
                  {z.zone_name}
                  {form.serviceZones.includes(z.zone_name) && <CheckCircle2 className="w-4 h-4" />}
                </button>
              ))}
              {filteredZones.length === 0 && (
                <div className="px-4 py-3 text-xs text-slate-400 italic">No matching zones found.</div>
              )}
            </div>
          )}
        </div>
      </div>

      <div>
        <label className={labelCls}>Selected Zones</label>
        <div className={`bg-slate-50 border ${errors.serviceZones ? 'border-red-400' : 'border-slate-200'} rounded-2xl p-4 min-h-[56px] flex flex-wrap gap-2 transition-all`}>
          {form.serviceZones.length > 0 ? (
            form.serviceZones.map(zone => (
              <span key={zone} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#114b2e] text-white text-xs font-semibold shadow-sm">
                {zone}
                <button type="button" onClick={() => toggleZone(zone)} className="hover:text-emerald-300 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))
          ) : (
            <p className="text-xs text-slate-400 italic">No zones selected yet — search above to add areas you cover.</p>
          )}
        </div>
        <FieldError errors={errors} field="serviceZones" />
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowLeft,
  BadgeCheck,
  MapPin,
  Wrench,
  Clock,
  ShieldCheck,
  Camera,
  Upload,
  UserRound,
  CheckCircle2,
} from 'lucide-react';

type FormData = {
  fullName: string;
  nicNumber: string;
  mobileNumber: string;
  whatsappNumber: string;
  email: string;
  address: string;
  province: string;
  district: string;
  serviceZones: string[];
  primaryCategory: string;
  experienceLevel: string;
  subCategories: string[];
  bio: string;
  nightService: boolean;
  serviceDays: string[];
  workStartTime: string;
  workEndTime: string;
  nicFrontImage: File | null;
  nicBackImage: File | null;
  selfieImage: File | null;
  portfolio: File | null;
  agreeTerms: boolean;
  agreeCommission: boolean;
  otp: string;
};

const STEPS = [
  { id: 1, label: 'Basic Info' },
  { id: 2, label: 'Location' },
  { id: 3, label: 'Expertise' },
  { id: 4, label: 'Availability' },
  { id: 5, label: 'Verification' },
];

const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const PROVINCES = ['Central', 'Eastern', 'North Central', 'Northern', 'North Western', 'Sabaragamuwa', 'Southern', 'Uva', 'Western'];
const DISTRICTS: Record<string, string[]> = {
  'Central': ['Kandy', 'Matale', 'Nuwara Eliya'],
  'Eastern': ['Ampara', 'Batticaloa', 'Trincomalee'],
  'North Central': ['Anuradhapura', 'Polonnaruwa'],
  'Northern': ['Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya'],
  'North Western': ['Kurunegala', 'Puttalam'],
  'Sabaragamuwa': ['Kegalle', 'Ratnapura'],
  'Southern': ['Galle', 'Hambantota', 'Matara'],
  'Uva': ['Badulla', 'Moneragala'],
  'Western': ['Colombo', 'Gampaha', 'Kalutara']
};
const CATEGORIES_MAP: Record<string, string[]> = {
  'Home Maintenance': ['Painting', 'Furniture Assembly', 'Roof Repair', 'Tiling', 'Carpentry', 'Masonry'],
  'Cleaning': ['House Cleaning', 'Deep Cleaning', 'Carpet Cleaning', 'Window Cleaning', 'Upholstery Cleaning'],
  'Electrical': ['Wiring', 'Appliance Repair', 'Lighting Installation', 'CCTV Installation', 'Solar Panel Maintenance'],
  'Plumbing': ['Leak Repair', 'Pipe Installation', 'Drain Cleaning', 'Bathroom Fitting', 'Water Tank Cleaning'],
  'Carpentry': ['Custom Furniture', 'Kitchen Cabinets', 'Door Repair', 'Wood Polishing', 'Deck Building'],
  'Landscaping': ['Garden Design', 'Lawn Mowing', 'Fence Installation', 'Tree Trimming', 'Irrigation Systems']
};
const CATEGORIES = Object.keys(CATEGORIES_MAP);
const EXPERIENCE_LEVELS = ['Entry Level (1–2 years)', 'Intermediate (3–5 years)', 'Expert (5–10 years)', 'Master (10+ years)'];

const SERVICE_ZONES_MAP: Record<string, string[]> = {
  'Colombo': ['Maharagama', 'Kottawa', 'Pannipitiya', 'Nugegoda', 'Mount Lavinia', 'Dehiwala', 'Ratmalana', 'Battaramulla', 'Malabe', 'Kaduwela', 'Pita Kotte', 'Ethul Kotte', 'Rajagiriya'],
  'Gampaha': ['Negombo', 'Wattala', 'Kiribathgoda', 'Kadawatha', 'Ja-Ela', 'Kelaniya', 'Minuwangoda', 'Veyangoda', 'Gampaha Town', 'Ragama'],
  'Kalutara': ['Panadura', 'Horana', 'Wadduwa', 'Beruwala', 'Alutgama', 'Matugama', 'Kalutara Town'],
  'Kandy': ['Peradeniya', 'Katugastota', 'Gampola', 'Nawalapitiya', 'Kundasale', 'Digana', 'Gelioya'],
  'Matale': ['Matale Town', 'Dambulla', 'Sigiriya', 'Pallepola'],
  'Nuwara Eliya': ['Nuwara Eliya Town', 'Talawakele', 'Hatton', 'Walapane'],
  'Galle': ['Galle Fort', 'Hikkaduwa', 'Karapitiya', 'Unawatuna', 'Ambalangoda', 'Baddegama'],
  'Matara': ['Matara Town', 'Weligama', 'Mirissa', 'Dikwella', 'Akuressa', 'Deniyaya'],
  'Hambantota': ['Hambantota Town', 'Tangalle', 'Beliatta', 'Ambalantota', 'Tissamaharama'],
  'Jaffna': ['Jaffna Town', 'Chavakachcheri', 'Point Pedro', 'Kopay'],
  'Kilinochchi': ['Kilinochchi Town', 'Pooneryn'],
  'Mannar': ['Mannar Town', 'Nanattan'],
  'Mullaitivu': ['Mullaitivu Town', 'Oddusuddan'],
  'Vavuniya': ['Vavuniya Town', 'Cheddikulam'],
  'Anuradhapura': ['Anuradhapura Town', 'Eppawala', 'Medawachchiya', 'Kebithigollewa', 'Thambuttegama'],
  'Polonnaruwa': ['Polonnaruwa Town', 'Hingurakgoda', 'Medirigiriya'],
  'Kurunegala': ['Kurunegala Town', 'Kuliyapitiya', 'Narammala', 'Wariyapola', 'Pannala'],
  'Puttalam': ['Puttalam Town', 'Chilaw', 'Marawila', 'Wennappuwa', 'Dankotuwa'],
  'Badulla': ['Badulla Town', 'Bandarawela', 'Haputale', 'Diyatalawa', 'Ella', 'Mahiyanganaya'],
  'Moneragala': ['Moneragala Town', 'Wellawaya', 'Buttala', 'Kataragama'],
  'Ratnapura': ['Ratnapura Town', 'Balangoda', 'Eheliyagoda', 'Pelmadulla', 'Embilipitiya'],
  'Kegalle': ['Kegalle Town', 'Mawanella', 'Warakapola', 'Rambukkana', 'Dehiowita'],
  'Ampara': ['Ampara Town', 'Samanthurai', 'Kalmunai', 'Akkaraipattu'],
  'Batticaloa': ['Batticaloa Town', 'Eravur', 'Kattankudy', 'Valaichchenai'],
  'Trincomalee': ['Trincomalee Town', 'Kinniya', 'Muttur', 'Kantale']
};

const SelectChevron = () => (
  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const Toggle = ({ on, onToggle, dark = false }: { on: boolean; onToggle: () => void; dark?: boolean }) => (
  <button
    type="button"
    onClick={onToggle}
    className={`relative w-12 h-6 rounded-full transition-colors duration-200 flex-shrink-0 ${on ? 'bg-[#1aae74]' : dark ? 'bg-white/20' : 'bg-slate-300'}`}
  >
    <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${on ? 'translate-x-6' : 'translate-x-0.5'}`} />
  </button>
);

export default function PartnerRegistration() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    fullName: '',
    nicNumber: '',
    mobileNumber: '',
    whatsappNumber: '',
    email: '',
    address: '',
    province: 'Western',
    district: 'Colombo',
    serviceZones: [],
    primaryCategory: 'Home Maintenance',
    experienceLevel: 'Entry Level (1–2 years)',
    subCategories: [],
    bio: '',
    nightService: false,
    serviceDays: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
    workStartTime: '08:00',
    workEndTime: '18:00',
    nicFrontImage: null,
    nicBackImage: null,
    selfieImage: null,
    portfolio: null,
    agreeTerms: false,
    agreeCommission: false,
    otp: '',
  });
  const [showOtp, setShowOtp] = useState(false);
  const [zoneSearch, setZoneSearch] = useState('');

  const toggleZone = (zone: string) =>
    set('serviceZones', form.serviceZones.includes(zone)
      ? form.serviceZones.filter(z => z !== zone)
      : [...form.serviceZones, zone]);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm(f => ({ ...f, [key]: value }));

  const toggleSubCategory = (cat: string) =>
    set('subCategories', form.subCategories.includes(cat)
      ? form.subCategories.filter(c => c !== cat)
      : [...form.subCategories, cat]);

  const toggleDay = (day: string) =>
    set('serviceDays', form.serviceDays.includes(day)
      ? form.serviceDays.filter(d => d !== day)
      : [...form.serviceDays, day]);

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1aae74]/30 focus:border-[#1aae74] transition';
  const selectCls = `${inputCls} appearance-none`;
  const labelCls = 'block text-xs font-semibold text-slate-500 tracking-widest uppercase mb-2';

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #e8f5ee 0%, #d4eddf 50%, #e8f5ee 100%)' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5">
        <span className="text-xl font-bold text-[#114b2e]">InstaFixd</span>
        <Link href="/" className="text-sm font-medium text-slate-700 hover:text-[#114b2e] transition-colors">
          Back to Home
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center px-6 py-10">
        {/* Hero */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#1aae74]/60 bg-[#1aae74]/10 text-[#1aae74] text-xs font-bold tracking-widest uppercase mb-4">
            Partner Registration
          </span>
          <h1 className="text-5xl font-extrabold text-[#114b2e] mb-3 leading-tight">
            Become an InstaFixd Expert
          </h1>
          <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">
            Join our ecosystem of premium service providers. Grow your local business with the support of a lush community.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center mb-10">
          {STEPS.map((s, i) => (
            <div key={s.id} className="flex items-center">
              <div className="flex items-center gap-2">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-all ${
                  step === s.id
                    ? 'bg-[#1aae74] text-white shadow-md shadow-[#1aae74]/30'
                    : step > s.id
                    ? 'bg-[#114b2e] text-white'
                    : 'bg-white text-slate-400 border border-slate-200'
                }`}>
                  {step > s.id ? <CheckCircle2 className="w-4 h-4" /> : s.id}
                </div>
                <span className={`text-xs font-semibold hidden sm:block ${step === s.id ? 'text-[#114b2e]' : step > s.id ? 'text-[#1aae74]' : 'text-slate-400'}`}>
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`w-8 h-px mx-2 transition-colors ${step > s.id ? 'bg-[#1aae74]' : 'bg-slate-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="w-full max-w-3xl space-y-5">

          {/* ── Step 1: Basic Information ── */}
          {step === 1 && (
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-[#1aae74]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Basic Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Full Name</label>
                  <input type="text" placeholder="Johnathan Doe" value={form.fullName}
                    onChange={e => set('fullName', e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>NIC / ID Number</label>
                  <input type="text" placeholder="987654321V" value={form.nicNumber}
                    onChange={e => set('nicNumber', e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Mobile Number</label>
                  <div className="flex gap-2">
                    <input type="tel" placeholder="+94 77 123 4567" value={form.mobileNumber}
                      onChange={e => set('mobileNumber', e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1aae74]/30 focus:border-[#1aae74] transition" />
                    <button 
                      type="button" 
                      onClick={() => setShowOtp(true)}
                      className="px-5 py-3 bg-[#1a3d2b] text-white text-sm font-semibold rounded-xl hover:bg-[#114b2e] transition-colors whitespace-nowrap"
                    >
                      Verify
                    </button>
                  </div>
                  {showOtp ? (
                    <div className="mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      <label className="text-[10px] font-bold text-[#1aae74] uppercase tracking-wider mb-1 block">Enter OTP</label>
                      <input 
                        type="text" 
                        maxLength={6}
                        placeholder="000000" 
                        value={form.otp}
                        onChange={e => set('otp', e.target.value)} 
                        className="w-32 px-4 py-2 rounded-lg border border-[#1aae74] bg-emerald-50 text-center font-mono text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-[#1aae74]/20 transition" 
                      />
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400 mt-1.5">An OTP will be sent to this number.</p>
                  )}
                </div>
                <div>
                  <label className={labelCls}>WhatsApp Number</label>
                  <input type="tel" placeholder="+94 77 123 4567" value={form.whatsappNumber}
                    onChange={e => set('whatsappNumber', e.target.value)} className={inputCls} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelCls}>Permanent Address</label>
                  <input type="text" placeholder="123, Lush Lane, Garden City" value={form.address}
                    onChange={e => set('address', e.target.value)} className={inputCls} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelCls}>Email Address</label>
                  <input type="email" placeholder="johnathan@instafixd.com" value={form.email}
                    onChange={e => set('email', e.target.value)} className={inputCls} />
                </div>
              </div>
            </div>
          )}

          {/* ── Step 2: Service Location ── */}
          {step === 2 && (
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#1aae74]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Service Location</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                <div>
                  <label className={labelCls}>Province</label>
                  <div className="relative">
                    <select value={form.province} 
                      onChange={e => {
                        const p = e.target.value;
                        set('province', p);
                        set('district', DISTRICTS[p][0]);
                      }} 
                      className={selectCls}>
                      {PROVINCES.map(p => <option key={p}>{p}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><SelectChevron /></div>
                  </div>
                </div>
                <div>
                  <label className={labelCls}>District</label>
                  <div className="relative">
                    <select value={form.district} onChange={e => set('district', e.target.value)} className={selectCls}>
                      {DISTRICTS[form.province].map(d => <option key={d}>{d}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><SelectChevron /></div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className={labelCls}>Your Selected Service Zones</label>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 min-h-[60px] flex flex-wrap gap-2 transition-all">
                  {form.serviceZones.length > 0 ? (
                    form.serviceZones.map(zone => (
                      <span key={zone} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#114b2e] text-white text-xs font-semibold shadow-sm animate-in fade-in zoom-in duration-200">
                        {zone}
                        <button type="button" onClick={() => toggleZone(zone)} className="hover:text-emerald-300 transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </span>
                    ))
                  ) : (
                    <p className="text-xs text-slate-400 italic">No zones selected yet. Select from the available towns in {form.district}.</p>
                  )}
                </div>
              </div>

              <div className="mb-8 p-6 bg-slate-50/50 border border-slate-100 rounded-2xl relative">
                <label className={labelCls}>Search & Select Service Zones in {form.district}</label>
                <div className="relative mt-3">
                  <input 
                    type="text" 
                    placeholder="Search for towns (e.g. Maharagama...)" 
                    value={zoneSearch}
                    onChange={e => setZoneSearch(e.target.value)}
                    className={inputCls} 
                  />
                  {zoneSearch.trim() && (
                    <div className="absolute z-50 left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl max-h-48 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
                      {(SERVICE_ZONES_MAP[form.district] || [])
                        .filter(z => z.toLowerCase().includes(zoneSearch.toLowerCase()))
                        .map(zone => (
                          <button 
                            key={zone} 
                            type="button" 
                            onClick={() => {
                              toggleZone(zone);
                              setZoneSearch('');
                            }}
                            className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-emerald-50 transition-colors ${
                              form.serviceZones.includes(zone) ? 'bg-emerald-50/50 text-[#1aae74] font-semibold' : 'text-slate-600'
                            }`}
                          >
                            {zone}
                            {form.serviceZones.includes(zone) && <CheckCircle2 className="w-4 h-4" />}
                          </button>
                        ))}
                      {(SERVICE_ZONES_MAP[form.district] || [])
                        .filter(z => z.toLowerCase().includes(zoneSearch.toLowerCase())).length === 0 && (
                          <div className="px-4 py-3 text-xs text-slate-400 italic">No matching zones found in this district.</div>
                        )}
                    </div>
                  )}
                </div>
                <p className="text-[10px] text-slate-400 mt-2 italic uppercase tracking-wider">Type to find specific areas where you provide service.</p>
              </div>
            </div>
          )}

          {/* ── Step 3: Expertise ── */}
          {step === 3 && (
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-[#1aae74]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Expertise</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                <div>
                  <label className={labelCls}>Primary Category</label>
                  <div className="relative">
                    <select value={form.primaryCategory} onChange={e => set('primaryCategory', e.target.value)} className={selectCls}>
                      {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><SelectChevron /></div>
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Experience Level</label>
                  <div className="relative">
                    <select value={form.experienceLevel} onChange={e => set('experienceLevel', e.target.value)} className={selectCls}>
                      {EXPERIENCE_LEVELS.map(l => <option key={l}>{l}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><SelectChevron /></div>
                  </div>
                </div>
              </div>

              {/* Selected Expertise Container */}
              <div className="mb-8">
                <label className={labelCls}>Your Selected Expertise</label>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 min-h-[60px] flex flex-wrap gap-2 transition-all">
                  {form.subCategories.length > 0 ? (
                    form.subCategories.map(cat => (
                      <span key={cat} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a3d2b] text-white text-xs font-semibold shadow-sm animate-in fade-in zoom-in duration-200">
                        {cat}
                        <button type="button" onClick={() => toggleSubCategory(cat)} className="hover:text-emerald-300 transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </span>
                    ))
                  ) : (
                    <p className="text-xs text-slate-400 italic flex items-center h-full">No expertise selected yet. Choose from the categories below.</p>
                  )}
                </div>
              </div>

              <div className="mb-8 p-6 bg-slate-50/50 border border-slate-100 rounded-2xl">
                <label className={labelCls}>Available Sub-Categories for {form.primaryCategory}</label>
                <div className="flex flex-wrap gap-2 mt-3">
                  {CATEGORIES_MAP[form.primaryCategory].map(cat => (
                    <button key={cat} type="button" onClick={() => toggleSubCategory(cat)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                        form.subCategories.includes(cat)
                          ? 'bg-[#1aae74] border-[#1aae74] text-white shadow-md shadow-[#1aae74]/20'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-[#1aae74] hover:text-[#1aae74]'
                      }`}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelCls}>Professional Bio</label>
                <textarea placeholder="Tell customers about your craftsmanship and values..." value={form.bio}
                  onChange={e => set('bio', e.target.value)} rows={5}
                  className={`${inputCls} resize-none`} />
              </div>
            </div>
          )}

          {/* ── Step 4: Availability Schedule ── */}
          {step === 4 && (
            <div className="bg-[#1a3d2b] rounded-3xl p-8 shadow-sm relative overflow-hidden">
              {/* Watermark */}
              <div className="absolute bottom-6 right-6 opacity-[0.08]">
                <Clock className="w-44 h-44 text-white" />
              </div>

              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#1aae74]" />
                </div>
                <h2 className="text-2xl font-bold text-white">Availability Schedule</h2>
              </div>

              {/* Night Service */}
              <div className="mb-6 relative z-10">
                <div className="bg-white/10 rounded-2xl p-5">
                  <p className="text-xs font-semibold text-emerald-300/80 tracking-widest uppercase mb-3">Night Service</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-lg">24/7 Support</span>
                    <Toggle on={form.nightService} onToggle={() => set('nightService', !form.nightService)} dark />
                  </div>
                </div>
              </div>

              {/* Service Days */}
              <div className="mb-6 relative z-10">
                <p className="text-xs font-semibold text-emerald-300/80 tracking-widest uppercase mb-4">Select Service Days</p>
                <div className="flex gap-2 flex-wrap">
                  {DAYS.map(day => (
                    <button key={day} type="button" onClick={() => toggleDay(day)}
                      className={`w-12 h-12 rounded-full text-xs font-bold transition-all ${
                        form.serviceDays.includes(day)
                          ? 'bg-[#163324] border-2 border-[#1aae74]/40 text-white'
                          : 'bg-white/10 text-white/50 hover:bg-white/20 border-2 border-transparent'
                      }`}>
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Work Hours */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                <div>
                  <p className="text-xs font-semibold text-emerald-300/80 tracking-widest uppercase mb-2">Work Start Time</p>
                  <input type="time" value={form.workStartTime}
                    onChange={e => set('workStartTime', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#1aae74]/40 transition [color-scheme:dark]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-emerald-300/80 tracking-widest uppercase mb-2">Work End Time</p>
                  <input type="time" value={form.workEndTime}
                    onChange={e => set('workEndTime', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#1aae74]/40 transition [color-scheme:dark]" />
                </div>
              </div>
            </div>
          )}

          {/* ── Step 5: Trust & Verification ── */}
          {step === 5 && (
            <>
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#1aae74]" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Trust & Verification</h2>
                </div>

                {/* NIC Container Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <BadgeCheck className="w-4 h-4 text-[#1aae74]" />
                    <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">NIC / ID Card Verification</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Front */}
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl p-6 cursor-pointer hover:border-[#1aae74] transition-colors group bg-white">
                      <input type="file" accept="image/*" className="hidden"
                        onChange={e => set('nicFrontImage', e.target.files?.[0] ?? null)} />
                      <Camera className="w-6 h-6 text-slate-300 group-hover:text-[#1aae74] mb-2 transition-colors" />
                      <p className="font-semibold text-slate-700 text-xs text-center">NIC Front Side</p>
                      {form.nicFrontImage && (
                        <p className="text-[10px] text-[#1aae74] mt-2 text-center truncate max-w-full px-2">
                          {form.nicFrontImage.name}
                        </p>
                      )}
                    </label>
                    {/* Back */}
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl p-6 cursor-pointer hover:border-[#1aae74] transition-colors group bg-white">
                      <input type="file" accept="image/*" className="hidden"
                        onChange={e => set('nicBackImage', e.target.files?.[0] ?? null)} />
                      <Camera className="w-6 h-6 text-slate-300 group-hover:text-[#1aae74] mb-2 transition-colors" />
                      <p className="font-semibold text-slate-700 text-xs text-center">NIC Back Side</p>
                      {form.nicBackImage && (
                        <p className="text-[10px] text-[#1aae74] mt-2 text-center truncate max-w-full px-2">
                          {form.nicBackImage.name}
                        </p>
                      )}
                    </label>
                  </div>
                </div>

                {/* Other Uploads */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    { key: 'selfieImage' as const, icon: UserRound, label: 'Verification Selfie', sub: 'Holding your ID card', accept: 'image/*' },
                    { key: 'portfolio' as const, icon: Upload, label: 'Portfolio / Work', sub: 'Past project photos (ZIP/PDF)', accept: '.zip,.pdf,image/*' },
                  ].map(({ key, icon: Icon, label, sub, accept }) => (
                    <label key={key}
                      className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl p-8 cursor-pointer hover:border-[#1aae74] transition-colors group bg-white">
                      <input type="file" accept={accept} className="hidden"
                        onChange={e => set(key, e.target.files?.[0] ?? null)} />
                      <Icon className="w-8 h-8 text-slate-300 group-hover:text-[#1aae74] mb-3 transition-colors" />
                      <p className="font-semibold text-slate-700 text-sm text-center">{label}</p>
                      <p className="text-xs text-slate-400 text-center mt-1">{sub}</p>
                      {form[key] && (
                        <p className="text-xs text-[#1aae74] mt-2 text-center truncate max-w-full px-2">
                          {(form[key] as File).name}
                        </p>
                      )}
                    </label>
                  ))}
                </div>

                {/* Agreements */}
                <div className="bg-slate-50 rounded-2xl p-6 space-y-5">
                  {[
                    {
                      key: 'agreeTerms' as const,
                      title: 'I agree to the InstaFixd Terms & Conditions',
                      desc: 'By checking this, you agree to our professional code of conduct and service quality standards.',
                    },
                    {
                      key: 'agreeCommission' as const,
                      title: 'I acknowledge the 10% Platform Commission',
                      desc: 'InstaFixd retains a small commission on successful bookings to maintain the platform and customer support.',
                    },
                  ].map(({ key, title, desc }) => (
                    <button key={key} type="button" onClick={() => set(key, !form[key])}
                      className="flex items-start gap-4 w-full text-left">
                      <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 transition-colors flex items-center justify-center ${
                        form[key] ? 'bg-[#1aae74] border-[#1aae74]' : 'border-slate-300'
                      }`}>
                        {form[key] && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{title}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit footer */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-500 italic">Your application will be reviewed by our curation team within 48 hours.</p>
                <button type="button"
                  className="inline-flex items-center gap-2 bg-[#1a3d2b] text-white px-8 py-4 rounded-2xl font-semibold text-sm hover:bg-[#114b2e] transition-colors whitespace-nowrap">
                  Submit Application <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-1">
            {step > 1 ? (
              <button type="button" onClick={() => setStep(s => s - 1)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            ) : <div />}
            {step < 5 && (
              <button type="button" onClick={() => setStep(s => s + 1)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1aae74] text-white text-sm font-semibold hover:bg-[#159e67] transition-colors">
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row items-center justify-between px-8 py-5 border-t border-emerald-100/60">
        <p className="text-xs text-slate-400">© 2024 InstaFixd. All rights reserved.</p>
        <div className="flex items-center gap-6 mt-3 md:mt-0">
          <Link href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Privacy</Link>
          <Link href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Terms</Link>
          <Link href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Support</Link>
        </div>
      </footer>
    </div>
  );
}

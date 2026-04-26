'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Wrench, User, CheckCircle2, ArrowLeft, LogOut,
  MapPin, Clock, BadgeCheck,
} from 'lucide-react';
import { useAuth } from '@/context/auth-context';

// ── Static data (mirrors registration form) ────────────────────────────────

const PROVINCES = [
  'Central', 'Eastern', 'North Central', 'Northern',
  'North Western', 'Sabaragamuwa', 'Southern', 'Uva', 'Western',
];

const DISTRICTS: Record<string, string[]> = {
  Central: ['Kandy', 'Matale', 'Nuwara Eliya'],
  Eastern: ['Ampara', 'Batticaloa', 'Trincomalee'],
  'North Central': ['Anuradhapura', 'Polonnaruwa'],
  Northern: ['Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya'],
  'North Western': ['Kurunegala', 'Puttalam'],
  Sabaragamuwa: ['Kegalle', 'Ratnapura'],
  Southern: ['Galle', 'Hambantota', 'Matara'],
  Uva: ['Badulla', 'Moneragala'],
  Western: ['Colombo', 'Gampaha', 'Kalutara'],
};

const SERVICE_ZONES_MAP: Record<string, string[]> = {
  Colombo: ['Maharagama', 'Kottawa', 'Pannipitiya', 'Nugegoda', 'Mount Lavinia', 'Dehiwala', 'Ratmalana', 'Battaramulla', 'Malabe', 'Kaduwela', 'Pita Kotte', 'Ethul Kotte', 'Rajagiriya'],
  Gampaha: ['Negombo', 'Wattala', 'Kiribathgoda', 'Kadawatha', 'Ja-Ela', 'Kelaniya', 'Minuwangoda', 'Veyangoda', 'Gampaha Town', 'Ragama'],
  Kalutara: ['Panadura', 'Horana', 'Wadduwa', 'Beruwala', 'Alutgama', 'Matugama', 'Kalutara Town'],
  Kandy: ['Peradeniya', 'Katugastota', 'Gampola', 'Nawalapitiya', 'Kundasale', 'Digana', 'Gelioya'],
  Matale: ['Matale Town', 'Dambulla', 'Sigiriya', 'Pallepola'],
  'Nuwara Eliya': ['Nuwara Eliya Town', 'Talawakele', 'Hatton', 'Walapane'],
  Galle: ['Galle Fort', 'Hikkaduwa', 'Karapitiya', 'Unawatuna', 'Ambalangoda', 'Baddegama'],
  Matara: ['Matara Town', 'Weligama', 'Mirissa', 'Dikwella', 'Akuressa', 'Deniyaya'],
  Hambantota: ['Hambantota Town', 'Tangalle', 'Beliatta', 'Ambalantota', 'Tissamaharama'],
  Jaffna: ['Jaffna Town', 'Chavakachcheri', 'Point Pedro', 'Kopay'],
  Kilinochchi: ['Kilinochchi Town', 'Pooneryn'],
  Mannar: ['Mannar Town', 'Nanattan'],
  Mullaitivu: ['Mullaitivu Town', 'Oddusuddan'],
  Vavuniya: ['Vavuniya Town', 'Cheddikulam'],
  Anuradhapura: ['Anuradhapura Town', 'Eppawala', 'Medawachchiya', 'Kebithigollewa', 'Thambuttegama'],
  Polonnaruwa: ['Polonnaruwa Town', 'Hingurakgoda', 'Medirigiriya'],
  Kurunegala: ['Kurunegala Town', 'Kuliyapitiya', 'Narammala', 'Wariyapola', 'Pannala'],
  Puttalam: ['Puttalam Town', 'Chilaw', 'Marawila', 'Wennappuwa', 'Dankotuwa'],
  Badulla: ['Badulla Town', 'Bandarawela', 'Haputale', 'Diyatalawa', 'Ella', 'Mahiyanganaya'],
  Moneragala: ['Moneragala Town', 'Wellawaya', 'Buttala', 'Kataragama'],
  Ratnapura: ['Ratnapura Town', 'Balangoda', 'Eheliyagoda', 'Pelmadulla', 'Embilipitiya'],
  Kegalle: ['Kegalle Town', 'Mawanella', 'Warakapola', 'Rambukkana', 'Dehiowita'],
  Ampara: ['Ampara Town', 'Samanthurai', 'Kalmunai', 'Akkaraipattu'],
  Batticaloa: ['Batticaloa Town', 'Eravur', 'Kattankudy', 'Valaichchenai'],
  Trincomalee: ['Trincomalee Town', 'Kinniya', 'Muttur', 'Kantale'],
};

const CATEGORIES_MAP: Record<string, string[]> = {
  'Home Maintenance': ['Painting', 'Furniture Assembly', 'Roof Repair', 'Tiling', 'Carpentry', 'Masonry'],
  Cleaning: ['House Cleaning', 'Deep Cleaning', 'Carpet Cleaning', 'Window Cleaning', 'Upholstery Cleaning'],
  Electrical: ['Wiring', 'Appliance Repair', 'Lighting Installation', 'CCTV Installation', 'Solar Panel Maintenance'],
  Plumbing: ['Leak Repair', 'Pipe Installation', 'Drain Cleaning', 'Bathroom Fitting', 'Water Tank Cleaning'],
  Carpentry: ['Custom Furniture', 'Kitchen Cabinets', 'Door Repair', 'Wood Polishing', 'Deck Building'],
  Landscaping: ['Garden Design', 'Lawn Mowing', 'Fence Installation', 'Tree Trimming', 'Irrigation Systems'],
};

const EXPERIENCE_LEVELS = [
  'Entry Level (1–2 years)',
  'Intermediate (3–5 years)',
  'Expert (5–10 years)',
  'Master (10+ years)',
];

const EXP_TO_LABEL: Record<string, string> = {
  BEGINNER: 'Entry Level (1–2 years)',
  INTERMEDIATE: 'Intermediate (3–5 years)',
  EXPERT: 'Expert (5–10 years)',
};
const LABEL_TO_EXP: Record<string, string> = {
  'Entry Level (1–2 years)': 'BEGINNER',
  'Intermediate (3–5 years)': 'INTERMEDIATE',
  'Expert (5–10 years)': 'EXPERT',
  'Master (10+ years)': 'EXPERT',
};

const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const TIME_OPTIONS = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

const COMPACT_TO_FULL: Record<string, string> = {
  MO: 'MON', TU: 'TUE', WE: 'WED', TH: 'THU', FR: 'FRI', SA: 'SAT', SU: 'SUN',
};
function compactDaysToFull(compact: string): string[] {
  return compact.split(',').map((d) => COMPACT_TO_FULL[d.trim()] ?? d).filter(Boolean);
}

// ── Toggle component ──────────────────────────────────────────────────────

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      role="switch"
      aria-checked={on}
      className={`relative inline-flex w-12 h-6 rounded-full transition-colors flex-shrink-0 focus:outline-none ${on ? 'bg-[#1aae74]' : 'bg-white/20'}`}
    >
      <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${on ? 'translate-x-[22px]' : 'translate-x-0'}`} />
    </button>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────

type Tab = 'personal' | 'expertise' | 'availability';

export default function ProfilePage() {
  const { profile, token, loading, logout, refreshProfile } = useAuth();
  const router = useRouter();

  // Personal & location
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [serviceZones, setServiceZones] = useState<string[]>([]);
  const [zoneSearch, setZoneSearch] = useState('');

  // Expertise
  const [primaryCategory, setPrimaryCategory] = useState('Home Maintenance');
  const [experienceLevel, setExperienceLevel] = useState('Entry Level (1–2 years)');
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [bio, setBio] = useState('');

  // Availability
  const [nightService, setNightService] = useState(false);
  const [serviceDays, setServiceDays] = useState<string[]>(DAYS);
  const [workStartTime, setWorkStartTime] = useState('08:00');
  const [workEndTime, setWorkEndTime] = useState('18:00');

  const [tab, setTab] = useState<Tab>('personal');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    if (!loading && !profile) router.push('/login');
  }, [loading, profile, router]);

  useEffect(() => {
    if (!profile) return;
    setFullName(profile.fullName ?? '');
    setMobileNumber(profile.mobileNumber ?? '');
    setWhatsappNumber(profile.whatsappNumber ?? '');
    setProvince(profile.province ?? '');
    setDistrict(profile.district ?? '');
    setServiceZones(profile.serviceZones ?? []);

    const firstSvc = profile.services?.[0];
    if (firstSvc) {
      const cat = firstSvc.mainCategory;
      setPrimaryCategory(cat);
      setExperienceLevel(EXP_TO_LABEL[firstSvc.experienceLevel ?? ''] ?? 'Entry Level (1–2 years)');
      setSubCategories(profile.services.filter((s) => s.mainCategory === cat).map((s) => s.subCategory));
      setBio(firstSvc.description ?? '');
    }

    if (profile.availability) {
      setServiceDays(compactDaysToFull(profile.availability.availableDays));
      setWorkStartTime(profile.availability.availableFrom ?? '08:00');
      setWorkEndTime(profile.availability.availableTo ?? '18:00');
      setNightService(profile.availability.nightService);
    }
  }, [profile]);

  const districtList = DISTRICTS[province] ?? [];
  const zoneList = SERVICE_ZONES_MAP[district] ?? [];

  function handleProvinceChange(val: string) {
    setProvince(val);
    setDistrict('');
    setServiceZones([]);
  }
  function handleDistrictChange(val: string) {
    setDistrict(val);
    setServiceZones([]);
  }
  function toggleZone(zone: string) {
    setServiceZones((prev) =>
      prev.includes(zone) ? prev.filter((z) => z !== zone) : [...prev, zone],
    );
  }
  function toggleSubCategory(cat: string) {
    setSubCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  }
  function toggleDay(day: string) {
    setServiceDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  }
  function handleCategoryChange(cat: string) {
    setPrimaryCategory(cat);
    setSubCategories([]);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!token) return;
    setError(null);
    setSaved(false);
    setSaving(true);
    try {
      const res = await fetch(`${backendUrl}/api/v1/provider/me`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          fullName,
          mobileNumber,
          whatsappNumber: whatsappNumber || undefined,
          province: province || undefined,
          district: district || undefined,
          serviceZones,
          services: subCategories.map((sub) => ({
            mainCategory: primaryCategory,
            subCategory: sub,
            experienceLevel: LABEL_TO_EXP[experienceLevel] ?? 'BEGINNER',
            description: bio || undefined,
          })),
          availability: {
            nightService,
            serviceDays: serviceDays.join(','),
            workStartTime: workStartTime || undefined,
            workEndTime: workEndTime || undefined,
          },
        }),
      });
      const body = await res.json() as { message?: string; error?: string };
      if (!res.ok) { setError(body.message ?? body.error ?? 'Update failed'); return; }
      await refreshProfile();
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch {
      setError('Unable to reach the server. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  function handleLogout() { logout(); router.push('/'); }

  if (loading || !profile) return null;

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition bg-white';
  const selectCls = `${inputCls} appearance-none`;
  const labelCls = 'block text-sm font-medium text-gray-700 mb-1.5';

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'personal', label: 'Personal & Location', icon: <BadgeCheck className="w-4 h-4" /> },
    { id: 'expertise', label: 'Expertise', icon: <Wrench className="w-4 h-4" /> },
    { id: 'availability', label: 'Availability', icon: <Clock className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">InstaFixd</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition-colors font-medium"
            >
              <LogOut className="w-4 h-4" /> Sign out
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 pt-28 pb-16">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        {/* Profile header */}
        <div className="bg-gradient-to-br from-[#1a3d2b] to-[#1aae74] rounded-3xl px-8 py-8 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-xl font-bold text-white">{profile.fullName || '—'}</h1>
              <p className="text-sm text-green-200 mt-0.5">{profile.email}</p>
              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${profile.isActive ? 'bg-green-400/20 text-green-100' : 'bg-white/10 text-white/70'}`}>
                  {profile.isActive ? 'Active' : 'Pending review'}
                </span>
                {profile.province && (
                  <span className="inline-flex items-center gap-1 text-xs text-green-200">
                    <MapPin className="w-3 h-3" /> {profile.province}
                  </span>
                )}
              </div>
            </div>
          </div>
          {/* Read-only row */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="bg-white/10 rounded-xl px-4 py-2.5">
              <p className="text-[10px] font-semibold text-green-300 uppercase tracking-wider">NIC / ID</p>
              <p className="text-sm font-semibold text-white mt-0.5">{profile.nicNumber || '—'}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-2.5">
              <p className="text-[10px] font-semibold text-green-300 uppercase tracking-wider">Email</p>
              <p className="text-sm font-semibold text-white mt-0.5 truncate">{profile.email}</p>
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex bg-white rounded-2xl border border-gray-100 shadow-sm p-1 mb-4">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 rounded-xl transition-all ${
                tab === t.id
                  ? 'bg-[#1aae74] text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSave}>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

            {/* ── Personal & Location ── */}
            {tab === 'personal' && (
              <div className="p-8 space-y-5">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Personal information</h2>

                <div>
                  <label className={labelCls}>Full Name</label>
                  <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} className={inputCls} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Mobile Number</label>
                    <input type="tel" required value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="07XXXXXXXX" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>WhatsApp <span className="text-gray-400 font-normal">(optional)</span></label>
                    <input type="tel" value={whatsappNumber} onChange={(e) => setWhatsappNumber(e.target.value)} placeholder="07XXXXXXXX" className={inputCls} />
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-5">
                  <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-5">Service location</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Province</label>
                      <select value={province} onChange={(e) => handleProvinceChange(e.target.value)} className={selectCls}>
                        <option value="">Select province</option>
                        {PROVINCES.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>District</label>
                      <select value={district} onChange={(e) => handleDistrictChange(e.target.value)} disabled={!province} className={`${selectCls} disabled:opacity-50`}>
                        <option value="">Select district</option>
                        {districtList.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Service zones */}
                {district && (
                  <div>
                    <label className={labelCls}>Service Zones</label>
                    {serviceZones.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {serviceZones.map((zone) => (
                          <span key={zone} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a3d2b] text-white text-xs font-semibold">
                            {zone}
                            <button type="button" onClick={() => toggleZone(zone)} className="hover:text-green-300 transition-colors">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="relative">
                      <input
                        type="text"
                        placeholder={`Search zones in ${district}…`}
                        value={zoneSearch}
                        onChange={(e) => setZoneSearch(e.target.value)}
                        className={inputCls}
                      />
                      {zoneSearch.trim() && (
                        <div className="absolute z-50 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl max-h-48 overflow-y-auto">
                          {zoneList.filter((z) => z.toLowerCase().includes(zoneSearch.toLowerCase())).map((zone) => (
                            <button key={zone} type="button"
                              onClick={() => { toggleZone(zone); setZoneSearch(''); }}
                              className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-green-50 transition-colors ${serviceZones.includes(zone) ? 'text-[#1aae74] font-semibold' : 'text-gray-600'}`}
                            >
                              {zone}
                              {serviceZones.includes(zone) && <CheckCircle2 className="w-4 h-4" />}
                            </button>
                          ))}
                          {zoneList.filter((z) => z.toLowerCase().includes(zoneSearch.toLowerCase())).length === 0 && (
                            <div className="px-4 py-3 text-xs text-gray-400 italic">No zones found.</div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── Expertise ── */}
            {tab === 'expertise' && (
              <div className="p-8 space-y-5">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Expertise</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Primary Category</label>
                    <select value={primaryCategory} onChange={(e) => handleCategoryChange(e.target.value)} className={selectCls}>
                      {Object.keys(CATEGORIES_MAP).map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Experience Level</label>
                    <select value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value)} className={selectCls}>
                      {EXPERIENCE_LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Specialisations</label>
                  {subCategories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {subCategories.map((cat) => (
                        <span key={cat} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a3d2b] text-white text-xs font-semibold">
                          {cat}
                          <button type="button" onClick={() => toggleSubCategory(cat)} className="hover:text-green-300 transition-colors">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    {CATEGORIES_MAP[primaryCategory]?.map((cat) => (
                      <button key={cat} type="button" onClick={() => toggleSubCategory(cat)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
                          subCategories.includes(cat)
                            ? 'bg-[#1aae74] border-[#1aae74] text-white'
                            : 'bg-white border-gray-200 text-gray-600 hover:border-[#1aae74] hover:text-[#1aae74]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Professional Bio</label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                    placeholder="Tell customers about your skills and experience…"
                    className={`${inputCls} resize-none`}
                  />
                </div>
              </div>
            )}

            {/* ── Availability ── */}
            {tab === 'availability' && (
              <div className="bg-[#1a3d2b] p-8 space-y-6">
                <h2 className="text-sm font-semibold text-green-300 uppercase tracking-wide">Availability schedule</h2>

                {/* Night service */}
                <div className="bg-white/10 rounded-2xl p-5">
                  <p className="text-xs font-semibold text-green-300/80 tracking-widest uppercase mb-3">Night Service</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">24/7 Support</span>
                    <Toggle on={nightService} onToggle={() => setNightService((v) => !v)} />
                  </div>
                </div>

                {/* Service days */}
                <div>
                  <p className="text-xs font-semibold text-green-300/80 tracking-widest uppercase mb-4">Service Days</p>
                  <div className="flex gap-2 flex-wrap">
                    {DAYS.map((day) => (
                      <button key={day} type="button" onClick={() => toggleDay(day)}
                        className={`w-12 h-12 rounded-full text-xs font-bold transition-all border-2 ${
                          serviceDays.includes(day)
                            ? 'bg-[#163324] border-[#1aae74]/40 text-white'
                            : 'bg-white/10 text-white/50 hover:bg-white/20 border-transparent'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Work hours */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-green-300/80 tracking-widest uppercase mb-2">Start Time</p>
                    <select value={workStartTime} onChange={(e) => setWorkStartTime(e.target.value)}
                      className="w-full appearance-none px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1aae74]/40 transition cursor-pointer">
                      {TIME_OPTIONS.map((t) => <option key={t} value={t} className="bg-[#1a3d2b]">{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-green-300/80 tracking-widest uppercase mb-2">End Time</p>
                    <select value={workEndTime} onChange={(e) => setWorkEndTime(e.target.value)}
                      className="w-full appearance-none px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1aae74]/40 transition cursor-pointer">
                      {TIME_OPTIONS.map((t) => <option key={t} value={t} className="bg-[#1a3d2b]">{t}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className={`px-8 py-5 border-t space-y-3 ${tab === 'availability' ? 'bg-[#1a3d2b] border-white/10' : 'bg-white border-gray-100'}`}>
              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</p>
              )}
              {saved && (
                <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Profile updated successfully
                </div>
              )}
              <button type="submit" disabled={saving}
                className="w-full bg-[#1aae74] hover:bg-[#159e67] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition text-sm">
                {saving ? 'Saving…' : 'Save changes'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

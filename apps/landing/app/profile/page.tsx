'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Wrench, User, CheckCircle2, ArrowLeft, LogOut } from 'lucide-react';
import { useAuth } from '@/context/auth-context';

export default function ProfilePage() {
  const { profile, token, loading, logout, refreshProfile } = useAuth();
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    if (!loading && !profile) router.push('/login');
  }, [loading, profile, router]);

  useEffect(() => {
    if (profile) {
      setFullName(profile.fullName ?? '');
      setMobileNumber(profile.mobileNumber ?? '');
      setWhatsappNumber(profile.whatsappNumber ?? '');
    }
  }, [profile]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!token) return;
    setError(null);
    setSaved(false);
    setSaving(true);

    try {
      const res = await fetch(`${backendUrl}/api/v1/provider/me`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          fullName,
          mobileNumber,
          whatsappNumber: whatsappNumber || undefined,
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

  function handleLogout() {
    logout();
    router.push('/');
  }

  if (loading || !profile) return null;

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
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-xl mx-auto px-4 pt-28 pb-16">
        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        {/* Profile card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#1a3d2b] to-[#1aae74] px-8 py-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">{profile.fullName}</h1>
                <p className="text-sm text-green-200 mt-0.5">{profile.email}</p>
                <span className={`inline-flex items-center gap-1 mt-1.5 text-xs font-medium px-2 py-0.5 rounded-full ${
                  profile.isActive ? 'bg-green-400/20 text-green-100' : 'bg-white/10 text-white/70'
                }`}>
                  {profile.isActive ? 'Active' : 'Pending review'}
                </span>
              </div>
            </div>
          </div>

          {/* Read-only info */}
          <div className="px-8 pt-6 pb-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-2xl px-4 py-3">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">NIC / ID</p>
                <p className="text-sm font-semibold text-gray-700">{profile.nicNumber}</p>
              </div>
              <div className="bg-gray-50 rounded-2xl px-4 py-3">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">Province</p>
                <p className="text-sm font-semibold text-gray-700">{profile.province ?? '—'}</p>
              </div>
            </div>
          </div>

          {/* Editable form */}
          <form onSubmit={handleSave} className="px-8 py-6 space-y-5">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Edit information</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number</label>
              <input
                type="tel"
                required
                value={mobileNumber}
                onChange={e => setMobileNumber(e.target.value)}
                placeholder="07XXXXXXXX"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                WhatsApp Number <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                value={whatsappNumber}
                onChange={e => setWhatsappNumber(e.target.value)}
                placeholder="07XXXXXXXX"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            {saved && (
              <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" /> Profile updated successfully
              </div>
            )}

            <button
              type="submit"
              disabled={saving}
              className="w-full bg-[#1aae74] hover:bg-[#159e67] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition text-sm"
            >
              {saving ? 'Saving…' : 'Save changes'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

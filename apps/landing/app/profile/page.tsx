'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Wrench,
  User,
  Phone,
  MessageCircle,
  Mail,
  CreditCard,
  LogOut,
  Save,
  CheckCircle2,
  ArrowLeft,
  Shield,
  Clock,
  AlertCircle,
  Edit3,
} from 'lucide-react';
import { getToken, getUser, clearAuth, apiFetch, type AuthProvider } from '@/lib/auth';

interface ProfileForm {
  fullName: string;
  whatsappNumber: string;
  email: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [provider, setProvider] = useState<AuthProvider | null>(null);
  const [form, setForm] = useState<ProfileForm>({ fullName: '', whatsappNumber: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!getToken()) {
      router.replace('/');
      return;
    }
    fetchProfile();
  }, []);

  async function fetchProfile() {
    setLoading(true);
    try {
      const res = await apiFetch('/provider/profile');
      if (res.status === 401) {
        clearAuth();
        router.replace('/');
        return;
      }
      const body = await res.json();
      const data: AuthProvider = body.data ?? body;
      setProvider(data);
      setForm({
        fullName: data.fullName ?? '',
        whatsappNumber: data.whatsappNumber ?? '',
        email: data.email ?? '',
      });
    } catch {
      // keep cached user from localStorage as fallback
      const cached = getUser();
      if (cached) {
        setProvider(cached);
        setForm({
          fullName: cached.fullName ?? '',
          whatsappNumber: cached.whatsappNumber ?? '',
          email: cached.email ?? '',
        });
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaveError('');
    setSaveSuccess(false);
    setSaving(true);
    try {
      const res = await apiFetch('/provider/profile', {
        method: 'PATCH',
        body: JSON.stringify({
          fullName: form.fullName,
          whatsappNumber: form.whatsappNumber || undefined,
          email: form.email || undefined,
        }),
      });
      const body = await res.json();
      if (!res.ok) {
        setSaveError(body?.message ?? 'Failed to save. Please try again.');
        return;
      }
      const updated: AuthProvider = body.data ?? body;
      setProvider(updated);
      setForm({
        fullName: updated.fullName,
        whatsappNumber: updated.whatsappNumber ?? '',
        email: updated.email ?? '',
      });
      setSaveSuccess(true);
      setEditMode(false);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch {
      setSaveError('Unable to connect. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  function handleLogout() {
    clearAuth();
    router.push('/');
  }

  if (!mounted) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-green-50/20 to-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-green-200 border-t-green-600 animate-spin" />
          <p className="text-sm text-gray-500">Loading your profile…</p>
        </div>
      </div>
    );
  }

  const initials = provider?.fullName
    ? provider.fullName.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase()
    : '?';

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/20 to-white text-foreground">
      {/* Soft background blobs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-green-200/20 rounded-full opacity-40 blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-100/30 rounded-full opacity-40 blur-[120px] -z-10 pointer-events-none" />

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
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>{provider?.fullName}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-600 border border-gray-200 hover:border-red-200 rounded-lg px-3 py-1.5 transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 max-w-3xl mx-auto">
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-700 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Profile Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6"
        >
          {/* Green accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-green-500 via-emerald-400 to-green-700" />

          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-5">
              {/* Avatar */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-green-200 shrink-0">
                {initials}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">
                    {provider?.fullName}
                  </h1>
                  <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${provider?.isActive ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${provider?.isActive ? 'bg-green-500' : 'bg-amber-500'}`} />
                    {provider?.isActive ? 'Active' : 'Pending Review'}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Service Provider</p>

                <div className="flex flex-wrap gap-4 mt-3">
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Phone className="w-3.5 h-3.5 text-green-600" />
                    {provider?.mobileNumber}
                  </div>
                  {provider?.email && (
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                      <Mail className="w-3.5 h-3.5 text-green-600" />
                      {provider.email}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => { setEditMode(true); setSaveError(''); setSaveSuccess(false); }}
                className="shrink-0 flex items-center gap-1.5 text-sm text-green-700 border border-green-200 bg-green-50 hover:bg-green-100 rounded-xl px-3 py-2 transition-all"
              >
                <Edit3 className="w-4 h-4" />
                <span className="hidden sm:inline">Edit</span>
              </button>
            </div>

            {/* Status notice */}
            {!provider?.isActive && (
              <div className="mt-5 flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl p-4">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-700">
                  Your profile is under review. You'll be notified once approved and can start receiving job requests.
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Edit / View Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <div className="px-6 sm:px-8 py-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Profile Details</h2>
            {saveSuccess && (
              <motion.div
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-1.5 text-sm text-green-700"
              >
                <CheckCircle2 className="w-4 h-4" />
                Saved successfully
              </motion.div>
            )}
          </div>

          <form onSubmit={handleSave} className="p-6 sm:p-8">
            <div className="space-y-6">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <User className="w-4 h-4 text-green-600" />
                  Full Name
                </label>
                {editMode ? (
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    required
                    maxLength={150}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all"
                  />
                ) : (
                  <p className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-900">
                    {provider?.fullName || '—'}
                  </p>
                )}
              </div>

              {/* Mobile Number — always read-only */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Phone className="w-4 h-4 text-green-600" />
                  Mobile Number
                  <span className="text-xs text-gray-400 font-normal">(cannot be changed)</span>
                </label>
                <p className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-500">
                  {provider?.mobileNumber || '—'}
                </p>
              </div>

              {/* WhatsApp Number */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  WhatsApp Number
                </label>
                {editMode ? (
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium select-none">
                      +94
                    </span>
                    <input
                      type="tel"
                      value={form.whatsappNumber}
                      onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
                      placeholder="07XXXXXXXX"
                      maxLength={10}
                      pattern="^07[0-9]{8}$"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all"
                    />
                  </div>
                ) : (
                  <p className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-900">
                    {provider?.whatsappNumber || '—'}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Mail className="w-4 h-4 text-green-600" />
                  Email Address
                </label>
                {editMode ? (
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    maxLength={150}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all"
                  />
                ) : (
                  <p className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-900">
                    {provider?.email || '—'}
                  </p>
                )}
              </div>

              {/* NIC — always read-only */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <CreditCard className="w-4 h-4 text-green-600" />
                  NIC Number
                  <span className="text-xs text-gray-400 font-normal">(cannot be changed)</span>
                </label>
                <p className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-500">
                  {provider ? `${(provider as any).nicNumber?.slice(0, 3)}${'•'.repeat(6)}` : '—'}
                </p>
              </div>
            </div>

            {/* Error */}
            {saveError && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-4 py-3"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                {saveError}
              </motion.div>
            )}

            {/* Actions */}
            {editMode && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-7 flex gap-3"
              >
                <button
                  type="button"
                  onClick={() => {
                    setEditMode(false);
                    setSaveError('');
                    // Reset form to current provider data
                    setForm({
                      fullName: provider?.fullName ?? '',
                      whatsappNumber: provider?.whatsappNumber ?? '',
                      email: provider?.email ?? '',
                    });
                  }}
                  className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-sm font-semibold rounded-xl shadow-md shadow-green-200 transition-all hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {saving ? (
                    <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                  ) : (
                    <Save className="w-4 h-4" />
                  )}
                  {saving ? 'Saving…' : 'Save Changes'}
                </button>
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Trust info footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-gray-400"
        >
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-green-500" />
            Data encrypted & secure
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
            InstaFixd verified platform
          </div>
        </motion.div>
      </main>
    </div>
  );
}

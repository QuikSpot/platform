'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export interface ProviderProfile {
  id: string;
  fullName: string;
  mobileNumber: string;
  whatsappNumber: string | null;
  email: string;
  nicNumber: string;
  province: string | null;
  district: string | null;
  isActive: boolean;
}

interface AuthState {
  token: string | null;
  profile: ProviderProfile | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<string | null>;
  logout: () => void;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<ProviderProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  async function fetchProfile(accessToken: string) {
    try {
      const res = await fetch(`${backendUrl}/api/v1/provider/me`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!res.ok) return null;
      const body = await res.json() as { data?: ProviderProfile } | ProviderProfile;
      return ('data' in body && body.data ? body.data : body) as ProviderProfile;
    } catch {
      return null;
    }
  }

  useEffect(() => {
    const stored = localStorage.getItem('provider_token');
    if (!stored) { setLoading(false); return; }

    fetchProfile(stored).then((p) => {
      if (p) { setToken(stored); setProfile(p); }
      else localStorage.removeItem('provider_token');
      setLoading(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function login(email: string, password: string): Promise<string | null> {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.session) return error?.message ?? 'Login failed';

    const accessToken = data.session.access_token;
    const p = await fetchProfile(accessToken);
    if (!p) return 'Account not found. Please register as a provider first.';

    localStorage.setItem('provider_token', accessToken);
    setToken(accessToken);
    setProfile(p);
    return null;
  }

  function logout() {
    localStorage.removeItem('provider_token');
    setToken(null);
    setProfile(null);
    void supabase.auth.signOut();
  }

  async function refreshProfile() {
    if (!token) return;
    const p = await fetchProfile(token);
    if (p) setProfile(p);
  }

  return (
    <AuthContext.Provider value={{ token, profile, loading, login, logout, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}

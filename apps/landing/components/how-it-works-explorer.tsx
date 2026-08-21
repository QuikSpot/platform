'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { Plus_Jakarta_Sans } from 'next/font/google';
import {
  MessageCircle,
  Sparkles,
  Zap,
  MapPin,
  Star,
  BadgeCheck,
  Wallet,
  ShieldCheck,
  UserCog,
  Bell,
  Wrench,
  TrendingUp,
  Check,
  ArrowRight,
  ArrowLeft,
  Users,
  Briefcase,
  Clock,
} from 'lucide-react';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['600', '700', '800'] });

type Step = {
  icon: typeof MessageCircle;
  title: string;
  summary: string;
  details: string[];
  visual: ReactNode;
};

/* ── tiny building blocks for the visuals ── */

function Chip({ children, tone = 'green' }: { children: ReactNode; tone?: 'green' | 'slate' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full ${
        tone === 'green' ? 'bg-[#25d366]/15 text-[#006d2f]' : 'bg-slate-100 text-slate-600'
      }`}
    >
      {children}
    </span>
  );
}

function ChatBubble({ from, children }: { from: 'user' | 'bot'; children: ReactNode }) {
  return (
    <div className={`flex ${from === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] text-[13px] leading-snug px-3 py-2 shadow-sm ${
          from === 'user'
            ? 'bg-[#d9fdd3] text-zinc-800 rounded-2xl rounded-tr-md'
            : 'bg-white text-zinc-700 rounded-2xl rounded-tl-md'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function ProCard({ name, role, highlight }: { name: string; role: string; highlight?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl p-3 border ${
        highlight ? 'bg-white border-[#25d366]/40 shadow-md' : 'bg-white/60 border-slate-200'
      }`}
    >
      <div className="w-10 h-10 rounded-full bg-[#3de273] flex items-center justify-center shrink-0">
        <UserCog className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-[13px] text-zinc-900 leading-tight">{name}</p>
        <p className="text-[11px] text-slate-500">{role}</p>
      </div>
      <div className="text-right">
        <p className="flex items-center gap-0.5 justify-end text-[12px] font-bold text-zinc-900">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 4.9
        </p>
        <p className="text-[10px] text-slate-400 flex items-center gap-0.5 justify-end">
          <MapPin className="w-3 h-3" /> 1.2 km
        </p>
      </div>
    </div>
  );
}

/* ── flow data ── */

const CUSTOMER_STEPS: Step[] = [
  {
    icon: MessageCircle,
    title: 'Start a Chat',
    summary: 'Message the instaFixd WhatsApp bot describing your problem in your own words — no forms, no new app.',
    details: [
      'Open WhatsApp and say hello to instaFixd',
      'Describe the issue casually, like texting a friend',
      'Available 24/7 in Sinhala, Tamil & English',
    ],
    visual: (
      <div className="space-y-2.5">
        <ChatBubble from="user">Hi! My AC isn&apos;t cooling properly 😓</ChatBubble>
        <ChatBubble from="bot">Hi there! I can help with that. Let me grab a few details 👇</ChatBubble>
      </div>
    ),
  },
  {
    icon: Sparkles,
    title: 'Tell Us What You Need',
    summary: 'Our AI asks a couple of smart follow-ups to fully understand the job before matching.',
    details: [
      'Share a photo of the problem (optional)',
      'Confirm your location and preferred time',
      'AI auto-detects the right service category',
    ],
    visual: (
      <div className="space-y-2.5">
        <ChatBubble from="bot">Got it! A quick few things:</ChatBubble>
        <div className="flex flex-wrap gap-2">
          <Chip>📷 Add a photo</Chip>
          <Chip>📍 Share location</Chip>
          <Chip>🗓️ Today / Tomorrow</Chip>
        </div>
        <div className="rounded-xl bg-[#f0fbf5] border border-[#25d366]/25 p-2.5 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">Detected</span>
          <Chip>AC &amp; Appliance Repair</Chip>
        </div>
      </div>
    ),
  },
  {
    icon: Zap,
    title: 'Get Matched Instantly',
    summary: 'We instantly match you with verified, top-rated pros near you — ranked by rating and distance.',
    details: [
      'Only identity-verified professionals',
      'Ranked by ratings, distance & availability',
      'See profiles, reviews & ETA up front',
    ],
    visual: (
      <div className="space-y-2.5">
        <div className="flex items-center gap-2">
          <Chip>Best match</Chip>
          <span className="text-[11px] text-slate-400">3 pros available nearby</span>
        </div>
        <ProCard name="Alex Fernando" role="Verified AC Technician" highlight />
        <ProCard name="Nuwan Perera" role="Verified AC Technician" />
      </div>
    ),
  },
  {
    icon: MapPin,
    title: 'Confirm & Track',
    summary: 'Pick your pro, confirm on WhatsApp, and follow their live arrival — right up to your door.',
    details: [
      'One-tap confirmation in the chat',
      'Live arrival tracking & ETA updates',
      'Chat directly with your pro anytime',
    ],
    visual: (
      <div className="space-y-3">
        <ProCard name="Alex Fernando" role="On the way to you" highlight />
        <div className="rounded-2xl bg-white border border-slate-200 p-3 shadow-sm">
          <p className="flex items-center gap-1.5 text-[12px] font-semibold text-zinc-800 mb-2">
            <Clock className="w-4 h-4 text-[#006d2f]" /> Arriving in ~12 mins
          </p>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#006d2f] w-2/3" />
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Wallet,
    title: 'Pay & Review',
    summary: 'Pay securely through a WhatsApp link once the job is done, then rate your experience.',
    details: [
      'Secure payment via a WhatsApp link',
      'Transparent, upfront pricing — no surprises',
      'Rate your pro to help the community',
    ],
    visual: (
      <div className="space-y-3">
        <div className="rounded-2xl bg-[#006d2f] text-white p-4 shadow-md">
          <p className="text-[12px] text-white/80">Payment received</p>
          <p className={`${jakarta.className} text-2xl font-extrabold`}>Rs. 3,500.00</p>
          <p className="flex items-center gap-1 text-[12px] text-white/80 mt-1">
            <Check className="w-4 h-4" /> Paid via WhatsApp · Job complete
          </p>
        </div>
        <div className="flex items-center gap-1.5 justify-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
    ),
  },
];

const PROVIDER_STEPS: Step[] = [
  {
    icon: ShieldCheck,
    title: 'Register & Get Verified',
    summary: 'Sign up and submit your documents. We verify every provider before they can accept a single job.',
    details: [
      'Submit NIC, police clearance & a selfie',
      'Identity verified by our team',
      'Trust badge shown to customers once approved',
    ],
    visual: (
      <div className="space-y-2.5">
        {[
          'NIC verified',
          'Police clearance verified',
          'Selfie & identity match',
        ].map((t) => (
          <div key={t} className="flex items-center gap-2.5 rounded-xl bg-white border border-slate-200 p-2.5 shadow-sm">
            <span className="w-6 h-6 rounded-full bg-[#25d366]/15 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-[#006d2f]" />
            </span>
            <span className="text-[13px] font-medium text-zinc-800">{t}</span>
          </div>
        ))}
        <div className="flex justify-center pt-1">
          <Chip>
            <BadgeCheck className="w-3.5 h-3.5" /> Verified Professional
          </Chip>
        </div>
      </div>
    ),
  },
  {
    icon: UserCog,
    title: 'Build Your Profile',
    summary: 'Showcase your skills, service zones, availability and portfolio to attract the right customers.',
    details: [
      'Pick your service categories & zones',
      'Set your weekly availability',
      'Upload portfolio photos of past work',
    ],
    visual: (
      <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#114b2e] flex items-center justify-center">
            <Wrench className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-bold text-[14px] text-zinc-900 leading-tight">Your Pro Profile</p>
            <p className="text-[11px] text-slate-500">Colombo · Available Mon–Sat</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Chip>Electrical Work</Chip>
          <Chip>AC Repair</Chip>
          <Chip>Appliance Repair</Chip>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="aspect-square rounded-lg bg-slate-100 border border-slate-200" />
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Bell,
    title: 'Receive Job Requests',
    summary: 'Get matched job requests on WhatsApp based on your categories, zone and availability.',
    details: [
      'Requests matched to your skills & area',
      'Delivered straight to your WhatsApp',
      'Accept or decline — you stay in control',
    ],
    visual: (
      <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-md space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-[#25d366]/15 flex items-center justify-center">
            <Bell className="w-4 h-4 text-[#006d2f]" />
          </span>
          <p className="text-[13px] font-bold text-zinc-900">New job request</p>
        </div>
        <div className="space-y-1 text-[12px] text-slate-600">
          <p><span className="text-slate-400">Service:</span> AC not cooling</p>
          <p><span className="text-slate-400">Area:</span> Colombo 05 · 1.2 km away</p>
          <p><span className="text-slate-400">When:</span> Today, before 5 PM</p>
        </div>
        <div className="flex gap-2 pt-1">
          <span className="flex-1 text-center text-[12px] font-bold text-white bg-[#006d2f] rounded-full py-2">Accept</span>
          <span className="flex-1 text-center text-[12px] font-bold text-slate-500 bg-slate-100 rounded-full py-2">Decline</span>
        </div>
      </div>
    ),
  },
  {
    icon: Wrench,
    title: 'Accept & Serve',
    summary: 'Accept the jobs you want, chat with the customer, and deliver great on-site service.',
    details: [
      'Chat & share your live location',
      'Agree on scope and pricing up front',
      'Complete the job and mark it done',
    ],
    visual: (
      <div className="space-y-2.5">
        <ChatBubble from="user">Hi Alex, when can you make it?</ChatBubble>
        <ChatBubble from="bot">On my way now — 12 mins out. I&apos;ll message when I arrive 👍</ChatBubble>
        <div className="flex justify-center">
          <Chip>
            <Wrench className="w-3.5 h-3.5" /> Job in progress
          </Chip>
        </div>
      </div>
    ),
  },
  {
    icon: TrendingUp,
    title: 'Get Paid & Grow',
    summary: 'Receive payments, collect ratings, and grow your reputation and earnings on the platform.',
    details: [
      'Fast, transparent payouts',
      'Build a 5-star reputation with reviews',
      'More ratings → higher ranking → more jobs',
    ],
    visual: (
      <div className="space-y-3">
        <div className="rounded-2xl bg-[#114b2e] text-white p-4 shadow-md">
          <p className="text-[12px] text-white/70">Earnings this month</p>
          <p className={`${jakarta.className} text-2xl font-extrabold`}>Rs. 42,000</p>
          <p className="flex items-center gap-1 text-[12px] text-[#6ee7a8] mt-1">
            <TrendingUp className="w-4 h-4" /> +18% vs last month
          </p>
        </div>
        <div className="rounded-2xl bg-white border border-slate-200 p-3 shadow-sm flex items-center justify-between">
          <span className="text-[12px] text-slate-500">Your rating</span>
          <span className="flex items-center gap-1 font-bold text-zinc-900">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.9 · 128 reviews
          </span>
        </div>
      </div>
    ),
  },
];

const AUDIENCES = {
  customer: {
    key: 'customer' as const,
    label: 'For Customers',
    icon: Users,
    tagline: 'Get any home service done in minutes — all from a WhatsApp chat.',
    steps: CUSTOMER_STEPS,
    cta: { href: '/get-started', label: 'Book a Service' },
  },
  provider: {
    key: 'provider' as const,
    label: 'For Providers',
    icon: Briefcase,
    tagline: 'Grow a trusted service business with a steady stream of nearby jobs.',
    steps: PROVIDER_STEPS,
    cta: { href: '/register/partner', label: 'Become a Provider' },
  },
};

type AudienceKey = keyof typeof AUDIENCES;

export function HowItWorksExplorer() {
  const [audienceKey, setAudienceKey] = useState<AudienceKey>('customer');
  const [step, setStep] = useState(0);

  const audience = AUDIENCES[audienceKey];
  const steps = audience.steps;
  const current = steps[step];
  const Icon = current.icon;

  function switchAudience(key: AudienceKey) {
    setAudienceKey(key);
    setStep(0);
  }

  return (
    <div>
      {/* ── Audience toggle ── */}
      <div className="flex justify-center">
        <div className="relative inline-flex p-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
          {(Object.values(AUDIENCES) as (typeof AUDIENCES)[AudienceKey][]).map((a) => {
            const AIcon = a.icon;
            const activeTab = a.key === audienceKey;
            return (
              <button
                key={a.key}
                type="button"
                onClick={() => switchAudience(a.key)}
                className={`relative z-10 flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${
                  activeTab ? 'text-white' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <span
                  className={`absolute inset-0 -z-10 rounded-full transition-opacity duration-300 bg-[linear-gradient(135deg,#006d2f_0%,#25d366_100%)] ${
                    activeTab ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <AIcon className="w-4 h-4" /> {a.label}
              </button>
            );
          })}
        </div>
      </div>

      <p className="text-center text-slate-500 mt-5 max-w-xl mx-auto">{audience.tagline}</p>

      {/* ── Step selector (numbered, clickable) ── */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {steps.map((s, i) => {
          const isActive = i === step;
          const isDone = i < step;
          const SIcon = s.icon;
          return (
            <button
              key={s.title}
              type="button"
              onClick={() => setStep(i)}
              aria-current={isActive}
              className={`group relative text-left rounded-2xl p-4 border transition-all duration-300 ${
                isActive
                  ? 'bg-white border-[#25d366]/50 shadow-lg shadow-[#006d2f]/10 -translate-y-0.5'
                  : 'bg-white/60 border-slate-200 hover:border-[#25d366]/40 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-[linear-gradient(135deg,#006d2f_0%,#25d366_100%)] text-white shadow-md'
                      : isDone
                        ? 'bg-[#25d366]/15 text-[#006d2f]'
                        : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {isDone ? <Check className="w-5 h-5" /> : <SIcon className="w-5 h-5" />}
                </span>
                <span className="font-mono text-xs font-bold text-slate-300">0{i + 1}</span>
              </div>
              <p
                className={`${jakarta.className} text-sm font-bold leading-snug transition-colors ${
                  isActive ? 'text-[#191c1d]' : 'text-slate-500'
                }`}
              >
                {s.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* ── Detail panel ── */}
      <div className="mt-6 rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* copy */}
          <div className="p-8 lg:p-10 flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-mono text-xs font-bold tracking-widest text-[#8a938c]">
                STEP 0{step + 1} / 0{steps.length}
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[linear-gradient(135deg,#006d2f_0%,#25d366_100%)] text-white shadow-lg shadow-[#006d2f]/25 shrink-0">
                <Icon className="w-7 h-7" />
              </span>
              <div>
                <h3 className={`${jakarta.className} text-2xl font-extrabold text-[#191c1d] leading-tight`}>
                  {current.title}
                </h3>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mt-5 text-[15px]">{current.summary}</p>
            <ul className="mt-6 space-y-3">
              {current.details.map((d) => (
                <li key={d} className="flex items-start gap-3 text-[14px] text-slate-700">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#25d366]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#006d2f]" />
                  </span>
                  {d}
                </li>
              ))}
            </ul>

            {/* controls */}
            <div className="mt-auto pt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous step"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
                  className="flex items-center gap-2 bg-[#191c1d] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#006d2f] transition-colors"
                >
                  Next step <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  href={audience.cta.href}
                  className="flex items-center gap-2 bg-[linear-gradient(135deg,#006d2f_0%,#25d366_100%)] text-white font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-[#006d2f]/20"
                >
                  {audience.cta.label} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>

          {/* visual */}
          <div className="relative bg-[#f4f6f5] border-t lg:border-t-0 lg:border-l border-slate-200 p-8 lg:p-10 flex items-center justify-center min-h-[320px]">
            <div
              aria-hidden
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage: 'radial-gradient(rgba(0,109,47,0.06) 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }}
            />
            <div key={`${audienceKey}-${step}`} className="relative w-full max-w-sm animate-fade-in-up">
              {current.visual}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

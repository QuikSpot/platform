'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import {
  Send,
  Sparkles,
  Zap,
  BadgeCheck,
  Check,
  CheckCheck,
  Star,
  MapPin,
  Clock,
  User,
  MessageCircle,
} from 'lucide-react';

// Same headline font as the rest of the landing page (see app/page.tsx).
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });
const headline = jakarta.className;

const whatsappGradient = 'bg-[linear-gradient(135deg,#006d2f_0%,#25d366_100%)]';

const STEP_DURATION = 3200;

const steps = [
  {
    icon: Send,
    title: 'Message instaFixd Bot',
    description: 'Send a quick WhatsApp describing what you need. No forms, no new apps to install.',
  },
  {
    icon: Sparkles,
    title: 'AI Analysis',
    description: 'Our AI instantly understands the job — category, urgency, and your location.',
  },
  {
    icon: Zap,
    title: 'Instant Matching',
    description: 'We match you with the best-rated verified pro available near you in seconds.',
  },
  {
    icon: BadgeCheck,
    title: 'Confirmation',
    description: 'Confirm on WhatsApp and track your pro in real time, right up to your door.',
  },
];

export function HowItWorksInteractive() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-advance through the flow, looping. Pauses on hover/interaction.
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((prev) => (prev + 1) % steps.length), STEP_DURATION);
    return () => clearTimeout(t);
  }, [active, paused]);

  // Keep the newest revealed message in view as the flow progresses.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [active]);

  // Conversation revealed progressively — each entry appears once its step is reached.
  const messages: { key: string; step: number; from: 'user' | 'bot'; body: ReactNode }[] = [
    {
      key: 'ask',
      step: 0,
      from: 'user',
      body: (
        <>
          <p className="text-[13.5px] leading-snug">
            Hi! I need an electrician for my living room lights 💡
          </p>
          <Meta read={active >= 1} time="2:30 PM" />
        </>
      ),
    },
    {
      key: 'ai',
      step: 1,
      from: 'bot',
      body: (
        <>
          <p className="text-[13.5px] leading-snug text-zinc-700">Got it! Analyzing your request…</p>
          <div className="mt-2 rounded-xl bg-[#f0fbf5] border border-[#25d366]/25 p-2.5 space-y-1.5">
            <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#006d2f]">
              <Sparkles className="w-3.5 h-3.5" /> AI detected
            </p>
            <ChipRow label="Category" value="Electrical Work" />
            <ChipRow label="Urgency" value="Today" />
            <ChipRow label="Area" value="Colombo 05" />
          </div>
          <Meta time="2:30 PM" />
        </>
      ),
    },
    {
      key: 'match',
      step: 2,
      from: 'bot',
      body: (
        <>
          <p className="text-[13.5px] leading-snug text-zinc-700">
            Perfect — found a top-rated pro near you 🎯
          </p>
          <div className="mt-2 rounded-xl bg-white border border-zinc-200 p-2.5 flex items-center gap-3 shadow-sm">
            <div className="w-11 h-11 rounded-full bg-[#3de273] flex items-center justify-center shrink-0">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[13px] text-zinc-900 leading-tight">Alex Fernando</p>
              <p className="text-[11px] text-zinc-500">Verified Electrician</p>
              <div className="flex items-center gap-2.5 mt-1 text-[10.5px] text-zinc-600">
                <span className="flex items-center gap-0.5 font-semibold text-[#191c1d]">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 4.9
                </span>
                <span className="flex items-center gap-0.5">
                  <MapPin className="w-3 h-3" /> 1.2 km
                </span>
              </div>
            </div>
          </div>
          <Meta time="2:31 PM" />
        </>
      ),
    },
    {
      key: 'ok',
      step: 3,
      from: 'user',
      body: (
        <>
          <p className="text-[13.5px] leading-snug">Great, book them! 🙌</p>
          <Meta read time="2:31 PM" />
        </>
      ),
    },
    {
      key: 'confirm',
      step: 3,
      from: 'bot',
      body: (
        <>
          <div className="rounded-xl bg-[#006d2f] text-white p-3">
            <p className="flex items-center gap-1.5 font-bold text-[13px]">
              <BadgeCheck className="w-4 h-4" /> Booking Confirmed!
            </p>
            <div className="mt-2 pt-2 border-t border-white/20 space-y-1 text-[12px] text-white/90">
              <p className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Alex arrives in ~15 mins
              </p>
              <p className="font-mono text-[11px] text-white/70">Ref #IFX-2043</p>
            </div>
          </div>
          <Meta time="2:31 PM" />
        </>
      ),
    },
  ];

  const visible = messages.filter((m) => active >= m.step);

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Right: heading + interactive steps ── */}
      <div className="order-2 space-y-12">
        <div className="space-y-4">
          <h2 className={`${headline} text-4xl font-extrabold tracking-tight text-[#191c1d]`}>
            No more guessing games. <span className="text-[#006d2f]">Just message us on WhatsApp.</span>
          </h2>
          <p className="text-[#5f5e5e] text-lg">
            The modern standard for local expertise — get matched with a trusted pro in seconds.
          </p>
        </div>

        <div className="space-y-2">
          {steps.map(({ icon: Icon, title, description }, i) => {
            const isActive = i === active;
            const isDone = i < active;
            return (
              <button
                key={title}
                type="button"
                // Highlight follows the cursor; click/focus keep it usable on touch & keyboard.
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-current={isActive}
                className={[
                  'w-full text-left flex gap-6 items-start rounded-2xl p-4 -mx-4 focus:outline-none',
                  'transition-all duration-500',
                  isActive ? 'bg-white shadow-lg shadow-black/[0.06]' : '',
                ].join(' ')}
              >
                <span
                  className={[
                    'w-14 h-14 shrink-0 rounded-full flex items-center justify-center transition-all duration-500',
                    isActive
                      ? `${whatsappGradient} text-white shadow-lg shadow-[#006d2f]/25 scale-105`
                      : 'bg-[#25d366]/20 text-[#006d2f]',
                  ].join(' ')}
                >
                  {isDone ? <Check className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                </span>

                <span className="flex-1 min-w-0">
                  <h4
                    className={[
                      headline,
                      'text-xl font-bold transition-colors duration-300',
                      isActive ? 'text-[#191c1d]' : 'text-[#5f5e5e]',
                    ].join(' ')}
                  >
                    {title}
                  </h4>
                  <p className="text-[#5f5e5e] leading-relaxed mt-1.5">{description}</p>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Left: live WhatsApp phone mockup (matches WhatsAppChatPreview) ── */}
      <div className="order-1 relative flex justify-center py-6">
        <div className="relative w-full max-w-[320px] bg-zinc-900 rounded-[2.5rem] p-3 shadow-[0_40px_100px_rgba(0,0,0,0.18)]">
          {/* Screen */}
          <div className="bg-zinc-100 rounded-[2rem] overflow-hidden">
            {/* Status bar */}
            <div className="bg-zinc-100 px-5 py-2.5 flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-500">9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 bg-zinc-400 rounded-sm" />
                <div className="w-6 h-3 bg-zinc-400 rounded-sm" />
              </div>
            </div>

            {/* Chat header */}
            <div className="bg-white px-4 py-3 border-b border-zinc-200 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-zinc-900 text-sm">instaFixd</p>
                <p className="font-mono text-[10px] text-green-600 uppercase tracking-wider">online</p>
              </div>
            </div>

            {/* Chat body */}
            <div
              ref={scrollRef}
              className="px-3 py-3 h-[400px] overflow-y-auto scroll-smooth bg-[#e5ddd5]"
            >
              <div className="flex flex-col gap-2.5 min-h-full justify-end">
                {visible.map((m) => (
                  <div
                    key={m.key}
                    className={`flex animate-fade-in-up ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <Bubble from={m.from}>{m.body}</Bubble>
                  </div>
                ))}

                {/* typing indicator while more steps remain */}
                {active < steps.length - 1 && (
                  <div className="flex justify-start animate-fade-in-up">
                    <div className="rounded-2xl rounded-tl-sm bg-white px-3 py-2.5 shadow-sm flex items-center gap-1">
                      {[0, 1, 2].map((d) => (
                        <span
                          key={d}
                          className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse"
                          style={{ animationDelay: `${d * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input area */}
            <div className="bg-[#f0f0f0] px-3 py-2.5 flex items-center gap-2">
              <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-xs text-zinc-400">
                Type a message...
              </div>
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-zinc-600 rounded-full" />
        </div>

        {/* Trust badge */}
        <div className="absolute -bottom-10 right-0 lg:-right-10 bg-[#006d2f] p-8 rounded-2xl text-white shadow-2xl max-w-xs">
          <p className={`${headline} text-4xl font-extrabold mb-2`}>100%</p>
          <p className="font-bold opacity-90">Verified professionals, every time.</p>
        </div>
      </div>
    </div>
  );
}

/* ── small building blocks ── */

function Bubble({ from, children }: { from: 'user' | 'bot'; children: ReactNode }) {
  if (from === 'user') {
    return (
      <div className="max-w-[80%] bg-[#dcf8c6] text-zinc-900 rounded-2xl rounded-tr-sm px-3 py-2 shadow-sm">
        {children}
      </div>
    );
  }
  return (
    <div className="max-w-[80%] bg-white text-zinc-800 rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm">
      <p className="text-[10px] font-bold text-blue-600 mb-1">instaFixd Bot</p>
      {children}
    </div>
  );
}

function Meta({ time, read }: { time: string; read?: boolean }) {
  return (
    <div
      className={`flex items-center justify-end gap-0.5 mt-0.5 ${
        read !== undefined ? 'text-zinc-500' : 'text-zinc-400'
      }`}
    >
      <span className="text-[10px]">{time}</span>
      {read !== undefined &&
        (read ? (
          <CheckCheck className="w-3 h-3 text-[#34b7f1]" />
        ) : (
          <Check className="w-3 h-3" />
        ))}
    </div>
  );
}

function ChipRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-[11px] text-zinc-500">{label}</span>
      <span className="text-[11px] font-bold text-[#006d2f] bg-[#25d366]/15 px-2 py-0.5 rounded-full">
        {value}
      </span>
    </div>
  );
}

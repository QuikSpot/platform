'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import QRCode from 'qrcode';
import { Plus_Jakarta_Sans, Inter, Caveat } from 'next/font/google';
import {
  MessageCircle,
  BadgeCheck,
  Search,
  ArrowRight,
  ArrowUpRight,
  Star,
  User,
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Facebook,
  Instagram,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { HowItWorksInteractive } from '@/components/how-it-works';
import { services } from '@/lib/services-data';
import { WHATSAPP_BOT_LINK } from '@/lib/whatsapp';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['600', '700'] });
const headline = jakarta.className;

const featuredServices = services.slice(0, 6);

const testimonials = [
  { name: 'Sarah Jenkins', role: 'Homeowner', text: '"I was skeptical about booking a plumber on WhatsApp, but InstaFixd made it so easy. Found someone in 5 minutes!"' },
  { name: 'Michael Chen', role: 'Tech Manager', text: '"The quality of the AC repair was outstanding. The professional was verified and clearly knew their craft."' },
  { name: 'Jessica Drew', role: 'Startup Founder', text: '"Payment through WhatsApp was seamless. I love that I don\'t need another app on my phone."' },
];

const whatsappGradient = 'bg-[linear-gradient(135deg,#006d2f_0%,#25d366_100%)]';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    QRCode.toDataURL(WHATSAPP_BOT_LINK, {
      width: 448,
      margin: 1,
      errorCorrectionLevel: 'H',
      color: { dark: '#006d2f', light: '#ffffff' },
    })
      .then(setQrDataUrl)
      .catch(() => {});
  }, []);

  if (!mounted) return null;

  return (
    <div className={`min-h-screen bg-[#f8f9fa] text-[#191c1d] overflow-x-hidden ${inter.className}`}>

      <Navbar />

      <main>

        {/* ── Hero ── */}
        <section className="relative min-h-[870px] flex items-center overflow-hidden px-6 md:px-12">
          <div className="absolute inset-0 z-0">
            <img
              alt="Professional electrician working on a circuit breaker"
              className="w-full h-full object-cover opacity-20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6JOzLFnFEBV1PkdJbu2OcVewIp375ylsULNC0ZwxZ5OreXm4HUr5du9rndOsc0BxMx7xceqBPnfbHPF_aD23E6eL3B9Qw7HjMmtbW40AC5w7StWARHrMKU6SF40xjgclDwbXB6JFC_E3D0suiKttA52JIvuxkIMzDf3hJ_CwzFwnKjzVW0AomS33P40DY0iEN5g8Ftjxij7mONPPvX58DLDZWJ7PS21m-afnBWogy73ZyOlCF93FwQ8iFbNWs9FjDDIThIqX90lA"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/90 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25d366]/20 text-[#006d2f] font-bold text-sm tracking-wide uppercase">
                <BadgeCheck className="w-4 h-4" /> Verified Experts Only
              </div>
              <h1 className={`${headline} text-6xl md:text-7xl font-extrabold text-[#191c1d] leading-[1.1] tracking-tight`}>
                Service Anytime, <br /><span className="text-[#006d2f]">Anywhere.</span><br />Just WhatsApp.
              </h1>
              <p className="text-lg md:text-xl text-[#5f5e5e] max-w-lg font-medium leading-relaxed">
                Skip the forms and the wait. Connect with top-rated local professionals through our intelligent WhatsApp assistant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={WHATSAPP_BOT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${whatsappGradient} text-white px-8 py-4 rounded-full font-extrabold text-lg flex items-center justify-center gap-3 shadow-xl shadow-[#006d2f]/20 hover:scale-105 transition-all`}
                >
                  <MessageCircle className="w-6 h-6 fill-white" />
                  Book on WhatsApp
                </a>
                <a href="#services" className="bg-[#e7e8e9] text-[#191c1d] px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-[#e1e3e4] transition-all">
                  Browse Services
                </a>
              </div>
            </div>
            {/* Floating interactive elements — top-to-bottom narrative: provider tracking → chat snippet → QR CTA */}
            <div className="hidden lg:block relative min-h-[700px]">

              {/* 1. Provider tracking card — shifted right, over the open photo area */}
              <div className="bg-white p-6 rounded-xl shadow-2xl shadow-black/5 border border-[#bbcbb9]/10 max-w-sm absolute top-[40px] left-[260px] z-10 animate-float-up">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#3de273] flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#191c1d]">Alex, Master Plumber</p>
                    <p className="text-sm text-[#5f5e5e]">Arriving in 15 mins</p>
                  </div>
                </div>
                <div className="h-2 w-full bg-[#edeeef] rounded-full overflow-hidden">
                  <div className="h-full bg-[#006d2f] w-3/4" />
                </div>
              </div>

              {/* 2. Chat snippet — shifted further right and down, near the bottom of the open photo area */}
              <div
                className="bg-white p-4 rounded-xl shadow-xl absolute top-[600px] left-[300px] z-10 max-w-[240px] animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="flex gap-2 items-start">
                  <MessageCircle className="w-6 h-6 text-[#006d2f] shrink-0" />
                  <p className="text-sm font-medium">"I need an electrician for my living room lights."</p>
                </div>
              </div>

              {/* 3. WhatsApp bot QR code — primary CTA, anchored at the bottom with room to breathe */}
              <div
                className="absolute top-[262px] left-0 z-20 animate-float-up"
                style={{ animationDelay: '0.4s' }}
              >
                <a
                  href={WHATSAPP_BOT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform"
                >
                  <div className="relative p-2 rounded-2xl border border-white/70 bg-white/30 backdrop-blur-[2px] shadow-sm">
                    {qrDataUrl ? (
                      <img
                        src={qrDataUrl}
                        alt="Scan to chat with InstaFixd on WhatsApp"
                        className="w-56 h-56"
                      />
                    ) : (
                      <div className="w-56 h-56 rounded-md bg-[#edeeef] animate-pulse" />
                    )}
                    {qrDataUrl && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-11 h-11 rounded-full bg-white border-2 border-[#25d366] shadow-sm flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-[#006d2f] fill-[#006d2f]" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hand-drawn annotation — sits in the open space to the card's right, clear of every other element */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-[calc(100%+16px)] flex items-center gap-2 pointer-events-none select-none">
                    <svg width="56" height="48" viewBox="0 0 56 48" fill="none" className="text-[#006d2f] shrink-0">
                      <path d="M50 40C34 40 14 24 6 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 7" />
                      <path d="M17 14L6 8L7 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={`${caveat.className} -rotate-3 text-2xl font-bold text-[#006d2f] whitespace-nowrap`}>
                      Scan me to chat!
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Search Bar ── */}
        <section className="max-w-4xl mx-auto -mt-12 relative z-20 px-6">
          <div className="bg-white rounded-2xl shadow-2xl p-2 flex items-center gap-4 group focus-within:ring-2 ring-[#006d2f] transition-all">
            <div className="pl-6 text-[#5f5e5e] group-focus-within:text-[#006d2f] transition-colors">
              <Search className="w-8 h-8" />
            </div>
            <input
              className="w-full py-6 text-xl bg-transparent border-none focus:ring-0 focus:outline-none placeholder:text-[#c8c6c5] font-medium text-[#191c1d]"
              placeholder="What do you need help with today?"
              type="text"
            />
            <button className="bg-[#006d2f] text-white px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-all shrink-0">
              Find Pro
            </button>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="py-24 px-6 md:px-12 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto">
            <HowItWorksInteractive />
          </div>
        </section>

        {/* ── Popular Services ── */}
        <section id="services" className="py-24 px-6 md:px-12 bg-[#f3f4f5]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div className="space-y-4">
                <h2 className={`${headline} text-4xl font-extrabold tracking-tight`}>Popular Services</h2>
                <p className="text-[#5f5e5e] text-lg">Trusted by thousands of homeowners every day.</p>
              </div>
              <Link href="/services" className="hidden md:flex items-center gap-2 text-[#006d2f] font-bold hover:underline">
                View All Services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map(service => (
                <Link key={service.title} href="/services" className="bg-white rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 block">
                  <div className="h-56 relative overflow-hidden">
                    <img
                      alt={service.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={service.img}
                    />
                    {service.popular && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#006d2f]">POPULAR</div>
                    )}
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className={`${headline} text-2xl font-bold`}>{service.title}</h3>
                    <p className="text-[#5f5e5e] text-sm">{service.description}</p>
                    <div className="flex items-center justify-end pt-4">
                      <span className="text-[#191c1d] font-bold flex items-center gap-1 group-hover:text-[#006d2f] transition-colors">
                        Explore <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 flex md:hidden justify-center">
              <Link href="/services" className="flex items-center gap-2 text-[#006d2f] font-bold hover:underline">
                View All Services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>


        {/* ── Testimonials ── */}
        <section id="testimonials" className="py-24 px-6 md:px-12 bg-[#f3f4f5] overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`${headline} text-4xl font-extrabold tracking-tight`}>What our users say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map(t => (
                <div key={t.name} className="bg-white p-8 rounded-2xl space-y-6 shadow-sm">
                  <div className="flex gap-0.5 text-[#006d2f]">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-[#006d2f]" />)}
                  </div>
                  <p className="text-[#191c1d] font-medium italic">{t.text}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#edeeef]" />
                    <div>
                      <p className="font-bold">{t.name}</p>
                      <p className="text-xs text-[#5f5e5e]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-24 px-6 md:px-12 bg-[#191c1d] text-[#f8f9fa] text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className={`${headline} text-5xl md:text-6xl font-extrabold tracking-tighter`}>
              Experience the Future of Local Services. <br />Start a chat today.
            </h2>
            <div className="flex justify-center pt-6">
              <button className={`${whatsappGradient} text-white px-12 py-6 rounded-full font-black text-2xl flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[#006d2f]/30`}>
                <MessageCircle className="w-9 h-9 fill-white" />
                Chat with InstaFixd
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <span className="font-black text-xl italic tracking-widest">VISA</span>
              <span className="font-black text-xl italic tracking-widest">MasterCard</span>
              <span className="font-black text-xl italic tracking-widest">Apple Pay</span>
              <span className="font-black text-xl italic tracking-widest">G-Pay</span>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-slate-50 w-full py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className={`${headline} text-xl font-extrabold text-slate-900`}>InstaFixd</div>
            <p className="text-slate-500 text-sm leading-relaxed">The premium marketplace for verified local service professionals, delivered exclusively via WhatsApp.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-green-600 underline-offset-4 hover:underline transition-all" href="#">About Us</a></li>
              <li><a className="hover:text-green-600 underline-offset-4 hover:underline transition-all" href="#services">Services</a></li>
              <li><Link className="hover:text-green-600 underline-offset-4 hover:underline transition-all" href="/register/partner">Partner with Us</Link></li>
              <li><a className="hover:text-green-600 underline-offset-4 hover:underline transition-all" href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@instafixd.lk</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +94 11 234 5678</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Colombo, Sri Lanka</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-xs text-slate-500 mb-4">Get the latest updates and service deals.</p>
            <div className="flex gap-2">
              <input
                className="bg-white border-none text-sm rounded-lg w-full px-3 focus:ring-1 focus:outline-none ring-[#006d2f]"
                placeholder="Email address"
                type="email"
              />
              <button className="bg-[#006d2f] text-white p-2 rounded-lg" aria-label="Subscribe">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">© {new Date().getFullYear()} InstaFixd. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-slate-400 hover:text-[#006d2f] transition-colors" href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            <a className="text-slate-400 hover:text-[#006d2f] transition-colors" href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            <a className="text-slate-400 hover:text-[#006d2f] transition-colors" href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

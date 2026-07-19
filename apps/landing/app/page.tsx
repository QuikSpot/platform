'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import {
  MessageCircle,
  BadgeCheck,
  Search,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Smartphone,
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

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });
const headline = jakarta.className;

const services = [
  {
    title: 'AC Repair',
    description: 'Deep cleaning, gas refill, and expert troubleshooting.',
    price: 'Starts at $49',
    bestseller: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4S584jMua-4eVrCWvJXOtxGxHUYQWpwM1_c2O7JTEgO3S3TOu7wyxw_RKyH9m2eBBCgfKTPoKi_hkfruQP4DVaZDa4xMGKuqtIeljv5x7dN2QabUBzlTycc4hRgL4Cy3DLoAwxYBI0H1I0wO-nnAQQoHu9doqrsG3ryE8ZoxbxBKL_De2SHYBYxRoI_ILv5zNftLTXVoq4ZH9dmOjuBaYbO3K8Lxr8k4Hyk1t1tGTIjkaNbV4Xikd9uKJwPJfm8ryBS567MTsvBQ',
    alt: 'Air conditioner being repaired',
  },
  {
    title: 'Plumbing',
    description: 'Leak detection, pipe repairs, and fixture installations.',
    price: 'Starts at $35',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp5YJfi4KMMlZ_Lu3Vqz1hglYW2bCLmVagJDlNDtNqEatmCX81j-5ry1Ps3kh3QVRqODCVWQ4laoaYMcsCEy31qJ3fremcuZYQrZG-JLky0lH4QiYmXVhCCIvODf9eEgLp010VJzlJCja47A4QdGRg8fjIHxSOaADF090KAJLaivz8OfGpK3QGL8eYgApJzWxHRA7Y3HX49VAEl_2LcKyJC6Sdr5wGkpYOKTDoMJmTg_HwCpJZ2X8yMtxRX7ah09dGlPoDWUS_1hI',
    alt: 'Plumber fixing a sink',
  },
  {
    title: 'Electrical',
    description: 'Safe wiring, switch repairs, and full home electrical audits.',
    price: 'Starts at $40',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOnhTi-8YZ-Duc74xjrs8_opuQgU9V8fqkPVsCN1lcl3MNnAlBuV0bYHrV0TUxkms0Omn_1q9cTtXpDu2L9_piBhJFrdhlasFIpgkTtcZIvla5kvkMV1uI2X79waNCOsuEe2UkP6hvIwuPQhdo2jmxZPdhT_1-noueqaG0OJY0w9P6lFEfbaSLURe-LLGtxA8TJSKeBU-I9G8-o-iH7zyxfG9zg30LkpPeUCFooZ0qHp8NHOJ1RoM9QP3vxJqzDPUlQFDHqAI_TLM',
    alt: 'Electrician working',
  },
  {
    title: 'Home Cleaning',
    description: 'Deep cleaning, sanitization, and eco-friendly products.',
    price: 'Starts at $60',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3W0DxbQ8YmzW4daTEgJ3IUMvOocSDaWB2NaXotfmxXfMlhdIaATaGzpkf0iIBnt8aI117caYEe1-ryeRK0pvcJiGSIN6T1Ln3RyrhDFEhG77F2syzrmsaYIhHaKXfpBOqLa1ahSBuV246O3HGWB6tDySnf4Jfvn_ScY3A7O599M4NVHUdcKtofS-Lbge28N2zM8RdxIadewMLQNj-LaNyS-EI_AvfYkNoa8XFqLBcw7n-As8QK3vlw356QmSWP2L5lnLqM4o6wnQ',
    alt: 'Home cleaning professional',
  },
  {
    title: 'Pest Control',
    description: 'Eco-safe pest removal and preventive treatments.',
    price: 'Starts at $75',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi37AzXR_sJ2w7N4WGMYq2BrsNHLYe6H1GlVm3Ox_p_YLSiDForqEctdLKNXc18ty6FpjhNqLaTEa8DCu55bkSm808g6QUDAimtwcOmrp1muKE_beJQ7HljowtRRIvM461AvtBwztgJKIS1e7wuW4DWPS1uEv-ftvnpjgXCp0xYtGRzl4h2DNkjAG5kNWCu8aCX-HUYZYFgb2JEUBXM-dtib_0hQWnrU_3Grg_e8k6tmM6a49o2HKLNxwn6dNDGC8RL7PketL4okI',
    alt: 'Pest control',
  },
  {
    title: 'Painting',
    description: 'Interior/exterior painting with premium finish.',
    price: 'Starts at $199',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2xmI2AaDo-2WQrAtDtzpsrSovKwQbJYuTuEHwSMzHpoTrdU-tcc1Ek59PqVed5A42-GD9U105oLpOFdHxNGJK2b-sqgckJa1ldCoDm7KxrpeEahKq5I6zYrsUudMqPsPil2_0LVmTgvtSWW3kubztA1kU8sdm-9J3WoeZDKWkpeWflTCrrm-OQn5Y_4Qf1hp11iUwFfkpiwFdN5AKGYpp-aPY7IE_kGu700-i234T0r2ASvqh3CKG8hhQu5yI-j8mxpiJqRGlA-w',
    alt: 'Painting',
  },
];

const steps = [
  { icon: MessageSquare, title: '1. Say Hello', description: 'Send a simple message on WhatsApp describing what you need help with.' },
  { icon: Sparkles, title: '2. Curator Matches', description: 'Our AI-driven curator matches you with the perfect available professional in seconds.' },
  { icon: ShieldCheck, title: '3. Service Done', description: 'Your professional arrives, does the job, and you pay securely via WhatsApp link.' },
];

const whyChooseUs = [
  { icon: Zap, title: 'Unmatched Speed', description: 'Our WhatsApp bot finds matches in under 60 seconds. No browsing through hundreds of profiles.' },
  { icon: BadgeCheck, title: 'Strict Verification', description: 'Every InstaFixd pro undergoes background checks and quality audits every 30 days.' },
  { icon: Smartphone, title: 'WhatsApp Native', description: 'Book, track, chat, and pay without ever leaving your favorite messaging app.' },
];

const testimonials = [
  { name: 'Sarah Jenkins', role: 'Homeowner', text: '"I was skeptical about booking a plumber on WhatsApp, but InstaFixd made it so easy. Found someone in 5 minutes!"' },
  { name: 'Michael Chen', role: 'Tech Manager', text: '"The quality of the AC repair was outstanding. The professional was verified and clearly knew their craft."' },
  { name: 'Jessica Drew', role: 'Startup Founder', text: '"Payment through WhatsApp was seamless. I love that I don\'t need another app on my phone."' },
];

const whatsappGradient = 'bg-[linear-gradient(135deg,#006d2f_0%,#25d366_100%)]';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

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
                <button className={`${whatsappGradient} text-white px-8 py-4 rounded-full font-extrabold text-lg flex items-center justify-center gap-3 shadow-xl shadow-[#006d2f]/20 hover:scale-105 transition-all`}>
                  <MessageCircle className="w-6 h-6 fill-white" />
                  Book on WhatsApp
                </button>
                <a href="#services" className="bg-[#e7e8e9] text-[#191c1d] px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-[#e1e3e4] transition-all">
                  Browse Services
                </a>
              </div>
            </div>
            {/* Floating interactive elements */}
            <div className="hidden lg:block relative">
              <div className="bg-white p-6 rounded-xl shadow-2xl shadow-black/5 border border-[#bbcbb9]/10 max-w-sm absolute -top-20 right-0 animate-float-up">
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
              <div className="bg-white p-4 rounded-xl shadow-xl absolute top-40 -left-10 max-w-[240px]">
                <div className="flex gap-2 items-start">
                  <MessageCircle className="w-6 h-6 text-[#006d2f] shrink-0" />
                  <p className="text-sm font-medium">"I need an electrician for my living room lights."</p>
                </div>
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
            <div className="text-center mb-20 space-y-4">
              <h2 className={`${headline} text-4xl md:text-5xl font-extrabold tracking-tight`}>
                Just text us, <span className="text-[#006d2f]">we'll find your pro.</span>
              </h2>
              <p className="text-[#5f5e5e] text-lg max-w-2xl mx-auto">Experience the most seamless booking journey ever created for local services.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {steps.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex flex-col items-center text-center space-y-6 group">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:bg-[#006d2f] transition-colors duration-500">
                    <Icon className="w-10 h-10 text-[#006d2f] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className={`${headline} text-2xl font-bold`}>{title}</h3>
                  <p className="text-[#5f5e5e] leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
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
              <button className="hidden md:flex items-center gap-2 text-[#006d2f] font-bold hover:underline">
                View All Services <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map(service => (
                <div key={service.title} className="bg-white rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="h-56 relative overflow-hidden">
                    <img
                      alt={service.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={service.img}
                    />
                    {service.bestseller && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#006d2f]">BESTSELLER</div>
                    )}
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className={`${headline} text-2xl font-bold`}>{service.title}</h3>
                    <p className="text-[#5f5e5e] text-sm">{service.description}</p>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-[#006d2f] font-bold">{service.price}</span>
                      <button className="text-[#191c1d] font-bold flex items-center gap-1 hover:text-[#006d2f] transition-colors">
                        Book <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-24 px-6 md:px-12 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square bg-[#edeeef] rounded-3xl overflow-hidden">
                <img
                  alt="Trustworthy service professional"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxWX8QTnCjHZa1A8Q8_tpRKMYsJwbgX6ACVhECjdRx61sLK3NjNtjDTH_aELC9F8EavtdP_ykKow211fDoFLqoGUxX29wa-RdP6E8JEPldvNkKYM94ozxiq4We4dmhWDESeZgllBQ3PbLF01wDpnmIXHWUiO-mUKEXe9jvrjUp2Li5QKNWgno2Uq7quGMBr-UIehjazItxJJuE6kjHWNoCyA8BSJGwmoe_iDp11S8aVc2U3_fxDXStF-LJHPvwmRMANkb-hd3e0_0"
                />
              </div>
              <div className="absolute -bottom-10 right-0 lg:-right-10 bg-[#006d2f] p-8 rounded-2xl text-white shadow-2xl max-w-xs">
                <p className={`${headline} text-4xl font-extrabold mb-2`}>100%</p>
                <p className="font-bold opacity-90">Satisfaction Guaranteed or your money back.</p>
              </div>
            </div>
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className={`${headline} text-4xl font-extrabold tracking-tight`}>
                  The Modern Standard for <span className="text-[#006d2f]">Local Expertise.</span>
                </h2>
                <p className="text-[#5f5e5e] text-lg">We didn't just build a marketplace; we built a curation engine that values your time.</p>
              </div>
              <div className="space-y-8">
                {whyChooseUs.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex gap-6 items-start">
                    <div className="w-14 h-14 shrink-0 rounded-full bg-[#25d366]/20 flex items-center justify-center text-[#006d2f]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className={`${headline} text-xl font-bold mb-2`}>{title}</h4>
                      <p className="text-[#5f5e5e]">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
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

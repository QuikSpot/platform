'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Wrench,
  Zap,
  Droplet,
  Wind,
  BookOpen,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Play,
  Shield,
  Clock,
  Star,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';
import { ChatPreviewSection } from '@/components/chat-preview-section';

const services = [
  { icon: Zap,       title: 'Electricians',    description: 'Expert electrical repairs and installations' },
  { icon: Droplet,   title: 'Plumbers',        description: 'Professional plumbing solutions' },
  { icon: Wind,      title: 'AC Repair',       description: 'Climate control experts' },
  { icon: Sparkles,  title: 'Cleaners',        description: 'Home & office cleaning services' },
  { icon: BookOpen,  title: 'Tutors',          description: 'Professional tutoring services' },
  { icon: Wrench,    title: 'General Repairs', description: 'All-round maintenance services' },
];

const steps = [
  { number: '1', title: 'Message InstaFixd Bot', description: 'Start a WhatsApp conversation and describe your problem' },
  { number: '2', title: 'AI Analysis',           description: 'Our AI analyzes your needs and identifies the right provider' },
  { number: '3', title: 'Instant Matching',      description: 'Get matched with the best available service provider' },
  { number: '4', title: 'Confirmation',          description: 'Receive booking confirmation directly on WhatsApp' },
];

const testimonials = [
  { name: 'Ravi Kumar',  role: 'Homeowner',      text: 'InstaFixd fixed my AC in hours! The WhatsApp integration made everything so convenient.',                        rating: 5 },
  { name: 'Priya Silva', role: 'Business Owner', text: 'Reliable, fast, and professional. All my property maintenance is now handled through InstaFixd.',               rating: 5 },
  { name: 'Anil Perera', role: 'Homeowner',      text: 'The AI bot understood exactly what I needed. Found the perfect plumber in minutes!',                            rating: 5 },
];

const featureCards = [
  { type: 'image', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', label: 'Analytics and Reports' },
  { type: 'image', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',  label: 'Multiple Job Types' },
  { type: 'text',  label: 'Bidding Module', desc: 'The bidding module allows professionals to send detailed bids and proposals for biddable jobs, giving service seekers more options and price quotations.' },
  { type: 'image', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',     label: 'Advanced Search' },
  { type: 'image', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',  label: 'Real-time Tracking' },
];

const navLinks = [
  { href: '#services',      label: 'Services' },
  { href: '#how-it-works',  label: 'How It Works' },
  { href: '#testimonials',  label: 'Testimonials' },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  const scrollCarousel = (dir: 'left' | 'right') => {
    carouselRef.current?.scrollBy({ left: dir === 'right' ? 448 : -448, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">InstaFixd</span>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-green-700 transition-colors font-medium">
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link href="/register/partner" className="hidden sm:block">
                <Button className="bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
              </Link>
              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(o => !o)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map(l => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <Link href="/register/partner" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-white">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-green-200/40 rounded-full opacity-50 blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-100/40 rounded-full opacity-50 blur-[100px] -z-10" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-white rounded-full shadow-sm border border-green-100/50"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-green-800 tracking-wide uppercase">Now Launching in Sri Lanka</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.1]"
          >
            Your Local Service
            <br />
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-800 bg-clip-text text-transparent pr-4">
              Marketplace
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Connect instantly with trusted service providers. Describe your problem on WhatsApp, let our AI find the perfect match, and get it done seamlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white text-lg h-14 px-8 rounded-full shadow-lg shadow-green-900/20 transition-all hover:scale-105">
              <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="text-slate-700 border-slate-200 hover:bg-slate-50 text-lg h-14 px-8 rounded-full transition-all hover:scale-105">
              <Play className="w-5 h-5 mr-2" /> Watch Demo
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {[
              { icon: CheckCircle2, label: 'Verified Providers' },
              { icon: Clock,        label: 'Same-Day Service' },
              { icon: Shield,       label: 'Secure & Guaranteed' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/40 text-sm font-medium text-slate-600">
                <Icon className="w-4 h-4 text-green-600 shrink-0" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10">
          {[
            { icon: '⚡', title: 'Quick Booking',  desc: 'Book trusted services in seconds',            bg: 'bg-amber-100/60',  hover: 'group-hover:border-amber-300' },
            { icon: '🤖', title: 'AI Powered',     desc: 'Smart matching with top professionals',       bg: 'bg-blue-100/60',   hover: 'group-hover:border-blue-300' },
            { icon: '💬', title: 'WhatsApp Chat',  desc: 'No apps needed, entirely conversational',     bg: 'bg-emerald-100/60',hover: 'group-hover:border-emerald-300' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className={`group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 ${item.hover} hover:shadow-xl overflow-hidden cursor-pointer`}
            >
              <div className={`absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full ${item.bg} opacity-0 group-hover:opacity-100 group-hover:scale-[2.5] transition-all duration-700 ease-out blur-3xl`} />
              <div className={`relative w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center text-3xl mb-5 transform group-hover:scale-110 transition-all duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">Expert Services Available</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              From emergency repairs to regular home care, find the right verified professional for any job instantly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group relative bg-white rounded-[2rem] p-8 hover:bg-slate-50 transition-colors duration-300 border border-slate-100 shadow-sm hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:bg-green-100">
                    <Icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-sm">{service.description}</p>
                  <div className="mt-5 flex items-center text-green-600 font-semibold text-sm opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">How InstaFixd Works</h2>
            <p className="text-xl text-gray-500">Smart AI matching powered by WhatsApp</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl p-7 text-center border-2 border-green-100 hover:border-green-400 transition-colors h-full shadow-sm"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-md shadow-green-500/20">
                    {step.number}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-green-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WhatsApp Chat Preview ── */}
      <ChatPreviewSection />

      {/* ── Features Carousel ── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900 leading-tight">
                Features Built for<br />Modern Service Businesses
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                A powerful suite of tools to manage, grow, and scale your professional services — all in one place.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => scrollCarousel('left')}
                className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel — no overflow-hidden on parent so scroll works */}
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none' }}
          >
            {featureCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="min-w-[300px] md:min-w-[380px] shrink-0 snap-start rounded-3xl overflow-hidden h-[420px] flex flex-col"
              >
                {card.type === 'image' ? (
                  <>
                    <div className="flex-1 overflow-hidden bg-slate-100">
                      <img
                        src={card.img}
                        alt={card.label}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="bg-[#f4f4f5] px-6 py-5 flex items-center justify-between shrink-0">
                      <h3 className="text-base font-bold text-slate-900">{card.label}</h3>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <ArrowRight className="w-4 h-4 text-slate-600" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 bg-[#1aae74] p-10 flex flex-col justify-center hover:bg-[#159362] transition-colors">
                    <div className="w-10 h-0.5 bg-white/30 rounded-full mb-8" />
                    <h3 className="text-2xl font-bold text-white mb-4">{card.label}</h3>
                    <p className="text-emerald-50/90 leading-relaxed text-sm">{card.desc}</p>
                    <div className="mt-8 inline-flex items-center gap-2 text-white/80 text-sm font-medium hover:text-white transition-colors cursor-pointer">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">Loved by Sri Lankans</h2>
            <p className="text-xl text-slate-500">Don't just take our word for it — see what our community says</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white rounded-3xl p-8 relative border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="absolute top-4 right-8 text-6xl font-serif text-green-200 leading-none select-none">"</div>
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-700 mb-6 text-base leading-relaxed relative z-10">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-base shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-emerald-50 py-16 px-4">
        <div className="max-w-7xl mx-auto bg-white border border-emerald-900 rounded-2xl overflow-hidden shadow-2xl">

          {/* Top section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 p-10 md:p-14">
            {/* Left CTA */}
            <div>
              <div className="flex -space-x-3 mb-8">
                {[11,12,13,14].map(n => (
                  <div key={n} className="w-11 h-11 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${n}`} alt="User" loading="lazy" />
                  </div>
                ))}
              </div>
              <p className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">Build your</p>
              <p className="text-4xl md:text-5xl font-serif italic text-emerald-600 leading-tight">Dream Service</p>
              <p className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-8">Marketplace.</p>
              <Button className="bg-[#114b2e] hover:bg-[#0d3b23] text-white rounded-xl px-7 h-12 text-base w-fit transition-transform hover:scale-105">
                Get In Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Right links — clean 4-column layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:ml-6">
              {/* Col 1 */}
              <div>
                <h4 className="font-bold text-slate-900 mb-5 uppercase text-xs tracking-wider">Services</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li><a href="#" className="hover:text-emerald-700 transition-colors font-medium">Home Services App</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors font-medium">Enterprise</a></li>
                </ul>
                <h4 className="font-bold text-emerald-800 mt-8 mb-5 uppercase text-xs tracking-wider">Case Studies</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li><a href="#" className="hover:text-emerald-700 transition-colors font-medium">Impact Maker</a></li>
                </ul>
              </div>

              {/* Col 2 */}
              <div>
                <h4 className="font-bold text-slate-900 mb-5 uppercase text-xs tracking-wider">Platforms</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  {['Freelancer', 'Taskrabbit', 'Airtasker', 'Thumbtack', 'Voice123', 'Handy'].map(l => (
                    <li key={l}><a href="#" className="hover:text-emerald-700 transition-colors font-medium">{l}</a></li>
                  ))}
                </ul>
              </div>

              {/* Col 3 */}
              <div>
                <h4 className="font-bold text-slate-900 mb-5 uppercase text-xs tracking-wider">Categories</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  {['Laundry', 'Babysitters', 'Mechanic', 'Plumbers', 'Car Wash', 'Beauty', 'Massage'].map(l => (
                    <li key={l}><a href="#" className="hover:text-emerald-700 transition-colors font-medium">{l}</a></li>
                  ))}
                </ul>
              </div>

              {/* Col 4 */}
              <div>
                <h4 className="font-bold text-slate-900 mb-5 uppercase text-xs tracking-wider">Company</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  {['Demo', 'Pricing', 'Clients'].map(l => (
                    <li key={l}><a href="#" className="hover:text-emerald-700 transition-colors font-medium">{l}</a></li>
                  ))}
                </ul>
                <h4 className="font-bold text-emerald-800 mt-8 mb-5 uppercase text-xs tracking-wider">Resources</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  {['Features', 'Resource Center', 'FAQs'].map(l => (
                    <li key={l}><a href="#" className="hover:text-emerald-700 transition-colors font-medium">{l}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-emerald-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end p-10 md:p-14">
              <div>
                <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-black text-[#114b2e] tracking-tighter leading-none break-words">
                  InstaFixd
                </h1>
              </div>
              <div className="flex flex-col md:items-end gap-6">
                {/* Social icons */}
                <div className="flex gap-3">
                  {[
                    { Icon: Linkedin,  label: 'LinkedIn' },
                    { Icon: Facebook,  label: 'Facebook' },
                    { Icon: Twitter,   label: 'Twitter' },
                    { Icon: Instagram, label: 'Instagram' },
                  ].map(({ Icon, label }) => (
                    <button key={label} aria-label={label} className="w-10 h-10 bg-slate-900 rounded text-white flex items-center justify-center hover:bg-emerald-800 transition-colors">
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
                {/* Contact */}
                <div className="text-slate-900 font-semibold md:text-right space-y-1 text-sm">
                  <p>+94 11 234 5678</p>
                  <a href="mailto:sales@instafixd.lk" className="underline underline-offset-4 decoration-2 hover:text-emerald-700 transition-colors">
                    sales@instafixd.lk
                  </a>
                </div>
                {/* Legal links */}
                <div className="text-xs font-semibold text-slate-500 flex gap-4">
                  <a href="#" className="hover:text-slate-800 transition-colors hover:underline">Server Requirement</a>
                  <span>|</span>
                  <a href="#" className="hover:text-slate-800 transition-colors hover:underline">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm font-medium text-slate-500">
          © {new Date().getFullYear()} InstaFixd — A product of{' '}
          <span className="underline decoration-slate-300 underline-offset-4">InstaFixd Technologies</span>.
        </div>
      </footer>
    </div>
  );
}

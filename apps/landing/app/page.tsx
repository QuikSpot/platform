'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import {
  UserCircle,
  LogOut,
  Menu,
  X,
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    setIsProfileOpen(false);
    router.push('/');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignup = () => {
    router.push('/signup');
  };

  return (
    <main className="bg-surface text-on-surface">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto w-full">
          <div className="text-2xl font-black text-slate-900 tracking-tight">Kinetic Curator</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-green-700 font-bold border-b-2 border-green-600 py-1 transition-all duration-300" href="#services">
              Search Services
            </a>
            <a className="text-slate-600 hover:text-green-600 transition-all duration-300" href="#how-it-works">
              How it Works
            </a>
            <a className="text-slate-600 hover:text-green-600 transition-all duration-300" href="#why-us">
              Why Us
            </a>
          </div>

          {/* Auth & Profile */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <UserCircle className="w-6 h-6 text-green-600" />
                  <span className="text-sm font-medium hidden sm:inline">{user.name}</span>
                </button>
                
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={handleLogin}>
                  Login
                </Button>
                <button 
                  onClick={handleSignup}
                  className="whatsapp-gradient text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 active:scale-95 duration-200"
                >
                  <span className="material-symbols-outlined text-lg">chat</span>
                  WhatsApp Bot
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-3">
              <a href="#services" className="block text-green-700 font-bold">Search Services</a>
              <a href="#how-it-works" className="block text-slate-600">How it Works</a>
              <a href="#why-us" className="block text-slate-600">Why Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center overflow-hidden px-6 md:px-12 pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Professional electrician working on a circuit breaker" 
            className="w-full h-full object-cover opacity-20" 
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container/20 text-primary font-bold text-sm tracking-wide uppercase">
              <span className="material-symbols-outlined text-sm">verified</span>
              Verified Experts Only
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight">
              Service Anytime, <br />
              <span className="text-primary">Anywhere.</span>
              <br />
              Just WhatsApp.
            </h1>

            <p className="text-lg md:text-xl text-secondary max-w-lg font-medium leading-relaxed">
              Skip the forms and the wait. Connect with top-rated local professionals through our intelligent WhatsApp assistant.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="whatsapp-gradient text-white px-8 py-4 rounded-full font-extrabold text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  chat
                </span>
                Book on WhatsApp
              </button>
              <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-highest transition-all">
                Browse Services
              </button>
            </div>
          </div>

          {/* Floating Interactive Elements */}
          <div className="hidden lg:block relative">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-2xl shadow-black/5 border border-outline-variant/10 max-w-sm absolute -top-20 right-0 animate-bounce-slow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-fixed-dim flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">person</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">Alex, Master Plumber</p>
                  <p className="text-sm text-secondary">Arriving in 15 mins</p>
                </div>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-3/4"></div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-xl absolute top-40 -left-10 max-w-[240px]">
              <div className="flex gap-2 items-start">
                <span className="material-symbols-outlined text-primary">chat_bubble</span>
                <p className="text-sm font-medium">&quot;I need an electrician for my living room lights.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="max-w-4xl mx-auto -mt-12 relative z-20 px-6">
        <div className="bg-surface-container-lowest rounded-2xl shadow-2xl p-2 flex items-center gap-4 group focus-within:ring-2 ring-primary transition-all">
          <div className="pl-6 text-secondary group-focus-within:text-primary transition-colors">
            <span className="material-symbols-outlined text-3xl">search</span>
          </div>
          <input 
            className="w-full py-6 text-xl bg-transparent border-none focus:ring-0 placeholder:text-secondary-fixed-dim font-medium text-on-surface"
            placeholder="What do you need help with today?"
            type="text"
          />
          <button className="bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-all">
            Find Pro
          </button>
        </div>
      </section>

      {/* The "Wow" Factor: How it Works */}
      <section id="how-it-works" className="py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Just text us, <span className="text-primary">we&apos;ll find your pro.</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Experience the most seamless booking journey ever created for local services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-6 group">
              <div className="w-20 h-20 bg-surface-container-lowest rounded-2xl shadow-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors">
                  message
                </span>
              </div>
              <h3 className="text-2xl font-bold">1. Say Hello</h3>
              <p className="text-secondary leading-relaxed">
                Send a simple message on WhatsApp describing what you need help with.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-6 group">
              <div className="w-20 h-20 bg-surface-container-lowest rounded-2xl shadow-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors">
                  auto_awesome
                </span>
              </div>
              <h3 className="text-2xl font-bold">2. Curator Matches</h3>
              <p className="text-secondary leading-relaxed">
                Our AI-driven curator matches you with the perfect available professional in seconds.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-6 group">
              <div className="w-20 h-20 bg-surface-container-lowest rounded-2xl shadow-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors">
                  verified_user
                </span>
              </div>
              <h3 className="text-2xl font-bold">3. Service Done</h3>
              <p className="text-secondary leading-relaxed">
                Your professional arrives, does the job, and you pay securely via WhatsApp link.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Grid */}
      <section id="services" className="py-24 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold tracking-tight">Popular Services</h2>
              <p className="text-secondary text-lg">Trusted by thousands of homeowners every day.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
              View All Services
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AC Repair */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-56 relative overflow-hidden">
                <img 
                  alt="Air conditioner being repaired"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
                  BESTSELLER
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">AC Repair</h3>
                <p className="text-secondary text-sm">Deep cleaning, gas refill, and expert troubleshooting.</p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-primary font-bold">Starts at $49</span>
                  <button className="text-on-surface font-bold flex items-center gap-1 hover:text-primary transition-colors">
                    Book
                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Plumbing */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-56 relative overflow-hidden">
                <img 
                  alt="Plumber fixing a sink"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Plumbing</h3>
                <p className="text-secondary text-sm">Leak detection, pipe repairs, and fixture installations.</p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-primary font-bold">Starts at $35</span>
                  <button className="text-on-surface font-bold flex items-center gap-1 hover:text-primary transition-colors">
                    Book
                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Electrical */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-56 relative overflow-hidden">
                <img 
                  alt="Electrician working"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Electrical</h3>
                <p className="text-secondary text-sm">Safe wiring, switch repairs, and full home electrical audits.</p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-primary font-bold">Starts at $40</span>
                  <button className="text-on-surface font-bold flex items-center gap-1 hover:text-primary transition-colors">
                    Book
                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Home Cleaning */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-56 relative overflow-hidden">
                <img 
                  alt="Home cleaning professional"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1527482797556-0ed8c4c88b1e?w=400&h=300&fit=crop"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Home Cleaning</h3>
                <p className="text-secondary text-sm">Deep cleaning, sanitization, and eco-friendly products.</p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-primary font-bold">Starts at $60</span>
                  <button className="text-on-surface font-bold flex items-center gap-1 hover:text-primary transition-colors">
                    Book
                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Pest Control */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-56 relative overflow-hidden">
                <img 
                  alt="Pest control"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1584408694375-0ff8f56eaea4?w=400&h=300&fit=crop"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Pest Control</h3>
                <p className="text-secondary text-sm">Eco-safe pest removal and preventive treatments.</p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-primary font-bold">Starts at $75</span>
                  <button className="text-on-surface font-bold flex items-center gap-1 hover:text-primary transition-colors">
                    Book
                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Painting */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-56 relative overflow-hidden">
                <img 
                  alt="Painting"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1589939705882-c6aa3927101f?w=400&h=300&fit=crop"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Painting</h3>
                <p className="text-secondary text-sm">Interior/exterior painting with premium finish.</p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-primary font-bold">Starts at $199</span>
                  <button className="text-on-surface font-bold flex items-center gap-1 hover:text-primary transition-colors">
                    Book
                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square bg-surface-container rounded-3xl overflow-hidden">
              <img 
                alt="Trustworthy service professional"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-2xl text-white shadow-2xl max-w-xs">
              <p className="text-4xl font-extrabold mb-2">100%</p>
              <p className="font-bold opacity-90">Satisfaction Guaranteed or your money back.</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold tracking-tight">
                The Modern Standard for <span className="text-primary">Local Expertise.</span>
              </h2>
              <p className="text-secondary text-lg">
                We didn&apos;t just build a marketplace; we built a curation engine that values your time.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 shrink-0 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">bolt</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Unmatched Speed</h4>
                  <p className="text-secondary">
                    Our WhatsApp bot finds matches in under 60 seconds. No browsing through hundreds of profiles.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 shrink-0 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Strict Verification</h4>
                  <p className="text-secondary">
                    Every Kinetic Curator pro undergoes background checks and quality audits every 30 days.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 shrink-0 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">smartphone</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">WhatsApp Native</h4>
                  <p className="text-secondary">
                    Book, track, chat, and pay without ever leaving your favorite messaging app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight">What our users say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-2xl space-y-6 shadow-sm">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <p className="text-on-surface font-medium italic">
                &quot;I was skeptical about booking a plumber on WhatsApp, but Kinetic Curator made it so easy. Found someone in 5 minutes!&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container"></div>
                <div>
                  <p className="font-bold">Sarah Jenkins</p>
                  <p className="text-xs text-secondary">Homeowner</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-2xl space-y-6 shadow-sm">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <p className="text-on-surface font-medium italic">
                &quot;The quality of the AC repair was outstanding. The professional was verified and clearly knew their craft.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container"></div>
                <div>
                  <p className="font-bold">Michael Chen</p>
                  <p className="text-xs text-secondary">Tech Manager</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-2xl space-y-6 shadow-sm">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <p className="text-on-surface font-medium italic">
                &quot;Payment through WhatsApp was seamless. I love that I don&apos;t need another app on my phone.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container"></div>
                <div>
                  <p className="font-bold">Jessica Drew</p>
                  <p className="text-xs text-secondary">Startup Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-on-surface text-surface text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter">
            Experience the Future of Local Services. <br />
            Start a chat today.
          </h2>
          <div className="flex justify-center pt-6">
            <button className="whatsapp-gradient text-white px-12 py-6 rounded-full font-black text-2xl flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                chat
              </span>
              Chat with the Curator
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale brightness-200">
            <span className="font-black text-xl italic tracking-widest">VISA</span>
            <span className="font-black text-xl italic tracking-widest">MasterCard</span>
            <span className="font-black text-xl italic tracking-widest">Apple Pay</span>
            <span className="font-black text-xl italic tracking-widest">G-Pay</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 w-full py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="text-xl font-extrabold text-slate-900">Kinetic Curator</div>
            <p className="text-slate-500 text-sm leading-relaxed">
              The premium marketplace for verified local service professionals, delivered exclusively via WhatsApp.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-green-600 underline-offset-4 hover:underline transition-all" href="#">About Us</a></li>
              <li><a className="hover:text-green-600 underline-offset-4 hover:underline transition-all" href="#">Services</a></li>
              <li><a className="hover:text-green-600 underline-offset-4 hover:underline transition-all" href="#">Partner with Us</a></li>
              <li><a className="hover:text-green-600 underline-offset-4 hover:underline transition-all" href="#">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">mail</span>
                support@kinetic.pro
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">call</span>
                +1 (800) CURATOR
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Silicon Valley, CA
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-xs text-slate-500 mb-4">Get the latest updates and service deals.</p>
            <div className="flex gap-2">
              <input 
                className="bg-white border-none text-sm rounded-lg w-full focus:ring-1 ring-primary"
                placeholder="Email address"
                type="email"
              />
              <button className="bg-primary text-white p-2 rounded-lg">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">© 2024 Kinetic Curator. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">brand_awareness</span>
            </a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">share</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Wrench,
  MessageCircle,
  CheckCircle2,
  Menu,
  X,
  UserCircle,
  LogOut,
  Star,
  ArrowRight,
  Search,
} from 'lucide-react';
import { useAuth } from '@/context/auth-context';

const services = [
  { title: 'AC Repair', price: '$65', image: '/services/ac-repair.png', rating: 4.8, reviews: 234 },
  { title: 'Plumbing', price: '$50', image: '/services/plumbing.png', rating: 4.9, reviews: 189 },
  { title: 'Electrical', price: '$75', image: '/services/electrical.png', rating: 4.7, reviews: 312 },
  { title: 'Cleaning', price: '$40', image: '/services/cleaning.png', rating: 4.8, reviews: 445 },
  { title: 'Pest Control', price: '$60', image: '/services/pest-control.png', rating: 4.6, reviews: 167 },
  { title: 'Painting', price: '$70', image: '/services/painting.png', rating: 4.8, reviews: 256 },
];

const steps = [
  { number: '1', title: 'Say Hello', description: 'Start a WhatsApp conversation and describe your problem' },
  { number: '2', title: 'Curator Matches', description: 'Our AI Curator analyzes and find the perfect provider' },
  { number: '3', title: 'Service Done', description: 'Your professional gets booked and service is complete' },
];

const testimonials = [
  { name: 'Sarah Jenkins', text: 'Excellent service! Found an electrician within minutes. Very convenient through WhatsApp.' },
  { name: 'Mike Rodriguez', text: 'The platform works great. Professional service at a fair price. Highly recommend!' },
  { name: 'Sophia Park', text: 'Amazing experience. Quick response and the technician was very professional and courteous.' },
];

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '/agreement', label: 'Privacy Policy' },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const { profile, logout } = useAuth();
  const router = useRouter();

  useEffect(() => { setMounted(true); }, []);

  function handleLogout() {
    logout();
    setProfileMenuOpen(false);
  }

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">KProtic Curator</span>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-green-600 transition-colors font-medium">
                  {l.label}
                </a>
              ))}
            </div>

            {/* Right section */}
            <div className="flex items-center gap-3">
              {profile ? (
                <div className="relative">
                  <button
                    onClick={() => setProfileMenuOpen(o => !o)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <UserCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="hidden sm:block text-sm font-medium text-gray-700 max-w-[120px] truncate">
                      {profile.fullName}
                    </span>
                  </button>
                  <AnimatePresence>
                    {profileMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1.5 z-50"
                      >
                        <div className="px-4 py-2 border-b border-gray-100">
                          <p className="text-xs font-semibold text-gray-900 truncate">{profile.fullName}</p>
                          <p className="text-xs text-gray-400 truncate">{profile.email}</p>
                        </div>
                        <button
                          onClick={() => { setProfileMenuOpen(false); router.push('/profile'); }}
                          className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
                        >
                          <UserCircle className="w-4 h-4" /> My Profile
                        </button>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors flex items-center gap-2"
                        >
                          <LogOut className="w-4 h-4" /> Sign out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <>
                  <Link href="/login" className="hidden sm:block">
                    <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50">Sign in</Button>
                  </Link>
                  <Link href="/register/partner" className="hidden sm:block">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
                  </Link>
                </>
              )}
              {!profile && (
                <Link href="/register/partner" className="md:hidden">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white text-xs">Get Started</Button>
                </Link>
              )}
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

        {/* Mobile menu */}
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
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative pt-24 pb-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-green-50 rounded-full border border-green-200">
                <span className="text-xs font-bold text-green-700 uppercase tracking-wide">START EXPLORING NOW</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Service
                <br />
                Anytime,
                <br />
                <span className="text-green-600">Anywhere.</span>
                <br />
                Just WhatsApp.
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Skip the forms and the wait. Connect with top-rated local professionals through our intelligent WhatsApp chatbot.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold h-12 px-8 rounded-lg">
                  <MessageCircle className="w-5 h-5 mr-2" /> Book on WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold h-12 px-8 rounded-lg">
                  Browse Services
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-500">⭐ Rated 4.8/5 by 2K+ users</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">✓ 100% verified professionals</p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="/services/ac-repair.png" 
                    alt="Service Professional" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Search Bar Section ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-4 shadow-sm hover:shadow-md transition-shadow">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="What do you need help with today?"
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
              />
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-6 font-semibold">
                Find Pro
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Just text us, we&apos;ll find your pro.</h2>
            <p className="text-gray-600 text-lg">3 simple steps to get your service booked</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white text-2xl font-bold mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 -right-4 w-8 h-0.5 bg-gray-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Services ── */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Popular Services</h2>
              <p className="text-gray-600">Trusted by thousands of homeowners every day</p>
            </div>
            <Button variant="outline" className="hidden sm:flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-50">
              View All Services <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-lg shadow-sm text-sm font-semibold text-gray-900">
                    FEATURED
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-gray-900">{service.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-green-600 text-green-600" />
                      <span className="text-sm font-semibold text-gray-900">{service.rating}</span>
                      <span className="text-xs text-gray-500">({service.reviews})</span>
                    </div>
                  </div>
                  <Button className="w-full bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 font-semibold rounded-lg">
                    Book <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials/Social Proof ── */}
      <section id="testimonials" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What our users say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border border-gray-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Experience the Future of Local Services.
            <br />
            Start a chat today.
          </h2>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold h-12 px-8 rounded-lg text-lg">
            <MessageCircle className="w-5 h-5 mr-2" /> Chat with the Curator
          </Button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-4">QUICK LINKS</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">COMPANY</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">LEGAL</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/agreement" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">NEWSLETTER</h4>
              <p className="text-sm mb-4">Subscribe for updates and special offers</p>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2024 KProtic Curator. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Electricians',
    description: 'Expert electrical repairs and installations',
  },
  {
    icon: Droplet,
    title: 'Plumbers',
    description: 'Professional plumbing solutions',
  },
  {
    icon: Wind,
    title: 'AC Repair',
    description: 'Climate control experts',
  },
  {
    icon: Sparkles,
    title: 'Cleaners',
    description: 'Home & office cleaning services',
  },
  {
    icon: BookOpen,
    title: 'Tutors',
    description: 'Professional tutoring services',
  },
  {
    icon: Wrench,
    title: 'General Repairs',
    description: 'All-round maintenance services',
  },
];

const steps = [
  {
    number: '1',
    title: 'Message FixMate Bot',
    description: 'Start a WhatsApp conversation and describe your problem',
  },
  {
    number: '2',
    title: 'AI Analysis',
    description: 'Our AI analyzes your needs and identifies the right provider',
  },
  {
    number: '3',
    title: 'Instant Matching',
    description: 'Get matched with the best available service provider',
  },
  {
    number: '4',
    title: 'Confirmation',
    description: 'Receive booking confirmation directly on WhatsApp',
  },
];

const testimonials = [
  {
    name: 'Ravi Kumar',
    role: 'Homeowner',
    text: 'FixMate fixed my AC in hours! The WhatsApp integration made everything so convenient.',
    rating: 5,
  },
  {
    name: 'Priya Silva',
    role: 'Business Owner',
    text: 'Reliable, fast, and professional. All my property maintenance is now handled through FixMate.',
    rating: 5,
  },
  {
    name: 'Anil Perera',
    role: 'Homeowner',
    text: 'The AI bot understood exactly what I needed. Found the perfect plumber in minutes!',
    rating: 5,
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">FixMate</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Services
              </a>
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Testimonials
              </a>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-white">
        {/* Soft elegant background blobs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-green-200/40 rounded-full opacity-50 blur-[100px] -z-10 mix-blend-multiply"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-100/40 rounded-full opacity-50 blur-[100px] -z-10 mix-blend-multiply"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-white rounded-full shadow-sm border border-green-100/50"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-green-800 tracking-wide uppercase">
              Now Launching in Sri Lanka
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.1]"
          >
            Your Local Service
            <br />
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-800 bg-clip-text text-transparent pr-4">
              Marketplace
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light font-normal"
          >
            Connect instantly with trusted service providers. Describe your problem on WhatsApp, let our AI find the perfect match, and get it done seamlessly.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
          >
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white text-lg h-14 px-8 rounded-full shadow-lg shadow-green-900/20 transition-all hover:scale-105">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-slate-700 border-slate-200 hover:bg-slate-50 text-lg h-14 px-8 rounded-full transition-all hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500"
          >
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/40">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Verified Providers</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/40">
              <Clock className="w-5 h-5 text-green-600" />
              <span>Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/40">
              <Shield className="w-5 h-5 text-green-600" />
              <span>Secure & Guaranteed</span>
            </div>
          </motion.div>
        </div>

        {/* Floating feature cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          {[
            { 
              icon: '⚡', 
              title: 'Quick Booking', 
              desc: 'Book trusted services in seconds',
              delay: '100ms',
              bg: 'bg-amber-100/50',
              border: 'group-hover:border-amber-300',
              shadow: 'hover:shadow-amber-500/10'
            },
            { 
              icon: '🤖', 
              title: 'AI Powered', 
              desc: 'Smart matching with top professionals',
              delay: '200ms',
              bg: 'bg-blue-100/50',
              border: 'group-hover:border-blue-300',
              shadow: 'hover:shadow-blue-500/10'
            },
            { 
              icon: '💬', 
              title: 'WhatsApp Chat', 
              desc: 'No apps needed, entirely conversational',
              delay: '300ms',
              bg: 'bg-emerald-100/50',
              border: 'group-hover:border-emerald-300',
              shadow: 'hover:shadow-emerald-500/10'
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 ${item.border} ${item.shadow} hover:shadow-2xl animate-fade-in-up overflow-hidden cursor-pointer`}
              style={{ animationDelay: item.delay }}
            >
              {/* Hover background effect */}
              <div className={`absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full ${item.bg} opacity-0 group-hover:opacity-100 group-hover:scale-[2.5] transition-all duration-700 ease-out blur-3xl`}></div>
              
              <div className={`relative w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center text-4xl mb-6 shadow-sm transform group-hover:scale-110 group-hover:rotate-[5deg] transition-all duration-300 border border-white/50`}>
                <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-500 relative z-10 font-medium">
                {item.desc}
              </p>

              {/* Bottom decorative border */}
              <div className={`absolute bottom-0 left-0 w-full h-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 ${item.bg}`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
              Expert Services Available
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              From emergency repairs to regular home care, find the right verified professional for any job instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  key={i}
                  className="group relative bg-white rounded-[2rem] p-8 hover:bg-slate-50 transition-colors duration-300 border border-slate-100 shadow-sm hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-green-100">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-500">{service.description}</p>
                  
                  <div className="mt-6 flex items-center text-green-600 font-semibold opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - WhatsApp AI Flow */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              How FixMate Works
            </h2>
            <p className="text-xl text-gray-600">
              Smart AI matching powered by WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 text-center border-2 border-green-200 hover:border-green-500 transition-colors h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* WhatsApp Integration Highlight */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-12 border-2 border-green-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  WhatsApp AI Bot
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  No need to download another app. Simply message our AI bot on WhatsApp to:
                </p>
                <ul className="space-y-3">
                  {[
                    'Describe your problem in your own words',
                    'Get matched with the best service provider',
                    'Receive instant booking confirmation',
                    'Track your appointment in real-time',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs">
                  <div className="space-y-4">
                    <div className="flex justify-end">
                      <div className="bg-green-100 rounded-2xl rounded-tr-none px-4 py-2 max-w-xs">
                        <p className="text-gray-900 text-sm">
                          My AC is not cooling properly, and it's making strange noises
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-200 rounded-2xl rounded-tl-none px-4 py-2 max-w-xs">
                        <p className="text-gray-900 text-sm">
                          I found 2 AC repair experts near you! Ravi is 2 km away with 4.8★
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-green-100 rounded-2xl rounded-tr-none px-4 py-2">
                        <p className="text-gray-900 text-sm">Perfect! Book Ravi</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-green-500 text-white rounded-2xl rounded-tl-none px-4 py-2">
                        <p className="text-sm">✓ Booking confirmed! Ravi arrives in 45 mins</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
                Features of FixMate <br /> Freelance Business Management Software
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed font-medium">
                FixMate comprises a unique and powerful suite of features with all the capabilities to deliver professional handyman & freelance services and scale your business. With the right set of features, FixMate enables you to run and manage your business smoothly.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button className="w-14 h-14 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="w-14 h-14 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scroll-smooth hide-scrollbar [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="min-w-[340px] md:min-w-[420px] bg-slate-100 rounded-[2rem] overflow-hidden flex flex-col snap-center shrink-0 h-[480px]"
            >
              <div className="h-[360px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Analytics and Reports" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
              </div>
              <div className="flex-1 flex items-center justify-center p-6 bg-[#f4f4f5]">
                <h3 className="text-xl font-bold text-slate-900 text-center">Analytics and Reports</h3>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="min-w-[340px] md:min-w-[420px] bg-slate-100 rounded-[2rem] overflow-hidden flex flex-col snap-center shrink-0 h-[480px]"
            >
              <div className="h-[360px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Multiple Job Types" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
              </div>
              <div className="flex-1 flex items-center justify-center p-6 bg-[#f4f4f5]">
                <h3 className="text-xl font-bold text-slate-900 text-center">Multiple Job Types</h3>
              </div>
            </motion.div>

            {/* Card 3 - Green Solid Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="min-w-[340px] md:min-w-[420px] bg-[#1aae74] rounded-[2rem] p-12 flex flex-col justify-center snap-center shrink-0 h-[480px] hover:bg-[#159362] transition-colors shadow-lg shadow-[#1aae74]/20"
            >
              <div className="w-12 h-[2px] bg-white/40 rounded-full mb-8 mx-auto"></div>
              <h3 className="text-2xl font-bold text-white text-center mb-6">Bidding Module</h3>
              <p className="text-emerald-50 text-center leading-relaxed text-[15px] font-medium px-4">
                The bidding module allows white-collar professionals to send detailed bids and proposals for biddable jobs, providing service seekers with more options and price quotations.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="min-w-[340px] md:min-w-[420px] bg-slate-100 rounded-[2rem] overflow-hidden flex flex-col snap-center shrink-0 h-[480px]"
            >
              <div className="h-[360px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop" alt="Advanced Search" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
              </div>
              <div className="flex-1 flex items-center justify-center p-6 bg-[#f4f4f5]">
                <h3 className="text-xl font-bold text-slate-900 text-center">Advanced Search</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
              Loved by Sri Lankans
            </h2>
            <p className="text-xl text-slate-500">
              Don't just take our word for it—see what our community says
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {testimonials.map((testimonial, i) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                key={i}
                className="bg-slate-50 rounded-3xl p-10 relative"
              >
                <div className="absolute top-0 right-10 -mt-6 opacity-20">
                  <span className="text-8xl font-serif text-green-600">"</span>
                </div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 text-lg font-medium leading-relaxed relative z-10">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer replacing CTA snippet */}
      <footer className="bg-emerald-50 py-16 px-4">
        <div className="max-w-7xl mx-auto bg-white border border-emerald-900 rounded-2xl overflow-hidden shadow-2xl">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 p-12 md:p-16">
            {/* Left side CTA */}
            <div>
              <div className="flex -space-x-3 mb-8">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 leading-tight tracking-tight">
                Build your
              </h2>
              <h2 className="text-4xl md:text-5xl font-serif italic text-emerald-600 mb-2 leading-tight">
                Dream Service
              </h2>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                Marketplace.
              </h2>
              <Button className="bg-[#114b2e] hover:bg-[#0d3b23] text-white rounded-xl px-8 h-14 text-lg w-fit transition-transform hover:scale-105">
                Get In Touch <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            {/* Right side Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:ml-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-wider">Services</h4>
                <ul className="space-y-4 text-sm font-semibold text-slate-700">
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Home Services App</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Enterprise</a></li>
                </ul>
                <h4 className="font-bold text-emerald-800 mt-8 mb-6 uppercase text-xs tracking-wider">Case Studies</h4>
                <ul className="space-y-4 text-sm font-semibold text-slate-700">
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Impact Maker</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-wider text-transparent select-none bg-clip-text">Hidden</h4>
                <ul className="space-y-4 text-sm font-semibold text-slate-700 -mt-2 md:-mt-10">
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Freelancer</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Taskrabbit</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Airtasker</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Thumbtack</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Voice123</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Handy</a></li>
                </ul>
              </div>
              
              <div>
                 <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-wider text-transparent select-none bg-clip-text">Hidden</h4>
                 <ul className="space-y-4 text-sm font-semibold text-slate-700 -mt-2 md:-mt-10">
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Laundry</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Babysitters</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Mechanic</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Plumbers</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Car Wash</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Beauty</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Massage</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-wider text-transparent select-none bg-clip-text">Hidden</h4>
                <ul className="space-y-4 text-sm font-semibold text-slate-700 -mt-2 md:-mt-10">
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Demo</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Clients</a></li>
                </ul>
                <h4 className="font-bold text-emerald-800 mt-8 mb-6 uppercase text-xs tracking-wider">Resources</h4>
                <ul className="space-y-4 text-sm font-semibold text-slate-700">
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">Resource Center</a></li>
                  <li><a href="#" className="hover:text-emerald-700 transition-colors">FAQs</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-emerald-900">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end p-12 md:p-16">
               <div>
                  <h1 className="text-7xl md:text-[8rem] font-black text-[#114b2e] tracking-tighter leading-none">
                    FixMate
                  </h1>
               </div>
               
               <div className="flex flex-col md:items-end justify-between h-full space-y-8">
                 <div className="flex gap-3 mt-4 md:mt-0">
                   {['bg-slate-900', 'bg-slate-900', 'bg-slate-900', 'bg-slate-900'].map((bg, i) => (
                      <div key={i} className={`w-10 h-10 ${bg} rounded text-white flex items-center justify-center cursor-pointer hover:bg-emerald-800 transition-colors`}>
                        {i === 0 ? <Linkedin className="w-5 h-5"/> : i === 1 ? <Facebook className="w-5 h-5"/> : i === 2 ? <Twitter className="w-5 h-5"/> : <Instagram className="w-5 h-5"/>}
                      </div>
                   ))}
                 </div>
                 
                 <div className="text-slate-900 font-semibold md:text-right space-y-1">
                   <p>+94 11 234 5678</p>
                   <p className="underline underline-offset-4 decoration-2 cursor-pointer hover:text-emerald-700 transition-colors">sales@fixmate.lk</p>
                 </div>
                 
                 <div className="text-xs font-bold text-slate-900 flex gap-4">
                    <a href="#" className="hover:underline">Server Requirement</a>
                    <span>|</span>
                    <a href="#" className="hover:underline">Sitemap</a>
                 </div>
               </div>
             </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm font-medium text-slate-500">
          © FixMate - A product of <span className="underline decoration-slate-300 underline-offset-4">FixMate Technologies</span>.
        </div>
      </footer>
    </div>
  );
}

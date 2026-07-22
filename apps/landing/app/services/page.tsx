'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { services } from '@/lib/services-data';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });
const headline = jakarta.className;

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className={`min-h-screen bg-[#f8f9fa] text-[#191c1d] overflow-x-hidden ${inter.className}`}>
      <Navbar />

      <main>
        <section className="py-24 px-6 md:px-12 bg-[#f3f4f5]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16 pt-8">
              <h1 className={`${headline} text-4xl md:text-5xl font-extrabold tracking-tight mb-4`}>
                All Services
              </h1>
              <p className="text-[#5f5e5e] text-lg">
                Every category of skilled, verified professionals available on InstaFixd. Tap a category to see all sub-categories we cover.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {services.map(service => {
                const isOpen = expanded === service.title;
                return (
                  <div
                    key={service.title}
                    className="bg-white rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 self-start"
                  >
                    <div className="h-56 relative overflow-hidden">
                      <img
                        alt={service.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        src={service.img}
                      />
                      {service.popular && (
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#006d2f]">
                          POPULAR
                        </div>
                      )}
                    </div>
                    <div className="p-8 space-y-4">
                      <h3 className={`${headline} text-2xl font-bold`}>{service.title}</h3>
                      <p className="text-[#5f5e5e] text-sm">{service.description}</p>

                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : service.title)}
                        className="flex items-center justify-between w-full text-[#191c1d] font-bold pt-4 hover:text-[#006d2f] transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span>{isOpen ? 'Hide sub-categories' : `View ${service.subCategories.length} sub-categories`}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                      >
                        <div className="overflow-hidden">
                          <ul className="pt-2 space-y-2 border-t border-slate-100">
                            {service.subCategories.map(sub => (
                              <li key={sub} className="text-sm text-[#5f5e5e] flex items-start gap-2 pt-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#006d2f] mt-2 shrink-0" />
                                {sub}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 flex flex-col items-center text-center gap-4">
              <p className="text-[#5f5e5e]">Don't see what you're looking for? We're always adding new categories.</p>
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 bg-[#006d2f] hover:bg-[#00591f] text-white font-bold px-6 py-3 rounded-full transition-colors"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

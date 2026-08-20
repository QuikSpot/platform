'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['700', '800'] });

const FAQS = [
  {
    question: 'How do I book a service on InstaFixd?',
    answer:
      "Just send a WhatsApp message describing what you need — no app to download, no forms to fill. Our assistant matches you with a verified pro nearby in seconds.",
  },
  {
    question: 'Are the service providers verified?',
    answer:
      'Yes. Every professional goes through identity verification — NIC, a selfie check, and police clearance — before they can accept jobs on the platform.',
  },
  {
    question: 'How do I pay for a service?',
    answer:
      'Payment happens securely through a WhatsApp link once the job is done — no cash handling, no separate payment app.',
  },
  {
    question: 'How do I become an InstaFixd partner?',
    answer:
      'Apply through our partner registration form with your basic details, service categories, and availability — it takes about 10 minutes.',
  },
  {
    question: 'How do I get job requests as a provider?',
    answer:
      'Once approved, matched job requests are sent straight to your WhatsApp based on your selected categories, service zone, and availability.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <section id="faq" className="py-24 px-6 md:px-12 bg-[#f8f9fa]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className={`${jakarta.className} text-4xl md:text-5xl font-extrabold tracking-tight`}>
            Frequently asked <span className="text-[#006d2f]">questions.</span>
          </h2>
          <p className="text-[#5f5e5e] text-lg">Everything you need to know before you get started.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`bg-white rounded-2xl shadow-sm border transition-colors ${
                  isOpen ? 'border-[#006d2f]/30' : 'border-transparent'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 px-6 md:px-8 py-6 text-left"
                >
                  <span className={`${jakarta.className} text-base md:text-lg font-bold text-[#191c1d]`}>
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? 'bg-[#006d2f]' : 'bg-[#edeeef]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#5f5e5e]" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 md:px-8 pb-6 text-[#5f5e5e] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

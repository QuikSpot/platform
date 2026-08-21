import { Mail, MapPin, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { WHATSAPP_BOT_LINK } from '@/lib/whatsapp';
import { ContactForm } from './contact-form';

export const metadata: Metadata = {
  title: 'Contact Us – Instafixd',
  description: 'Get in touch with the Instafixd team — via the form below, WhatsApp, email, or our office in Sri Lanka.',
};

const infoRows = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: WHATSAPP_BOT_LINK,
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact.instafixd@gmail.com',
    href: 'mailto:contact.instafixd@gmail.com',
    external: false,
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Colombo, Sri Lanka',
    href: undefined,
    external: false,
  },
] as const;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-white">
      <Navbar />

      <main className="pt-28 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-green-700" />
            </div>
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Contact Us
          </h1>
          <p className="text-gray-500 text-sm mb-10 leading-relaxed max-w-lg">
            Questions about booking a service, becoming a provider, or anything else? Fill out the form below and our team will get back to you within one business day.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Info sidebar */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-fit divide-y divide-gray-100">
              {infoRows.map(({ icon: Icon, label, value, href, external }) => {
                const row = (
                  <div className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
                    <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-green-700" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
                      <p className="text-sm font-medium text-gray-900 truncate">{value}</p>
                    </div>
                  </div>
                );

                if (!href) {
                  return <div key={label}>{row}</div>;
                }

                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="block hover:opacity-70 transition-opacity"
                  >
                    {row}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import Link from 'next/link';
import { Wrench, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – Instafixd',
  description: 'How Instafixd collects, uses, and protects your personal information.',
};

const sections = [
  {
    title: '1. Who We Are',
    body: `Instafixd is a digital marketplace platform based in Sri Lanka that connects customers with verified local service providers. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our platform — whether as a customer or a registered service provider.

By using Instafixd, you agree to the practices described in this policy.`,
  },
  {
    title: '2. Information We Collect',
    body: `We collect information that is necessary to operate the platform and verify the identity of service providers.

For service providers, this includes:
• Full name, mobile number, and email address (optional)
• National Identity Card (NIC) number and NIC scan/photo
• Police clearance certificate document
• A selfie/profile photo for identity verification
• Portfolio photos, PDFs, or ZIP files showcasing your work
• Service categories you offer and the geographic zones you cover
• Your weekly availability schedule

For all users, we also collect:
• Device and browser information for security and fraud prevention
• Usage data such as pages visited and features used (via analytics)

We do not collect passwords. Authentication is handled exclusively via a one-time passcode (OTP) sent to your registered mobile number.`,
  },
  {
    title: '3. How We Use Your Information',
    body: `We use your information to:
• Verify your identity and eligibility to operate as a service provider
• Send OTP codes to authenticate your mobile number during login and registration
• Match customers with relevant service providers based on category, location, and availability
• Display your profile, ratings, and reviews to potential customers
• Process platform commission charges and subscription fees
• Communicate important service updates, policy changes, or account notices
• Investigate complaints or disputes involving your account
• Improve platform performance through anonymised usage analytics`,
  },
  {
    title: '4. How We Share Your Information',
    body: `We do not sell your personal data to third parties. We share information only in the following circumstances:

• With customers: Your public profile (name, service category, zone, ratings) is visible to customers searching for providers. Sensitive documents such as NIC scans and police clearances are never shown to customers.
• With our SMS provider (text.lk): Your mobile number is shared solely to deliver OTP verification messages.
• With Supabase (our cloud infrastructure): All data is securely stored on Supabase servers hosted in the Asia-Pacific region. Supabase processes data on our behalf under strict data protection agreements.
• With authorities: We may disclose information if required by Sri Lankan law, court order, or to protect the safety of users on the platform.`,
  },
  {
    title: '5. Document Storage and Security',
    body: `Identity documents (NIC scans, police clearance certificates, selfies) and portfolio files are stored in a secure, access-controlled cloud storage system (Supabase Storage). These files are:

• Accessible only by Instafixd's authorised internal team for verification purposes
• Never publicly listed or indexed
• Retained for as long as your account is active, plus 12 months after account closure for compliance purposes

We use industry-standard encryption in transit (TLS) and at rest to protect your documents and data.`,
  },
  {
    title: '6. Data Retention',
    body: `We retain your personal data for as long as your service provider account remains active. If you request account deletion, we will remove your personally identifiable information within 30 days, except where retention is required by law (e.g., financial transaction records, which may be retained for up to 7 years in accordance with Sri Lankan regulations).

OTP codes are discarded immediately after successful verification or after a 5-minute expiry window, whichever comes first. They are never stored permanently.`,
  },
  {
    title: '7. Your Rights',
    body: `You have the right to:
• Access the personal information we hold about you
• Request correction of inaccurate or incomplete data
• Request deletion of your account and associated personal data
• Withdraw consent for non-essential communications at any time
• Lodge a complaint with the relevant data protection authority in Sri Lanka

To exercise any of these rights, contact us at privacy@instafixd.lk. We will respond within 14 business days.`,
  },
  {
    title: '8. Cookies and Analytics',
    body: `Instafixd uses minimal cookies required for session management and authentication. We also use Vercel Analytics to collect anonymised, aggregated usage statistics (no personally identifiable information is included in analytics data).

You can disable non-essential cookies through your browser settings at any time.`,
  },
  {
    title: '9. Third-Party Links',
    body: `Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties. We encourage you to review their privacy policies before providing any personal information.`,
  },
  {
    title: '10. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. When we make material changes, we will notify registered service providers via SMS or a notice on the platform. The "Last updated" date at the bottom of this page will always reflect the most recent revision.

Continued use of Instafixd after a policy update constitutes your acceptance of the revised policy.`,
  },
  {
    title: '11. Contact Us',
    body: `If you have any questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please reach out to us:

Instafixd Pvt Ltd
Sri Lanka
Email: privacy@instafixd.lk
Support: support@instafixd.lk`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-white">

      {/* Minimal nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">InstaFixd</span>
          </Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-green-700 transition-colors font-medium">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-28 pb-24 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-700" />
            </div>
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm mb-10 leading-relaxed">
            This policy explains how Instafixd collects, uses, and protects your personal information. Please read it carefully before using our platform.
          </p>

          {/* Sections */}
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6">
                <h2 className="text-base font-bold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{section.body}</p>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-10 text-center text-xs text-gray-400">
            Last updated: May 2025 &nbsp;·&nbsp; Instafixd Pvt Ltd, Sri Lanka
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/register/partner"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-md shadow-green-900/15"
            >
              Register as a Provider
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

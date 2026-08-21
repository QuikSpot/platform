'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const labelCls = 'block text-sm font-semibold text-gray-700 mb-2';
const inputCls =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus('error');
      setErrorMessage('The contact form isn’t configured yet — please email us directly for now.');
      return;
    }

    setStatus('submitting');
    setErrorMessage(null);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New contact form message from ${name}`,
          name,
          email,
          company: company || undefined,
          message,
        }),
      });
      const body = await res.json() as { success?: boolean; message?: string };

      if (!res.ok || !body.success) {
        setStatus('error');
        setErrorMessage(body?.message ?? 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    } catch {
      setStatus('error');
      setErrorMessage('Unable to reach the server. Please try again or email us directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-16 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-7 h-7 text-green-700" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Message sent</h2>
        <p className="text-sm text-gray-500 max-w-xs mb-6">
          Thanks for reaching out — our team will get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold text-green-700 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-8 space-y-6">
      <div>
        <label htmlFor="name" className={labelCls}>Name</label>
        <input
          id="name"
          type="text"
          placeholder="First and last name"
          value={name}
          onChange={e => setName(e.target.value)}
          className={inputCls}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelCls}>Email</label>
        <input
          id="email"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={inputCls}
        />
      </div>

      <div>
        <label htmlFor="company" className={labelCls}>
          Company <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          placeholder="Company name"
          value={company}
          onChange={e => setCompany(e.target.value)}
          className={inputCls}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>How can we help?</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us how we can help you..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          className={`${inputCls} resize-none`}
        />
      </div>

      {status === 'error' && errorMessage && (
        <p className="text-sm text-red-600 font-medium">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Submit'}
      </button>
    </form>
  );
}

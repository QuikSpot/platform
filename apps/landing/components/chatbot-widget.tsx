'use client';

import { useEffect, useRef, useState } from 'react';
import { Bot, Send, Sparkles, X } from 'lucide-react';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['700', '800'] });

interface ChatMessage {
  id: string;
  role: 'bot' | 'user';
  text: string;
}

const GREETING: ChatMessage = {
  id: 'greeting',
  role: 'bot',
  text: "Hi! I'm the instaFixd Assistant. Ask me about our services, pricing, or how booking works.",
};

const PLACEHOLDER_REPLY =
  "Thanks for your message! I'm still being trained on instaFixd's services, so my answers are limited for now. For anything urgent, message us directly on WhatsApp and a real person will help.";

const CHAT_ENDPOINT = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/ai/chat`;

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="w-7 h-7 rounded-full bg-[#006d2f]/10 flex items-center justify-center shrink-0">
        <Bot className="w-4 h-4 text-[#006d2f]" />
      </div>
      <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:-0.3s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:-0.15s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" />
        </div>
      </div>
    </div>
  );
}

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'user', text }]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text }),
      });
      if (!res.ok) throw new Error(`chat ${res.status}`);
      const body = await res.json();
      const reply: string = body?.data?.answer ?? PLACEHOLDER_REPLY;
      setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'bot', text: reply }]);
    } catch {
      setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'bot', text: PLACEHOLDER_REPLY }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* ── Chat panel ── */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-[380px] h-[min(70vh,560px)] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">

          {/* Header */}
          <div className="bg-[#006d2f] px-5 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center relative">
                <Bot className="w-5 h-5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#25d366] border-2 border-[#006d2f]" />
              </div>
              <div>
                <p className={`${jakarta.className} text-white font-bold text-sm leading-tight`}>instaFixd Assistant</p>
                <p className="text-[#bff0d5] text-xs">Online · AI-powered</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-5 space-y-4 bg-[#f8f9fa]">
            {messages.map(m => (
              <div key={m.id} className={`flex items-end gap-2 ${m.role === 'user' ? 'justify-end' : ''}`}>
                {m.role === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-[#006d2f]/10 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-[#006d2f]" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                    m.role === 'user'
                      ? 'bg-[#006d2f] text-white rounded-2xl rounded-br-sm'
                      : 'bg-white border border-slate-100 text-slate-700 rounded-2xl rounded-bl-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && <TypingIndicator />}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-slate-100 bg-white shrink-0">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="flex-1 min-w-0 px-4 py-2.5 rounded-full border border-slate-200 bg-slate-50 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#006d2f]/30 focus:border-[#006d2f] transition"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
                className="shrink-0 w-10 h-10 rounded-full bg-[#006d2f] text-white flex items-center justify-center hover:bg-[#005826] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="flex items-center gap-1 text-[10px] text-slate-400 mt-2 px-1">
              <Sparkles className="w-3 h-3" /> Our AI assistant is still learning — answers may be limited.
            </p>
          </div>
        </div>
      )}

      {/* ── Floating toggle button ── */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        className="fixed bottom-4 right-4 sm:right-6 z-50 w-16 h-16 rounded-full bg-[#006d2f] shadow-xl shadow-[#006d2f]/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
      >
        {!open && <span className="absolute inset-0 rounded-full bg-[#006d2f] animate-ping opacity-40" />}
        {open ? (
          <X className="w-6 h-6 text-white relative" />
        ) : (
          <Bot className="w-7 h-7 text-white relative" />
        )}
      </button>
    </>
  );
}

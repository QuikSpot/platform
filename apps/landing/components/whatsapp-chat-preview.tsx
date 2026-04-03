'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Check, CheckCheck } from 'lucide-react';

const chatMessages = [
  {
    type: 'user',
    message: 'Hi, I need a plumber urgently!',
    time: '2:30 PM',
    read: true,
  },
  {
    type: 'bot',
    message: 'Got it! Searching for verified plumbers near you...',
    time: '2:30 PM',
    read: true,
  },
  {
    type: 'bot',
    message: 'Found 3 available pros! Connecting you with the closest one.',
    time: '2:30 PM',
    read: true,
  },
  {
    type: 'provider',
    name: "Mike's Plumbing",
    avatar: 'M',
    message: "Hi! I'm 8 minutes away. What's the issue?",
    time: '2:31 PM',
    read: true,
  },
  {
    type: 'user',
    message: 'Kitchen sink is leaking badly 🔧',
    time: '2:31 PM',
    read: true,
  },
  {
    type: 'provider',
    name: "Mike's Plumbing",
    avatar: 'M',
    message: "On my way! ETA: 8 mins. I'll send you my live location.",
    time: '2:32 PM',
    read: false,
  },
];

export function WhatsAppChatPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[320px] bg-zinc-900 rounded-[2.5rem] p-3 shadow-[0_40px_100px_rgba(0,0,0,0.18)]">
      {/* Screen */}
      <div className="bg-zinc-100 rounded-[2rem] overflow-hidden">
        {/* Status Bar */}
        <div className="bg-zinc-100 px-5 py-2.5 flex items-center justify-between">
          <span className="font-mono text-xs text-zinc-500">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2 bg-zinc-400 rounded-sm" />
            <div className="w-6 h-3 bg-zinc-400 rounded-sm" />
          </div>
        </div>

        {/* Chat Header */}
        <div className="bg-white px-4 py-3 border-b border-zinc-200 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-semibold text-zinc-900 text-sm">InstaFixd</p>
            <p className="font-mono text-[10px] text-green-600 uppercase tracking-wider">online</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="bg-[#e5ddd5] p-3 space-y-2.5 h-[360px] sm:h-[400px] overflow-y-auto">
          {chatMessages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.35 }}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.type === 'provider' && (
                <div className="w-7 h-7 rounded-full bg-[#114b2e] flex items-center justify-center text-white text-[10px] font-bold mr-1.5 flex-shrink-0 mt-auto mb-1">
                  {msg.avatar}
                </div>
              )}
              <div
                className={`max-w-[78%] shadow-sm ${
                  msg.type === 'user'
                    ? 'bg-[#dcf8c6] text-zinc-900 rounded-2xl rounded-tr-sm'
                    : msg.type === 'bot'
                    ? 'bg-white text-zinc-800 rounded-2xl rounded-tl-sm'
                    : 'bg-white text-zinc-800 rounded-2xl rounded-tl-sm'
                } px-3 py-2`}
              >
                {msg.type === 'provider' && (
                  <p className="text-[10px] font-bold text-green-700 mb-0.5">{msg.name}</p>
                )}
                {msg.type === 'bot' && (
                  <p className="text-[10px] font-bold text-blue-600 mb-0.5">InstaFixd Bot</p>
                )}
                <p className="text-xs leading-relaxed">{msg.message}</p>
                <div
                  className={`flex items-center justify-end gap-0.5 mt-0.5 ${
                    msg.type === 'user' ? 'text-zinc-500' : 'text-zinc-400'
                  }`}
                >
                  <span className="text-[10px]">{msg.time}</span>
                  {msg.type === 'user' &&
                    (msg.read ? (
                      <CheckCheck className="w-3 h-3 text-blue-500" />
                    ) : (
                      <Check className="w-3 h-3" />
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-[#f0f0f0] px-3 py-2.5 flex items-center gap-2">
          <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-xs text-zinc-400">
            Type a message...
          </div>
          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-zinc-600 rounded-full" />
    </div>
  );
}

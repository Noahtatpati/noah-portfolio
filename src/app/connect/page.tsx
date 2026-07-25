'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ChevronDown, Send, ArrowUpRight, Shield } from 'lucide-react';
import { Header } from '@/components/Header';
import { FadeIn } from '@/components/Motion';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import Image from 'next/image';

const contactInfo = [
  { icon: Mail, label: 'EMAIL', value: 'nmtatpati@gmail.com', copyable: true },
  { icon: Phone, label: 'PHONE', value: '+91 94828 04733', copyable: true },
  { icon: MapPin, label: 'LOCATION', value: 'Hubballi, Karnataka, India', copyable: true },
  { icon: Clock, label: 'AVAILABILITY', value: 'Open for Internships & Full-time Opportunities', badge: 'Available', copyable: true },
];

const socialLinks = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/Noahtatpati' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/noah-tatpati/' },
  { icon: Mail, label: 'Email', href: 'mailto:nmtatpati@gmail.com' },
];

const faqs = [
  { q: 'Are you available for internships?', a: 'Yes! I\'m actively looking for internship and full-time opportunities in AI/ML and software engineering roles.' },
  { q: 'What kind of projects are you working on?', a: 'I\'m currently focused on AI-powered applications, full-stack web development, and generative AI solutions.' },
  { q: 'What technologies do you specialize in?', a: 'I specialize in Python, TypeScript, React, Next.js, LangChain, OpenAI APIs, and cloud deployment with Docker.' },
  { q: 'How can we collaborate?', a: 'Feel free to reach out via email or LinkedIn. I\'m open to research collaborations, open-source projects, and exciting opportunities.' },
];

export default function ConnectPage() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  return (
    <>
      <Header />
      <main className="bg-base-50 min-h-screen">
        <section className="max-w-7xl mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left */}
            <div>
              <FadeIn direction="up">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-heading text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Let&apos;s Connect
                  </span>
                </div>
                <h1 className="font-heading text-[2.2rem] sm:text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-base-950 m-0 mb-5">
                  Let&apos;s build<br />something<br />
                  <span className="text-accent">meaningful.</span>
                </h1>
                <p className="text-base-500 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                  I&apos;m always open to discussing new opportunities, collaborations, or just having a conversation about AI, engineering, and product ideas.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <div className="space-y-3 mb-8">
                  {contactInfo.map((item, idx) => (
                    <div key={item.label} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white border border-base-200 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        <item.icon size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] sm:text-xs font-semibold text-base-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-xs sm:text-sm text-base-900 font-medium truncate">{item.value}</p>
                          {item.badge && (
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] sm:text-xs font-semibold rounded-full whitespace-nowrap">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      </div>
                      {item.copyable && (
                        <button
                          onClick={() => handleCopy(item.value, idx)}
                          className="text-base-300 hover:text-base-500 transition-colors shrink-0 cursor-pointer"
                          aria-label="Copy"
                        >
                          {copiedIdx === idx ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                          )}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="text-[10px] sm:text-xs font-semibold text-base-400 uppercase tracking-wider mb-3">Connect with me</p>
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-base-200 rounded-xl text-xs sm:text-sm font-medium text-base-700 hover:border-accent hover:text-accent transition-colors duration-200"
                    >
                      <link.icon size={16} />
                      {link.label}
                      <ArrowUpRight size={12} className="text-base-300" />
                    </a>
                  ))}
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="p-4 sm:p-5 bg-white border border-base-200 rounded-xl flex items-center gap-4">
                  <div className="text-accent text-3xl font-serif leading-none">&ldquo;</div>
                  <div>
                    <p className="text-xs sm:text-sm text-base-600 italic leading-relaxed m-0">
                      The best way to predict the future is to build it.
                    </p>
                  </div>
                  <Image src="/assets/logo.png" alt="Logo" width={40} height={40} className="ml-auto opacity-80" />
                </div>
              </FadeIn>
            </div>

            {/* Right */}
            <div>
              <FadeIn direction="up" delay={0.15}>
                <div className="bg-white border border-base-200 rounded-2xl shadow-sm overflow-hidden mb-5">
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                        <Send size={18} />
                      </div>
                      <div>
                        <h2 className="font-heading text-base sm:text-lg font-bold text-base-950 m-0">Send me a message</h2>
                        <p className="text-xs text-base-400 m-0">I&apos;ll get back to you as soon as possible.</p>
                      </div>
                    </div>

                    <form onSubmit={async (e) => {
                      e.preventDefault();
                      setStatus('sending');
                      try {
                        const res = await fetch('https://api.web3forms.com/submit', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            access_key: 'c3bf344d-1e1c-42d2-89be-a6992f42ce8e',
                            name: form.name,
                            email: form.email,
                            subject: form.subject,
                            message: form.message,
                          }),
                        });
                        if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', subject: '', message: '' }); }
                        else { setStatus('error'); }
                      } catch { setStatus('error'); }
                    }} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-base-600 mb-1.5">Your Name</label>
                          <input
                            type="text"
                            placeholder="Enter your name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-base-50 border border-base-200 rounded-lg text-sm text-base-900 placeholder:text-base-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-base-600 mb-1.5">Your Email</label>
                          <input
                            type="email"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-base-50 border border-base-200 rounded-lg text-sm text-base-900 placeholder:text-base-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-base-600 mb-1.5">Subject</label>
                        <input
                          type="text"
                          placeholder="What's this about?"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-base-50 border border-base-200 rounded-lg text-sm text-base-900 placeholder:text-base-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-base-600 mb-1.5">Message</label>
                        <textarea
                          rows={4}
                          placeholder="Tell me about your project, opportunity, or just say hi!"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-base-50 border border-base-200 rounded-lg text-sm text-base-900 placeholder:text-base-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full py-3 bg-accent text-white rounded-xl text-sm font-semibold hover:bg-accent-dark transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message'}
                        <ArrowUpRight size={14} />
                      </button>
                      {status === 'sent' && (
                        <p className="text-center text-xs text-green-600 font-medium">Message sent! I&apos;ll get back to you soon.</p>
                      )}
                      {status === 'error' && (
                        <p className="text-center text-xs text-red-500 font-medium">Something went wrong. Please try again.</p>
                      )}
                      <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-base-400">
                        <Shield size={12} />
                        Your information is safe with me. I respect your privacy.
                      </div>
                    </form>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.25}>
                <div className="bg-white border border-base-200 rounded-2xl shadow-sm overflow-hidden">
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-7 h-7 rounded-full bg-base-100 flex items-center justify-center text-base-500">
                        <span className="text-xs font-bold">?</span>
                      </div>
                      <h3 className="font-heading text-sm font-bold text-base-950 m-0">Quick Answers</h3>
                    </div>
                    <div className="divide-y divide-base-200">
                      {faqs.map((faq, idx) => (
                        <div key={faq.q}>
                          <button
                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                            className="w-full flex items-center justify-between py-3 text-left cursor-pointer"
                          >
                            <span className="text-xs sm:text-sm text-base-700 font-medium pr-4">{faq.q}</span>
                            <motion.span
                              animate={{ rotate: openFaq === idx ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-base-400 shrink-0"
                            >
                              <ChevronDown size={14} />
                            </motion.span>
                          </button>
                          <AnimatePresence>
                            {openFaq === idx && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <p className="text-xs text-base-500 pb-3 leading-relaxed">{faq.a}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

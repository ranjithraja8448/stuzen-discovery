import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { AppMode } from '../layout/Navbar';

interface ContactViewProps {
  onNavigateMode: (mode: AppMode) => void;
  onStartDiscoveryWithSection: (sectionId?: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onNavigateMode,
  onStartDiscoveryWithSection,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    service: 'Website Development & Portals',
    budget: '₹1,00,000 – ₹2,50,000',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please provide your name and phone number so our team can connect.');
      return;
    }
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'How does the Stuzen 45-Point Discovery Engine work?',
      a: 'Unlike agencies that quote arbitrary figures on phone calls, our Discovery Engine systematically audits all 45 critical technical parameters: architecture, CMS readiness, payment gateways, WhatsApp webhooks, and SEO schemas. This produces a binding commercial blueprint with zero hidden scope surprises.',
    },
    {
      q: 'Why does Stuzen invoice strictly in Pure Indian Rupees (INR ₹)?',
      a: 'We believe in radical financial transparency for domestic and global enterprises. All calculations, milestone contracts, and care retainers are denominated in clean Indian Rupees, eliminating unpredictable FX fluctuations and conversion fees.',
    },
    {
      q: 'What is the standard delivery timeline for an engineering sprint?',
      a: 'Standard website and digital portal projects deploy in 2 to 4 weeks. Custom enterprise software engines typically take 4 to 8 weeks depending on database schema complexity and third-party integrations.',
    },
    {
      q: 'How does Stuzen protect client intellectual property and confidentiality?',
      a: 'All discovery data, proprietary schemas, and production code belong 100% to your enterprise upon final DNS cutover. We execute bilateral Non-Disclosure Agreements (NDAs) prior to sprint kickoff, and all internal records are secured behind encrypted staff access vaults.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#09090B] text-slate-900 dark:text-slate-100 transition-colors selection:bg-blue-600 selection:text-white">
      {/* Contact Hero */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 dark:border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(6,182,212,0.12),transparent)]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50/80 dark:bg-blue-950/60 px-4 py-1.5 text-xs font-mono font-bold text-blue-600 dark:text-cyan-400 backdrop-blur-md mb-6"
          >
            <Sparkles size={14} className="text-blue-500" />
            <span>SOLUTIONS ARCHITECTURE DESK • BENGALURU, INDIA</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.15]"
          >
            Connect With{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Stuzen Engineering.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Direct access to our senior engineering leadership. Discuss architecture, review timelines, or initiate your 45-point discovery blueprint.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid: Details vs Interactive Form */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info & WhatsApp Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 shadow-xl space-y-4">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 inline-block">
                FASTEST RESPONSE TIME
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight">
                Direct WhatsApp Solutions Hotline
              </h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Connect directly with Solutions Lead Ranjith on WhatsApp. Perfect for rapid scoping questions, urgent sprint allocations, or quotation reviews.
              </p>
              <a
                href="https://wa.me/917418572022?text=Hi%20Ranjith%2C%20I%20would%20like%20to%20discuss%20a%20new%20project%20with%20Stuzen%20Technologies."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-emerald-800 shadow hover:bg-emerald-50 active:scale-95 transition-all cursor-pointer"
              >
                <MessageCircle size={18} className="text-emerald-600" />
                <span>Chat on WhatsApp: +91 74185 72022</span>
              </a>
            </div>

            {/* Studio Headquarters & Channels */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] p-8 shadow-sm space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase text-slate-400 block">
                      STUDIO HEADQUARTERS
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                      Bengaluru Tech Corridor, Karnataka, India
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Engineering Hub & Client Architecture Studio
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase text-slate-400 block">
                      ELECTRONIC DISPATCH
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 font-mono">
                      solutions@stuzen.tech
                    </p>
                    <p className="text-[11px] text-slate-500">
                      RFP submissions, commercial contracts & NDA execution
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase text-slate-400 block">
                      RESPONSE GUARANTEE
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                      Under 2 Hours on Indian Business Days
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Monday to Saturday • 9:30 AM to 7:30 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Discovery CTA Box */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 space-y-2">
                <span className="text-[11px] font-bold text-slate-900 dark:text-white block">
                  Prefer an Interactive Architectural Blueprint?
                </span>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Use our 45-point Discovery Engine to configure your requirements step-by-step and download an official proposal PDF.
                </p>
                <button
                  onClick={() => onStartDiscoveryWithSection('s01')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline cursor-pointer pt-1"
                >
                  <span>Launch Discovery Engine →</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] p-8 sm:p-12 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                  Inquiry Dispatched Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Solutions Lead Ranjith R. and our engineering architecture team will review your requirements for <strong>{formData.business || 'your business'}</strong> and respond within 2 hours.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/917418572022?text=${encodeURIComponent(`Hi Ranjith, I just submitted an inquiry on your website: ${formData.name} (${formData.business}). Let's discuss!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs font-bold text-white shadow hover:bg-emerald-500 active:scale-95 transition-all cursor-pointer"
                  >
                    <MessageCircle size={16} />
                    <span>Ping Ranjith on WhatsApp Now</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-5 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                    Request an Architectural Review
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your project details. We will assess technical feasibility and contact you within 2 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Singhania"
                      className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                      COMPANY / BRAND NAME
                    </label>
                    <input
                      type="text"
                      value={formData.business}
                      onChange={e => setFormData({ ...formData, business: e.target.value })}
                      placeholder="e.g. Aura Luxe Aesthetics"
                      className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                      PHONE / WHATSAPP NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                      CORPORATE EMAIL
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. vikram@auraluxe.in"
                      className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                      PRIMARY ENGINEERING PILLAR
                    </label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-[#1a1d26] px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      <option>Website Development & Portals</option>
                      <option>Enterprise Custom Software & SaaS</option>
                      <option>AI Solutions & WhatsApp Automation</option>
                      <option>Full-Stack Turnkey Digital Overhaul</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                      ESTIMATED INVESTMENT (PURE INR ₹)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={e => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-[#1a1d26] px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors font-mono"
                    >
                      <option>₹45,000 – ₹1,00,000</option>
                      <option>₹1,00,000 – ₹2,50,000</option>
                      <option>₹2,50,000 – ₹5,00,000</option>
                      <option>₹5,00,000+ (Enterprise SaaS)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                    PROJECT GOALS & WORKFLOW REQUIREMENTS
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your objectives, current bottlenecks, or target launch deadline..."
                    className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500 active:scale-95 transition-all cursor-pointer"
                >
                  <Send size={16} />
                  <span>Submit Inquiry to Stuzen Solutions Desk</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="py-20 border-t border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-950 dark:text-white">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-bold text-slate-900 dark:text-white cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={16} className="text-blue-500 shrink-0" /> : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe2, 
  Cpu, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Layers, 
  Check, 
  Sparkles,
  MessageCircle,
  IndianRupee,
  Server
} from 'lucide-react';
import { AppMode } from '../layout/Navbar';

interface ServicesViewProps {
  onNavigateMode: (mode: AppMode) => void;
  onStartDiscoveryWithSection: (sectionId?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onNavigateMode,
  onStartDiscoveryWithSection,
}) => {
  const pillars = [
    {
      id: 'pillar-web',
      num: '01',
      title: 'Website Development & Digital Portals',
      subtitle: 'Sub-Second Web Applications & High-Converting Corporate Platforms',
      badge: 'Pillar 01',
      badgeColor: 'text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 border-blue-500/20',
      icon: Globe2,
      description: 'We engineer bespoke, lightning-fast digital storefronts and corporate flagships that captivate high-intent buyers, dominate search engine rankings, and convert cold visitors into qualified enterprise pipeline.',
      techStack: ['React 19', 'TypeScript', 'Tailwind v4', 'Edge CDN', 'Headless CMS', 'Next.js'],
      deliverables: [
        'Production React 19 / TypeScript modular frontend codebase',
        'Sub-second Core Web Vitals (< 0.38s TTFB, 99+ Lighthouse guarantee)',
        'Full responsive testing across 12 mobile viewports & iOS Safari',
        'JSON-LD Structured Schema & Local SEO rank architecture',
        'Hybrid Content Management System (headless or visual editor)',
        'Enterprise SSL, Automated Global Backups & Cloudflare CDN',
      ],
      sla: '⚡ 99/100 Google Lighthouse Performance & <0.38s TTFB',
      pricing: '₹45,000 – ₹1,80,000',
      timeline: '2 – 4 Weeks Delivery Sprint',
      targetSection: 's03',
    },
    {
      id: 'pillar-software',
      num: '02',
      title: 'Enterprise Custom Software & Full-Stack SaaS',
      subtitle: 'Scalable Cloud Architectures, Internal ERPs & Client Portals',
      badge: 'Pillar 02',
      badgeColor: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500/20',
      icon: Cpu,
      description: 'Replace fragmented spreadsheets and legacy off-the-shelf software with tailored web applications engineered around your exact operational workflows, compliance frameworks, and enterprise scaling requirements.',
      techStack: ['Node.js', 'Python / FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      deliverables: [
        'Modular REST & GraphQL API architecture with microservice isolation',
        'Multi-tenant ACID database schema design with automated replication',
        'Granular Role-Based Access Control (RBAC) & Single Sign-On (SSO)',
        'Comprehensive telemetry, audit logs & real-time monitoring',
        'Complete CI/CD deployment pipelines with zero-downtime cutover',
        'Interactive administrative analytics dashboard with exportable reporting',
      ],
      sla: '🔒 ISO/SOC-2 Grade Security Patterns & 99.98% Cloud SLA',
      pricing: '₹1,80,000 – ₹5,50,000+',
      timeline: '4 – 8 Weeks Delivery Sprint',
      targetSection: 's05',
    },
    {
      id: 'pillar-ai',
      num: '03',
      title: 'AI Solutions & Intelligent WhatsApp Automation',
      subtitle: 'Meta Cloud API Workflows, Autonomous Bots & Revenue Pipelines',
      badge: 'Pillar 03',
      badgeColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500/20',
      icon: Bot,
      description: 'Deploy 24/7 intelligent sales and support infrastructure on WhatsApp. We turn India’s dominant messaging platform into your most reliable customer acquisition and client qualification channel.',
      techStack: ['Meta WhatsApp Cloud API', 'OpenAI & Claude LLMs', 'Webhooks', 'Vector RAG', 'Payment Gateways'],
      deliverables: [
        'Official Meta WhatsApp Business Cloud API onboarding & Green-Tick audit',
        'Autonomous conversational AI agent trained strictly on your business data',
        'Dynamic interactive button flows, product catalogues & booking widgets',
        'Direct UPI & Net-Banking payment links (Razorpay / Cashfree integration)',
        'Instant multi-agent inbox & seamless human escalation fallback',
        'Automated CRM synchronization & abandoned cart re-engagement flows',
      ],
      sla: '🤖 Sub-3s Conversational Response & 24/7 Revenue Flow',
      pricing: '₹65,000 – ₹2,50,000+',
      timeline: '2 – 3 Weeks Delivery Sprint',
      targetSection: 's06',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#09090B] text-slate-900 dark:text-slate-100 transition-colors selection:bg-blue-600 selection:text-white">
      {/* Services Hero */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 dark:border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(6,182,212,0.12),transparent)]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50/80 dark:bg-blue-950/60 px-4 py-1.5 text-xs font-mono font-bold text-blue-600 dark:text-cyan-400 backdrop-blur-md mb-6"
          >
            <Sparkles size={14} className="text-blue-500" />
            <span>FULL-LIFECYCLE ENGINEERING SUITE • PURE INR ₹ TRANSPARENCY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.15]"
          >
            The Three Pillars of{' '}
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
            Architectural rigor from initial discovery audit to production scale. We eliminate guesswork with clear sprint deliverables, guaranteed performance benchmarks, and transparent milestone investments.
          </motion.p>
        </div>
      </section>

      {/* 3 Pillars Deep Dive */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              id={pillar.id}
              className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] p-8 sm:p-12 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column: Overview & Deliverables */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${pillar.badgeColor}`}>
                      {pillar.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      SPRINT TIMELINE: {pillar.timeline}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                      {pillar.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-cyan-400 mt-1">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
                      DELIVERABLES SPECIFICATION:
                    </span>
                    <div className="space-y-2">
                      {pillar.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-2">
                    <span className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      CORE ARCHITECTURAL TOOLS:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {pillar.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Investment Card & Action */}
                <div className="lg:col-span-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-slate-500 uppercase">
                        COMMERCIAL INVESTMENT
                      </span>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60">
                        PURE INR ₹
                      </span>
                    </div>

                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-950 dark:text-white">
                      {pillar.pricing}
                    </div>

                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Exact quote generated via our 45-point Discovery Audit. 40% initial deposit, 40% staging approval, 20% DNS cutover.
                    </p>

                    {/* SLA Badge */}
                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#12141a] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-800 dark:text-slate-200">
                      <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">
                        SLA COMMITMENT
                      </div>
                      <div className="font-semibold text-blue-600 dark:text-cyan-400">
                        {pillar.sla}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/10">
                    <button
                      onClick={() => onStartDiscoveryWithSection(pillar.targetSection)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-blue-500 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>Scope This Pillar in Discovery</span>
                      <ArrowRight size={15} />
                    </button>

                    <a
                      href={`https://wa.me/917418572022?text=${encodeURIComponent(`Hi Ranjith, I am interested in Stuzen's ${pillar.title}. Can we discuss the scope?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#12141a] px-5 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
                    >
                      <MessageCircle size={15} className="text-emerald-500" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Global Bottom Banner */}
      <section className="py-16 border-t border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
            Unsure Which Architecture Fits Your Horizon?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Our Solutions Architecture lead Ranjith R. conducts free 15-minute technical discovery consultations to help plan your roadmap.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onStartDiscoveryWithSection('s01')}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow hover:bg-blue-500 active:scale-95 transition-all cursor-pointer"
            >
              <span>Start Interactive Discovery (10 Min)</span>
              <ArrowRight size={15} />
            </button>
            <button
              onClick={() => onNavigateMode('portfolio')}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-6 py-3 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 active:scale-95 transition-all cursor-pointer shadow-xs"
            >
              <span>View Delivered Case Studies</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

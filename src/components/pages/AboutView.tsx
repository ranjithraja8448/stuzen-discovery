import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Users, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  Layers, 
  Award,
  Terminal,
  MessageCircle
} from 'lucide-react';
import { AppMode } from '../layout/Navbar';

interface AboutViewProps {
  onNavigateMode: (mode: AppMode) => void;
  onStartDiscoveryWithSection: (sectionId?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigateMode,
  onStartDiscoveryWithSection,
}) => {
  const [activeStackTab, setActiveStackTab] = useState<'all' | 'frontend' | 'backend' | 'ai' | 'cloud'>('all');

  const operatingCodes = [
    {
      num: '01',
      title: 'Learn Continuously',
      tagline: 'Never settle for yesterday’s paradigms.',
      desc: 'Our architects continuously master modern frameworks, edge runtime compute, and autonomous AI agents. We ensure your business is built on forward-compatible stacks, not legacy dead-ends.',
      icon: Terminal,
      color: 'from-blue-600 to-cyan-500',
    },
    {
      num: '02',
      title: 'Build Rigorously',
      tagline: 'Software as high-precision craft.',
      desc: 'Zero tolerance for slop. We enforce 100% strict TypeScript types, sub-second Core Web Vitals (<0.38s TTFB), automated test suites, and enterprise design systems that outlive standard agency lifespans.',
      icon: Code2,
      color: 'from-cyan-500 to-teal-500',
    },
    {
      num: '03',
      title: 'Innovate Relentlessly',
      tagline: 'Transforming manual friction into profit.',
      desc: 'We integrate autonomous AI workflows and official Meta WhatsApp Cloud API pipelines directly into your operational core. Where others build static brochures, we engineer active revenue engines.',
      icon: Cpu,
      color: 'from-indigo-600 to-blue-500',
    },
    {
      num: '04',
      title: 'Radical Transparency',
      tagline: 'Milestone billing with zero hidden surprises.',
      desc: 'No vague USD conversions, no scope creeping mid-sprint. Every engagement begins with our binding 45-point Discovery Audit, transparent milestone payments, and weekly video walkthroughs.',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  const teamRoster = [
    {
      name: 'Solutions Architecture Guild',
      role: 'Enterprise Solutions Architecture & Systems Engineering',
      expertise: 'Distributed Systems, Cloud Architecture, Discovery Blueprinting',
      location: 'Bengaluru, India',
      quote: 'We don’t just write code; we architect systems that eliminate operational bottlenecks and drive verifiable enterprise growth.',
      badge: 'Architecture Guild',
    },
    {
      name: 'Dev Senior Team',
      role: 'Frontend Systems & UI Motion Guild',
      expertise: 'React 19, Micro-Interactions, Sub-Second Performance, Design Systems',
      location: 'Bengaluru Studio',
      quote: 'Every pixel is placed with intentional hierarchy. Sub-400ms page delivery is our non-negotiable benchmark.',
      badge: 'Frontend Guild',
    },
    {
      name: 'AI Engineering Group',
      role: 'AI Automations & WhatsApp Integration Specialists',
      expertise: 'WhatsApp Cloud API, Autonomous LLM Agents, CRM Webhooks',
      location: 'Bengaluru Studio',
      quote: 'We connect customer intent to backend fulfillment within 3 seconds via conversational AI.',
      badge: 'AI Labs',
    },
  ];

  const techStack = [
    { name: 'React 19', cat: 'frontend', level: 'Core UI Library' },
    { name: 'TypeScript', cat: 'frontend', level: '100% Strict Type Safety' },
    { name: 'Tailwind CSS v4', cat: 'frontend', level: 'Design Token Engine' },
    { name: 'Framer Motion', cat: 'frontend', level: 'Fluid Micro-Interactions' },
    { name: 'Next.js / Vite', cat: 'frontend', level: 'Sub-Second Edge Bundling' },
    { name: 'Node.js & Bun', cat: 'backend', level: 'High-Concurrency Runtime' },
    { name: 'Python / FastAPI', cat: 'backend', level: 'High-Throughput APIs' },
    { name: 'PostgreSQL', cat: 'backend', level: 'Relational ACID Core' },
    { name: 'Redis', cat: 'backend', level: 'In-Memory Caching & Queues' },
    { name: 'WhatsApp Cloud API', cat: 'ai', level: 'Official Meta Direct Partner' },
    { name: 'OpenAI & Claude SDKs', cat: 'ai', level: 'Domain-Trained Copilots' },
    { name: 'LangChain & Vector DBs', cat: 'ai', level: 'Contextual RAG Retrieval' },
    { name: 'AWS & Cloudflare Edge', cat: 'cloud', level: 'Global Low-Latency CDN' },
    { name: 'Docker & Kubernetes', cat: 'cloud', level: 'Zero-Downtime Containerization' },
    { name: 'Vercel Enterprise', cat: 'cloud', level: 'Atomic CI/CD Deployments' },
  ];

  const filteredStack = activeStackTab === 'all' 
    ? techStack 
    : techStack.filter(s => s.cat === activeStackTab);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#09090B] text-slate-900 dark:text-slate-100 transition-colors selection:bg-blue-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 dark:border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(6,182,212,0.12),transparent)]" />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50/80 dark:bg-blue-950/60 px-4 py-1.5 text-xs font-mono font-bold text-blue-600 dark:text-cyan-400 backdrop-blur-md mb-6"
          >
            <Sparkles size={14} className="text-blue-500" />
            <span>THE STUZEN PHILOSOPHY • LEARN. BUILD. INNOVATE.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.15]"
          >
            Engineering Digital Dominance for{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Ambitious Enterprises.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Born in Bengaluru’s high-velocity tech ecosystem, Stuzen Technologies is a premium digital engineering studio. We combine Silicon Valley architectural standards, sub-second edge speeds, and custom AI automations to transform ambitious business goals into production reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => onStartDiscoveryWithSection('s01')}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500 active:scale-95 transition-all cursor-pointer"
            >
              <span>Launch 45-Point Discovery Engine</span>
              <ArrowRight size={16} />
            </button>
            <a
              href="https://wa.me/917418572022?text=Hi%20Stuzen%20Team%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20engineering%20studio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 active:scale-95 transition-all cursor-pointer shadow-xs"
            >
              <MessageCircle size={16} className="text-emerald-500" />
              <span>Direct WhatsApp Hotline</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* The 4 Operating Codes */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
            OUR OPERATING CODE
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-950 dark:text-white">
            Four Pillars That Guide Every Line of Code
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            How we approach client collaboration, engineering rigor, and long-term technical value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {operatingCodes.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] p-8 shadow-xs quiet-lift hover:shadow-xl hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200">
                    CODE {c.num}
                  </span>
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${c.color} text-white shadow-sm`}>
                    <Icon size={18} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {c.title}
                </h3>
                <div className="text-xs font-semibold text-blue-600 dark:text-cyan-400 mt-1 mb-3">
                  {c.tagline}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership & Engineering Studio Spotlight */}
      <section className="py-20 border-t border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
              PEOPLE & ARCHITECTURE
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-950 dark:text-white">
              The Leadership Behind Every Blueprint
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Senior engineering talent directly owning your discovery, architecture, and production delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamRoster.map((member, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                      {member.badge}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-500">
                      <MapPin size={12} className="text-rose-500" />
                      {member.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 mt-0.5 mb-3">
                    {member.role}
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-[11px] font-mono text-slate-600 dark:text-slate-300 mb-4">
                    <span className="font-bold block text-slate-700 dark:text-slate-200 mb-0.5">CORE DOMAIN:</span>
                    {member.expertise}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
                    "{member.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Sprint Ready
                  </span>
                  <button
                    onClick={() => onStartDiscoveryWithSection('s01')}
                    className="text-[11px] font-bold text-blue-600 dark:text-cyan-400 hover:underline cursor-pointer"
                  >
                    Start Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Battle-Tested Tech Stack Universe */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
              TECHNOLOGY ARSENAL
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-950 dark:text-white">
              Battle-Tested Enterprise Stack
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Zero legacy dead-ends. Hand-selected for sub-second execution, strict security, and modular scaling.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 shrink-0">
            {[
              { id: 'all', label: 'All Stack' },
              { id: 'frontend', label: 'Frontend & UI' },
              { id: 'backend', label: 'Backend & APIs' },
              { id: 'ai', label: 'AI & WhatsApp' },
              { id: 'cloud', label: 'Cloud & DevOps' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveStackTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeStackTab === tab.id
                    ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {filteredStack.map((tech, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] shadow-xs hover:border-blue-500/50 hover:-translate-y-0.5 transition-all"
            >
              <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                {tech.name}
              </div>
              <div className="text-[10px] font-mono text-slate-500 mt-1">
                {tech.level}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 border-t border-slate-200 dark:border-white/10 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 inline-block">
            READY TO BUILD AT THE HIGHEST STANDARD?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Let’s Architect Your Next Digital Breakthrough.
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Skip the generic agency pitch deck. Take 5 minutes to complete our interactive 45-point Discovery session and receive an official quotation and architecture blueprint.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onStartDiscoveryWithSection('s01')}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-blue-700 shadow-xl hover:bg-blue-50 active:scale-95 transition-all cursor-pointer"
            >
              <span>Begin Discovery Session</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onNavigateMode('services')}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white/20 active:scale-95 transition-all cursor-pointer"
            >
              <span>Explore The 3 Pillars</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};


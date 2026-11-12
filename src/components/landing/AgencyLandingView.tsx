import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../layout/ThemeContext';
import { 
  Globe2, 
  Cpu, 
  Zap, 
  ArrowRight, 
  Database, 
  ShieldCheck, 
  Sparkles, 
  Code2, 
  CheckCircle2, 
  Layers, 
  Workflow, 
  MessageSquareCode, 
  FileText,
  ChevronRight
} from 'lucide-react';
import { AppMode } from '../layout/Navbar';

interface AgencyLandingViewProps {
  onStartDiscovery: (targetSection?: string) => void;
  onOpenVault: () => void;
  vaultCount: number;
}

export const AgencyLandingView: React.FC<AgencyLandingViewProps> = ({
  onStartDiscovery,
  onOpenVault,
  vaultCount,
}) => {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#09090b] dark:text-slate-100 transition-colors duration-200">
      {/* Architectural Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] -right-40 h-[400px] w-[500px] rounded-full bg-blue-700/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        {/* Top Executive Pill Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-mono font-medium text-blue-600 dark:text-cyan-300 backdrop-blur-md shadow-glow-sm">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>STUZEN EXECUTIVE DISCOVERY ENGINE • ENTERPRISE READY</span>
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          {/* Main Logo Display (Adaptive to Light/Dark Mode) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="p-3.5 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 shadow-xl">
              <img
                src={theme === 'dark' ? '/brand/STUZEN_Logo_White.png' : '/brand/STUZEN_Logo_Transparent.png'}
                alt="STUZEN TECHNOLOGIES"
                className="h-14 sm:h-16 object-contain"
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]"
          >
            Learn. Build. <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">Innovate.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            The premium software & digital engineering studio for high-growth enterprises. We translate ambitious business objectives into bespoke web platforms, custom applications, and automated revenue engines.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => onStartDiscovery('s01')}
              className="inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 active:scale-95 transition-all cursor-pointer group"
            >
              <span>Start Client Requirements Discovery</span>
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenVault}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 px-6 py-4 text-sm font-semibold text-slate-800 dark:text-white backdrop-blur-md hover:bg-slate-100 dark:hover:bg-white/10 active:scale-95 transition-all cursor-pointer shadow-xs"
            >
              <Database size={16} className="text-blue-600 dark:text-cyan-400" />
              <span>Open Internal Lead Vault</span>
              <span className="font-mono text-xs rounded-full bg-blue-500/20 px-2 py-0.5 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                {vaultCount} Records
              </span>
            </button>
          </motion.div>
        </div>

        {/* 3 Pillars Bento Showcase */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
              CORE CAPABILITIES
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              The Three Pillars of Stuzen Engineering
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Architectural rigor from initial discovery audit to production scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: Website Development */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-8 backdrop-blur-xl shadow-md flex flex-col justify-between group hover:border-blue-500/50"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-500 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Globe2 size={24} />
                </div>
                <div className="mt-6">
                  <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase">PILLAR 01</span>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">Website Development</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Ultra-fast, high-converting digital storefronts and corporate flagships built on React 19, Next.js, and modern headless CMS engines. Sub-second load times and flawless mobile responsiveness.
                  </p>
                </div>

                <div className="mt-6 space-y-2 border-t border-slate-100 dark:border-white/5 pt-4">
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span>Headless Commerce & Dynamic CMS</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span>Core Web Vitals 95+ Performance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span>Technical SEO & Conversion Architecture</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={() => onStartDiscovery('s03')}
                  className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                >
                  <span>Explore Website Discovery</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>

            {/* Pillar 2: Custom Software */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-8 backdrop-blur-xl shadow-md flex flex-col justify-between group hover:border-cyan-500/50"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
                  <Cpu size={24} />
                </div>
                <div className="mt-6">
                  <span className="font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase">PILLAR 02</span>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">Custom Software</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Scalable full-stack SaaS platforms, authenticated client portals, internal ERP tooling, and role-based operational dashboards tailored strictly to proprietary workflows.
                  </p>
                </div>

                <div className="mt-6 space-y-2 border-t border-slate-100 dark:border-white/5 pt-4">
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-cyan-500" />
                    <span>Role-Based Access Control (RBAC)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-cyan-500" />
                    <span>Serverless Microservices & PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-cyan-400" />
                    <span>Enterprise Security & Audit Logging</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={() => onStartDiscovery('s05')}
                  className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                >
                  <span>Explore Software Discovery</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>

            {/* Pillar 3: AI & Automation */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-8 backdrop-blur-xl shadow-md flex flex-col justify-between group hover:border-blue-500/50"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Zap size={24} />
                </div>
                <div className="mt-6">
                  <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase">PILLAR 03</span>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">AI & Automation</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Official WhatsApp Cloud API conversational bots, automated CRM pipeline dispatchers, intelligent document parsing, and AI assistants that eliminate manual administrative drag.
                  </p>
                </div>

                <div className="mt-6 space-y-2 border-t border-slate-100 dark:border-white/5 pt-4">
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-blue-500" />
                    <span>WhatsApp Business Platform / Cloud API</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-blue-500" />
                    <span>Real-time Lead-to-Staff Dispatch</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-blue-500" />
                    <span>Custom LLM Knowledge Agents</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={() => onStartDiscovery('s06')}
                  className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                >
                  <span>Explore AI Automation</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Interactive "How We Discover & Build" Workflow */}
        <div className="mt-28 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0d0f14] p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
              STUZEN PROPRIETARY METHODOLOGY
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              How We Discover, Architect & Ship
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              No guesswork. Every project begins with our 45-point discovery blueprint to eliminate scope creep and ensure guaranteed delivery.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#12141a] p-6 shadow-xs">
              <span className="font-mono text-2xl font-bold text-blue-600 dark:text-blue-500">01</span>
              <h4 className="mt-3 font-semibold text-slate-900 dark:text-white">45-Point Discovery Audit</h4>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Structured requirements gathering covering goals, audience, tech stack, WhatsApp automation, and SLA requirements.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#12141a] p-6 shadow-xs">
              <span className="font-mono text-2xl font-bold text-cyan-600 dark:text-cyan-400">02</span>
              <h4 className="mt-3 font-semibold text-slate-900 dark:text-white">Architectural Blueprint</h4>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Wireframe prototypes, database ERD schematics, third-party API contracts, and executive milestone sign-off.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#12141a] p-6 shadow-xs">
              <span className="font-mono text-2xl font-bold text-blue-600 dark:text-blue-400">03</span>
              <h4 className="mt-3 font-semibold text-slate-900 dark:text-white">Agile Sprints & Staging</h4>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Clean, typed React & TypeScript code written to production standards, deployed to private client staging previews.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#12141a] p-6 shadow-xs">
              <span className="font-mono text-2xl font-bold text-emerald-600 dark:text-emerald-400">04</span>
              <h4 className="mt-3 font-semibold text-slate-900 dark:text-white">Production Cutover & Care</h4>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Global edge deployment, automated cloud backups, SSL certification, staff CMS training, and ongoing SLA maintenance.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                Solutions Architecture Team Currently Accepting Discovery Bookings
              </span>
            </div>
            <button
              onClick={() => onStartDiscovery('s01')}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 cursor-pointer shadow-md"
            >
              <span>Launch Discovery Engine</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

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
            className="flex justify-center mb-7"
          >
            <div className="px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 shadow-xl shadow-slate-200/60 dark:shadow-none inline-flex items-center justify-center transition-all duration-300">
              <img
                src={theme === 'dark' ? '/brand/STUZEN_Logo_White.png' : '/brand/STUZEN_Logo_Black.png'}
                alt="STUZEN TECHNOLOGIES"
                className="h-14 sm:h-18 md:h-20 w-auto object-contain max-w-[260px] sm:max-w-[340px] transition-all duration-300"
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

          {/* Hero Visual Mockup: Architectural Discovery Engine in Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-14 relative mx-auto max-w-5xl"
          >
            <div className="relative rounded-2xl border border-slate-300/80 dark:border-white/15 bg-white dark:bg-[#0c0e14] shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-slate-500 dark:text-slate-400 text-[11px] hidden sm:inline">
                    stuzen-discovery-workspace.cloud
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase">
                    3-PANE ARCHITECTURAL ENGINE
                  </span>
                </div>
              </div>

              {/* 3-Pane Preview Graphic */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 text-left text-xs divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/10 bg-slate-50/50 dark:bg-[#0c0e14]">
                {/* Left Mini Stepper */}
                <div className="md:col-span-3 p-4 space-y-2 bg-slate-100/50 dark:bg-white/2 hidden sm:block">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
                    <span>10 SECTIONS</span>
                    <span className="text-blue-600 dark:text-cyan-400 font-bold">100% COMPLETE</span>
                  </div>
                  {[
                    { num: '01', title: 'Client & Business Details', active: false },
                    { num: '02', title: 'Goals & Target Audience', active: false },
                    { num: '03', title: 'Website Type & Pages', active: false },
                    { num: '05', title: '22-Feature Matrix', active: true },
                    { num: '09', title: 'Pure INR Budget & SLA', active: false },
                    { num: '10', title: 'Internal Proposal (A–F)', active: false },
                  ].map(step => (
                    <div
                      key={step.num}
                      className={`flex items-center gap-2 p-1.5 rounded-lg text-[11px] font-mono ${
                        step.active
                          ? 'bg-blue-600 text-white font-bold shadow-xs'
                          : 'text-slate-600 dark:text-slate-400 bg-white/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/5'
                      }`}
                    >
                      <span className={`px-1 py-0.2 rounded text-[10px] ${step.active ? 'bg-white/20' : 'bg-slate-200 dark:bg-white/10'}`}>
                        {step.num}
                      </span>
                      <span className="truncate">{step.title}</span>
                    </div>
                  ))}
                </div>

                {/* Center Mini Canvas */}
                <div className="md:col-span-6 p-5 space-y-3.5 bg-white dark:bg-[#0c0e14]">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-2">
                    <div>
                      <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-cyan-400">
                        SECTION 05 • ACTIVE MATRIX
                      </span>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                        Selected System Modules (17 Active)
                      </h4>
                    </div>
                    <span className="font-mono text-[10px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                      ⚡ Demo Client Active
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: '🛍️', label: 'E-Commerce Storefront', sub: 'Cart & Razorpay' },
                      { icon: '💬', label: 'WhatsApp Cloud API', sub: 'Instant Dispatch' },
                      { icon: '📅', label: 'Doctor Booking Engine', sub: 'Calendar & SMS' },
                      { icon: '🔐', label: 'RBAC Admin Portal', sub: 'Multi-role JWT' },
                    ].map((feat, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl border border-blue-500/30 bg-blue-50/40 dark:bg-blue-950/20 text-left"
                      >
                        <div className="text-sm">{feat.icon}</div>
                        <div className="font-bold text-[11px] text-slate-900 dark:text-white mt-1">
                          {feat.label}
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono">{feat.sub}</div>
                      </div>
                    ))}
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-medium">Auto-Generated Recommendation:</span>
                    <span className="font-mono font-bold text-blue-600 dark:text-cyan-400">
                      React 19 + TypeScript + Edge CDN
                    </span>
                  </div>
                </div>

                {/* Right Mini Live Blueprint */}
                <div className="md:col-span-3 p-4 space-y-3 bg-slate-100/50 dark:bg-white/2">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                    Realtime Scope Analysis
                  </div>

                  <div className="p-3 rounded-xl bg-blue-600 text-white shadow-md">
                    <span className="text-[10px] opacity-80 uppercase block font-mono">ESTIMATED INVESTMENT</span>
                    <span className="text-base font-extrabold font-mono">₹1.5L – ₹3.5 Lakhs</span>
                    <span className="text-[9px] block opacity-90 font-mono mt-0.5">Pure INR • Zero USD</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-400">PAGES:</span>
                      <span className="font-bold text-slate-900 dark:text-white">14 Pages</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-400">VELOCITY:</span>
                      <span className="font-bold text-slate-900 dark:text-white">4–6 Weeks</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-400">TIER:</span>
                      <span className="font-bold text-cyan-600 dark:text-cyan-400">High Enterprise</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onStartDiscovery('s01')}
                    className="w-full py-1.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-[10px] shadow-sm hover:opacity-90 cursor-pointer"
                  >
                    Open Live Interactive Engine →
                  </button>
                </div>
              </div>
            </div>
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
              className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-7 backdrop-blur-xl shadow-md flex flex-col justify-between group hover:border-blue-500/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-500 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Globe2 size={24} />
                  </div>
                  <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/20 uppercase">
                    PILLAR 01
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Website Development</h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Ultra-fast digital storefronts and corporate flagships built on React 19, Next.js, and headless CMS engines with sub-second TTFB.
                  </p>
                </div>

                {/* Visual UI Mockup Card: High-Speed Web Performance */}
                <div className="mt-5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0c0e14] p-3 text-left overflow-hidden shadow-inner">
                  <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/5 pb-2 mb-2 text-[10px] font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="ml-1 text-slate-500 dark:text-slate-400 truncate">app.stuzen.dev</span>
                    </div>
                    <span className="text-emerald-500 font-bold">99/100 CWV</span>
                  </div>

                  {/* Wireframe Hero Visual */}
                  <div className="space-y-2">
                    <div className="h-10 rounded-lg bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-500/10 border border-blue-500/20 flex items-center justify-between px-3">
                      <div className="space-y-1">
                        <div className="h-2 w-16 bg-blue-600 dark:bg-cyan-400 rounded-full" />
                        <div className="h-1.5 w-24 bg-slate-400/40 rounded-full" />
                      </div>
                      <span className="text-[9px] font-mono font-bold text-blue-600 dark:text-cyan-300 bg-white dark:bg-black/40 px-1.5 py-0.5 rounded">
                        0.38s LCP
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 text-[9px] font-mono">
                      <div className="p-1.5 rounded bg-white dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-slate-600 dark:text-slate-300">
                        ⚡ Edge Cloud CDN
                      </div>
                      <div className="p-1.5 rounded bg-white dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-slate-600 dark:text-slate-300">
                        📱 100% Mobile Fluid
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                    <span>Headless Commerce & Dynamic CMS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                    <span>Technical SEO & Conversion Architecture</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/5">
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
              className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-7 backdrop-blur-xl shadow-md flex flex-col justify-between group hover:border-cyan-500/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
                    <Cpu size={24} />
                  </div>
                  <span className="font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20 uppercase">
                    PILLAR 02
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Custom Software</h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Scalable full-stack SaaS platforms, authenticated client portals, internal ERP tooling, and role-based operational dashboards.
                  </p>
                </div>

                {/* Visual UI Mockup Card: SaaS Control Center */}
                <div className="mt-5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0c0e14] p-3 text-left overflow-hidden shadow-inner">
                  <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/5 pb-2 mb-2 text-[10px] font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-cyan-500" />
                      <span className="text-slate-600 dark:text-slate-300 font-bold">Portal Analytics</span>
                    </div>
                    <span className="text-cyan-600 dark:text-cyan-400 font-mono font-bold">RBAC ACTIVE</span>
                  </div>

                  {/* Telemetry Metric Sparkline Visual */}
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between p-2 rounded-lg bg-white dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
                      <div>
                        <div className="text-[9px] font-mono text-slate-400">ARR REVENUE METRICS</div>
                        <div className="text-xs font-mono font-bold text-slate-900 dark:text-white">₹14.8 Lakhs</div>
                      </div>
                      <div className="flex items-end gap-1 h-6">
                        <div className="w-1.5 bg-blue-500/40 rounded-t h-2" />
                        <div className="w-1.5 bg-blue-500/60 rounded-t h-3.5" />
                        <div className="w-1.5 bg-cyan-400 rounded-t h-5" />
                        <div className="w-1.5 bg-cyan-500 rounded-t h-6" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 text-[9px] font-mono">
                      <div className="p-1.5 rounded bg-white dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-slate-600 dark:text-slate-300 truncate">
                        🔐 Role: Super Admin
                      </div>
                      <div className="p-1.5 rounded bg-white dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-slate-600 dark:text-slate-300 truncate">
                        🗄️ PostgreSQL 12ms
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-cyan-500 shrink-0" />
                    <span>Role-Based Access Control (RBAC)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-cyan-500 shrink-0" />
                    <span>Serverless Microservices & API Gateway</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/5">
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
              className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-7 backdrop-blur-xl shadow-md flex flex-col justify-between group hover:border-blue-500/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Zap size={24} />
                  </div>
                  <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/20 uppercase">
                    PILLAR 03
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI & Automation</h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Official WhatsApp Cloud API conversational bots, automated CRM pipeline dispatchers, and AI assistants eliminating administrative drag.
                  </p>
                </div>

                {/* Visual UI Mockup Card: WhatsApp Conversational Automation */}
                <div className="mt-5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0c0e14] p-3 text-left overflow-hidden shadow-inner">
                  <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/5 pb-2 mb-2 text-[10px] font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-slate-700 dark:text-slate-200 font-bold">WhatsApp Cloud API</span>
                    </div>
                    <span className="text-emerald-500 font-bold">VERIFIED ✓</span>
                  </div>

                  {/* Chat Bubbles Mockup */}
                  <div className="space-y-1.5 font-sans">
                    <div className="p-2 rounded-lg bg-white dark:bg-white/10 text-[10px] text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5 max-w-[90%]">
                      💬 Client: <span className="italic">"Need pricing for clinic booking app"</span>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-600/15 border border-emerald-500/30 text-[10px] text-emerald-800 dark:text-emerald-300 ml-auto max-w-[92%]">
                      🤖 Stuzen Bot: <span className="font-semibold">"Proposal PDF sent. Solutions Architect notified in 1.4s ⚡"</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-blue-500 shrink-0" />
                    <span>WhatsApp Cloud API (~₹0.40/chat)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-blue-500 shrink-0" />
                    <span>Real-time Lead-to-Staff Dispatch</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/5">
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

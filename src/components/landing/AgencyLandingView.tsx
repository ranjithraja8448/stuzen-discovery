import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
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
  ChevronRight,
  IndianRupee,
  Calculator,
  Clock,
  Check,
  ShoppingBag,
  Star,
  XCircle,
  TrendingUp,
  MessageCircle
} from 'lucide-react';
import { AppMode } from '../layout/Navbar';

interface AgencyLandingViewProps {
  onStartDiscovery: (targetSection?: string) => void;
  onOpenVault?: () => void;
  onOpenStaffVault?: () => void;
  vaultCount: number;
  onApplyQuickEstimate?: (config: {
    websiteType: string;
    pageCount: number;
    selectedFeatures: string[];
  }) => void;
}

export const AgencyLandingView: React.FC<AgencyLandingViewProps> = ({
  onStartDiscovery,
  onOpenVault,
  onOpenStaffVault,
  vaultCount,
  onApplyQuickEstimate,
}) => {
  const { theme } = useTheme();

  // Suggestion 4: 5-Second Scope & INR Estimator State
  const [calcArchetype, setCalcArchetype] = useState<string>('business');
  const [calcPages, setCalcPages] = useState<number>(10);
  const [calcAddons, setCalcAddons] = useState<string[]>(['payment_gateway', 'whatsapp_cloud_api']);

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
          <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 backdrop-blur-md shadow-lg shadow-cyan-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span>● STUZEN ARCHITECTURAL STUDIO • THE SYSTEM FOR BESPOKE DIGITAL DOMINANCE</span>
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          {/* Main Logo Display with Radiant Cyber Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-3xl bg-white/90 dark:bg-[#0c0e14]/90 backdrop-blur-xl border border-slate-200 dark:border-cyan-500/30 shadow-2xl inline-flex items-center justify-center transition-all duration-300">
              <img
                src={theme === 'dark' ? '/brand/STUZEN_Logo_White.png' : '/brand/STUZEN_Logo_Black.png'}
                alt="STUZEN TECHNOLOGIES"
                className="h-12 sm:h-16 md:h-18 w-auto object-contain max-w-[240px] sm:max-w-[320px] transition-all duration-300"
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.08]"
          >
            Architecting{' '}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-300 via-indigo-400 to-blue-500 animate-text-flow bg-clip-text text-transparent">
              Digital Dominance.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-3 font-mono text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase"
          >
            Learn. Build. Innovate.
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            The premier software & digital engineering studio for high-growth enterprises. We engineer sub-second web platforms, bespoke enterprise SaaS software, and autonomous WhatsApp revenue bots.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto"
          >
            <button
              onClick={() => onStartDiscovery('s01')}
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 px-7 py-4 text-xs sm:text-sm font-bold text-white shadow-xl shadow-blue-500/25 hover:opacity-95 active:scale-[0.98] quiet-press quiet-lift transition-all cursor-pointer group w-full sm:w-auto"
            >
              <span>🚀 Launch 45-Point Discovery Engine</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 duration-200" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('quick-scope-estimator');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 px-6 py-4 text-xs sm:text-sm font-bold text-slate-800 dark:text-white backdrop-blur-md hover:bg-slate-100 dark:hover:bg-white/10 active:scale-[0.98] quiet-press quiet-lift transition-all cursor-pointer shadow-xs w-full sm:w-auto"
            >
              <Calculator size={16} className="text-blue-600 dark:text-cyan-400 group-hover:rotate-6 transition-transform" />
              <span>⚡ 5-Sec Scope Estimator</span>
            </button>
          </motion.div>

          {/* WhatsApp Direct Banner under Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-4 flex items-center justify-center"
          >
            <a
              href="https://wa.me/917418572022?text=Hi%20Stuzen%20Technologies%2C%20I%20am%20interested%20in%20an%20instant%20project%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer quiet-press"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <MessageCircle size={15} />
              <span>WhatsApp Solutions Desk: +91 74185 72022 (Fast Response)</span>
            </a>
          </motion.div>

          {/* Enterprise Performance & Trust Metrics Bar (Clean 3-Pillar Rigor) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto"
          >
            {[
              { val: '45-Point', label: 'Discovery Audit Rigor', sub: 'Zero Scope Creep' },
              { val: '< 0.38s', label: 'Core Web Vitals TTFB', sub: 'Sub-Second Edge Speeds' },
              { val: '99.98%', label: 'Cloud SLA & Uptime', sub: 'Automated Daily Backups' },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 backdrop-blur-md shadow-xs text-center quiet-lift hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 group cursor-default transition-all duration-200"
              >
                <div className="h-0.5 w-4 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full group-hover:w-8 transition-all duration-300 mb-1.5 opacity-60 group-hover:opacity-100" />
                <div className="font-mono text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-cyan-400 group-hover:scale-105 transition-transform duration-200">
                  {stat.val}
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
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

              {/* Mobile-Native Sleek Teaser Card (< md) */}
              <div className="md:hidden p-4 sm:p-5 space-y-3 bg-white dark:bg-[#0c0e14] text-left">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-cyan-400 uppercase">
                      Executive Discovery Engine
                    </span>
                  </div>
                  <span className="font-mono text-[9px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded font-bold">
                    PURE INR
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-md">
                  <span className="text-[10px] opacity-80 uppercase block font-mono">10 Steps • 45 Questions</span>
                  <div className="text-base font-bold font-mono mt-0.5">₹35,000 – ₹3.5+ Lakhs</div>
                  <p className="text-[10px] opacity-90 mt-1">
                    Live dynamic quotation, sitemap, WhatsApp Cloud API & legal PDF agreement
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onStartDiscovery('s01')}
                  className="w-full py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-xs shadow-sm hover:opacity-90 cursor-pointer text-center"
                >
                  Start Client Requirements Audit →
                </button>
              </div>

              {/* Desktop 3-Pane Preview Graphic (>= md) */}
              <div className="hidden md:grid grid-cols-12 gap-0 text-left text-xs divide-x divide-slate-200 dark:divide-white/10 bg-slate-50/50 dark:bg-[#0c0e14]">
                {/* Left Mini Stepper */}
                <div className="col-span-3 p-4 space-y-2 bg-slate-100/50 dark:bg-white/2">
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
                <div className="col-span-6 p-5 space-y-3.5 bg-white dark:bg-[#0c0e14]">
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
                <div className="col-span-3 p-4 space-y-3 bg-slate-100/50 dark:bg-white/2">
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

        {/* Live Infinite Cyber Telemetry Marquee Banner */}
        <div className="mt-16 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden py-3 border-y border-slate-200/80 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.02] backdrop-blur-md">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-mono text-[11px] font-bold tracking-wider text-slate-600 dark:text-slate-400 select-none">
            {[
              '⚡ SUB-0.38S CORE WEB VITALS',
              '🛡️ BINDING LEGAL SLA',
              '🛡️ ZERO SCOPE CREEP GUARANTEE',
              '🤖 WHATSAPP CLOUD API AUTOMATION',
              '🚀 REACT 19 & NEXT.JS APP ROUTER',
              '🔒 SOC-2 COMPLIANT ENCRYPTION',
              '🌐 FASTAPI & POSTGRESQL ACID',
              '📦 45-POINT AUDIT RIGOR',
              '⚡ SUB-0.38S CORE WEB VITALS',
              '🛡️ BINDING LEGAL SLA',
              '🛡️ ZERO SCOPE CREEP GUARANTEE',
              '🤖 WHATSAPP CLOUD API AUTOMATION',
              '🚀 REACT 19 & NEXT.JS APP ROUTER',
              '🔒 SOC-2 COMPLIANT ENCRYPTION',
              '🌐 FASTAPI & POSTGRESQL ACID',
              '📦 45-POINT AUDIT RIGOR',
            ].map((item, idx) => (
              <span key={idx} className="flex items-center gap-3">
                <span className="text-blue-600 dark:text-cyan-400">{item}</span>
                <span className="text-slate-300 dark:text-white/20">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* 3 Pillars Bento Showcase */}
        <div className="mt-20">
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
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-7 backdrop-blur-xl shadow-md flex flex-col justify-between group hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 shimmer-card cursor-pointer"
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
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-7 backdrop-blur-xl shadow-md flex flex-col justify-between group hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 shimmer-card cursor-pointer"
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
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-7 backdrop-blur-xl shadow-md flex flex-col justify-between group hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 shimmer-card cursor-pointer"
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

        {/* ======================================================== */}
        {/* Featured Case Studies Showcase                           */}
        {/* ======================================================== */}
        <div className="mt-28">
          <div className="text-center mb-12">
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
              PROVEN PRODUCTION CASE STUDIES
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Enterprise Systems Architected & Delivered by Stuzen
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Real high-performing client platforms running in production across healthcare, institutional finance, and high-volume e-commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Case Study 1: Aura Luxe */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] p-6 shadow-md hover:shadow-xl hover:border-blue-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20 uppercase">
                    LUXURY HEALTHCARE
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">INDIRANAGAR, BLR</span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                  Aura Luxe Clinical Aesthetics
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Bespoke medical platform with automated doctor appointment calendar, HIPAA-aligned consultation engine, and WhatsApp booking reminders.
                </p>

                <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 space-y-1 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Impact:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">+340% Mobile Bookings</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Core Web Vitals:</span>
                    <span className="font-bold text-slate-900 dark:text-white">0.34s LCP (99/100)</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {['React 19', 'Edge CDN', 'WhatsApp Cloud API', '14 Custom Screens'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-500 italic text-[11px]">"Launched in 28 days flat with zero downtime."</span>
              </div>
            </div>

            {/* Case Study 2: Nexora Capital */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] p-6 shadow-md hover:shadow-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20 uppercase">
                    INSTITUTIONAL FINTECH
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">BKC, MUMBAI</span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                  Nexora Capital Portal
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Institutional multi-tenant investor analytics portal featuring role-based access control, cryptographic session security, and PostgreSQL audit trails.
                </p>

                <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 space-y-1 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Security:</span>
                    <span className="font-bold text-cyan-600 dark:text-cyan-400">SOC2 Audit-Ready RBAC</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Sprint Speed:</span>
                    <span className="font-bold text-slate-900 dark:text-white">4-Week Agile Cutover</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {['Next.js 15', 'PostgreSQL', 'Multi-tenant Auth', 'Tailwind 4'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-500 italic text-[11px]">"ERD database blueprint made compliance sign-off effortless."</span>
              </div>
            </div>

            {/* Case Study 3: UrbanKicks D2C */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] p-6 shadow-md hover:shadow-xl hover:border-blue-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/20 uppercase">
                    HIGH-VOLUME E-COMMERCE
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">PAN-INDIA SCALE</span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                  UrbanKicks D2C Flagship
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Headless e-commerce storefront with instantaneous cart drawer, Razorpay webhooks, and automated WhatsApp abandoned checkout recovery.
                </p>

                <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 space-y-1 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Scale:</span>
                    <span className="font-bold text-blue-600 dark:text-cyan-400">₹1.8 Cr GMV Run-Rate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Checkout Time:</span>
                    <span className="font-bold text-slate-900 dark:text-white">&lt; 1.2s Fast Pay</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {['Headless React', 'Razorpay Webhooks', 'Cloudflare Edge', 'SEO 100/100'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-500 italic text-[11px]">"Sub-second speeds boosted our conversions by 42%."</span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* Suggestion 4: Interactive 5-Second Scope & INR Estimator  */}
        {/* ======================================================== */}
        {(() => {
          const ARCHETYPES = [
            { id: 'business', label: 'Corporate Website', basePrice: 35000, baseWeeks: 3, desc: 'Brand flagship, service details & high-converting lead forms', defaultFeatures: ['contact_form', 'click_to_call', 'whatsapp_button', 'lead_magnet'] },
            { id: 'ecommerce', label: 'E-Commerce & D2C', basePrice: 65000, baseWeeks: 4, desc: 'Product catalog, shopping cart, checkout & payment engine', defaultFeatures: ['contact_form', 'click_to_call', 'whatsapp_button', 'search_autocomplete', 'lead_magnet'] },
            { id: 'web_application', label: 'Custom Web App / Portal', basePrice: 95000, baseWeeks: 6, desc: 'Dynamic database, client dashboard & multi-role permissions', defaultFeatures: ['contact_form', 'customer_login', 'interactive_calculator', 'role_based_access'] },
            { id: 'custom_saas', label: 'Enterprise SaaS MVP', basePrice: 165000, baseWeeks: 8, desc: 'Scalable multi-tenant architecture with automated cloud workflows', defaultFeatures: ['contact_form', 'customer_login', 'role_based_access', 'audit_logging', 'ai_chatbot'] },
          ];

          const PAGE_TIERS = [
            { count: 5, label: '1–5 Pages', sub: 'Starter Showcase', addPrice: 0, addWeeks: 0 },
            { count: 10, label: '6–12 Pages', sub: 'Standard Growth', addPrice: 15000, addWeeks: 1 },
            { count: 18, label: '13–20 Pages', sub: 'Comprehensive Manifest', addPrice: 35000, addWeeks: 2 },
            { count: 28, label: '20+ Pages', sub: 'Enterprise Multi-portal', addPrice: 60000, addWeeks: 3 },
          ];

          const ADDON_MODULES = [
            { id: 'payment_gateway', label: 'Razorpay / Cashfree Gateway', price: 15000, tag: 'Payments' },
            { id: 'whatsapp_cloud_api', label: 'WhatsApp Cloud API Bot', price: 20000, tag: 'Automation' },
            { id: 'customer_login', label: 'Client Portal & RBAC Auth', price: 25000, tag: 'Security' },
            { id: 'headless_cms', label: 'Dynamic Headless CMS & Blog', price: 18000, tag: 'Content' },
            { id: 'seo_analytics', label: 'Technical SEO Sprint & GA4', price: 12000, tag: 'Growth' },
          ];

          const selectedArch = ARCHETYPES.find(a => a.id === calcArchetype) || ARCHETYPES[0];
          const selectedPage = PAGE_TIERS.find(p => p.count === calcPages) || PAGE_TIERS[1];
          const addonsCost = calcAddons.reduce((sum, id) => {
            const item = ADDON_MODULES.find(m => m.id === id);
            return sum + (item ? item.price : 0);
          }, 0);

          const minEstimate = selectedArch.basePrice + selectedPage.addPrice + addonsCost;
          const maxEstimate = Math.round(minEstimate * 1.32);
          const minWeeks = selectedArch.baseWeeks + selectedPage.addWeeks;
          const maxWeeks = minWeeks + 2;

          const toggleAddon = (id: string) => {
            setCalcAddons(prev =>
              prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
            );
          };

          const handleApplyEstimate = () => {
            try {
              confetti({
                particleCount: 70,
                spread: 60,
                origin: { y: 0.7 },
                colors: ['#2563eb', '#06b6d4', '#10b981', '#3b82f6', '#ffffff'],
              });
            } catch (e) {
              // ignore
            }
            const allFeatures = Array.from(new Set([...selectedArch.defaultFeatures, ...calcAddons]));
            if (onApplyQuickEstimate) {
              onApplyQuickEstimate({
                websiteType: calcArchetype,
                pageCount: calcPages,
                selectedFeatures: allFeatures,
              });
            } else {
              onStartDiscovery('s03');
            }
          };

          return (
            <div id="quick-scope-estimator" className="mt-20 sm:mt-24 rounded-3xl border border-blue-500/30 bg-gradient-to-b from-white to-slate-50 dark:from-[#0d0f15] dark:to-[#07090d] p-4 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              {/* Architectural accent glow */}
              <div className="absolute top-0 right-0 h-64 w-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
                    <Calculator size={13} />
                    <span>5-SECOND SCOPE & INR ESTIMATOR</span>
                  </div>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    Instant Architectural Budget Calculator
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Select your platform archetype, page scale, and integrations to calculate an immediate Pure INR investment blueprint.
                  </p>
                </div>

                <span className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400 border border-blue-500/20 shrink-0">
                  INSTANT ESTIMATE (₹)
                </span>
              </div>

              {/* Calculator Steps Container */}
              <div className="mt-8 space-y-8">
                {/* Step 1: Platform Archetype */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Step 1 • Select Platform Archetype
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {ARCHETYPES.map(arch => {
                      const isSelected = calcArchetype === arch.id;
                      return (
                        <button
                          key={arch.id}
                          type="button"
                          onClick={() => setCalcArchetype(arch.id)}
                          className={`text-left rounded-2xl p-4 transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                            isSelected
                              ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 scale-[1.01]'
                              : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-blue-400/50 text-slate-900 dark:text-slate-100'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                                {arch.label}
                              </span>
                              {isSelected && <Check size={14} strokeWidth={3} className="text-white" />}
                            </div>
                            <p className={`text-[11px] leading-relaxed line-clamp-2 ${isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                              {arch.desc}
                            </p>
                          </div>
                          <div className="mt-3 pt-2 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono">
                            <span className={isSelected ? 'text-blue-200' : 'text-slate-400'}>From</span>
                            <span className={`font-bold ${isSelected ? 'text-white' : 'text-blue-600 dark:text-cyan-400'}`}>
                              ₹{arch.basePrice.toLocaleString('en-IN')}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Page Scale */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Step 2 • Choose Page Scale & Screen Volume
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {PAGE_TIERS.map(pt => {
                      const isSelected = calcPages === pt.count;
                      return (
                        <button
                          key={pt.count}
                          type="button"
                          onClick={() => setCalcPages(pt.count)}
                          className={`rounded-xl p-3 text-center transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25'
                              : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-blue-400/50 text-slate-800 dark:text-slate-200'
                          }`}
                        >
                          <div className="font-bold text-xs">{pt.label}</div>
                          <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                            {pt.sub}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Key Integration Modules */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Step 3 • Add Strategic Architectural Modules
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {ADDON_MODULES.map(mod => {
                      const isChecked = calcAddons.includes(mod.id);
                      return (
                        <button
                          key={mod.id}
                          type="button"
                          onClick={() => toggleAddon(mod.id)}
                          className={`flex items-center justify-between p-3 rounded-xl border text-left quiet-lift quiet-press transition-all cursor-pointer ${
                            isChecked
                              ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-500 text-blue-900 dark:text-cyan-200 shadow-sm shadow-blue-500/10'
                              : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                              isChecked
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : 'border-slate-300 dark:border-white/20'
                            }`}>
                              {isChecked && <Check size={11} strokeWidth={3} />}
                            </div>
                            <div className="min-w-0">
                              <span className="text-xs font-semibold block truncate">{mod.label}</span>
                              <span className="text-[10px] font-mono text-slate-400 block">{mod.tag}</span>
                            </div>
                          </div>
                          <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 shrink-0 ml-2">
                            +₹{mod.price.toLocaleString('en-IN')}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Calculation Summary Box */}
                <div className="rounded-2xl border border-blue-500/30 bg-blue-600/5 dark:bg-blue-950/30 p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all">
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest block">
                      DYNAMIC CALIBRATION ESTIMATE
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span key={`${minEstimate}-${maxEstimate}`} className="price-pulse inline-block text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono">
                        ₹{minEstimate.toLocaleString('en-IN')} – ₹{maxEstimate.toLocaleString('en-IN')}
                      </span>
                      <span className="font-mono text-xs text-slate-500">(Excl. GST)</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-300 pt-1">
                      <span className="flex items-center gap-1 font-mono">
                        <Clock size={13} className="text-blue-500" />
                        Sprint Velocity: <strong>{minWeeks}–{maxWeeks} Weeks</strong>
                      </span>
                      <span className="text-slate-400 hidden sm:inline">•</span>
                      <span className="text-slate-500">
                        Milestones: 40% Deposit / 40% Staging / 20% DNS Launch
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleApplyEstimate}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 text-xs font-bold text-white shadow-lg shadow-blue-500/30 hover:from-blue-500 hover:to-cyan-500 active:scale-[0.98] quiet-press transition-all cursor-pointer group shrink-0"
                  >
                    <span>Apply to 45-Point Discovery Portal</span>
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1 duration-200" />
                  </button>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ======================================================== */}
        {/* Why Stuzen: Competitive Advantage Comparison Matrix       */}
        {/* ======================================================== */}
        <div className="mt-28">
          <div className="text-center mb-12">
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
              THE STUZEN ADVANTAGE
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Why Category Leaders Choose Stuzen Over Traditional Agencies
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Eliminate scope creep, inflated vendor markups, and delayed deadlines with our structured discovery methodology.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0d0f14] shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/5">
                    <th className="p-4 sm:p-5 font-mono uppercase text-slate-400">Engineering Dimension</th>
                    <th className="p-4 sm:p-5 font-bold text-blue-600 dark:text-cyan-400 bg-blue-500/10">STUZEN TECHNOLOGIES</th>
                    <th className="p-4 sm:p-5 font-medium text-slate-500">Traditional Big Agencies</th>
                    <th className="p-4 sm:p-5 font-medium text-slate-500">Freelancer Marketplace</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  {[
                    {
                      dim: 'Requirements Audit',
                      stuzen: '45-Point Structured Discovery Blueprint with Instant Sign-Off PDF',
                      trad: 'Vague meetings & 30-page bloated Word docs',
                      free: 'Informal verbal calls / Guesswork',
                    },
                    {
                      dim: 'Commercial Quotation',
                      stuzen: 'Transparent Milestone Structure (40% Deposit / 40% Staging / 20% Launch)',
                      trad: 'Heavy markups, hidden licensing fees & scope renegotiation',
                      free: 'Low initial bids, frequent budget escalation mid-project',
                    },
                    {
                      dim: 'Velocity & Delivery',
                      stuzen: 'Guaranteed 3–5 Week Rapid Sprints on Staging Previews',
                      trad: '3–6 Months slow waterfall release cycles',
                      free: 'Unpredictable delays & ghosting risks',
                    },
                    {
                      dim: 'Codebase Quality',
                      stuzen: 'Production React 19, TypeScript, Edge CDN & 0.38s Core Web Vitals',
                      trad: 'Heavy bloated legacy WordPress themes & plugins',
                      free: 'Spaghetti code, unmaintainable dependencies',
                    },
                    {
                      dim: 'Post-Launch Care & SLA',
                      stuzen: '99.98% Edge SLA, Automated Backups & Direct WhatsApp Support Desk',
                      trad: 'Expensive mandatory retainer contracts (₹50k+/mo)',
                      free: 'Zero warranty post-handover',
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-white/2 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white">
                        {row.dim}
                      </td>
                      <td className="p-4 sm:p-5 font-semibold text-blue-700 dark:text-cyan-300 bg-blue-500/5 flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{row.stuzen}</span>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-400">
                        {row.trad}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-400">
                        {row.free}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* Enterprise Client Testimonials                           */}
        {/* ======================================================== */}
        <div className="mt-28">
          <div className="text-center mb-12">
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
              EXECUTIVE TESTIMONIALS
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Endorsed by Founders & Engineering Directors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Stuzen's 45-point discovery prevented 3 months of scope creep. We launched Aura Luxe clinic's platform in 28 days flat with zero downtime.",
                author: "Dr. Vikram Malhotra",
                role: "Founder & Clinical Director",
                company: "Aura Luxe Healthcare, Indiranagar",
                stars: 5,
              },
              {
                quote: "The pure INR milestone transparency and automated WhatsApp lead dispatch helped us scale our institutional pipeline effortlessly.",
                author: "Arjun Singhania",
                role: "Managing Director",
                company: "Nexora Capital, Mumbai",
                stars: 5,
              },
              {
                quote: "World-class Silicon Valley aesthetics and sub-second edge speeds. Their headless React storefront boosted our checkout conversions by 42%.",
                author: "Priya Sharma",
                role: "Head of Digital Growth",
                company: "UrbanKicks D2C, Bengaluru",
                stars: 5,
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] p-6 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                  <div className="font-bold text-xs text-slate-900 dark:text-white">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {t.role} • {t.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* Direct WhatsApp Instant Consultation Banner              */}
        {/* ======================================================== */}
        <div className="mt-28 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 text-white inline-block">
                DIRECT SOLUTIONS HOTLINE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Need an Instant Architectural Consultation?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Connect directly with Stuzen Solutions Architecture Desk on WhatsApp. Discuss your project scope, receive quotation blueprints, or schedule a 15-minute technical review.
              </p>
            </div>

            <a
              href="https://wa.me/917418572022?text=Hi%20Stuzen%20Technologies%2C%20I%20am%20interested%20in%20starting%20a%20project%20discovery%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-white px-7 py-4 text-xs sm:text-sm font-bold text-emerald-800 shadow-xl hover:bg-emerald-50 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <MessageCircle size={18} className="text-emerald-600" />
              <span>Chat on WhatsApp: +91 74185 72022</span>
            </a>
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
            <div className="flex flex-wrap items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                Solutions Architecture Team Currently Accepting Discovery Bookings
              </span>
              {onOpenStaffVault && (
                <button
                  type="button"
                  onClick={onOpenStaffVault}
                  className="text-[11px] font-mono text-slate-400 hover:text-amber-500 transition-colors cursor-pointer"
                >
                  • Staff Vault Access 🔒
                </button>
              )}
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

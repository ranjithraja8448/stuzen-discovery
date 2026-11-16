import React, { useState } from 'react';
import { 
  Globe, 
  Cpu, 
  Bot, 
  MessageSquare, 
  Layers, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Send,
  Sparkles,
  ShieldCheck,
  Target,
  Layout,
  Code2,
  TrendingUp,
  Compass,
  Zap,
  Activity,
  Terminal,
  Server,
  Database,
  ExternalLink,
  Smartphone
} from 'lucide-react';

interface CorporateHomeViewProps {
  onOpenDiscovery: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const CorporateHomeView: React.FC<CorporateHomeViewProps> = ({
  onOpenDiscovery,
  onNavigateSection,
}) => {
  // Hero interactive preview tab state
  const [activeHeroTab, setActiveHeroTab] = useState<'web' | 'software' | 'whatsapp'>('web');

  // Quick contact form state
  const [formState, setFormState] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: 'Website Development',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim()) return;
    setFormSubmitted(true);
  };

  const services = [
    {
      title: 'Website Development',
      description:
        'Modern, responsive and user-friendly websites designed to present your business professionally and work smoothly across mobile, tablet and desktop.',
      icon: Globe,
      tags: ['Next.js / React 19', 'Responsive Mobile-First', 'Sub-Second Speeds', 'SEO Optimized'],
      highlight: false,
    },
    {
      title: 'Custom Software Development',
      description:
        'Business-focused software built around your workflow, helping simplify operations, organize information and improve productivity.',
      icon: Cpu,
      tags: ['Workflow Automation', 'PostgreSQL / Cloud DB', 'Custom Dashboards', 'REST / GraphQL APIs'],
      highlight: false,
    },
    {
      title: 'AI Automation',
      description:
        'Practical AI-powered workflows that reduce repetitive tasks, support faster responses and help teams work more efficiently.',
      icon: Bot,
      tags: ['Smart Task Routing', 'Document Processing', 'Automated Triage', 'Productivity Boost'],
      highlight: false,
    },
    {
      title: 'WhatsApp Automation',
      description:
        'Automated WhatsApp communication for customer enquiries, instant replies, lead follow-ups, notifications and business messaging workflows.',
      icon: MessageSquare,
      tags: ['WhatsApp Cloud API', 'Instant Lead Replies', 'Order Updates', '24/7 Customer Flow'],
      highlight: true,
    },
    {
      title: 'Web Application Development',
      description:
        'Feature-rich web applications with intuitive frontends, structured backends and database integration to support your requirements.',
      icon: Layers,
      tags: ['Role-Based Access (RBAC)', 'Cloud Infrastructure', 'Interactive Frontends', 'Secure Data Storage'],
      highlight: false,
    },
    {
      title: 'Business Digital Solutions',
      description:
        'Connected digital tools and tailored technology solutions that help streamline day-to-day business activities.',
      icon: Briefcase,
      tags: ['Tool Integration', 'CRM / ERP Connections', 'Process Optimization', 'Scalable Architecture'],
      highlight: false,
    },
  ];

  const whatsappFeatures = [
    'Automated welcome and enquiry replies',
    'Customer follow-up message workflows',
    'Appointment and order notifications',
    'Lead capture and enquiry organization',
    'Frequently asked question responses',
    'Business updates and approved message campaigns',
  ];

  const whyChooseUsPillars = [
    {
      title: 'Business-focused',
      description: 'Solutions shaped around your actual requirements.',
      icon: Target,
      highlight: 'Tailored Scope',
    },
    {
      title: 'Clean user experience',
      description: 'Simple, clear and responsive interfaces.',
      icon: Layout,
      highlight: 'Mobile-Optimized',
    },
    {
      title: 'Thoughtful development',
      description: 'Organized frontend, backend and database implementation.',
      icon: Code2,
      highlight: 'Modern Tech Stack',
    },
    {
      title: 'Practical automation',
      description: 'Technology that helps reduce repetitive work.',
      icon: Zap,
      highlight: 'Hours Saved Weekly',
    },
    {
      title: 'Scalable approach',
      description: 'Solutions planned to support future improvements.',
      icon: TrendingUp,
      highlight: 'Long-term Agility',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We understand your business, goals and project requirements.',
      deliverable: 'Requirement Audit & Scope Alignment',
    },
    {
      number: '02',
      title: 'Plan',
      description: 'We define the scope, key features, structure and development approach.',
      deliverable: 'Architecture Blueprint & Roadmap',
    },
    {
      number: '03',
      title: 'Design',
      description: 'We create a clear and user-friendly experience for your audience.',
      deliverable: 'Wireframes & Interactive UI Design',
    },
    {
      number: '04',
      title: 'Develop',
      description: 'We build and integrate the required frontend, backend and services.',
      deliverable: 'Clean Code & Full API Integration',
    },
    {
      number: '05',
      title: 'Test & Deliver',
      description: 'We review functionality, resolve issues and prepare the solution for launch.',
      deliverable: 'Quality Assurance & Production Launch',
    },
  ];

  return (
    <div className="bg-white dark:bg-[#09090b] text-slate-900 dark:text-slate-100 transition-colors">
      {/* ======================================================== */}
      {/* 01. HOME HERO                                            */}
      {/* ======================================================== */}
      <section 
        id="hero" 
        className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.18),rgba(9,9,11,0))] border-b border-slate-200/80 dark:border-white/10 overflow-hidden"
      >
        <div className="mx-auto max-w-[1440px] w-full px-4 sm:px-8 lg:px-12 text-center relative z-10">
          
          {/* Subtle Top Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 dark:border-blue-500/30 bg-blue-50/80 dark:bg-blue-950/40 px-4 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 mb-6 sm:mb-8 backdrop-blur-sm shadow-xs">
            <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            <span>Digital Solutions for Modern Businesses</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] max-w-5xl mx-auto">
            Smart Digital Solutions for a{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Growing Business.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Stuzen Technologies helps businesses build a stronger digital presence through modern websites, custom software, AI-powered automation and connected business solutions. We focus on clear design, reliable development and practical technology that supports your goals.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto">
            <button
              type="button"
              onClick={onOpenDiscovery}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              onClick={() => handleScrollTo('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#12141a] hover:bg-slate-50 dark:hover:bg-white/5 text-slate-800 dark:text-slate-200 px-6 py-3.5 text-sm font-semibold shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>Explore Our Services</span>
            </button>
          </div>

          {/* Direct WhatsApp Quick Consultation Link */}
          <div className="mt-5 text-center">
            <a
              href="https://wa.me/917418672022?text=Hi%20Stuzen%20Technologies%2C%20I%20am%20interested%20in%20discussing%20a%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors py-1 px-3 rounded-full bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>WhatsApp Solutions Desk: <strong>+91 74186 72022</strong> (Instant Response)</span>
            </a>
          </div>

          {/* Key Telemetry Stat Highlights */}
          <div className="mt-12 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-[1400px] mx-auto text-left">
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-[#111318]/90 backdrop-blur-sm shadow-xs hover:border-blue-400/50 hover:shadow-md transition-all">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Activity size={16} />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Performance</span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                &lt; 0.38s
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                Core Web Vitals TTFB
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-[#111318]/90 backdrop-blur-sm shadow-xs hover:border-blue-400/50 hover:shadow-md transition-all">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <Server size={16} />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Reliability</span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                99.98%
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                Cloud SLA & Uptime
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-[#111318]/90 backdrop-blur-sm shadow-xs hover:border-blue-400/50 hover:shadow-md transition-all">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                <ShieldCheck size={16} />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Discovery</span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                10-Section
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                Structured Scope Audit
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-[#111318]/90 backdrop-blur-sm shadow-xs hover:border-blue-400/50 hover:shadow-md transition-all">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                <MessageSquare size={16} />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Automation</span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                24/7 Flow
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                WhatsApp Business Replies
              </p>
            </div>
          </div>

          {/* ======================================================== */}
          {/* HERO PRODUCT ARCHITECTURE SHOWCASE (Interactive Window)   */}
          {/* ======================================================== */}
          <div className="mt-14 sm:mt-16 text-left w-full max-w-[1400px] mx-auto">
            <div className="rounded-3xl border border-slate-300/80 dark:border-white/15 bg-white dark:bg-[#101218] shadow-2xl overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-slate-500 dark:text-slate-400 text-xs font-mono hidden sm:inline">
                    stuzen-platform.cloud/architecture
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-slate-200/60 dark:bg-white/10 p-0.5 rounded-lg text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setActiveHeroTab('web')}
                    className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                      activeHeroTab === 'web'
                        ? 'bg-white dark:bg-[#1a1c24] text-blue-600 dark:text-blue-400 font-semibold shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                    }`}
                  >
                    Web Platform
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveHeroTab('software')}
                    className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                      activeHeroTab === 'software'
                        ? 'bg-white dark:bg-[#1a1c24] text-blue-600 dark:text-blue-400 font-semibold shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                    }`}
                  >
                    Custom Software
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveHeroTab('whatsapp')}
                    className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                      activeHeroTab === 'whatsapp'
                        ? 'bg-white dark:bg-[#1a1c24] text-emerald-600 dark:text-emerald-400 font-semibold shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                    }`}
                  >
                    WhatsApp Engine
                  </button>
                </div>
              </div>

              {/* Window Body: Tab Content */}
              <div className="p-5 sm:p-8">
                {/* TAB 1: MODERN WEB ARCHITECTURE */}
                {activeHeroTab === 'web' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-blue-600" />
                          <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                            Architecture Module 01
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                          Modern Responsive Corporate Web Experience
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                          99/100 Lighthouse
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                          Next.js 15 / React 19
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/5">
                        <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono">
                          Frontend UI Tier
                        </div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white mt-1">
                          Tailwind CSS & Clean Typography
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                          Pixel-perfect desktop and mobile ergonomics with instant page loads and zero layout shift.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/5">
                        <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono">
                          Edge Delivery
                        </div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white mt-1">
                          Global CDN & SSL Acceleration
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                          Serverless edge endpoints ensuring your visitors experience sub-second responses everywhere.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/5">
                        <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono">
                          Conversion Systems
                        </div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white mt-1">
                          Connected Enquiries & CRM
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                          Forms route immediately to your email and WhatsApp desk so no prospective lead is delayed.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <span className="text-slate-700 dark:text-slate-300">
                        Interested in a fast, modern website built for your brand?
                      </span>
                      <button
                        type="button"
                        onClick={onOpenDiscovery}
                        className="inline-flex items-center gap-1.5 font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 cursor-pointer shrink-0"
                      >
                        <span>Start Discovery Session</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                )}

                {/* TAB 2: CUSTOM SOFTWARE & WORKFLOW */}
                {activeHeroTab === 'software' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-indigo-600" />
                          <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                            Architecture Module 02
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                          Custom Workflow Pipeline & Business Software
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                          PostgreSQL / Node.js
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300">
                          REST / Webhooks
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 text-left">
                        <div className="font-mono text-[10px] text-blue-600 dark:text-blue-400 font-bold">STAGE 01</div>
                        <div className="font-bold text-slate-900 dark:text-white mt-0.5">Data Intake</div>
                        <p className="text-[11px] text-slate-500 mt-1">Inquiries, forms, portals & customer inputs</p>
                      </div>
                      <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 text-left">
                        <div className="font-mono text-[10px] text-indigo-600 dark:text-indigo-400 font-bold">STAGE 02</div>
                        <div className="font-bold text-slate-900 dark:text-white mt-0.5">Business Logic</div>
                        <p className="text-[11px] text-slate-500 mt-1">Validation, calculations & structured approval</p>
                      </div>
                      <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 text-left">
                        <div className="font-mono text-[10px] text-cyan-600 dark:text-cyan-400 font-bold">STAGE 03</div>
                        <div className="font-bold text-slate-900 dark:text-white mt-0.5">Database Sync</div>
                        <p className="text-[11px] text-slate-500 mt-1">Secure structured persistence & backups</p>
                      </div>
                      <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 text-left">
                        <div className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">STAGE 04</div>
                        <div className="font-bold text-slate-900 dark:text-white mt-0.5">Admin Dispatch</div>
                        <p className="text-[11px] text-slate-500 mt-1">Notifications, exports, PDF & analytics</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-between text-xs">
                      <span className="text-slate-600 dark:text-slate-400">
                        Tailored specifically around how your company operates.
                      </span>
                      <button
                        type="button"
                        onClick={onOpenDiscovery}
                        className="inline-flex items-center gap-1.5 font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 cursor-pointer"
                      >
                        <span>Discuss Software Scope</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                )}

                {/* TAB 3: WHATSAPP AUTOMATION ENGINE */}
                {activeHeroTab === 'whatsapp' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                          <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                            Architecture Module 03
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                          Automated WhatsApp Customer Communication
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                          Instant Response (1.2s)
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300">
                          Cloud API
                        </span>
                      </div>
                    </div>

                    {/* Chat Simulation */}
                    <div className="rounded-2xl border border-emerald-200/80 dark:border-emerald-900/40 bg-emerald-50/30 dark:bg-[#0c1613] p-4 sm:p-5 space-y-3 font-sans text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-emerald-200/50 dark:border-white/5 text-[11px] text-slate-500 dark:text-slate-400">
                        <span className="font-mono">LIVE CHAT SIMULATION</span>
                        <span>Stuzen WhatsApp Engine</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white dark:bg-[#151a22] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 max-w-[85%] shadow-xs">
                        "Hi Stuzen, we need a modern website and automated WhatsApp follow-ups for our new clinic."
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-600 text-white ml-auto max-w-[88%] shadow-md space-y-2">
                        <p>
                          "Hello! Thank you for reaching out to Stuzen Technologies. 🚀 We build custom healthcare websites with instant appointment workflows and WhatsApp confirmations."
                        </p>
                        <div className="pt-1 flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-emerald-700/80 text-[10px] font-semibold">
                            ✓ Instant Scope Estimator Sent
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-700/80 text-[10px] font-semibold">
                            ✓ Representative Notified
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <span className="text-slate-700 dark:text-slate-300">
                        Ready to connect WhatsApp automation directly to your business workflow?
                      </span>
                      <a
                        href="https://wa.me/917418672022?text=Hi%20Stuzen%20Technologies%2C%20I%20would%20like%20to%20learn%20more%20about%20WhatsApp%20Automation."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-400 hover:underline shrink-0"
                      >
                        <span>Chat on WhatsApp (+91 74186 72022)</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 02. ABOUT US & OUR APPROACH                              */}
      {/* ======================================================== */}
      <section id="about" className="py-20 sm:py-28 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50/80 dark:bg-blue-950/40 px-3.5 py-1 text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
              <span>About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Thoughtful Design Meets Dependable Technology.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Stuzen Technologies is an IT solutions company delivering website development, custom software, AI automation and digital services for businesses. We bring thoughtful design and dependable technology together to create solutions that are easy to use, efficient to manage and ready to grow with your business.
            </p>

            <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold">
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200">
                Tailored Digital Strategy
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200">
                Production-Grade Engineering
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200">
                Continuous Reliability
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#12141a] p-7 sm:p-9 shadow-sm space-y-6">
              <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400">
                <Compass size={22} />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Approach</h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                We begin by understanding your requirements, then plan, design, develop and refine the solution around your business needs. Our focus is on useful features, clean user experiences, structured development and ongoing support where required.
              </p>

              {/* Visual Approach Stages */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                  <div className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400">01 • DISCOVERY</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">Requirement First</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Understanding goals & user needs</p>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                  <div className="text-[11px] font-mono font-bold text-indigo-600 dark:text-indigo-400">02 • PLANNING</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">Structured Scope</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Transparent feature definitions</p>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                  <div className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400">03 • DEVELOPMENT</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">Thoughtful Build</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Clean architecture & tests</p>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                  <div className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">04 • DELIVERY</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">Ongoing Support</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Reliable launch & maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 03. OUR SERVICES (Clean Elevated 6-Card Bento Grid)      */}
      {/* ======================================================== */}
      <section id="services" className="py-20 sm:py-28 bg-slate-50/80 dark:bg-[#0c0e14] border-y border-slate-200/80 dark:border-white/10">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50/80 dark:bg-blue-950/40 px-3.5 py-1 text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-3">
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Solutions Designed for Business Needs
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Tailored digital solutions built to elevate your business operations and online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`rounded-3xl border p-7 sm:p-8 bg-white dark:bg-[#12141a] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl ${
                    service.highlight
                      ? 'border-blue-300 dark:border-blue-500/50 ring-2 ring-blue-500/10 shadow-md'
                      : 'border-slate-200/80 dark:border-white/10 shadow-xs hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <div>
                    {/* Icon & Highlight Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-12 w-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-xs">
                        <Icon size={24} />
                      </div>
                      {service.highlight && (
                        <span className="text-[10px] font-bold font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                          Popular Workflow
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Tech & Capability Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                    <button
                      type="button"
                      onClick={onOpenDiscovery}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors cursor-pointer group"
                    >
                      <span>Inquire about this service</span>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 04. WHATSAPP AUTOMATION SPOTLIGHT SECTION                */}
      {/* ======================================================== */}
      <section id="whatsapp" className="py-20 sm:py-28 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-emerald-200 dark:border-emerald-800/50 bg-gradient-to-br from-emerald-50/60 via-white to-slate-50/80 dark:from-emerald-950/20 dark:via-[#111318] dark:to-[#0c0e14] p-8 sm:p-12 lg:p-14 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 dark:border-emerald-700 bg-emerald-100/70 dark:bg-emerald-950/60 px-3.5 py-1 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                <MessageSquare size={14} />
                <span>WhatsApp Automation Spotlight</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Make Every Customer Conversation More Efficient.
              </h2>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Connect with customers through structured WhatsApp workflows. From enquiry acknowledgement to follow-up messages and important notifications, WhatsApp automation can help your business respond consistently and manage conversations more efficiently.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {whatsappFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-400 dark:text-slate-500 italic pt-2">
                Feature availability depends on the selected WhatsApp platform, provider and applicable messaging policies.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenDiscovery}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 text-sm font-bold shadow-md shadow-emerald-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <span>Discuss WhatsApp Automation</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href="https://wa.me/917418672022?text=Hi%20Stuzen%20Technologies%2C%20I%20would%20like%20to%20discuss%20WhatsApp%20Automation%20workflows%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-white dark:bg-[#12141a] hover:bg-emerald-50 dark:hover:bg-white/5 text-emerald-800 dark:text-emerald-300 px-6 py-3.5 text-sm font-bold transition-all cursor-pointer"
                >
                  <span>Chat on WhatsApp: +91 74186 72022</span>
                </a>
              </div>
            </div>

            {/* Realistic WhatsApp Chat Simulator */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] shadow-xl overflow-hidden">
                {/* Chat Header */}
                <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white text-emerald-600 font-bold flex items-center justify-center text-sm shadow-xs">
                      ST
                    </div>
                    <div>
                      <div className="text-sm font-bold flex items-center gap-1.5">
                        <span>Stuzen Technologies</span>
                        <CheckCircle2 size={13} className="text-emerald-200 fill-emerald-200 text-emerald-700" />
                      </div>
                      <div className="text-[11px] text-emerald-100 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                        <span>Online • Instant Auto-Reply</span>
                      </div>
                    </div>
                  </div>
                  <Smartphone size={18} className="text-emerald-200" />
                </div>

                {/* Chat Messages Area */}
                <div className="p-4 sm:p-5 space-y-3.5 bg-slate-50/60 dark:bg-[#0c0e14] text-xs">
                  <div className="p-3 rounded-2xl rounded-tl-sm bg-white dark:bg-[#1a1c24] border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-slate-200 max-w-[85%] shadow-xs">
                    "Hi, we need to automate our client enquiry process and follow-up alerts."
                    <div className="text-[10px] text-slate-400 text-right mt-1">10:42 AM</div>
                  </div>

                  <div className="p-3.5 rounded-2xl rounded-tr-sm bg-emerald-600 text-white ml-auto max-w-[90%] shadow-md space-y-1.5">
                    <p className="leading-relaxed">
                      "Hello! Welcome to Stuzen Technologies. We received your request. Here are our structured WhatsApp automation workflows:"
                    </p>
                    <div className="bg-emerald-700/80 rounded-lg p-2 text-[11px] space-y-1">
                      <div>⚡ 1. Instant Lead Acknowledgment</div>
                      <div>📅 2. Appointment Booking Workflow</div>
                      <div>📦 3. Automated Status Notifications</div>
                    </div>
                    <div className="text-[10px] text-emerald-200 text-right">10:42 AM ✓✓</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-[11px] text-slate-500 text-center font-mono">
                    ✓ Notification dispatched to team via Cloud Webhook (0.9s)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 05. WHY CHOOSE STUZEN (5 Clean Pillars)                  */}
      {/* ======================================================== */}
      <section id="why-choose-us" className="py-20 sm:py-28 bg-slate-50/80 dark:bg-[#0c0e14] border-y border-slate-200/80 dark:border-white/10">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50/80 dark:bg-blue-950/40 px-3.5 py-1 text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-3">
              <span>Why Choose Stuzen</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Reliable Delivery Focused on Business Value
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              We combine technical capability with clear communication and dependable execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyChooseUsPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#12141a] p-6 sm:p-7 shadow-xs hover:-translate-y-1 hover:shadow-lg transition-all text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
                      <Icon size={22} />
                    </div>

                    <div className="text-[10px] font-mono font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider mb-1">
                      {pillar.highlight}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 06. OUR PROCESS (Clean 5-Step Connected Timeline)        */}
      {/* ======================================================== */}
      <section id="process" className="py-20 sm:py-28 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50/80 dark:bg-blue-950/40 px-3.5 py-1 text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-3">
            <span>Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            A Clear, Structured Pathway from Concept to Launch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A structured, transparent pathway from concept to launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5 relative">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#12141a] p-6 sm:p-7 shadow-xs hover:-translate-y-1 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                    {step.number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-blue-600/40" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-white/5">
                <span className="text-[11px] font-mono text-blue-600 dark:text-cyan-400 font-semibold block">
                  ✓ {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 07. CALL TO ACTION BANNER                                */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white p-8 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Have a Project in Mind?
            </h2>
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
              Tell us what you want to build. Let's discuss a digital solution that fits your business.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={onOpenDiscovery}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-sm font-bold shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="https://wa.me/917418672022?text=Hi%20Stuzen%20Technologies%2C%20I%20have%20a%20project%20in%20mind%20and%20would%20like%20to%20discuss%20it."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-blue-300/60 bg-blue-700/60 hover:bg-blue-700 text-white px-7 py-4 text-sm font-bold transition-all cursor-pointer"
              >
                <span>Chat on WhatsApp (+91 74186 72022)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 08. CONTACT SECTION                                      */}
      {/* ======================================================== */}
      <section id="contact" className="py-20 sm:py-28 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Stuzen Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50/80 dark:bg-blue-950/40 px-3.5 py-1 text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
              <span>Get in Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Let's Talk About Your Project.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Have a question or need a digital solution for your business? Send us your requirements and our team will get back to you.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:hello@stuzentechnologies.com"
                className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-blue-400 bg-white dark:bg-[#12141a] shadow-xs hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="h-11 w-11 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">Email Address</div>
                  <div className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 transition-colors">
                    hello@stuzentechnologies.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/917418672022"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-emerald-400 bg-white dark:bg-[#12141a] shadow-xs hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="h-11 w-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">Phone & WhatsApp Desk</div>
                  <div className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 transition-colors">
                    +91 74186 72022
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#12141a] shadow-xs">
                <div className="h-11 w-11 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">Location</div>
                  <div className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
                    Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/40">
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Need a Detailed Project Blueprint?
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                Use our 10-section Website Project Requirements Discovery Form to specify your goals, sitemap, features and budget.
              </p>
              <button
                type="button"
                onClick={onOpenDiscovery}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                <span>Launch Interactive Project Discovery Form</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Quick-Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#12141a] p-7 sm:p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                Send Your Requirements
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill in your details and our team will get in touch to discuss your solution.
              </p>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    Thank You! We Have Received Your Message.
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                    Our team will review your requirements for <strong>{formState.name}</strong> and contact you via email or WhatsApp shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormState({
                        name: '',
                        businessName: '',
                        email: '',
                        phone: '',
                        service: 'Website Development',
                        message: '',
                      });
                    }}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                  >
                    <span>Send another inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:bg-white dark:focus:bg-[#12141a] outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Business / Company Name
                      </label>
                      <input
                        type="text"
                        value={formState.businessName}
                        onChange={(e) => setFormState({ ...formState, businessName: e.target.value })}
                        placeholder="e.g. Acme Enterprises"
                        className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:bg-white dark:focus:bg-[#12141a] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:bg-white dark:focus:bg-[#12141a] outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:bg-white dark:focus:bg-[#12141a] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Service Needed
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-[#161820] px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="WhatsApp Automation">WhatsApp Automation</option>
                      <option value="Web Application Development">Web Application Development</option>
                      <option value="Business Digital Solutions">Business Digital Solutions</option>
                      <option value="Other">Other / General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Briefly describe what you want to build or achieve..."
                      className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:bg-white dark:focus:bg-[#12141a] outline-none resize-y transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-4 text-sm font-bold shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                  >
                    <Send size={15} />
                    <span>Send Requirements</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  Layers, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  X, 
  Code2, 
  Globe2, 
  Cpu, 
  Bot,
  MessageCircle
} from 'lucide-react';
import { AppMode } from '../layout/Navbar';

interface PortfolioViewProps {
  onNavigateMode: (mode: AppMode) => void;
  onStartDiscoveryWithSection: (sectionId?: string) => void;
}

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'web' | 'saas' | 'ai';
  categoryLabel: string;
  industry: string;
  highlightMetric: string;
  metricLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  techStack: string[];
  results: string[];
  deliverablesLinkSection: string;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  onNavigateMode,
  onStartDiscoveryWithSection,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'saas' | 'ai'>('all');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 'aura-luxe',
      title: 'Aura Luxe Clinical Aesthetics',
      client: 'Aura Luxe MedSpa Group',
      category: 'web',
      categoryLabel: 'Web Platform',
      industry: 'Luxury Healthcare & Dermatology',
      highlightMetric: '4.2x',
      metricLabel: 'Monthly Patient Inquiries',
      summary: 'Engineered a bespoke high-converting digital portal with interactive treatment discovery, 60-second booking pipeline, and automated WhatsApp patient reminders.',
      challenge: 'Their existing WordPress site suffered from 4.8s mobile load times, high bounce rates (68%), and fragmented manual appointment booking via phone calls.',
      solution: 'Re-architected from the ground up on React 19 and Tailwind v4 deployed on Edge CDN. Sub-0.35s TTFB, interactive visual treatment selector, and direct WhatsApp Cloud API booking sync.',
      techStack: ['React 19', 'TypeScript', 'Tailwind v4', 'Edge CDN', 'WhatsApp Cloud API'],
      results: [
        'Mobile Core Web Vitals improved from 38 to 99/100',
        'Patient booking conversion increased by 312%',
        'Zero manual receptionist follow-up needed for initial qualification',
      ],
      deliverablesLinkSection: 's03',
    },
    {
      id: 'nexora-capital',
      title: 'Nexora Capital Institutional Engine',
      client: 'Nexora Asset Management Ltd.',
      category: 'saas',
      categoryLabel: 'Enterprise SaaS',
      industry: 'Alternative Investments & FinTech',
      highlightMetric: '₹18 Cr+',
      metricLabel: 'Daily Transaction Volume',
      summary: 'High-throughput institutional investor portal featuring real-time NAV telemetry, multi-party signature workflows, and SOC-2 compliant document vaults.',
      challenge: 'Institutional investors required strict access control, audited transaction trails, and real-time portfolio performance tracking without page reloads.',
      solution: 'Constructed an ACID-compliant microservice backend with FastAPI, PostgreSQL, and Redis caching. Granular RBAC, audit logging, and sub-200ms API response times.',
      techStack: ['FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      results: [
        '99.98% cloud uptime across 18 consecutive months',
        'Sub-200ms latency for real-time NAV calculation updates',
        '100% compliance audit clearance on security penetration tests',
      ],
      deliverablesLinkSection: 's05',
    },
    {
      id: 'urbankicks-d2c',
      title: 'UrbanKicks Headless Storefront',
      client: 'UrbanKicks Footwear Pvt Ltd',
      category: 'web',
      categoryLabel: 'Web Platform',
      industry: 'D2C Streetwear & Lifestyle E-Commerce',
      highlightMetric: '+42%',
      metricLabel: 'Checkout Conversion Lift',
      summary: 'Headless React storefront engineered for high-concurrency drop events, instant client-side filtering, and frictionless mobile one-tap UPI checkout.',
      challenge: 'High server crashes during limited-edition sneaker drops on Shopify liquid theme, leading to cart abandonment and revenue loss.',
      solution: 'Built a headless decoupled frontend powered by React and Cloudflare Edge caching with Razorpay UPI instant payments and pre-fetched product routes.',
      techStack: ['React 19', 'Tailwind v4', 'Cloudflare Workers', 'Razorpay UPI', 'Framer Motion'],
      results: [
        'Handled 25,000 concurrent drop buyers with zero server degradation',
        'Cart-to-checkout conversion jumped from 3.1% to 4.4%',
        'Average mobile page load time dropped to 320ms',
      ],
      deliverablesLinkSection: 's03',
    },
    {
      id: 'apex-logistics',
      title: 'Kinesis Fleet & Supply Chain ERP',
      client: 'Kinesis Logistics Network',
      category: 'saas',
      categoryLabel: 'Enterprise SaaS',
      industry: 'Freight Logistics & Cold Chain',
      highlightMetric: '< 250ms',
      metricLabel: 'Telemetry Query Speed',
      summary: 'End-to-end freight dispatch and automated proof-of-delivery application handling 800+ trucks across 14 state transit hubs.',
      challenge: 'Dispatchers relied on paper manifests and uncoordinated phone check-ins, resulting in delayed status updates and untracked inventory demurrage.',
      solution: 'Developed an offline-first PWA dispatch console paired with real-time driver tracking, automated digital sign-off, and instant PDF invoice dispatch.',
      techStack: ['Node.js', 'PostgreSQL', 'PWA / Service Workers', 'PDFKit', 'Docker'],
      results: [
        'Truck turnaround time reduced by 3.5 hours per hub visit',
        'Paperless proof-of-delivery cut billing dispute rates by 92%',
        'Multi-tenant dispatcher dashboard operational across 14 hubs',
      ],
      deliverablesLinkSection: 's05',
    },
    {
      id: 'apexflow-whatsapp',
      title: 'ApexFlow Autonomous Revenue Bot',
      client: 'ApexFlow Real Estate Ventures',
      category: 'ai',
      categoryLabel: 'AI & WhatsApp',
      industry: 'Premium Real Estate & Property Development',
      highlightMetric: '85%',
      metricLabel: 'Automated Lead Qualification',
      summary: 'Autonomous Meta WhatsApp Business AI agent that engages prospective villa buyers, answers floorplan queries, and books site visits 24/7.',
      challenge: '90% of Facebook & Google Ad leads came in between 7 PM and 11 PM when the sales desk was offline, causing severe lead drop-off.',
      solution: 'Integrated an official WhatsApp Cloud API bot powered by custom LLM prompt rules and CRM webhooks. Qualified leads get booked directly into Google Calendar.',
      techStack: ['Meta WhatsApp Cloud API', 'FastAPI', 'Claude SDK', 'Google Calendar API', 'CRM Webhooks'],
      results: [
        'Response time reduced from 9 hours to 2.4 seconds',
        'Site visit bookings increased by 240% in first 60 days',
        'Generated over ₹34 Cr in closed villa property pipeline',
      ],
      deliverablesLinkSection: 's06',
    },
    {
      id: 'pulsecloud-telemetry',
      title: 'PulseCloud Infrastructure Observer',
      client: 'PulseCloud Technologies',
      category: 'saas',
      categoryLabel: 'Enterprise SaaS',
      industry: 'DevOps & Cloud Infrastructure',
      highlightMetric: '99.99%',
      metricLabel: 'Synthetic Uptime Monitored',
      summary: 'Centralized observability hub monitoring distributed microservices, SSL certificate expiration, and synthetic API response times.',
      challenge: 'Engineering teams suffered alert fatigue across four disparate monitoring tools without unified threshold alarms or escalation rules.',
      solution: 'Unified telemetry dashboard with automated anomaly detection, WebSocket live charting, and instant SMS / WhatsApp incident escalation.',
      techStack: ['React 19', 'Go / Golang', 'TimescaleDB', 'WebSockets', 'Tailwind v4'],
      results: [
        'Reduced Mean Time to Resolution (MTTR) by 58%',
        'Eliminated false positive pager alarms by 80%',
        'Single pane of glass across 240+ cloud nodes',
      ],
      deliverablesLinkSection: 's07',
    },
  ];

  const filteredStudies = selectedCategory === 'all'
    ? caseStudies
    : caseStudies.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#09090B] text-slate-900 dark:text-slate-100 transition-colors selection:bg-blue-600 selection:text-white">
      {/* Portfolio Hero */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 dark:border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(6,182,212,0.12),transparent)]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50/80 dark:bg-blue-950/60 px-4 py-1.5 text-xs font-mono font-bold text-blue-600 dark:text-cyan-400 backdrop-blur-md mb-6"
          >
            <Sparkles size={14} className="text-blue-500" />
            <span>PROVEN PRODUCTION CASE STUDIES • VERIFIED METRICS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.15]"
          >
            Engineered Success.{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Measured in Results.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore how we help high-growth enterprises transform operations through sub-second web applications, custom SaaS engines, and automated AI revenue pipelines.
          </motion.p>

          {/* Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-[#12141a] border border-slate-200 dark:border-white/10 shadow-xs max-w-lg mx-auto">
            {[
              { id: 'all', label: 'All Projects (6)' },
              { id: 'web', label: 'Web Platforms' },
              { id: 'saas', label: 'Enterprise SaaS' },
              { id: 'ai', label: 'AI & WhatsApp' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-blue-600 text-white shadow-md font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="group rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] p-6 shadow-sm hover:shadow-xl hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200">
                    {study.categoryLabel}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {study.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                  {study.summary}
                </p>

                {/* Key Metric Highlight Callout */}
                <div className="mt-5 p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-500/20 text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-600 dark:text-cyan-400">
                    {study.highlightMetric}
                  </div>
                  <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                    {study.metricLabel}
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {study.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalStudy(study)}
                  className="text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline cursor-pointer inline-flex items-center gap-1"
                >
                  <span>View Technical Deep-Dive</span>
                  <ExternalLink size={12} />
                </button>
                <button
                  onClick={() => onStartDiscoveryWithSection(study.deliverablesLinkSection)}
                  className="text-[11px] font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                >
                  Scope Similar →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeModalStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#12141a] p-6 sm:p-8 shadow-2xl space-y-6 text-slate-900 dark:text-slate-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-cyan-400">
                    {activeModalStudy.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {activeModalStudy.industry}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight">
                  {activeModalStudy.title}
                </h3>
                <p className="text-xs font-medium text-slate-500">
                  Client: {activeModalStudy.client}
                </p>
              </div>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-500/20 space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-rose-600 dark:text-rose-400">
                    THE ARCHITECTURAL CHALLENGE
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeModalStudy.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">
                    THE STUZEN SOLUTION
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeModalStudy.solution}
                  </p>
                </div>
              </div>

              {/* Verifiable Impact Metrics */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  KEY PRODUCTION RESULTS:
                </span>
                <div className="space-y-2">
                  {activeModalStudy.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-800 dark:text-slate-200">{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions in Modal */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  onClick={() => {
                    const sec = activeModalStudy.deliverablesLinkSection;
                    setActiveModalStudy(null);
                    onStartDiscoveryWithSection(sec);
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs font-bold text-white shadow hover:bg-blue-500 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Build Similar System in Discovery</span>
                  <ArrowRight size={15} />
                </button>
                <a
                  href={`https://wa.me/917418572022?text=${encodeURIComponent(`Hi Ranjith, I saw the ${activeModalStudy.title} case study on your site. We would like to discuss a similar project!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-5 py-3 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                >
                  <MessageCircle size={15} className="text-emerald-500" />
                  <span>Discuss With Ranjith</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Bottom Banner */}
      <section className="py-16 border-t border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
            Ready to Build Your Case Study With Stuzen?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Take 5 minutes to complete our interactive 45-point discovery questionnaire to receive an architectural scope blueprint and commercial proposal.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onStartDiscoveryWithSection('s01')}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow hover:bg-blue-500 active:scale-95 transition-all cursor-pointer"
            >
              <span>Launch 45-Point Discovery</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

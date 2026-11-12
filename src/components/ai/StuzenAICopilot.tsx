import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  ArrowRight, 
  RotateCcw, 
  Layers, 
  IndianRupee, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { AppMode } from '../layout/Navbar';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface StuzenAICopilotProps {
  onNavigateMode: (mode: AppMode) => void;
  onAutoFillDemo: () => void;
  onOpenPrint: () => void;
  onStartDiscoverySection: (sectionId: string) => void;
}

const PRESET_PROMPTS = [
  { label: '💰 Budget Tiers in INR', query: 'What are the project pricing brackets and budget tiers in Indian Rupees?' },
  { label: '🛠️ Recommended Tech Stack', query: 'Which technology stack does Stuzen recommend for web applications?' },
  { label: '⚡ Auto-Fill Demo Client', query: 'Can you show me a demo of how a completed discovery session looks?' },
  { label: '📲 WhatsApp Automation', query: 'How does Stuzen integrate WhatsApp Cloud API and automated lead capture?' },
  { label: '🖨️ Official Proposal PDF', query: 'How do we generate and export the official client requirements dossier?' },
];

export const StuzenAICopilot: React.FC<StuzenAICopilotProps> = ({
  onNavigateMode,
  onAutoFillDemo,
  onOpenPrint,
  onStartDiscoverySection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "👋 Vanakkam! I am your **Stuzen AI Solutions Architect**.\n\nWhether you are an evaluator testing our platform or an enterprise client planning a new build, I can help you with:\n• **Bespoke Website & Custom Software Architecture**\n• **Real-time Scope & INR Investment Estimates**\n• **WhatsApp Cloud API & Workflow Automation**\n• **Navigating the 45-point Discovery Audit**\n\nHow can I assist your project today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const generateAIResponse = (userQuery: string): { text: string; action?: { label: string; onClick: () => void } } => {
    const q = userQuery.toLowerCase();

    // Demo client trigger
    if (q.includes('demo') || q.includes('sample') || q.includes('test') || q.includes('aura luxe')) {
      return {
        text: "⚡ **Demo Indian Client Ready!**\n\nI can instantly populate all **45 discovery questions** with realistic data for *Aura Luxe Clinical Aesthetics* (Indiranagar, Bangalore) — including service scope, 17 feature modules, WhatsApp integration, and INR budget calibration.",
        action: {
          label: '⚡ Click to Load Demo Client Now',
          onClick: () => {
            onAutoFillDemo();
            onNavigateMode('discovery');
            setIsOpen(false);
          },
        },
      };
    }

    // Budget / Pricing in INR
    if (q.includes('budget') || q.includes('cost') || q.includes('price') || q.includes('pricing') || q.includes('inr') || q.includes('rupee') || q.includes('rate') || q.includes('evaluat')) {
      return {
        text: "💰 **Stuzen Engineering Commercial Investment Tiers (Pure INR ₹):**\n\n1. **Essential Growth**: `₹25,000 – ₹60,000` (High-speed modern corporate presence, responsive UI, core SEO & lead forms)\n2. **Professional SaaS / E-Commerce**: `₹60,000 – ₹1.5 Lakhs` (Custom UI, CMS engine, payment gateway & WhatsApp click-to-chat)\n3. **Enterprise Web Application**: `₹1.5 Lakhs – ₹3.5 Lakhs` (Custom PostgreSQL database, multi-role RBAC dashboards & workflows)\n4. **Flagship Digital Transformation**: `₹3.5 Lakhs+` (Complete enterprise ecosystem, multi-tenant cloud & dedicated SLA)\n\nAll pricing includes staging milestones (40% advance / 40% staging / 20% DNS cutover).",
        action: {
          label: 'Open Section 09 Timeline & Budget',
          onClick: () => {
            onStartDiscoverySection('s09');
            setIsOpen(false);
          },
        },
      };
    }

    // Tech Stack
    if (q.includes('stack') || q.includes('tech') || q.includes('react') || q.includes('framework') || q.includes('database') || q.includes('backend')) {
      return {
        text: "🛠️ **Stuzen Modern High-Velocity Stack:**\n\n• **Frontend**: React 19, TypeScript, Tailwind CSS v4, Framer Motion\n• **Build & Tooling**: Vite 8 / Next.js App Router\n• **Cloud & CDN**: Edge Cloud CDN (Global 99.99% SLA, SSL, sub-second TTFB)\n• **Database & Auth**: PostgreSQL / Supabase with JWT Session & Role-Based Access Control (RBAC)\n• **Payments**: Native Indian Gateways (Razorpay / Cashfree UPI, NetBanking & Cards)\n• **Automations**: Official Meta WhatsApp Cloud API Webhooks",
        action: {
          label: 'View 22-Module Feature Matrix',
          onClick: () => {
            onStartDiscoverySection('s05');
            setIsOpen(false);
          },
        },
      };
    }

    // WhatsApp & Automation
    if (q.includes('whatsapp') || q.includes('automation') || q.includes('chat') || q.includes('bot') || q.includes('crm')) {
      return {
        text: "📲 **WhatsApp Cloud API & Automations (Pillar 03):**\n\nStuzen integrates native Meta WhatsApp Business Platform capabilities:\n• **Click-to-Chat with Pre-filled Enquiry Tokens**\n• **Instant Lead-to-Staff Dispatch** (staff get customer details within 2 seconds)\n• **Automated Order / Appointment Booking Confirmations**\n• **Meta India Tariffs**: Approximately ~₹0.40 to ₹0.80 per conversation without vendor markups.",
        action: {
          label: 'Open WhatsApp Integration Section',
          onClick: () => {
            onStartDiscoverySection('s06');
            setIsOpen(false);
          },
        },
      };
    }

    // PDF / Dossier export
    if (q.includes('pdf') || q.includes('print') || q.includes('dossier') || q.includes('export') || q.includes('contract') || q.includes('sign')) {
      return {
        text: "🖨️ **Executive Requirements Dossier & Print Engine:**\n\nYou can generate an official executive discovery dossier anytime! It compiles:\n• Meeting metadata & client attendees\n• Complete 45 answered questions resolved into human-readable labels\n• Section 10 Executive Proposal Synthesis (A through F)\n• Formal dual stakeholder sign-off and watermark stamp\n\nClick below to open the printable document preview.",
        action: {
          label: '🖨️ Open Official Print Dossier',
          onClick: () => {
            onOpenPrint();
            setIsOpen(false);
          },
        },
      };
    }

    // Lead Vault
    if (q.includes('vault') || q.includes('save') || q.includes('store') || q.includes('record') || q.includes('history')) {
      return {
        text: "🗄️ **Internal Lead Vault:**\n\nEvery completed or in-progress discovery session is stored securely in your browser's `localStorage` (`stuzen_discovery_vault`). You can:\n• Search & filter records by business name or status\n• Reload any client session back into the editor\n• Export offline JSON backups\n• Print individual dossiers with 1 click.",
        action: {
          label: 'Open Internal Lead Vault',
          onClick: () => {
            onNavigateMode('vault');
            setIsOpen(false);
          },
        },
      };
    }

    // Default general response
    return {
      text: `💡 **Thank you for your inquiry regarding "${userQuery}"!**\n\nAt Stuzen Technologies, we specialize in 3 core engineering pillars:\n1. **Website Development** (Bespoke corporate flagships & headless commerce)\n2. **Custom Software** (Full-stack SaaS, client portals & operational dashboards)\n3. **AI & Automation** (WhatsApp Cloud API & automated CRM pipelines)\n\nWould you like to start a client discovery audit or load the demo client session?`,
      action: {
        label: '🚀 Launch 45-Point Discovery Engine',
        onClick: () => {
          onNavigateMode('discovery');
          setIsOpen(false);
        },
      },
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAIResponse(query);
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: response.action,
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Launcher Pill (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 no-print">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(prev => !prev)}
          className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-4 py-3 text-white shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 border border-white/20 backdrop-blur-md cursor-pointer transition-all duration-200"
          aria-label="Open Stuzen AI Solutions Copilot"
        >
          <div className="relative flex h-6 w-6 items-center justify-center">
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="h-2 w-2 rounded-full bg-emerald-400 absolute -top-0.5 -right-0.5" />
            <Sparkles size={18} className="animate-spin text-cyan-200" style={{ animationDuration: '6s' }} />
          </div>
          <span className="text-xs font-bold tracking-wide">
            {isOpen ? 'Close AI Copilot' : 'Stuzen AI Copilot'}
          </span>
          <span className="hidden sm:inline-flex rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-mono font-semibold">
            Instant Advisor
          </span>
        </motion.button>
      </div>

      {/* Slide-over Assistant Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-22 right-4 sm:right-6 z-50 w-[94vw] sm:w-[430px] max-h-[82vh] h-[640px] flex flex-col rounded-2xl bg-white dark:bg-[#0c0e14] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden no-print transition-colors"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-950 dark:text-cyan-400 border border-blue-500/20">
                  <Bot size={20} />
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0c0e14]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                      Stuzen Solutions Copilot
                    </h3>
                    <span className="rounded bg-blue-100 dark:bg-blue-950 px-1.5 py-0.2 text-[9px] font-mono font-bold text-blue-600 dark:text-cyan-300">
                      AI 2.0
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Architectural Scope, Tech Stack & Pricing Advisor
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setMessages([messages[0]])}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer"
                  title="Reset conversation"
                >
                  <RotateCcw size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Quick Prompt Chips */}
            <div className="p-2.5 bg-slate-100/70 dark:bg-white/5 border-b border-slate-200 dark:border-white/5 overflow-x-auto scrollbar-none flex gap-1.5">
              {PRESET_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(prompt.query)}
                  className="shrink-0 rounded-lg bg-white dark:bg-[#12141a] px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors cursor-pointer whitespace-nowrap shadow-xs"
                >
                  {prompt.label}
                </button>
              ))}
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white mt-0.5">
                      <Sparkles size={13} />
                    </div>
                  )}

                  <div className={`max-w-[85%] rounded-2xl p-3.5 space-y-2.5 ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-[#161922] text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/5'
                  }`}>
                    <div className="whitespace-pre-line leading-relaxed font-sans">
                      {msg.text}
                    </div>

                    {msg.action && (
                      <button
                        type="button"
                        onClick={msg.action.onClick}
                        className="w-full mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 dark:bg-cyan-500 text-white dark:text-black font-bold px-3 py-2 text-xs shadow-md active:scale-95 transition-all cursor-pointer"
                      >
                        <span>{msg.action.label}</span>
                        <ArrowRight size={13} />
                      </button>
                    )}

                    <div className={`text-[9px] font-mono text-right ${msg.sender === 'user' ? 'text-blue-200' : 'text-slate-400'}`}>
                      {msg.timestamp}
                    </div>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 mt-0.5">
                      <User size={13} />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 text-xs italic">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Sparkles size={11} className="animate-spin" />
                  </div>
                  <span>Stuzen Copilot is analyzing requirements...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about tech stack, pricing, discovery..."
                className="flex-1 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md shadow-blue-500/20"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


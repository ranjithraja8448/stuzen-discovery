import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { 
  Compass, 
  Sparkles, 
  Printer, 
  Sun, 
  Moon, 
  Lock,
  Menu,
  X,
  Globe2,
  Users,
  Briefcase,
  Phone,
  MessageCircle,
  ArrowRight,
  Home,
  Layers,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Terminal,
  Zap
} from 'lucide-react';
import { AppMode } from './Navbar';

interface SidebarNavProps {
  currentMode: AppMode;
  onSelectMode: (mode: AppMode) => void;
  vaultCount: number;
  discoveryCompletionPercent: number;
  onOpenPrintPreview: () => void;
  onOpenStaffVault: () => void;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  currentMode,
  onSelectMode,
  vaultCount,
  discoveryCompletionPercent,
  onOpenPrintPreview,
  onOpenStaffVault,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Auto-collapse sidebar in Discovery Engine to give full width to the 3-pane form
  useEffect(() => {
    if (currentMode === 'discovery') {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [currentMode]);

  const mainNavItems: {
    id: AppMode;
    label: string;
    sublabel: string;
    icon: React.FC<{ size?: number; className?: string }>;
    highlight?: boolean;
    badge?: string;
  }[] = [
    {
      id: 'landing',
      label: 'Agency Overview',
      sublabel: 'Executive Flagship',
      icon: Home,
    },
    {
      id: 'discovery',
      label: 'Discovery Engine',
      sublabel: '45-Point Client Audit',
      icon: Compass,
      highlight: true,
      badge: discoveryCompletionPercent > 0 ? `${discoveryCompletionPercent}%` : 'LIVE ⚡',
    },
    {
      id: 'services',
      label: 'Core Services',
      sublabel: 'The 3 Engineering Pillars',
      icon: Layers,
    },
    {
      id: 'portfolio',
      label: 'Production Proof',
      sublabel: 'Delivered Case Studies',
      icon: Briefcase,
    },
    {
      id: 'about',
      label: 'About Studio',
      sublabel: 'Philosophy & Roster',
      icon: Users,
    },
    {
      id: 'contact',
      label: 'Solutions Desk',
      sublabel: 'Instant Consultation',
      icon: Phone,
    },
  ];

  const handleItemClick = (mode: AppMode) => {
    onSelectMode(mode);
    setIsMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Top Header (Visible only on < lg) */}
      <header className="lg:hidden sticky top-0 z-40 w-full border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#07090e]/95 backdrop-blur-xl h-16 flex items-center justify-between px-3 sm:px-4 shadow-sm no-print">
        {/* Left STUZEN Logo button - Directly Toggles the Left Menu! */}
        <button 
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex items-center gap-2.5 cursor-pointer select-none p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-left"
          title="Click to Open Studio Navigation Menu"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/15 border border-blue-500/30 p-1.5 shadow-xs">
            <img 
              src="/brand/STUZEN_Icon_Only.png" 
              alt="Stuzen Icon" 
              className="h-full w-full object-contain"
            />
            <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#07090e]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold tracking-tight text-slate-900 dark:text-white text-sm">
                STUZEN
              </span>
              <span className="font-mono text-[9px] font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 border border-blue-500/30 flex items-center gap-1">
                <Menu size={10} />
                <span>MENU</span>
              </span>
            </div>
            <p className="text-[9px] text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider">
              Tap logo to open dock 👈
            </p>
          </div>
        </button>

        <div className="flex items-center gap-2">
          {/* Quick Discovery CTA on mobile */}
          {currentMode !== 'discovery' && (
            <button
              onClick={() => handleItemClick('discovery')}
              className="inline-flex items-center gap-1 rounded-xl bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-blue-500 active:scale-95 transition-all cursor-pointer"
            >
              <Compass size={13} />
              <span>Discovery</span>
            </button>
          )}

          {/* Theme toggle on mobile header */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#12141a] text-slate-700 dark:text-slate-300 shadow-xs cursor-pointer"
            title="Toggle Dark/Light Mode"
          >
            {theme === 'dark' ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-slate-700" />}
          </button>
        </div>
      </header>

      {/* Backdrop overlay for mobile drawer */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden no-print animate-fadeIn" 
        />
      )}

      {/* Main Left Sidebar Dock (Desktop: Static/Sticky; Mobile: Slide-out drawer) */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen transition-all duration-300 ease-in-out no-print flex flex-col justify-between border-r border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#07090e]/95 backdrop-blur-2xl text-slate-900 dark:text-slate-100 ${
          /* Desktop Width */
          isCollapsed ? 'lg:w-20' : 'lg:w-72'
        } ${
          /* Mobile Visibility */
          isMobileOpen ? 'translate-x-0 w-80 shadow-2xl' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top Header & Brand Identity */}
        <div className="p-4 sm:p-5 border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between">
          <div 
            onClick={() => handleItemClick('landing')}
            className="flex items-center gap-3 cursor-pointer select-none group min-w-0"
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-2 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <img 
                src="/brand/STUZEN_Icon_White.png" 
                alt="Stuzen" 
                className="h-full w-full object-contain"
              />
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#07090e]">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              </span>
            </div>

            {!isCollapsed && (
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold tracking-tight text-slate-950 dark:text-white text-base">
                    STUZEN
                  </span>
                  <span className="font-mono text-[9px] font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest px-1.5 py-0.2 rounded bg-blue-50 dark:bg-blue-950/80 border border-blue-500/20">
                    TECHNOLOGIES
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-mono tracking-wider uppercase truncate">
                  Learn. Build. Innovate.
                </p>
              </div>
            )}
          </div>

          {/* Desktop Collapse / Expand Toggle Button */}
          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 transition-colors"
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>

          {/* Mobile Close Button */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {/* Group 1: Executive Agency Portal */}
          <div className="space-y-1">
            {!isCollapsed && (
              <div className="px-3 pb-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                STUDIO PORTAL
              </div>
            )}

            <div className="space-y-1">
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentMode === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    title={isCollapsed ? item.label : undefined}
                    className={`w-full group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                    } ${isCollapsed ? 'justify-center px-0' : ''}`}
                  >
                    <div className={`p-1.5 rounded-xl transition-colors shrink-0 ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : item.highlight
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400 group-hover:scale-105'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white'
                    }`}>
                      <Icon size={18} />
                    </div>

                    {!isCollapsed && (
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold truncate leading-tight">
                            {item.label}
                          </span>
                          {item.badge && (
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                              isActive
                                ? 'bg-white/20 text-white'
                                : 'bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-cyan-300'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className={`text-[10px] truncate ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                          {item.sublabel}
                        </p>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Group 2: Operational Tools & Confidential Lead Desk */}
          <div className="space-y-1 pt-2 border-t border-slate-200/80 dark:border-white/10">
            {!isCollapsed && (
              <div className="px-3 pb-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center justify-between">
                <span>OPERATIONS & DESK</span>
                <span className="text-[9px] text-amber-500 font-bold font-mono">STAFF ONLY</span>
              </div>
            )}

            <div className="space-y-1">
              {/* Staff Vault Trigger */}
              <button
                type="button"
                onClick={() => {
                  setIsMobileOpen(false);
                  onOpenStaffVault();
                }}
                title={isCollapsed ? 'Staff Lead Vault (PIN 7777)' : undefined}
                className={`w-full flex items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-all cursor-pointer ${
                  currentMode === 'vault'
                    ? 'bg-amber-500/15 border border-amber-500/40 text-amber-700 dark:text-amber-300 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                } ${isCollapsed ? 'justify-center px-0' : ''}`}
              >
                <div className="p-1.5 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                  <Lock size={18} />
                </div>
                {!isCollapsed && (
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold truncate leading-tight">
                        Staff Lead Vault
                      </span>
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-600 dark:text-amber-300">
                        PIN 7777
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 truncate">
                      Confidential Client Dossiers
                    </p>
                  </div>
                )}
              </button>

              {/* PDF Dossier Modal Trigger */}
              <button
                type="button"
                onClick={() => {
                  setIsMobileOpen(false);
                  onOpenPrintPreview();
                }}
                title={isCollapsed ? 'Official Printable PDF Dossier' : undefined}
                className={`w-full flex items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer ${
                  isCollapsed ? 'justify-center px-0' : ''
                }`}
              >
                <div className="p-1.5 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
                  <Printer size={18} />
                </div>
                {!isCollapsed && (
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold truncate block leading-tight">
                      Export PDF Dossier
                    </span>
                    <p className="text-[10px] text-slate-400 truncate">
                      Executive Printable Brief
                    </p>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Dock: Direct WhatsApp Hotline + Theme Toggle */}
        <div className="p-3 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-black/20 space-y-2">
          {!isCollapsed ? (
            <div className="space-y-2">
              {/* WhatsApp Solutions Hotline Card */}
              <a
                href="https://wa.me/917418572022?text=Hi%20Stuzen%20Technologies%2C%20I%20am%20exploring%20your%20Digital%20Engineering%20Studio."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <MessageCircle size={16} className="shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold truncate leading-tight">Solutions Hotline</div>
                    <div className="text-[9px] text-emerald-100 truncate">+91 74185 72022</div>
                  </div>
                </div>
                <ArrowRight size={12} className="shrink-0" />
              </a>

              {/* Profile & Theme Toggle */}
              <div className="flex items-center justify-between pt-1 px-1">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white font-mono text-[9px] font-bold">
                    STZ
                  </div>
                  <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400 truncate">
                    Solutions Architecture Desk
                  </span>
                </div>

                <button
                  type="button"
                  onClick={toggleTheme}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 cursor-pointer"
                  title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
                >
                  {theme === 'dark' ? <Sun size={13} className="text-amber-400" /> : <Moon size={13} className="text-slate-700" />}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://wa.me/917418572022"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-emerald-600 text-white shadow-sm cursor-pointer"
                title="WhatsApp: +91 74185 72022"
              >
                <MessageCircle size={16} />
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300"
                title="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} className="text-slate-700" />}
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

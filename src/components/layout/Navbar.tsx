import React, { useState } from 'react';
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
  ArrowRight
} from 'lucide-react';

export type AppMode = 'landing' | 'about' | 'services' | 'portfolio' | 'discovery' | 'contact' | 'vault';

interface NavbarProps {
  currentMode: AppMode;
  onSelectMode: (mode: AppMode) => void;
  vaultCount: number;
  discoveryCompletionPercent: number;
  onOpenPrintPreview: () => void;
  onOpenStaffVault: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentMode,
  onSelectMode,
  vaultCount,
  discoveryCompletionPercent,
  onOpenPrintPreview,
  onOpenStaffVault,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { id: AppMode; label: string; icon: React.FC<{ size?: number; className?: string }>; highlight?: boolean }[] = [
    { id: 'landing', label: 'Home', icon: Sparkles },
    { id: 'about', label: 'About Us', icon: Users },
    { id: 'services', label: 'Services', icon: Globe2 },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'discovery', label: 'Discovery Portal', icon: Compass, highlight: true },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  const handleNavClick = (mode: AppMode) => {
    onSelectMode(mode);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 dark:border-white/10 dark:bg-[#09090b]/85 backdrop-blur-xl transition-colors duration-200 no-print shadow-xs">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
          {/* Brand Identity */}
          <div 
            onClick={() => handleNavClick('landing')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:border-blue-500/50 transition-colors">
              <img 
                src="/brand/STUZEN_Icon_Only.png" 
                alt="Stuzen Icon" 
                className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-extrabold tracking-tight text-slate-950 dark:text-white text-sm sm:text-base">
                  STUZEN
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-500/20">
                  TECHNOLOGIES
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase hidden sm:block">
                Learn. Build. Innovate.
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-2xl bg-slate-100/80 p-1 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = currentMode === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs dark:bg-blue-600 dark:text-white font-bold'
                      : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  <Icon size={13} className={isActive ? 'text-blue-600 dark:text-white' : ''} />
                  <span>{item.label}</span>
                  {item.id === 'discovery' && discoveryCompletionPercent > 0 && (
                    <span className="ml-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 px-1.5 py-0.2 text-[9px] font-mono font-bold text-blue-700 dark:text-cyan-300">
                      {discoveryCompletionPercent}%
                    </span>
                  )}
                  {item.highlight && discoveryCompletionPercent === 0 && !isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Controls: Staff Vault (PIN Protected), Print Dossier, Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Quick Discovery CTA on desktop */}
            {currentMode !== 'discovery' && (
              <button
                onClick={() => handleNavClick('discovery')}
                className="hidden xl:inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-blue-500 active:scale-95 transition-all cursor-pointer"
              >
                <Compass size={13} />
                <span>Start Discovery</span>
              </button>
            )}

            {/* Internal Staff Lead Vault Trigger (PIN Protected to guard customer privacy) */}
            <button
              type="button"
              onClick={onOpenStaffVault}
              className={`inline-flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-medium transition-all cursor-pointer shadow-xs ${
                currentMode === 'vault'
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-700 dark:text-amber-300 font-bold'
                  : 'border-slate-200 bg-white dark:border-white/10 dark:bg-[#12141a] text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20'
              }`}
              title="Stuzen Internal Staff Lead Vault (PIN Protected)"
            >
              <Lock size={12} className="text-amber-500" />
              <span className="text-[11px] font-medium hidden sm:inline">Staff Vault</span>
            </button>

            {/* Official Printable PDF Dossier */}
            <button
              type="button"
              onClick={onOpenPrintPreview}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-xs hover:bg-slate-50 dark:border-white/10 dark:bg-[#12141a] dark:text-slate-300 dark:hover:bg-white/5 transition-all cursor-pointer"
              title="Export Official PDF / Print Discovery Dossier"
            >
              <Printer size={13} className="text-blue-500" />
              <span className="text-[11px] font-medium">PDF</span>
            </button>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-slate-50 dark:border-white/10 dark:bg-[#12141a] dark:text-slate-300 dark:hover:bg-white/5 transition-all cursor-pointer shrink-0"
              aria-label="Toggle Dark and Light Mode"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun size={15} className="text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon size={15} className="text-slate-700 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Mobile Hamburger / Close Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-slate-50 dark:border-white/10 dark:bg-[#12141a] dark:text-slate-300 dark:hover:bg-white/5 transition-all cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-slate-950/70 backdrop-blur-md pt-16 animate-fadeIn">
          <div className="h-full overflow-y-auto bg-white dark:bg-[#0c0e14] border-b border-slate-200 dark:border-white/10 p-6 space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                NAVIGATION MENU
              </span>
              <div className="grid grid-cols-1 gap-2 pt-2">
                {navLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentMode === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl text-sm font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-blue-600 text-white font-bold shadow-md'
                          : 'bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} className={isActive ? 'text-white' : 'text-blue-500'} />
                        <span>{item.label}</span>
                      </div>
                      {item.id === 'discovery' && discoveryCompletionPercent > 0 && (
                        <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-mono font-bold">
                          {discoveryCompletionPercent}%
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions in Mobile Drawer */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-3">
              <button
                onClick={() => handleNavClick('discovery')}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 p-4 text-xs font-bold text-white shadow-lg cursor-pointer"
              >
                <Compass size={16} />
                <span>Launch 45-Point Discovery Engine</span>
                <ArrowRight size={14} />
              </button>

              <a
                href="https://wa.me/917418572022?text=Hi%20Ranjith%2C%20I%20am%20exploring%20Stuzen%20Technologies."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 p-3.5 text-xs font-bold text-white shadow cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>Chat With Ranjith on WhatsApp</span>
              </a>

              <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-slate-500">
                <span>Staff Lead Vault:</span>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenStaffVault();
                  }}
                  className="font-bold text-amber-500 hover:underline cursor-pointer"
                >
                  Unlock With PIN 7777 →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React from 'react';
import { useTheme } from './ThemeContext';
import { 
  Compass, 
  Sparkles, 
  Printer, 
  Sun, 
  Moon, 
  Lock
} from 'lucide-react';

export type AppMode = 'landing' | 'discovery' | 'vault';

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

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 dark:border-white/10 dark:bg-[#09090b]/85 backdrop-blur-xl transition-colors duration-200 no-print shadow-xs">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Brand Identity */}
        <div 
          onClick={() => onSelectMode('landing')}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none shrink-0"
        >
          <div className="relative flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:border-blue-500/50 transition-colors">
            <img 
              src="/brand/STUZEN_Icon_Only.png" 
              alt="Stuzen Icon" 
              className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-bold tracking-tight text-slate-900 dark:text-white text-sm sm:text-base">
                STUZEN
              </span>
              <span className="font-mono text-[9px] sm:text-[11px] font-semibold text-blue-600 dark:text-cyan-400 uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-500/20 hidden min-[400px]:inline">
                TECHNOLOGIES
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase hidden sm:block">
              Learn. Build. Innovate.
            </p>
          </div>
        </div>

        {/* 2-Mode Public Switcher: Clean and uncluttered on all mobile screens */}
        <nav className="flex items-center gap-1 rounded-xl bg-slate-100 p-1 dark:bg-white/5 border border-slate-200 dark:border-white/10" aria-label="Application mode switcher">
          <button
            onClick={() => onSelectMode('landing')}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 sm:px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
              currentMode === 'landing'
                ? 'bg-white text-slate-900 shadow-sm dark:bg-blue-600 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Sparkles size={13} className={currentMode === 'landing' ? 'text-blue-600 dark:text-white' : ''} />
            <span className="hidden sm:inline">Agency Home</span>
            <span className="sm:hidden">Home</span>
          </button>

          <button
            onClick={() => onSelectMode('discovery')}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 sm:px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
              currentMode === 'discovery'
                ? 'bg-white text-slate-900 shadow-sm dark:bg-blue-600 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Compass size={13} className={currentMode === 'discovery' ? 'text-blue-600 dark:text-white' : ''} />
            <span className="hidden sm:inline">Discovery Portal</span>
            <span className="sm:hidden">Discovery</span>
            {discoveryCompletionPercent > 0 && (
              <span className="ml-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 px-1.5 py-0.2 text-[9px] font-mono font-bold text-blue-700 dark:text-cyan-300">
                {discoveryCompletionPercent}%
              </span>
            )}
          </button>
        </nav>

        {/* Action Controls: Staff Vault (PIN Protected), Print Dossier & Dark/Light Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Internal Staff Lead Vault Trigger (PIN Protected to guard customer privacy) */}
          <button
            type="button"
            onClick={onOpenStaffVault}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-all cursor-pointer shadow-xs ${
              currentMode === 'vault'
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-700 dark:text-amber-300 font-bold'
                : 'border-slate-200 bg-white dark:border-white/10 dark:bg-[#12141a] text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20'
            }`}
            title="Stuzen Internal Staff Lead Vault (PIN Protected)"
          >
            <Lock size={12} className="text-amber-500" />
            <span className="text-[11px] font-medium">Staff Vault</span>
          </button>

          {/* Official Printable PDF Dossier */}
          <button
            type="button"
            onClick={onOpenPrintPreview}
            className="hidden lg:inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-xs hover:bg-slate-50 dark:border-white/10 dark:bg-[#12141a] dark:text-slate-300 dark:hover:bg-white/5 transition-all cursor-pointer"
            title="Export Official PDF / Print Discovery Dossier"
          >
            <Printer size={13} className="text-blue-500" />
            <span>PDF Dossier</span>
          </button>

          {/* Theme Toggle (Working flawlessly with HTML class sync) */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-slate-50 dark:border-white/10 dark:bg-[#12141a] dark:text-slate-300 dark:hover:bg-white/5 transition-all cursor-pointer shrink-0"
            aria-label="Toggle Dark and Light Mode"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun size={16} className="text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon size={16} className="text-slate-700 hover:-rotate-12 transition-transform" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

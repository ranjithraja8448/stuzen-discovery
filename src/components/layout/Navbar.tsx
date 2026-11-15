import React, { useState } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

export type AppMode = 'main' | 'landing' | 'discovery' | 'services' | 'about' | 'portfolio' | 'contact' | 'vault';

interface NavbarProps {
  currentMode: AppMode;
  onNavigateSection: (sectionId: string) => void;
  onOpenDiscovery: () => void;
  onGoHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentMode,
  onNavigateSection,
  onOpenDiscovery,
  onGoHome,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'About', sectionId: 'about' },
    { label: 'Services', sectionId: 'services' },
    { label: 'WhatsApp Automation', sectionId: 'whatsapp' },
    { label: 'Process', sectionId: 'process' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  const handleLinkClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (currentMode !== 'main') {
      onGoHome();
      // Allow state update to settle before scrolling
      setTimeout(() => {
        onNavigateSection(sectionId);
      }, 100);
    } else {
      onNavigateSection(sectionId);
    }
  };

  const handleDiscussClick = () => {
    setMobileMenuOpen(false);
    onOpenDiscovery();
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-[#09090b]/95 backdrop-blur border-b border-slate-200 dark:border-white/10 transition-colors duration-200 no-print">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo on Left */}
        <button
          type="button"
          onClick={() => {
            if (currentMode !== 'main') {
              onGoHome();
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-2 cursor-pointer select-none py-1 group"
          title="Stuzen Technologies"
        >
          <img
            src="/brand/STUZEN_Logo_Transparent.png"
            alt="Stuzen Technologies"
            className="h-8 sm:h-9 w-auto object-contain transition-opacity group-hover:opacity-90"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleLinkClick(link.sectionId)}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors cursor-pointer py-1"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right CTA Button & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
            title="Toggle Theme"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            type="button"
            onClick={handleDiscussClick}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold shadow-xs hover:shadow-sm active:scale-[0.99] transition-all cursor-pointer"
          >
            <span>Discuss Your Project</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#09090b] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleLinkClick(link.sectionId)}
                className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100 dark:border-white/10">
            <button
              type="button"
              onClick={handleDiscussClick}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 text-sm font-semibold transition-colors shadow-xs"
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

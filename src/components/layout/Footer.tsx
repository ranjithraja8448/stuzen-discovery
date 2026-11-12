import React from 'react';
import { useTheme } from './ThemeContext';
import { ShieldCheck, Sparkles, Terminal, Code2, ArrowUpRight } from 'lucide-react';
import { AppMode } from './Navbar';

interface FooterProps {
  onSelectMode?: (mode: AppMode) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectMode }) => {
  const { theme } = useTheme();

  const handleNav = (mode: AppMode) => {
    if (onSelectMode) {
      onSelectMode(mode);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#07080a] py-14 transition-colors duration-200 no-print">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-200 dark:border-white/5">
          <div className="max-w-md">
            <div 
              onClick={() => handleNav('landing')} 
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <img
                src={theme === 'dark' ? '/brand/STUZEN_Logo_White.png' : '/brand/STUZEN_Logo_Transparent.png'}
                alt="Stuzen Technologies"
                className="h-8 object-contain"
              />
            </div>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Learn. Build. Innovate. Engineering bespoke digital experiences, mission-critical custom web software, and autonomous AI automation pipelines for category leaders worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            <div>
              <span className="font-mono text-[10px] font-semibold text-blue-500 uppercase tracking-wider">
                Agency Suites
              </span>
              <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-400">
                <li onClick={() => handleNav('services')} className="hover:text-blue-500 transition-colors cursor-pointer">Three Core Pillars</li>
                <li onClick={() => handleNav('about')} className="hover:text-blue-500 transition-colors cursor-pointer">About Stuzen Story</li>
                <li onClick={() => handleNav('portfolio')} className="hover:text-blue-500 transition-colors cursor-pointer">Delivered Case Studies</li>
                <li onClick={() => handleNav('contact')} className="hover:text-blue-500 transition-colors cursor-pointer">Solutions Desk & Contact</li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[10px] font-semibold text-blue-500 uppercase tracking-wider">
                Discovery System
              </span>
              <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-400">
                <li onClick={() => handleNav('discovery')} className="hover:text-blue-500 transition-colors cursor-pointer">45-Point Audit Matrix</li>
                <li onClick={() => handleNav('discovery')} className="hover:text-blue-500 transition-colors cursor-pointer">Live Scope Blueprint</li>
                <li onClick={() => handleNav('vault')} className="hover:text-blue-500 transition-colors cursor-pointer">Staff Lead Vault (PIN)</li>
                <li onClick={() => handleNav('landing')} className="hover:text-blue-500 transition-colors cursor-pointer">5-Sec Scope Estimator</li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[10px] font-semibold text-blue-500 uppercase tracking-wider">
                Engineering SLA
              </span>
              <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-emerald-500" /> Transparent Milestone Billing</li>
                <li className="flex items-center gap-1.5"><Sparkles size={13} className="text-cyan-500" /> &lt;0.38s Core Web Vitals</li>
                <li className="flex items-center gap-1.5"><Terminal size={13} className="text-blue-500" /> 99.98% Cloud SLA</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} STUZEN TECHNOLOGIES. All rights reserved. Confidential Discovery Engine.</p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>STUZEN-OS v2.5</span>
            <span>•</span>
            <span className="text-blue-500">Bengaluru Tech Hub, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

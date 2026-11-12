import React from 'react';
import { useTheme } from './ThemeContext';
import { ShieldCheck, Sparkles, Terminal, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#07080a] py-12 transition-colors duration-200 no-print">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-200 dark:border-white/5">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
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
                Agency Pillars
              </span>
              <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-400">
                <li className="hover:text-blue-500 transition-colors cursor-pointer">Website Development</li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">Custom Software Engineering</li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">AI & Workflow Automation</li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">WhatsApp Business Platform</li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[10px] font-semibold text-blue-500 uppercase tracking-wider">
                Discovery System
              </span>
              <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-400">
                <li className="hover:text-blue-500 transition-colors cursor-pointer">45-Point Audit Matrix</li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">Executive Architecture Blueprint</li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">Internal Lead Vault</li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">Official PDF Dossier Export</li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[10px] font-semibold text-blue-500 uppercase tracking-wider">
                Standards
              </span>
              <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-emerald-500" /> Enterprise SLA</li>
                <li className="flex items-center gap-1.5"><Sparkles size={13} className="text-cyan-500" /> React 19 / Modern Tech</li>
                <li className="flex items-center gap-1.5"><Terminal size={13} className="text-blue-500" /> Edge Infrastructure</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} STUZEN TECHNOLOGIES. All rights reserved. Confidential Discovery Engine.</p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>STUZEN-OS v2.4</span>
            <span>•</span>
            <span className="text-blue-500">Bangalore, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};


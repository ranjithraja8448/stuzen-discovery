import React from 'react';

interface FooterProps {
  onNavigateSection?: (sectionId: string) => void;
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenPrivacy }) => {
  const handleNav = (sectionId: string) => {
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#07080a] py-12 transition-colors duration-200 no-print">
      <div className="mx-auto max-w-[1720px] w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-white/5">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/brand/STUZEN_Icon_Only.png"
                alt="Stuzen Technologies"
                className="h-8 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white leading-none">
                  STUZEN
                </span>
                <span className="text-[9px] text-slate-400 dark:text-slate-500 font-semibold tracking-widest uppercase mt-0.5">
                  TECHNOLOGIES
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Smart digital solutions for modern businesses.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <button
              type="button"
              onClick={() => handleNav('services')}
              className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => handleNav('about')}
              className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => onOpenPrivacy && onOpenPrivacy()}
              className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 Stuzen Technologies. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Tamil Nadu, India</span>
            <span>•</span>
            <a
              href="mailto:hello@stuzentechnologies.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              hello@stuzentechnologies.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

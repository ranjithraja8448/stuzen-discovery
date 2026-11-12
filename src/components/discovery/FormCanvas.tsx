import React, { useState, useEffect } from 'react';
import { DiscoveryFormData } from '../../types/discovery';
import { ScopeAnalysis } from '../../utils/scopeAnalyzer';
import { SECTIONS } from '../../data/discoveryQuestions';
import { Section01ClientDetails } from './sections/Section01ClientDetails';
import { Section02ProjectGoals } from './sections/Section02ProjectGoals';
import { Section03WebsiteType } from './sections/Section03WebsiteType';
import { Section04DesignBrand } from './sections/Section04DesignBrand';
import { Section05FeaturesMatrix } from './sections/Section05FeaturesMatrix';
import { Section06WhatsAppIntegrations } from './sections/Section06WhatsAppIntegrations';
import { Section07TechnicalOperational } from './sections/Section07TechnicalOperational';
import { Section08SEOAnalytics } from './sections/Section08SEOAnalytics';
import { Section09TimelineBudget } from './sections/Section09TimelineBudget';
import { Section10SummarySignoff } from './sections/Section10SummarySignoff';
import { ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, FileText, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FormCanvasProps {
  formData: DiscoveryFormData;
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onUpdateSection: (sectionKey: keyof DiscoveryFormData, field: string, value: any) => void;
  onAutoGenerateSummary: () => void;
  scopeAnalysis: ScopeAnalysis;
  onOpenPrint?: () => void;
  onSaveToVault?: () => void;
}

export const FormCanvas: React.FC<FormCanvasProps> = ({
  formData,
  activeSection,
  onSelectSection,
  onUpdateSection,
  onAutoGenerateSummary,
  scopeAnalysis,
  onOpenPrint,
  onSaveToVault,
}) => {
  const [validationError, setValidationError] = useState<string | null>(null);

  const currentIndex = SECTIONS.findIndex(s => s.id === activeSection);
  const currentSec = SECTIONS[currentIndex] || SECTIONS[0];
  const prevSection = currentIndex > 0 ? SECTIONS[currentIndex - 1] : null;
  const nextSection = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : null;

  // Clear validation error when section switches
  useEffect(() => {
    setValidationError(null);
  }, [activeSection]);

  const scrollToCanvasTop = () => {
    const el = document.getElementById('discovery-form-canvas');
    if (el) {
      el.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const validateCurrentSection = (): { isValid: boolean; message?: string } => {
    if (activeSection === 's01') {
      const { businessName, contactName, industry, phoneWhatsapp, email } = formData.s01_client;
      if (!businessName.trim()) {
        return { isValid: false, message: 'Please enter your Official Business / Brand Name (Q02).' };
      }
      if (!contactName.trim()) {
        return { isValid: false, message: 'Please enter Contact Person Name (Q01).' };
      }
      if (!industry.trim()) {
        return { isValid: false, message: 'Please specify your Industry or Sector (Q03).' };
      }
      if (!phoneWhatsapp.trim() && !email.trim()) {
        return { isValid: false, message: 'Please provide at least a Phone/WhatsApp number or Email (Q04).' };
      }
    } else if (activeSection === 's02') {
      const { purposes } = formData.s02_goals;
      if (purposes.length === 0) {
        return { isValid: false, message: 'Please choose at least 1 Primary Commercial Purpose (Q08).' };
      }
    } else if (activeSection === 's03') {
      const { requiredPages } = formData.s03_structure;
      if (requiredPages.length === 0) {
        return { isValid: false, message: 'Please select at least 1 page for your sitemap manifest (Q13).' };
      }
    }
    return { isValid: true };
  };

  const handleNext = () => {
    const check = validateCurrentSection();
    if (!check.isValid) {
      setValidationError(check.message || 'Please fill in mandatory fields before advancing.');
      scrollToCanvasTop();
      return;
    }
    setValidationError(null);
    if (nextSection) {
      onSelectSection(nextSection.id);
      scrollToCanvasTop();
    }
  };

  const handlePrev = () => {
    setValidationError(null);
    if (prevSection) {
      onSelectSection(prevSection.id);
      scrollToCanvasTop();
    }
  };

  // Keyboard Navigation: Pressing Enter moves focus to the next input field
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLElement;
      // Let multiline textareas and buttons behave naturally
      if (target.tagName === 'TEXTAREA' || target.tagName === 'BUTTON') {
        return;
      }

      if (target.tagName === 'INPUT') {
        e.preventDefault();
        const container = document.getElementById('discovery-form-canvas');
        if (container) {
          const focusable = Array.from(
            container.querySelectorAll<HTMLElement>(
              'input:not([disabled]):not([type="hidden"]), textarea:not([disabled]), select:not([disabled])'
            )
          );
          const idx = focusable.indexOf(target);
          if (idx >= 0 && idx < focusable.length - 1) {
            const nextEl = focusable[idx + 1];
            nextEl.focus();
            if (nextEl instanceof HTMLInputElement) {
              nextEl.select?.();
            }
          } else if (idx === focusable.length - 1) {
            handleNext();
          }
        }
      }
    }
  };

  return (
    <main
      id="discovery-form-canvas"
      onKeyDown={handleKeyDown}
      className="flex-1 min-w-0 pt-8 sm:pt-10 px-4 sm:px-8 pb-28 max-w-4xl mx-auto overflow-y-auto scroll-smooth"
    >
      {/* Active Section Content Switcher */}
      <div>
        {activeSection === 's01' && (
          <Section01ClientDetails
            data={formData.s01_client}
            onChange={(field, val) => onUpdateSection('s01_client', field, val)}
            answeredCount={scopeAnalysis.sectionProgress['s01']?.answeredCount || 0}
          />
        )}

        {activeSection === 's02' && (
          <Section02ProjectGoals
            data={formData.s02_goals}
            onChange={(field, val) => onUpdateSection('s02_goals', field, val)}
            answeredCount={scopeAnalysis.sectionProgress['s02']?.answeredCount || 0}
          />
        )}

        {activeSection === 's03' && (
          <Section03WebsiteType
            data={formData.s03_structure}
            onChange={(field, val) => onUpdateSection('s03_structure', field, val)}
            answeredCount={scopeAnalysis.sectionProgress['s03']?.answeredCount || 0}
          />
        )}

        {activeSection === 's04' && (
          <Section04DesignBrand
            data={formData.s04_design}
            onChange={(field, val) => onUpdateSection('s04_design', field, val)}
            answeredCount={scopeAnalysis.sectionProgress['s04']?.answeredCount || 0}
          />
        )}

        {activeSection === 's05' && (
          <Section05FeaturesMatrix
            data={formData.s05_features}
            onChange={(field, val) => onUpdateSection('s05_features', field, val)}
            answeredCount={scopeAnalysis.sectionProgress['s05']?.answeredCount || 0}
          />
        )}

        {activeSection === 's06' && (
          <Section06WhatsAppIntegrations
            data={formData.s06_whatsapp}
            onChange={(field, val) => onUpdateSection('s06_whatsapp', field, val)}
            answeredCount={scopeAnalysis.sectionProgress['s06']?.answeredCount || 0}
          />
        )}

        {activeSection === 's07' && (
          <Section07TechnicalOperational
            data={formData.s07_technical}
            onChange={(field, val) => onUpdateSection('s07_technical', field, val)}
            answeredCount={scopeAnalysis.sectionProgress['s07']?.answeredCount || 0}
          />
        )}

        {activeSection === 's08' && (
          <Section08SEOAnalytics
            data={formData.s08_seo}
            onChange={(field, val) => onUpdateSection('s08_seo', field, val)}
            answeredCount={scopeAnalysis.sectionProgress['s08']?.answeredCount || 0}
          />
        )}

        {activeSection === 's09' && (
          <Section09TimelineBudget
            data={formData.s09_timeline}
            onChange={(field, val) => onUpdateSection('s09_timeline', field, val)}
            answeredCount={scopeAnalysis.sectionProgress['s09']?.answeredCount || 0}
          />
        )}

        {activeSection === 's10' && (
          <Section10SummarySignoff
            data={formData.s10_final}
            fullFormData={formData}
            onChangeFinal={(field, val) => onUpdateSection('s10_final', field, val)}
            onAutoGenerateSummary={onAutoGenerateSummary}
            answeredCount={scopeAnalysis.sectionProgress['s10']?.answeredCount || 0}
          />
        )}

        {/* Stepper Navigation Footer */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-white/10 space-y-4">
          {/* Mandatory Validation Error Alert */}
          {validationError && (
            <div className="p-4 rounded-xl bg-red-500/10 border-2 border-red-500/30 text-red-600 dark:text-red-400 text-xs flex items-center gap-3 animate-shake">
              <AlertCircle size={20} className="shrink-0 text-red-500" />
              <div>
                <span className="font-bold block uppercase tracking-wide">Mandatory Field Required</span>
                <span className="text-[11px] opacity-90">{validationError}</span>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {prevSection ? (
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#12141a] px-5 py-3 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer shadow-sm transition-all"
              >
                <ChevronLeft size={16} />
                <span>Previous: {prevSection.number} {prevSection.title}</span>
              </button>
            ) : (
              <div />
            )}

            {nextSection ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-xs font-semibold text-white hover:bg-blue-500 shadow-md shadow-blue-500/25 active:scale-95 transition-all cursor-pointer"
              >
                <span>Next: {nextSection.number} {nextSection.title}</span>
                <ChevronRight size={16} />
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onSelectSection('s01');
                    scrollToCanvasTop();
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-4 py-3 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer shadow-sm transition-all"
                >
                  <CheckCircle2 size={15} />
                  <span>Review From Step 01</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (onSaveToVault) {
                      onSaveToVault();
                    }
                    confetti({
                      particleCount: 75,
                      spread: 70,
                      origin: { y: 0.6 },
                      colors: ['#2563EB', '#06B6D4', '#10B981'],
                    });
                    if (onOpenPrint) {
                      onOpenPrint();
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/25 hover:opacity-95 active:scale-95 transition-all cursor-pointer"
                >
                  <Sparkles size={15} />
                  <span>🚀 Complete Discovery & View Official PDF Dossier</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

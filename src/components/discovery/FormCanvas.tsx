import React from 'react';
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
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface FormCanvasProps {
  formData: DiscoveryFormData;
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onUpdateSection: (sectionKey: keyof DiscoveryFormData, field: string, value: any) => void;
  onAutoGenerateSummary: () => void;
  scopeAnalysis: ScopeAnalysis;
}

export const FormCanvas: React.FC<FormCanvasProps> = ({
  formData,
  activeSection,
  onSelectSection,
  onUpdateSection,
  onAutoGenerateSummary,
  scopeAnalysis,
}) => {
  const currentIndex = SECTIONS.findIndex(s => s.id === activeSection);
  const currentSec = SECTIONS[currentIndex] || SECTIONS[0];
  const prevSection = currentIndex > 0 ? SECTIONS[currentIndex - 1] : null;
  const nextSection = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : null;

  const scrollToCanvasTop = () => {
    const el = document.getElementById('discovery-form-canvas');
    if (el) {
      el.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (nextSection) {
      onSelectSection(nextSection.id);
      scrollToCanvasTop();
    }
  };

  const handlePrev = () => {
    if (prevSection) {
      onSelectSection(prevSection.id);
      scrollToCanvasTop();
    }
  };

  return (
    <main
      id="discovery-form-canvas"
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
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
          {prevSection ? (
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#12141a] px-5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer shadow-sm transition-all"
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
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 shadow-md shadow-blue-500/25 active:scale-95 transition-all cursor-pointer"
            >
              <span>Next: {nextSection.number} {nextSection.title}</span>
              <ChevronRight size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                onSelectSection('s01');
                scrollToCanvasTop();
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-semibold text-white hover:bg-emerald-500 shadow-md cursor-pointer transition-all"
            >
              <CheckCircle2 size={16} />
              <span>Review From Section 01</span>
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

import React, { useState, useEffect } from 'react';
import { DiscoveryFormData } from '../../types/discovery';
import { ScopeAnalysis } from '../../utils/scopeAnalyzer';
import { SECTIONS } from '../../data/discoveryQuestions';
import { FormCanvas } from './FormCanvas';
import { 
  ArrowLeft, 
  Printer, 
  Save, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  Check, 
  FileText 
} from 'lucide-react';

interface DiscoveryEngineProps {
  formData: DiscoveryFormData;
  onChangeMeeting: (field: keyof DiscoveryFormData['meeting'], value: any) => void;
  onUpdateSection: (sectionKey: keyof DiscoveryFormData, field: string, value: any) => void;
  onAutoFillDemo: () => void;
  onResetForm: () => void;
  onAutoGenerateSummary: () => void;
  onSaveToVault: () => void;
  onOpenPrint: () => void;
  isSaved: boolean;
  scopeAnalysis: ScopeAnalysis;
  initialSection?: string;
  onNotifyToast?: (msg: string) => void;
  onBackToHome?: () => void;
}

export const DiscoveryEngine: React.FC<DiscoveryEngineProps> = ({
  formData,
  onChangeMeeting,
  onUpdateSection,
  onAutoFillDemo,
  onResetForm,
  onAutoGenerateSummary,
  onSaveToVault,
  onOpenPrint,
  isSaved,
  scopeAnalysis,
  initialSection = 's01',
  onNotifyToast,
  onBackToHome,
}) => {
  const [activeSection, setActiveSection] = useState<string>(initialSection);

  useEffect(() => {
    if (initialSection) {
      setActiveSection(initialSection);
    }
  }, [initialSection]);

  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const currentSec = SECTIONS[currentIndex] || SECTIONS[0];

  const handleSelectSection = (targetId: string) => {
    // If skipping from s01 without basic required fields, notify user
    if (activeSection === 's01' && targetId !== 's01') {
      const { businessName, contactName, phoneWhatsapp, email } = formData.s01_client;
      if (!businessName.trim() || !contactName.trim() || (!phoneWhatsapp.trim() && !email.trim())) {
        if (onNotifyToast) {
          onNotifyToast('⚠️ Please enter mandatory client details in Step 01 before navigating forward.');
        }
        return;
      }
    }
    setActiveSection(targetId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shortSectionTitles: Record<string, string> = {
    s01: 'Client',
    s02: 'Goals',
    s03: 'Structure',
    s04: 'Design',
    s05: 'Features',
    s06: 'WhatsApp',
    s07: 'Technical',
    s08: 'SEO',
    s09: 'Budget',
    s10: 'Summary',
  };

  return (
    <div className="min-h-screen bg-slate-50/60 dark:bg-[#09090b] text-slate-900 dark:text-slate-100 transition-colors py-6 sm:py-8">
      {/* Centered Container (max-w-3xl) */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Top Header Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111318] p-5 sm:p-6 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-slate-100 dark:border-white/5">
            {/* Back to Website Button */}
            {onBackToHome && (
              <button
                type="button"
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors cursor-pointer w-fit"
              >
                <ArrowLeft size={15} />
                <span>Back to Website</span>
              </button>
            )}

            {/* Discreet Testing & Utility Actions */}
            <div className="flex items-center flex-wrap gap-2 text-xs">
              <button
                type="button"
                onClick={onAutoFillDemo}
                title="Populate realistic sample data for testing"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 bg-slate-100 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors cursor-pointer font-medium"
              >
                <Sparkles size={13} className="text-blue-500" />
                <span>Fill Sample Data</span>
              </button>

              <button
                type="button"
                onClick={onResetForm}
                title="Reset discovery form"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 bg-slate-100 dark:bg-white/5 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
              >
                <RotateCcw size={13} />
                <span className="hidden sm:inline">Reset</span>
              </button>

              <button
                type="button"
                onClick={onOpenPrint}
                title="Print or export PDF dossier"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-100 dark:bg-white/5 transition-colors cursor-pointer font-medium"
              >
                <Printer size={13} />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>

              <button
                type="button"
                onClick={onSaveToVault}
                title="Save draft"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  isSaved
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isSaved ? <Check size={13} /> : <Save size={13} />}
                <span>{isSaved ? 'Saved' : 'Save'}</span>
              </button>
            </div>
          </div>

          {/* Form Title & Progress Bar */}
          <div className="pt-5 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Website Project Requirements Discovery
                </span>
                <h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  Step {currentSec.number} • {currentSec.title}
                </h1>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {scopeAnalysis.overallPercentage}% Complete
                </span>
                <div className="text-[11px] text-slate-400 dark:text-slate-500">
                  {scopeAnalysis.totalAnswered} of 45 Points
                </div>
              </div>
            </div>

            {/* Sleek Progress Bar */}
            <div className="h-2 w-full bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.max(5, scopeAnalysis.overallPercentage)}%` }}
              />
            </div>
          </div>

          {/* Step Stepper Pills */}
          <div className="pt-5 flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
            {SECTIONS.map((sec, idx) => {
              const isActive = sec.id === activeSection;
              const isPast = idx < currentIndex;
              const hasAnswers = (scopeAnalysis.sectionProgress[sec.id]?.answeredCount || 0) > 0;

              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => handleSelectSection(sec.id)}
                  className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : hasAnswers
                      ? 'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200 hover:bg-slate-200'
                      : 'bg-transparent text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  <span className="text-[11px] font-mono">{sec.number}</span>
                  <span>{shortSectionTitles[sec.id] || sec.title}</span>
                  {hasAnswers && !isActive && (
                    <CheckCircle2 size={12} className="text-emerald-500 ml-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Single-Column Active Form Canvas */}
        <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111318] p-5 sm:p-8 shadow-sm">
          <FormCanvas
            formData={formData}
            activeSection={activeSection}
            onSelectSection={handleSelectSection}
            onUpdateSection={onUpdateSection}
            onAutoGenerateSummary={onAutoGenerateSummary}
            scopeAnalysis={scopeAnalysis}
            onOpenPrint={onOpenPrint}
            onSaveToVault={onSaveToVault}
          />
        </div>
      </div>
    </div>
  );
};

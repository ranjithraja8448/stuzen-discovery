import React, { useState } from 'react';
import { ScopeAnalysis } from '../../utils/scopeAnalyzer';
import { DiscoveryFormData } from '../../types/discovery';
import { 
  Activity, 
  Layers, 
  Cpu, 
  Clock, 
  Printer, 
  Save, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  IndianRupee,
  ChevronUp,
  X
} from 'lucide-react';

interface RightLiveBlueprintProps {
  formData: DiscoveryFormData;
  scopeAnalysis: ScopeAnalysis;
  onOpenPrint: () => void;
  onSaveToVault: () => void;
  isSaved: boolean;
  onJumpToSummary: () => void;
}

export const RightLiveBlueprint: React.FC<RightLiveBlueprintProps> = ({
  formData,
  scopeAnalysis,
  onOpenPrint,
  onSaveToVault,
  isSaved,
  onJumpToSummary,
}) => {
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  // Complexity badge color helper
  const getComplexityColor = (tier: ScopeAnalysis['complexityTier']) => {
    switch (tier) {
      case 'Flagship Scale':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/30';
      case 'High Enterprise':
        return 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/30';
      case 'Standard Pro':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/30';
      default:
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/30';
    }
  };

  const renderBlueprintContent = () => (
    <div className="space-y-4 sm:space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Activity size={16} className="text-blue-600 dark:text-cyan-400 animate-pulse" />
          <h3 className="text-xs font-mono font-bold tracking-wider text-slate-800 dark:text-slate-200 uppercase">
            Live Scope Analyzer
          </h3>
        </div>
        <span className="font-mono text-[10px] text-slate-400">REALTIME</span>
      </div>

      {/* Client Name & Target summary */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#12141a] p-3.5 shadow-sm">
        <span className="font-mono text-[10px] font-semibold text-slate-400 uppercase">Target Client</span>
        <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
          {formData.s01_client.businessName || 'Unnamed Prospect'}
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
          {formData.s01_client.contactName ? `${formData.s01_client.contactName} (${formData.s01_client.industry || 'General'})` : 'Awaiting contact details...'}
        </p>
      </div>

      {/* Dynamic Metric Gauges */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Selected Pages */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#12141a] p-3 shadow-sm">
          <div className="flex items-center gap-1.5 text-slate-400 mb-1">
            <Layers size={13} className="text-blue-500" />
            <span className="text-[11px] font-medium">Pages</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-2xl font-bold text-slate-900 dark:text-white">
              {scopeAnalysis.pageCount}
            </span>
            <span className="text-[10px] text-slate-400">selected</span>
          </div>
        </div>

        {/* Selected Features */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#12141a] p-3 shadow-sm">
          <div className="flex items-center gap-1.5 text-slate-400 mb-1">
            <Cpu size={13} className="text-cyan-500" />
            <span className="text-[11px] font-medium">Features</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-2xl font-bold text-slate-900 dark:text-white">
              {scopeAnalysis.featureCount}
            </span>
            <span className="text-[10px] text-slate-400">modules</span>
          </div>
        </div>
      </div>

      {/* Dynamic INR Investment Estimate (ZERO USD) */}
      <div className="rounded-xl border border-blue-500/25 bg-blue-50/40 dark:bg-blue-950/20 p-3.5 shadow-sm">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <IndianRupee size={12} className="text-blue-600 dark:text-cyan-400" />
            Estimated Investment (INR)
          </span>
          <span className="font-mono text-[10px] text-blue-600 dark:text-cyan-400 font-bold uppercase">
            PURE INR
          </span>
        </div>
        <div className="font-mono text-lg font-extrabold text-slate-900 dark:text-white">
          {scopeAnalysis.estimatedPriceRange}
        </div>
        <p className="text-[10px] text-slate-500 mt-0.5">
          Dynamically calibrated from selected pages & feature complexity
        </p>
      </div>

      {/* Complexity Tier Badge */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#12141a] p-3.5 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-slate-500">Engineering Tier</span>
          <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-full border ${getComplexityColor(scopeAnalysis.complexityTier)}`}>
            {scopeAnalysis.complexityTier}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200 dark:border-white/5">
          <span className="text-slate-400 flex items-center gap-1">
            <Clock size={12} /> Estimated Velocity
          </span>
          <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">
            {scopeAnalysis.estimatedWeeks}
          </span>
        </div>
      </div>

      {/* Auto-Recommended Tech Stack */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#12141a] p-3.5 shadow-sm">
        <div className="flex items-center gap-1.5 mb-2.5">
          <Sparkles size={13} className="text-blue-500" />
          <h5 className="font-mono text-xs font-bold tracking-tight text-slate-800 dark:text-slate-200 uppercase">
            Auto-Matched Stack
          </h5>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {scopeAnalysis.recommendedStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 px-2 py-0.8 rounded-md border border-slate-200 dark:border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Internal Summary Callout */}
      <div className="rounded-xl border border-blue-500/20 bg-blue-50/50 dark:bg-blue-950/20 p-3.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-blue-700 dark:text-cyan-300">Section 10 Executive Report</span>
          <button
            type="button"
            onClick={() => {
              onJumpToSummary();
              setIsMobileSheetOpen(false);
            }}
            className="text-[11px] font-mono text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer font-bold"
          >
            <span>View</span>
            <ExternalLink size={11} />
          </button>
        </div>
        <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
          Auto-generate proposal architecture, milestone schedule & sign-off blocks.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="pt-2 border-t border-slate-200 dark:border-white/10 space-y-2">
        <button
          type="button"
          onClick={() => {
            onOpenPrint();
            setIsMobileSheetOpen(false);
          }}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-3.5 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 active:scale-95 transition-all cursor-pointer shadow-md shadow-blue-500/20"
        >
          <Printer size={14} />
          <span>Generate Official PDF</span>
        </button>

        <button
          type="button"
          onClick={onSaveToVault}
          className={`w-full flex items-center justify-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
            isSaved
              ? 'bg-emerald-600/10 border-emerald-500 text-emerald-600 dark:text-emerald-400'
              : 'border-slate-300 dark:border-white/15 bg-white dark:bg-[#12141a] text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'
          }`}
        >
          {isSaved ? <CheckCircle2 size={14} /> : <Save size={14} />}
          <span>{isSaved ? 'Dossier Saved' : 'Save to Internal Vault'}</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* ======================================================== */}
      {/* 1. MOBILE RESPONSIVE BOTTOM BAR & BOTTOM SHEET (< lg)    */}
      {/* ======================================================== */}
      <div className="lg:hidden no-print">
        {/* Fixed Compact Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-[#0c0e14]/95 backdrop-blur-md border-t border-slate-200 dark:border-white/10 px-3 py-2.5 shadow-lg flex items-center justify-between gap-2 transition-colors">
          <div className="min-w-0">
            <div className="flex items-center gap-1 text-[10px] font-mono font-semibold text-blue-600 dark:text-cyan-400">
              <IndianRupee size={11} />
              <span>EST. INVESTMENT</span>
            </div>
            <div className="font-mono text-xs font-bold text-slate-900 dark:text-white truncate">
              {scopeAnalysis.estimatedPriceRange}
            </div>
            <div className="text-[9px] text-slate-500 dark:text-slate-400">
              {scopeAnalysis.pageCount} Pages • {scopeAnalysis.featureCount} Feats • {scopeAnalysis.estimatedWeeks}
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setIsMobileSheetOpen(true)}
              className="inline-flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-white/10 px-2.5 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <span>📊 Scope</span>
              <ChevronUp size={13} />
            </button>

            <button
              type="button"
              onClick={onOpenPrint}
              className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-2.5 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-blue-500 transition-all cursor-pointer"
            >
              <Printer size={13} />
              <span>PDF</span>
            </button>
          </div>
        </div>

        {/* Mobile Slide-Up Modal Bottom Sheet */}
        {isMobileSheetOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-xs animate-fadeIn">
            <div 
              className="fixed inset-0" 
              onClick={() => setIsMobileSheetOpen(false)} 
            />
            <div className="relative w-full max-h-[85vh] bg-white dark:bg-[#0c0e14] rounded-t-2xl p-5 border-t border-slate-200 dark:border-white/15 overflow-y-auto shadow-2xl transition-colors">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-200 dark:border-white/10">
                <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
                  Project Scope & Commercial Blueprint
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileSheetOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X size={18} />
                </button>
              </div>
              {renderBlueprintContent()}
            </div>
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* 2. DESKTOP STICKY SIDEBAR (Screens >= lg)                   */}
      {/* ======================================================== */}
      <aside className="hidden lg:flex w-80 shrink-0 border-l border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#0c0e14]/60 p-5 flex-col justify-between overflow-y-auto no-print">
        {renderBlueprintContent()}
      </aside>
    </>
  );
};

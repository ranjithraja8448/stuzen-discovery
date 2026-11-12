import React from 'react';
import { SECTIONS } from '../../data/discoveryQuestions';
import { ScopeAnalysis } from '../../utils/scopeAnalyzer';
import * as LucideIcons from 'lucide-react';
import { Check } from 'lucide-react';

interface LeftSidebarNavProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  scopeAnalysis: ScopeAnalysis;
}

export const LeftSidebarNav: React.FC<LeftSidebarNavProps> = ({
  activeSection,
  onSelectSection,
  scopeAnalysis,
}) => {
  return (
    <aside className="w-full lg:w-72 shrink-0 border-r border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-[#0c0e14]/60 p-4 lg:p-5 flex flex-col justify-between overflow-y-auto no-print">
      <div>
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-white/10">
          <div>
            <h3 className="text-xs font-mono font-bold tracking-wider text-slate-400 dark:text-slate-400 uppercase">
              Discovery Sections
            </h3>
            <p className="text-[11px] text-slate-500">10 Architected Steps • 45 Questions</p>
          </div>
          <div className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded border border-blue-500/20">
            {scopeAnalysis.overallPercentage}% DONE
          </div>
        </div>

        {/* 10 Sections Stepper */}
        <nav className="space-y-1.5" aria-label="Discovery sections">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            const progress = scopeAnalysis.sectionProgress[sec.id] || { answeredCount: 0, totalCount: sec.questionCount, percentage: 0 };
            const isCompleted = progress.answeredCount >= progress.totalCount && progress.totalCount > 0;
            const Icon = (LucideIcons as any)[sec.iconName] || LucideIcons.Layers;

            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => onSelectSection(sec.id)}
                className={`w-full text-left rounded-xl p-2.5 transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 dark:bg-blue-600'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {/* Step Index in JetBrains Mono */}
                  <span
                    className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : isCompleted
                        ? 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400'
                        : 'bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {sec.number}
                  </span>

                  <div className="min-w-0">
                    <p className={`text-xs font-semibold truncate ${isActive ? 'text-white' : 'text-slate-900 dark:text-slate-200'}`}>
                      {sec.title}
                    </p>
                    <p className={`text-[10px] font-mono ${isActive ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                      {sec.questionRange}
                    </p>
                  </div>
                </div>

                {/* Completion Status Badge */}
                <div className="shrink-0 flex items-center pl-2">
                  {isCompleted ? (
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full ${isActive ? 'bg-white text-blue-600' : 'bg-emerald-500/20 text-emerald-500'}`}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                  ) : (
                    <span
                      className={`font-mono text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : progress.percentage > 0
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-cyan-400 border border-blue-500/20'
                          : 'text-slate-400 dark:text-slate-400'
                      }`}
                    >
                      {progress.percentage}%
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Summary Pill */}
      <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 text-xs">
        <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[11px] mb-1.5">
          <span>Overall Audit Velocity</span>
          <span className="font-mono font-semibold text-slate-700 dark:text-slate-300">
            {scopeAnalysis.totalAnswered} / {scopeAnalysis.totalQuestions}
          </span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-white/10 rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-600 to-cyan-400 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${scopeAnalysis.overallPercentage}%` }}
          />
        </div>
      </div>
    </aside>
  );
};


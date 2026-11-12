import React from 'react';
import * as LucideIcons from 'lucide-react';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle: string;
  questionRange: string;
  iconName?: string;
  answeredCount?: number;
  totalQuestions?: number;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  questionRange,
  iconName,
  answeredCount,
  totalQuestions,
}) => {
  const IconComponent = iconName && (LucideIcons as any)[iconName] ? (LucideIcons as any)[iconName] : null;
  const isComplete = totalQuestions !== undefined && answeredCount !== undefined && answeredCount >= totalQuestions && totalQuestions > 0;
  const percentage = totalQuestions && answeredCount !== undefined ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  return (
    <div className="relative mb-8 pb-6 border-b border-slate-200 dark:border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-500/20 shadow-inner">
            {IconComponent ? <IconComponent size={24} strokeWidth={2.2} /> : null}
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 tracking-wider">
                SECTION {number}
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded border border-slate-200 dark:border-white/5">
                {questionRange}
              </span>
            </div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {title}
            </h2>
          </div>
        </div>

        {totalQuestions !== undefined && answeredCount !== undefined && (
          <div className="flex items-center gap-2">
            <div className="text-right">
              <div className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-200">
                {answeredCount}/{totalQuestions} Answered
              </div>
              <div className="text-[11px] text-slate-500">
                {isComplete ? 'Ready for sign-off' : `${percentage}% section complete`}
              </div>
            </div>
            <div className="h-9 w-9 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10">
              <span className={`font-mono text-xs font-bold ${isComplete ? 'text-emerald-500' : 'text-blue-500'}`}>
                {percentage}%
              </span>
            </div>
          </div>
        )}
      </div>

      <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};


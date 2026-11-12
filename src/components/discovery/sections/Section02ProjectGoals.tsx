import React from 'react';
import { ProjectGoals } from '../../../types/discovery';
import { SectionHeader } from '../SectionHeader';
import { BentoCard } from '../BentoCard';
import { PillTag } from '../PillTag';
import { PURPOSE_OPTIONS, PRIMARY_ACTIONS } from '../../../data/discoveryQuestions';

interface Section02Props {
  data: ProjectGoals;
  onChange: (field: keyof ProjectGoals, value: any) => void;
  answeredCount: number;
}

export const Section02ProjectGoals: React.FC<Section02Props> = ({
  data,
  onChange,
  answeredCount,
}) => {
  const togglePurpose = (id: string) => {
    const exists = data.purposes.includes(id);
    if (exists) {
      onChange('purposes', data.purposes.filter(p => p !== id));
    } else {
      onChange('purposes', [...data.purposes, id]);
    }
  };

  const togglePrimaryAction = (id: string) => {
    const exists = data.primaryAction.includes(id);
    if (exists) {
      onChange('primaryAction', data.primaryAction.filter(a => a !== id));
    } else {
      onChange('primaryAction', [...data.primaryAction, id]);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <SectionHeader
        number="02"
        title="Project Goals & Audience"
        subtitle="Clarify core commercial conversion objectives, ideal customer profile, and high-impact visitor pathways."
        questionRange="Q08–Q11"
        iconName="Target"
        answeredCount={answeredCount}
        totalQuestions={4}
      />

      {/* Q08: Main Purpose Bento Cards (Clean 2-column layout to prevent cramping) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q08 • MAIN PURPOSE OF THE NEW WEBSITE (MULTI-SELECT BENTO)
          </label>
          <span className="text-[10px] text-slate-400 font-mono">
            {data.purposes.length} SELECTED
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Select all strategic objectives this platform must satisfy for your organization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PURPOSE_OPTIONS.map(opt => (
            <BentoCard
              key={opt.id}
              id={opt.id}
              title={opt.label}
              description={opt.desc}
              icon={opt.icon}
              isSelected={data.purposes.includes(opt.id)}
              onSelect={togglePurpose}
              multiSelect={true}
            />
          ))}
        </div>

        {data.purposes.includes('other') && (
          <div className="mt-3">
            <input
              type="text"
              value={data.otherPurpose || ''}
              onChange={e => onChange('otherPurpose', e.target.value)}
              placeholder="Specify custom purpose..."
              className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
        )}
      </div>

      {/* Q09: Target Customers */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q09 • TARGET CUSTOMERS & IDEAL BUYER PERSONAS
          </label>
          <span className="text-[10px] text-slate-400 font-mono">PERSONAS</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Who is your primary customer? (B2B executives, affluent consumers, patient demographics, regional segments, price sensitivity)
        </p>
        <textarea
          rows={3}
          value={data.targetAudience}
          onChange={e => onChange('targetAudience', e.target.value)}
          placeholder="e.g. C-level executives at venture-backed startups, or discerning clients in Bangalore/Chennai seeking premium cosmetic wellness..."
          className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none transition-all"
        />
      </div>

      {/* Q10: 5-Second Visitor Primary Action */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q10 • 5-SECOND PRIMARY CONVERSION ACTION
          </label>
          <span className="text-[10px] text-slate-400 font-mono">CALL-TO-ACTION</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          When a high-intent user visits your site on mobile or desktop, what is the single most important action they should trigger?
        </p>

        <div className="flex flex-wrap gap-2.5">
          {PRIMARY_ACTIONS.map(act => (
            <PillTag
              key={act.id}
              id={act.id}
              label={act.label}
              icon={act.icon}
              isSelected={data.primaryAction.includes(act.id)}
              onToggle={togglePrimaryAction}
            />
          ))}
        </div>
      </div>

      {/* Q11: Business Problem to Solve */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q11 • CORE BUSINESS PROBLEM TO SOLVE
          </label>
          <span className="text-[10px] text-slate-400 font-mono">PAIN POINT</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          What specific bottleneck, lost revenue, poor credibility, or operational drag will this website solve?
        </p>
        <textarea
          rows={3}
          value={data.businessProblemToSolve}
          onChange={e => onChange('businessProblemToSolve', e.target.value)}
          placeholder="e.g. Current site is sluggish (load time > 5s), lacks mobile booking, generates low quality phone calls instead of qualified leads..."
          className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none transition-all"
        />
      </div>
    </div>
  );
};

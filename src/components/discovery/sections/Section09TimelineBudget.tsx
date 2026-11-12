import React from 'react';
import { TimelineBudgetSupport } from '../../../types/discovery';
import { SectionHeader } from '../SectionHeader';
import { BentoCard } from '../BentoCard';
import { BUDGET_TIERS, SUPPORT_TIERS } from '../../../data/discoveryQuestions';
import { Calendar, IndianRupee, Clock, ShieldCheck, UserCheck } from 'lucide-react';

interface Section09Props {
  data: TimelineBudgetSupport;
  onChange: (field: keyof TimelineBudgetSupport, value: any) => void;
  answeredCount: number;
}

export const Section09TimelineBudget: React.FC<Section09Props> = ({
  data,
  onChange,
  answeredCount,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <SectionHeader
        number="09"
        title="Timeline, Budget & Support"
        subtitle="Align target delivery milestones, commercial investment expectations, and post-launch maintenance SLA."
        questionRange="Q39–Q43"
        iconName="CalendarClock"
        answeredCount={answeredCount}
        totalQuestions={5}
      />

      {/* Q39 & Q40: Target Launch Date & Driver */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Q39 */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q39 • TARGET PRODUCTION GO-LIVE DATE
            </label>
            <span className="text-[10px] text-slate-400 font-mono">DEADLINE</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Select your ideal target date for public DNS cutover and commercial deployment.
          </p>
          <div className="space-y-3">
            <input
              type="date"
              value={data.targetLaunchDate}
              onChange={e => onChange('targetLaunchDate', e.target.value)}
              className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2.5 text-sm font-mono text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none cursor-pointer"
            />
            <input
              type="text"
              value={data.timelineSpeed}
              onChange={e => onChange('timelineSpeed', e.target.value)}
              placeholder="e.g. Standard 4–6 weeks sprint / Urgent 3 weeks fast-track"
              className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Q40 */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q40 • HARD COMMERCIAL DRIVER FOR THE DEADLINE
            </label>
            <span className="text-[10px] text-slate-400 font-mono">CATALYST</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Is there an external event dictating this date? (e.g. trade expo, product unveil, press release, investor board meeting).
          </p>
          <textarea
            rows={3}
            value={data.deadlineReason}
            onChange={e => onChange('deadlineReason', e.target.value)}
            placeholder="e.g. Grand opening of our new Indiranagar clinic on Dec 20 with chief guest & press coverage..."
            className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none transition-all"
          />
        </div>
      </div>

      {/* Q41: Expected Project Budget Tier (PURE INDIAN RUPEES) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IndianRupee size={15} className="text-blue-500" />
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q41 • COMMERCIAL INVESTMENT BUDGET RANGE SELECTOR (PURE INR ₹)
            </label>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">INVESTMENT BRACKET</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Enables Stuzen architecture team to calibrate appropriate engineering complexity, design fidelity, and third-party tooling.
        </p>

        {/* Clean 2-column layout to prevent cramping */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BUDGET_TIERS.map(tier => (
            <BentoCard
              key={tier.id}
              id={tier.id}
              title={tier.label}
              description={tier.desc}
              badge={tier.range}
              icon="IndianRupee"
              isSelected={data.budgetTier === tier.id}
              onSelect={id => onChange('budgetTier', id)}
              multiSelect={false}
            />
          ))}
        </div>
      </div>

      {/* Q42: Post-Launch Support Tier */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q42 • POST-LAUNCH CARE & ONGOING MAINTENANCE SLA
          </label>
          <span className="text-[10px] text-slate-400 font-mono">SUPPORT SLA</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          How do you wish to handle software updates, security patching, and incremental feature additions after go-live?
        </p>

        {/* Clean 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SUPPORT_TIERS.map(tier => (
            <BentoCard
              key={tier.id}
              id={tier.id}
              title={tier.label}
              description={tier.desc}
              icon="ShieldCheck"
              isSelected={data.supportCareTier === tier.id}
              onSelect={id => onChange('supportCareTier', id)}
              multiSelect={false}
            />
          ))}
        </div>
      </div>

      {/* Q43: Final Approver */}
      <div className="rounded-xl border border-blue-500/20 bg-blue-50/30 dark:bg-blue-950/20 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q43 • COMMERCIAL SIGNING AUTHORITY & FINAL ARBITER
          </label>
          <span className="text-[10px] text-blue-500 font-mono">SIGNATORY</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Whose signature is required on contract invoices and project milestone acceptance certificates?
        </p>
        <input
          type="text"
          value={data.finalApprover}
          onChange={e => onChange('finalApprover', e.target.value)}
          placeholder="e.g. Dr. Vikram Malhotra (Founder & CMO) / Karan Singhania (Managing Partner)"
          className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-all"
        />
      </div>
    </div>
  );
};

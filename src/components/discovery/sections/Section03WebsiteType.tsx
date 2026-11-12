import React from 'react';
import { WebsiteTypeStructure } from '../../../types/discovery';
import { SectionHeader } from '../SectionHeader';
import { BentoCard } from '../BentoCard';
import { PillTag } from '../PillTag';
import { WEBSITE_TYPES, PAGE_OPTIONS } from '../../../data/discoveryQuestions';

interface Section03Props {
  data: WebsiteTypeStructure;
  onChange: (field: keyof WebsiteTypeStructure, value: any) => void;
  answeredCount: number;
}

export const Section03WebsiteType: React.FC<Section03Props> = ({
  data,
  onChange,
  answeredCount,
}) => {
  const togglePage = (id: string) => {
    const exists = data.requiredPages.includes(id);
    if (exists) {
      onChange('requiredPages', data.requiredPages.filter(p => p !== id));
    } else {
      onChange('requiredPages', [...data.requiredPages, id]);
    }
  };

  const selectAllPages = () => {
    const all = PAGE_OPTIONS.map(p => p.id);
    onChange('requiredPages', all);
  };

  const clearAllPages = () => {
    onChange('requiredPages', ['home', 'contact']);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <SectionHeader
        number="03"
        title="Website Type & Page Structure"
        subtitle="Define the core platform archetype, required page architecture, and content production pipeline."
        questionRange="Q12–Q16"
        iconName="LayoutGrid"
        answeredCount={answeredCount}
        totalQuestions={5}
      />

      {/* Q12: Website Type Bento Cards (Clean 2-column layout to prevent cramping) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q12 • PRIMARY WEBSITE ARCHETYPE
          </label>
          <span className="text-[10px] text-slate-400 font-mono">CHOOSE ONE PRIMARY</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Select the core technical architecture that governs navigation, database schema, and layouts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WEBSITE_TYPES.map(type => (
            <BentoCard
              key={type.id}
              id={type.id}
              title={type.label}
              description={type.desc}
              icon={type.icon}
              isSelected={data.websiteType === type.id}
              onSelect={id => onChange('websiteType', id)}
              multiSelect={false}
            />
          ))}
        </div>
      </div>

      {/* Q13: Required Pages Grid */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q13 • REQUIRED PAGES & INFORMATION ARCHITECTURE
            </label>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Select all sitemap pages to be custom-designed and coded.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={selectAllPages}
              className="text-[11px] font-mono font-medium text-blue-600 dark:text-cyan-400 hover:underline cursor-pointer"
            >
              Select Standard Suite
            </button>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <button
              type="button"
              onClick={clearAllPages}
              className="text-[11px] font-mono font-medium text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {PAGE_OPTIONS.map(page => (
            <PillTag
              key={page.id}
              id={page.id}
              label={page.label}
              isSelected={data.requiredPages.includes(page.id)}
              onToggle={togglePage}
              className="w-full justify-between"
              size="sm"
            />
          ))}
        </div>

        <div className="mt-3">
          <input
            type="text"
            value={data.otherRequiredPages || ''}
            onChange={e => onChange('otherRequiredPages', e.target.value)}
            placeholder="Other specific pages (e.g. VIP Member Lounge, Virtual Tour, Calculators)..."
            className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Q14 & Q15: Content Readiness & Provider */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Q14 */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q14 • CONTENT READINESS STATUS
            </label>
            <span className="text-[10px] text-slate-400 font-mono">COPY & ASSETS</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            How prepared is the written copy, product catalogs, and high-resolution photography?
          </p>
          <div className="space-y-2">
            {[
              { id: 'all_ready', label: 'All copy & high-res media 100% ready' },
              { id: 'partially_ready', label: 'Partially ready — rough draft or old website copy exists' },
              { id: 'need_copywriting', label: 'Need Stuzen professional UX copywriting & content studio' },
              { id: 'need_translation', label: 'Drafted in one language, need translation & localization' },
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => onChange('contentReadiness', opt.label)}
                className={`w-full text-left p-2.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                  data.contentReadiness === opt.label
                    ? 'bg-blue-600/10 border-blue-500 text-blue-600 dark:text-cyan-300 dark:bg-blue-950/40'
                    : 'border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Q15 */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q15 • CONTENT PROVIDER RESPONSIBILITY
            </label>
            <span className="text-[10px] text-slate-400 font-mono">OWNERSHIP</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Who will author textual statements, provide licensed photos, and sign off on technical specs?
          </p>
          <div className="space-y-2">
            {[
              { id: 'client_team', label: 'Client team provides all text, logos, and photos directly' },
              { id: 'collaborative', label: 'Mix / Collaborative (Client gives bullet points, Stuzen polishes)' },
              { id: 'stuzen_end_to_end', label: 'Stuzen End-to-End Content Studio (Copywriting + Stock curation)' },
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => onChange('contentProvider', opt.label)}
                className={`w-full text-left p-2.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                  data.contentProvider === opt.label
                    ? 'bg-blue-600/10 border-blue-500 text-blue-600 dark:text-cyan-300 dark:bg-blue-950/40'
                    : 'border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Q16: Replacement Details & URL Redirects */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q16 • EXISTING SITE REPLACEMENT & SEO REDIRECT PRESERVATION
          </label>
          <span className="text-[10px] text-slate-400 font-mono">MIGRATION</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Does this project replace an existing website? List any critical ranking URLs, high-traffic pages, or backlinks that require 301 preservation redirects.
        </p>
        <textarea
          rows={2}
          value={data.replacementDetails}
          onChange={e => onChange('replacementDetails', e.target.value)}
          placeholder="e.g. Yes, replacing WordPress site on domain.in. Preserve /services/laser-care and /about-us URLs to retain Google rankings..."
          className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none transition-all"
        />
      </div>
    </div>
  );
};

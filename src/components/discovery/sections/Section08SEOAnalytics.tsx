import React from 'react';
import { SEOAnalyticsMarketing } from '../../../types/discovery';
import { SectionHeader } from '../SectionHeader';
import { BentoCard } from '../BentoCard';
import { PillTag } from '../PillTag';
import { SEO_TIERS, ANALYTICS_OPTIONS } from '../../../data/discoveryQuestions';

interface Section08Props {
  data: SEOAnalyticsMarketing;
  onChange: (field: keyof SEOAnalyticsMarketing, value: any) => void;
  answeredCount: number;
}

export const Section08SEOAnalytics: React.FC<Section08Props> = ({
  data,
  onChange,
  answeredCount,
}) => {
  const toggleAnalytics = (id: string) => {
    const exists = data.analyticsTracking.includes(id);
    if (exists) {
      onChange('analyticsTracking', data.analyticsTracking.filter(a => a !== id));
    } else {
      onChange('analyticsTracking', [...data.analyticsTracking, id]);
    }
  };

  const toggleAdPlan = (plan: string) => {
    const exists = data.paidAdsPlans.includes(plan);
    if (exists) {
      onChange('paidAdsPlans', data.paidAdsPlans.filter(p => p !== plan));
    } else {
      onChange('paidAdsPlans', [...data.paidAdsPlans, plan]);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <SectionHeader
        number="08"
        title="SEO, Analytics & Marketing"
        subtitle="Establish search discovery visibility, conversion tracking telemetry, and digital ad acquisition channels."
        questionRange="Q35–Q38"
        iconName="BarChart3"
        answeredCount={answeredCount}
        totalQuestions={4}
      />

      {/* Q35: SEO Support Tier */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q35 • SEO (SEARCH ENGINE OPTIMIZATION) SERVICE LEVEL
          </label>
          <span className="text-[10px] text-slate-400 font-mono">ORGANIC REACH</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Every Stuzen site includes baseline technical SEO markup. Choose if ongoing organic ranking velocity is desired.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {SEO_TIERS.map(tier => (
            <BentoCard
              key={tier.id}
              id={tier.id}
              title={tier.label}
              description={tier.desc}
              icon="Search"
              isSelected={data.seoTier === tier.id}
              onSelect={id => onChange('seoTier', id)}
              multiSelect={false}
            />
          ))}
        </div>
      </div>

      {/* Q36: Target Locations & Search Terms */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q36 • PRIORITY GEOGRAPHIES & TARGET SEARCH KEYWORDS
          </label>
          <span className="text-[10px] text-slate-400 font-mono">KEYWORDS</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          What exact keywords would an ideal customer type into Google to find your services? List key target cities.
        </p>
        <textarea
          rows={3}
          value={data.targetLocationsAndKeywords}
          onChange={e => onChange('targetLocationsAndKeywords', e.target.value)}
          placeholder="e.g. 'Best clinical dermatologist Indiranagar', 'Luxury laser facial Bangalore', 'Venture capital fund Bangalore'..."
          className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none transition-all"
        />
      </div>

      {/* Q37: Analytics & Conversion Tracking */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q37 • TELEMETRY, ANALYTICS & CONVERSION EVENT TRACKING
          </label>
          <span className="text-[10px] text-slate-400 font-mono">TRACKING</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Select tracking pixels and telemetry to measure button clicks, form submissions, and marketing attribution.
        </p>

        <div className="flex flex-wrap gap-2.5">
          {ANALYTICS_OPTIONS.map(opt => (
            <PillTag
              key={opt.id}
              id={opt.id}
              label={opt.label}
              isSelected={data.analyticsTracking.includes(opt.id)}
              onToggle={toggleAnalytics}
            />
          ))}
        </div>
      </div>

      {/* Q38: Paid Ads Plans */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q38 • PAID CAMPAIGNS & LAUNCH MARKETING CHANNELS
          </label>
          <span className="text-[10px] text-slate-400 font-mono">ACQUISITION</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Will you run performance marketing traffic immediately upon launch?
        </p>

        <div className="flex flex-wrap gap-2">
          {[
            'Google Ads Search & Performance Max',
            'Meta (Instagram / Facebook) Ads',
            'LinkedIn Sponsored B2B Campaigns',
            'Influencer PR / Media Press Release',
            'Organic Email Launch Blast',
            'No paid campaigns planned',
          ].map(plan => (
            <PillTag
              key={plan}
              id={plan}
              label={plan}
              isSelected={data.paidAdsPlans.includes(plan)}
              onToggle={toggleAdPlan}
              size="sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

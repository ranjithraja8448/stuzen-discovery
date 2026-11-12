import React from 'react';
import { TechnicalOperational } from '../../../types/discovery';
import { SectionHeader } from '../SectionHeader';
import { BentoCard } from '../BentoCard';
import { PillTag } from '../PillTag';
import { DOMAIN_OPTIONS, HOSTING_OPTIONS, SECURITY_ITEMS } from '../../../data/discoveryQuestions';

interface Section07Props {
  data: TechnicalOperational;
  onChange: (field: keyof TechnicalOperational, value: any) => void;
  answeredCount: number;
}

export const Section07TechnicalOperational: React.FC<Section07Props> = ({
  data,
  onChange,
  answeredCount,
}) => {
  const toggleSecurityItem = (id: string) => {
    const exists = data.securityUptimeRequirements.includes(id);
    if (exists) {
      onChange('securityUptimeRequirements', data.securityUptimeRequirements.filter(s => s !== id));
    } else {
      onChange('securityUptimeRequirements', [...data.securityUptimeRequirements, id]);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <SectionHeader
        number="07"
        title="Technical & Operational"
        subtitle="Manage DNS domain registry, cloud edge hosting, enterprise mailboxes, and cybersecurity protocols."
        questionRange="Q30–Q34"
        iconName="ShieldCheck"
        answeredCount={answeredCount}
        totalQuestions={5}
      />

      {/* Q30: Domain Status */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q30 • DOMAIN REGISTRY STATUS & DNS CONTROL
          </label>
          <span className="text-[10px] text-slate-400 font-mono">DOMAIN</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Where does your current domain name reside, or do you need Stuzen to register a new domain asset (.in / .com)?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {DOMAIN_OPTIONS.map(opt => (
            <BentoCard
              key={opt.id}
              id={opt.id}
              title={opt.label}
              description={opt.desc}
              icon="Globe"
              isSelected={data.domainStatus === opt.id}
              onSelect={id => onChange('domainStatus', id)}
              multiSelect={false}
            />
          ))}
        </div>

        <div className="mt-2">
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
            Domain Name / Registrar Details
          </span>
          <input
            type="text"
            value={data.domainName || ''}
            onChange={e => onChange('domainName', e.target.value)}
            placeholder="e.g. brand.in (Managed on GoDaddy / Cloudflare)"
            className="mt-1 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Q31: Hosting Status */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q31 • CLOUD HOSTING ARCHITECTURE & INFRASTRUCTURE
          </label>
          <span className="text-[10px] text-slate-400 font-mono">INFRASTRUCTURE</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Stuzen Managed Edge Cloud provides automatic global CDN routing, instant SSL, and 99.99% uptime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {HOSTING_OPTIONS.map(opt => (
            <BentoCard
              key={opt.id}
              id={opt.id}
              title={opt.label}
              description={opt.desc}
              icon="Server"
              isSelected={data.hostingStatus === opt.id}
              onSelect={id => onChange('hostingStatus', id)}
              multiSelect={false}
            />
          ))}
        </div>
      </div>

      {/* Q32 & Q33: Business Email & Migration Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Q32 */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q32 • PROFESSIONAL BUSINESS EMAIL REQUIREMENT
            </label>
            <span className="text-[10px] text-slate-400 font-mono">EMAIL</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Branded corporate mailboxes (e.g. name@yourbrand.in) on Google Workspace or Microsoft 365.
          </p>
          <div className="space-y-2">
            {[
              'Already configured (Google Workspace / M365)',
              'Need Stuzen to set up Google Workspace (Gmail suite)',
              'Need Stuzen to set up Microsoft 365',
              'Need Zoho Mail / Affordable custom email',
              'Not required right now',
            ].map(mailOpt => (
              <button
                key={mailOpt}
                type="button"
                onClick={() => onChange('businessEmailNeed', mailOpt)}
                className={`w-full text-left p-2.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                  data.businessEmailNeed === mailOpt
                    ? 'bg-blue-600/10 border-blue-500 text-blue-600 dark:text-cyan-300 dark:bg-blue-950/40'
                    : 'border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                {mailOpt}
              </button>
            ))}
          </div>
        </div>

        {/* Q33 */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q33 • LEGACY DATA MIGRATION DETAILS
            </label>
            <span className="text-[10px] text-slate-400 font-mono">MIGRATION</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Do you need blog posts, past orders, user accounts, or reviews migrated from an old database?
          </p>
          <textarea
            rows={4}
            value={data.migrationDetails}
            onChange={e => onChange('migrationDetails', e.target.value)}
            placeholder="e.g. Migrate 35 articles from WordPress; export customer list from Shopify; keep user login credentials intact..."
            className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none transition-all"
          />
        </div>
      </div>

      {/* Q34: Security, Access, Backup Requirements */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q34 • CYBERSECURITY, BACKUP & COMPLIANCE REQUIREMENTS
          </label>
          <span className="text-[10px] text-slate-400 font-mono">SECURITY</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Select all mandatory security safeguards and compliance standards required for deployment.
        </p>

        <div className="flex flex-wrap gap-2.5">
          {SECURITY_ITEMS.map(sec => (
            <PillTag
              key={sec.id}
              id={sec.id}
              label={sec.label}
              isSelected={data.securityUptimeRequirements.includes(sec.id)}
              onToggle={toggleSecurityItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

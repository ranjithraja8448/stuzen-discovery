import React from 'react';
import { ClientDetails } from '../../../types/discovery';
import { SectionHeader } from '../SectionHeader';
import { Building2, User, Phone, Mail, Globe, MapPin, CheckSquare, Sparkles } from 'lucide-react';

interface Section01Props {
  data: ClientDetails;
  onChange: (field: keyof ClientDetails, value: string) => void;
  answeredCount: number;
}

export const Section01ClientDetails: React.FC<Section01Props> = ({
  data,
  onChange,
  answeredCount,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <SectionHeader
        number="01"
        title="Client & Business Details"
        subtitle="Establish the primary commercial identity, key stakeholders, and geographical market focus."
        questionRange="Q01–Q07"
        iconName="Building2"
        answeredCount={answeredCount}
        totalQuestions={7}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Q01: Contact Person's Full Name & Designation */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q01 • CONTACT PERSON & DESIGNATION
            </label>
            <span className="text-[10px] text-slate-400 font-mono">PRIMARY</span>
          </div>
          <div className="space-y-3">
            <div>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Full Name</span>
              <input
                type="text"
                value={data.contactName}
                onChange={e => onChange('contactName', e.target.value)}
                placeholder="e.g. Dr. Vikram Malhotra / Sarah Jenkins"
                className="mt-1 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-all"
              />
            </div>
            <div>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Designation / Role</span>
              <input
                type="text"
                value={data.contactDesignation}
                onChange={e => onChange('contactDesignation', e.target.value)}
                placeholder="e.g. Founder & CEO / Managing Partner"
                className="mt-1 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Q02: Business / Brand / Trading Name */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q02 • BUSINESS / BRAND NAME
            </label>
            <span className="text-[10px] text-slate-400 font-mono">ORGANIZATION</span>
          </div>
          <div>
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Official Brand Name</span>
            <input
              type="text"
              value={data.businessName}
              onChange={e => onChange('businessName', e.target.value)}
              placeholder="e.g. Aura Luxe Clinical Aesthetics / Nexora Capital"
              className="mt-1 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>
          <p className="text-[11px] text-slate-500">
            Exact legal or trademarked brand name as it will appear across header & legal footer.
          </p>
        </div>

        {/* Q03: Industry or Sector */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q03 • INDUSTRY & BUSINESS SECTOR
            </label>
            <span className="text-[10px] text-slate-400 font-mono">VERTICAL</span>
          </div>
          <div>
            <input
              type="text"
              value={data.industry}
              onChange={e => onChange('industry', e.target.value)}
              placeholder="e.g. Luxury Healthcare / FinTech SaaS / B2B Logistics / Architecture"
              className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>
          <p className="text-[11px] text-slate-500">
            Helps calibrate industry benchmark typography, regulatory compliance, and visitor intent.
          </p>
        </div>

        {/* Q04: Primary Phone / WhatsApp & Email */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q04 • CONTACT CHANNELS
            </label>
            <span className="text-[10px] text-slate-400 font-mono">CHANNELS</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Phone / WhatsApp</span>
              <input
                type="text"
                value={data.phoneWhatsapp}
                onChange={e => onChange('phoneWhatsapp', e.target.value)}
                placeholder="+91 98450 12890"
                className="mt-1 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-all"
              />
            </div>
            <div>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Official Email</span>
              <input
                type="email"
                value={data.email}
                onChange={e => onChange('email', e.target.value)}
                placeholder="contact@brand.com"
                className="mt-1 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Q05: Website / Social Links */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q05 • DIGITAL FOOTPRINT (CURRENT URL & SOCIALS)
            </label>
            <span className="text-[10px] text-slate-400 font-mono">ONLINE</span>
          </div>
          <div className="space-y-3">
            <input
              type="text"
              value={data.websiteUrl}
              onChange={e => onChange('websiteUrl', e.target.value)}
              placeholder="Current URL (e.g. https://brand-old.com or 'None / New Venture')"
              className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-all"
            />
            <input
              type="text"
              value={data.socialLinks}
              onChange={e => onChange('socialLinks', e.target.value)}
              placeholder="Instagram / LinkedIn / YouTube handles"
              className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Q06: Description of Products/Services & Location */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q06 • OFFERINGS & GEOGRAPHIC TERRITORY
            </label>
            <span className="text-[10px] text-slate-400 font-mono">OFFERINGS</span>
          </div>
          <div className="space-y-3">
            <textarea
              rows={2}
              value={data.businessDescription}
              onChange={e => onChange('businessDescription', e.target.value)}
              placeholder="Brief summary of offerings, products or service categories..."
              className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-all resize-none"
            />
            <input
              type="text"
              value={data.primaryLocation}
              onChange={e => onChange('primaryLocation', e.target.value)}
              placeholder="Primary city / countries served (e.g. Bangalore, Dubai, Pan-India)"
              className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Q07: Main Decision Maker */}
        <div className="md:col-span-2 rounded-xl border border-blue-500/20 bg-blue-50/20 dark:bg-blue-950/20 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q07 • PRIMARY CONTACT & FINAL SIGN-OFF AUTHORITY
            </label>
            <span className="text-[10px] text-blue-500 font-mono">DECISION MAKER</span>
          </div>
          <input
            type="text"
            value={data.mainDecisionMaker}
            onChange={e => onChange('mainDecisionMaker', e.target.value)}
            placeholder="Who has final milestone approval, commercial sign-off, and domain access authority?"
            className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-all"
          />
        </div>
      </div>
    </div>
  );
};


import React from 'react';
import { DiscoveryFormData, MaterialsReceived, InternalProjectSummary, DiscoverySignOff } from '../../../types/discovery';
import { SectionHeader } from '../SectionHeader';
import { PillTag } from '../PillTag';
import { Sparkles, FileSignature, CheckCircle2, PackageCheck, AlertCircle, RefreshCw, MessageCircle, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Section10Props {
  data: DiscoveryFormData['s10_final'];
  fullFormData: DiscoveryFormData;
  onChangeFinal: (field: keyof DiscoveryFormData['s10_final'], value: any) => void;
  onAutoGenerateSummary: () => void;
  answeredCount: number;
}

export const Section10SummarySignoff: React.FC<Section10Props> = ({
  data,
  fullFormData,
  onChangeFinal,
  onAutoGenerateSummary,
  answeredCount,
}) => {
  const toggleMaterial = (key: keyof MaterialsReceived) => {
    const updated = {
      ...data.materialsReceived,
      [key]: !data.materialsReceived[key],
    };
    onChangeFinal('materialsReceived', updated);
  };

  const updateSummaryField = (key: keyof InternalProjectSummary, val: string) => {
    const updated = {
      ...data.internalSummary,
      [key]: val,
    };
    onChangeFinal('internalSummary', updated);
  };

  const updateSignOff = (key: keyof DiscoverySignOff, val: any) => {
    const updated = {
      ...data.signOff,
      [key]: val,
    };
    onChangeFinal('signOff', updated);
  };

  const handleGenerateClick = () => {
    onAutoGenerateSummary();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#2563EB', '#06B6D4', '#10B981'],
    });
  };

  const materialsList: { key: keyof MaterialsReceived; label: string }[] = [
    { key: 'logo', label: 'Vector Logo (SVG / AI / PNG)' },
    { key: 'brandGuidelines', label: 'Brand Guidelines / Typography Rules' },
    { key: 'textContent', label: 'Written Text / Copywriting Drafts' },
    { key: 'imagesVideos', label: 'High-Res Images & Video Assets' },
    { key: 'productCatalogue', label: 'Product Catalogue / SKU Inventory' },
    { key: 'existingCredentials', label: 'Existing Website & CMS Credentials' },
    { key: 'domainHostingAccess', label: 'Domain DNS & Cloud Hosting Access' },
    { key: 'referenceSites', label: 'Benchmark Reference Websites' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <SectionHeader
        number="10"
        title="Final Notes, Materials & Internal Summary"
        subtitle="Specify critical success factors, audit materials received, generate internal proposal breakdown, and execute discovery sign-off."
        questionRange="Q44–Q45 + A–F"
        iconName="FileSignature"
        answeredCount={answeredCount}
        totalQuestions={2}
      />

      {/* Q44: Most Important Success Factor */}
      <div className="rounded-xl border border-blue-500/30 bg-blue-50/20 dark:bg-blue-950/20 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q44 • THE SINGLE MOST IMPORTANT THING TO GET RIGHT
          </label>
          <span className="text-[10px] text-blue-500 font-mono">NORTH STAR METRIC</span>
        </div>
        <p className="text-xs text-slate-500">
          If you look back 6 months after launching this website, what single outcome or feeling guarantees this project is deemed a resounding success?
        </p>
        <textarea
          rows={3}
          value={data.mostImportantSuccessFactor}
          onChange={e => onChangeFinal('mostImportantSuccessFactor', e.target.value)}
          placeholder="e.g. Aura Luxe must be perceived as the undisputed luxury cosmetic authority in South India. Bookings must convert seamlessly on mobile in under 60 seconds with zero friction..."
          className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none transition-all"
        />
      </div>

      {/* Q45: Undiscussed Concerns or Constraints */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q45 • UNADDRESSED CONSTRAINTS, CONCERNS OR TECH PREFERENCES
          </label>
          <span className="text-[10px] text-slate-400 font-mono">RISK MITIGATION</span>
        </div>
        <p className="text-xs text-slate-500">
          Any other requirement, technical standard, past agency frustration, or stakeholder pet peeve we should be aware of?
        </p>
        <textarea
          rows={2}
          value={data.unaddressedConcerns}
          onChange={e => onChangeFinal('unaddressedConcerns', e.target.value)}
          placeholder="e.g. Medical before/after photo disclaimer compliance; strict adherence to WCAG accessibility; avoid vendor lock-in..."
          className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none transition-all"
        />
      </div>

      {/* Client Materials Received Checklist */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PackageCheck size={18} className="text-emerald-500" />
            <label className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 uppercase">
              Client Materials Received Checklist
            </label>
          </div>
          <span className="text-[10px] font-mono text-slate-400">STAGE GATE AUDIT</span>
        </div>
        <p className="text-xs text-slate-500">
          Check off which client materials have been handed over to the Stuzen engineering team to commence Phase 1.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {materialsList.map(mat => {
            const isChecked = !!data.materialsReceived[mat.key];
            return (
              <PillTag
                key={mat.key}
                id={mat.key}
                label={mat.label}
                isSelected={isChecked}
                onToggle={() => toggleMaterial(mat.key)}
                size="sm"
                className="w-full justify-between"
              />
            );
          })}
        </div>

        <div className="pt-2">
          <input
            type="text"
            value={data.materialsReceived.otherMaterials || ''}
            onChange={e => {
              const updated = { ...data.materialsReceived, otherMaterials: e.target.value };
              onChangeFinal('materialsReceived', updated);
            }}
            placeholder="Other materials received (e.g. 4K clinic RAW photos, doctor CV bios, trade license)..."
            className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Internal Project Summary (A–F) */}
      <div className="rounded-2xl border-2 border-blue-500/30 bg-gradient-to-b from-blue-50/30 to-white dark:from-[#0d1322] dark:to-[#0c0e14] p-6 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-blue-500/20">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 bg-blue-100 dark:bg-blue-900/50 px-2 py-0.5 rounded">
                INTERNAL PROJECT BLUEPRINT
              </span>
              <span className="text-xs text-slate-400">STUZEN SOLUTIONS DESK</span>
            </div>
            <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
              Executive Proposal Synthesis (A through F)
            </h3>
          </div>

          <button
            type="button"
            onClick={handleGenerateClick}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/25 hover:from-blue-500 hover:to-cyan-500 active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles size={14} className="animate-spin" style={{ animationDuration: '4s' }} />
            <span>✨ Auto-Generate Summary from Answers</span>
          </button>
        </div>

        <div className="space-y-4">
          {/* A. Recommended Website Type & Architecture */}
          <div>
            <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
              A. RECOMMENDED WEBSITE TYPE & ARCHITECTURE SUMMARY
            </label>
            <textarea
              rows={2}
              value={data.internalSummary.recommendedArchitecture}
              onChange={e => updateSummaryField('recommendedArchitecture', e.target.value)}
              placeholder="Recommended frontend stack, database, and hosting architecture..."
              className="mt-1.5 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none"
            />
          </div>

          {/* B. Agreed Pages & Key Features */}
          <div>
            <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
              B. AGREED PAGES & KEY FUNCTIONAL FEATURES
            </label>
            <textarea
              rows={2}
              value={data.internalSummary.agreedPagesFeatures}
              onChange={e => updateSummaryField('agreedPagesFeatures', e.target.value)}
              placeholder="Agreed page list, functional modules, and primary user workflow..."
              className="mt-1.5 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none"
            />
          </div>

          {/* C. Integrations & Recurring Costs */}
          <div>
            <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
              C. INTEGRATIONS & ESTIMATED 3RD-PARTY RECURRING COSTS
            </label>
            <textarea
              rows={2}
              value={data.internalSummary.integrationsAndRecurringCosts}
              onChange={e => updateSummaryField('integrationsAndRecurringCosts', e.target.value)}
              placeholder="Cloud hosting, WhatsApp Cloud API, payment gateway, email seats..."
              className="mt-1.5 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none"
            />
          </div>

          {/* D. Exclusions / Phase 2 Items */}
          <div>
            <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
              D. EXCLUSIONS & PHASE 2 ROADMAP ITEMS
            </label>
            <textarea
              rows={2}
              value={data.internalSummary.exclusionsPhase2}
              onChange={e => updateSummaryField('exclusionsPhase2', e.target.value)}
              placeholder="Items explicitly out of scope for Phase 1 (e.g. native mobile app, AI scan)..."
              className="mt-1.5 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none"
            />
          </div>

          {/* E. Delivery Milestones */}
          <div>
            <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
              E. ESTIMATED DELIVERY SPRINTS & MILESTONES
            </label>
            <textarea
              rows={3}
              value={data.internalSummary.deliveryMilestones}
              onChange={e => updateSummaryField('deliveryMilestones', e.target.value)}
              placeholder="Sprint 1: Wireframes, Sprint 2: UI Design, Sprint 3: Development, Sprint 4: QA & Deploy..."
              className="mt-1.5 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none font-mono"
            />
          </div>

          {/* F. Quotation & Payment Milestones */}
          <div>
            <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
              F. COMMERCIAL QUOTATION BREAKDOWN & PAYMENT STAGES
            </label>
            <textarea
              rows={2}
              value={data.internalSummary.quotationPaymentTerms}
              onChange={e => updateSummaryField('quotationPaymentTerms', e.target.value)}
              placeholder="Payment terms: e.g. 40% Advance upon contract, 40% upon staging review, 20% on go-live..."
              className="mt-1.5 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none"
            />
          </div>
        </div>
      </div>

      {/* Discovery Acknowledgement & Sign-off Block */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-6 shadow-sm space-y-5">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-white/10">
          <FileSignature size={18} className="text-blue-500" />
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            Discovery Scope Acknowledgement & Stakeholder Sign-Off
          </h4>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed">
          By acknowledging below, both Client and Stuzen Technologies confirm that the requirements gathered in this 45-point discovery session accurately capture the project scope, technical specifications, and commercial milestones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Client Sign-off */}
          <div className="rounded-lg p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-3">
            <span className="font-mono text-[11px] font-bold text-blue-600 dark:text-cyan-400 uppercase">
              CLIENT REPRESENTATIVE
            </span>
            <div>
              <span className="text-[11px] text-slate-400">Representative Name</span>
              <input
                type="text"
                value={data.signOff.clientRepName}
                onChange={e => updateSignOff('clientRepName', e.target.value)}
                placeholder="Client Signatory Name"
                className="mt-1 w-full rounded border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none"
              />
            </div>
            <div>
              <span className="text-[11px] text-slate-400">Title / Designation</span>
              <input
                type="text"
                value={data.signOff.clientRepTitle}
                onChange={e => updateSignOff('clientRepTitle', e.target.value)}
                placeholder="e.g. Founder & CEO"
                className="mt-1 w-full rounded border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none"
              />
            </div>
            <div>
              <span className="text-[11px] text-slate-400">Sign-off Date</span>
              <input
                type="date"
                value={data.signOff.clientSignDate}
                onChange={e => updateSignOff('clientSignDate', e.target.value)}
                className="mt-1 w-full rounded border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3 py-1.5 text-xs font-mono text-slate-900 dark:text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Stuzen Sign-off */}
          <div className="rounded-lg p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-3">
            <span className="font-mono text-[11px] font-bold text-blue-600 dark:text-cyan-400 uppercase">
              STUZEN TECHNOLOGIES
            </span>
            <div>
              <span className="text-[11px] text-slate-400">Lead Solutions Architect</span>
              <input
                type="text"
                value={data.signOff.stuzenRepName}
                onChange={e => updateSignOff('stuzenRepName', e.target.value)}
                placeholder="Stuzen Representative"
                className="mt-1 w-full rounded border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none"
              />
            </div>
            <div>
              <span className="text-[11px] text-slate-400">Sign-off Date</span>
              <input
                type="date"
                value={data.signOff.stuzenSignDate}
                onChange={e => updateSignOff('stuzenSignDate', e.target.value)}
                className="mt-1 w-full rounded border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3 py-1.5 text-xs font-mono text-slate-900 dark:text-white focus:outline-none"
              />
            </div>
            <div className="pt-2 flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-mono text-emerald-500">
                Official Stuzen Discovery Certification Active
              </span>
            </div>
          </div>
        </div>

        {/* Digital Signature Confirmation Checkbox (Tactile) */}
        <div
          onClick={() => updateSignOff('isAgreed', !data.signOff.isAgreed)}
          className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
            data.signOff.isAgreed
              ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-800 dark:text-emerald-300'
              : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-slate-300'
          }`}
        >
          <div
            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors mt-0.5 ${
              data.signOff.isAgreed
                ? 'bg-emerald-600 border-emerald-600 text-white'
                : 'border-slate-400 dark:border-white/20'
            }`}
          >
            {data.signOff.isAgreed && <CheckCircle2 size={13} strokeWidth={3} />}
          </div>
          <span className="text-xs font-medium leading-relaxed">
            I verify that this discovery dossier is accurate, complete, and agreed upon as the binding technical brief for sprint allocation and commercial proposal delivery.
          </span>
        </div>

        {/* Instant WhatsApp Hand-off Banner when sign-off is checked */}
        {data.signOff.isAgreed && (
          <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg space-y-3 animate-fadeIn">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-300 animate-ping" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-100">
                DISCOVERY BRIEF READY FOR SPRINT ALLOCATION
              </span>
            </div>
            <h4 className="text-sm font-bold">
              Dispatch Discovery Brief Directly to Stuzen Engineering
            </h4>
            <p className="text-xs text-emerald-100 leading-relaxed">
              Connect directly with Solutions Lead Ranjith on WhatsApp. Your 45-point scope and quotation requirements will be pre-formatted into the message.
            </p>
            <a
              href={`https://wa.me/917418572022?text=${encodeURIComponent(
                `*STUZEN TECHNOLOGIES Discovery Brief*\n*Ref ID:* ${fullFormData.id}\n*Client:* ${fullFormData.s01_client.contactName || 'Valued Client'} (${fullFormData.s01_client.businessName || 'Business'})\n*Phone:* ${fullFormData.s01_client.phoneWhatsapp || 'N/A'}\n*Email:* ${fullFormData.s01_client.email || 'N/A'}\n*Website Type:* ${fullFormData.s03_structure.websiteType}\n*Budget Tier:* ${fullFormData.s09_timeline.budgetTier}\n*North Star Metric:* ${data.mostImportantSuccessFactor || 'Sub-second speeds & high conversion.'}\n\nHi Ranjith, we have completed the discovery session on https://stuzen-discovery.vercel.app. Please review our project scope!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-emerald-800 shadow hover:bg-emerald-50 active:scale-95 transition-all cursor-pointer"
            >
              <MessageCircle size={16} className="text-emerald-600" />
              <span>Send Brief to WhatsApp: +91 74185 72022</span>
              <Send size={13} className="ml-1 text-emerald-500" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};


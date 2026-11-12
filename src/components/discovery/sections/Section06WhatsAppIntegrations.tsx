import React from 'react';
import { WhatsAppIntegrations } from '../../../types/discovery';
import { SectionHeader } from '../SectionHeader';
import { BentoCard } from '../BentoCard';
import { PillTag } from '../PillTag';
import { WHATSAPP_CAPABILITIES, EXISTING_TOOLS_CHIPS, PAYMENT_GATEWAY_OPTIONS } from '../../../data/discoveryQuestions';
import { MessageSquareCode, CreditCard, Layers, Workflow } from 'lucide-react';

interface Section06Props {
  data: WhatsAppIntegrations;
  onChange: (field: keyof WhatsAppIntegrations, value: any) => void;
  answeredCount: number;
}

export const Section06WhatsAppIntegrations: React.FC<Section06Props> = ({
  data,
  onChange,
  answeredCount,
}) => {
  const toggleWhatsAppCap = (id: string) => {
    const exists = data.whatsappCapabilities.includes(id);
    if (exists) {
      onChange('whatsappCapabilities', data.whatsappCapabilities.filter(c => c !== id));
    } else {
      if (id === 'not_needed') {
        onChange('whatsappCapabilities', ['not_needed']);
      } else {
        onChange('whatsappCapabilities', [...data.whatsappCapabilities.filter(c => c !== 'not_needed'), id]);
      }
    }
  };

  const toggleExistingTool = (id: string) => {
    const exists = data.existingBusinessTools.includes(id);
    if (exists) {
      onChange('existingBusinessTools', data.existingBusinessTools.filter(t => t !== id));
    } else {
      onChange('existingBusinessTools', [...data.existingBusinessTools, id]);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <SectionHeader
        number="06"
        title="WhatsApp, Integrations & Automation"
        subtitle="Architect real-time customer messaging channels, CRM synchronization, and payment automation."
        questionRange="Q26–Q29"
        iconName="Zap"
        answeredCount={answeredCount}
        totalQuestions={4}
      />

      {/* Q26: WhatsApp Capabilities (Clean 2-column layout to prevent cramping) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q26 • WHATSAPP MESSAGING & AUTOMATION CAPABILITIES
          </label>
          <span className="text-[10px] text-slate-400 font-mono">CONVERSATIONAL</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Select all WhatsApp capabilities needed for client engagement, notification dispatches, and automated workflows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WHATSAPP_CAPABILITIES.map(cap => (
            <BentoCard
              key={cap.id}
              id={cap.id}
              title={cap.label}
              description={cap.desc}
              icon="MessageCircle"
              isSelected={data.whatsappCapabilities.includes(cap.id)}
              onSelect={toggleWhatsAppCap}
              multiSelect={true}
            />
          ))}
        </div>

        {!data.whatsappCapabilities.includes('not_needed') && (
          <div className="mt-2">
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
              Target WhatsApp Business Number
            </span>
            <input
              type="text"
              value={data.whatsappNumber || ''}
              onChange={e => onChange('whatsappNumber', e.target.value)}
              placeholder="+91 98450 12890 (Include country code)"
              className="mt-1 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
        )}
      </div>

      {/* Q27: Existing Business Tools to Integrate */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q27 • EXISTING BUSINESS TOOLS & SOFTWARE STACK
          </label>
          <span className="text-[10px] text-slate-400 font-mono">INTEGRATIONS</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Which existing systems need to sync leads, customer data, invoices, or appointment availability?
        </p>

        <div className="flex flex-wrap gap-2">
          {EXISTING_TOOLS_CHIPS.map(tool => (
            <PillTag
              key={tool.id}
              id={tool.id}
              label={tool.label}
              isSelected={data.existingBusinessTools.includes(tool.id)}
              onToggle={toggleExistingTool}
            />
          ))}
        </div>

        <div className="mt-2">
          <input
            type="text"
            value={data.existingToolsDetails || ''}
            onChange={e => onChange('existingToolsDetails', e.target.value)}
            placeholder="Specific software names (e.g. HubSpot CRM, Zoho Books, Google Sheets, Calendly)..."
            className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Q28: Payment Gateway Status & Provider (Indian Rupee Focus) */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q28 • PAYMENT GATEWAY INTEGRATION & PREFERRED PROVIDER
          </label>
          <span className="text-[10px] text-slate-400 font-mono">COMMERCE (₹ / INR)</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Select preferred Indian payment gateway partner for processing online cards, UPI, net banking, or international payments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {PAYMENT_GATEWAY_OPTIONS.map(gw => (
            <button
              key={gw.id}
              type="button"
              onClick={() => {
                onChange('paymentGatewayStatus', gw.label);
                onChange('preferredPaymentGateway', gw.label);
              }}
              className={`p-3 rounded-lg border text-left text-xs font-medium transition-all cursor-pointer ${
                data.paymentGatewayStatus === gw.label
                  ? 'bg-blue-600/10 border-blue-500 text-blue-600 dark:text-cyan-300 dark:bg-blue-950/40'
                  : 'border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              {gw.label}
            </button>
          ))}
        </div>
      </div>

      {/* Q29: Other Custom Automations */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q29 • ADDITIONAL WORKFLOW AUTOMATIONS & WEBHOOK TRIGGERS
          </label>
          <span className="text-[10px] text-slate-400 font-mono">AUTOMATION</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Automations like instant Slack/WhatsApp alerts when a lead enquires, automated PDF receipts, or webhook data sync.
        </p>
        <textarea
          rows={2}
          value={data.otherAutomations}
          onChange={e => onChange('otherAutomations', e.target.value)}
          placeholder="e.g. When lead submits enquiry form: 1. Send SMS/WhatsApp alert to sales head; 2. Push lead to CRM; 3. Auto-email client clinic catalog..."
          className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none transition-all"
        />
      </div>
    </div>
  );
};

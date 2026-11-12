import React from 'react';
import { DiscoveryFormData } from '../../types/discovery';
import { 
  Printer, 
  X, 
  Download, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Layers, 
  Cpu, 
  Calendar,
  Building,
  User,
  Globe,
  Mail,
  Phone,
  IndianRupee,
  Check
} from 'lucide-react';
import { 
  PAGE_OPTIONS, 
  FEATURE_MATRIX_ITEMS, 
  PURPOSE_OPTIONS, 
  PRIMARY_ACTIONS, 
  WEBSITE_TYPES, 
  BRAND_READINESS_CHIPS, 
  VISUAL_STYLES, 
  WHATSAPP_CAPABILITIES, 
  EXISTING_TOOLS_CHIPS, 
  SECURITY_ITEMS, 
  SEO_TIERS, 
  ANALYTICS_OPTIONS, 
  BUDGET_TIERS, 
  SUPPORT_TIERS 
} from '../../data/discoveryQuestions';

interface OfficialPrintDossierProps {
  formData: DiscoveryFormData;
  onClose: () => void;
}

export const OfficialPrintDossier: React.FC<OfficialPrintDossierProps> = ({
  formData,
  onClose,
}) => {
  const handlePrint = () => {
    window.print();
  };

  // Helper resolution functions to transform raw machine IDs into polished human-readable labels
  const resolvePurposes = () => {
    if (!formData.s02_goals.purposes.length) return 'General Corporate Showcase';
    return formData.s02_goals.purposes.map(id => {
      const found = PURPOSE_OPTIONS.find(p => p.id === id);
      return found ? found.label : id;
    }).join(' • ');
  };

  const resolveActions = () => {
    if (!formData.s02_goals.primaryAction.length) return 'Direct Contact Form';
    return formData.s02_goals.primaryAction.map(id => {
      const found = PRIMARY_ACTIONS.find(a => a.id === id);
      return found ? found.label : id;
    }).join(' • ');
  };

  const resolveWebsiteType = () => {
    const found = WEBSITE_TYPES.find(w => w.id === formData.s03_structure.websiteType);
    return found ? found.label : (formData.s03_structure.otherWebsiteType || 'Custom Architectural Solution');
  };

  const resolvePages = () => {
    if (!formData.s03_structure.requiredPages.length) return 'Standard Corporate Suite';
    return formData.s03_structure.requiredPages.map(id => {
      const found = PAGE_OPTIONS.find(p => p.id === id);
      return found ? found.label : id;
    }).join(', ');
  };

  const resolveBrandReadiness = () => {
    if (!formData.s04_design.brandReadiness.length) return 'Standard Brand Assets';
    return formData.s04_design.brandReadiness.map(id => {
      const found = BRAND_READINESS_CHIPS.find(b => b.id === id);
      return found ? found.label : id;
    }).join(' • ');
  };

  const resolveVisualStyles = () => {
    if (!formData.s04_design.visualStyles.length) return 'Modern & Executive Premium';
    return formData.s04_design.visualStyles.map(id => {
      const found = VISUAL_STYLES.find(v => v.id === id);
      return found ? found.label : id;
    }).join(' / ');
  };

  const resolveFeatures = (): string[] => {
    if (!formData.s05_features.selectedFeatures.length) return ['Core Informational Pages'];
    return formData.s05_features.selectedFeatures.map(id => {
      const found = FEATURE_MATRIX_ITEMS.find(f => f.id === id);
      return found ? found.label : id;
    });
  };

  const resolveWhatsApp = () => {
    if (formData.s06_whatsapp.whatsappCapabilities.includes('not_needed')) {
      return 'WhatsApp Integration Not Required for Phase 1';
    }
    return formData.s06_whatsapp.whatsappCapabilities.map(id => {
      const found = WHATSAPP_CAPABILITIES.find(w => w.id === id);
      return found ? found.label : id;
    }).join(' • ');
  };

  const resolveTools = () => {
    const tools = formData.s06_whatsapp.existingBusinessTools.map(id => {
      const found = EXISTING_TOOLS_CHIPS.find(t => t.id === id);
      return found ? found.label : id;
    });
    if (formData.s06_whatsapp.existingToolsDetails) {
      tools.push(formData.s06_whatsapp.existingToolsDetails);
    }
    return tools.length > 0 ? tools.join(' • ') : 'None / Standalone deployment';
  };

  const resolveSecurity = () => {
    if (!formData.s07_technical.securityUptimeRequirements.length) return 'Standard SSL & Uptime';
    return formData.s07_technical.securityUptimeRequirements.map(id => {
      const found = SECURITY_ITEMS.find(s => s.id === id);
      return found ? found.label : id;
    }).join(' • ');
  };

  const resolveSeo = () => {
    const found = SEO_TIERS.find(s => s.id === formData.s08_seo.seoTier);
    return found ? found.label : (formData.s08_seo.seoTier || 'Foundation Technical SEO (Included)');
  };

  const resolveAnalytics = () => {
    if (!formData.s08_seo.analyticsTracking.length) return 'Google Analytics 4 & Search Console';
    return formData.s08_seo.analyticsTracking.map(id => {
      const found = ANALYTICS_OPTIONS.find(a => a.id === id);
      return found ? found.label : id;
    }).join(' • ');
  };

  const resolveBudget = () => {
    const found = BUDGET_TIERS.find(b => b.id === formData.s09_timeline.budgetTier);
    if (found) {
      return `${found.label} (${found.range})`;
    }
    return formData.s09_timeline.budgetTier || 'Professional SaaS / E-Commerce (₹60,000 – ₹1.5 Lakhs)';
  };

  const resolveSupport = () => {
    const found = SUPPORT_TIERS.find(s => s.id === formData.s09_timeline.supportCareTier);
    return found ? found.label : (formData.s09_timeline.supportCareTier || 'Stuzen Priority Care (Monthly Retainer)');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md print-modal-overlay">
      <div className="min-h-full w-full py-8 sm:py-12 px-4 sm:px-6 flex justify-center items-start print-modal-wrapper">
        {/* Floating Control Bar for On-Screen Preview */}
        <div className="fixed top-5 right-6 z-50 flex items-center gap-2.5 rounded-xl bg-slate-900 border border-white/20 p-2 shadow-2xl no-print">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-blue-500 cursor-pointer active:scale-95 transition-all"
          >
            <Printer size={15} />
            <span>Print / Save as PDF</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Close Preview"
          >
            <X size={18} />
          </button>
        </div>

        {/* Official Executive Printable Document Sheet */}
        <div
          id="official-print-dossier"
          className="w-full max-w-4xl bg-white text-slate-950 shadow-2xl rounded-2xl p-4 sm:p-8 md:p-12 font-sans relative border border-slate-200 shrink-0"
        >
          {/* Official Blue Watermark Seal */}
          <div className="absolute right-12 top-28 opacity-[0.06] pointer-events-none select-none print:opacity-[0.08]">
            <img
              src="/brand/STUZEN_Logo_Monochrome_Blue.png"
              alt="Stuzen Stamp"
              className="w-72 object-contain"
            />
          </div>

          {/* 1. Official Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 border-b-2 border-slate-900 gap-3 sm:gap-4 avoid-break">
            <div>
              <img
                src="/brand/STUZEN_Logo_Black.png"
                alt="STUZEN TECHNOLOGIES"
                className="h-10 object-contain mb-1.5"
              />
              <p className="font-mono text-[11px] uppercase tracking-widest text-slate-700 font-bold">
                Learn. Build. Innovate. • Official Requirements Discovery Dossier
              </p>
            </div>

            <div className="text-left sm:text-right font-mono text-xs space-y-1">
              <div className="font-bold text-sm text-slate-900 bg-slate-100 px-2.5 py-1 rounded border border-slate-300 inline-block">
                DOC ID: {formData.id}
              </div>
              <div className="text-[10px] text-slate-500 font-semibold tracking-wider">
                CONFIDENTIAL • STUZEN SOLUTIONS DESK
              </div>
              <div className="text-[10px] text-slate-500">
                Audit Date: {formData.meeting.interviewDate || new Date().toISOString().split('T')[0]}
              </div>
            </div>
          </div>

          {/* 2. Executive Meeting Metadata Bar */}
          <div className="my-5 grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs font-mono avoid-break">
            <div>
              <span className="text-slate-400 block text-[9px] uppercase font-bold">MEETING DATE</span>
              <span className="font-bold text-slate-900">{formData.meeting.interviewDate || '—'}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px] uppercase font-bold">MEETING MODE</span>
              <span className="font-bold text-slate-900">{formData.meeting.meetingMode}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px] uppercase font-bold">STUZEN SOLUTIONS LEAD</span>
              <span className="font-bold text-slate-900 truncate block">{formData.meeting.stuzenRepresentative || 'Ranjith R.'}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px] uppercase font-bold">CLIENT ATTENDEES</span>
              <span className="font-bold text-slate-900 truncate block">{formData.meeting.clientAttendees || formData.s01_client.contactName || 'Client Team'}</span>
            </div>
          </div>

          {/* 3. Structured 10-Section Discovery Matrix */}
          <div className="space-y-4">
            {/* SECTION 01: Client & Business Details */}
            <div className="border border-slate-300 rounded-lg overflow-hidden avoid-break bg-white">
            <div className="bg-slate-900 text-white font-mono text-xs font-bold px-3 py-1.5 flex items-center justify-between">
              <span>01 • CLIENT & BUSINESS PROFILE</span>
              <span className="text-cyan-300">Q01–Q07</span>
            </div>
            <div className="p-3.5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs">
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q01 CONTACT PERSON & DESIGNATION</span>
                <p className="font-bold text-slate-950">{formData.s01_client.contactName || '—'} ({formData.s01_client.contactDesignation || 'Stakeholder'})</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q02 BUSINESS / TRADING NAME</span>
                <p className="font-bold text-slate-950">{formData.s01_client.businessName || '—'}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q03 INDUSTRY & BUSINESS SECTOR</span>
                <p className="text-slate-800">{formData.s01_client.industry || '—'}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q04 CONTACT CHANNELS</span>
                <p className="text-slate-800">{formData.s01_client.phoneWhatsapp || '—'} • {formData.s01_client.email || '—'}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q05 DIGITAL URL & SOCIAL MEDIA</span>
                <p className="text-slate-800 truncate">{formData.s01_client.websiteUrl || 'New Domain Asset'} • {formData.s01_client.socialLinks || '—'}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q06 PRODUCTS & GEOGRAPHY SERVED</span>
                <p className="text-slate-800">{formData.s01_client.primaryLocation || 'India'}</p>
              </div>
              <div className="sm:col-span-2 pt-1 border-t border-slate-100">
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q07 MAIN DECISION MAKER & SIGNATORY</span>
                <p className="text-slate-800 font-semibold">{formData.s01_client.mainDecisionMaker || formData.s01_client.contactName || 'Authorized Signatory'}</p>
              </div>
            </div>
          </div>

          {/* SECTION 02: Project Goals & Audience */}
          <div className="border border-slate-300 rounded-lg overflow-hidden avoid-break bg-white">
            <div className="bg-slate-900 text-white font-mono text-xs font-bold px-3 py-1.5 flex items-center justify-between">
              <span>02 • STRATEGIC PROJECT GOALS & AUDIENCE</span>
              <span className="text-cyan-300">Q08–Q11</span>
            </div>
            <div className="p-3.5 space-y-2.5 text-xs">
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q08 PRIMARY COMMERCIAL PURPOSES</span>
                <p className="font-semibold text-slate-900">{resolvePurposes()}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold block">Q09 TARGET AUDIENCE & PERSONAS</span>
                  <p className="text-slate-800">{formData.s02_goals.targetAudience || '—'}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold block">Q10 5-SECOND CALL-TO-ACTION</span>
                  <p className="font-semibold text-slate-900">{resolveActions()}</p>
                </div>
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q11 SPECIFIC BUSINESS PROBLEM TO SOLVE</span>
                <p className="text-slate-800 italic bg-slate-50 p-2 rounded border border-slate-200">"{formData.s02_goals.businessProblemToSolve || 'Establish a modern high-performance web presence.'}"</p>
              </div>
            </div>
          </div>

          {/* SECTION 03: Website Type & Page Architecture */}
          <div className="border border-slate-300 rounded-lg overflow-hidden avoid-break bg-white">
            <div className="bg-slate-900 text-white font-mono text-xs font-bold px-3 py-1.5 flex items-center justify-between">
              <span>03 • WEBSITE TYPE & PAGE STRUCTURE</span>
              <span className="text-cyan-300">Q12–Q16</span>
            </div>
            <div className="p-3.5 space-y-2.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold block">Q12 WEBSITE ARCHETYPE</span>
                  <p className="font-bold text-blue-700 font-mono uppercase">{resolveWebsiteType()}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold block">Q14 CONTENT READINESS</span>
                  <p className="text-slate-800">{formData.s03_structure.contentReadiness || 'Ready for assembly'}</p>
                </div>
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q13 SITEMAP MANIFEST ({formData.s03_structure.requiredPages.length} PAGES AGREED)</span>
                <p className="text-slate-900 font-medium">{resolvePages()}</p>
                {formData.s03_structure.otherRequiredPages && (
                  <p className="text-slate-600 text-[11px] mt-0.5 italic">+ Additional Pages: {formData.s03_structure.otherRequiredPages}</p>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 border-t border-slate-100">
                <div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold block">Q15 CONTENT PROVIDER</span>
                  <p className="text-slate-800">{formData.s03_structure.contentProvider || 'Collaborative / Client Team'}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold block">Q16 REPLACEMENT & SEO REDIRECTS</span>
                  <p className="text-slate-800">{formData.s03_structure.replacementDetails || 'Clean cutover / Zero downtime'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 04: Design & Brand Direction */}
          <div className="border border-slate-300 rounded-lg overflow-hidden avoid-break bg-white">
            <div className="bg-slate-900 text-white font-mono text-xs font-bold px-3 py-1.5 flex items-center justify-between">
              <span>04 • DESIGN & BRAND DIRECTION</span>
              <span className="text-cyan-300">Q17–Q21</span>
            </div>
            <div className="p-3.5 space-y-2.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold block">Q17 BRAND ASSETS STATUS</span>
                  <p className="text-slate-800">{resolveBrandReadiness()}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold block">Q18 VISUAL STYLE DIRECTION</span>
                  <p className="font-bold text-slate-950 uppercase">{resolveVisualStyles()}</p>
                </div>
              </div>

              {formData.s04_design.referenceWebsites.some(r => r.url) && (
                <div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold block">Q19 BENCHMARK REFERENCE SITES</span>
                  <div className="mt-1 space-y-1 font-mono text-[11px]">
                    {formData.s04_design.referenceWebsites.filter(r => r.url).map((ref, idx) => (
                      <div key={idx} className="flex items-baseline gap-2 text-slate-800">
                        <span className="font-bold text-blue-700">{ref.url}</span>
                        <span className="text-slate-500">— {ref.notes}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 border-t border-slate-100">
                <div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold block">Q20 STYLES & ELEMENTS TO AVOID</span>
                  <p className="text-slate-800">{formData.s04_design.stylesToAvoid || 'None specified'}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold block">Q21 LOCALIZATION & MULTI-LANGUAGE</span>
                  <p className="text-slate-800">{formData.s04_design.isMultiLanguage ? `Yes: ${formData.s04_design.languagesList}` : 'Single Language (English)'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 05: Features & Functionality Matrix */}
          <div className="border border-slate-300 rounded-lg overflow-hidden avoid-break bg-white">
            <div className="bg-slate-900 text-white font-mono text-xs font-bold px-3 py-1.5 flex items-center justify-between">
              <span>05 • SYSTEM FEATURES & FUNCTIONALITY MATRIX</span>
              <span className="text-cyan-300">Q22–Q25</span>
            </div>
            <div className="p-3.5 space-y-2.5 text-xs">
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block mb-1">
                  Q22 ACTIVE 22-MATRIX MODULES ({formData.s05_features.selectedFeatures.length} SELECTED)
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {resolveFeatures().map((fName, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5 text-[10px] font-mono font-medium text-slate-800 border border-slate-300"
                    >
                      <Check size={10} className="text-blue-600" />
                      {fName}
                    </span>
                  ))}
                </div>
              </div>

              {formData.s05_features.specialWorkflowDetails && (
                <div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold block">Q23 SPECIAL FEATURE WORKFLOW SPECIFICATION</span>
                  <p className="text-slate-800 bg-slate-50 p-2 rounded border border-slate-200 mt-0.5 font-sans leading-relaxed">
                    {formData.s05_features.specialWorkflowDetails}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 border-t border-slate-100">
                <div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold block">Q24 ADMIN ACCESS & USER ROLES</span>
                  <p className="text-slate-800">{formData.s05_features.adminAccessRoles.join(', ') || 'Owner / Administrator'}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold block">Q25 POST-LAUNCH CMS PREFERENCE</span>
                  <p className="text-slate-800">{formData.s05_features.postLaunchCmsPreference || 'Hybrid maintenance'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 06 & 07: WhatsApp, Integrations, Technical */}
          <div className="border border-slate-300 rounded-lg overflow-hidden avoid-break bg-white">
            <div className="bg-slate-900 text-white font-mono text-xs font-bold px-3 py-1.5 flex items-center justify-between">
              <span>06 & 07 • INTEGRATIONS, WHATSAPP & CLOUD INFRASTRUCTURE</span>
              <span className="text-cyan-300">Q26–Q34</span>
            </div>
            <div className="p-3.5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs">
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q26 WHATSAPP CAPABILITIES</span>
                <p className="text-slate-800">{resolveWhatsApp()}</p>
                {formData.s06_whatsapp.whatsappNumber && (
                  <span className="font-mono text-blue-700 text-[10px] font-bold block mt-0.5">{formData.s06_whatsapp.whatsappNumber}</span>
                )}
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q27 EXISTING BUSINESS TOOLS</span>
                <p className="text-slate-800">{resolveTools()}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q28 PAYMENT GATEWAY (INR)</span>
                <p className="text-slate-800 font-semibold">{formData.s06_whatsapp.preferredPaymentGateway || formData.s06_whatsapp.paymentGatewayStatus || 'None required'}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q30 DOMAIN DNS & Q31 HOSTING</span>
                <p className="text-slate-800">{formData.s07_technical.domainStatus}: {formData.s07_technical.domainName || 'Configured'} • {formData.s07_technical.hostingProvider || 'Stuzen Managed Edge Cloud'}</p>
              </div>
              <div className="sm:col-span-2 pt-1 border-t border-slate-100">
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q34 CYBERSECURITY & COMPLIANCE</span>
                <p className="text-slate-800">{resolveSecurity()}</p>
              </div>
            </div>
          </div>

          {/* SECTION 08 & 09: SEO, Analytics, Timeline & Pure INR Budget */}
          <div className="border border-slate-300 rounded-lg overflow-hidden avoid-break bg-white">
            <div className="bg-slate-900 text-white font-mono text-xs font-bold px-3 py-1.5 flex items-center justify-between">
              <span>08 & 09 • SEO, MARKETING & COMMERCIAL INVESTMENT (PURE INR ₹)</span>
              <span className="text-cyan-300">Q35–Q43</span>
            </div>
            <div className="p-3.5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs">
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q35 SEO SERVICE TIER</span>
                <p className="text-slate-800 font-medium">{resolveSeo()}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q37 TELEMETRY & TRACKING</span>
                <p className="text-slate-800">{resolveAnalytics()}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q39 TARGET LAUNCH DATE</span>
                <p className="font-bold text-slate-950 font-mono">{formData.s09_timeline.targetLaunchDate || 'TBD'} ({formData.s09_timeline.timelineSpeed || 'Standard'})</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q41 BUDGET BRACKET (INR ₹)</span>
                <p className="font-bold text-blue-700 font-mono text-sm">{resolveBudget()}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q40 COMMERCIAL DRIVER / DEADLINE</span>
                <p className="text-slate-800">{formData.s09_timeline.deadlineReason || 'Standard business deployment'}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 font-bold block">Q42 POST-LAUNCH CARE TIER</span>
                <p className="text-slate-800">{resolveSupport()}</p>
              </div>
            </div>
          </div>

          {/* SECTION 10: Executive Engineering Synthesis (A–F) */}
          <div className="border-2 border-slate-900 rounded-lg overflow-hidden avoid-break bg-white">
            <div className="bg-slate-900 text-white font-mono text-xs font-bold px-3 py-2 flex items-center justify-between">
              <span>10 • EXECUTIVE ENGINEERING SYNTHESIS (PROPOSAL SPECIFICATION A–F)</span>
              <span className="text-cyan-300">STUZEN SOLUTIONS DESK</span>
            </div>
            <div className="p-4 bg-slate-50/60 space-y-3 text-xs">
              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 block">NORTH STAR SUCCESS METRIC (Q44)</span>
                <p className="text-slate-950 font-semibold italic bg-white p-2 rounded border border-slate-200">
                  "{formData.s10_final.mostImportantSuccessFactor || 'Flawless execution, sub-second performance, and verified commercial conversion.'}"
                </p>
              </div>

              <div className="space-y-2 border-t border-slate-200 pt-2 font-sans">
                <div>
                  <span className="font-mono text-[10px] font-bold text-slate-700 block">A. RECOMMENDED SYSTEM ARCHITECTURE</span>
                  <p className="text-slate-800 leading-relaxed">{formData.s10_final.internalSummary.recommendedArchitecture}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] font-bold text-slate-700 block">B. AGREED PAGES & CORE FEATURES</span>
                  <p className="text-slate-800 leading-relaxed">{formData.s10_final.internalSummary.agreedPagesFeatures}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] font-bold text-slate-700 block">C. INTEGRATIONS & RECURRING COSTS (INR)</span>
                  <p className="text-slate-800 leading-relaxed">{formData.s10_final.internalSummary.integrationsAndRecurringCosts}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] font-bold text-slate-700 block">D. EXCLUSIONS / PHASE 2 ROADMAP</span>
                  <p className="text-slate-800 leading-relaxed">{formData.s10_final.internalSummary.exclusionsPhase2}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] font-bold text-slate-700 block">E. ESTIMATED DELIVERY SPRINTS</span>
                  <p className="text-slate-800 font-mono text-[11px] whitespace-pre-line leading-relaxed">{formData.s10_final.internalSummary.deliveryMilestones}</p>
                </div>
                <div className="bg-blue-50/60 p-2.5 rounded border border-blue-200">
                  <span className="font-mono text-[10px] font-bold text-blue-900 block">F. COMMERCIAL QUOTATION & PAYMENT MILESTONES (PURE INR ₹)</span>
                  <p className="text-slate-950 font-bold font-mono text-xs mt-0.5">{formData.s10_final.internalSummary.quotationPaymentTerms}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Official Sign-Off & Verification Block (Bound to avoid awkward page breaks) */}
          <div className="mt-6 pt-5 border-t-2 border-slate-900 avoid-break">
            <p className="text-[11px] text-slate-600 mb-6 font-medium leading-relaxed">
              Both parties acknowledge and confirm that this discovery audit document constitutes the complete and verified technical specification for the software/website engineering project undertaken by Stuzen Technologies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
              {/* Client Signature Box */}
              <div className="border border-slate-300 rounded-lg p-3.5 bg-slate-50/40">
                <span className="font-mono text-[9px] text-slate-400 uppercase font-bold block mb-1">
                  ACCEPTED & CONFIRMED FOR CLIENT:
                </span>
                <div className="border-b border-slate-300 pb-2 mb-2">
                  <p className="font-bold text-sm text-slate-950 font-mono">
                    {formData.s10_final.signOff.clientRepName || formData.s01_client.contactName || 'Authorized Signatory'}
                  </p>
                  <p className="text-[11px] text-slate-600">
                    {formData.s10_final.signOff.clientRepTitle || formData.s01_client.contactDesignation || 'Chief Executive Officer'}
                  </p>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Sign Date:</span>
                  <span className="font-bold text-slate-800">{formData.s10_final.signOff.clientSignDate || new Date().toISOString().split('T')[0]}</span>
                </div>
              </div>

              {/* Stuzen Signature Box */}
              <div className="border border-slate-300 rounded-lg p-3.5 bg-slate-50/40">
                <span className="font-mono text-[9px] text-slate-400 uppercase font-bold block mb-1">
                  ACCEPTED FOR STUZEN TECHNOLOGIES:
                </span>
                <div className="border-b border-slate-300 pb-2 mb-2">
                  <p className="font-bold text-sm text-slate-950 font-mono">
                    {formData.s10_final.signOff.stuzenRepName || formData.meeting.stuzenRepresentative || 'Ranjith R.'}
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Principal Solutions Architect & Engineering Director
                  </p>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Sign Date:</span>
                  <span className="font-bold text-slate-800">{formData.s10_final.signOff.stuzenSignDate || new Date().toISOString().split('T')[0]}</span>
                </div>
              </div>
            </div>

            {/* Document Stamp Footer */}
            <div className="mt-6 pt-3 border-t border-slate-200 font-mono text-[9px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-1">
              <span>STUZEN TECHNOLOGIES • Learn. Build. Innovate. • Bengaluru, India</span>
              <span className="font-bold text-slate-700">OFFICIAL ARCHITECTURAL SPECIFICATION</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

import React, { useState, useEffect } from 'react';
import { AppMode } from './components/layout/Navbar';
import { SidebarNav } from './components/layout/SidebarNav';
import { Footer } from './components/layout/Footer';
import { AgencyLandingView } from './components/landing/AgencyLandingView';
import { DiscoveryEngine } from './components/discovery/DiscoveryEngine';
import { InternalVaultView } from './components/vault/InternalVaultView';
import { StaffPinModal } from './components/vault/StaffPinModal';
import { OfficialPrintDossier } from './components/print/OfficialPrintDossier';
import { StuzenAICopilot } from './components/ai/StuzenAICopilot';
import { AboutView } from './components/pages/AboutView';
import { ServicesView } from './components/pages/ServicesView';
import { PortfolioView } from './components/pages/PortfolioView';
import { ContactView } from './components/pages/ContactView';
import { DiscoveryFormData } from './types/discovery';
import { DEMO_CLIENT_DATA, INITIAL_VAULT_RECORDS } from './data/demoClients';
import { analyzeScope } from './utils/scopeAnalyzer';
import { generateInternalSummaryFromAnswers } from './utils/autoGenerateSummary';
import { decodeDiscoverySession } from './utils/shareSession';
import { CheckCircle2, X } from 'lucide-react';

const STORAGE_KEY = 'stuzen_discovery_vault';

const createBlankFormData = (): DiscoveryFormData => ({
  id: `STZ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  status: 'Draft',
  meeting: {
    interviewDate: new Date().toISOString().split('T')[0],
    meetingMode: 'Video call',
    stuzenRepresentative: 'Ranjith R. (Head of Solutions Architecture)',
    clientAttendees: '',
    meetingLocationOrLink: '',
  },
  s01_client: {
    contactName: '',
    contactDesignation: '',
    businessName: '',
    industry: '',
    phoneWhatsapp: '',
    email: '',
    websiteUrl: '',
    socialLinks: '',
    businessDescription: '',
    primaryLocation: '',
    mainDecisionMaker: '',
  },
  s02_goals: {
    purposes: [],
    otherPurpose: '',
    targetAudience: '',
    primaryAction: [],
    otherPrimaryAction: '',
    businessProblemToSolve: '',
  },
  s03_structure: {
    websiteType: 'business',
    otherWebsiteType: '',
    requiredPages: ['home', 'about', 'services_main', 'contact'],
    otherRequiredPages: '',
    contentReadiness: 'Partially ready — rough draft exists',
    contentProvider: 'Mix / Collaborative (Client gives bullet points, Stuzen polishes)',
    replacementDetails: '',
  },
  s04_design: {
    brandReadiness: ['logo_ready'],
    visualStyles: ['modern'],
    otherVisualStyle: '',
    referenceWebsites: [
      { url: '', notes: '' },
      { url: '', notes: '' },
      { url: '', notes: '' },
    ],
    stylesToAvoid: '',
    isMultiLanguage: false,
    languagesList: 'English',
  },
  s05_features: {
    selectedFeatures: ['contact_form', 'click_to_call', 'whatsapp_button'],
    otherFeatureDetails: '',
    specialWorkflowDetails: '',
    adminAccessRoles: ['Owner / Super Admin'],
    postLaunchCmsPreference: 'Hybrid: Stuzen maintains code; our team updates content via CMS',
  },
  s06_whatsapp: {
    whatsappCapabilities: ['click_chat', 'prefilled'],
    whatsappNumber: '',
    existingBusinessTools: [],
    existingToolsDetails: '',
    paymentGatewayStatus: 'No Online Payments Required',
    preferredPaymentGateway: 'None',
    otherAutomations: '',
  },
  s07_technical: {
    domainStatus: 'already_owned',
    domainName: '',
    hostingStatus: 'stuzen_cloud',
    hostingProvider: 'Stuzen Managed High-Speed Edge Cloud (Global CDN, 99.99% SLA)',
    businessEmailNeed: 'Already configured (Google Workspace / M365)',
    migrationDetails: '',
    securityUptimeRequirements: ['ssl', 'backups', 'uptime'],
  },
  s08_seo: {
    seoTier: 'basic',
    targetLocationsAndKeywords: '',
    analyticsTracking: ['ga4', 'gsc'],
    paidAdsPlans: [],
  },
  s09_timeline: {
    targetLaunchDate: '',
    timelineSpeed: 'Standard 4–6 weeks sprint',
    deadlineReason: '',
    budgetTier: 'business',
    supportCareTier: 'monthly_retainer',
    finalApprover: '',
  },
  s10_final: {
    mostImportantSuccessFactor: '',
    unaddressedConcerns: '',
    materialsReceived: {
      logo: false,
      brandGuidelines: false,
      textContent: false,
      imagesVideos: false,
      productCatalogue: false,
      existingCredentials: false,
      domainHostingAccess: false,
      referenceSites: false,
      otherMaterials: '',
    },
    internalSummary: {
      recommendedArchitecture: 'Stuzen High-Performance Architecture: React 19 / TypeScript on Edge Cloud CDN.',
      agreedPagesFeatures: 'Core Architectural Pages with responsive mobile conversion engine.',
      integrationsAndRecurringCosts: 'No paid 3rd-party recurring integrations required for initial phase.',
      exclusionsPhase2: 'Phase 2: Mobile native applications and enterprise ERP synchronization.',
      deliveryMilestones: 'Sprint 1 (Days 1–7): Architecture blueprint.\n• Sprint 2 (Days 8–18): UI Design.\n• Sprint 3 (Days 19–30): Development.\n• Sprint 4 (Days 31–38): QA & Launch.',
      quotationPaymentTerms: 'Commercial Structure: 40% initial commitment deposit, 40% staging review approval, 20% final DNS launch (Pure INR).',
    },
    signOff: {
      clientRepName: '',
      clientRepTitle: '',
      clientSignDate: new Date().toISOString().split('T')[0],
      stuzenRepName: 'Ranjith R.',
      stuzenSignDate: new Date().toISOString().split('T')[0],
      isAgreed: false,
    },
  },
});

export const App: React.FC = () => {
  const [currentMode, setCurrentMode] = useState<AppMode>('landing');
  const [formData, setFormData] = useState<DiscoveryFormData>(createBlankFormData);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [printModalRecord, setPrintModalRecord] = useState<DiscoveryFormData | null>(null);
  const [targetDiscoverySection, setTargetDiscoverySection] = useState<string>('s01');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isStaffUnlocked, setIsStaffUnlocked] = useState<boolean>(false);
  const [isStaffPinModalOpen, setIsStaffPinModalOpen] = useState<boolean>(false);

  // Initialize vault records from localStorage, or pre-seed with 2 realistic records
  const [vaultRecords, setVaultRecords] = useState<DiscoveryFormData[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to parse localStorage vault:', e);
    }
    return INITIAL_VAULT_RECORDS;
  });

  // Sync vault records to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(vaultRecords));
    } catch (e) {
      console.error('Failed to save to localStorage vault:', e);
    }
  }, [vaultRecords]);

  // Check URL parameters on mount for shared discovery sessions (?session=...)
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      let sessionParam = urlParams.get('session');

      if (!sessionParam && window.location.hash.includes('session=')) {
        const hashQuery = window.location.hash.substring(window.location.hash.indexOf('?') + 1);
        const hashParams = new URLSearchParams(hashQuery);
        sessionParam = hashParams.get('session');
      }

      if (sessionParam) {
        const decoded = decodeDiscoverySession(sessionParam);
        if (decoded) {
          setFormData(decoded);
          setCurrentMode('discovery');
          setToastMessage(`✓ Restored Discovery Session for "${decoded.s01_client.businessName || decoded.id}" from share link!`);
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      }
    } catch (err) {
      console.error('Failed to parse share session from URL:', err);
    }
  }, []);

  // Toast auto-dismiss timer
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Compute live scope metrics
  const scopeAnalysis = analyzeScope(formData);

  // Update meeting metadata
  const handleMeetingChange = (field: keyof DiscoveryFormData['meeting'], value: any) => {
    setFormData(prev => ({
      ...prev,
      meeting: {
        ...prev.meeting,
        [field]: value,
      },
      updatedAt: new Date().toISOString(),
    }));
    setIsSaved(false);
  };

  // Update section data
  const handleSectionUpdate = (sectionKey: keyof DiscoveryFormData, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [sectionKey]: {
        ...(prev[sectionKey] as any),
        [field]: value,
      },
      updatedAt: new Date().toISOString(),
    }));
    setIsSaved(false);
  };

  // Auto-fill demo client
  const handleAutoFillDemo = () => {
    setFormData(prev => ({
      ...prev,
      ...DEMO_CLIENT_DATA,
      id: prev.id, // keep current ID
      updatedAt: new Date().toISOString(),
      status: 'In Review',
    }));
    setIsSaved(false);
    setToastMessage('⚡ Demo Indian Client loaded across all 45 questions!');
  };

  // Reset form
  const handleResetForm = () => {
    setFormData(createBlankFormData());
    setIsSaved(false);
    setTargetDiscoverySection('s01');
    setToastMessage('Form reset to fresh discovery session.');
  };

  // Auto-generate Section 10 summary from answers
  const handleAutoGenerateSummary = () => {
    const generated = generateInternalSummaryFromAnswers(formData);
    setFormData(prev => ({
      ...prev,
      s10_final: {
        ...prev.s10_final,
        internalSummary: generated,
      },
      updatedAt: new Date().toISOString(),
    }));
    setIsSaved(false);
    setToastMessage('✨ Section 10 summary & INR quotation auto-generated from your answers!');
  };

  // Save current form data to Vault
  const handleSaveToVault = () => {
    const updatedRecord: DiscoveryFormData = {
      ...formData,
      status: formData.s10_final.signOff.isAgreed ? 'Approved' : 'In Review',
      updatedAt: new Date().toISOString(),
    };

    setVaultRecords(prev => {
      const existingIndex = prev.findIndex(r => r.id === updatedRecord.id);
      if (existingIndex >= 0) {
        const copy = [...prev];
        copy[existingIndex] = updatedRecord;
        return copy;
      }
      return [updatedRecord, ...prev];
    });

    setIsSaved(true);
    setToastMessage(`✓ Record ${updatedRecord.id} (${updatedRecord.s01_client.businessName || 'Dossier'}) saved to Lead Vault!`);
  };

  // Load a vault record into the discovery editor
  const handleLoadRecord = (record: DiscoveryFormData) => {
    setFormData(record);
    setIsSaved(true);
    setTargetDiscoverySection('s01');
    setCurrentMode('discovery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setToastMessage(`Loaded ${record.s01_client.businessName} into Discovery Portal.`);
  };

  // Delete a record from the vault
  const handleDeleteRecord = (id: string) => {
    setVaultRecords(prev => prev.filter(r => r.id !== id));
    setToastMessage('Record deleted from Lead Vault.');
  };

  const handleStartDiscoveryWithSection = (sectionId: string = 's01') => {
    setTargetDiscoverySection(sectionId);
    setCurrentMode('discovery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Apply scope selections from 5-Second Estimator Calculator directly into Discovery
  const handleApplyQuickEstimate = (config: {
    websiteType: string;
    pageCount: number;
    selectedFeatures: string[];
  }) => {
    setFormData(prev => ({
      ...prev,
      s03_structure: {
        ...prev.s03_structure,
        websiteType: config.websiteType,
      },
      s05_features: {
        ...prev.s05_features,
        selectedFeatures: Array.from(new Set([...prev.s05_features.selectedFeatures, ...config.selectedFeatures])),
      },
      updatedAt: new Date().toISOString(),
    }));
    setCurrentMode('discovery');
    setTargetDiscoverySection('s03');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setToastMessage('⚡ Scope Calculator estimate applied to your Discovery session!');
  };

  // Staff Lead Vault PIN security handlers
  const handleOpenStaffVault = () => {
    if (isStaffUnlocked) {
      setCurrentMode('vault');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsStaffPinModalOpen(true);
    }
  };

  const handleStaffUnlockSuccess = () => {
    setIsStaffUnlocked(true);
    setIsStaffPinModalOpen(false);
    setCurrentMode('vault');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setToastMessage('🔓 Staff Lead Vault unlocked successfully!');
  };

  const handleLockVault = () => {
    setIsStaffUnlocked(false);
    setCurrentMode('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setToastMessage('🔒 Staff Lead Vault locked & secured.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#09090b] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 flex items-center gap-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-3 shadow-2xl border border-slate-700 dark:border-slate-200 animate-fadeIn text-xs font-semibold no-print">
          <CheckCircle2 size={16} className="text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{toastMessage}</span>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="ml-2 text-slate-400 hover:text-white dark:hover:text-slate-900"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Main App Root Shell (Side-Dock Executive Studio Layout) */}
      <div id="app-root-shell" className="flex-1 flex flex-col lg:flex-row min-h-screen no-print bg-[#F8FAFC] dark:bg-[#05070B] text-slate-900 dark:text-slate-100 transition-colors">
        {/* Left Sidebar Navigation Dock */}
        <SidebarNav
          currentMode={currentMode}
          onSelectMode={setCurrentMode}
          vaultCount={vaultRecords.length}
          discoveryCompletionPercent={scopeAnalysis.overallPercentage}
          onOpenPrintPreview={() => setPrintModalRecord(formData)}
          onOpenStaffVault={handleOpenStaffVault}
        />

        {/* Right Scrollable Content Viewport */}
        <div className="flex-1 min-w-0 flex flex-col h-auto lg:h-screen lg:overflow-y-auto overflow-x-hidden scroll-smooth">
          <div className="flex-1 app-viewport">
          {currentMode === 'landing' && (
            <AgencyLandingView
              onStartDiscovery={handleStartDiscoveryWithSection}
              onOpenStaffVault={handleOpenStaffVault}
              vaultCount={vaultRecords.length}
              onApplyQuickEstimate={handleApplyQuickEstimate}
            />
          )}

          {currentMode === 'about' && (
            <AboutView
              onNavigateMode={setCurrentMode}
              onStartDiscoveryWithSection={handleStartDiscoveryWithSection}
            />
          )}

          {currentMode === 'services' && (
            <ServicesView
              onNavigateMode={setCurrentMode}
              onStartDiscoveryWithSection={handleStartDiscoveryWithSection}
            />
          )}

          {currentMode === 'portfolio' && (
            <PortfolioView
              onNavigateMode={setCurrentMode}
              onStartDiscoveryWithSection={handleStartDiscoveryWithSection}
            />
          )}

          {currentMode === 'contact' && (
            <ContactView
              onNavigateMode={setCurrentMode}
              onStartDiscoveryWithSection={handleStartDiscoveryWithSection}
            />
          )}

          {currentMode === 'discovery' && (
            <DiscoveryEngine
              formData={formData}
              onChangeMeeting={handleMeetingChange}
              onUpdateSection={handleSectionUpdate}
              onAutoFillDemo={handleAutoFillDemo}
              onResetForm={handleResetForm}
              onAutoGenerateSummary={handleAutoGenerateSummary}
              onSaveToVault={handleSaveToVault}
              onOpenPrint={() => setPrintModalRecord(formData)}
              isSaved={isSaved}
              scopeAnalysis={scopeAnalysis}
              initialSection={targetDiscoverySection}
              onNotifyToast={setToastMessage}
            />
          )}

          {currentMode === 'vault' && (
            <InternalVaultView
              vaultRecords={vaultRecords}
              onLoadRecord={handleLoadRecord}
              onDeleteRecord={handleDeleteRecord}
              onOpenPrintPreviewForRecord={record => setPrintModalRecord(record)}
              onStartNewDiscovery={() => {
                handleResetForm();
                setCurrentMode('discovery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onLockVault={handleLockVault}
            />
          )}
          </div>

          {/* Universal Footer */}
          <Footer onSelectMode={setCurrentMode} />
        </div>
      </div>

      {/* Staff Security PIN Modal for Confidential Lead Vault Access */}
      <StaffPinModal
        isOpen={isStaffPinModalOpen}
        onClose={() => setIsStaffPinModalOpen(false)}
        onUnlockSuccess={handleStaffUnlockSuccess}
      />

      {/* Official Document Print Dossier Modal (When active, prints ONLY this element) */}
      {printModalRecord && (
        <OfficialPrintDossier
          formData={printModalRecord}
          onClose={() => setPrintModalRecord(null)}
        />
      )}

      {/* Interactive Stuzen AI Solutions Copilot (Instant Scope, Pricing & Discovery Assistant) */}
      <StuzenAICopilot
        onNavigateMode={setCurrentMode}
        onAutoFillDemo={handleAutoFillDemo}
        onOpenPrint={() => setPrintModalRecord(formData)}
        onStartDiscoverySection={handleStartDiscoveryWithSection}
      />
    </div>
  );
};

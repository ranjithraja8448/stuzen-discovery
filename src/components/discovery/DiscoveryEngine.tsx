import React, { useState, useEffect } from 'react';
import { DiscoveryFormData } from '../../types/discovery';
import { ScopeAnalysis } from '../../utils/scopeAnalyzer';
import { TopActionBar } from './TopActionBar';
import { LeftSidebarNav } from './LeftSidebarNav';
import { RightLiveBlueprint } from './RightLiveBlueprint';
import { FormCanvas } from './FormCanvas';

interface DiscoveryEngineProps {
  formData: DiscoveryFormData;
  onChangeMeeting: (field: keyof DiscoveryFormData['meeting'], value: any) => void;
  onUpdateSection: (sectionKey: keyof DiscoveryFormData, field: string, value: any) => void;
  onAutoFillDemo: () => void;
  onResetForm: () => void;
  onAutoGenerateSummary: () => void;
  onSaveToVault: () => void;
  onOpenPrint: () => void;
  isSaved: boolean;
  scopeAnalysis: ScopeAnalysis;
  initialSection?: string;
  onNotifyToast?: (msg: string) => void;
}

export const DiscoveryEngine: React.FC<DiscoveryEngineProps> = ({
  formData,
  onChangeMeeting,
  onUpdateSection,
  onAutoFillDemo,
  onResetForm,
  onAutoGenerateSummary,
  onSaveToVault,
  onOpenPrint,
  isSaved,
  scopeAnalysis,
  initialSection = 's01',
  onNotifyToast,
}) => {
  const [activeSection, setActiveSection] = useState<string>(initialSection);

  useEffect(() => {
    if (initialSection) {
      setActiveSection(initialSection);
    }
  }, [initialSection]);

  // Prevent jumping forward past Step 01 without basic client details
  const handleSelectSectionWithValidation = (targetId: string) => {
    if (activeSection === 's01' && targetId !== 's01') {
      const { businessName, contactName, phoneWhatsapp, email } = formData.s01_client;
      if (!businessName.trim() || !contactName.trim() || (!phoneWhatsapp.trim() && !email.trim())) {
        if (onNotifyToast) {
          onNotifyToast('⚠️ Please enter mandatory client details in Step 01 before navigating forward.');
        }
        return;
      }
    }
    setActiveSection(targetId);
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-slate-100/70 dark:bg-[#09090b] text-slate-900 dark:text-slate-100 transition-colors">
      {/* Top Action Bar */}
      <TopActionBar
        formData={formData}
        onChangeMeeting={onChangeMeeting}
        onAutoFillDemo={onAutoFillDemo}
        onResetForm={onResetForm}
        onOpenPrint={onOpenPrint}
        onSaveToVault={onSaveToVault}
        isSaved={isSaved}
        onNotifyToast={onNotifyToast}
      />

      {/* 3-Pane Split Screen Workspace */}
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        {/* Left Pane: 10-Section Stepper */}
        <LeftSidebarNav
          activeSection={activeSection}
          onSelectSection={handleSelectSectionWithValidation}
          scopeAnalysis={scopeAnalysis}
        />

        {/* Center Pane: Interactive Form Canvas */}
        <FormCanvas
          formData={formData}
          activeSection={activeSection}
          onSelectSection={handleSelectSectionWithValidation}
          onUpdateSection={onUpdateSection}
          onAutoGenerateSummary={onAutoGenerateSummary}
          scopeAnalysis={scopeAnalysis}
        />

        {/* Right Pane: Live Sticky Project Blueprint */}
        <RightLiveBlueprint
          formData={formData}
          scopeAnalysis={scopeAnalysis}
          onOpenPrint={onOpenPrint}
          onSaveToVault={onSaveToVault}
          isSaved={isSaved}
          onJumpToSummary={() => setActiveSection('s10')}
        />
      </div>
    </div>
  );
};

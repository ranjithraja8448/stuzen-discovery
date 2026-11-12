import React from 'react';
import { FeaturesMatrix } from '../../../types/discovery';
import { SectionHeader } from '../SectionHeader';
import { PillTag } from '../PillTag';
import { FEATURE_MATRIX_ITEMS } from '../../../data/discoveryQuestions';
import * as LucideIcons from 'lucide-react';
import { Check } from 'lucide-react';

interface Section05Props {
  data: FeaturesMatrix;
  onChange: (field: keyof FeaturesMatrix, value: any) => void;
  answeredCount: number;
}

export const Section05FeaturesMatrix: React.FC<Section05Props> = ({
  data,
  onChange,
  answeredCount,
}) => {
  const toggleFeature = (id: string) => {
    const exists = data.selectedFeatures.includes(id);
    if (exists) {
      onChange('selectedFeatures', data.selectedFeatures.filter(f => f !== id));
    } else {
      onChange('selectedFeatures', [...data.selectedFeatures, id]);
    }
  };

  const selectCoreTier = () => {
    const core = FEATURE_MATRIX_ITEMS.filter(f => f.tier === 'Core').map(f => f.id);
    const combined = Array.from(new Set([...data.selectedFeatures, ...core]));
    onChange('selectedFeatures', combined);
  };

  const selectAllFeatures = () => {
    onChange('selectedFeatures', FEATURE_MATRIX_ITEMS.map(f => f.id));
  };

  const clearFeatures = () => {
    onChange('selectedFeatures', []);
  };

  const toggleAdminRole = (role: string) => {
    const exists = data.adminAccessRoles.includes(role);
    if (exists) {
      onChange('adminAccessRoles', data.adminAccessRoles.filter(r => r !== role));
    } else {
      onChange('adminAccessRoles', [...data.adminAccessRoles, role]);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <SectionHeader
        number="05"
        title="Features & Functionality"
        subtitle="Select from the 22-item engineering matrix, map custom user journeys, and specify administrative privileges."
        questionRange="Q22–Q25"
        iconName="Cpu"
        answeredCount={answeredCount}
        totalQuestions={4}
      />

      {/* Q22: Interactive 22-item Feature Matrix */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q22 • 22-ITEM SYSTEM FEATURE MATRIX
            </label>
            <p className="text-xs text-slate-500 mt-0.5">
              Select all functional modules required. Each module is mapped to architectural sprints.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={selectCoreTier}
              className="text-[11px] font-mono font-medium text-blue-600 dark:text-cyan-400 hover:underline cursor-pointer"
            >
              + Core Essentials
            </button>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <button
              type="button"
              onClick={selectAllFeatures}
              className="text-[11px] font-mono font-medium text-blue-600 dark:text-cyan-400 hover:underline cursor-pointer"
            >
              Select All 22
            </button>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <button
              type="button"
              onClick={clearFeatures}
              className="text-[11px] font-mono font-medium text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>

        {/* 22 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {FEATURE_MATRIX_ITEMS.map(feat => {
            const isSelected = data.selectedFeatures.includes(feat.id);
            const Icon = (LucideIcons as any)[feat.icon] || LucideIcons.CheckCircle;

            return (
              <div
                key={feat.id}
                onClick={() => toggleFeature(feat.id)}
                className={`relative flex items-center justify-between rounded-xl p-3 border transition-all cursor-pointer select-none ${
                  isSelected
                    ? 'bg-blue-600/10 border-blue-500 shadow-glow-sm dark:bg-blue-950/30 dark:border-blue-500'
                    : 'bg-white dark:bg-[#12141a]/90 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                      {feat.label}
                    </p>
                    <span className="font-mono text-[9px] text-slate-400 uppercase">
                      {feat.tier}
                    </span>
                  </div>
                </div>

                {/* Custom check indicator */}
                <div
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                    isSelected
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'border-slate-300 dark:border-white/20'
                  }`}
                >
                  {isSelected && <Check size={11} strokeWidth={3} />}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-2">
          <input
            type="text"
            value={data.otherFeatureDetails || ''}
            onChange={e => onChange('otherFeatureDetails', e.target.value)}
            placeholder="Other custom features (e.g. AI skin analysis scanner, 3D product customizer)..."
            className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Q23: Step-by-Step Special Feature Workflow */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q23 • SPECIAL FEATURE WORKFLOW WALKTHROUGH
          </label>
          <span className="text-[10px] text-slate-400 font-mono">FLOW SPEC</span>
        </div>
        <p className="text-xs text-slate-500">
          Describe the step-by-step user journey for your most critical feature (e.g. detailed booking flow, custom quote calculator, or order approval process).
        </p>
        <textarea
          rows={3}
          value={data.specialWorkflowDetails}
          onChange={e => onChange('specialWorkflowDetails', e.target.value)}
          placeholder="Step 1: User selects clinical treatment & doctor... Step 2: Selects appointment date & clinic branch... Step 3: Pays token advance via Razorpay... Step 4: Instant WhatsApp QR confirmation..."
          className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none transition-all"
        />
      </div>

      {/* Q24 & Q25: Admin Access Roles & CMS Preference */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Q24 */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q24 • ADMIN PANEL ACCESS & ROLE HIERARCHY
            </label>
            <span className="text-[10px] text-slate-400 font-mono">RBAC</span>
          </div>
          <p className="text-xs text-slate-500">
            Who needs back-office login permissions to manage bookings, leads, or products?
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Owner / Super Admin',
              'Front-Desk / Staff Members',
              'Doctors / Service Specialists',
              'Content Editors',
              'External Accountants / Inventory Team',
            ].map(role => (
              <PillTag
                key={role}
                id={role}
                label={role}
                isSelected={data.adminAccessRoles.includes(role)}
                onToggle={toggleAdminRole}
                size="sm"
              />
            ))}
          </div>
        </div>

        {/* Q25 */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
              Q25 • POST-LAUNCH CONTENT MANAGEMENT
            </label>
            <span className="text-[10px] text-slate-400 font-mono">CMS PREFERENCE</span>
          </div>
          <p className="text-xs text-slate-500">
            How do you plan to update content, images, and prices after launch?
          </p>
          <div className="space-y-2">
            {[
              { id: 'hybrid', label: 'Hybrid: Stuzen maintains code; our team updates content via CMS' },
              { id: 'stuzen_managed', label: 'Fully Managed: Stuzen monthly retainer handles all updates' },
              { id: 'self_managed', label: 'Self Managed: Our internal developers will maintain everything' },
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => onChange('postLaunchCmsPreference', opt.label)}
                className={`w-full text-left p-2.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                  data.postLaunchCmsPreference === opt.label
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
    </div>
  );
};


import React from 'react';
import { DesignBrandDirection } from '../../../types/discovery';
import { SectionHeader } from '../SectionHeader';
import { BentoCard } from '../BentoCard';
import { PillTag } from '../PillTag';
import { BRAND_READINESS_CHIPS, VISUAL_STYLES } from '../../../data/discoveryQuestions';
import { Globe2 } from 'lucide-react';

interface Section04Props {
  data: DesignBrandDirection;
  onChange: (field: keyof DesignBrandDirection, value: any) => void;
  answeredCount: number;
}

export const Section04DesignBrand: React.FC<Section04Props> = ({
  data,
  onChange,
  answeredCount,
}) => {
  const toggleBrandChip = (id: string) => {
    const exists = data.brandReadiness.includes(id);
    if (exists) {
      onChange('brandReadiness', data.brandReadiness.filter(b => b !== id));
    } else {
      onChange('brandReadiness', [...data.brandReadiness, id]);
    }
  };

  const toggleVisualStyle = (id: string) => {
    const exists = data.visualStyles.includes(id);
    if (exists) {
      onChange('visualStyles', data.visualStyles.filter(s => s !== id));
    } else {
      onChange('visualStyles', [...data.visualStyles, id]);
    }
  };

  const updateReference = (index: number, field: 'url' | 'notes', value: string) => {
    const updated = [...data.referenceWebsites];
    if (!updated[index]) {
      updated[index] = { url: '', notes: '' };
    }
    updated[index][field] = value;
    onChange('referenceWebsites', updated);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <SectionHeader
        number="04"
        title="Design & Brand Direction"
        subtitle="Establish the visual aesthetics, brand guidelines maturity, reference benchmarks, and localization."
        questionRange="Q17–Q21"
        iconName="Palette"
        answeredCount={answeredCount}
        totalQuestions={5}
      />

      {/* Q17: Brand Identity Readiness Chips */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q17 • BRAND IDENTITY MATURITY & ASSETS READY
          </label>
          <span className="text-[10px] text-slate-400 font-mono">ASSET AUDIT</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Which core visual elements currently exist in vector format or brand guidelines documentation?
        </p>

        <div className="flex flex-wrap gap-2.5">
          {BRAND_READINESS_CHIPS.map(chip => (
            <PillTag
              key={chip.id}
              id={chip.id}
              label={chip.label}
              isSelected={data.brandReadiness.includes(chip.id)}
              onToggle={toggleBrandChip}
            />
          ))}
        </div>
      </div>

      {/* Q18: Visual Style Bento Cards (Clean 2-column layout to prevent cramping) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q18 • VISUAL DESIGN AESTHETICS (MULTI-SELECT BENTO)
          </label>
          <span className="text-[10px] text-slate-400 font-mono">MOOD & FEEL</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Select the mood, tonal sophistication, and design philosophy that reflects your brand positioning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {VISUAL_STYLES.map(style => (
            <BentoCard
              key={style.id}
              id={style.id}
              title={style.label}
              description={style.desc}
              icon={style.icon}
              isSelected={data.visualStyles.includes(style.id)}
              onSelect={toggleVisualStyle}
              multiSelect={true}
            />
          ))}
        </div>
      </div>

      {/* Q19: Reference Websites (2-3) */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q19 • BENCHMARK REFERENCE WEBSITES (INSPIRATIONS)
          </label>
          <span className="text-[10px] text-slate-400 font-mono">2–3 EXAMPLES</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Websites you admire (either direct competitors or aspirational global brands) and what specifically works well.
        </p>

        {[0, 1, 2].map(index => {
          const item = data.referenceWebsites[index] || { url: '', notes: '' };
          return (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-12 gap-3 p-3.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
              <div className="sm:col-span-5">
                <span className="text-[10px] font-mono text-slate-400">BENCHMARK {index + 1} URL</span>
                <input
                  type="text"
                  value={item.url}
                  onChange={e => updateReference(index, 'url', e.target.value)}
                  placeholder="https://example.com"
                  className="mt-1 w-full rounded-md border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3 py-1.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="sm:col-span-7">
                <span className="text-[10px] font-mono text-slate-400">WHAT DO YOU LIKE ABOUT IT?</span>
                <input
                  type="text"
                  value={item.notes}
                  onChange={e => updateReference(index, 'notes', e.target.value)}
                  placeholder="e.g. Crisp typography, smooth booking modal, subtle scroll animations..."
                  className="mt-1 w-full rounded-md border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a] px-3 py-1.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Q20: Styles to Avoid */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
            Q20 • STYLES, COLOURS OR COMPETITOR ELEMENTS TO STRICTLY AVOID
          </label>
          <span className="text-[10px] text-slate-400 font-mono">NEGATIVE CONSTRAINTS</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          What visual styles, obnoxious popups, dark patterns, or competitor clichés should our design team strictly avoid?
        </p>
        <textarea
          rows={2}
          value={data.stylesToAvoid}
          onChange={e => onChange('stylesToAvoid', e.target.value)}
          placeholder="e.g. Avoid garish neon gradients, cheesy stock photos of doctors/handshakes, aggressive discount popups, or overly dense text blocks..."
          className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none resize-none transition-all"
        />
      </div>

      {/* Q21: Multi-language Toggle + Languages input */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12141a]/90 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Globe2 size={18} className="text-blue-500" />
            <div>
              <label className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
                Q21 • MULTI-LANGUAGE (i18n) LOCALIZATION
              </label>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Does the website require content localized in more than one language?
              </p>
            </div>
          </div>

          {/* Tactile Toggle (Non-native) */}
          <button
            type="button"
            onClick={() => onChange('isMultiLanguage', !data.isMultiLanguage)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              data.isMultiLanguage ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                data.isMultiLanguage ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {data.isMultiLanguage && (
          <div className="pt-3 border-t border-slate-100 dark:border-white/5 animate-fadeIn">
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
              Target Languages (Comma-separated)
            </span>
            <input
              type="text"
              value={data.languagesList}
              onChange={e => onChange('languagesList', e.target.value)}
              placeholder="e.g. English (Primary), Tamil, Hindi, Kannada, Telugu"
              className="mt-1 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};

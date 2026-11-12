import React from 'react';
import { DiscoveryFormData, MeetingMode } from '../../types/discovery';
import { 
  Sparkles, 
  Printer, 
  Save, 
  Calendar, 
  User, 
  CheckCircle2,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface TopActionBarProps {
  formData: DiscoveryFormData;
  onChangeMeeting: (field: keyof DiscoveryFormData['meeting'], value: any) => void;
  onAutoFillDemo: () => void;
  onResetForm: () => void;
  onOpenPrint: () => void;
  onSaveToVault: () => void;
  isSaved: boolean;
}

export const TopActionBar: React.FC<TopActionBarProps> = ({
  formData,
  onChangeMeeting,
  onAutoFillDemo,
  onResetForm,
  onOpenPrint,
  onSaveToVault,
  isSaved,
}) => {
  const handleAutoFill = () => {
    onAutoFillDemo();
    // Fire celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.2 },
      colors: ['#2563EB', '#06B6D4', '#38BDF8', '#10B981'],
    });
  };

  const meetingModes: MeetingMode[] = ['Video call', 'In person', 'Phone'];

  return (
    <div className="w-full border-b border-slate-200 dark:border-white/10 bg-white/90 dark:bg-[#0c0e14]/90 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3.5 no-print transition-colors">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        {/* Meeting Metadata Controls */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10">
            <Calendar size={13} className="text-blue-500" />
            <span className="text-slate-500 dark:text-slate-400 font-medium">Date:</span>
            <input
              type="date"
              value={formData.meeting.interviewDate}
              onChange={e => onChangeMeeting('interviewDate', e.target.value)}
              className="bg-transparent font-mono text-slate-800 dark:text-slate-200 focus:outline-none cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10">
            <span className="text-slate-500 dark:text-slate-400 font-medium">Mode:</span>
            <div className="flex items-center gap-1">
              {meetingModes.map(mode => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => onChangeMeeting('meetingMode', mode)}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                    formData.meeting.meetingMode === mode
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10">
            <User size={13} className="text-blue-500 dark:text-cyan-400" />
            <span className="text-slate-500 dark:text-slate-400 font-medium">Stuzen Rep:</span>
            <input
              type="text"
              value={formData.meeting.stuzenRepresentative}
              onChange={e => onChangeMeeting('stuzenRepresentative', e.target.value)}
              placeholder="Representative Name"
              className="bg-transparent font-medium text-slate-800 dark:text-slate-200 focus:outline-none w-36 sm:w-44"
            />
          </div>
        </div>

        {/* Action Buttons: ⚡ Load Demo Client & 🖨️ Export PDF & Save */}
        <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto justify-end">
          <button
            type="button"
            onClick={handleAutoFill}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-blue-500/20 hover:from-blue-500 hover:to-cyan-500 active:scale-95 transition-all cursor-pointer"
            title="Populate complete 45-question demo Indian client answers instantly"
          >
            <Sparkles size={14} className="animate-spin" style={{ animationDuration: '3s' }} />
            <span>⚡ Load Demo Client</span>
          </button>

          <button
            type="button"
            onClick={onOpenPrint}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-white/15 bg-white dark:bg-[#12141a] px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 active:scale-95 transition-all cursor-pointer shadow-xs"
          >
            <Printer size={14} className="text-blue-500" />
            <span>🖨️ Export Official PDF</span>
          </button>

          <button
            type="button"
            onClick={onSaveToVault}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer shadow-xs ${
              isSaved
                ? 'bg-emerald-600 text-white'
                : 'bg-blue-600 text-white hover:bg-blue-500'
            }`}
          >
            {isSaved ? <CheckCircle2 size={14} /> : <Save size={14} />}
            <span>{isSaved ? 'Saved to Vault' : 'Save to Lead Vault'}</span>
          </button>

          <button
            type="button"
            onClick={onResetForm}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 px-3 py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-red-600 hover:border-red-300 dark:hover:text-red-400 transition-colors cursor-pointer"
            title="Reset to blank form"
          >
            <RotateCcw size={13} />
            <span>Reset Form</span>
          </button>
        </div>
      </div>
    </div>
  );
};

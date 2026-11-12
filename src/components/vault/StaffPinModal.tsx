import React, { useState } from 'react';
import { Shield, Lock, X, ArrowRight, AlertCircle, KeyRound } from 'lucide-react';

interface StaffPinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlockSuccess: () => void;
}

export const STAFF_PIN = '7777';

export const StaffPinModal: React.FC<StaffPinModalProps> = ({
  isOpen,
  onClose,
  onUnlockSuccess,
}) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.trim() === STAFF_PIN) {
      setError(null);
      setPin('');
      onUnlockSuccess();
    } else {
      setError('Invalid Staff Security PIN. Please enter authorized 4-digit code.');
    }
  };

  const handleQuickDemoFill = () => {
    setPin(STAFF_PIN);
    setError(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn no-print">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-[#0e1117] border border-slate-200 dark:border-white/10 p-6 sm:p-7 shadow-2xl transition-all">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Lock Icon & Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/25">
            <Lock size={22} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                INTERNAL RESTRICTED
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
              Stuzen Staff Lead Vault
            </h3>
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
          This confidential repository holds client requirement audits, contact identities, and INR commercial proposals. Authorized Stuzen Solutions personnel only.
        </p>

        {/* PIN Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5">
              Enter 4-Digit Staff Security PIN
            </label>
            <div className="relative">
              <KeyRound size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                maxLength={4}
                autoFocus
                value={pin}
                onChange={e => {
                  setPin(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="••••"
                className="w-full font-mono text-center tracking-[0.5em] text-xl rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
              <AlertCircle size={14} className="shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleQuickDemoFill}
              className="text-[11px] font-mono text-blue-600 dark:text-cyan-400 hover:underline cursor-pointer"
            >
              Demo Staff PIN: <strong>7777</strong>
            </button>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-500 cursor-pointer transition-all"
            >
              <span>Unlock Staff Vault</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

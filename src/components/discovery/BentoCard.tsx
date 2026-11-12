import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Check, IndianRupee } from 'lucide-react';

interface BentoCardProps {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  badge?: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
  multiSelect?: boolean;
  className?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  id,
  title,
  description,
  icon,
  badge,
  isSelected,
  onSelect,
  multiSelect = false,
  className = '',
}) => {
  // Dynamically resolve icon from lucide-react safely
  const IconComponent =
    icon === 'IndianRupee'
      ? IndianRupee
      : icon && (LucideIcons as any)[icon]
      ? (LucideIcons as any)[icon]
      : null;

  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -2 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      onClick={() => onSelect(id)}
      role={multiSelect ? 'checkbox' : 'radio'}
      aria-checked={isSelected}
      className={`group relative cursor-pointer select-none rounded-xl p-4 sm:p-5 transition-all duration-200 ${
        isSelected
          ? 'bg-blue-600/10 border-blue-500 shadow-glow-sm dark:bg-blue-950/40 dark:border-blue-500'
          : 'bg-white dark:bg-[#12141a]/90 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
      } border ${className}`}
    >
      {/* Active Glowing corner accent */}
      {isSelected && (
        <span className="absolute -top-px -right-px flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3.5 min-w-0 flex-1">
          {IconComponent && (
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 mt-0.5 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400'
              }`}
            >
              <IconComponent size={20} strokeWidth={2.2} />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white leading-snug">
                {title}
              </h4>
              {badge && (
                <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 dark:bg-blue-950/80 px-2.5 py-0.5 text-xs font-mono font-bold text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-500/30">
                  {badge}
                </span>
              )}
            </div>

            {description && (
              <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed break-words">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Custom Bento Selector Indicator (Non-native) */}
        <div
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all duration-200 mt-0.5 ${
            isSelected
              ? 'bg-blue-600 border-blue-500 text-white shadow-sm'
              : 'border-slate-300 dark:border-white/20 bg-transparent group-hover:border-slate-400 dark:group-hover:border-white/40'
          }`}
        >
          {isSelected && (
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            >
              <Check size={13} strokeWidth={3} />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

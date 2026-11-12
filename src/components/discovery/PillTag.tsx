import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Check } from 'lucide-react';

interface PillTagProps {
  id: string;
  label: string;
  icon?: string;
  isSelected: boolean;
  onToggle: (id: string) => void;
  className?: string;
  size?: 'sm' | 'md';
}

export const PillTag: React.FC<PillTagProps> = ({
  id,
  label,
  icon,
  isSelected,
  onToggle,
  className = '',
  size = 'md',
}) => {
  const IconComponent = icon && (LucideIcons as any)[icon] ? (LucideIcons as any)[icon] : null;

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onToggle(id)}
      className={`inline-flex items-center gap-2 select-none rounded-lg border font-medium transition-all duration-200 cursor-pointer ${
        size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-1.5 text-xs sm:text-sm'
      } ${
        isSelected
          ? 'bg-blue-600/15 border-blue-500 text-blue-600 dark:text-blue-300 shadow-glow-sm dark:bg-blue-950/40'
          : 'bg-slate-100/80 dark:bg-[#12141a] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20'
      } ${className}`}
    >
      <div
        className={`flex items-center justify-center rounded-full transition-colors ${
          isSelected ? 'text-blue-500 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'
        }`}
      >
        {isSelected ? (
          <Check size={size === 'sm' ? 12 : 14} strokeWidth={3} />
        ) : IconComponent ? (
          <IconComponent size={size === 'sm' ? 12 : 14} strokeWidth={2} />
        ) : (
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-600" />
        )}
      </div>

      <span className="tracking-tight">{label}</span>
    </motion.button>
  );
};


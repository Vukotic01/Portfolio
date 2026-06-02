'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-200 text-xs font-bold font-mono tracking-wider"
      aria-label="Toggle language"
    >
      {lang === 'en' ? 'SR' : 'EN'}
    </button>
  );
}

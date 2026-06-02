'use client';

import Link from 'next/link';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { personal } from '@/lib/data/personal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const socialLinks = [
  { href: personal.github, label: 'GitHub', icon: GithubIcon },
  { href: personal.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
];

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border bg-surface-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold text-text-primary">
            Veljko<span className="text-accent">.</span>Vukotic
          </p>
          <p className="text-sm text-text-muted mt-1">{t.hero.title}</p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>

        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} Veljko Vukotic. {t.footer.builtWith}.
        </p>
      </div>
    </footer>
  );
}

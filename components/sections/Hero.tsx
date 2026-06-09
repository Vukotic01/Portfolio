'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { personal } from '@/lib/data/personal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(14,165,233,0.1),transparent)]" />
        <div className="grid-overlay" />
        {/* Sweeping light beam */}
        <div className="hero-beam" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        {/* Available badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            {t.hero.badge}
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-[2.6rem] sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
          <span className="text-text-primary">{personal.firstName}</span>
          <br />
          <span className="text-accent">{personal.lastName}</span>
        </h1>

        {/* Role */}
        <div className="mb-6">
          <p className="text-xl md:text-2xl text-text-muted font-medium tracking-wide">
            {t.hero.title}
          </p>
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg text-text-muted max-w-xl leading-relaxed mb-10">
          {t.hero.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-10 md:mb-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-white font-semibold text-sm hover:bg-accent/90 shadow-[0_0_24px_rgba(14,165,233,0.35)] hover:shadow-[0_0_40px_rgba(14,165,233,0.55)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Briefcase size={16} />
            {t.hero.hireMe}
          </Link>
        </div>

        {/* Social links + stats */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>

          <div className="w-px h-6 bg-border hidden sm:block" />

          <div className="flex gap-8">
            {[
              { value: '1+', label: t.hero.yearsExp },
              { value: '20+', label: t.hero.technologies },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-lg font-bold font-display text-text-primary">{value}</p>
                <p className="text-xs text-text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-xs tracking-widest uppercase">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

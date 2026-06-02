'use client';

import { PageWrapper } from '@/components/layout/PageWrapper';
import { SkillBadges } from '@/components/sections/SkillBadges';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { GraduationCap, MapPin } from 'lucide-react';
import { personal } from '@/lib/data/personal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <PageWrapper>
      <section className="pt-28 md:pt-32 pb-14 md:pb-20 px-4 sm:px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">{t.about.label}</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
            {t.about.title}
            <br />
            <span className="text-accent">{t.about.titleAccent}</span>
          </h1>

          <div className="mt-12 max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
              {t.about.hi} {personal.firstName}{t.about.hiSuffix}
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              {t.about.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-muted hover:border-accent/50 hover:text-text-primary transition-all duration-200 text-sm font-medium"
              >
                {t.about.viewGithub}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 sm:px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">{t.about.academicBg}</p>
          <h2 className="font-display text-3xl font-bold text-text-primary mb-10 section-heading">
            {t.about.education}
          </h2>

          <div className="flex items-start gap-4 sm:gap-6 bg-surface-secondary border border-border rounded-xl p-5 sm:p-6 max-w-2xl hover:border-accent/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                {t.about.degree}
              </h3>
              <p className="text-accent font-medium text-sm mb-2">
                {personal.education.institution}
              </p>
              <div className="flex items-center gap-1.5 text-sm text-text-muted">
                <MapPin size={13} />
                {personal.education.location}
              </div>
              <span className="inline-flex items-center mt-3 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 border border-green-500/20 text-green-400">
                {t.about.graduated}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">{t.about.expertiseLabel}</p>
          <h2 className="font-display text-3xl font-bold text-text-primary mb-10 md:mb-12 section-heading">
            {t.about.skillsTitle}
          </h2>
          <SkillBadges />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">{t.about.expLabel}</p>
          <h2 className="font-display text-3xl font-bold text-text-primary mb-10 md:mb-12 section-heading">
            {t.about.bgTitle}
          </h2>
          <ExperienceTimeline />
        </div>
      </section>
    </PageWrapper>
  );
}

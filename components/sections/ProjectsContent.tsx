'use client';

import { PageWrapper } from '@/components/layout/PageWrapper';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function ProjectsContent() {
  const { t } = useLanguage();

  return (
    <PageWrapper>
      <section className="pt-28 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">{t.projects.label}</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-text-primary leading-tight mb-4">
            {t.projects.title}
          </h1>
          <p className="text-text-muted max-w-2xl text-base md:text-lg leading-relaxed mb-10 md:mb-16">
            {t.projects.subtitle}
          </p>
          <ProjectGrid />
        </div>
      </section>
    </PageWrapper>
  );
}

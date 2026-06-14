'use client';

import Link from 'next/link';
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';

export function ProjectDetailContent({ project }: { project: Project }) {
  const { t } = useLanguage();
  const pd = t.projectData[project.slug];

  const title = project.title;
  const shortDescription = pd?.shortDescription ?? project.shortDescription;
  const description = pd?.description ?? project.description;
  const problem = pd?.problem ?? project.problem;
  const solution = pd?.solution ?? project.solution;
  const outcome = pd?.outcome ?? project.outcome;

  const sections = [
    { label: t.projectDetail.problem, content: problem },
    { label: t.projectDetail.solution, content: solution },
    { label: t.projectDetail.outcome, content: outcome },
  ];

  const gallery = project.gallery ?? [];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + gallery.length) % gallery.length : null)), [gallery.length]);
  const next = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % gallery.length : null)), [gallery.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, closeLightbox, prev, next]);

  return (
    <PageWrapper>
      <section className="relative pt-28 md:pt-32 pb-14 md:pb-20 px-4 sm:px-6 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,rgba(14,165,233,0.1),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            {t.projectDetail.backToProjects}
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="accent">{tag}</Badge>
            ))}
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-text-primary leading-tight mb-4">
            {title}
          </h1>
          <p className="text-base sm:text-xl text-text-muted leading-relaxed mb-8 max-w-2xl">
            {shortDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-muted hover:border-accent/50 hover:text-text-primary transition-all duration-200 text-sm font-medium"
            >
              <GithubIcon size={16} />
              {t.projectDetail.viewOnGithub}
            </a>
            {project.frontendUrl && (
              <a
                href={project.frontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-muted hover:border-accent/50 hover:text-text-primary transition-all duration-200 text-sm font-medium"
              >
                <GithubIcon size={16} />
                {t.projectDetail.frontendProject}
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent/90 shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-200"
              >
                <ExternalLink size={16} />
                {t.projectDetail.liveDemo}
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="font-display text-sm font-semibold text-text-muted uppercase tracking-widest mb-4">
              {t.projectDetail.techStack}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">{tech}</Badge>
              ))}
            </div>
          </div>

          <div className="mb-10 md:mb-16">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
              {t.projectDetail.overview}
            </h2>
            <p className="text-text-muted leading-loose text-base">{description}</p>
          </div>

          {gallery.length > 0 && (
            <div className="mb-10 md:mb-16">
              <h2 className="font-display text-sm font-semibold text-text-muted uppercase tracking-widest mb-6">
                Gallery
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {gallery.map((src, idx) => (
                  <button
                    key={src}
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative aspect-video w-full overflow-hidden rounded-xl border border-border hover:border-accent/50 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Image
                      src={src}
                      alt={`${title} screenshot ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 400px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-8">
            {sections.map(({ label, content }, i) => (
              <div
                key={label}
                className="relative pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300"
              >
                <span className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-accent" />
                <h3 className="font-display text-lg font-semibold text-text-primary mb-3">
                  {String(i + 1).padStart(2, '0')} — {label}
                </h3>
                <p className="text-text-muted leading-loose">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {gallery.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                aria-label="Previous"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                aria-label="Next"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          <div
            className="relative max-w-5xl w-full mx-16 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery[lightboxIndex]}
              alt={`${title} screenshot ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {gallery.length > 1 && (
            <div className="absolute bottom-4 flex gap-2">
              {gallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(idx); }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${idx === lightboxIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </PageWrapper>
  );
}

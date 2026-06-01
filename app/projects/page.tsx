import type { Metadata } from 'next';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { ProjectGrid } from '@/components/sections/ProjectGrid';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of fullstack, frontend, and backend projects by Alex Rivera.',
};

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <section className="pt-28 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Portfolio</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-text-primary leading-tight mb-4">
            Projects
          </h1>
          <p className="text-text-muted max-w-2xl text-base md:text-lg leading-relaxed mb-10 md:mb-16">
            A curated selection of things I've built — from SaaS platforms and APIs to open source
            tools and browser apps. Each project is a learning experience.
          </p>

          <ProjectGrid />
        </div>
      </section>
    </PageWrapper>
  );
}

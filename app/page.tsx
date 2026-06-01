import { Hero } from '@/components/sections/Hero';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { getFeaturedProjects } from '@/lib/data/projects';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Hero />

      {/* Featured Projects teaser */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
                Selected Work
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary section-heading">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors duration-200 shrink-0"
            >
              View all
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-accent-dim p-12 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_100%,rgba(14,165,233,0.08),transparent)] pointer-events-none" />
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Open to Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Let's build something great together
            </h2>
            <p className="text-text-muted max-w-lg mx-auto mb-8 text-base">
              I'm available for fulltime roles, internships, and freelance projects. Let's talk.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 shadow-[0_0_30px_rgba(14,165,233,0.35)] hover:shadow-[0_0_50px_rgba(14,165,233,0.5)] transition-all duration-200"
            >
              Get In Touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { getProjectBySlug, projects } from '@/lib/data/projects';
import { Badge } from '@/components/ui/Badge';
import { PageWrapper } from '@/components/layout/PageWrapper';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const sections = [
    { label: 'The Problem', content: project.problem },
    { label: 'The Solution', content: project.solution },
    { label: 'The Outcome', content: project.outcome },
  ];

  return (
    <PageWrapper>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 px-6 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,rgba(14,165,233,0.1),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Projects
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="accent">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-text-primary leading-tight mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-text-muted leading-relaxed mb-8 max-w-2xl">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-muted hover:border-accent/50 hover:text-text-primary transition-all duration-200 text-sm font-medium"
            >
              <GithubIcon size={16} />
              View on GitHub
            </a>
            {project.frontendUrl && (
              <a
                href={project.frontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-muted hover:border-accent/50 hover:text-text-primary transition-all duration-200 text-sm font-medium"
              >
                <GithubIcon size={16} />
                Frontend Project
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
                Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Tech stack */}
          <div className="mb-16">
            <h2 className="font-display text-sm font-semibold text-text-muted uppercase tracking-widest mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-4">Overview</h2>
            <p className="text-text-muted leading-loose text-base">{project.description}</p>
          </div>

          {/* Problem / Solution / Outcome */}
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
    </PageWrapper>
  );
}

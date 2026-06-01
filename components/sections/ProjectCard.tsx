'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface ProjectCardProps {
  project: Project;
  index: number;
  activeFilter?: string;
}

export function ProjectCard({ project, index, activeFilter }: ProjectCardProps) {
  const githubHref =
    activeFilter === 'Frontend' && project.frontendUrl
      ? project.frontendUrl
      : activeFilter === 'Backend' && project.backendUrl
      ? project.backendUrl
      : project.githubUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative bg-surface-secondary border border-border rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(14,165,233,0.08)]"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="accent" className="text-[10px] px-2 py-0.5">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-lg border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
            aria-label="GitHub"
          >
            <GithubIcon size={15} />
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
              aria-label="Live Demo"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-text-muted leading-relaxed line-clamp-3 flex-1">
        {project.shortDescription}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((tech) => (
          <Badge key={tech} variant="default" className="text-[11px]">
            {tech}
          </Badge>
        ))}
        {project.tech.length > 5 && (
          <Badge variant="default" className="text-[11px]">
            +{project.tech.length - 5}
          </Badge>
        )}
      </div>

      {/* View details link */}
      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center gap-1.5 text-sm text-accent font-medium hover:gap-2.5 transition-all duration-200"
      >
        View case study
        <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}

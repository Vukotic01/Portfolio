'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectTag } from '@/types';
import { cn } from '@/lib/utils/cn';

type FilterOption = 'All' | ProjectTag;
const filters: FilterOption[] = ['All', 'Fullstack', 'Frontend', 'Backend'];

export function ProjectGrid() {
  const [active, setActive] = useState<FilterOption>('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={cn(
              'relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
              active === filter
                ? 'text-white'
                : 'text-text-muted border border-border hover:border-accent/40 hover:text-text-primary'
            )}
          >
            {active === filter && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-accent shadow-[0_0_16px_rgba(14,165,233,0.4)]"
                transition={{ type: 'spring', duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{filter}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} index={i} activeFilter={active} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

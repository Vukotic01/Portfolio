'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/data/experience';
import { MapPin, Calendar } from 'lucide-react';

export function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent hidden md:block" />

      <div className="flex flex-col gap-12">
        {experience.map((job, i) => (
          <motion.div
            key={`${job.company}-${i}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative md:pl-12"
          >
            {/* Timeline dot */}
            <div className="hidden md:flex absolute left-0 top-1 w-8 h-8 items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
              {job.current && (
                <span className="absolute w-3 h-3 rounded-full bg-accent/40 animate-ping" />
              )}
            </div>

            <div className="group bg-surface-secondary border border-border rounded-xl p-5 sm:p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.06)]">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">{job.role}</h3>
                  <p className="text-accent font-medium">{job.company}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-text-muted shrink-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    {job.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-2">
                {job.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-3 text-sm text-text-muted leading-relaxed">
                    <span className="text-accent mt-1.5 shrink-0">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

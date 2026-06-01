import type { Metadata } from 'next';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { SkillBadges } from '@/components/sections/SkillBadges';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { Download, User, GraduationCap, MapPin } from 'lucide-react';
import { personal } from '@/lib/data/personal';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${personal.name} — fullstack developer based in ${personal.location}.`,
};

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">About Me</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
            Building things that
            <br />
            <span className="text-accent">work & matter</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] max-w-sm rounded-2xl border border-border bg-surface-secondary flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,165,233,0.15),transparent_60%)]" />
                <div className="flex flex-col items-center gap-3 text-text-muted">
                  <User size={64} strokeWidth={1} />
                  <p className="text-sm">Photo coming soon</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-surface-tertiary border border-border rounded-xl px-5 py-3 shadow-xl">
                <p className="font-display font-bold text-2xl text-accent">1+</p>
                <p className="text-xs text-text-muted">Year of experience</p>
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
                Hi, I'm {personal.firstName}
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                {personal.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={personal.cv}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold text-sm hover:bg-accent/90 shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-200"
                >
                  <Download size={16} />
                  Download CV
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-muted hover:border-accent/50 hover:text-text-primary transition-all duration-200 text-sm font-medium"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Academic Background</p>
          <h2 className="font-display text-3xl font-bold text-text-primary mb-10 section-heading">
            Education
          </h2>

          <div className="flex items-start gap-6 bg-surface-secondary border border-border rounded-xl p-6 max-w-2xl hover:border-accent/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                {personal.education.degree}
              </h3>
              <p className="text-accent font-medium text-sm mb-2">
                {personal.education.institution}
              </p>
              <div className="flex items-center gap-1.5 text-sm text-text-muted">
                <MapPin size={13} />
                {personal.education.location}
              </div>
              <span className="inline-flex items-center mt-3 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 border border-green-500/20 text-green-400">
                {personal.education.status}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Expertise</p>
          <h2 className="font-display text-3xl font-bold text-text-primary mb-12 section-heading">
            Skills & Technologies
          </h2>
          <SkillBadges />
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Experience</p>
          <h2 className="font-display text-3xl font-bold text-text-primary mb-12 section-heading">
            Background
          </h2>
          <ExperienceTimeline />
        </div>
      </section>
    </PageWrapper>
  );
}

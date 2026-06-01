export type ProjectTag = 'Frontend' | 'Backend' | 'Fullstack';
export type SkillCategory = 'Frontend' | 'Backend' | 'DevOps/Tools' | 'Databases';

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  tags: ProjectTag[];
  githubUrl: string;
  demoUrl?: string | null;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface ExperienceBullet {
  text: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  current?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

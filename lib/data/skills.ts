import { Skill, SkillCategory } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },

  // Backend
  { name: 'Java', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'PHP', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Go', category: 'Backend' },
  { name: 'C', category: 'Backend' },
  { name: 'C++', category: 'Backend' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases' },
  { name: 'Firebase', category: 'Databases' },
  { name: 'Oracle', category: 'Databases' },
  { name: 'SQL', category: 'Databases' },
  { name: 'Neo4j', category: 'Databases' },

  // DevOps/Tools
  { name: 'Git', category: 'DevOps/Tools' },
  { name: 'Docker', category: 'DevOps/Tools' },
  { name: 'REST APIs', category: 'DevOps/Tools' },
];

const CATEGORY_ORDER: SkillCategory[] = [
  'Frontend',
  'Backend',
  'Databases',
  'DevOps/Tools',
];

export function getSkillsByCategory() {
  return CATEGORY_ORDER.map((cat) => ({
    category: cat,
    skills: skills.filter((s) => s.category === cat),
  }));
}

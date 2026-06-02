import type { Metadata } from 'next';
import { ProjectsContent } from '@/components/sections/ProjectsContent';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of projects by Veljko Vukotic — fullstack, frontend, and backend.',
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}

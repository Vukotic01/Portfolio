import type { Metadata } from 'next';
import { AboutContent } from '@/components/sections/AboutContent';
import { personal } from '@/lib/data/personal';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${personal.name} — software developer based in ${personal.location}.`,
};

export default function AboutPage() {
  return <AboutContent />;
}

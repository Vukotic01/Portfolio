import type { Metadata } from 'next';
import { ContactContent } from '@/components/sections/ContactContent';
import { personal } from '@/lib/data/personal';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${personal.name} — available for freelance projects and collaboration.`,
};

export default function ContactPage() {
  return <ContactContent />;
}

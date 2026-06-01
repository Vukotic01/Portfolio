import type { Metadata } from 'next';
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Veljko Vukotic — Software Developer',
    template: '%s | Veljko Vukotic',
  },
  description:
    'Software developer based in Belgrade, building web applications across Angular, React, Java, Go, and more.',
  keywords: ['Software Developer', 'Angular', 'React', 'TypeScript', 'Java', 'Go', 'Portfolio', 'Belgrade'],
  authors: [{ name: 'Veljko Vukotic' }],
  openGraph: {
    type: 'website',
    title: 'Veljko Vukotic — Software Developer',
    description: 'Software developer based in Belgrade, building web applications across the entire stack.',
    siteName: 'Veljko Vukotic Portfolio',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-text-primary">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

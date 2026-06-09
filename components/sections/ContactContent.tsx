'use client';

import { PageWrapper } from '@/components/layout/PageWrapper';
import { ContactForm } from '@/components/sections/ContactForm';
import { MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import Link from 'next/link';
import { personal } from '@/lib/data/personal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function ContactContent() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: 'github.com/Vukotic01',
      href: personal.github,
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/veljko-vukotic',
      href: personal.linkedin,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: null,
    },
  ];

  return (
    <PageWrapper>
      <section className="pt-28 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
            {t.contact.label}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-text-primary leading-tight mb-4">
            {t.contact.title}
          </h1>
          <p className="text-text-muted max-w-xl text-base md:text-lg leading-relaxed mb-10 md:mb-16">
            {t.contact.subtitle}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            <div className="lg:col-span-3">
              <div className="bg-surface-secondary border border-border rounded-2xl p-5 sm:p-8">
                <h2 className="font-display text-xl font-semibold text-text-primary mb-6">
                  {t.contact.sendMessage}
                </h2>
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <h2 className="font-display text-lg font-semibold text-text-primary mb-6">
                  {t.contact.findOnline}
                </h2>
                <ul className="space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg border border-border bg-surface-secondary flex items-center justify-center shrink-0 text-accent">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-text-muted mb-0.5">{label}</p>
                        {href ? (
                          <Link
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sm text-text-primary hover:text-accent transition-colors duration-200"
                          >
                            {value}
                          </Link>
                        ) : (
                          <p className="text-sm text-text-primary">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  <span className="text-sm font-medium text-green-400">{t.contact.availableStatus}</span>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  {t.contact.availableText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

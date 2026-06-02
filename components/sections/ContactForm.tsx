'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { contactSchema, ContactSchema } from '@/lib/validations/contact';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { useLanguage } from '@/lib/i18n/LanguageContext';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useLanguage();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactSchema) {
    setFormState('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? 'Something went wrong');
      }

      setFormState('success');
      reset();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message');
      setFormState('error');
    }
  }

  if (formState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 py-16 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary">{t.form.messageSent}</h3>
        <p className="text-text-muted max-w-sm">
          {t.form.thankYou}
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="mt-2 text-sm text-accent hover:underline"
        >
          {t.form.sendAnother}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          id="name"
          label={t.form.name}
          placeholder={t.form.namePlaceholder}
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          id="email"
          label={t.form.email}
          type="email"
          placeholder={t.form.emailPlaceholder}
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <Input
        id="subject"
        label={t.form.subject}
        placeholder={t.form.subjectPlaceholder}
        error={errors.subject?.message}
        {...register('subject')}
      />

      <Textarea
        id="message"
        label={t.form.message}
        placeholder={t.form.messagePlaceholder}
        rows={6}
        error={errors.message?.message}
        {...register('message')}
      />

      <AnimatePresence>
        {formState === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-3 p-4 rounded-lg border border-red-500/30 bg-red-500/10"
          >
            <AlertCircle size={18} className="text-red-400 shrink-0" />
            <p className="text-sm text-red-400">{errorMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={formState === 'loading'}
        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-white font-semibold text-sm hover:bg-accent/90 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
      >
        {formState === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {t.form.sending}
          </>
        ) : (
          <>
            {t.form.send}
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}

import { z } from 'zod';

const MALICIOUS_PATTERNS = [
  /<script[\s\S]*?>/i,
  /javascript\s*:/i,
  /on\w+\s*=/i,
  /data\s*:/i,
  /<iframe/i,
  /<object/i,
  /<embed/i,
  /eval\s*\(/i,
  /union\s+select/i,
  /drop\s+table/i,
  /insert\s+into/i,
  /exec\s*\(/i,
  /--\s*$/m,
  /\/\*[\s\S]*?\*\//,
];

function isSafe(value: string): boolean {
  return !MALICIOUS_PATTERNS.some((pattern) => pattern.test(value));
}

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name too long')
    .refine(isSafe, 'Name contains invalid content'),

  email: z
    .string()
    .email('Please enter a valid email address'),

  subject: z
    .string()
    .min(4, 'Subject must be at least 4 characters')
    .max(200, 'Subject too long')
    .refine(isSafe, 'Subject contains invalid content'),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message too long')
    .refine(isSafe, 'Message contains invalid content'),
});

export type ContactSchema = z.infer<typeof contactSchema>;

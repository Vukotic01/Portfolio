'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
}

const variantClasses = {
  primary:
    'bg-accent text-white hover:bg-accent/90 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]',
  secondary:
    'bg-surface-secondary text-text-primary border border-border hover:border-accent/50 hover:bg-surface-tertiary',
  ghost: 'text-text-muted hover:text-text-primary hover:bg-surface-secondary',
  outline:
    'border border-accent text-accent hover:bg-accent hover:text-white',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

import { cn } from '@/lib/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}

const variantClasses = {
  default: 'bg-surface-secondary text-text-muted border border-border',
  accent: 'bg-accent/10 text-accent border border-accent/20',
  outline: 'border border-border text-text-muted hover:border-accent/50 hover:text-accent transition-colors',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

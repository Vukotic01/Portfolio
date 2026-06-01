import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface-secondary border border-border rounded-xl p-6',
        hover &&
          'transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.08)] hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}

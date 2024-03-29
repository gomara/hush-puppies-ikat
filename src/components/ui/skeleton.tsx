import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-pulse bg-muted opacity-80', className)} {...props} />;
}

export { Skeleton };

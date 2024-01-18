import Link from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';

interface CustomLinkProps {
  children: React.ReactNode;
  className: string | undefined;
  href: string;
}

function CustomLink({ href, className, children, ...props }: CustomLinkProps) {
  return (
    <Link {...props} className={cn('text-sm hover:opacity-40', className)} href={href}>
      {children}
    </Link>
  );
}

export default CustomLink;

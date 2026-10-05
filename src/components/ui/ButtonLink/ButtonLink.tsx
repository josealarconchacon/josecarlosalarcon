import type { AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import styles from './ButtonLink.module.css';

type Variant = 'primary' | 'secondary';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
}

export function ButtonLink({ variant = 'primary', className, ...props }: ButtonLinkProps) {
  return <a className={cn(styles.button, styles[variant], className)} {...props} />;
}

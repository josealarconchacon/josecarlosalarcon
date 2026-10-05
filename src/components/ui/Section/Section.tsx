import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  title: string;
  intro?: string;
  actions?: ReactNode;
  tone?: 'default' | 'muted';
  children: ReactNode;
}

/** Shared section shell*/
export function Section({ id, title, intro, actions, tone = 'default', children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(styles.section, tone === 'muted' && styles.muted)}
    >
      <div className={cn('container', 'reveal', styles.inner)}>
        <header className={styles.header}>
          <div className={styles.titles}>
            <h2 id={headingId} className={styles.title}>
              {title}
            </h2>
            {intro && <p className={styles.intro}>{intro}</p>}
          </div>
          {actions}
        </header>
        {children}
      </div>
    </section>
  );
}

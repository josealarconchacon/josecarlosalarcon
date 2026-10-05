'use client';

import { useMemo } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/lib/cn';
import type { NavItem, SiteConfig } from '@/types/content';
import styles from './SiteHeader.module.css';

interface SiteHeaderProps {
  site: Pick<SiteConfig, 'name' | 'initials'>;
  navItems: readonly NavItem[];
}

export function SiteHeader({ site, navItems }: SiteHeaderProps) {
  const sectionIds = useMemo(() => navItems.map((item) => item.sectionId), [navItems]);
  const activeId = useActiveSection(sectionIds);

  return (
    <header className={styles.header}>
      <nav aria-label="Primary" className={cn('container', styles.nav)}>
        <a href="#top" className={styles.brand}>
          <span className={styles.monogram} aria-hidden="true">
            {site.initials}
          </span>
          <span className={styles.name}>{site.name}</span>
        </a>

        <ul className={styles.links}>
          {navItems.map(({ sectionId, label }) => {
            const isActive = activeId === sectionId;
            return (
              <li key={sectionId}>
                <a
                  href={`#${sectionId}`}
                  className={cn(styles.link, isActive && styles.active)}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {label}
                </a>
              </li>
            );
          })}
          <li>
            <a href="#contact" className={styles.cta}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

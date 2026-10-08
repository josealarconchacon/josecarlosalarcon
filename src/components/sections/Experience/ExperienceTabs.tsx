'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import { cn } from '@/lib/cn';
import type { Role } from '@/types/content';
import styles from './Experience.module.css';

interface ExperienceTabsProps {
  roles: readonly Role[];
}

export function ExperienceTabs({ roles }: ExperienceTabsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  if (roles.length === 0) return null;

  const selected = roles[selectedIndex];

  // Select a tab and move focus to it.
  const focusTab = (index: number) => {
    const next = (index + roles.length) % roles.length;
    setSelectedIndex(next);
    tabRefs.current[next]?.focus();
  };

  // Arrow keys go to the next or previous tab.
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const keyActions: Record<string, () => void> = {
      ArrowDown: () => focusTab(selectedIndex + 1),
      ArrowRight: () => focusTab(selectedIndex + 1),
      ArrowUp: () => focusTab(selectedIndex - 1),
      ArrowLeft: () => focusTab(selectedIndex - 1),
      Home: () => focusTab(0),
      End: () => focusTab(roles.length - 1),
    };
    const action = keyActions[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  };

  return (
    <div className={styles.layout}>
      <div role="tablist" aria-label="Roles" aria-orientation="vertical" className={styles.tablist}>
        {roles.map((role, index) => {
          const isSelected = index === selectedIndex;
          return (
            <button
              key={role.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={`tab-${role.id}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${role.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={onKeyDown}
              className={cn(styles.tab, isSelected && styles.tabSelected)}
            >
              <span className={styles.tabOrg}>{role.organization}</span>
              <span className={styles.tabDates}>{role.dates}</span>
            </button>
          );
        })}
      </div>

      {/* Details for whichever role is selected */}
      <div
        id={`panel-${selected.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${selected.id}`}
        tabIndex={0}
        className={styles.panel}
      >
        <p className={styles.panelDates}>{selected.dates}</p>
        <h3 className={styles.panelTitle}>{selected.title}</h3>
        <p className={styles.panelOrg}>
          {selected.organization}, {selected.location}
        </p>
        <ul className={styles.highlights}>
          {selected.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

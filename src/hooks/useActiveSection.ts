'use client';

import { useEffect, useState } from 'react';

/**
   Tracks which section is on screen so the header can highlight its nav link.
*/
export function useActiveSection(sectionIds: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const idsKey = sectionIds.join('|');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const ids = idsKey.split('|');
    const visible = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting);
        }
        const current = ids.find((id) => visible.get(id)) ?? null;
        setActiveId(current);
      },
      { rootMargin: '-90px 0px -55% 0px' },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [idsKey]);

  return activeId;
}

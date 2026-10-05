'use client';

import { useState } from 'react';
import {
  ALL,
  INITIAL_VISIBLE_PROJECTS,
  filterProjects,
  getFilterOptions,
  shouldShowFilters,
  type ProjectFilter,
} from '@/lib/projects';
import { cn } from '@/lib/cn';
import type { Project } from '@/types/content';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

interface ProjectsExplorerProps {
  projects: readonly Project[];
}

// Project cards with filters and a "Show all" button.
export function ProjectsExplorer({ projects }: ProjectsExplorerProps) {
  const [filter, setFilter] = useState<ProjectFilter>(ALL);
  const [showAll, setShowAll] = useState(false);

  const filtersEnabled = shouldShowFilters(projects);
  const activeFilter = filtersEnabled ? filter : ALL;
  const matched = filterProjects(projects, activeFilter);
  const hasMore = matched.length > INITIAL_VISIBLE_PROJECTS;
  const visible = hasMore && !showAll ? matched.slice(0, INITIAL_VISIBLE_PROJECTS) : matched;

  const selectFilter = (value: ProjectFilter) => {
    setFilter(value);
    setShowAll(false);
  };

  return (
    <div className={styles.explorer}>
      {filtersEnabled && (
        <div role="group" aria-label="Filter projects by type" className={styles.filters}>
          {getFilterOptions(projects).map((option) => {
            const isActive = option.value === activeFilter;
            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => selectFilter(option.value)}
                className={cn(styles.filter, isActive && styles.filterActive)}
              >
                {option.label}
                <span className={styles.count}>{option.count}</span>
              </button>
            );
          })}
        </div>
      )}

      <ul className={styles.grid}>
        {visible.map((project) => (
          <li key={project.id} className={styles.gridItem}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className={styles.more}>
          <button
            type="button"
            className={styles.moreButton}
            onClick={() => setShowAll((value) => !value)}
          >
            {showAll ? 'Show fewer projects' : `Show all ${matched.length} projects`}
          </button>
        </div>
      )}
    </div>
  );
}

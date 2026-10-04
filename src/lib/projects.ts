import type { Project, ProjectCategory } from '@/types/content';

export const ALL = 'all' as const;
export type ProjectFilter = ProjectCategory | typeof ALL;

/** Filters only help once there is enough content to filter. */
export const MIN_PROJECTS_FOR_FILTERS = 4;
export const INITIAL_VISIBLE_PROJECTS = 6;

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  web: 'Web',
  mobile: 'Mobile',
  automation: 'Automation',
  data: 'Data',
  backend: 'Back end',
};

export interface FilterOption {
  value: ProjectFilter;
  label: string;
  count: number;
}

/** Categories first seen order */
export function getCategories(list: readonly Project[]): ProjectCategory[] {
  return [...new Set(list.map((p) => p.category))];
}

export function shouldShowFilters(list: readonly Project[]): boolean {
  return list.length >= MIN_PROJECTS_FOR_FILTERS && getCategories(list).length > 1;
}

export function getFilterOptions(list: readonly Project[]): FilterOption[] {
  return [
    { value: ALL, label: 'All', count: list.length },
    ...getCategories(list).map((category) => ({
      value: category,
      label: CATEGORY_LABELS[category],
      count: list.filter((p) => p.category === category).length,
    })),
  ];
}

export function filterProjects(list: readonly Project[], filter: ProjectFilter): Project[] {
  return filter === ALL ? [...list] : list.filter((p) => p.category === filter);
}

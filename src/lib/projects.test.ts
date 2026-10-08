import { describe, it, expect } from 'vitest';
import type { Project, ProjectCategory } from '@/types/content';
import { ALL, filterProjects, getFilterOptions, shouldShowFilters } from './projects';

let seq = 0;
const makeProject = (category: ProjectCategory): Project =>
  ({ slug: `p-${++seq}`, title: `Project ${seq}`, category }) as unknown as Project;
const makeMany = (...categories: ProjectCategory[]) => categories.map(makeProject);

describe('filterProjects', () => {
  const list = makeMany('web', 'mobile', 'web');

  it('returns every project for "all"', () => {
    expect(filterProjects(list, ALL)).toEqual(list);
  });

  it('returns only projects in the selected category', () => {
    expect(filterProjects(list, 'web')).toEqual([list[0], list[2]]);
  });
});

describe('getFilterOptions', () => {
  it('puts "All" first, then categories in first-seen order with correct counts', () => {
    const list = makeMany('data', 'web', 'data', 'backend');
    expect(getFilterOptions(list)).toEqual([
      { value: 'all', label: 'All', count: 4 },
      { value: 'data', label: 'Data', count: 2 },
      { value: 'web', label: 'Web', count: 1 },
      { value: 'backend', label: 'Back end', count: 1 },
    ]);
  });
});

describe('shouldShowFilters', () => {
  it.each<[string, boolean, ProjectCategory[]]>([
    ['3 projects, 2 categories', false, ['web', 'mobile', 'web']],
    ['4 projects, 2 categories', true, ['web', 'mobile', 'web', 'web']],
    ['4 projects, 1 category', false, ['web', 'web', 'web', 'web']],
  ])('%s → %s', (_label, expected, categories) => {
    expect(shouldShowFilters(makeMany(...categories))).toBe(expected);
  });
});

/**
    Shared types for the site's content (projects, roles, skills, nav, site config).
*/

export type ProjectCategory = 'web' | 'mobile' | 'automation' | 'data' | 'backend';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  kind: string;
  description: string;
  tags: readonly string[];
  codeUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Role {
  id: string;
  organization: string;
  title: string;
  location: string;
  dates: string;
  highlights: readonly string[];
}

export type SkillIconName = 'code' | 'components' | 'terminal' | 'database' | 'check';

export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: SkillIconName;
}

export interface NavItem {
  sectionId: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  initials: string;
  role: string;
  description: string;
  location: string;
  availability: string;
  url: string;
  email: string;
  links: {
    github: string;
    linkedin?: string;
    resume?: string;
  };
}

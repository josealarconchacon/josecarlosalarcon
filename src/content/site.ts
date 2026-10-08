import type { NavItem, SiteConfig } from '@/types/content';

export const siteConfig: SiteConfig = {
  name: 'Jose Alarcon Chacon',
  shortName: 'Jose',
  initials: 'JA',
  role: 'Software Engineer',
  description:
    'Early-career software engineer in New York building for the web. Former Software Engineering Apprentice at Wells Fargo and Computer Science student at Hunter College.',
  location: 'New York, NY',
  availability: 'Open to junior software engineering roles',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  email: 'jose.alarcon.chacon@gmail.com',
  links: {
    github: 'https://github.com/josealarconchacon',
    linkedin: 'https://www.linkedin.com/in/jose-alarcon-chacon/',
    resume: '/resume.pdf',
  },
};

export const navItems: readonly NavItem[] = [
  { sectionId: 'projects', label: 'Projects' },
  { sectionId: 'experience', label: 'Experience' },
  { sectionId: 'skills', label: 'Skills' },
];

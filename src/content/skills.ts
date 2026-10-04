import type { Skill } from '@/types/content';

export const skills: readonly Skill[] = [
  {
    id: 'js-ts',
    name: 'JavaScript & TypeScript',
    icon: 'code',
    description:
      'Typed, readable code for the browser and Node.js — the foundation of everything I ship.',
  },
  {
    id: 'components',
    name: 'Angular & Component Architecture',
    icon: 'components',
    description:
      'Reusable components, services and routing that keep an app easy to grow — the way I built Oxalate.',
  },
  {
    id: 'python',
    name: 'Python',
    icon: 'terminal',
    description: 'Scripts and data work, plus AI agent projects from my CodePath coursework.',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    icon: 'database',
    description: 'Authentication, saved user profiles and data for a live app with real users.',
  },
  {
    id: 'testing',
    name: 'Testing & CI/CD',
    icon: 'check',
    description:
      'Automated tests, code reviews and Jenkins pipelines — practices that cut post-release bugs by 15% at Wells Fargo.',
  },
];

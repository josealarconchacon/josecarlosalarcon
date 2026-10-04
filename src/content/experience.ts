import type { Role } from '@/types/content';

/** Ordered newest first. */
export const roles: readonly Role[] = [
  {
    id: 'wells-fargo',
    organization: 'Wells Fargo',
    title: 'Software Engineering Apprentice',
    location: 'New York, NY',
    dates: 'Jul 2023 – Jun 2024',
    highlights: [
      'Fixed UI bugs, and integrated APIs in an internal application used by financial advisors.',
      'Ran automated testing and code reviews that cut post-release bugs by 15%.',
      'Supported application deployments through Jenkins CI/CD pipelines.',
      'Worked daily with cross-functional teams, following change management processes.',
    ],
  },
  {
    id: 'power-consulting',
    organization: 'Power Consulting',
    title: 'Information Technology Intern',
    location: 'New York, NY',
    dates: 'Mar 2023 – Jun 2023',
    highlights: [
      'Resolved support tickets in Autotask with 95% first-contact resolution.',
      'Set up workstations, monitors, docking stations and peripherals for office deployments.',
      'Troubleshot hardware and software issues directly with users and escalated complex cases.',
    ],
  },
  {
    id: 'freelance',
    organization: 'Freelance',
    title: 'Web Developer (Contract)',
    location: 'Remote',
    dates: 'Mar 2020 – Jul 2020',
    highlights: [
      'Built a responsive portfolio website for an artist charity sale with HTML, CSS, Bootstrap and jQuery.',
      'Configured the custom domain and hosting.',
    ],
  },
];

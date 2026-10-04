import type { Project } from '@/types/content';

/**
 Add a new project by appending an object to this list.
*/
export const projects: readonly Project[] = [
  {
    id: 'oxalate',
    name: 'Oxalate',
    category: 'web',
    kind: 'Web app',
    featured: true,
    description:
      'A live web app that helps oxalate-sensitive people search and track foods, with secure sign-in through Firebase Authentication and saved profiles. I built it and keep supporting it.',
    tags: ['Angular', 'TypeScript', 'Firebase'],
    liveUrl: 'https://oxalate.info',
    codeUrl: 'https://github.com/josealarconchacon/oxalates.git',
  },
  {
    id: 'immigrant-reunification',
    name: 'Immigrant Reunification',
    category: 'mobile',
    kind: 'Mobile app',
    description:
      'An iOS app that helps separated immigrant and refugee families find each other: users upload photos and contact details, and Microsoft image APIs check for matches.',
    tags: ['Swift', 'Firebase', 'Microsoft Cognitive Services'],
    codeUrl: 'https://github.com/josealarconchacon', // update repository link
  },
];

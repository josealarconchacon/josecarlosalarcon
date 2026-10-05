import { Section } from '@/components/ui/Section/Section';
import type { Project } from '@/types/content';
import { ProjectsExplorer } from './ProjectsExplorer';

interface ProjectsProps {
  projects: readonly Project[];
}

// Page section: renders the heading and intro, and passes the projects to ProjectsExplorer for display.
export function Projects({ projects }: ProjectsProps) {
  return (
    <Section id="projects" title="Projects" intro="Things I have built and shipped.">
      <ProjectsExplorer projects={projects} />
    </Section>
  );
}

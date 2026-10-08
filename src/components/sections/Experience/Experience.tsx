import { Section } from '@/components/ui/Section/Section';
import type { Role } from '@/types/content';
import { ExperienceTabs } from './ExperienceTabs';

interface ExperienceProps {
  roles: readonly Role[];
}

export function Experience({ roles }: ExperienceProps) {
  return (
    <Section
      id="experience"
      title="Experience"
      intro="Select a role to see what I did."
      tone="muted"
    >
      <ExperienceTabs roles={roles} />
    </Section>
  );
}

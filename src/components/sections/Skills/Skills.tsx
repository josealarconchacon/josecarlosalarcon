import { Section } from '@/components/ui/Section/Section';
import type { Skill } from '@/types/content';
import { SkillIcon } from './SkillIcon';
import styles from './Skills.module.css';

interface SkillsProps {
  skills: readonly Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Section id="skills" title="Skills" intro="What I use to build and ship.">
      <ul className={styles.grid}>
        {skills.map((skill) => (
          <li key={skill.id} className={styles.card}>
            <span className={styles.icon}>
              <SkillIcon name={skill.icon} />
            </span>
            <h3 className={styles.name}>{skill.name}</h3>
            <p className={styles.description}>{skill.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

import { TagList } from '@/components/ui/Tag/Tag';
import type { Project } from '@/types/content';
import styles from './Projects.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { name, kind, description, tags, liveUrl, codeUrl } = project;

  return (
    <article className={styles.card} aria-labelledby={`project-${project.id}`}>
      <div className={styles.cardMeta}>
        <span className={styles.kind}>{kind}</span>
        {liveUrl && <span className={styles.live}>Live</span>}
      </div>
      <h3 id={`project-${project.id}`} className={styles.cardTitle}>
        {name}
      </h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.tags}>
        <TagList tags={tags} label={`${name} tech stack`} />
      </div>
      <div className={styles.links}>
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            Visit live site<span className="visually-hidden"> for {name} (opens in a new tab)</span>{' '}
            ↗
          </a>
        )}
        <a href={codeUrl} target="_blank" rel="noopener noreferrer">
          View code<span className="visually-hidden"> for {name} (opens in a new tab)</span> ↗
        </a>
      </div>
    </article>
  );
}

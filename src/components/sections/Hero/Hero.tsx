import Image from 'next/image';
import { ButtonLink } from '@/components/ui/ButtonLink/ButtonLink';
import { cn } from '@/lib/cn';
import type { SiteConfig } from '@/types/content';
import portrait from '@/assets/images/jose-portrait.jpg';
import styles from './Hero.module.css';

interface HeroProps {
  site: SiteConfig;
}

export function Hero({ site }: HeroProps) {
  return (
    <section id="top" aria-labelledby="hero-heading" className={cn('container', styles.hero)}>
      <div className={styles.copy}>
        <p className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          {site.availability} · {site.location}
        </p>
        <p className={styles.greeting}>Hi, I&apos;m {site.shortName}.</p>
        <h1 id="hero-heading" className={styles.headline}>
          Early-career software engineer building for the <span className={styles.accent}>web</span>
          .
        </h1>
        <p className={styles.lede}>
          Computer Science student at Hunter College and former Software Engineering Apprentice at
          Wells Fargo.
        </p>
        <div className={styles.actions}>
          <ButtonLink href="#projects">See my projects</ButtonLink>
          {site.links.resume && (
            <ButtonLink href={site.links.resume} variant="secondary" download>
              Download resume
            </ButtonLink>
          )}
        </div>
      </div>

      <div className={styles.media}>
        <Image
          src={portrait}
          alt={`Portrait of ${site.name}`}
          className={styles.portrait}
          sizes="(max-width: 860px) 90vw, 400px"
          placeholder="blur"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}

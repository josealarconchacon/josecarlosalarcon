import { cn } from '@/lib/cn';
import type { SiteConfig } from '@/types/content';
import { CopyEmailButton } from './CopyEmailButton';
import styles from './Contact.module.css';

interface ContactProps {
  site: SiteConfig;
}

export function Contact({ site }: ContactProps) {
  const { email, links } = site;
  const socialLinks = [
    { label: 'GitHub', href: links.github },
    { label: 'LinkedIn', href: links.linkedin },
    { label: 'Résumé', href: links.resume },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <footer id="contact" aria-labelledby="contact-heading" className={styles.contact}>
      <div className={cn('container', styles.inner)}>
        <p className={styles.eyebrow}>Contact</p>
        <h2 id="contact-heading" className={styles.title}>
          Hiring a junior engineer? I would love to talk.
        </h2>

        <div className={styles.emailRow}>
          <a href={`mailto:${email}`} className={styles.email}>
            {email}
          </a>
          <CopyEmailButton email={email} />
        </div>

        <ul className={styles.links}>
          {socialLinks.map(({ label, href }) => {
            const isExternal = href.startsWith('http');
            return (
              <li key={label}>
                <a
                  href={href}
                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {label}
                  {isExternal && <span className="visually-hidden"> (opens in a new tab)</span>} ↗
                </a>
              </li>
            );
          })}
        </ul>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

import type { StaticImageData } from 'next/image';
import githubIcon from '@/assets/icons/github.svg';
import linkedinIcon from '@/assets/icons/linkedin.svg';
import resumeIcon from '@/assets/icons/resume.svg';
import { cn } from '@/lib/cn';
import type { SiteConfig } from '@/types/content';
import { CopyEmailButton } from './CopyEmailButton';
import styles from './Contact.module.css';

interface ContactProps {
  site: SiteConfig;
}

interface SocialLink {
  label: string;
  href: string;
  icon: StaticImageData;
}

export function Contact({ site }: ContactProps) {
  const { email, links } = site;
  const socialLinks = [
    { label: 'GitHub', href: links.github, icon: githubIcon },
    { label: 'LinkedIn', href: links.linkedin, icon: linkedinIcon },
    { label: 'Resume', href: links.resume, icon: resumeIcon },
  ].filter((link): link is SocialLink => Boolean(link.href));

  return (
    <footer id="contact" aria-labelledby="contact-heading" className={styles.contact}>
      <div className={cn('container', styles.inner)}>
        <div className={styles.main}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>Contact</p>
            <h2 id="contact-heading" className={styles.title}>
              Hiring a junior engineer? I would love to talk.
            </h2>
          </div>

          <div className={styles.aside}>
            <div className={styles.emailRow}>
              <a href={`mailto:${email}`} className={styles.email}>
                {email}
              </a>
              <CopyEmailButton email={email} />
            </div>

            <ul className={styles.links}>
              {socialLinks.map(({ label, href, icon }) => {
                const opensNewTab = href.startsWith('http') || href.endsWith('.pdf');
                return (
                  <li key={label}>
                    <a
                      href={href}
                      {...(opensNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {/* The SVG is used as a mask so the icon takes the link's text color. */}
                      <span
                        className={styles.linkIcon}
                        style={{
                          maskImage: `url(${icon.src})`,
                          WebkitMaskImage: `url(${icon.src})`,
                        }}
                        aria-hidden="true"
                      />
                      <span className={styles.linkLabel}>
                        {label}
                        {opensNewTab && (
                          <span className="visually-hidden"> (opens in a new tab)</span>
                        )}
                      </span>
                      <span className={styles.linkArrow} aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

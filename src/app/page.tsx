import { SiteHeader } from '@/components/layout/SiteHeader/SiteHeader';
import { Contact } from '@/components/sections/Contact/Contact';
import { Experience } from '@/components/sections/Experience/Experience';
import { Hero } from '@/components/sections/Hero/Hero';
import { Projects } from '@/components/sections/Projects/Projects';
import { Skills } from '@/components/sections/Skills/Skills';
import { roles } from '@/content/experience';
import { projects } from '@/content/projects';
import { navItems, siteConfig } from '@/content/site';
import { skills } from '@/content/skills';

export default function HomePage() {
  return (
    <>
      <SiteHeader site={siteConfig} navItems={navItems} />
      <main id="main">
        <Hero site={siteConfig} />
        <Projects projects={projects} />
        <Experience roles={roles} />
        <Skills skills={skills} />
      </main>
      <Contact site={siteConfig} />
    </>
  );
}

import { About } from '@/components/site/about';
import { Capabilities } from '@/components/site/capabilities';
import { Contact } from '@/components/site/contact';
import { Experience } from '@/components/site/experience';
import { FeaturedWork } from '@/components/site/featured-work';
import { SiteFooter } from '@/components/site/site-footer';
import { Hero } from '@/components/site/hero';
import { SiteHeader } from '@/components/site/site-header';

export default function Home() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Zander Kwan',
    url: 'https://zanderkwan.stormy-bear-1332.chatgpt.site',
    jobTitle: 'Digital Builder',
    knowsAbout: ['Digital strategy', 'Experience design', 'Frontend development'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <FeaturedWork />
        <Capabilities />
        <Experience />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

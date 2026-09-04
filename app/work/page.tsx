import type { Metadata } from 'next';
import { Contact } from '@/components/site/contact';
import { ProjectGallery } from '@/components/site/project-gallery';
import { SiteFooter } from '@/components/site/site-footer';
import { SiteHeader } from '@/components/site/site-header';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Explore Zander Kwan’s portfolio across product systems, web experiences, brand platforms, and creative technology.',
};

export default function WorkPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <header className="border-b border-border py-20 sm:py-28">
          <div className="site-shell grid gap-8 lg:grid-cols-12">
            <p className="eyebrow lg:col-span-3">Archive / Work</p>
            <div className="lg:col-span-9">
              <h1 className="display-title max-w-4xl text-6xl leading-[0.88] tracking-[-0.05em] sm:text-8xl">
                Ideas are judged by what they become.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                A portfolio structure for stories across product, web, brand, and
                creative technology—with room for the useful mess behind the outcome.
              </p>
            </div>
          </div>
        </header>
        <section aria-label="Project archive" className="py-20 sm:py-28">
          <div className="site-shell">
            <ProjectGallery />
          </div>
        </section>
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

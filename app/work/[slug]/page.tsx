import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Contact } from '@/components/site/contact';
import { SiteFooter } from '@/components/site/site-footer';
import { SiteHeader } from '@/components/site/site-header';
import { getProject, projects } from '@/lib/site-data';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: 'Project not found' };
  }

  return {
    title: project.title,
    description: project.thesis,
    openGraph: {
      title: `${project.title} — Zander Kwan`,
      description: project.thesis,
      images: [],
    },
    twitter: {
      title: `${project.title} — Zander Kwan`,
      description: project.thesis,
      images: [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.thesis,
    author: {
      '@type': 'Person',
      name: 'Zander Kwan',
    },
    url: `https://zanderkwan.stormy-bear-1332.chatgpt.site/work/${project.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <article>
          <header
            className="border-b border-border py-20 sm:py-28"
            style={{ background: project.accent, color: project.foreground }}
          >
            <div className="site-shell">
              <Link
                href="/work"
                className="inline-flex min-h-11 items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em]"
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
                All work
              </Link>
              <div className="mt-16 grid gap-8 lg:grid-cols-12">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] opacity-65 lg:col-span-3">
                  {project.number} / {project.category}
                </p>
                <div className="lg:col-span-9">
                  <h1 className="display-title max-w-5xl text-6xl leading-[0.86] tracking-[-0.05em] sm:text-8xl lg:text-9xl">
                    {project.title}
                  </h1>
                  <p className="mt-7 max-w-2xl text-lg leading-relaxed opacity-70">
                    {project.thesis}
                  </p>
                </div>
              </div>
            </div>
          </header>

          <div className="site-shell py-20 sm:py-28">
            <dl className="grid gap-px border border-border bg-border sm:grid-cols-3">
              {[
                ['Role', project.role],
                ['Disciplines', project.disciplines.join(', ')],
                ['Status', project.year],
              ].map(([label, value]) => (
                <div key={label} className="bg-background p-6">
                  <dt className="eyebrow mb-3">{label}</dt>
                  <dd className="text-sm leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-24 space-y-24">
              {[
                ['01 / The challenge', project.challenge],
                ['02 / The approach', project.approach],
                ['03 / The outcome', project.outcome],
              ].map(([label, copy]) => (
                <section key={label} className="grid gap-6 lg:grid-cols-12">
                  <p className="eyebrow lg:col-span-3">{label}</p>
                  <p className="display-title max-w-3xl text-4xl leading-[1.05] tracking-[-0.025em] lg:col-span-8 sm:text-6xl">
                    {copy}
                  </p>
                </section>
              ))}
            </div>

            <Link
              href={`/work/${nextProject.slug}`}
              className="mt-28 flex min-h-40 items-end justify-between gap-6 border-t border-border pt-8"
            >
              <span>
                <span className="eyebrow block">Next story</span>
                <span className="display-title mt-4 block text-4xl tracking-[-0.03em] sm:text-6xl">
                  {nextProject.title}
                </span>
              </span>
              <ArrowRight aria-hidden="true" className="size-7 shrink-0 text-accent" />
            </Link>
          </div>
        </article>
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

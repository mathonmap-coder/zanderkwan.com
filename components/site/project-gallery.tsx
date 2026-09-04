'use client';

import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  projectCategories,
  projects,
  type Project,
} from '@/lib/site-data';

export function ProjectGallery() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-5">
        <div className="flex flex-wrap gap-2" aria-label="Filter projects">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
              className="min-h-11 border border-border px-4 font-mono text-[0.68rem] uppercase tracking-[0.12em] transition-colors hover:border-foreground aria-pressed:border-foreground aria-pressed:bg-foreground aria-pressed:text-background"
            >
              {category}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="eyebrow">
          {filteredProjects.length} {filteredProjects.length === 1 ? 'story' : 'stories'}
        </p>
      </div>

      <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <article
            key={project.slug}
            className={`group relative flex min-h-[28rem] flex-col justify-between p-6 sm:p-8 ${
              index % 3 === 0 ? 'md:col-span-2 md:min-h-[32rem]' : ''
            }`}
            style={{ background: project.accent, color: project.foreground }}
          >
            <div className="flex items-start justify-between font-mono text-xs uppercase tracking-[0.16em]">
              <span>{project.number}</span>
              <span>{project.category}</span>
            </div>
            <div className="max-w-3xl">
              <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] opacity-65">
                {project.year}
              </p>
              <h3 className="display-title max-w-2xl text-5xl leading-[0.9] tracking-[-0.04em] sm:text-7xl">
                {project.title}
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-relaxed opacity-75 sm:text-base">
                {project.thesis}
              </p>
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-current text-sm font-semibold"
                aria-label={`Preview ${project.title}`}
              >
                Preview story
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[calc(100svh-2rem)] max-w-3xl overflow-y-auto rounded-none border border-border bg-background p-0">
          {selected ? (
            <>
              <div
                className="min-h-48 p-7 sm:p-10"
                style={{ background: selected.accent, color: selected.foreground }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.15em]">
                  {selected.number} / {selected.category}
                </p>
                <DialogHeader className="mt-12">
                  <DialogTitle className="display-title max-w-2xl text-5xl leading-[0.92] tracking-[-0.035em] sm:text-6xl">
                    {selected.title}
                  </DialogTitle>
                  <DialogDescription className="max-w-xl text-base leading-relaxed text-current opacity-70">
                    {selected.thesis}
                  </DialogDescription>
                </DialogHeader>
              </div>
              <div className="grid gap-8 p-7 sm:grid-cols-2 sm:p-10">
                <div>
                  <p className="eyebrow mb-3">The challenge</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {selected.challenge}
                  </p>
                </div>
                <div>
                  <p className="eyebrow mb-3">The approach</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {selected.approach}
                  </p>
                </div>
                <Link
                  href={`/work/${selected.slug}`}
                  className="inline-flex min-h-12 items-center gap-3 border-b border-foreground text-sm font-semibold sm:col-span-2 sm:w-fit"
                >
                  Read the full case-study structure
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

import { ArrowDownRight } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';

const capabilities = [
  {
    number: '01',
    title: 'Strategy',
    description:
      'Clarifying the problem, the audience, and the shortest path from a promising idea to useful work.',
    details: ['Positioning', 'Product framing', 'Content direction'],
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Shaping distinctive interfaces and visual systems that stay intuitive at every scale.',
    details: ['Experience design', 'Visual identity', 'Design systems'],
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Turning the strongest direction into a fast, accessible, production-ready digital experience.',
    details: ['Prototyping', 'Frontend systems', 'Launch support'],
  },
];

export function Capabilities() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="scroll-mt-20 border-y border-border bg-foreground py-24 text-background sm:py-32"
    >
      <div className="site-shell">
        <div className="[&_.eyebrow]:text-background/55 [&_h2]:text-background">
          <SectionHeading
            index="03"
            label="Capabilities"
            id="expertise-heading"
            title="One partner from first question to final detail."
          />
        </div>

        <div className="grid border border-background/20 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="group flex min-h-[28rem] flex-col justify-between border-b border-background/20 p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 sm:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs tracking-[0.16em] text-background/50">
                  {capability.number}
                </span>
                <ArrowDownRight
                  aria-hidden="true"
                  className="size-5 text-accent transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </div>
              <div>
                <h3 className="display-title mb-5 text-5xl tracking-[-0.04em]">
                  {capability.title}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-background/65">
                  {capability.description}
                </p>
                <ul className="mt-8 space-y-2 border-t border-background/20 pt-5">
                  {capability.details.map((detail) => (
                    <li
                      key={detail}
                      className="font-mono text-[0.68rem] uppercase tracking-[0.13em] text-background/55"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

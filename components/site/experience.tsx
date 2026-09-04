import { SectionHeading } from '@/components/site/section-heading';

const phases = [
  {
    marker: 'Discover',
    title: 'Find the real problem.',
    body: 'Begin with context, constraints, and the decision the work needs to unlock. Leave with a sharp brief and a shared definition of success.',
  },
  {
    marker: 'Define',
    title: 'Give the idea a shape.',
    body: 'Turn ambiguity into a narrative, a system, and a small set of testable directions before committing to the final form.',
  },
  {
    marker: 'Deliver',
    title: 'Build it to hold up.',
    body: 'Refine the strongest direction, sweat the details, and ship an accessible experience that performs beyond the presentation.',
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 sm:py-32"
    >
      <div className="site-shell">
        <SectionHeading
          index="04"
          label="Experience"
          id="experience-heading"
          title="Momentum without the mystery."
          description="A transparent, end-to-end way of working that keeps decisions visible and every phase connected to the outcome."
        />

        <ol className="border-t border-border">
          {phases.map((phase, index) => (
            <li
              key={phase.marker}
              className="grid gap-6 border-b border-border py-8 sm:grid-cols-[8rem_1fr] lg:grid-cols-12 lg:py-12"
            >
              <div className="flex items-center gap-3 lg:col-span-3">
                <span className="grid size-9 place-items-center bg-accent font-mono text-[0.68rem] font-bold text-accent-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="eyebrow">{phase.marker}</span>
              </div>
              <div className="grid gap-4 lg:col-span-9 lg:grid-cols-2 lg:gap-12">
                <h3 className="display-title text-4xl leading-none tracking-[-0.03em] sm:text-5xl">
                  {phase.title}
                </h3>
                <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {phase.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

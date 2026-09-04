import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';

const principles = [
  ['01', 'Clarity is a creative advantage.'],
  ['02', 'Systems should create freedom.'],
  ['03', 'Useful can still feel unforgettable.'],
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-y border-border bg-card py-24 sm:py-32"
    >
      <div className="site-shell">
        <SectionHeading
          index="05"
          label="About"
          id="about-heading"
          title="The space between thinking and making is where I do my best work."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:col-start-4">
            <p className="text-xl leading-relaxed sm:text-2xl">
              I&apos;m Zander, a multidisciplinary builder who moves comfortably between
              the strategic question, the visual idea, and the shipped experience.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              That range helps keep the work coherent. Fewer handoffs, clearer decisions,
              and every detail connected to the reason the project exists.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex min-h-12 items-center gap-3 border-b-2 border-foreground text-sm font-semibold"
            >
              Start a conversation
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>

          <ul className="border-t border-border lg:col-span-4 lg:col-start-9">
            {principles.map(([number, principle]) => (
              <li
                key={number}
                className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-border py-5"
              >
                <span className="font-mono text-[0.68rem] text-accent">{number}</span>
                <span className="text-sm leading-relaxed">{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

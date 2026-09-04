import { ArrowDownRight, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="grid-rule overflow-hidden border-b border-border">
      <div className="site-shell grid min-h-[calc(100svh-4.5rem)] grid-cols-1 border-x border-border lg:grid-cols-12">
        <div className="flex flex-col justify-between border-b border-border px-5 py-8 sm:px-8 sm:py-12 lg:col-span-8 lg:border-b-0 lg:border-r lg:px-12 lg:py-14">
          <div className="flex items-center gap-3">
            <span className="size-2.5 bg-accent" aria-hidden="true" />
            <p className="eyebrow">Strategy · Design · Technology</p>
          </div>

          <div className="py-18 sm:py-24 lg:py-16">
            <h1 className="max-w-5xl text-[clamp(3.7rem,9vw,8.5rem)] leading-[0.82] tracking-[-0.065em]">
              <span className="block font-bold">Ideas into</span>
              <span className="display-title block pl-[8vw] italic text-accent sm:pl-[12vw]">
                impact.
              </span>
            </h1>
          </div>

          <div className="grid gap-8 border-t border-border pt-7 sm:grid-cols-2 sm:gap-12">
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I&apos;m Zander Kwan. I turn complex ideas into clear, distinctive digital
              experiences people understand—and remember.
            </p>
            <div className="flex items-end sm:justify-end">
              <a
                href="#work"
                className="group inline-flex min-h-12 items-center gap-3 border-b-2 border-foreground text-sm font-semibold"
              >
                Explore selected work
                <ArrowDownRight
                  aria-hidden="true"
                  className="size-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>

        <aside className="relative flex min-h-[28rem] flex-col justify-between bg-foreground p-6 text-background sm:p-9 lg:col-span-4 lg:p-10">
          <div className="flex items-start justify-between">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-background/60">
              01 / Focus
            </p>
            <ArrowRight aria-hidden="true" className="size-5 text-accent" />
          </div>

          <div className="my-10 border-y border-background/20 py-10">
            <p className="display-title text-[clamp(7rem,18vw,13rem)] leading-[0.7] italic text-accent">
              ZK
            </p>
            <p className="mt-10 max-w-xs text-lg leading-relaxed text-background/72">
              A direct line from the first question to the finished experience.
            </p>
          </div>

          <div className="grid grid-cols-3 border-t border-background/20 pt-5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-background/60">
            <span>Strategy</span>
            <span>Design</span>
            <span className="text-right">Build</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

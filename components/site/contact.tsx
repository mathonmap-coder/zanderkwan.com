import { AtSign, Code2, Mail, Network } from 'lucide-react';
import { ContactForm } from '@/components/site/contact-form';

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 bg-foreground py-24 text-background sm:py-32">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-background/55">
              06 / Connect
            </p>
            <h2
              id="contact-heading"
              className="display-title mt-7 text-6xl leading-[0.88] tracking-[-0.05em] sm:text-8xl"
            >
              Let&apos;s make it <em className="text-accent">concrete.</em>
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-background/65">
              Have a project, a stubborn problem, or a promising half-formed idea? Send
              the useful context and let&apos;s find the next move.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:hello@zanderkwan.com"
                className="inline-flex min-h-11 items-center gap-2 border-b border-background/40 text-sm hover:border-background"
              >
                <Mail aria-hidden="true" className="size-4" />
                Email
              </a>
              <span
                aria-label="GitHub profile link awaiting final handle"
                className="inline-flex min-h-11 items-center gap-2 text-sm text-background/40"
              >
                <Code2 aria-hidden="true" className="size-4" />
                GitHub
              </span>
              <span
                aria-label="LinkedIn profile link awaiting final handle"
                className="inline-flex min-h-11 items-center gap-2 text-sm text-background/40"
              >
                <Network aria-hidden="true" className="size-4" />
                LinkedIn
              </span>
              <span
                aria-label="X profile link awaiting final handle"
                className="inline-flex min-h-11 items-center gap-2 text-sm text-background/40"
              >
                <AtSign aria-hidden="true" className="size-4" />
                X
              </span>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 lg:col-span-6 lg:col-start-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

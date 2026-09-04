import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/site/theme-toggle';

const navigation = [
  { label: 'Work', href: '/#work' },
  { label: 'Expertise', href: '/#expertise' },
  { label: 'About', href: '/#about' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/88 backdrop-blur-xl">
      <div className="site-shell flex h-18 items-center justify-between">
        <Link
          href="/"
          aria-label="Zander Kwan, home"
          className="flex min-h-11 items-center gap-3 text-sm font-bold tracking-tight"
        >
          <span className="grid size-8 place-items-center bg-foreground text-[0.68rem] text-background">
            ZK
          </span>
          <span>Zander Kwan</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="inline-flex min-h-11 items-center gap-2 bg-foreground px-4 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s talk
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}

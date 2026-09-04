export function SiteFooter() {
  return (
    <footer className="border-t border-background/20 bg-foreground py-7 text-background">
      <div className="site-shell flex flex-col gap-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-background/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Zander Kwan</p>
        <p>Built for clarity · Designed for motion</p>
      </div>
    </footer>
  );
}

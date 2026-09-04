type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  id: string;
  description?: string;
};

export function SectionHeading({
  index,
  label,
  title,
  id,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 grid gap-6 border-t border-border pt-5 lg:grid-cols-12">
      <p className="eyebrow lg:col-span-3">
        {index} / {label}
      </p>
      <div className="lg:col-span-9">
        <h2
          id={id}
          className="display-title max-w-4xl text-5xl leading-[0.95] tracking-[-0.035em] sm:text-7xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

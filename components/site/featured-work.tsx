import { ProjectGallery } from '@/components/site/project-gallery';
import { SectionHeading } from '@/components/site/section-heading';

export function FeaturedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-20 py-24 sm:py-32"
    >
      <div className="site-shell">
        <SectionHeading
          index="02"
          label="Selected work"
          id="work-heading"
          title="Work that makes the complex feel inevitable."
          description="The portfolio architecture is ready for Zander’s final client names, visuals, and verified results. Each story already supports filtering, a quick preview, and a dedicated shareable page."
        />
        <ProjectGallery />
      </div>
    </section>
  );
}

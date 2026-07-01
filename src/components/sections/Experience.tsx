import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { experiences } from "@/data/portfolio";
import { fadeInUp, viewportOnce } from "@/lib/motion";

export function Experience() {
  return (
    <Section id="experience" ariaLabel="Professional experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've built"
        description="3+ years shipping production Flutter apps across two engineering teams."
      />

      <ol className="relative flex flex-col gap-10 border-l border-border pl-8 sm:pl-10">
        {experiences.map((exp) => (
          <motion.li
            key={exp.id}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="relative"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-bg bg-brand sm:-left-[49px]"
            />

            <div className="card-surface p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted">
                    <Icon name="Building2" size={14} />
                    {exp.company}
                    <span aria-hidden="true">&middot;</span>
                    <Icon name="MapPin" size={14} />
                    {exp.location}
                  </p>
                </div>
                <p className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-muted">
                  <Icon name="Calendar" size={12} />
                  {exp.period}
                </p>
              </div>

              <ul className="mt-4 flex flex-col gap-2.5">
                {exp.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

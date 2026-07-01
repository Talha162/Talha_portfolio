import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { education } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Education() {
  return (
    <Section id="education" className="bg-surface/40" ariaLabel="Education">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2"
      >
        {education.map((item) => (
          <motion.div key={item.id} variants={fadeInUp} className="card-surface flex gap-4 p-6">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Icon name="GraduationCap" size={20} />
            </span>
            <div>
              <h3 className="text-base font-semibold">{item.degree}</h3>
              <p className="mt-1 text-sm text-muted">{item.institution}</p>
              <p className="mt-2 text-xs text-faint">
                {item.location} &middot; {item.period}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

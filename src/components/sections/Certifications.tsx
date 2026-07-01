import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { certifications } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Certifications() {
  return (
    <Section id="certifications" ariaLabel="Certifications and achievements">
      <SectionHeading
        eyebrow="Certifications & Achievements"
        title="Continuous learning"
        description="Formal certifications backing up hands-on production experience."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid gap-4 sm:grid-cols-2"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            variants={fadeInUp}
            className="card-surface flex items-start gap-4 p-5"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Icon name="Award" size={18} />
            </span>
            <div>
              <h3 className="text-sm font-semibold leading-snug">{cert.name}</h3>
              <p className="mt-1 text-xs text-faint">
                {cert.issuer} &middot; {cert.year}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

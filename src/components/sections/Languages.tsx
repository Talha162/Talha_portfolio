import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBar } from "@/components/ui/SkillBar";
import { languages } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Languages() {
  return (
    <Section id="languages" className="bg-surface/40" ariaLabel="Spoken languages">
      <SectionHeading eyebrow="Languages" title="Spoken languages" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="card-surface max-w-md p-6"
      >
        <div className="flex flex-col gap-5">
          {languages.map((lang) => (
            <motion.div key={lang.name} variants={fadeInUp}>
              <SkillBar name={lang.name} level={lang.level} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { SkillBar } from "@/components/ui/SkillBar";
import { skillGroups } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Skills() {
  return (
    <Section id="skills" className="bg-surface/40" ariaLabel="Technical skills">
      <SectionHeading
        eyebrow="Skills"
        title="A full-stack mobile toolkit"
        description="Technologies and practices I rely on to ship production-grade Flutter apps."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div key={group.id} variants={fadeInUp} className="card-surface p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon name={group.icon} size={18} />
              </span>
              <h3 className="text-base font-semibold">{group.title}</h3>
            </div>
            <div className="flex flex-col gap-4">
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

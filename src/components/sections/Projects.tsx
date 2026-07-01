import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section id="projects" ariaLabel="Projects">
      <SectionHeading
        eyebrow="Projects"
        title="22+ shipped mobile products"
        description="A selection of production apps and prototypes across food delivery, healthcare, fintech, construction, and social."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}

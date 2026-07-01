import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Services() {
  return (
    <Section id="services" ariaLabel="Services offered">
      <SectionHeading
        eyebrow="Services"
        title="What I can help you build"
        description="Derived directly from CV skills and experience — packaged as engagement areas."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={fadeInUp} className="card-surface p-6">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Icon name={service.icon} size={20} />
            </span>
            <h3 className="mt-4 text-base font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

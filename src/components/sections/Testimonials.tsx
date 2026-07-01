import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { testimonials } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-surface/40" ariaLabel="Testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="What people say"
        description="Placeholder cards — swap in real client and colleague feedback."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2"
      >
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.id} variants={fadeInUp} className="card-surface p-6">
            <Icon name="Quote" size={20} className="text-brand/60" />
            <p className="mt-4 text-sm italic leading-relaxed text-muted">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-4 border-t border-border pt-4">
              <p className="text-sm font-semibold">{testimonial.name}</p>
              <p className="text-xs text-faint">{testimonial.role}</p>
              {testimonial.placeholder && (
                <p className="mt-1 text-xs italic text-faint">
                  Replace with actual content
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

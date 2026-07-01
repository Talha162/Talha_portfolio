import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Icon } from "@/components/ui/Icon";
import { profile, aboutSpecialties, stats } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <Section id="about" ariaLabel="About Muhammad Talha">
      <SectionHeading
        eyebrow="About Me"
        title="Building mobile products end-to-end"
        description="A closer look at how I work, what I specialise in, and the track record behind it."
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative rounded-3xl bg-[linear-gradient(135deg,rgb(var(--brand)/0.4),rgb(var(--accent)/0.3))] p-1.5">
            <div className="overflow-hidden rounded-[22px] bg-surface">
              <img
                src="/images/profile.png"
                alt={`Portrait of ${profile.name}`}
                width={480}
                height={480}
                loading="lazy"
                className="aspect-square w-full object-cover object-top"
              />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[32px] bg-[linear-gradient(135deg,rgb(var(--brand)/0.35),rgb(var(--accent)/0.25))] blur-2xl"
          />
        </motion.div>

        <div className="flex flex-col gap-8">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="text-base leading-relaxed text-muted"
          >
            {profile.summary}
          </motion.p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid gap-3 sm:grid-cols-2"
          >
            {aboutSpecialties.map((item) => (
              <motion.li
                key={item}
                variants={fadeInUp}
                className="flex items-start gap-2.5 rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-content"
              >
                <Icon name="CheckCircle2" size={16} className="mt-0.5 shrink-0 text-brand" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={fadeInUp}
                className="card-surface px-4 py-5 text-center"
              >
                <div className="font-display text-2xl font-bold gradient-text sm:text-3xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeInUp}>
            <MagneticButton
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-border bg-surface-2 text-content hover:border-brand/50"
              ariaLabel="Download resume PDF"
            >
              Download Resume
              <Icon name="Download" size={16} />
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

import { motion } from "framer-motion";
import { profile, socials } from "@/data/portfolio";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Icon } from "@/components/ui/Icon";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { scrollToSection } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  const typedTitle = useTypingEffect({ words: profile.titles });

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <AuroraBackground />

      <div className="container-px relative z-10 grid gap-12 lg:grid-cols-[1fr_minmax(0,340px)] lg:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-muted">
              {profile.availability}
            </span>
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="mt-4 flex h-10 items-center text-xl font-semibold text-muted sm:text-2xl"
          >
            <span aria-live="polite">{typedTitle}</span>
            <span
              className="ml-1 inline-block h-6 w-[2px] animate-blink bg-brand sm:h-7"
              aria-hidden="true"
            />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              onClick={() => scrollToSection("#projects")}
              className="bg-brand text-white shadow-lg shadow-brand/30 hover:bg-brand-soft"
            >
              View Projects
              <Icon name="ArrowRight" size={16} />
            </MagneticButton>
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

          <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={social.url.startsWith("http") ? "noreferrer" : undefined}
                aria-label={social.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-2 text-muted transition-colors hover:border-brand/50 hover:text-brand"
              >
                <Icon name={social.icon} size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden w-full max-w-[320px] sm:block"
        >
          <div className="relative rounded-3xl bg-[linear-gradient(135deg,rgb(var(--brand)/0.4),rgb(var(--accent)/0.3))] p-1.5">
            <div className="overflow-hidden rounded-[22px] bg-surface">
              <img
                src="/images/profile.png"
                alt={`Portrait of ${profile.name}`}
                width={480}
                height={480}
                loading="eager"
                className="aspect-square w-full object-cover object-top"
              />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute -inset-8 -z-10 rounded-[32px] bg-[linear-gradient(135deg,rgb(var(--brand)/0.35),rgb(var(--accent)/0.25))] blur-3xl"
          />
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection("#about")}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint sm:flex"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon name="ChevronDown" size={18} />
        </motion.span>
      </motion.button>
    </section>
  );
}

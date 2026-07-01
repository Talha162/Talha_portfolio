import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Icon } from "@/components/ui/Icon";
import { profile } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { isValidEmail } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;

const channels = [
  { icon: "Mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "Phone", label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
  { icon: "MapPin", label: "Location", value: profile.location, href: undefined },
  { icon: "Linkedin", label: "LinkedIn", value: "Muhammad Talha", href: profile.linkedin },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!isValidEmail(email)) nextErrors.email = "Please enter a valid email address.";
    if (!message) nextErrors.message = "Please enter a message.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" ariaLabel="Contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something great"
        description="Have a project in mind or an opportunity to discuss? Reach out through the form or any channel below."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col gap-4"
        >
          {channels.map((channel) => (
            <motion.a
              key={channel.label}
              variants={fadeInUp}
              href={channel.href}
              target={channel.href?.startsWith("http") ? "_blank" : undefined}
              rel={channel.href?.startsWith("http") ? "noreferrer" : undefined}
              className="card-surface flex items-center gap-4 p-5 transition-colors hover:border-brand/40"
              aria-disabled={!channel.href}
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon name={channel.icon} size={18} />
              </span>
              <div>
                <p className="text-xs text-faint">{channel.label}</p>
                <p className="text-sm font-medium text-content">{channel.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          onSubmit={handleSubmit}
          noValidate
          className="card-surface flex flex-col gap-5 p-6 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="w-full rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand"
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="w-full rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand"
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="w-full resize-none rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand"
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <MagneticButton
            type="submit"
            disabled={status === "submitting"}
            className="justify-center bg-brand text-white shadow-lg shadow-brand/30 hover:bg-brand-soft"
          >
            {status === "submitting" ? (
              <Icon name="Loader2" size={16} className="animate-spin" />
            ) : (
              <Icon name="Send" size={16} />
            )}
            Send Message
          </MagneticButton>

          <div aria-live="polite">
            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <Icon name="CheckCircle2" size={16} />
                Thanks for reaching out — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <Icon name="AlertCircle" size={16} />
                Something went wrong. Please email me directly instead.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

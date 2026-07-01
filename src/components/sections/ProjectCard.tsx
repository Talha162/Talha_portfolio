import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import type { Project } from "@/data/portfolio";
import { fadeInUp } from "@/lib/motion";

interface ProjectCardProps {
  project: Project;
}

function resolveLiveLink(project: Project): { url: string; label: string } | null {
  if (project.links.store) return { url: project.links.store, label: "Store" };
  if (project.links.live) return { url: project.links.live, label: "Live" };
  if (project.links.figma) return { url: project.links.figma, label: "Figma" };
  return null;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const liveLink = resolveLiveLink(project);
  const githubLink = project.links.github;

  return (
    <motion.div variants={fadeInUp}>
      <TiltCard className="card-surface group flex h-full flex-col overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            width={640}
            height={400}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="whitespace-nowrap text-xs text-faint">{project.period}</span>
            </div>
            {project.company && (
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-brand">
                {project.company}
              </p>
            )}
          </div>

          <p className="text-sm leading-relaxed text-muted">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          {project.detail && (
            <div>
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand"
              >
                {expanded ? "Hide details" : "Notable technical detail"}
                <Icon name={expanded ? "ChevronUp" : "ChevronDown"} size={14} />
              </button>
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 rounded-xl border border-border bg-surface-2 p-3 text-xs leading-relaxed text-muted">
                      {project.detail}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <div className="mt-auto flex items-center gap-3 pt-2">
            <a
              href={githubLink}
              target={githubLink ? "_blank" : undefined}
              rel={githubLink ? "noreferrer" : undefined}
              aria-disabled={!githubLink}
              tabIndex={githubLink ? 0 : -1}
              className={
                githubLink
                  ? "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium text-content transition-colors hover:border-brand/50"
                  : "inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium text-faint opacity-50"
              }
            >
              <Icon name="Github" size={14} />
              Code
            </a>
            <a
              href={liveLink?.url}
              target={liveLink ? "_blank" : undefined}
              rel={liveLink ? "noreferrer" : undefined}
              aria-disabled={!liveLink}
              tabIndex={liveLink ? 0 : -1}
              className={
                liveLink
                  ? "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium text-content transition-colors hover:border-brand/50"
                  : "inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium text-faint opacity-50"
              }
            >
              <Icon name="ExternalLink" size={14} />
              {liveLink?.label ?? "Live"}
            </a>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

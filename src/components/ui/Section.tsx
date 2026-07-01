import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function Section({ id, children, className, ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("py-20 sm:py-28", className)}
    >
      <div className="container-px">{children}</div>
    </section>
  );
}

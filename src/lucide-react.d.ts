declare module "lucide-react" {
  import type { FC, SVGProps } from "react";

  export interface LucideProps extends Partial<SVGProps<SVGSVGElement>> {
    size?: string | number;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  export type LucideIcon = FC<LucideProps>;

  export const Github: LucideIcon;
  export const Linkedin: LucideIcon;
  export const Mail: LucideIcon;
  export const Phone: LucideIcon;
  export const MapPin: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Download: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const Sun: LucideIcon;
  export const Moon: LucideIcon;
  export const ChevronUp: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const Code2: LucideIcon;
  export const Smartphone: LucideIcon;
  export const GitBranch: LucideIcon;
  export const Flame: LucideIcon;
  export const Server: LucideIcon;
  export const Puzzle: LucideIcon;
  export const Wrench: LucideIcon;
  export const Rocket: LucideIcon;
  export const Database: LucideIcon;
  export const CreditCard: LucideIcon;
  export const Sparkles: LucideIcon;
  export const GraduationCap: LucideIcon;
  export const Award: LucideIcon;
  export const Briefcase: LucideIcon;
  export const Calendar: LucideIcon;
  export const Building2: LucideIcon;
  export const Languages: LucideIcon;
  export const MessageSquareQuote: LucideIcon;
  export const Send: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const Loader2: LucideIcon;
  export const Sparkle: LucideIcon;
  export const Quote: LucideIcon;
  export const Globe: LucideIcon;

  const _default: Record<string, LucideIcon>;
  export default _default;
}

import { Sparkles } from "lucide-react";
import { icons } from "./icon-registry";

interface IconProps {
  name: string;
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}

export function Icon({ name, className, size, strokeWidth }: IconProps) {
  const Component = icons[name] ?? Sparkles;
  return <Component className={className} size={size} strokeWidth={strokeWidth} />;
}

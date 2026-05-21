import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Server, Cloud, CreditCard, Globe, Wrench, Code, Layers, Puzzle, Upload } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Server,
  Cloud,
  CreditCard,
  Globe,
  Wrench,
  Code,
  Layers,
  Puzzle,
  Upload,
};

interface SkillCardProps {
  title: string;
  icon: string;
  skills: string[];
}

export function SkillCard({ title, icon, skills }: SkillCardProps) {
  const IconComponent = iconMap[icon] || Wrench;

  return (
    <Card className="group ring-gradient relative bg-white hover:shadow-xl hover:shadow-[#0d6efd]/5 transition-all duration-300 hover:-translate-y-1 border-[#e9ecef]/80 rounded-2xl overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          {/* App-icon style container */}
          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0d6efd] to-[#6610f2] text-white flex items-center justify-center shadow-md shadow-[#0d6efd]/25 group-hover:shadow-lg group-hover:shadow-[#0d6efd]/30 transition-shadow">
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 to-transparent" />
            <IconComponent className="relative w-5 h-5" />
          </div>
          <CardTitle className="font-display text-lg font-semibold text-[#0F172A]">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="bg-[#f8f9fa] text-[#475569] border border-[#e9ecef] hover:bg-white hover:border-[#0d6efd]/30 hover:text-[#0d6efd] transition-colors font-medium"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

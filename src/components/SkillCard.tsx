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
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-[#e9ecef]">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-[#0d6efd] to-[#6610f2] text-white">
            <IconComponent className="w-5 h-5" />
          </div>
          <CardTitle className="text-lg font-semibold text-[#212529]">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="bg-[#f8f9fa] text-[#212529] border border-[#e9ecef] hover:bg-[#e9ecef] transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

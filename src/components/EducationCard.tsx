import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import type { Education } from '@/types';

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-[#e9ecef] hover:border-[#0d6efd]/30">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-[#0d6efd] to-[#6610f2] text-white flex-shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base font-semibold text-[#212529] group-hover:text-[#0d6efd] transition-colors line-clamp-2">
              {education.degree}
            </CardTitle>
            <p className="text-sm text-[#0d6efd] font-medium mt-1">{education.institution}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-[#f8f9fa] text-[#6c757d] flex items-center gap-1 text-xs">
            <MapPin className="w-3 h-3" />
            {education.location}
          </Badge>
          {education.period && (
            <Badge variant="secondary" className="bg-[#f8f9fa] text-[#6c757d] flex items-center gap-1 text-xs">
              <Calendar className="w-3 h-3" />
              {education.period}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

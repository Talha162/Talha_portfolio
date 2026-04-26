import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import type { Experience } from '@/types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-4 md:gap-8`}>
      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0d6efd] border-4 border-white shadow-md hidden md:block z-10" />
      
      {/* Content */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <Card className="hover:shadow-lg transition-all duration-300 border-[#e9ecef]">
          <CardHeader className="pb-3">
            <div className={`flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'} items-start gap-1`}>
              <CardTitle className="text-lg font-semibold text-[#212529]">{experience.role}</CardTitle>
              <p className="text-[#0d6efd] font-medium">{experience.company}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className={`flex flex-wrap gap-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
              <Badge variant="secondary" className="bg-[#f8f9fa] text-[#6c757d] flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {experience.period}
              </Badge>
              <Badge variant="secondary" className="bg-[#f8f9fa] text-[#6c757d] flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {experience.location}
              </Badge>
              <Badge variant="secondary" className="bg-[#f8f9fa] text-[#0d6efd] flex items-center gap-1">
                <Briefcase className="w-3 h-3" />
                {experience.type}
              </Badge>
            </div>
            <ul className={`space-y-2 text-sm text-[#6c757d] ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
              {experience.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0d6efd] mt-2 flex-shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </div>
  );
}

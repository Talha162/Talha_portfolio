import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Images, Figma, ExternalLink } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const hasImages = project.images && project.images.length > 0;
  const hasFigma = !!project.figmaUrl;
  const coverImage = hasImages ? project.images![0] : project.image;

  return (
    <Card
      onClick={onClick}
      className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-[#e9ecef] cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-[#f8f9fa]">
        <img
          src={coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/e9ecef/6c757d?text=' + encodeURIComponent(project.title);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-sm font-medium flex items-center gap-1.5">
            {hasImages ? (
              <>
                <Images className="w-4 h-4" />
                View {project.images!.length} Screens
              </>
            ) : hasFigma ? (
              <>
                <Figma className="w-4 h-4" />
                View Design
              </>
            ) : (
              <>
                <ExternalLink className="w-4 h-4" />
                View Details
              </>
            )}
          </span>
        </div>
        {/* Badge indicators */}
        <div className="absolute top-2 right-2 flex gap-1">
          {hasImages && (
            <span className="bg-black/60 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
              <Images className="w-3 h-3" />
              {project.images!.length}
            </span>
          )}
          {hasFigma && (
            <span className="bg-[#6610f2]/80 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
              <Figma className="w-3 h-3" />
            </span>
          )}
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-[#212529] group-hover:text-[#0d6efd] transition-colors">
          {project.title}
        </CardTitle>
        {project.company && (
          <p className="text-xs text-[#6c757d]">{project.company}</p>
        )}
      </CardHeader>

      <CardContent className="space-y-3">
        <CardDescription className="text-[#6c757d] line-clamp-2 text-sm">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-[#f8f9fa] text-[#0d6efd] border border-[#0d6efd]/20 text-xs"
            >
              {tech}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="secondary" className="bg-[#f8f9fa] text-[#6c757d] border border-[#e9ecef] text-xs">
              +{project.tech.length - 4}
            </Badge>
          )}
        </div>
        <p className="text-xs text-[#6c757d]">{project.period}</p>
      </CardContent>
    </Card>
  );
}

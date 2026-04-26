import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { EducationCard } from '@/components/EducationCard';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar } from 'lucide-react';
import { education, certifications } from '@/lib/data';

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <p className="text-[#0d6efd] font-medium mb-2">My Background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-4">
            Education
          </h2>
          <p className="text-[#6c757d] max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </AnimatedSection>

        {/* Education Grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 gap-6 mb-16"
          staggerDelay={0.1}
        >
          {education.map((edu) => (
            <StaggerItem key={edu.id}>
              <EducationCard education={edu} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Certifications */}
        <AnimatedSection className="text-center mb-8">
          <p className="text-[#0d6efd] font-medium mb-2">Credentials</p>
          <h3 className="text-2xl md:text-3xl font-bold text-[#212529]">
            Certifications
          </h3>
        </AnimatedSection>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          staggerDelay={0.1}
        >
          {certifications.map((cert) => (
            <StaggerItem key={cert.id}>
              <div className="bg-[#f8f9fa] rounded-xl p-5 border border-[#e9ecef] hover:border-[#0d6efd]/30 transition-colors group">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#0d6efd] to-[#6610f2] text-white flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#212529] group-hover:text-[#0d6efd] transition-colors line-clamp-2">
                      {cert.name}
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary" className="bg-white text-[#6c757d] text-xs">
                        {cert.provider}
                      </Badge>
                      <Badge variant="secondary" className="bg-white text-[#0d6efd] text-xs flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {cert.year}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

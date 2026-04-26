import { AnimatedSection } from '@/components/AnimatedSection';
import { ExperienceCard } from '@/components/ExperienceCard';
import { experiences } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <p className="text-[#0d6efd] font-medium mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-4">
            Work Experience
          </h2>
          <p className="text-[#6c757d] max-w-2xl mx-auto">
            My professional journey as a Full-Stack Flutter Developer
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0d6efd] to-[#6610f2]" />
          
          {/* Experience Cards */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => (
              <AnimatedSection key={experience.id} delay={index * 0.15}>
                <ExperienceCard experience={experience} index={index} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

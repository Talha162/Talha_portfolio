import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { SkillCard } from '@/components/SkillCard';
import { skillCategories } from '@/lib/data';

export function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28 bg-[#f8f9fa] overflow-hidden">
      <div className="absolute inset-0 bg-grid-soft opacity-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <div className="chip mb-4">
            <span className="chip-dot" />
            <span className="chip-label">My Expertise</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 leading-tight">
            Technical Skills
          </h2>
          <p className="text-[#6c757d] max-w-2xl mx-auto">
            Technologies and tools I work with to build scalable, production-ready applications
          </p>
        </AnimatedSection>

        {/* Skills Grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {skillCategories.map((category) => (
            <StaggerItem key={category.id}>
              <SkillCard
                title={category.title}
                icon={category.icon}
                skills={category.skills}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

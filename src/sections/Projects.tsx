import { useState } from 'react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { projects } from '@/lib/data';
import type { Project } from '@/types';

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelected(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <p className="text-[#0d6efd] font-medium mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-4">
            Projects
          </h2>
          <p className="text-[#6c757d] max-w-2xl mx-auto">
            A showcase of mobile apps, UI designs, and utility tools built across professional and personal projects. Click any card to view screens or designs.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} onClick={() => openModal(project)} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <ProjectModal project={selected} onClose={closeModal} />
    </section>
  );
}

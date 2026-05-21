import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { StatCounter } from '@/components/StatCounter';
import { stats } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <div>
            <AnimatedSection>
              <div className="chip mb-4">
                <span className="chip-dot" />
                <span className="chip-label">About Me</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
                Passionate Developer Building
                <span className="bg-gradient-to-r from-[#0d6efd] to-[#6610f2] bg-clip-text text-transparent">
                  {' '}Digital Solutions
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-[#6c757d] mb-4 leading-relaxed">
                I'm a Flutter / Mobile Application Developer with 3+ years of experience building cross-platform Android and iOS applications. I specialize in scalable mobile architecture, real-time systems, offline-first workflows, and role-based access patterns.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-[#6c757d] mb-8 leading-relaxed">
                My work spans Google Maps integration, payment workflows (Stripe, Easypaisa, JazzCash), native SDKs, and AI-powered features using OpenAI and Gemini APIs. I collaborate closely with designers, backend engineers, and QA to ship stable, production-ready mobile products.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <StatCounter value={stat.value} label={stat.label} suffix={stat.suffix} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

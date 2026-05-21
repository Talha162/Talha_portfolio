import { AnimatedSection } from '@/components/AnimatedSection';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.linkedin,
    },
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.github,
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#f8f9fa] overflow-hidden">
      <div className="absolute inset-0 bg-grid-soft opacity-50 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <div className="chip mb-4">
            <span className="chip-dot" />
            <span className="chip-label">Get In Touch</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 leading-tight">
            Let's Work Together
          </h2>
          <p className="text-[#6c757d] max-w-2xl mx-auto">
            Have a project in mind? Reach out and let's discuss how I can help bring your ideas to life.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#e9ecef] hover:border-[#0d6efd]/30 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0d6efd] to-[#6610f2] flex items-center justify-center text-white flex-shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[#6c757d]">{item.label}</p>
                  <p className="font-medium text-[#212529] group-hover:text-[#0d6efd] transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-8">
            <p className="text-sm text-[#6c757d] mb-4">Follow me on</p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-white border border-[#e9ecef] flex items-center justify-center text-[#6c757d] hover:text-[#0d6efd] hover:border-[#0d6efd]/30 hover:shadow-md transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

import { AnimatedSection } from '@/components/AnimatedSection';
import { SocialLinks } from '@/components/SocialLinks';
import { personalInfo } from '@/lib/data';

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#212529] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#');
                }}
                className="text-2xl font-bold bg-gradient-to-r from-[#0d6efd] to-[#6610f2] bg-clip-text text-transparent inline-block mb-4"
              >
                {personalInfo.name}
              </a>
              <p className="text-gray-400 mb-4">{personalInfo.title}</p>
              <SocialLinks variant="dark" />
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{personalInfo.email}</li>
                <li>{personalInfo.phone}</li>
                <li>{personalInfo.location}</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}

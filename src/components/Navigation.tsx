import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const { isScrolled } = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#0d6efd] to-[#6610f2] bg-clip-text text-transparent"
          >
            Talha
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-[#6c757d] hover:text-[#0d6efd] transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-[#0d6efd] to-[#6610f2] hover:opacity-90 text-white"
              size="sm"
            >
              <a href="/Talha_CV.pdf" download="Talha_CV.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-[#212529] hover:text-[#0d6efd] transition-colors text-lg font-medium"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#0d6efd] to-[#6610f2] hover:opacity-90 text-white mt-4"
                >
                  <a href="/Talha_CV.pdf" download="Talha_CV.pdf">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  );
}

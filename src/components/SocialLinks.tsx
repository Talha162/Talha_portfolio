import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';

interface SocialLinksProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function SocialLinks({ variant = 'light', className = '' }: SocialLinksProps) {
  const baseColor = variant === 'light' ? 'text-[#6c757d]' : 'text-gray-400';
  const hoverColor = variant === 'light' ? 'hover:text-[#0d6efd]' : 'hover:text-white';

  const links = [
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`${baseColor} ${hoverColor} transition-all duration-200 hover:-translate-y-1`}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}

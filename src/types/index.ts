export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  period: string;
  company?: string;
  image: string;
  images?: string[];
  figmaUrl?: string;
  links?: {
    demo?: string;
    github?: string;
    store?: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  year: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  address: string;
  image: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  image: string;
  features: string[];
  softwareSpecifications: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
    documentation?: string;
  };
  category: 'academic' | 'personal' | 'professional';
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate?: string;
  teamSize?: number;
  role?: string;
}

export interface Projects {
  academic: Project[];
  personal: Project[];
  professional: Project[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Skills {
  programming: Skill[];
  webDevelopment: Skill[];
  database: Skill[];
  visualization: Skill[];
  tools: Skill[];
  softSkills: string[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  image: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
}

export interface Skill {
  name: string;
  category: string;
  level: number;
  icon?: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  about: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  contact: ContactInfo;
}
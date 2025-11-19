// src/types/portfolio.ts

export interface Project {
  id: number;
  featured: boolean;
  title: string;
  company: string;
  duration: string;
  role: string;
  summary: string;
  impact: string;
  deliverables: string[];
  tags: string[];
  image: string;
  category: string;
  problemStatement: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  current: boolean;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
  focus: string;
}

export interface Certification {
  title: string;
  date: string;
}

export interface Activity {
  title: string;
  date: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Hobby {
  icon: string;
  title: string;
  description: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  portfolio: string;
  linkedin: string;
  whatsapp: string;
  profileImage: string;
  resumePDF: string;
}

export interface PortfolioData {
  contact: ContactInfo;
  stats: {
    projectsDelivered: string;
    globalClients: string;
    usabilityImprovement: string;
    clientSatisfaction: string;
  };
  about: {
    background: string;
    specialization: string;
    approach: string;
  };
  projects: Project[];
  experience: Experience[];
  education: Education;
  certifications: Certification[];
  activities: Activity[];
  skills: Skill[];
  hobbies: Hobby[];
  clients: Client[];
  testimonials: Testimonial[];
}

// Centralized Portfolio Data Configuration
// This file serves as the single source of truth for all portfolio content

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
  logo: string; // Changed from optional to required
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string; // Optional profile image
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

// Default Portfolio Data
export const portfolioData: PortfolioData = {
  contact: {
    name: "Kanna Ajay Kumar",
    title: "UI/UX Designer & Consultant",
    tagline: "Creating intuitive, accessible experiences that drive business outcomes. Specialized in enterprise UX, AI integration, and design systems.",
    location: "Hyderabad, India",
    phone: "+91 9629619859",
    email: "ajaykumar.jai1111@gmail.com",
    portfolio: "https://ajaykumarjai11119.wixsite.com/kannaajaykumar",
    linkedin: "https://linkedin.com/in/kannaajaykumar",
    whatsapp: "https://wa.me/919629619859",
    profileImage: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzbWFufGVufDF8fHx8MTc2MzAxNTU1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    resumePDF: "/path/to/resume.pdf" // Update with actual PDF path
  },

  stats: {
    projectsDelivered: "30+",
    globalClients: "4",
    usabilityImprovement: "30%",
    clientSatisfaction: "100%"
  },

  about: {
    background: "Mechatronics Engineer turned UX Designer, bringing systematic problem-solving and technical depth to user-centered design.",
    specialization: "Enterprise UX, AI-driven interfaces, design systems, and low-code platforms (Pega, Outsystems).",
    approach: "Research-driven design, rapid prototyping, accessibility-first thinking, measured by tangible business impact."
  },

  projects: [
    {
      id: 1,
      featured: true,
      title: "Verizon AI-Powered In-Store Ordering",
      company: "Brillio",
      duration: "Jun 2025 – Present",
      role: "Lead UI/UX Consultant",
      summary: "Complete redesign of Verizon's in-store iPad ordering application, integrating AI-driven features to streamline the purchase journey for both customers and sales representatives.",
      impact: "Improved ordering speed, reduced friction points, and increased user satisfaction scores",
      deliverables: ["User Research & Personas", "AI-Driven Prototypes", "Design System Integration", "Usability Testing"],
      tags: ["AI/UX", "Enterprise", "Tablet Design", "Retail"],
      image: "https://images.unsplash.com/photo-1658077830601-8903acdbd3b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXJpem9uJTIwc3RvcmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzEwMzU3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Enterprise UX",
      problemStatement: "Streamlining a complex in-store ordering process."
    },
    {
      id: 2,
      featured: true,
      title: "CBA Pega Constellation Migration",
      company: "Tata Consultancy Services",
      duration: "Nov 2020 – Jun 2025",
      role: "UI/UX Designer",
      summary: "Led the migration of Commonwealth Bank Australia's legacy applications to modern Pega Constellation framework, redesigning complex banking workflows with improved usability patterns.",
      impact: "30% improvement in usability metrics, reduced training time for bank staff",
      deliverables: ["UX Audit", "Information Architecture", "Component Library", "Interaction Patterns", "User Testing"],
      tags: ["Enterprise", "Banking", "Migration", "Design System"],
      image: "https://images.unsplash.com/photo-1726065235203-4368c41c6f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzEwMzU4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Fintech",
      problemStatement: "Modernizing legacy banking applications."
    },
    {
      id: 3,
      featured: true,
      title: "Avery Dennison Recycling Platform",
      company: "Tata Consultancy Services",
      duration: "Nov 2020 – Jun 2025",
      role: "Lead UI/UX Designer",
      summary: "End-to-end design of a sustainability-focused web platform that connects businesses with recycling services, promoting circular economy practices.",
      impact: "20% increase in user engagement, positive feedback on intuitive navigation",
      deliverables: ["User Journey Mapping", "Wireframes & Prototypes", "Visual Design", "Responsive Web Design"],
      tags: ["Web Design", "Sustainability", "E2E", "B2B"],
      image: "https://images.unsplash.com/photo-1642402806417-e451280d845b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBzdXN0YWluYWJpbGl0eXxlbnwxfHx8fDE3NjMwODkwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Web Platform",
      problemStatement: "Connecting businesses for a circular economy."
    },
    {
      id: 4,
      featured: false,
      title: "Flexellence Health & Habit Tracking",
      company: "Product Design",
      duration: "Jan 2025 – Sep 2025",
      role: "Product Designer",
      summary: "Mobile app redesign focused on health tracking and habit monitoring with emphasis on user motivation and engagement.",
      impact: "Enhanced user engagement through gamification and personalized insights",
      deliverables: ["User Research", "Wireframing", "UI Design", "Usability Testing", "Design Handoff"],
      tags: ["Mobile", "Health Tech", "User Research", "B2C"],
      image: "https://images.unsplash.com/photo-1748280621226-91f9530fc329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBmaXRuZXNzJTIwYXBwfGVufDF8fHx8MTc2MzAyMjA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Mobile App",
      problemStatement: "Boosting user motivation in health tracking."
    },
    {
      id: 5,
      featured: false,
      title: "AI Governance Tool POC",
      company: "Tata Consultancy Services",
      duration: "Nov 2020 – Jun 2025",
      role: "UX Designer",
      summary: "Designed proof-of-concept for an AI governance and compliance tool in Pega platform, ensuring EU AI Act compliance with intuitive error handling.",
      impact: "15% reduction in compliance errors through improved UI/UX",
      deliverables: ["Competitive Analysis", "Workflow Design", "Dashboard Design", "Error Prevention Patterns"],
      tags: ["AI Governance", "Enterprise", "Compliance", "POC"],
      image: "https://images.unsplash.com/photo-1717501220725-83f151c447e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGdvdmVybmFuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzEwMzU4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Enterprise Tool",
      problemStatement: "Ensuring AI compliance with intuitive design."
    },
    {
      id: 6,
      featured: false,
      title: "VR Store Experience POC",
      company: "Tata Consultancy Services",
      duration: "Nov 2020 – Jun 2025",
      role: "UX Researcher & Designer",
      summary: "Explored immersive shopping experiences using Virtual Reality, creating prototypes for retail metaverse concepts.",
      impact: "Identified key UX challenges and opportunities in VR commerce",
      deliverables: ["VR Prototyping", "User Testing", "Interaction Design", "Research Report"],
      tags: ["VR", "Metaverse", "Retail", "Emerging Tech"],
      image: "https://images.unsplash.com/photo-1656717040132-d08704e789c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMG1ldGF2ZXJzZXxlbnwxfHx8fDE3NjMxMDM1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Emerging Tech",
      problemStatement: "Prototyping the future of retail."
    },
    {
      id: 7,
      featured: false,
      title: "Enterprise Design System",
      company: "Tata Consultancy Services",
      duration: "Nov 2020 – Jun 2025",
      role: "Design System Contributor",
      summary: "Contributed to building and maintaining design system components for enterprise applications, ensuring consistency and accessibility.",
      impact: "Improved design-development handoff and consistency across products",
      deliverables: ["Component Design", "Documentation", "Accessibility Guidelines", "Design Tokens"],
      tags: ["Design System", "Accessibility", "Enterprise", "Documentation"],
      image: "https://images.unsplash.com/photo-1756576357697-13dfc5fff61c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMDQxMDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Design System",
      problemStatement: "Ensuring consistency at scale."
    }
  ],

  experience: [
    {
      id: 1,
      title: "UI/UX Consultant",
      company: "Brillio",
      duration: "Jun 2025 – Present",
      current: true,
      highlights: [
        "Redesigned Verizon's iPad ordering app with AI integration",
        "Led user research and AI-driven prototyping",
        "Improved ordering journey speed and satisfaction"
      ]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Tata Consultancy Services",
      duration: "Nov 2020 – Jun 2025",
      current: false,
      highlights: [
        "Migrated CBA legacy apps to Pega (30% usability ↑)",
        "Delivered Avery Dennison recycling platform (20% engagement ↑)",
        "Designed AI governance POC (15% error reduction)",
        "Explored GenAI, VR, Metaverse integrations"
      ]
    },
    {
      id: 3,
      title: "Product Designer",
      company: "Flexellence Health App",
      duration: "Jan – Sep 2025",
      current: false,
      highlights: [
        "Mobile app redesign for health tracking using full UX research process"
      ]
    }
  ],

  education: {
    degree: "B.E. Mechatronics Engineering",
    institution: "SASTRA University",
    location: "Thanjavur",
    duration: "2016 – 2020",
    cgpa: "7.7",
    focus: "VR by Meta, App Design, Animation"
  },

  certifications: [
    {
      title: "Understanding and Implementing Design Thinking",
      date: "Dec 2024"
    },
    {
      title: "Figma UI/UX Essentials – Udemy",
      date: "Oct 2023"
    }
  ],

  activities: [
    {
      title: "Config'25 Hyderabad Attendee",
      date: "May 2025"
    },
    {
      title: "J-Hub Designathon Participant",
      date: "Apr 2025"
    }
  ],

  skills: [
    {
      category: "Design Tools",
      items: ["Figma", "Adobe Creative Cloud", "Outsystems UX", "Pega UX", "Inkscape"]
    },
    {
      category: "Research & Testing",
      items: ["User Research", "Usability Testing", "Persona Creation", "Competitive Analysis", "Heuristic Evaluation"]
    },
    {
      category: "Prototyping",
      items: ["Interactive Flows", "Rapid Prototyping", "Design Systems", "WCAG Accessibility"]
    },
    {
      category: "Development",
      items: ["HTML/CSS", "Python", "Agile UX", "Vibe Coding"]
    }
  ],

  hobbies: [
    {
      icon: "Camera",
      title: "UI/UX Exploration",
      description: "Analyzing app designs & user patterns"
    },
    {
      icon: "Sparkles",
      title: "AI & Emerging Tech",
      description: "Experimenting with GenAI tools"
    },
    {
      icon: "Gamepad2",
      title: "Gaming UX",
      description: "Studying immersive experiences"
    },
    {
      icon: "Coffee",
      title: "Design Communities",
      description: "Active in Figma & design events"
    }
  ],

  clients: [
    { 
      name: "Verizon",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop"
    },
    { 
      name: "Commonwealth Bank Australia",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop"
    },
    { 
      name: "Avery Dennison",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop"
    },
    { 
      name: "TCS",
      logo: "https://images.unsplash.com/photo-1599658880436-c61792e70672?w=200&h=100&fit=crop"
    }
  ],

  testimonials: [
    {
      quote: "Ajay consistently delivers pixel-perfect designs with measurable business impact. His ability to balance user needs with technical constraints makes him invaluable for enterprise projects.",
      author: "Sarah Mitchell",
      role: "Design Lead",
      company: "TCS Enterprise Projects",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      quote: "Working with Ajay on the Verizon project was exceptional. He brought fresh AI-driven UX ideas that transformed our in-store experience.",
      author: "Michael Chen",
      role: "Product Manager",
      company: "Brillio",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      quote: "Ajay's research-driven approach to UX design helped us achieve a 30% improvement in usability metrics. He's a true professional.",
      author: "Emma Thompson",
      role: "Head of Digital",
      company: "Commonwealth Bank Australia",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      quote: "His work on our sustainability platform exceeded expectations. Ajay understands both design aesthetics and business goals.",
      author: "David Rodriguez",
      role: "VP of Innovation",
      company: "Avery Dennison",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      quote: "Ajay brings a unique blend of technical knowledge and design thinking. His Pega UX work has set new standards for our projects.",
      author: "Priya Sharma",
      role: "Senior Manager",
      company: "TCS",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
    },
    {
      quote: "The best part about working with Ajay is his ability to translate complex requirements into intuitive designs that users love.",
      author: "James Wilson",
      role: "CTO",
      company: "TCS Digital",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    }
  ]
};
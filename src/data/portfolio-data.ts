// Centralized Portfolio Data Configuration
// This file serves as the single source of truth for all portfolio content

// Import Assets
import Profile_Image from '../assets/profile/Profile_Image.png'; // New Profile Image

import Thumbnail_CBA from '../assets/thumbnails/Thumbnail_CBA.png';
import Thumbnail_ADCircular from '../assets/thumbnails/Thumbnail_ADCircular.png';
import Thumbnail_Flexcellence from '../assets/thumbnails/Thumbnail_Flexcellence.png';
import Thumbnail_AIGovernance from '../assets/thumbnails/Thumbnail_AIGovernance.png';
import Thumbnail_ADAM from '../assets/thumbnails/Thumbnail_ADAM.png';
import Thumbnail_JohnCoffeeBeans from '../assets/thumbnails/Thumbnail_JohnCoffeeBeans.png';
import Thumbnail_VR from '../assets/thumbnails/Thumbnail_VR.png';


// Import Logo Assets
import Logo_Verizon from '../assets/logos/Logo_Verizon.png';
import Logo_CBA from '../assets/logos/Logo_CBA.png';
import Logo_Avery from '../assets/logos/Logo_Avery.png';
import Logo_TCS from '../assets/logos/Logo_TCS.png';
import Logo_Brillio from '../assets/logos/Logo_Brillio.png';
import Logo_Flexcellence from '../assets/logos/Logo_Flexcellence.png';
import Logo_Stellantis from '../assets/logos/Logo_Stellantis.png';
import Logo_Aurum from '../assets/logos/Logo_Aurum.png';

// Import profile Assets
import Anurag from '../assets/profile/Anurag.jpg';
import AshokKumarNaga from '../assets/profile/Ashok kumar naga.jpg';
import KarabiBaruah from '../assets/profile/Karabi baruah.jpg';
import MeenakshiDixit from '../assets/profile/Meenakshi Dixit.jpg';
import NikeshMangavani from '../assets/profile/Nikesh Mangavani.jpg';
import PurviGandhi from '../assets/profile/Purvi Gandhi.jpg';
import RamyaPrakesh from '../assets/profile/Ramya Prakesh.jpg';
import Senthil from '../assets/profile/Senthil.jpg';
import VikashMediboina from '../assets/profile/Vikash Mediboina.jpg';
import YasaswiniDesu from '../assets/profile/Yasaswini desu.jpg';

// Resume File
import ResumePDF from '../assets/Ajay_Kumar_Resume_Oct25.pdf'; // Now a PDF

// Prevent tree-shaking of assets by creating a dummy reference
export const getAssetReferences = () => [
  Profile_Image,
  Thumbnail_CBA,
  Thumbnail_ADCircular,
  Thumbnail_Flexcellence,
  Thumbnail_AIGovernance,
  Thumbnail_ADAM,
  Thumbnail_JohnCoffeeBeans,
  Thumbnail_VR,
  
  ResumePDF,

  Logo_Verizon,
  Logo_CBA,
  Logo_Avery,
  Logo_TCS,
  Logo_Brillio,
  Logo_Flexcellence,
  Logo_Stellantis,
  Logo_Aurum,
  
  AshokKumarNaga,
  KarabiBaruah,
  MeenakshiDixit,
  NikeshMangavani,
  PurviGandhi,
  RamyaPrakesh,
  Senthil,
  VikashMediboina,
  YasaswiniDesu
];

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
  externalLink?: string;
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
  icon: string; // Added icon property
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
    yearsExperience?: string;
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
    portfolio: "https://kannaajaykumar.com",
    linkedin: "https://linkedin.com/in/kanna-ajay-kumar",
    whatsapp: "https://wa.me/919629619859",
    profileImage: Profile_Image,
    resumePDF: ResumePDF
  },

  stats: {
    projectsDelivered: "30+",
    globalClients: "8",
    usabilityImprovement: "100%",
    clientSatisfaction: "100%",
    yearsExperience: "5"
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
      title: "ADAM Control Tower – AI Agent Monitoring & Governance Platform",
      company: "Brillio",
      duration: "5 months",
      role: "UI/UX Designer",
      summary: "Designed an enterprise-level AI governance and monitoring dashboard that provides unified visibility across all AI agents within an organization.",
      impact: "Faster anomaly detection for AI Ops teams, Higher agent reliability through human evaluation workflows, Scalable design system supporting 50+ AI agents",
      deliverables: [
        "UX Research",
        "Dashboard Wireframes",
        "Design System",
        "High-Fidelity UI",
        "Data Visualization Design"],
      tags: [
        "Enterprise Dashboard",
        "AI Monitoring",
        "Data Visualization"
      ],
      image: Thumbnail_ADAM,
      category: "Enterprise UX",
      problemStatement: "Streamlining a complex in-store ordering process.",
      externalLink: "https://famous-periodical-d0a.notion.site/ADAM-Control-Tower-UX-Case-Study-2b6eb739e83c80d18133fc7a3057b9b9?pvs=73"
    },
    {
      id: 2,
      featured: true,
      title: "AD Circular – Responsive Recycling Website",
      company: "Avery Dennison (via TCS)",
      duration: "9 months",
      role: "Sole UI/UX Designer",
      summary: "Designed a fully responsive recycling website for Avery Dennison to promote paper circularity and increase transparency in their sustainability initiatives. The goal was to provide an intuitive platform for industries to schedule pickups, estimate recycling impact, and access multilingual educational content on circularity",
      impact: "Increased user engagement, Delivered a scalable, multilingual design system improving consistency",
      deliverables: [
        "UX Audit",
        "User Interviews",
        "Competitor Analysis",
        "User Journeys",
        "Wireframes",
        "Prototypes",
        "Usability Testing",
        "Developer Handoff"
      ],
      tags: [
        "Sustainability",
        "Multilingual UX",
        "Design System",
        "Enterprise UX",
        "Web Design"
      ],
      image: Thumbnail_ADCircular,
      category: "Fintech",
      problemStatement: "Modernizing legacy banking applications.",
      externalLink: "https://famous-periodical-d0a.notion.site/AD-Circular-1dfeb739e83c8035bca1cb5d450033aa"
    },
    {
      id: 3,
      featured: true,
      title: "Holistic Health & Wellness Mobile App",
      company: "Flexcellence (Freelance Project)",
      duration: "9+ months",
      role: "Product Designer",
      summary: "Designed a mobile-first wellness app that helps working professionals improve their lifestyle through personalized coaching, AI-driven assistance, and integrated health tracking. The app unifies food journaling, workout tracking, hydration, sleep, and habit building into one cohesive platform while providing real-time human and AI support",
      impact: "60% goal completion rate among pilot users, 50% increase in new users during MVP testing, AI assistant “TARA” used by 80% of users for food logging, ",
      deliverables: [
        "User Research",
        "Surveys",
        "User Personas",
        "Competitor Analysis",
        "User Journeys",
        "Wireframes",
        "Custom Design System",
        "Prototypes",
        "A/B Testing",
        "Usability Testing",
        "MVP Optimization"
      ],
      tags: [
        "Health & Wellness",
        "Mobile App",
        "AI Assistant",
        "Design System",
        "User Testing",
        "MVP Design"
      ],
      image: Thumbnail_Flexcellence,
      category: "Web Platform",
      problemStatement: "Connecting businesses for a circular economy.",
      externalLink: "https://famous-periodical-d0a.notion.site/Flexcellence-UX-Case-study-293eb739e83c80118576d2329d3405fa"
    },
    {
      id: 4,
      featured: false,
      title: "Immersive Retail Store POC – VR Application for the Metaverse",
      company: "Tata Consultancy Services (Internal POC)",
      duration: "6 months",
      role: "UX Researcher",
      summary: "Designed a virtual retail store proof-of-concept using Unity to explore next-generation shopping experiences for the metaverse. UX methodologies—including personas, flows, affinity mapping, prioritization, and heuristic evaluation—were used to shape a prototype that could influence future enterprise VR retail initiatives.",
      impact: "Presented to TCS unit head; received strong positive feedback, Built foundation for future user testing with target customer groups",
      deliverables: [
        "User Persona",
        "Prioritization Matrix",
        "Rough Sketches",
        "Unity Wireframes",
        "VR Interaction Concepts"
      ],
      tags: [
        "VR Design",
        "Metaverse",
        "Unity",
        "Enterprise Innovation",
        "3D Experience Design"
      ],
      image: Thumbnail_VR,
      category: "Mobile App",
      problemStatement: "Boosting user motivation in health tracking.",
      externalLink: "https://famous-periodical-d0a.notion.site/Immersive-Retail-Store-POC-VR-Application-for-the-Metaverse-118eb739e83c808f96d1f367374730d3"
    },
    {
      id: 5,
      featured: false,
      title: "John Coffee Beans – Mobile App UI Design",
      company: "Personal Project (Based on Random Project Generator)",
      duration: "3 months",
      role: "UX/UI Designer",
      summary: "Designed a personalized coffee beans shopping mobile app targeted at 52-year-old business professionals who value convenience, premium quality, and quick decision-making",
      impact: "Identified key UX blockers through Maze usability tests, Increased clarity in onboarding and product discovery",
      deliverables: [
        "User Persona",
        "User Flow",
        "Brainstorming",
        "Affinity Diagram",
        "Rough Sketches",
        "Wireframes",
        "Low-Fidelity Prototype",
        "Moodboard",
        "UI Design System",
        "Components",
        "High-Fidelity Prototype",
        "Usability Testing",
        "Insights & Improvements"
      ],
      tags: [
        "Mobile App Design",
        "UI Design",
        "UX Research",
        "E-commerce",
        "Prototyping",
        "User Testing"
      ],
      image: Thumbnail_JohnCoffeeBeans,
      category: "Enterprise Tool",
      problemStatement: "Ensuring AI compliance with intuitive design.",
      externalLink: "https://medium.com/@ajaykumar.jai1111/john-coffee-beans-6f9d5e81383d"
    },
    {
      id: 6,
      featured: false,
      title: "Strategic Migration of Legacy Financial Applications to Pega Constellation",
      company: "Commonwealth Bank of Australia (Via TCS)",
      duration: "12+ months",
      role: "Sole UI/UX Designer",
      summary: "Delivered a multi-phase strategic migration of seven legacy enterprise financial applications to the modern Pega Constellation framework. The focus is on improving system longevity, increasing maintainability, and enhancing user experience across multiple business-critical workflows.\nAs the only UX designer, responsibilities include discovery, requirement gathering, user flows, wireframing, high-fidelity UI, and collaborating with BAs and developers.",
      impact: "Streamlining 7 legacy applications into a unified, scalable Pega framework, Improving UX consistency across critical financial workflows, Enabling faster development with reusable components, flows, and templates",
      deliverables: [
        "Requirement Analysis",
        "User Flows",
        "Wireframes",
        "UI Screens",
        "UX Documentation",
        "Interaction Patterns",
        "Pega Constellation Design Alignment",
        "Design Reviews",
        "Stakeholder Collaboration"
      ],
      tags: [
        "Enterprise UX",
        "Financial Services",
        "Pega Constellation",
        "Application Migration",
        "UX Strategy",
        "Workflow Design",
        "Interaction Design"
      ],
      image: Thumbnail_CBA,
      category: "Emerging Tech",
      problemStatement: "Prototyping the future of retail.",
      externalLink: "https://example.com/vr-case-study"
    },
    {
      id: 7,
      featured: false,
      title: "AI Governance Application – Enterprise Compliance & Reporting (Pega Constellation)",
      company: "TCS - Internal",
      duration: "6 months",
      role: "UI/UX Designer",
      summary: "Designed a conceptual enterprise application that allows organizations to audit, govern, and monitor their internal AI applications in alignment with Australian AI Governance, Privacy, and Compliance laws.\nThe mockup focuses on simplifying compliance workflows, surfacing risks early, and generating structured governance reports using Pega Constellation’s modern UI patterns.\n\nThe project integrates responsible AI principles, transparency guidelines, and operational governance requirements into an intuitive user experience for risk teams, compliance leads, and IT governance managers.",
      impact: "Created a clear framework for AI governance aligned with Australian regulations, Standardized compliance checks across multiple AI systems, Enabled centralized visibility for risk, audit, and governance teams",
      deliverables: [
        "User Research",
        "Compliance Requirement Mapping",
        "User Flows",
        "Governance Dashboard Design",
        "Risk Assessment Screens",
        "Reporting Templates",
        "Pega Constellation UI Mockups",
        "Interaction Patterns",
        "High-Fidelity Mockups"
      ],
      tags: [
        "AI Governance",
        "Compliance UX",
        "Pega Constellation",
        "Enterprise UX",
        "Risk & Audit",
        "Reporting Systems",
        "Responsible AI"
      ],
      image: Thumbnail_AIGovernance,
      category: "Design System",
      problemStatement: "Ensuring consistency at scale.",
      externalLink : "https://example.com/design-system-case-study"
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

  skills:[
    {
      icon: "PenTool",
      category: "Design & Tools",
      items: [
        "Figma",
        "Adobe Creative Cloud Suite",
        "OutSystems UX",
        "Pega UX",
        "Inkscape\nInteractive Flows",
        "Rapid Prototyping",
        "Wireframing",
        "Design Systems",
        "Accessibility (WCAG)"
      ]
    },
    {
      icon: "NotebookPen",
      category: "Research & Experience Strategy",
      items: [
        "Surveys",
        "Interviews",
        "Persona Creation\nCompetitive Analysis\nUsability Testing",
        "Heuristic Evaluation",
        "Empathy Mapping",
        "Card Sorting\nJourney Mapping",
        "Task Flows",
        "Information Architecture"
      ]
    },
    {
      icon: "Code",
      category: "Collaboration & Delivery",
      items: [
        "HTML/CSS",
        "Python",
        "Agile UX",
        "Vibe Coding",
        "Cross-functional Collaboration",
        "Developer Handoff",
        "Design Documentation"
      ]
    }
  ],


  hobbies: [
    {
      icon: "Telescope",
      title: "UI/UX Exploration",
      description: "Observing UX in everyday life, mythology, and the past"
    },
    {
      icon: "Sparkles",
      title: "AI & Emerging Tech",
      description: "Experimenting with the latest AI tools and technologies"
    },
    {
      icon: "ChefHat",
      title: "Cooking",
      description: "Exploring simple, flavorful recipes to unwind and create"
    },
    {
      icon: "Users",
      title: "Design Communities",
      description: "Participating in design communities to learn and grow"
    }
  ],


  clients: [
    { 
      name: "Verizon",
      logo: Logo_Verizon
    },
    { 
      name: "Commonwealth Bank Australia",
      logo: Logo_CBA
    },
    { 
      name: "Avery Dennison",
      logo: Logo_Avery
    },
    { 
      name: "TCS",
      logo: Logo_TCS
    },
    { 
      name: "Brillio",
      logo: Logo_Brillio
    },
    { 
      name: "Flexellence",
      logo: Logo_Flexcellence
    },
    {
      name: "Stellantis",
      logo: Logo_Stellantis
    },
    {
      name: "Aurum",
      logo: Logo_Aurum
    }
  ],

  testimonials: [
    {
      quote: "Even though we had only a few days of interaction, it was truly great working with Ajay. He had been cooperative, approachable, and always ready to take on any challenge",
      author: "Yasaswini Desu",
      image: YasaswiniDesu,
      role: "Lead Developer",
      company: "Brillio"
    },
    {
      quote: "Working with Kanna was a pleasure. He delivered an excellent VBG wireframe on a very tight deadline without compromising quality",
      author: "Nikesh Mangwani",
      image: NikeshMangavani, 
      role: "AI Engineer",
      company: "Verizon"
    },
    {
      quote: "It was amazing to see all the screens Kanna built for CT. He understood the business requirements in depth and translated them into clear, structured designs in no time",
      author: "Ramya Prakash",
      image: RamyaPrakesh,
      role: "Business Analyst",
      company: "Brillio"
    },
    {
      quote: "Working with Kanna on the AD Circular project was an absolute pleasure. He quickly understood the business goals, user needs, and technical constraints, and translated everything into clean, user-friendly designs. His ability to simplify complex recycling flows into intuitive screens made a huge difference for our stakeholders. Truly dependable and detail-oriented",
      author: "Karabhi Baruah",
      image: KarabiBaruah,
      role: "Business Analyst",
      company: "Avery Dennison"
    },
    {
      quote: "Kanna is one of the most proactive designers I've mentored. He brings clarity, strong UX thinking, and a collaborative mindset to every project. Whether it was enterprise workflows, research, or design systems, he always delivered high-quality output on time. His growth in UX has been exceptional, and he brings both creativity and practicality to his work",
      author: "Purvi Gandhi",
      image: PurviGandhi,
      role: "UX Lead",
      company: "TCS"
    },
    {
      quote: "Ajay played a vital role in our CBA migration program. Despite being the sole UX designer, he efficiently handled multiple financial flows, coordinated with BAs, developers, and clients, and ensured a consistent Pega Constellation experience. His communication, ownership, and ability to adapt quickly make him a valuable asset on any delivery team",
      author: "Ashok Kumar Naga",
      image: AshokKumarNaga,
      role: "Delivery Head",
      company: "CBA Projects (TCS)"
    },
    {
      quote: "Ajay kumar's work on the ADAM Control Tower POC exceeded our expectations. He brought structure to an extremely complex AI governance problem and designed a dashboard that both technical and business teams could easily understand. His attention to detail, self-initiative, and strategic thinking stood out throughout the project",
      author: "Senthil Peramanathan",
      image: Senthil,
      role: "Manager",
      company: "Brillio"
    },
    {
      quote: "Ajay has been instrumental in shaping the UX of our Flexcellence app. He deeply understood our users’ health challenges and transformed them into clean, empathetic, and functional designs. He is highly iterative, listens well, and delivers fast. His work directly contributed to improvements in engagement and conversion during our testing phase",
      author: "Anurag",
      image: Anurag,
      role: "Founder",
      company: "Flexcellence"
    },
    {
      quote: "Ajay's design approach perfectly aligned with our brand vision. He created a modern and accessible design system, helped refine user journeys, and collaborated closely with marketing to ensure consistency across the app. His ability to visualize ideas clearly and communicate them effectively made the entire process smoother",
      author: "Mahitha",
      role: "Marketing Head",
      company: "Flexcellence"
    }
  ]
}
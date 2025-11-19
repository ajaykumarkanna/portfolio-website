import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, TrendingUp, ChevronDown, ChevronUp, ExternalLink, Mail, Download } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PortfolioHeader } from './portfolio/PortfolioHeader';
import { PortfolioHero } from './portfolio/PortfolioHero';
import { FeaturedProjects } from './portfolio/FeaturedProjects';
import { AdditionalProjects } from './portfolio/AdditionalProjects';
import { PortfolioCTA } from './portfolio/PortfolioCTA';
import { useAccessibility } from '../hooks/useAccessibility';

interface PortfolioProps {
  onNavigateToResume: () => void;
}

export default function Portfolio({ onNavigateToResume }: PortfolioProps) {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const { skipToContent } = useAccessibility();

  const allProjects = [
    // Top 3 Featured Projects
    {
      id: 1,
      featured: true,
      title: 'Verizon AI-Powered In-Store Ordering',
      company: 'Brillio',
      duration: 'Jun 2025 – Present',
      role: 'Lead UI/UX Consultant',
      summary: 'Complete redesign of Verizon\'s in-store iPad ordering application, integrating AI-driven features to streamline the purchase journey for both customers and sales representatives.',
      impact: 'Improved ordering speed, reduced friction points, and increased user satisfaction scores',
      deliverables: ['User Research & Personas', 'AI-Driven Prototypes', 'Design System Integration', 'Usability Testing'],
      tags: ['AI/UX', 'Enterprise', 'Tablet Design', 'Retail'],
      image: 'https://images.unsplash.com/photo-1658077830601-8903acdbd3b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXJpem9uJTIwc3RvcmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzEwMzU3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Enterprise UX',
      problemStatement: 'Streamlining a complex in-store ordering process.'
    },
    {
      id: 2,
      featured: true,
      title: 'CBA Pega Constellation Migration',
      company: 'Tata Consultancy Services',
      duration: 'Nov 2020 – Jun 2025',
      role: 'UI/UX Designer',
      summary: 'Led the migration of Commonwealth Bank Australia\'s legacy applications to modern Pega Constellation framework, redesigning complex banking workflows with improved usability patterns.',
      impact: '30% improvement in usability metrics, reduced training time for bank staff',
      deliverables: ['UX Audit', 'Information Architecture', 'Component Library', 'Interaction Patterns', 'User Testing'],
      tags: ['Enterprise', 'Banking', 'Migration', 'Design System'],
      image: 'https://images.unsplash.com/photo-1726065235203-4368c41c6f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzEwMzU4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Fintech',
      problemStatement: 'Modernizing legacy banking applications.'
    },
    {
      id: 3,
      featured: true,
      title: 'Avery Dennison Recycling Platform',
      company: 'Tata Consultancy Services',
      duration: 'Nov 2020 – Jun 2025',
      role: 'Lead UI/UX Designer',
      summary: 'End-to-end design of a sustainability-focused web platform that connects businesses with recycling services, promoting circular economy practices.',
      impact: '20% increase in user engagement, positive feedback on intuitive navigation',
      deliverables: ['User Journey Mapping', 'Wireframes & Prototypes', 'Visual Design', 'Responsive Web Design'],
      tags: ['Web Design', 'Sustainability', 'E2E', 'B2B'],
      image: 'https://images.unsplash.com/photo-1642402806417-e451280d845b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBzdXN0YWluYWJpbGl0eXxlbnwxfHx8fDE3NjMwODkwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Web Platform',
      problemStatement: 'Connecting businesses for a circular economy.'
    },
    // Additional Projects
    {
      id: 4,
      featured: false,
      title: 'Flexellence Health & Habit Tracking',
      company: 'Product Design',
      duration: 'Jan 2025 – Sep 2025',
      role: 'Product Designer',
      summary: 'Mobile app redesign focused on health tracking and habit monitoring with emphasis on user motivation and engagement.',
      impact: 'Enhanced user engagement through gamification and personalized insights',
      deliverables: ['User Research', 'Wireframing', 'UI Design', 'Usability Testing', 'Design Handoff'],
      tags: ['Mobile', 'Health Tech', 'User Research', 'B2C'],
      image: 'https://images.unsplash.com/photo-1748280621226-91f9530fc329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBmaXRuZXNzJTIwYXBwfGVufDF8fHx8MTc2MzAyMjA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Mobile App',
      problemStatement: 'Boosting user motivation in health tracking.'
    },
    {
      id: 5,
      featured: false,
      title: 'AI Governance Tool POC',
      company: 'Tata Consultancy Services',
      duration: 'Nov 2020 – Jun 2025',
      role: 'UX Designer',
      summary: 'Designed proof-of-concept for an AI governance and compliance tool in Pega platform, ensuring EU AI Act compliance with intuitive error handling.',
      impact: '15% reduction in compliance errors through improved UI/UX',
      deliverables: ['Competitive Analysis', 'Workflow Design', 'Dashboard Design', 'Error Prevention Patterns'],
      tags: ['AI Governance', 'Enterprise', 'Compliance', 'POC'],
      image: 'https://images.unsplash.com/photo-1717501220725-83f151c447e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGdvdmVybmFuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzEwMzU4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Enterprise Tool',
      problemStatement: 'Ensuring AI compliance with intuitive design.'
    },
    {
      id: 6,
      featured: false,
      title: 'VR Store Experience POC',
      company: 'Tata Consultancy Services',
      duration: 'Nov 2020 – Jun 2025',
      role: 'UX Researcher & Designer',
      summary: 'Explored immersive shopping experiences using Virtual Reality, creating prototypes for retail metaverse concepts.',
      impact: 'Identified key UX challenges and opportunities in VR commerce',
      deliverables: ['VR Prototyping', 'User Testing', 'Interaction Design', 'Research Report'],
      tags: ['VR', 'Metaverse', 'Retail', 'Emerging Tech'],
      image: 'https://images.unsplash.com/photo-1656717040132-d08704e789c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMG1ldGF2ZXJzZXxlbnwxfHx8fDE3NjMxMDM1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Emerging Tech',
      problemStatement: 'Prototyping the future of retail.'
    },
    {
      id: 7,
      featured: false,
      title: 'Enterprise Design System',
      company: 'Tata Consultancy Services',
      duration: 'Nov 2020 – Jun 2025',
      role: 'Design System Contributor',
      summary: 'Contributed to building and maintaining design system components for enterprise applications, ensuring consistency and accessibility.',
      impact: 'Improved design-development handoff and consistency across products',
      deliverables: ['Component Design', 'Documentation', 'Accessibility Guidelines', 'Design Tokens'],
      tags: ['Design System', 'Accessibility', 'Enterprise', 'Documentation'],
      image: 'https://images.unsplash.com/photo-1756576357697-13dfc5fff61c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMDQxMDM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Design System',
      problemStatement: 'Ensuring consistency at scale.'
    }
  ];

  const featuredProjects = allProjects.filter(p => p.featured);
  const additionalProjects = allProjects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      <PortfolioHeader onNavigateToResume={onNavigateToResume} />
      
      <div className="max-w-7xl mx-auto px-6 py-12" id="main-content" tabIndex={-1}>
        <PortfolioHero />
        
        <FeaturedProjects projects={featuredProjects} />
        
        <AdditionalProjects projects={additionalProjects} />
        
        <PortfolioCTA onNavigateToResume={onNavigateToResume} />
      </div>
    </div>
  );
}
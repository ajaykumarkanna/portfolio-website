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
import { usePortfolioData } from '../hooks/usePortfolioData';

interface PortfolioProps {
  onNavigateToResume: () => void;
}

export default function Portfolio({ onNavigateToResume }: PortfolioProps) {
  const { projects } = usePortfolioData();
  const { skipToContent } = useAccessibility();

  const featuredProjects = projects.filter(p => p.featured);
  const additionalProjects = projects.filter(p => !p.featured);

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
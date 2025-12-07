import { Link, useLocation } from 'react-router-dom';
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
import { useEffect } from 'react';
// import { MainNavigation } from './MainNavigation';  // Removed as per request

interface PortfolioProps {
  onNavigateToResume: () => void;
}

export default function Portfolio({ onNavigateToResume }: PortfolioProps) {
  const { projects } = usePortfolioData();
  const { skipToContent } = useAccessibility();
  const location = useLocation();

  const featuredProjects = projects.filter(p => p.featured);
  const additionalProjects = projects.filter(p => !p.featured);

  useEffect(() => {
    // Scroll to specific project if passed via state
    if (location.state && location.state.scrollToProjectId) {
      const element = document.getElementById(`project-${location.state.scrollToProjectId}`);
      if (element) {
        // Add a small delay to ensure the DOM is fully ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-indigo-600 focus:z-50"
        onClick={(e) => {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
          }
        }}
      >
        Skip to main content
      </a>
      
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                onClick={onNavigateToResume}
                aria-label="Back to home"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <h1 className="text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </h1>
            </div>
            <div className="flex items-center gap-3">
              {/* <MainNavigation currentPath={location.pathname} /> */}  {/* Removed as per request */}
              <Button 
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-700"
                asChild
                aria-label="Contact via email"
              >
                <a href="mailto:ajaykumar.jai1111@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-6 py-12" id="main-content" tabIndex={-1}>
        <PortfolioHero />
        
        <FeaturedProjects projects={featuredProjects} />
        
        <AdditionalProjects projects={additionalProjects} />
        
        <PortfolioCTA onNavigateToResume={onNavigateToResume} />
        
        {/* Footer */}
        <div className="mt-12 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} kannaajaykumar.com</p>
        </div>
      </div>
    </div>
  );
}
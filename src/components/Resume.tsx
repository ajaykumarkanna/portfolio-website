import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, Linkedin, MessageCircle, MapPin, Award, Briefcase, GraduationCap, Code, Palette, Users, TrendingUp, ExternalLink, Download, ArrowRight, Coffee, Gamepad2, Camera, Sparkles, Quote } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { Breadcrumb } from './ui/breadcrumb';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useAccessibility } from '../hooks/useAccessibility';
import { ResumeHero } from './resume/ResumeHero';
import { AboutSection } from './resume/AboutSection';
import { FeaturedProjects } from './resume/FeaturedProjects';
import { ExperienceEducation } from './resume/ExperienceEducation';
import { SkillsSection } from './resume/SkillsSection';
import { HobbiesSection } from './resume/HobbiesSection';
import { ClientsSection } from './resume/ClientsSection';
import { TestimonialsSection } from './resume/TestimonialsSection';
import { CallToAction } from './resume/CallToAction';

interface ResumeProps {
  onNavigateToPortfolio: () => void;
}

export default function Resume({ onNavigateToPortfolio }: ResumeProps) {
  const data = usePortfolioData();
  const { scrollToSection } = useSmoothScroll();
  const { skipToContent } = useAccessibility();

  const handleDownloadPDF = () => {
    if (data.contact.resumePDF) {
      window.open(data.contact.resumePDF, '_blank');
    } else {
      alert('Please add your resume PDF in the admin panel (Ctrl+Shift+A)');
    }
  };

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
      
      {/* Fixed Header with Contact Info */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h1 className="text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {data.contact.name}
              </h1>
              <div className="hidden lg:flex items-center gap-4 text-sm text-slate-600">
                <a href={`tel:${data.contact.phone}`} className="flex items-center gap-2 hover:text-indigo-600 transition-colors" aria-label={`Call ${data.contact.name} at ${data.contact.phone}`}>
                  <Phone className="w-4 h-4" />
                  <span>{data.contact.phone}</span>
                </a>
                <span className="text-slate-300">|</span>
                <a href={`mailto:${data.contact.email}`} className="flex items-center gap-2 hover:text-indigo-600 transition-colors" aria-label={`Email ${data.contact.name} at ${data.contact.email}`}>
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
                <span className="text-slate-300">|</span>
                <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-600 transition-colors" aria-label={`Visit ${data.contact.name}'s LinkedIn profile`}>
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline"
                size="sm"
                onClick={handleDownloadPDF}
                className="hidden md:flex"
                aria-label="Download resume as PDF"
              >
                <Download className="w-4 h-4 mr-2" />
                PDF
              </Button>
              <Button 
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-700"
                onClick={onNavigateToPortfolio}
                aria-label="Navigate to portfolio page"
              >
                Portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12" id="main-content" tabIndex={-1}>
        <ResumeHero 
          data={data} 
          onNavigateToPortfolio={onNavigateToPortfolio} 
          handleDownloadPDF={handleDownloadPDF} 
        />
        
        <AboutSection data={data} />
        
        <FeaturedProjects 
          data={data} 
          onNavigateToPortfolio={onNavigateToPortfolio} 
        />
        
        <ExperienceEducation data={data} />
        
        <SkillsSection data={data} />
        
        <HobbiesSection data={data} />
        
        <ClientsSection data={data} />
        
        <TestimonialsSection data={data} />
        
        <CallToAction 
          data={data} 
          onNavigateToPortfolio={onNavigateToPortfolio} 
        />

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-slate-500">
          <p>Designed & coded with attention to detail — showcasing what I do best ✨</p>
        </div>
      </div>
    </div>
  );
}
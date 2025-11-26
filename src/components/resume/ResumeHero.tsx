import React from 'react';
import { Mail, Phone, Globe, Linkedin, MessageCircle, MapPin, Briefcase, Sparkles, Download, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
// import profileImage from '../../assets/Logo_ADCircular.png'; // Removed default profile image import
import type { PortfolioData } from '../../data/portfolio-data';

interface ResumeHeroProps {
  data: PortfolioData;
  onNavigateToPortfolio: () => void;
  handleDownloadPDF: () => void;
}

export function ResumeHero({ data, onNavigateToPortfolio, handleDownloadPDF }: ResumeHeroProps) {
  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="mb-12">
      {/* Profile section with 2-grid responsive layout - Text on left, Image on right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {/* Left: Text Block (the MOST important content) */}
        <div className="flex flex-col justify-start order-2 lg:order-1 pl-5">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-3 w-fit">
            <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Available for new opportunities</span>
          </div>
          
          {/* Name (H1) */}
          <h1 className="text-4xl lg:text-5xl mb-2 leading-tight text-slate-900 font-bold">
            {data.contact.name}
          </h1>
          
          {/* Role (H2) */}
          <h2 className="text-2xl lg:text-3xl mb-4 text-indigo-600 font-medium">{data.contact.title}</h2>
          
          {/* Short description */}
          <p className="text-lg text-slate-600 leading-7 mb-6 max-w-[600px]">
            {data.contact.tagline}
          </p>

          {/* Location + Tags row */}
          <div className="flex flex-wrap gap-3 mb-6 mt-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100 text-slate-700">
              <MapPin className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium">{data.contact.location}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 rounded-full border border-indigo-50 text-indigo-700">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered UX</span>
            </div>
          </div>

          {/* Stats row - Enhanced with interactive cards */}
          <div className="flex flex-wrap gap-4 mb-6 mt-2">
            <div 
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex-1 min-w-[120px] text-center hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-1"
              onClick={() => scrollToSection('experience')}
            >
              <div className="text-3xl font-bold text-indigo-600 mb-1">5+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">Years Exp.</div>
            </div>
            <div 
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex-1 min-w-[120px] text-center hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-1"
              onClick={() => scrollToSection('projects')}
            >
              <div className="text-3xl font-bold text-indigo-600 mb-1">{data.stats.projectsDelivered}</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">Projects</div>
            </div>
            <div 
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex-1 min-w-[120px] text-center hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-1"
              onClick={() => scrollToSection('clients')}
            >
              <div className="text-3xl font-bold text-indigo-600 mb-1">{data.stats.globalClients}</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">Global Clients</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-10 mt-2">
            <Button 
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8"
              asChild
            >
              <a href={`mailto:${data.contact.email}`}>
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleDownloadPDF}
              className="border-slate-300 hover:border-indigo-600 hover:text-indigo-600 px-6"
            >
              <Download className="w-5 h-5 mr-2" />
              Resume
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              onClick={onNavigateToPortfolio}
              className="text-indigo-600 hover:bg-indigo-50 px-6 group"
            >
              Portfolio
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Social links row - Interactive like header */}
          <div className="flex items-center gap-4 mt-2">
            <span className="text-sm font-medium text-slate-500 mr-2">Also find me on:</span>
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0077b5] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md" aria-label="LinkedIn profile">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${data.contact.email}`} className="w-10 h-10 rounded-full bg-slate-100 hover:bg-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md" aria-label={`Email ${data.contact.name}`}>
              <Mail className="w-5 h-5" />
            </a>
            <a href={`tel:${data.contact.phone}`} className="w-10 h-10 rounded-full bg-slate-100 hover:bg-indigo-500 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md" aria-label={`Call ${data.contact.name}`}>
              <Phone className="w-5 h-5" />
            </a>
            <a href={data.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md" aria-label="WhatsApp contact">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right: Profile Image (secondary, supporting) */}
        <div className="flex flex-col items-center lg:items-end justify-start order-1 lg:order-2 -mt-10">
          <div className="relative">
            {/* Subtle light blob or pattern design behind profile image */}
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            
            {/* Further reduced profile image with enhanced styling */}
            <div className="relative rounded-[30px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-4 border-white w-[220px] h-[220px] lg:w-[220px] lg:h-[220px] max-w-md mx-auto lg:mx-0 transition-transform duration-500 hover:scale-[1.02]">
              <ImageWithFallback
                src={data.contact.profileImage}
                alt={`${data.contact.name} - ${data.contact.title}`}
                className="w-full h-full object-cover"
                width="400"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
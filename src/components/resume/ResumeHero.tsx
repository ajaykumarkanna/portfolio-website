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
  return (
    <div className="mb-20">
      {/* Profile section with 2-grid responsive layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Left: Photo */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="relative">
            {/* Photo - Increased size to better align with right content */}
            <div className="relative rounded-full overflow-hidden shadow-2xl border-4 border-white w-96 h-96 lg:w-[380px] lg:h-[380px] max-w-md mx-auto lg:mx-0">
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

        {/* Right: Name, Title, Tagline, Tags, Impact, CTAs, and Social Links */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6 w-fit">
            <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Available for new opportunities</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl mb-3 leading-tight text-slate-900 font-bold">
            {data.contact.name}
          </h2>
          
          <p className="text-2xl lg:text-3xl mb-6 text-indigo-600 font-medium">{data.contact.title}</p>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
            {data.contact.tagline}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-200 text-slate-700">
              <MapPin className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium">{data.contact.location}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full border border-indigo-100 text-indigo-700">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered UX</span>
            </div>
          </div>

          {/* Stats - Cleaned up */}
          <div className="flex items-center gap-8 mb-10">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-slate-900">{data.stats.projectsDelivered}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Projects</div>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-slate-900">{data.stats.globalClients}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Global Clients</div>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-slate-900">5+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Years Exp.</div>
            </div>
          </div>

          {/* Action Buttons (Moved here) */}
          <div className="flex flex-wrap gap-4 mb-8">
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

          {/* Quick Contact Icons (Cleaned up) */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-500 mr-2">Also find me on:</span>
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 hover:bg-[#0077b5] hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-200 hover:border-transparent" aria-label="LinkedIn profile">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={data.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-200 hover:border-transparent" aria-label="WhatsApp contact">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href={`tel:${data.contact.phone}`} className="w-10 h-10 rounded-full bg-slate-50 hover:bg-indigo-500 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-200 hover:border-transparent" aria-label={`Call ${data.contact.name}`}>
              <Phone className="w-5 h-5" />
            </a>
            <button 
              onClick={onNavigateToPortfolio}
              className="w-10 h-10 rounded-full bg-slate-50 hover:bg-purple-500 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-200 hover:border-transparent" 
              aria-label="Portfolio website"
            >
              <Globe className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Mail, Phone, Globe, Linkedin, MessageCircle, MapPin, Briefcase, Sparkles, Download, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import profileImage from '../../assets/Logo_ADCircular.png';
import type { PortfolioData } from '../../data/portfolio-data';

interface ResumeHeroProps {
  data: PortfolioData;
  onNavigateToPortfolio: () => void;
  handleDownloadPDF: () => void;
}

export function ResumeHero({ data, onNavigateToPortfolio, handleDownloadPDF }: ResumeHeroProps) {
  return (
    <div className="mb-20">
      {/* Profile section with image on left and title/role on right */}
      <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
        {/* Left: Photo */}
        <div className="flex-shrink-0 w-full lg:w-auto">
          <div className="relative">
            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-64 h-80">
              <ImageWithFallback
                src={profileImage}
                alt={`${data.contact.name} - ${data.contact.title}`}
                className="w-full h-full object-cover"
                width="256"
                height="320"
              />
            </div>
          </div>
        </div>

        {/* Right: Name, Title, and Tagline */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
            <span className="text-sm">Available for new opportunities</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl mb-2 leading-tight text-slate-900">
            {data.contact.name}
          </h2>
          
          <p className="text-2xl lg:text-3xl mb-4 text-indigo-600">{data.contact.title}</p>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            {data.contact.tagline}
          </p>
        </div>
      </div>

      {/* Meta Information Badges */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700">
          <Briefcase className="w-4 h-4 text-indigo-600" />
          <span className="text-sm">5+ Years Experience</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700">
          <MapPin className="w-4 h-4 text-indigo-600" />
          <span className="text-sm">{data.contact.location}</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg text-indigo-700">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">AI-Powered UX Design</span>
        </div>
      </div>

      {/* Stats/Metrics */}
      <div className="flex items-center gap-6 mb-8 pb-6 border-b border-slate-200">
        <div className="text-center">
          <div className="text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{data.stats.projectsDelivered}</div>
          <div className="text-xs text-slate-600">Projects</div>
        </div>
        <div className="w-px h-8 bg-slate-200"></div>
        <div className="text-center">
          <div className="text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{data.stats.globalClients}</div>
          <div className="text-xs text-slate-600">Clients</div>
        </div>
        <div className="w-px h-8 bg-slate-200"></div>
        <div className="text-center">
          <div className="text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{data.stats.clientSatisfaction}</div>
          <div className="text-xs text-slate-600">Satisfaction</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-600/30 text-white"
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
          className="border-2 border-slate-300 hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          onClick={onNavigateToPortfolio}
          className="border-2 border-slate-300 hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 group"
        >
          View Portfolio
          <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </div>

      {/* Quick Contact Icons */}
      <div className="flex items-center gap-3 pt-6 border-t border-slate-200 mt-8">
        <span className="text-sm text-slate-500">Connect:</span>
        <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-indigo-100 flex items-center justify-center transition-colors group" aria-label="LinkedIn profile">
          <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-indigo-600" />
        </a>
        <a href={data.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors group" aria-label="WhatsApp contact">
          <MessageCircle className="w-5 h-5 text-slate-600 group-hover:text-emerald-600" />
        </a>
        <button 
          onClick={onNavigateToPortfolio}
          className="w-10 h-10 rounded-full bg-slate-100 hover:bg-purple-100 flex items-center justify-center transition-colors group" 
          aria-label="Portfolio website"
        >
          <Globe className="w-5 h-5 text-slate-600 group-hover:text-purple-600" />
        </button>
        <a href={`tel:${data.contact.phone}`} className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-100 flex items-center justify-center transition-colors group" aria-label={`Call ${data.contact.name}`}>
          <Phone className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
        </a>
      </div>
    </div>
  );
}
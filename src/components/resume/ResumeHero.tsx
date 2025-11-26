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
    <div className="max-w-[1280px] mx-auto px-4">
      {/* Profile section with 2-column desktop layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* Left column (primary): width 56%, padding-left 72px, padding-top 40px */}
        <div className="pt-10 pl-0 lg:pl-[72px] lg:pt-10 order-2 lg:order-1">
          {/* Availability badge - Small pill above H1, left-aligned */}
          <div className="inline-flex items-center gap-2 bg-[#CFF8E2] text-[#0F5136] px-4 py-2 rounded-full mb-2 w-fit">
            <span className="w-2 h-2 bg-[#0F9D58] rounded-full"></span>
            <span className="text-xs font-semibold">Available for new opportunities</span>
          </div>
          
          {/* Name (H1) - 48px, weight 700, line-height 1.02, color #0F1724 */}
          <h1 className="text-4xl lg:text-5xl mb-2 leading-[1.02] text-[#0F1724] font-bold">
            {data.contact.name}
          </h1>
          
          {/* Role (H2) - 22px, weight 600, color #5A2CFF */}
          <h2 className="text-xl lg:text-[22px] mb-2 text-[#5A2CFF] font-semibold">{data.contact.title}</h2>
          
          {/* Short description - 18px, weight 400, line-height 1.5, color #4B5563, max-width 600px, 2 lines max */}
          <p className="text-lg text-[#4B5563] leading-6 mb-6 max-w-[600px] line-clamp-2">
            {data.contact.tagline}
          </p>

          {/* Location + Tag pills row - Top margin 24px above, bottom margin 24px below */}
          <div className="flex flex-wrap gap-3 mb-6 mt-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-transparent rounded-full border border-[rgba(90,44,255,0.08)] text-[#4B5563]">
              <MapPin className="w-4 h-4 text-[#5A2CFF]" />
              <span className="text-sm">{data.contact.location}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-transparent rounded-full border border-[rgba(90,44,255,0.08)] text-[#4B5563]">
              <Sparkles className="w-4 h-4 text-[#5A2CFF]" />
              <span className="text-sm">AI-Powered UX</span>
            </div>
          </div>

          {/* Stats block - Slight lift: transform translateY(-6px) on desktop */}
          <div className="bg-[#F7F5FF] border border-[#EFEAFF] rounded-xl p-4 mb-7 mt-7 transform lg:-translate-y-1.5">
            <div className="flex flex-wrap items-center gap-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0F1724]">{data.stats.projectsDelivered}</div>
                <div className="text-xs text-[#4B5563]">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0F1724]">{data.stats.globalClients}</div>
                <div className="text-xs text-[#4B5563]">Global Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0F1724]">5+</div>
                <div className="text-xs text-[#4B5563]">Years Exp.</div>
              </div>
            </div>
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {/* Primary: "Get in Touch" - filled primary purple */}
            <Button 
              size="lg" 
              className="bg-[#5A2CFF] hover:bg-[#5A2CFF] text-white px-5 py-3.5 text-base font-medium rounded-xl hover:scale-105 transition-transform duration-200 ease-in-out hover:shadow-[0_6px_20px_rgba(90,44,255,0.12)] focus:ring-2 focus:ring-[#5A2CFF] focus:ring-offset-2 focus:ring-offset-transparent"
              asChild
            >
              <a href={`mailto:${data.contact.email}`} aria-label="Send email to Kanna Ajay Kumar">
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </Button>
            
            {/* Secondary: "Resume" - white bg, border 1px solid #E6E6F5 */}
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleDownloadPDF}
              className="bg-white border border-[#E6E6F5] hover:border-[#5A2CFF] hover:bg-white text-[#4B5563] px-4 py-3 text-base font-medium rounded-xl focus:ring-2 focus:ring-[#5A2CFF] focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Download resume"
            >
              <Download className="w-5 h-5 mr-2" />
              Resume
            </Button>
            
            {/* Tertiary: "Portfolio →" as simple text link in purple */}
            <Button 
              size="lg" 
              variant="ghost"
              onClick={onNavigateToPortfolio}
              className="text-[#5A2CFF] hover:text-[#5A2CFF] hover:bg-transparent px-0 text-base font-medium focus:underline focus:ring-2 focus:ring-[#5A2CFF] focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="View portfolio"
            >
              Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Social icons row - Move social row immediately below CTAs with margin-top 24px */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <span className="text-xs text-[#6B7280]">Also find me on:</span>
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-transparent hover:bg-[#0077b5] hover:text-white flex items-center justify-center transition-all duration-200 border border-[#ECECEC] hover:border-transparent" aria-label="LinkedIn profile">
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a href={data.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-transparent hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all duration-200 border border-[#ECECEC] hover:border-transparent" aria-label="WhatsApp contact">
              <MessageCircle className="w-4.5 h-4.5" />
            </a>
            <a href={`tel:${data.contact.phone}`} className="w-10 h-10 rounded-full bg-transparent hover:bg-[#5A2CFF] hover:text-white flex items-center justify-center transition-all duration-200 border border-[#ECECEC] hover:border-transparent" aria-label={`Call ${data.contact.name}`}>
              <Phone className="w-4.5 h-4.5" />
            </a>
            <button 
              onClick={onNavigateToPortfolio}
              className="w-10 h-10 rounded-full bg-transparent hover:bg-[#5A2CFF] hover:text-white flex items-center justify-center transition-all duration-200 border border-[#ECECEC] hover:border-transparent" 
              aria-label="Portfolio website"
            >
              <Globe className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Right column (secondary): width 44%, image aligned top-right, padding-top 24px */}
        <div className="flex flex-col items-end justify-start pt-6 order-1 lg:order-2">
          <div className="relative">
            {/* Profile image - large portrait, rounded rectangle (border-radius: 12px), soft shadow */}
            <div className="relative rounded-xl overflow-hidden shadow-[0_12px_34px_rgba(15,23,36,0.06)] w-full h-auto max-w-[480px] transition-transform duration-300 ease-in-out hover:scale-[1.02] motion-reduce:hover:scale-100">
              <ImageWithFallback
                src={data.contact.profileImage}
                alt="Portrait of Kanna Ajay Kumar smiling, standing by window"
                className="w-full h-auto object-cover"
                width="400"
                height="500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
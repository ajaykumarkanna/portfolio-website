import React from 'react';
import { Mail, Globe, MessageCircle } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import type { PortfolioData } from '../../data/portfolio-data';

interface CallToActionProps {
  data: PortfolioData;
  onNavigateToPortfolio: () => void;
}

export function CallToAction({ data, onNavigateToPortfolio }: CallToActionProps) {
  return (
    <div className="text-center">
      <Card className="p-10 bg-gradient-to-br from-slate-900 to-slate-800 border-0 text-white">
        <h3 className="text-3xl mb-4">Let's Create Something Amazing</h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Open to full-time roles, consulting projects, and collaborative opportunities. Let's discuss how user-centered design can drive your business goals.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
            <a href={`mailto:${data.contact.email}`}>
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20" onClick={onNavigateToPortfolio}>
            <Globe className="w-5 h-5 mr-2" />
            View Portfolio
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20" asChild>
            <a href={data.contact.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
}
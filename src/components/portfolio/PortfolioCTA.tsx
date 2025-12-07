import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

interface PortfolioCTAProps {
  onNavigateToResume: () => void;
}

export function PortfolioCTA({ onNavigateToResume }: PortfolioCTAProps) {
  return (
    <div>
      <Card className="p-12 bg-gradient-to-br from-slate-900 to-slate-800 border-0 text-white text-center">
        <h3 className="text-3xl mb-4">Interested in Collaborating?</h3>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
          Let's discuss how I can help bring your product vision to life with user-centered design.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/30" asChild aria-label="Contact via email">
            <a href="mailto:ajaykumar.jai1111@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </a>
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20" onClick={onNavigateToResume} aria-label="Back to home">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </div>
      </Card>
    </div>
  );
}
import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Breadcrumb } from '../ui/breadcrumb';

interface PortfolioHeaderProps {
  onNavigateToResume: () => void;
}

export function PortfolioHeader({ onNavigateToResume }: PortfolioHeaderProps) {
  return (
    <>
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
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Portfolio', href: '/portfolio', current: true }
            ]} 
            className="mb-2"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                onClick={onNavigateToResume}
                aria-label="Back to resume"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <h1 className="text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </h1>
            </div>
            <div className="flex items-center gap-3">
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
    </>
  );
}
import React from 'react';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import Resume from './Resume';
import { useNavigate, useLocation } from 'react-router-dom';
// import { MainNavigation } from './MainNavigation';  // Removed as per request

export default function PreviewPage() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div className="fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          onClick={() => navigate('/admin')}
          className="bg-white/80 backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Admin
        </Button>
      </div>
      
      {/* Header with navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Preview
            </h1>
            {/* <MainNavigation currentPath={location.pathname} /> */}  {/* Removed as per request */}
          </div>
        </div>
      </header>
      
      <div className="pt-20">
        <Resume onNavigateToPortfolio={() => navigate('/portfolio')} />
      </div>
    </div>
  );
}
import React from 'react';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import Resume from './Resume';
import { useNavigate } from 'react-router-dom';

export default function PreviewPage() {
  const navigate = useNavigate();

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
      <Resume onNavigateToPortfolio={() => navigate('/portfolio')} />
    </div>
  );
}
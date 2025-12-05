import React from 'react';
import * as LucideIcons from 'lucide-react'; // Import all Lucide icons
import { Card } from '../ui/card';
import type { PortfolioData } from '../../data/portfolio-data';

interface HobbiesSectionProps {
  data: PortfolioData;
}

export function HobbiesSection({ data }: HobbiesSectionProps) {
  // Helper function to dynamically get the Lucide icon component
  const getLucideIcon = (iconName: string): React.ElementType => {
    // Attempt to retrieve the icon component from the imported LucideIcons module
    // Provide a default icon (e.g., Sparkles) if the specified iconName is not found
    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons];
    return IconComponent || LucideIcons.Sparkles; // Fallback to Sparkles
  };

  return (
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 mb-6">
        <LucideIcons.Sparkles className="w-5 h-5 text-indigo-600" /> {/* Changed to LucideIcons.Sparkles */}
        <h3 className="text-xl text-slate-800">Beyond Design</h3>
      </div>
      
      {/* Hobbies List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.hobbies.map((hobby, index) => {
          const Icon = getLucideIcon(hobby.icon.trim()); // Trim icon name for robustness
          return (
            <Card key={index} className="p-4 bg-white border-slate-200 hover:border-indigo-200 transition-colors">
              <Icon className="w-6 h-6 text-indigo-600 mb-2" />
              <h4 className="text-sm text-slate-800 mb-1">{hobby.title}</h4>
              <p className="text-xs text-slate-600">{hobby.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

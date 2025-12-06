import React from 'react';
import * as LucideIcons from 'lucide-react'; // Import all Lucide icons
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import type { PortfolioData } from '../../data/portfolio-data';

interface SkillsSectionProps {
  data: PortfolioData;
}

export function SkillsSection({ data }: SkillsSectionProps) {
  // Helper function to dynamically get the Lucide icon component
  const getLucideIcon = (iconName: string): React.ElementType => {
    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons];
    return IconComponent || LucideIcons.Code; // Fallback to Code icon
  };

  // Get class names for each category
  const getCategoryClasses = (category: string) => {
    switch (category) {
      case "UX Skills":
        return {
          cardBg: "bg-gradient-to-br from-indigo-50/50 to-white border-indigo-100",
          iconBg: "bg-indigo-100 text-indigo-600",
        };
      case "UI & Prototyping":
        return {
          cardBg: "bg-gradient-to-br from-purple-50/50 to-white border-purple-100",
          iconBg: "bg-purple-100 text-purple-600",
        };
      case "Tools":
        return {
          cardBg: "bg-gradient-to-br from-blue-50/50 to-white border-blue-100",
          iconBg: "bg-blue-100 text-blue-600",
        };
      default:
        return {
          cardBg: "bg-gradient-to-br from-indigo-50/50 to-white border-indigo-100",
          iconBg: "bg-indigo-100 text-indigo-600",
        };
    }
  };

  return (
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 mb-6">
        <LucideIcons.Wrench className="w-5 h-5 text-indigo-600" /> {/* Changed to LucideIcons.Wrench */}
        <h3 className="text-xl text-slate-800">Skills & Tools</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        { (data.skills && Array.isArray(data.skills) && data.skills.length > 0) ? (
          (data.skills || []).map((skillCategory, index) => {
            if (!skillCategory) { // Check before accessing properties
              console.warn(`SkillsSection: skillCategory at index ${index} is null or undefined. Skipping.`);
              return null;
            }
            const categoryName = (skillCategory.category || '').trim();
            const Icon = getLucideIcon((skillCategory.icon || '').trim());
            const classes = getCategoryClasses(categoryName);
            
            return (
              <Card
                key={index}
                className={`p-5 ${classes.cardBg}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`p-1.5 rounded-md ${classes.iconBg}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-medium text-slate-700">{categoryName || 'Unknown Category'}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(skillCategory.items || []).map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs bg-white border border-slate-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })
        ) : (
          <p className="text-slate-500 col-span-full">No skills data available. Please add skills in the admin panel.</p>
        )}
      </div>
    </div>
  );
}
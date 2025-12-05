import React from 'react';
import { Code, User, Monitor, Wrench } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import type { PortfolioData } from '../../data/portfolio-data';

interface SkillsSectionProps {
  data: PortfolioData;
}

export function SkillsSection({ data }: SkillsSectionProps) {
  // Get class names for each category
  const getCategoryClasses = (category: string) => {
    switch (category) {
      case "UX Skills":
        return {
          cardBg: "bg-gradient-to-br from-indigo-50/50 to-white border-indigo-100",
          iconBg: "bg-indigo-100 text-indigo-600",
          icon: <User className="w-4 h-4" />
        };
      case "UI & Prototyping":
        return {
          cardBg: "bg-gradient-to-br from-purple-50/50 to-white border-purple-100",
          iconBg: "bg-purple-100 text-purple-600",
          icon: <Monitor className="w-4 h-4" />
        };
      case "Tools":
        return {
          cardBg: "bg-gradient-to-br from-blue-50/50 to-white border-blue-100",
          iconBg: "bg-blue-100 text-blue-600",
          icon: <Wrench className="w-4 h-4" />
        };
      default:
        return {
          cardBg: "bg-gradient-to-br from-indigo-50/50 to-white border-indigo-100",
          iconBg: "bg-indigo-100 text-indigo-600",
          icon: <Code className="w-4 h-4" />
        };
    }
  };

  return (
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 mb-6">
        <Wrench className="w-5 h-5 text-indigo-600" />
        <h3 className="text-xl text-slate-800">Skills & Tools</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {data.skills.map((skillCategory, index) => {
          const classes = getCategoryClasses(skillCategory.category);
          
          return (
            <Card 
              key={index} 
              className={`p-5 ${classes.cardBg}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`p-1.5 rounded-md ${classes.iconBg}`}>
                  {classes.icon}
                </div>
                <h4 className="text-sm font-medium text-slate-700">{skillCategory.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-xs bg-white border border-slate-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
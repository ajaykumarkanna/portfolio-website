import React from 'react';
import { Code } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import type { PortfolioData } from '../../data/portfolio-data';

interface SkillsSectionProps {
  data: PortfolioData;
}

export function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 mb-6">
        <Code className="w-5 h-5 text-indigo-600" />
        <h3 className="text-xl text-slate-800">Skills & Tools</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {data.skills.map((skillCategory, index) => (
          <Card key={index} className={`p-5 border-${index % 2 === 0 ? 'indigo' : 'purple'}-100 bg-gradient-to-br from-${index % 2 === 0 ? 'indigo' : 'purple'}-50/50 to-white`}>
            <h4 className="text-sm text-slate-700 mb-3">{skillCategory.category}</h4>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="secondary" className="text-xs bg-white">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
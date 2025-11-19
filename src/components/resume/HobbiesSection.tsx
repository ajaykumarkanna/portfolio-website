import React from 'react';
import { Sparkles, Camera, Gamepad2, Coffee } from 'lucide-react';
import { Card } from '../ui/card';
import type { PortfolioData } from '../../data/portfolio-data';

interface HobbiesSectionProps {
  data: PortfolioData;
}

export function HobbiesSection({ data }: HobbiesSectionProps) {
  return (
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-indigo-600" />
        <h3 className="text-xl text-slate-800">Beyond Design</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.hobbies.map((hobby, index) => {
          const iconMap: { [key: string]: any } = {
            Camera, Sparkles, Gamepad2, Coffee
          };
          const Icon = iconMap[hobby.icon] || Sparkles;
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
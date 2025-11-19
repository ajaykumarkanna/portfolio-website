import React from 'react';
import { Users, Palette, TrendingUp, Code } from 'lucide-react';
import { Card } from '../ui/card';
import type { PortfolioData } from '../../data/portfolio-data';

interface AboutSectionProps {
  data: PortfolioData;
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <div className="mb-20">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-3">
          <Users className="w-4 h-4 text-indigo-600" />
          <span className="text-sm text-indigo-700">About Me</span>
        </div>
        <h3 className="text-3xl text-slate-900">Transforming Complex Problems<br/>into Elegant Solutions</h3>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-8 bg-white border-slate-200 hover:border-indigo-200 transition-all hover:shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center mb-4">
            <Palette className="w-6 h-6 text-indigo-600" />
          </div>
          <h4 className="text-lg text-slate-800 mb-3">Background</h4>
          <p className="text-slate-600 leading-relaxed">{data.about.background}</p>
        </Card>
        
        <Card className="p-8 bg-white border-slate-200 hover:border-purple-200 transition-all hover:shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600" />
          </div>
          <h4 className="text-lg text-slate-800 mb-3">Specialization</h4>
          <p className="text-slate-600 leading-relaxed">{data.about.specialization}</p>
        </Card>
        
        <Card className="p-8 bg-white border-slate-200 hover:border-indigo-200 transition-all hover:shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center mb-4">
            <Code className="w-6 h-6 text-indigo-600" />
          </div>
          <h4 className="text-lg text-slate-800 mb-3">Approach</h4>
          <p className="text-slate-600 leading-relaxed">{data.about.approach}</p>
        </Card>
      </div>
    </div>
  );
}
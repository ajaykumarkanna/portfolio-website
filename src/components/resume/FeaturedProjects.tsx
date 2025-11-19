import React from 'react';
import { Briefcase, ExternalLink, TrendingUp, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import type { PortfolioData } from '../../data/portfolio-data';

interface FeaturedProjectsProps {
  data: PortfolioData;
  onNavigateToPortfolio: () => void;
}

export function FeaturedProjects({ data, onNavigateToPortfolio }: FeaturedProjectsProps) {
  // Split projects into featured and additional
  const featuredProjects = data.projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="mb-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-3">
            <Briefcase className="w-4 h-4 text-indigo-600" />
            <span className="text-sm text-indigo-700">Portfolio</span>
          </div>
          <h3 className="text-3xl text-slate-900">Featured Projects</h3>
        </div>
        <Button variant="ghost" onClick={onNavigateToPortfolio} className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50">
          View All
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
      
      {/* Featured Projects */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {featuredProjects.map((project) => (
          <Card key={project.id} className="group p-6 hover:shadow-2xl transition-all duration-300 border-slate-200 bg-white hover:border-indigo-200">
            <div className="flex items-start justify-between mb-4">
              <Badge className="bg-indigo-600 text-white">{project.category}</Badge>
              <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            
            <h4 className="text-lg text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h4>
            <p className="text-sm text-slate-500 mb-3">{project.problemStatement}</p>
            
            <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">{project.summary}</p>
            
            <div className="flex items-center gap-2 mb-4 p-2 bg-emerald-50 rounded-lg border border-emerald-100">
              <TrendingUp className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span className="text-xs text-emerald-700">{project.impact}</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
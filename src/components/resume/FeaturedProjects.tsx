import React from 'react';
import { Briefcase, ExternalLink, TrendingUp, ArrowRight, ChevronRight } from 'lucide-react';
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
          <Card 
            key={project.id} 
            onClick={onNavigateToPortfolio}
            className="group p-6 flex flex-col h-full hover:shadow-xl transition-all duration-300 border-slate-100 bg-white/50 hover:bg-white cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            
            <div className="flex items-start justify-between mb-4">
              <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-none">{project.category}</Badge>
              <div className="p-2 rounded-full bg-slate-50 group-hover:bg-indigo-50 transition-colors">
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
              </div>
            </div>
            
            <h4 className="text-xl font-medium text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h4>
            <p className="text-sm text-slate-500 mb-4 font-medium">{project.problemStatement}</p>
            
            <p className="text-sm text-slate-600 mb-6 leading-relaxed line-clamp-3 flex-grow">{project.summary}</p>
            
            <div className="mt-auto space-y-4">
              <div className="flex items-center gap-2 text-sm text-emerald-700">
                <TrendingUp className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium">{project.impact}</span>
              </div>
              
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                 <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-indigo-600 flex items-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                  View Case Study <ChevronRight className="w-3 h-3 ml-1" />
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
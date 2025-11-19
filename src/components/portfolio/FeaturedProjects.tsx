import React from 'react';
import { User, Calendar, TrendingUp, ExternalLink } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { Project } from '../../data/portfolio-data';

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  // Function to convert asset path to actual import or URL
  const getImageSrc = (imagePath: string) => {
    // If it's an asset path, we need to map it to the actual file
    if (imagePath.startsWith('/src/assets/')) {
      // Extract the filename
      const fileName = imagePath.split('/').pop();
      // In a real implementation, you would map this to the actual import
      // For now, we'll just return the path as is and let ImageWithFallback handle it
      return imagePath;
    }
    return imagePath;
  };

  return (
    <div className="mb-20">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl text-slate-900 mb-2">Featured Projects</h2>
          <p className="text-slate-600">Deep dives into impactful design projects</p>
        </div>
        <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 px-4 py-2">Top 3</Badge>
      </div>
      
      <div className="space-y-12">
        {projects.map((project) => (
          <Card key={project.id} className="group overflow-hidden border-slate-200 hover:shadow-2xl transition-all duration-500 bg-white hover:border-indigo-200" aria-label={`Featured project: ${project.title}`}>
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Image */}
              <div className="lg:col-span-2 relative overflow-hidden h-80 lg:h-auto">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  lazy={true}
                  width="600"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="lg:col-span-3 p-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600">{project.company}</p>
                  </div>
                  <ExternalLink className="w-6 h-6 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-indigo-600 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                      <User className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Role</div>
                      <div className="text-sm">{project.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Duration</div>
                      <div className="text-sm">{project.duration}</div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  {project.summary}
                </p>

                <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-xl border border-emerald-200">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-emerald-600 mb-1">Impact</div>
                      <div className="text-emerald-700">{project.impact}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-slate-500 mb-3">Key Deliverables</p>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((deliverable, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-slate-300">
                        {deliverable}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
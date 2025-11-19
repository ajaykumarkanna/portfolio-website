import React, { useState } from 'react';
import { User, Calendar, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { Project } from '../../data/portfolio-data';

interface AdditionalProjectsProps {
  projects: Project[];
}

export function AdditionalProjects({ projects }: AdditionalProjectsProps) {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl text-slate-900 mb-2">More Projects</h2>
          <p className="text-slate-600">Additional work showcasing diverse skills</p>
        </div>
        <Button
          variant="outline"
          onClick={() => setShowAllProjects(!showAllProjects)}
          className="flex items-center gap-2 border-slate-300"
          aria-expanded={showAllProjects}
          aria-label={showAllProjects ? "Show fewer projects" : `Show ${projects.length} more projects`}
        >
          {showAllProjects ? (
            <>
              Show Less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show {projects.length} More <ChevronDown className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>

      {showAllProjects ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 bg-white hover:border-indigo-200" aria-label={`Project: ${project.title}`}>
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  lazy={true}
                  width="400"
                  height="300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4">{project.company}</p>

                <div className="grid grid-cols-2 gap-3 mb-4 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3 text-indigo-600" />
                    <span className="truncate">{project.role}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-indigo-600" />
                    <span className="truncate">{project.duration}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>

                <div className="mb-4 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                    <span className="text-xs text-emerald-700 line-clamp-1">{project.impact}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-700">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <Card key={project.id} className="group overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 bg-white hover:border-indigo-200" aria-label={`Project: ${project.title}`}>
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  lazy={true}
                  width="400"
                  height="300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-base text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors truncate">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 mb-3 truncate">{project.company}</p>

                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs px-2 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 2 && (
                    <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5">
                      +{project.tags.length - 2}
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
          <Card className="flex items-center justify-center border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-white hover:border-indigo-300 transition-colors cursor-pointer" onClick={() => setShowAllProjects(true)}>
            <div className="text-center p-6">
              <div className="text-2xl mb-2">+{projects.length - 3}</div>
              <p className="text-slate-600 text-sm">More Projects</p>
              <Button variant="outline" size="sm" className="mt-3 border-slate-300">
                View All
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
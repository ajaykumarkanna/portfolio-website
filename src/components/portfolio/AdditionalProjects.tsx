import React, { useState } from 'react';
import { X, User, Calendar, TrendingUp, ExternalLink } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import type { Project } from '../../data/portfolio-data';

interface AdditionalProjectsProps {
  projects: Project[];
}

export function AdditionalProjects({ projects }: AdditionalProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl text-slate-900 mb-2">More Projects</h2>
          <p className="text-slate-600">Additional work showcasing diverse skills</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card 
            key={project.id} 
            className="group overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 bg-white hover:border-indigo-200 cursor-pointer"
            onClick={() => handleProjectClick(project)}
            aria-label={`Project: ${project.title}`}
          >
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
            
            {/* Content - Simplified to only show title */}
            <div className="p-6">
              <h3 className="text-lg text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>
            </div>
          </Card>
        ))}
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          <DialogHeader className="flex flex-row items-center justify-between p-6 pb-0">
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={closeDialog} aria-label="Close dialog">
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          
          {selectedProject && (
            <div className="p-6">
              {/* Image on top for mobile-like layout */}
              <div className="relative overflow-hidden h-80 rounded-lg mb-6">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  width="600"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Content below image */}
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl text-slate-900 mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-slate-600">{selectedProject.company}</p>
                  </div>
                  {/* External link icon */}
                  {selectedProject.externalLink && (
                    <a 
                      href={selectedProject.externalLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-indigo-100 hover:bg-indigo-600 flex items-center justify-center transition-colors group"
                      aria-label={`View case study for ${selectedProject.title}`}
                    >
                      <ExternalLink className="w-5 h-5 text-indigo-600 group-hover:text-white" />
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                      <User className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Role</div>
                      <div className="text-sm">{selectedProject.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Duration</div>
                      <div className="text-sm">{selectedProject.duration}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-slate-500 mb-2">Summary</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedProject.summary}
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-xl border border-emerald-200">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-emerald-700 font-medium">Impact</div>
                      <div className="text-emerald-700">{selectedProject.impact}</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-slate-500 mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-slate-500 mb-3">Deliverables</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.deliverables.map((deliverable, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-indigo-100 text-indigo-700">
                        {deliverable}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
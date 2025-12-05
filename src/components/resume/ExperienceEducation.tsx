import React from 'react';
import { Award, GraduationCap, Calendar, Trophy, Activity } from 'lucide-react';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import type { PortfolioData } from '../../data/portfolio-data';

interface ExperienceEducationProps {
  data: PortfolioData;
}

export function ExperienceEducation({ data }: ExperienceEducationProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-16">
      {/* Experience */}
      <div>
        <div className="inline-flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-indigo-600" />
          <h3 className="text-xl text-slate-800">Experience</h3>
        </div>
        <div className="relative">
          {/* Timeline line - kept on the left */}
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-slate-300 transform -translate-x-1/2"></div>
          <div className="space-y-6 pl-8">
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot - centered vertically to card */}
                <div className={`absolute left-0 top-1/2 w-4 h-4 rounded-full border-4 transform -translate-x-1/2 -translate-y-1/2 ${
                  exp.current ? 'bg-indigo-600 border-indigo-200' : 'bg-white border-slate-300'
                }`}></div>
                
                {/* Experience card - always open and expanded */}
                <Card className="p-6 bg-gradient-to-br from-slate-50 to-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-1">{exp.title}</h4>
                      <p className="text-sm text-slate-600">{exp.company}</p>
                    </div>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap ${
                      exp.current 
                        ? 'text-indigo-600 bg-indigo-50' 
                        : 'text-slate-600 bg-slate-100'
                    }`}>
                      {exp.duration}
                    </span>
                  </div>
                  
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <ul className="text-sm text-slate-600 space-y-1">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education & Certifications */}
      <div>
        <div className="inline-flex items-center gap-2 mb-4">
          <GraduationCap className="w-5 h-5 text-indigo-600" />
          <h3 className="text-xl text-slate-800">Education & Certifications</h3>
        </div>
        <div className="space-y-6">
          <Card className="p-6 bg-gradient-to-br from-slate-50 to-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-1">{data.education.degree}</h4>
                <p className="text-sm text-slate-600">{data.education.institution}, {data.education.location}</p>
              </div>
              <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full whitespace-nowrap">
                {data.education.duration}
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500 pt-3 border-t border-slate-100">
              <span>CGPA: <span className="font-medium text-slate-700">{data.education.cgpa}</span></span>
              <span className="text-xs bg-slate-100 px-2 py-1 rounded">Focus: {data.education.focus}</span>
            </div>
          </Card>

          {/* Certifications with unified layout and aligned timestamps */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 mb-2">
              <Trophy className="w-4 h-4 text-indigo-600" />
              <h4 className="text-base font-medium text-slate-800">Certifications</h4>
            </div>
            <div className="space-y-3">
              {data.certifications.map((cert, index) => (
                <Card key={index} className="p-4 bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-800">{cert.title}</p>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      <p className="text-xs text-slate-500">{cert.date}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Activities with unified layout and aligned timestamps */}
          {data.activities.length > 0 && (
            <div className="pt-4">
              <Separator />
              <div className="mt-4">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Activity className="w-4 h-4 text-indigo-600" />
                  <h4 className="text-base font-medium text-slate-800">Recent Activities</h4>
                </div>
                <div className="space-y-3">
                  {data.activities.map((activity, index) => (
                    <Card key={index} className="p-4 bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-700">{activity.title}</p>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          <span className="text-xs text-slate-500">{activity.date}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
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
        <div className="space-y-6">
          {data.experience.map((exp) => (
            <div key={exp.id} className={`border-l-2 ${exp.current ? 'border-indigo-600' : 'border-slate-300'} pl-4`}>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-slate-800">{exp.title}</h4>
                  <p className="text-sm text-slate-600">{exp.company}</p>
                </div>
                <span className="text-xs text-slate-500">{exp.duration}</span>
              </div>
              <ul className="text-sm text-slate-600 space-y-1">
                {exp.highlights.map((highlight, index) => (
                  <li key={index}>• {highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications */}
      <div>
        <div className="inline-flex items-center gap-2 mb-4">
          <GraduationCap className="w-5 h-5 text-indigo-600" />
          <h3 className="text-xl text-slate-800">Education & Certifications</h3>
        </div>
        <div className="space-y-6">
          <Card className="p-5 bg-gradient-to-br from-slate-50 to-white border-slate-200">
            <h4 className="text-slate-800 mb-1">{data.education.degree}</h4>
            <p className="text-sm text-slate-600 mb-2">{data.education.institution}, {data.education.location}</p>
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>{data.education.duration}</span>
              <span>CGPA: {data.education.cgpa}</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">Focus: {data.education.focus}</p>
          </Card>

          <div className="space-y-3">
            {data.certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-600 mt-1.5"></div>
                <div>
                  <p className="text-sm text-slate-800">{cert.title}</p>
                  <p className="text-xs text-slate-500">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>

          {data.activities.length > 0 && (
            <>
              <Separator />
              <div>
                <p className="text-sm text-slate-700 mb-3">Recent Activities</p>
                <div className="space-y-2">
                  {data.activities.map((activity, index) => (
                    <p key={index} className="text-sm text-slate-600">• {activity.title} ({activity.date})</p>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
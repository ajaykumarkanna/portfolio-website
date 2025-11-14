import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, TrendingUp, ChevronDown, ChevronUp, ExternalLink, Mail, Download } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PortfolioProps {
  onNavigateToResume: () => void;
}

export default function Portfolio({ onNavigateToResume }: PortfolioProps) {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const allProjects = [
    // Top 3 Featured Projects
    {
      id: 1,
      featured: true,
      title: 'Verizon AI-Powered In-Store Ordering',
      company: 'Brillio',
      duration: 'Jun 2025 – Present',
      role: 'Lead UI/UX Consultant',
      summary: 'Complete redesign of Verizon\'s in-store iPad ordering application, integrating AI-driven features to streamline the purchase journey for both customers and sales representatives.',
      impact: 'Improved ordering speed, reduced friction points, and increased user satisfaction scores',
      deliverables: ['User Research & Personas', 'AI-Driven Prototypes', 'Design System Integration', 'Usability Testing'],
      tags: ['AI/UX', 'Enterprise', 'Tablet Design', 'Retail'],
      image: 'https://images.unsplash.com/photo-1658077830601-8903acdbd3b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXJpem9uJTIwc3RvcmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzEwMzU3OXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      featured: true,
      title: 'CBA Pega Constellation Migration',
      company: 'Tata Consultancy Services',
      duration: 'Nov 2020 – Jun 2025',
      role: 'UI/UX Designer',
      summary: 'Led the migration of Commonwealth Bank Australia\'s legacy applications to modern Pega Constellation framework, redesigning complex banking workflows with improved usability patterns.',
      impact: '30% improvement in usability metrics, reduced training time for bank staff',
      deliverables: ['UX Audit', 'Information Architecture', 'Component Library', 'Interaction Patterns', 'User Testing'],
      tags: ['Enterprise', 'Banking', 'Migration', 'Design System'],
      image: 'https://images.unsplash.com/photo-1726065235203-4368c41c6f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzEwMzU4MHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      featured: true,
      title: 'Avery Dennison Recycling Platform',
      company: 'Tata Consultancy Services',
      duration: 'Nov 2020 – Jun 2025',
      role: 'Lead UI/UX Designer',
      summary: 'End-to-end design of a sustainability-focused web platform that connects businesses with recycling services, promoting circular economy practices.',
      impact: '20% increase in user engagement, positive feedback on intuitive navigation',
      deliverables: ['User Journey Mapping', 'Wireframes & Prototypes', 'Visual Design', 'Responsive Web Design'],
      tags: ['Web Design', 'Sustainability', 'E2E', 'B2B'],
      image: 'https://images.unsplash.com/photo-1642402806417-e451280d845b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBzdXN0YWluYWJpbGl0eXxlbnwxfHx8fDE3NjMwODkwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    // Additional Projects
    {
      id: 4,
      featured: false,
      title: 'Flexellence Health & Habit Tracking',
      company: 'Product Design',
      duration: 'Jan 2025 – Sep 2025',
      role: 'Product Designer',
      summary: 'Mobile app redesign focused on health tracking and habit monitoring with emphasis on user motivation and engagement.',
      impact: 'Enhanced user engagement through gamification and personalized insights',
      deliverables: ['User Research', 'Wireframing', 'UI Design', 'Usability Testing', 'Design Handoff'],
      tags: ['Mobile', 'Health Tech', 'User Research', 'B2C'],
      image: 'https://images.unsplash.com/photo-1748280621226-91f9530fc329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBmaXRuZXNzJTIwYXBwfGVufDF8fHx8MTc2MzAyMjA1OHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 5,
      featured: false,
      title: 'AI Governance Tool POC',
      company: 'Tata Consultancy Services',
      duration: 'Nov 2020 – Jun 2025',
      role: 'UX Designer',
      summary: 'Designed proof-of-concept for an AI governance and compliance tool in Pega platform, ensuring EU AI Act compliance with intuitive error handling.',
      impact: '15% reduction in compliance errors through improved UI/UX',
      deliverables: ['Competitive Analysis', 'Workflow Design', 'Dashboard Design', 'Error Prevention Patterns'],
      tags: ['AI Governance', 'Enterprise', 'Compliance', 'POC'],
      image: 'https://images.unsplash.com/photo-1717501220725-83f151c447e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGdvdmVybmFuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzEwMzU4MHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 6,
      featured: false,
      title: 'VR Store Experience POC',
      company: 'Tata Consultancy Services',
      duration: 'Nov 2020 – Jun 2025',
      role: 'UX Researcher & Designer',
      summary: 'Explored immersive shopping experiences using Virtual Reality, creating prototypes for retail metaverse concepts.',
      impact: 'Identified key UX challenges and opportunities in VR commerce',
      deliverables: ['VR Prototyping', 'User Testing', 'Interaction Design', 'Research Report'],
      tags: ['VR', 'Metaverse', 'Retail', 'Emerging Tech'],
      image: 'https://images.unsplash.com/photo-1656717040132-d08704e789c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMG1ldGF2ZXJzZXxlbnwxfHx8fDE3NjMxMDM1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 7,
      featured: false,
      title: 'Enterprise Design System',
      company: 'Tata Consultancy Services',
      duration: 'Nov 2020 – Jun 2025',
      role: 'Design System Contributor',
      summary: 'Contributed to building and maintaining design system components for enterprise applications, ensuring consistency and accessibility.',
      impact: 'Improved design-development handoff and consistency across products',
      deliverables: ['Component Design', 'Documentation', 'Accessibility Guidelines', 'Design Tokens'],
      tags: ['Design System', 'Accessibility', 'Enterprise', 'Documentation'],
      image: 'https://images.unsplash.com/photo-1756576357697-13dfc5fff61c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMDQxMDM5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const featuredProjects = allProjects.filter(p => p.featured);
  const additionalProjects = allProjects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                onClick={onNavigateToResume}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <h1 className="text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-700"
                asChild
              >
                <a href="mailto:ajaykumar.jai1111@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6">
              <span className="text-sm">Case Studies & Projects</span>
            </div>
            <h1 className="text-4xl lg:text-5xl mb-6 text-slate-900">
              Design Work That <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Drives Results</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              A collection of user-centered design work spanning enterprise applications, AI integration, sustainability, and emerging technologies — all focused on measurable impact.
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl text-slate-900 mb-2">Featured Case Studies</h2>
              <p className="text-slate-600">Deep dives into impactful design projects</p>
            </div>
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 px-4 py-2">Top 3</Badge>
          </div>
          
          <div className="space-y-12">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-slate-200 hover:shadow-2xl transition-all duration-500 bg-white hover:border-indigo-200">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="lg:col-span-2 relative overflow-hidden h-80 lg:h-auto">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

        {/* Additional Projects (Collapsible) */}
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
            >
              {showAllProjects ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show {additionalProjects.length} More <ChevronDown className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>

          {showAllProjects ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {additionalProjects.map((project) => (
                <Card key={project.id} className="group overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 bg-white hover:border-indigo-200">
                  {/* Image */}
                  <div className="relative overflow-hidden h-56">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
            <Card className="p-12 text-center border-dashed border-2 border-slate-300 bg-gradient-to-br from-slate-50 to-white hover:border-indigo-300 transition-colors">
              <p className="text-slate-700 mb-2 text-lg">
                {additionalProjects.length} More Projects
              </p>
              <p className="text-slate-600 mb-6">
                Including AI governance, VR experiences, and design systems
              </p>
              <Button
                onClick={() => setShowAllProjects(true)}
                variant="outline"
                className="mx-auto border-slate-300"
              >
                View All Projects
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          )}
        </div>

        {/* CTA */}
        <div>
          <Card className="p-12 bg-gradient-to-br from-slate-900 to-slate-800 border-0 text-white text-center">
            <h3 className="text-3xl mb-4">Interested in Collaborating?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              Let's discuss how I can help bring your product vision to life with user-centered design.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/30" onClick={onNavigateToResume}>
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Resume
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20" asChild>
                <a href="mailto:ajaykumar.jai1111@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
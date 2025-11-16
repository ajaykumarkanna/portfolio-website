import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, Linkedin, MessageCircle, MapPin, Award, Briefcase, GraduationCap, Code, Palette, Users, TrendingUp, ExternalLink, Download, ArrowRight, Coffee, Gamepad2, Camera, Sparkles, Quote } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { usePortfolioData } from '../hooks/usePortfolioData';

interface ResumeProps {
  onNavigateToPortfolio: () => void;
}

export default function Resume({ onNavigateToPortfolio }: ResumeProps) {
  const data = usePortfolioData();
  const clientsScrollRef = useRef<HTMLDivElement>(null);
  const testimonialsScrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll for clients
  useEffect(() => {
    const scrollContainer = clientsScrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll for testimonials
  useEffect(() => {
    const scrollContainer = testimonialsScrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 0.5;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 40);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadPDF = () => {
    if (data.contact.resumePDF) {
      window.open(data.contact.resumePDF, '_blank');
    } else {
      alert('Please add your resume PDF in the admin panel (Ctrl+Shift+A)');
    }
  };

  // Split projects into featured and additional
  const featuredProjects = data.projects.filter(p => p.featured).slice(0, 3);
  const additionalProjects = data.projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Fixed Header with Contact Info */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h1 className="text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {data.contact.name}
              </h1>
              <div className="hidden lg:flex items-center gap-4 text-sm text-slate-600">
                <a href={`tel:${data.contact.phone}`} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>{data.contact.phone}</span>
                </a>
                <span className="text-slate-300">|</span>
                <a href={`mailto:${data.contact.email}`} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
                <span className="text-slate-300">|</span>
                <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline"
                size="sm"
                onClick={handleDownloadPDF}
                className="hidden md:flex"
              >
                <Download className="w-4 h-4 mr-2" />
                PDF
              </Button>
              <Button 
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-700"
                onClick={onNavigateToPortfolio}
              >
                Portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Hero Section - Name as Heading */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
                <span className="text-sm">Available for new opportunities</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl mb-3 text-slate-900">
                {data.contact.name}
              </h2>
              
              <div className="mb-6">
                <p className="text-2xl text-indigo-600 mb-2">{data.contact.title}</p>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Designing Intuitive Interfaces that Boost Conversion.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm">{data.contact.location}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700">
                  <Briefcase className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm">5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg text-indigo-700">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">{data.stats.usabilityImprovement} Usability Improvements</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 text-white"
                  asChild
                >
                  <a href={`mailto:${data.contact.email}`}>
                    <Mail className="w-5 h-5 mr-2" />
                    Get in Touch
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleDownloadPDF}
                  className="border-slate-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={onNavigateToPortfolio}
                  className="border-slate-300"
                >
                  View Portfolio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Quick Contact Icons */}
              <div className="flex items-center gap-3 mt-8 pt-8 border-t border-slate-200">
                <span className="text-sm text-slate-500">Connect:</span>
                <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-indigo-100 flex items-center justify-center transition-colors group">
                  <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-indigo-600" />
                </a>
                <a href={data.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors group">
                  <MessageCircle className="w-5 h-5 text-slate-600 group-hover:text-emerald-600" />
                </a>
                <a href={data.contact.portfolio} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-purple-100 flex items-center justify-center transition-colors group">
                  <Globe className="w-5 h-5 text-slate-600 group-hover:text-purple-600" />
                </a>
                <a href={`tel:${data.contact.phone}`} className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-100 flex items-center justify-center transition-colors group">
                  <Phone className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
                </a>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="relative">
                {/* Photo */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={data.contact.profileImage}
                    alt={`${data.contact.name} - ${data.contact.title}`}
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-indigo-600 text-white rounded-full shadow-xl p-3 px-4">
                  <div className="text-center">
                    <div className="text-xl font-bold">5+</div>
                    <div className="text-xs">Years Exp.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center border-slate-200 bg-white hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{data.stats.projectsDelivered}</div>
              <div className="text-sm text-slate-600">Projects Delivered</div>
            </Card>
            <Card className="p-6 text-center border-slate-200 bg-white hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{data.stats.globalClients}</div>
              <div className="text-sm text-slate-600">Global Clients</div>
            </Card>
            <Card className="p-6 text-center border-slate-200 bg-white hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{data.stats.usabilityImprovement}</div>
              <div className="text-sm text-slate-600">Avg. Usability ↑</div>
            </Card>
            <Card className="p-6 text-center border-slate-200 bg-white hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{data.stats.clientSatisfaction}</div>
              <div className="text-sm text-slate-600">Client Satisfaction</div>
            </Card>
          </div>
        </div>

        {/* About Me Section */}
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

        {/* Selected Work - Featured & Additional */}
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

          {/* Additional Projects */}
          {additionalProjects.length > 0 && (
            <div>
              <h4 className="text-lg text-slate-700 mb-4">Additional Projects</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {additionalProjects.map((project) => (
                  <Card key={project.id} className="group p-5 hover:shadow-lg transition-all duration-300 border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h5 className="text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{project.title}</h5>
                        <p className="text-xs text-slate-500">{project.company}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-all" />
                    </div>
                    
                    <p className="text-sm text-slate-600 mb-3 leading-relaxed line-clamp-2">{project.summary}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs bg-white text-slate-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Experience & Education */}
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

        {/* Skills */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Code className="w-5 h-5 text-indigo-600" />
            <h3 className="text-xl text-slate-800">Skills & Tools</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.skills.map((skillCategory, index) => (
              <Card key={index} className={`p-5 border-${index % 2 === 0 ? 'indigo' : 'purple'}-100 bg-gradient-to-br from-${index % 2 === 0 ? 'indigo' : 'purple'}-50/50 to-white`}>
                <h4 className="text-sm text-slate-700 mb-3">{skillCategory.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs bg-white">{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Hobbies & Interests */}
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

        {/* Clients - Auto Scrolling Carousel */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Briefcase className="w-5 h-5 text-indigo-600" />
            <h3 className="text-xl text-slate-800">Trusted by Leading Organizations</h3>
          </div>
          <Card className="p-8 bg-gradient-to-r from-slate-50 to-indigo-50/30 border-slate-200 overflow-hidden">
            <div 
              ref={clientsScrollRef}
              className="flex gap-12 overflow-x-hidden"
              style={{ scrollBehavior: 'auto' }}
            >
              {/* Duplicate clients for seamless loop */}
              {[...data.clients, ...data.clients].map((client, index) => (
                <div key={index} className="flex-shrink-0 flex flex-col items-center justify-center gap-3 min-w-[200px]">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-24 flex items-center justify-center w-full">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <p className="text-sm text-slate-600 text-center">{client.name}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Testimonials - Carousel */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Quote className="w-5 h-5 text-indigo-600" />
            <h3 className="text-xl text-slate-800">What People Say</h3>
          </div>
          <div className="overflow-hidden">
            <div 
              ref={testimonialsScrollRef}
              className="flex gap-6 overflow-x-hidden pb-4"
              style={{ scrollBehavior: 'auto' }}
            >
              {/* Duplicate testimonials for seamless loop */}
              {[...data.testimonials, ...data.testimonials].map((testimonial, index) => (
                <Card key={index} className="flex-shrink-0 w-[400px] p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    {testimonial.image && (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h5 className="text-slate-900 truncate">{testimonial.author}</h5>
                      <p className="text-sm text-slate-600 truncate">{testimonial.role}</p>
                      <p className="text-xs text-slate-500 truncate">{testimonial.company}</p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-indigo-200 mb-2" />
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">{testimonial.quote}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-10 bg-gradient-to-br from-slate-900 to-slate-800 border-0 text-white">
            <h3 className="text-3xl mb-4">Let's Create Something Amazing</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Open to full-time roles, consulting projects, and collaborative opportunities. Let's discuss how user-centered design can drive your business goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
                <a href={`mailto:${data.contact.email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20" onClick={onNavigateToPortfolio}>
                <Globe className="w-5 h-5 mr-2" />
                View Portfolio
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20" asChild>
                <a href={data.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-slate-500">
          <p>Designed & coded with attention to detail — showcasing what I do best ✨</p>
        </div>
      </div>
    </div>
  );
}
import { useState, useEffect } from 'react';
import { PortfolioData, Project, Experience, Skill, Client, Testimonial } from '../types/portfolio';
import { Save, Plus, Trash2, Upload, Download, Eye, Settings, User, Briefcase, GraduationCap, Code, Users, MessageSquare, Building2, ArrowLeft, Edit2, Check, X, Image as ImageIcon } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Label } from './ui/label';


interface AdminPanelProps {
  onClose: () => void;
  onPreview: () => void;
}

export default function AdminPanel({ onClose, onPreview }: AdminPanelProps) {
  const [data, setData] = useState<PortfolioData>({} as PortfolioData);
  const [activeTab, setActiveTab] = useState('contact');
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/portfolio');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:3000/portfolio', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
      console.log('Portfolio data saved to server:', data);
    } catch (e) {
      console.error('Error saving data:', e);
      alert('Failed to save data. Please try again.');
    }
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'portfolio-data.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImportJSON = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const imported = JSON.parse(e.target?.result as string);
          // Assuming imported data is a full PortfolioData object
          const response = await fetch('http://localhost:3000/portfolio', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(imported),
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          setData(imported);
          alert('Data imported and saved successfully!');
        } catch (error) {
          alert('Error importing or saving data. Please check the JSON format and server connection.');
          console.error('Import error:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now(),
      featured: false,
      title: "New Project",
      company: "Company Name",
      duration: "Jan 2025 – Present",
      role: "Designer",
      summary: "Project description here",
      impact: "Impact statement",
      deliverables: ["Deliverable 1"],
      tags: ["Tag1"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800"
    };
    setData({ ...data, projects: [...data.projects, newProject] });
  };

  const deleteProject = (id: number) => {
    setData({ ...data, projects: data.projects.filter(p => p.id !== id) });
  };

  const updateProject = (id: number, updates: Partial<Project>) => {
    setData({
      ...data,
      projects: data.projects.map(p => p.id === id ? { ...p, ...updates } : p)
    });
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now(),
      title: "Job Title",
      company: "Company Name",
      duration: "Jan 2025 – Present",
      current: true,
      highlights: ["Achievement 1", "Achievement 2"]
    };
    setData({ ...data, experience: [...data.experience, newExp] });
  };

  const deleteExperience = (id: number) => {
    setData({ ...data, experience: data.experience.filter(e => e.id !== id) });
  };

  const addSkill = () => {
    const newSkill: Skill = {
      category: "New Category",
      items: ["Skill 1", "Skill 2"]
    };
    setData({ ...data, skills: [...data.skills, newSkill] });
  };

  const deleteSkill = (index: number) => {
    setData({ ...data, skills: data.skills.filter((_, i) => i !== index) });
  };

  const updateSkill = (index: number, updates: Partial<Skill>) => {
    setData({
      ...data,
      skills: data.skills.map((skill, i) => i === index ? { ...skill, ...updates } : skill)
    });
  };

  const addClient = () => {
    const newClient: Client = {
      name: "Client Name",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop"
    };
    setData({ ...data, clients: [...data.clients, newClient] });
  };

  const deleteClient = (index: number) => {
    setData({ ...data, clients: data.clients.filter((_, i) => i !== index) });
  };

  const updateClient = (index: number, updates: Partial<Client>) => {
    setData({
      ...data,
      clients: data.clients.map((client, i) => i === index ? { ...client, ...updates } : client)
    });
  };

  const addTestimonial = () => {
    const newTestimonial: Testimonial = {
      quote: "Add testimonial quote here...",
      author: "Author Name",
      role: "Job Title",
      company: "Company Name",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    };
    setData({ ...data, testimonials: [...data.testimonials, newTestimonial] });
  };

  const deleteTestimonial = (index: number) => {
    setData({ ...data, testimonials: data.testimonials.filter((_, i) => i !== index) });
  };

  const updateTestimonial = (index: number, updates: Partial<Testimonial>) => {
    setData({
      ...data,
      testimonials: data.testimonials.map((testimonial, i) => i === index ? { ...testimonial, ...updates } : testimonial)
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        callback(result);
      };
      reader.readAsDataURL(file);
    }
  };


  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-slate-700">Loading portfolio data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-500">Error: {error}. Could not load portfolio data. Is json-server running?</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onClose}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Exit Admin
              </Button>
              <div>
                <h1 className="text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Portfolio Admin Panel
                </h1>
                <p className="text-xs text-slate-500">Manage your portfolio content</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="file"
                accept=".json"
                onChange={handleImportJSON}
                className="hidden"
                id="import-json"
              />
              <Button 
                variant="outline"
                size="sm"
                onClick={() => document.getElementById('import-json')?.click()}
              >
                <Upload className="w-4 h-4 mr-2" />
                Import
              </Button>
              <Button 
                variant="outline"
                size="sm"
                onClick={handleExportJSON}
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button 
                variant="outline"
                size="sm"
                onClick={onPreview}
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button 
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-700"
                onClick={handleSave}
              >
                {saved ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Saved!
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">About</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Projects</span>
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span className="hidden sm:inline">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span className="hidden sm:inline">Skills</span>
            </TabsTrigger>
            <TabsTrigger value="clients" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Clients</span>
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Testimonials</span>
            </TabsTrigger>
          </TabsList>

          {/* Contact Info Tab */}
          <TabsContent value="contact">
            <Card className="p-8">
              <h2 className="text-2xl mb-6 text-slate-900">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={data.contact.name}
                    onChange={(e) => setData({ ...data, contact: { ...data.contact, name: e.target.value }})}
                  />
                </div>
                <div>
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    value={data.contact.title}
                    onChange={(e) => setData({ ...data.contact, title: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="tagline">Tagline</Label>
                  <Textarea
                    id="tagline"
                    value={data.contact.tagline}
                    onChange={(e) => setData({ ...data, contact: { ...data.contact, tagline: e.target.value }})}
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={data.contact.phone}
                    onChange={(e) => setData({ ...data, contact: { ...data.contact, phone: e.target.value }})}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={data.contact.email}
                    onChange={(e) => setData({ ...data, contact: { ...data.contact, email: e.target.value }})}
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={data.contact.location}
                    onChange={(e) => setData({ ...data, contact: { ...data.contact, location: e.target.value }})}
                  />
                </div>
                <div>
                  <Label htmlFor="portfolio">Portfolio URL</Label>
                  <Input
                    id="portfolio"
                    value={data.contact.portfolio}
                    onChange={(e) => setData({ ...data, contact: { ...data.contact, portfolio: e.target.value }})}
                  />
                </div>
                <div>
                  <Label htmlFor="linkedin">LinkedIn URL</Label>
                  <Input
                    id="linkedin"
                    value={data.contact.linkedin}
                    onChange={(e) => setData({ ...data, contact: { ...data.contact, linkedin: e.target.value }})}
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp">WhatsApp URL</Label>
                  <Input
                    id="whatsapp"
                    value={data.contact.whatsapp}
                    onChange={(e) => setData({ ...data, contact: { ...data.contact, whatsapp: e.target.value }})}
                  />
                </div>
                <div>
                  <Label htmlFor="profileImage">Profile Image</Label>
                  <div className="space-y-2">
                    <Input
                      id="profileImage"
                      value={data.contact.profileImage}
                      onChange={(e) => setData({ ...data, contact: { ...data.contact, profileImage: e.target.value }})}
                      placeholder="https://..."
                    />
                    <div className="flex gap-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, (url) => setData({ ...data, contact: { ...data.contact, profileImage: url }}))}
                        className="hidden"
                        id="profile-image-upload"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => document.getElementById('profile-image-upload')?.click()}
                        className="flex-1"
                      >
                        <ImageIcon className="w-4 h-4 mr-2" />
                        Upload from Computer
                      </Button>
                    </div>
                    {data.contact.profileImage && (
                      <div className="mt-2 p-4 border border-slate-200 rounded-lg bg-slate-50 flex items-center gap-4">
                        <img src={data.contact.profileImage} alt="Profile Preview" className="w-20 h-20 rounded-full object-cover" />
                        <div className="text-sm text-slate-600">Profile photo preview</div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor="resumePDF">Resume PDF</Label>
                  <div className="space-y-2">
                    <Input
                      id="resumePDF"
                      value={data.contact.resumePDF}
                      onChange={(e) => setData({ ...data, contact: { ...data.contact, resumePDF: e.target.value }})}
                      placeholder="https://... or upload PDF"
                    />
                    <div className="flex gap-2">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => handleFileUpload(e, (url) => setData({ ...data, contact: { ...data.contact, resumePDF: url }}))}
                        className="hidden"
                        id="resume-pdf-upload"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => document.getElementById('resume-pdf-upload')?.click()}
                        className="flex-1"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload PDF from Computer
                      </Button>
                    </div>
                    {data.contact.resumePDF && (
                      <div className="mt-2 p-3 border border-slate-200 rounded-lg bg-emerald-50 text-sm text-emerald-700">
                        ✓ Resume PDF ready for download
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* About Tab */}
          <TabsContent value="about">
            <Card className="p-8">
              <h2 className="text-2xl mb-6 text-slate-900">About & Stats</h2>
              
              <div className="mb-8">
                <h3 className="text-lg mb-4 text-slate-800">Statistics</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="projectsDelivered">Projects Delivered</Label>
                    <Input
                      id="projectsDelivered"
                      value={data.stats.projectsDelivered}
                      onChange={(e) => setData({ ...data, stats: { ...data.stats, projectsDelivered: e.target.value }})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="globalClients">Global Clients</Label>
                    <Input
                      id="globalClients"
                      value={data.stats.globalClients}
                      onChange={(e) => setData({ ...data, stats: { ...data.stats, globalClients: e.target.value }})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="usabilityImprovement">Usability Improvement</Label>
                    <Input
                      id="usabilityImprovement"
                      value={data.stats.usabilityImprovement}
                      onChange={(e) => setData({ ...data, stats: { ...data.stats, usabilityImprovement: e.target.value }})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="clientSatisfaction">Client Satisfaction</Label>
                    <Input
                      id="clientSatisfaction"
                      value={data.stats.clientSatisfaction}
                      onChange={(e) => setData({ ...data, stats: { ...data.stats, clientSatisfaction: e.target.value }})}
                    />
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="space-y-6">
                <div>
                  <Label htmlFor="background">Background</Label>
                  <Textarea
                    id="background"
                    value={data.about.background}
                    onChange={(e) => setData({ ...data, about: { ...data.about, background: e.target.value }})}
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="specialization">Specialization</Label>
                  <Textarea
                    id="specialization"
                    value={data.about.specialization}
                    onChange={(e) => setData({ ...data, about: { ...data.about, specialization: e.target.value }})}
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="approach">Approach</Label>
                  <Textarea
                    id="approach"
                    value={data.about.approach}
                    onChange={(e) => setData({ ...data, about: { ...data.about, approach: e.target.value }})}
                    rows={3}
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl text-slate-900">Projects</h2>
                <Button onClick={addProject} className="bg-indigo-600 hover:bg-indigo-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </Button>
              </div>

              {data.projects.map((project, index) => (
                <Card key={project.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-500">#{index + 1}</span>
                      <Badge variant={project.featured ? "default" : "secondary"}>
                        {project.featured ? "Unfeature" : "Feature"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateProject(project.id, { featured: !project.featured })}
                      >
                        {project.featured ? "Unfeature" : "Feature"}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteProject(project.id)}
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Project Title</Label>
                      <Input
                        value={project.title}
                        onChange={(e) => updateProject(project.id, { title: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label>Company</Label>
                      <Input
                        value={project.company}
                        onChange={(e) => updateProject(project.id, { company: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label>Duration</Label>
                      <Input
                        value={project.duration}
                        onChange={(e) => updateProject(project.id, { duration: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label>Role</Label>
                      <Input
                        value={project.role}
                        onChange={(e) => updateProject(project.id, { role: e.target.value })}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Summary</Label>
                      <Textarea
                        value={project.summary}
                        onChange={(e) => updateProject(project.id, { summary: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Impact</Label>
                      <Input
                        value={project.impact}
                        onChange={(e) => updateProject(project.id, { impact: e.target.value })}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Image URL</Label>
                      <Input
                        value={project.image}
                        onChange={(e) => updateProject(project.id, { image: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label>Tags (comma-separated)</Label>
                      <Input
                        value={project.tags.join(', ')}
                        onChange={(e) => updateProject(project.id, { tags: e.target.value.split(',').map(t => t.trim()) })}
                      />
                    </div>
                    <div>
                      <Label>Deliverables (comma-separated)</Label>
                      <Input
                        value={project.deliverables.join(', ')}
                        onChange={(e) => updateProject(project.id, { deliverables: e.target.value.split(',').map(d => d.trim()) })}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl text-slate-900">Experience</h2>
                <Button onClick={addExperience} className="bg-indigo-600 hover:bg-indigo-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Experience
                </Button>
              </div>

              {data.experience.map((exp, index) => (
                <Card key={exp.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm text-slate-500">#{index + 1}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteExperience(exp.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Job Title</Label>
                      <Input
                        value={exp.title}
                        onChange={(e) => setData({
                          ...data,
                          experience: data.experience.map(e => e.id === exp.id ? { ...e, title: e.target.value } : e)
                        })}
                      />
                    </div>
                    <div>
                      <Label>Company</Label>
                      <Input
                        value={exp.company}
                        onChange={(e) => setData({
                          ...data,
                          experience: data.experience.map(e => e.id === exp.id ? { ...e, company: e.target.value } : e)
                        })}
                      />
                    </div>
                    <div>
                      <Label>Duration</Label>
                      <Input
                        value={exp.duration}
                        onChange={(e) => setData({
                          ...data,
                          experience: data.experience.map(e => e.id === exp.id ? { ...e, duration: e.target.value } : e)
                        })}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Highlights (one per line)</Label>
                      <Textarea
                        value={exp.highlights.join('\n')}
                        onChange={(e) => setData({
                          ...data,
                          experience: data.experience.map(ex => ex.id === exp.id ? { ...ex, highlights: e.target.value.split('\n').filter(h => h.trim()) } : ex)
                        })}
                        rows={4}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <Card className="p-8">
              <h2 className="text-2xl mb-6 text-slate-900">Education & Certifications</h2>
              
              <div className="space-y-6 mb-8">
                <h3 className="text-lg text-slate-800">Education</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Degree</Label>
                    <Input
                      value={data.education.degree}
                      onChange={(e) => setData({ ...data, education: { ...data.education, degree: e.target.value }})}
                    />
                  </div>
                  <div>
                    <Label>Institution</Label>
                    <Input
                      value={data.education.institution}
                      onChange={(e) => setData({ ...data, education: { ...data.education, institution: e.target.value }})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={data.education.location}
                      onChange={(e) => setData({ ...data, education: { ...data.education, location: e.target.value }})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="duration">Duration</Label>
                    <Input
                      id="duration"
                      value={data.education.duration}
                      onChange={(e) => setData({ ...data, education: { ...data.education, duration: e.target.value }})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cgpa">CGPA</Label>
                    <Input
                      id="cgpa"
                      value={data.education.cgpa}
                      onChange={(e) => setData({ ...data, education: { ...data.education, cgpa: e.target.value }})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="focus">Focus Areas</Label>
                    <Input
                      id="focus"
                      value={data.education.focus}
                      onChange={(e) => setData({ ...data, education: { ...data.education, focus: e.target.value }})}
                    />
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h3 className="text-lg text-slate-800 mb-4">Certifications</h3>
                <p className="text-sm text-slate-500 mb-4">Edit certifications in JSON format for now</p>
                <Textarea
                  value={JSON.stringify(data.certifications, null, 2)}
                  onChange={(e) => {
                    try {
                      setData({ ...data, certifications: JSON.parse(e.target.value) });
                    } catch {}
                  }}
                  rows={8}
                  className="font-mono text-sm"
                />
              </div>
            </Card>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl text-slate-900">Skills</h2>
                <Button onClick={addSkill} className="bg-indigo-600 hover:bg-indigo-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Skill Category
                </Button>
              </div>

              {data.skills.map((skill, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm text-slate-500">Category #{index + 1}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteSkill(index)}
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>Category Name</Label>
                      <Input
                        value={skill.category}
                        onChange={(e) => updateSkill(index, { category: e.target.value })}
                        placeholder="e.g., Design Tools"
                      />
                    </div>
                    <div>
                      <Label>Skills (comma-separated)</Label>
                      <Textarea
                        value={skill.items.join(', ')}
                        onChange={(e) => updateSkill(index, { items: e.target.value.split(',').map(s => s.trim()).filter(s => s) })}
                        placeholder="e.g., Figma, Adobe XD, Sketch"
                        rows={3}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Clients Tab */}
          <TabsContent value="clients">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl text-slate-900">Clients</h2>
                <Button onClick={addClient} className="bg-indigo-600 hover:bg-indigo-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Client
                </Button>
              </div>

              {data.clients.map((client, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm text-slate-500">Client #{index + 1}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteClient(index)}
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Client Name</Label>
                      <Input
                        value={client.name}
                        onChange={(e) => updateClient(index, { name: e.target.value })}
                        placeholder="e.g., Verizon"
                      />
                    </div>
                    <div>
                      <Label>Logo URL</Label>
                      <div className="flex gap-2">
                        <Input
                          value={client.logo}
                          onChange={(e) => updateClient(index, { logo: e.target.value })}
                          placeholder="https://..."
                        />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, (url) => updateClient(index, { logo: url }))}
                          className="hidden"
                          id={`client-logo-${index}`}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => document.getElementById(`client-logo-${index}`)?.click()}
                        >
                          <Upload className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    {client.logo && (
                      <div className="md:col-span-2">
                        <Label>Logo Preview</Label>
                        <div className="mt-2 p-4 border border-slate-200 rounded-lg bg-slate-50 flex items-center justify-center">
                          <img src={client.logo} alt={client.name} className="max-h-20 object-contain" />
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl text-slate-900">Testimonials</h2>
                <Button onClick={addTestimonial} className="bg-indigo-600 hover:bg-indigo-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Testimonial
                </Button>
              </div>

              {data.testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm text-slate-500">Testimonial #{index + 1}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteTestimonial(index)}
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label>Quote</Label>
                      <Textarea
                        value={testimonial.quote}
                        onChange={(e) => updateTestimonial(index, { quote: e.target.value })}
                        placeholder="What did they say about you?"
                        rows={4}
                      />
                    </div>
                    <div>
                      <Label>Author Name</Label>
                      <Input
                        value={testimonial.author}
                        onChange={(e) => updateTestimonial(index, { author: e.target.value })}
                        placeholder="e.g., Sarah Mitchell"
                      />
                    </div>
                    <div>
                      <Label>Role/Designation</Label>
                      <Input
                        value={testimonial.role}
                        onChange={(e) => updateTestimonial(index, { role: e.target.value })}
                        placeholder="e.g., Design Lead"
                      />
                    </div>
                    <div>
                      <Label>Company</Label>
                      <Input
                        value={testimonial.company}
                        onChange={(e) => updateTestimonial(index, { company: e.target.value })}
                        placeholder="e.g., TCS"
                      />
                    </div>
                    <div>
                      <Label>Profile Image URL (Optional)</Label>
                      <div className="flex gap-2">
                        <Input
                          value={testimonial.image || ''}
                          onChange={(e) => updateTestimonial(index, { image: e.target.value })}
                          placeholder="https://..."
                        />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, (url) => updateTestimonial(index, { image: url }))}
                          className="hidden"
                          id={`testimonial-image-${index}`}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => document.getElementById(`testimonial-image-${index}`)?.click()}
                        >
                          <Upload className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    {testimonial.image && (
                      <div className="md:col-span-2">
                        <Label>Profile Preview</Label>
                        <div className="mt-2 p-4 border border-slate-200 rounded-lg bg-slate-50 flex items-center gap-4">
                          <img src={testimonial.image} alt={testimonial.author} className="w-16 h-16 rounded-full object-cover" />
                          <div>
                            <p className="text-sm">{testimonial.author}</p>
                            <p className="text-xs text-slate-500">{testimonial.role} at {testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

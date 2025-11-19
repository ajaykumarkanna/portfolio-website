import { useState } from 'react';
import { Save, Plus, Trash2, Upload, Download, Eye, Settings, User, Briefcase, GraduationCap, Code, Users, MessageSquare, Building2, ArrowLeft, Edit2, Check, X, Image as ImageIcon } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { portfolioData, type PortfolioData, type Project, type Experience, type Skill, type Client, type Testimonial } from '../data/portfolio-data';
import { useFormHandlers } from '../hooks/useFormHandlers';
import { FormInput } from './forms/FormInput';
import { FormTextarea } from './forms/FormTextarea';
import { FileUpload } from './forms/FileUpload';

interface AdminPanelProps {
  onClose: () => void;
  onPreview: () => void;
}

export default function AdminPanel({ onClose, onPreview }: AdminPanelProps) {
  const {
    data,
    setData,
    errors,
    handleSave,
    handleExportJSON,
    handleImportJSON,
    addProject,
    deleteProject,
    updateProject,
    addExperience,
    deleteExperience,
    updateExperience,
    addSkill,
    deleteSkill,
    updateSkill,
    addClient,
    deleteClient,
    updateClient,
    addTestimonial,
    deleteTestimonial,
    updateTestimonial,
    handleFileUpload
  } = useFormHandlers(portfolioData);
  
  const [activeTab, setActiveTab] = useState('contact');
  const [saved, setSaved] = useState(false);

  const handleSaveWithFeedback = () => {
    handleSave();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Header */}
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
                onClick={handleSaveWithFeedback}
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
                <FormInput
                  id="name"
                  label="Full Name"
                  value={data.contact.name}
                  onChange={(value) => setData({ ...data, contact: { ...data.contact, name: value }})}
                  error={errors.contact?.name}
                />
                <FormInput
                  id="title"
                  label="Job Title"
                  value={data.contact.title}
                  onChange={(value) => setData({ ...data, contact: { ...data.contact, title: value }})}
                  error={errors.contact?.title}
                />
                <div className="md:col-span-2">
                  <FormTextarea
                    id="tagline"
                    label="Tagline"
                    value={data.contact.tagline}
                    onChange={(value) => setData({ ...data, contact: { ...data.contact, tagline: value }})}
                    rows={3}
                  />
                </div>
                <FormInput
                  id="phone"
                  label="Phone"
                  value={data.contact.phone}
                  onChange={(value) => setData({ ...data, contact: { ...data.contact, phone: value }})}
                />
                <FormInput
                  id="email"
                  label="Email"
                  type="email"
                  value={data.contact.email}
                  onChange={(value) => setData({ ...data, contact: { ...data.contact, email: value }})}
                  error={errors.contact?.email}
                />
                <FormInput
                  id="location"
                  label="Location"
                  value={data.contact.location}
                  onChange={(value) => setData({ ...data, contact: { ...data.contact, location: value }})}
                />
                <FormInput
                  id="portfolio"
                  label="Portfolio URL"
                  value={data.contact.portfolio}
                  onChange={(value) => setData({ ...data, contact: { ...data.contact, portfolio: value }})}
                  error={errors.contact?.portfolio}
                />
                <FormInput
                  id="linkedin"
                  label="LinkedIn URL"
                  value={data.contact.linkedin}
                  onChange={(value) => setData({ ...data, contact: { ...data.contact, linkedin: value }})}
                  error={errors.contact?.linkedin}
                />
                <FormInput
                  id="whatsapp"
                  label="WhatsApp URL"
                  value={data.contact.whatsapp}
                  onChange={(value) => setData({ ...data, contact: { ...data.contact, whatsapp: value }})}
                  error={errors.contact?.whatsapp}
                />
                <div className="md:col-span-2">
                  <FileUpload
                    id="profileImage"
                    label="Profile Image"
                    value={data.contact.profileImage}
                    onChange={(value) => setData({ ...data, contact: { ...data.contact, profileImage: value }})}
                    onFileUpload={handleFileUpload}
                    accept="image/*"
                    preview={true}
                  />
                </div>
                <div className="md:col-span-2">
                  <FileUpload
                    id="resumePDF"
                    label="Resume PDF"
                    value={data.contact.resumePDF}
                    onChange={(value) => setData({ ...data, contact: { ...data.contact, resumePDF: value }})}
                    onFileUpload={handleFileUpload}
                    accept=".pdf"
                  />
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
                  <FormInput
                    id="projectsDelivered"
                    label="Projects Delivered"
                    value={data.stats.projectsDelivered}
                    onChange={(value) => setData({ ...data, stats: { ...data.stats, projectsDelivered: value }})}
                  />
                  <FormInput
                    id="globalClients"
                    label="Global Clients"
                    value={data.stats.globalClients}
                    onChange={(value) => setData({ ...data, stats: { ...data.stats, globalClients: value }})}
                  />
                  <FormInput
                    id="usabilityImprovement"
                    label="Usability Improvement"
                    value={data.stats.usabilityImprovement}
                    onChange={(value) => setData({ ...data, stats: { ...data.stats, usabilityImprovement: value }})}
                  />
                  <FormInput
                    id="clientSatisfaction"
                    label="Client Satisfaction"
                    value={data.stats.clientSatisfaction}
                    onChange={(value) => setData({ ...data, stats: { ...data.stats, clientSatisfaction: value }})}
                  />
                </div>
              </div>

              <Separator className="my-8" />

              <div className="space-y-6">
                <FormTextarea
                  id="background"
                  label="Background"
                  value={data.about.background}
                  onChange={(value) => setData({ ...data, about: { ...data.about, background: value }})}
                  rows={3}
                />
                <FormTextarea
                  id="specialization"
                  label="Specialization"
                  value={data.about.specialization}
                  onChange={(value) => setData({ ...data, about: { ...data.about, specialization: value }})}
                  rows={3}
                />
                <FormTextarea
                  id="approach"
                  label="Approach"
                  value={data.about.approach}
                  onChange={(value) => setData({ ...data, about: { ...data.about, approach: value }})}
                  rows={3}
                />
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
                        {project.featured ? "Featured" : "Regular"}
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
                    <FormInput
                      id={`project-title-${project.id}`}
                      label="Project Title"
                      value={project.title}
                      onChange={(value) => updateProject(project.id, { title: value })}
                      error={errors[`project-${project.id}`]?.title}
                    />
                    <FormInput
                      id={`project-company-${project.id}`}
                      label="Company"
                      value={project.company}
                      onChange={(value) => updateProject(project.id, { company: value })}
                      error={errors[`project-${project.id}`]?.company}
                    />
                    <FormInput
                      id={`project-duration-${project.id}`}
                      label="Duration"
                      value={project.duration}
                      onChange={(value) => updateProject(project.id, { duration: value })}
                    />
                    <FormInput
                      id={`project-role-${project.id}`}
                      label="Role"
                      value={project.role}
                      onChange={(value) => updateProject(project.id, { role: value })}
                    />
                    <div className="md:col-span-2">
                      <FormTextarea
                        id={`project-summary-${project.id}`}
                        label="Summary"
                        value={project.summary}
                        onChange={(value) => updateProject(project.id, { summary: value })}
                        rows={3}
                        error={errors[`project-${project.id}`]?.summary}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <FormInput
                        id={`project-impact-${project.id}`}
                        label="Impact"
                        value={project.impact}
                        onChange={(value) => updateProject(project.id, { impact: value })}
                        error={errors[`project-${project.id}`]?.impact}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <FormInput
                        id={`project-image-${project.id}`}
                        label="Image URL"
                        value={project.image}
                        onChange={(value) => updateProject(project.id, { image: value })}
                        error={errors[`project-${project.id}`]?.image}
                      />
                    </div>
                    <FormInput
                      id={`project-tags-${project.id}`}
                      label="Tags (comma-separated)"
                      value={project.tags.join(', ')}
                      onChange={(value) => updateProject(project.id, { tags: value.split(',').map(t => t.trim()) })}
                    />
                    <FormInput
                      id={`project-deliverables-${project.id}`}
                      label="Deliverables (comma-separated)"
                      value={project.deliverables.join(', ')}
                      onChange={(value) => updateProject(project.id, { deliverables: value.split(',').map(d => d.trim()) })}
                    />
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
                    <FormInput
                      id={`exp-title-${exp.id}`}
                      label="Job Title"
                      value={exp.title}
                      onChange={(value) => updateExperience(exp.id, { title: value })}
                      error={errors[`experience-${exp.id}`]?.title}
                    />
                    <FormInput
                      id={`exp-company-${exp.id}`}
                      label="Company"
                      value={exp.company}
                      onChange={(value) => updateExperience(exp.id, { company: value })}
                      error={errors[`experience-${exp.id}`]?.company}
                    />
                    <FormInput
                      id={`exp-duration-${exp.id}`}
                      label="Duration"
                      value={exp.duration}
                      onChange={(value) => updateExperience(exp.id, { duration: value })}
                    />
                    <div className="md:col-span-2">
                      <FormTextarea
                        id={`exp-highlights-${exp.id}`}
                        label="Highlights (one per line)"
                        value={exp.highlights.join('\n')}
                        onChange={(value) => updateExperience(exp.id, { highlights: value.split('\n').filter(h => h.trim()) })}
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
                  <FormInput
                    id="degree"
                    label="Degree"
                    value={data.education.degree}
                    onChange={(value) => setData({ ...data, education: { ...data.education, degree: value }})}
                  />
                  <FormInput
                    id="institution"
                    label="Institution"
                    value={data.education.institution}
                    onChange={(value) => setData({ ...data, education: { ...data.education, institution: value }})}
                  />
                  <FormInput
                    id="location"
                    label="Location"
                    value={data.education.location}
                    onChange={(value) => setData({ ...data, education: { ...data.education, location: value }})}
                  />
                  <FormInput
                    id="edu-duration"
                    label="Duration"
                    value={data.education.duration}
                    onChange={(value) => setData({ ...data, education: { ...data.education, duration: value }})}
                  />
                  <FormInput
                    id="cgpa"
                    label="CGPA"
                    value={data.education.cgpa}
                    onChange={(value) => setData({ ...data, education: { ...data.education, cgpa: value }})}
                  />
                  <FormInput
                    id="focus"
                    label="Focus Areas"
                    value={data.education.focus}
                    onChange={(value) => setData({ ...data, education: { ...data.education, focus: value }})}
                  />
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h3 className="text-lg text-slate-800 mb-4">Certifications</h3>
                <p className="text-sm text-slate-500 mb-4">Edit certifications in JSON format for now</p>
                <FormTextarea
                  id="certifications"
                  label="Certifications (JSON)"
                  value={JSON.stringify(data.certifications, null, 2)}
                  onChange={(value) => {
                    try {
                      setData({ ...data, certifications: JSON.parse(value) });
                    } catch {}
                  }}
                  rows={8}
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
                    <FormInput
                      id={`skill-category-${index}`}
                      label="Category Name"
                      value={skill.category}
                      onChange={(value) => updateSkill(index, { category: value })}
                      placeholder="e.g., Design Tools"
                      error={errors[`skill-${index}`]?.category}
                    />
                    <FormTextarea
                      id={`skill-items-${index}`}
                      label="Skills (comma-separated)"
                      value={skill.items.join(', ')}
                      onChange={(value) => updateSkill(index, { items: value.split(',').map(s => s.trim()).filter(s => s) })}
                      placeholder="e.g., Figma, Adobe XD, Sketch"
                      rows={3}
                      error={errors[`skill-${index}`]?.items}
                    />
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
                    <FormInput
                      id={`client-name-${index}`}
                      label="Client Name"
                      value={client.name}
                      onChange={(value) => updateClient(index, { name: value })}
                      placeholder="e.g., Verizon"
                      error={errors[`client-${index}`]?.name}
                    />
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Logo URL
                      </label>
                      <div className="flex gap-2">
                        <input
                          id={`client-logo-${index}`}
                          value={client.logo}
                          onChange={(e) => updateClient(index, { logo: e.target.value })}
                          placeholder="https://..."
                          className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, (url) => updateClient(index, { logo: url }))}
                          className="hidden"
                          id={`client-logo-upload-${index}`}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => document.getElementById(`client-logo-upload-${index}`)?.click()}
                        >
                          <Upload className="w-4 h-4" />
                        </Button>
                      </div>
                      {errors[`client-${index}`]?.logo && (
                        <p className="text-sm text-red-500 mt-1">{errors[`client-${index}`].logo}</p>
                      )}
                    </div>
                    {client.logo && (
                      <div className="md:col-span-2">
                        <label className="text-sm font-medium text-slate-700 mb-2 block">
                          Logo Preview
                        </label>
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
                      <FormTextarea
                        id={`testimonial-quote-${index}`}
                        label="Quote"
                        value={testimonial.quote}
                        onChange={(value) => updateTestimonial(index, { quote: value })}
                        placeholder="What did they say about you?"
                        rows={4}
                        error={errors[`testimonial-${index}`]?.quote}
                      />
                    </div>
                    <FormInput
                      id={`testimonial-author-${index}`}
                      label="Author Name"
                      value={testimonial.author}
                      onChange={(value) => updateTestimonial(index, { author: value })}
                      placeholder="e.g., Sarah Mitchell"
                      error={errors[`testimonial-${index}`]?.author}
                    />
                    <FormInput
                      id={`testimonial-role-${index}`}
                      label="Role/Designation"
                      value={testimonial.role}
                      onChange={(value) => updateTestimonial(index, { role: value })}
                      placeholder="e.g., Design Lead"
                      error={errors[`testimonial-${index}`]?.role}
                    />
                    <FormInput
                      id={`testimonial-company-${index}`}
                      label="Company"
                      value={testimonial.company}
                      onChange={(value) => updateTestimonial(index, { company: value })}
                      placeholder="e.g., TCS"
                      error={errors[`testimonial-${index}`]?.company}
                    />
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Profile Image URL (Optional)
                      </label>
                      <div className="flex gap-2">
                        <input
                          id={`testimonial-image-${index}`}
                          value={testimonial.image || ''}
                          onChange={(e) => updateTestimonial(index, { image: e.target.value })}
                          placeholder="https://..."
                          className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, (url) => updateTestimonial(index, { image: url }))}
                          className="hidden"
                          id={`testimonial-image-upload-${index}`}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => document.getElementById(`testimonial-image-upload-${index}`)?.click()}
                        >
                          <Upload className="w-4 h-4" />
                        </Button>
                      </div>
                      {errors[`testimonial-${index}`]?.image && (
                        <p className="text-sm text-red-500 mt-1">{errors[`testimonial-${index}`].image}</p>
                      )}
                    </div>
                    {testimonial.image && (
                      <div className="md:col-span-2">
                        <label className="text-sm font-medium text-slate-700 mb-2 block">
                          Profile Preview
                        </label>
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
import React, { useState } from 'react';
import type { 
  PortfolioData, 
  Project, 
  Experience, 
  Skill, 
  Client, 
  Testimonial 
} from '../data/portfolio-data';
import { 
  validateFormSection, 
  validateProject, 
  validateExperience, 
  validateSkill, 
  validateClient, 
  validateTestimonial,
  ValidationErrors
} from '../utils/validation';

export function useFormHandlers(initialData: PortfolioData) {
  const [data, setData] = useState<PortfolioData>(initialData);
  const [errors, setErrors] = useState<Record<string, ValidationErrors>>({});

  const handleSave = () => {
    // In a real app, this would save to a database or API
    localStorage.setItem('portfolioData', JSON.stringify(data));
    console.log('Portfolio data saved:', data);
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

  const handleImportJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target?.result as string);
          setData(imported);
        } catch (error) {
          console.error('Error importing data:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  // Validation helpers
  const validateAndSetErrors = (section: string, validator: () => ValidationErrors) => {
    const sectionErrors = validator();
    setErrors(prev => ({
      ...prev,
      [section]: sectionErrors
    }));
    return Object.keys(sectionErrors).length === 0;
  };

  const clearSectionErrors = (section: string) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[section];
      return newErrors;
    });
  };

  // Project handlers
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
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
      category: "Category",
      problemStatement: "Problem statement"
    };
    setData({ ...data, projects: [...data.projects, newProject] });
  };

  const deleteProject = (id: number) => {
    setData({ ...data, projects: data.projects.filter(p => p.id !== id) });
    // Clear errors for this project if they exist
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[`project-${id}`];
      return newErrors;
    });
  };

  const updateProject = (id: number, updates: Partial<Project>) => {
    const updatedProjects = data.projects.map(p => p.id === id ? { ...p, ...updates } : p);
    setData({ ...data, projects: updatedProjects });
    
    // Validate the updated project
    const project = updatedProjects.find(p => p.id === id);
    if (project) {
      const projectErrors = validateProject(project);
      if (Object.keys(projectErrors).length > 0) {
        setErrors(prev => ({
          ...prev,
          [`project-${id}`]: projectErrors
        }));
      } else {
        // Clear errors if validation passes
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[`project-${id}`];
          return newErrors;
        });
      }
    }
  };

  // Experience handlers
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
    // Clear errors for this experience if they exist
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[`experience-${id}`];
      return newErrors;
    });
  };

  const updateExperience = (id: number, updates: Partial<Experience>) => {
    const updatedExperience = data.experience.map(e => e.id === id ? { ...e, ...updates } : e);
    setData({ ...data, experience: updatedExperience });
    
    // Validate the updated experience
    const experience = updatedExperience.find(e => e.id === id);
    if (experience) {
      const expErrors = validateExperience(experience);
      if (Object.keys(expErrors).length > 0) {
        setErrors(prev => ({
          ...prev,
          [`experience-${id}`]: expErrors
        }));
      } else {
        // Clear errors if validation passes
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[`experience-${id}`];
          return newErrors;
        });
      }
    }
  };

  // Skill handlers
  const addSkill = () => {
    const newSkill: Skill = {
      category: "New Category",
      items: ["Skill 1", "Skill 2"]
    };
    setData({ ...data, skills: [...data.skills, newSkill] });
  };

  const deleteSkill = (index: number) => {
    setData({ ...data, skills: data.skills.filter((_, i) => i !== index) });
    // Clear errors for this skill if they exist
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[`skill-${index}`];
      return newErrors;
    });
  };

  const updateSkill = (index: number, updates: Partial<Skill>) => {
    const updatedSkills = data.skills.map((skill, i) => i === index ? { ...skill, ...updates } : skill);
    setData({ ...data, skills: updatedSkills });
    
    // Validate the updated skill
    const skill = updatedSkills[index];
    if (skill) {
      const skillErrors = validateSkill(skill);
      if (Object.keys(skillErrors).length > 0) {
        setErrors(prev => ({
          ...prev,
          [`skill-${index}`]: skillErrors
        }));
      } else {
        // Clear errors if validation passes
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[`skill-${index}`];
          return newErrors;
        });
      }
    }
  };

  // Client handlers
  const addClient = () => {
    const newClient: Client = {
      name: "Client Name",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop"
    };
    setData({ ...data, clients: [...data.clients, newClient] });
  };

  const deleteClient = (index: number) => {
    setData({ ...data, clients: data.clients.filter((_, i) => i !== index) });
    // Clear errors for this client if they exist
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[`client-${index}`];
      return newErrors;
    });
  };

  const updateClient = (index: number, updates: Partial<Client>) => {
    const updatedClients = data.clients.map((client, i) => i === index ? { ...client, ...updates } : client);
    setData({ ...data, clients: updatedClients });
    
    // Validate the updated client
    const client = updatedClients[index];
    if (client) {
      const clientErrors = validateClient(client);
      if (Object.keys(clientErrors).length > 0) {
        setErrors(prev => ({
          ...prev,
          [`client-${index}`]: clientErrors
        }));
      } else {
        // Clear errors if validation passes
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[`client-${index}`];
          return newErrors;
        });
      }
    }
  };

  // Testimonial handlers
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
    // Clear errors for this testimonial if they exist
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[`testimonial-${index}`];
      return newErrors;
    });
  };

  const updateTestimonial = (index: number, updates: Partial<Testimonial>) => {
    const updatedTestimonials = data.testimonials.map((testimonial, i) => i === index ? { ...testimonial, ...updates } : testimonial);
    setData({ ...data, testimonials: updatedTestimonials });
    
    // Validate the updated testimonial
    const testimonial = updatedTestimonials[index];
    if (testimonial) {
      const testimonialErrors = validateTestimonial(testimonial);
      if (Object.keys(testimonialErrors).length > 0) {
        setErrors(prev => ({
          ...prev,
          [`testimonial-${index}`]: testimonialErrors
        }));
      } else {
        // Clear errors if validation passes
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[`testimonial-${index}`];
          return newErrors;
        });
      }
    }
  };

  // File upload handler
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

  return {
    data,
    setData,
    errors,
    handleSave,
    handleExportJSON,
    handleImportJSON,
    // Project handlers
    addProject,
    deleteProject,
    updateProject,
    // Experience handlers
    addExperience,
    deleteExperience,
    updateExperience,
    // Skill handlers
    addSkill,
    deleteSkill,
    updateSkill,
    // Client handlers
    addClient,
    deleteClient,
    updateClient,
    // Testimonial handlers
    addTestimonial,
    deleteTestimonial,
    updateTestimonial,
    // File upload handler
    handleFileUpload
  };
}
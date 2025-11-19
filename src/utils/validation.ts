// Validation utility functions for the portfolio admin panel

export interface ValidationError {
  field: string;
  message: string;
}

export type ValidationErrors = Record<string, string>;

// Validation rules
const REQUIRED_FIELDS = [
  'name', 'title', 'email', 'project-title', 'project-company',
  'exp-title', 'exp-company', 'skill-category', 'client-name', 
  'testimonial-author', 'testimonial-quote'
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_REGEX = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
const ASSET_PATH_REGEX = /^\/src\/assets\/.+$/;

// Check if a value is a valid asset path or URL
const isValidImageReference = (value: string): boolean => {
  return URL_REGEX.test(value) || ASSET_PATH_REGEX.test(value);
};

export const validateField = (fieldName: string, value: string): string | null => {
  // Required field validation
  if (REQUIRED_FIELDS.some(field => fieldName.includes(field)) && !value.trim()) {
    return 'This field is required';
  }

  // Email validation
  if (fieldName.includes('email') && value.trim() && !EMAIL_REGEX.test(value.trim())) {
    return 'Please enter a valid email address';
  }

  // URL validation for specific fields (excluding image fields which can be asset paths)
  if ((fieldName.includes('portfolio') || fieldName.includes('linkedin') || 
       fieldName.includes('whatsapp')) && 
      value.trim() && !URL_REGEX.test(value.trim())) {
    return 'Please enter a valid URL';
  }

  // Specific validations for numeric fields
  if (fieldName.includes('projectsDelivered') || fieldName.includes('globalClients')) {
    if (value.trim() && isNaN(Number(value.trim()))) {
      return 'Please enter a valid number';
    }
  }

  return null;
};

export const validateFormSection = (section: string, data: any): ValidationErrors => {
  const errors: ValidationErrors = {};

  switch (section) {
    case 'contact':
      errors.name = validateField('name', data.contact.name) || '';
      errors.title = validateField('title', data.contact.title) || '';
      errors.email = validateField('email', data.contact.email) || '';
      if (data.contact.portfolio) {
        errors.portfolio = validateField('portfolio', data.contact.portfolio) || '';
      }
      if (data.contact.linkedin) {
        errors.linkedin = validateField('linkedin', data.contact.linkedin) || '';
      }
      if (data.contact.whatsapp) {
        errors.whatsapp = validateField('whatsapp', data.contact.whatsapp) || '';
      }
      break;

    case 'about':
      // About section has fewer required fields, mostly optional
      break;

    case 'education':
      // Education fields are mostly optional
      break;
  }

  // Remove empty error messages
  Object.keys(errors).forEach(key => {
    if (!errors[key]) {
      delete errors[key];
    }
  });

  return errors;
};

export const validateProject = (project: any): ValidationErrors => {
  const errors: ValidationErrors = {};

  errors.title = validateField('project-title', project.title) || '';
  errors.company = validateField('project-company', project.company) || '';
  errors.summary = validateField('project-summary', project.summary) || '';
  errors.impact = validateField('project-impact', project.impact) || '';

  if (project.image && !isValidImageReference(project.image)) {
    errors.image = 'Please enter a valid image URL or select an asset';
  }

  // Remove empty error messages
  Object.keys(errors).forEach(key => {
    if (!errors[key]) {
      delete errors[key];
    }
  });

  return errors;
};

export const validateExperience = (experience: any): ValidationErrors => {
  const errors: ValidationErrors = {};

  errors.title = validateField('exp-title', experience.title) || '';
  errors.company = validateField('exp-company', experience.company) || '';

  // Remove empty error messages
  Object.keys(errors).forEach(key => {
    if (!errors[key]) {
      delete errors[key];
    }
  });

  return errors;
};

export const validateSkill = (skill: any): ValidationErrors => {
  const errors: ValidationErrors = {};

  errors.category = validateField('skill-category', skill.category) || '';
  if (!skill.items || skill.items.length === 0) {
    errors.items = 'At least one skill is required';
  }

  // Remove empty error messages
  Object.keys(errors).forEach(key => {
    if (!errors[key]) {
      delete errors[key];
    }
  });

  return errors;
};

export const validateClient = (client: any): ValidationErrors => {
  const errors: ValidationErrors = {};

  errors.name = validateField('client-name', client.name) || '';
  if (client.logo && !isValidImageReference(client.logo)) {
    errors.logo = 'Please enter a valid logo URL or select an asset';
  }

  // Remove empty error messages
  Object.keys(errors).forEach(key => {
    if (!errors[key]) {
      delete errors[key];
    }
  });

  return errors;
};

export const validateTestimonial = (testimonial: any): ValidationErrors => {
  const errors: ValidationErrors = {};

  errors.quote = validateField('testimonial-quote', testimonial.quote) || '';
  errors.author = validateField('testimonial-author', testimonial.author) || '';
  errors.role = validateField('testimonial-role', testimonial.role) || '';
  errors.company = validateField('testimonial-company', testimonial.company) || '';

  if (testimonial.image && !isValidImageReference(testimonial.image)) {
    errors.image = 'Please enter a valid image URL or select an asset';
  }

  // Remove empty error messages
  Object.keys(errors).forEach(key => {
    if (!errors[key]) {
      delete errors[key];
    }
  });

  return errors;
};
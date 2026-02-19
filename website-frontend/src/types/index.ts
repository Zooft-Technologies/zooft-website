// Contact Form Types
export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
  inquiryType: 'general' | 'sales' | 'support' | 'partnership';
}

export interface FormError {
  field: string;
  message: string;
}

export interface FormState {
  isSubmitting: boolean;
  errors: FormError[];
  success: boolean;
}

// Newsletter Types
export interface NewsletterData {
  firstName: string;
  lastName: string;
  email: string;
}

// Service Types
export interface ServiceTestimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  testimonial: ServiceTestimonial;
  faqs: ServiceFAQ[];
}

// Team Member Types
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// ValidationError is an alias for FormError (used by validation service)
export type ValidationError = FormError;

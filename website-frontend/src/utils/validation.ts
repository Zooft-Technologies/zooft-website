import { ContactFormData, ValidationError } from '@/types';

export class ValidationService {
  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validatePhone(phone: string): boolean {
    // Uganda phone number format: +256XXXXXXXXX or 0XXXXXXXXX
    const phoneRegex = /^(\+256|0)[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  static validateContactForm(data: ContactFormData): ValidationError[] {
    const errors: ValidationError[] = [];

    // Full name validation
    if (!data.fullName.trim()) {
      errors.push({ field: 'fullName', message: 'Full name is required' });
    } else if (data.fullName.trim().length < 2) {
      errors.push({ field: 'fullName', message: 'Full name must be at least 2 characters' });
    }

    // Email validation
    if (!data.email.trim()) {
      errors.push({ field: 'email', message: 'Email is required' });
    } else if (!this.validateEmail(data.email)) {
      errors.push({ field: 'email', message: 'Please enter a valid email address' });
    }

    // Phone validation
    if (!data.phone.trim()) {
      errors.push({ field: 'phone', message: 'Phone number is required' });
    } else if (!this.validatePhone(data.phone)) {
      errors.push({ field: 'phone', message: 'Please enter a valid Uganda phone number' });
    }

    // Subject validation
    if (!data.subject.trim()) {
      errors.push({ field: 'subject', message: 'Subject is required' });
    } else if (data.subject.trim().length < 3) {
      errors.push({ field: 'subject', message: 'Subject must be at least 3 characters' });
    }

    // Message validation
    if (!data.message.trim()) {
      errors.push({ field: 'message', message: 'Message is required' });
    } else if (data.message.trim().length < 10) {
      errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
    }

    return errors;
  }

  static validateNewsletterForm(data: { firstName: string; lastName: string; email: string }): ValidationError[] {
    const errors: ValidationError[] = [];

    if (!data.firstName.trim()) {
      errors.push({ field: 'firstName', message: 'First name is required' });
    }

    if (!data.lastName.trim()) {
      errors.push({ field: 'lastName', message: 'Last name is required' });
    }

    if (!data.email.trim()) {
      errors.push({ field: 'email', message: 'Email is required' });
    } else if (!this.validateEmail(data.email)) {
      errors.push({ field: 'email', message: 'Please enter a valid email address' });
    }

    return errors;
  }
}

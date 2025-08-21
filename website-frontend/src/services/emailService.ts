import { ContactFormData, NewsletterData, ApiResponse } from '@/types';

// Email service for contact forms
export class EmailService {
  private static readonly API_ENDPOINT = '/api/send-email';

  static async sendContactForm(data: ContactFormData): Promise<ApiResponse<void>> {
    try {
      const response = await fetch(EmailService.API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          ...data,
          to: 'info@zoofttechnologies.com'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        message: 'Your message has been sent successfully!'
      };
    } catch (error) {
      console.error('Email service error:', error);
      return {
        success: false,
        error: 'Failed to send message. Please try again or contact us directly.'
      };
    }
  }

  static async subscribeNewsletter(data: NewsletterData): Promise<ApiResponse<void>> {
    try {
      const response = await fetch(EmailService.API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'newsletter',
          ...data,
          to: 'newsletter@zoofttechnologies.com'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return {
        success: true,
        message: 'Successfully subscribed to our newsletter!'
      };
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      return {
        success: false,
        error: 'Failed to subscribe. Please try again.'
      };
    }
  }

  // Fallback method using mailto (for development/client-side only)
  static createMailtoLink(data: ContactFormData): string {
    const subject = encodeURIComponent(`Contact Form: ${data.subject}`);
    const body = encodeURIComponent(
      `Name: ${data.fullName}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone}\n` +
      `Company: ${data.company || 'N/A'}\n` +
      `Inquiry Type: ${data.inquiryType}\n\n` +
      `Message:\n${data.message}`
    );
    
    return `mailto:info@zoofttechnologies.com?subject=${subject}&body=${body}`;
  }
}

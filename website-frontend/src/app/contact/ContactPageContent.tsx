"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EmailService } from "@/services/emailService";
import { ValidationService } from "@/utils/validation";
import { ContactFormData, FormState } from "@/types";
import { companyInfo } from "@/data/content";

export default function ContactPageContent() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    errors: [],
    success: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setFormState((prev) => ({
      ...prev,
      errors: prev.errors.filter((error) => error.field !== name),
      success: false,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = ValidationService.validateContactForm(formData);

    if (validationErrors.length > 0) {
      setFormState((prev) => ({ ...prev, errors: validationErrors }));
      return;
    }

    setFormState((prev) => ({ ...prev, isSubmitting: true, errors: [] }));

    try {
      const result = await EmailService.sendContactForm(formData);

      if (result.success) {
        setFormState({ isSubmitting: false, errors: [], success: true });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
          inquiryType: "general",
        });
      } else {
        setFormState((prev) => ({
          ...prev,
          isSubmitting: false,
          errors: [
            {
              field: "general",
              message: result.error || "Failed to send message",
            },
          ],
        }));
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        errors: [
          {
            field: "general",
            message: "An unexpected error occurred. Please try again.",
          },
        ],
      }));
    }
  };

  const getFieldError = (fieldName: string) => {
    return formState.errors.find((error) => error.field === fieldName)?.message;
  };

  const handleFallbackContact = () => {
    const mailtoLink = EmailService.createMailtoLink(formData);
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-zooft-primary to-zooft-dark text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="text-zooft-light">Us</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with innovative technology
            solutions?
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="text-zooft-primary">Touch</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Choose your preferred way to reach us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-zooft-light mx-auto mb-4 flex items-center justify-center text-3xl">📞</div>
                <CardTitle className="text-xl text-zooft-primary">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Speak directly with our team</p>
                <a href={`tel:${companyInfo.contact.phone}`} className="text-zooft-primary font-medium hover:text-zooft-dark">{companyInfo.contact.phone}</a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-zooft-light mx-auto mb-4 flex items-center justify-center text-3xl">💬</div>
                <CardTitle className="text-xl text-zooft-primary">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Quick messaging support</p>
                <a href={`https://wa.me/${companyInfo.contact.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-zooft-primary font-medium hover:text-zooft-dark">{companyInfo.contact.whatsapp}</a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-zooft-light mx-auto mb-4 flex items-center justify-center text-3xl">✉️</div>
                <CardTitle className="text-xl text-zooft-primary">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Send us your inquiry</p>
                <a href={`mailto:${companyInfo.contact.email}`} className="text-zooft-primary font-medium hover:text-zooft-dark">{companyInfo.contact.email}</a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-zooft-primary">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formState.success && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                      Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                    </div>
                  )}

                  {formState.errors.find((error) => error.field === "general") && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {getFieldError("general")}
                      <button type="button" onClick={handleFallbackContact} className="ml-2 underline hover:no-underline">
                        Try email instead
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} className={getFieldError("fullName") ? "border-red-500" : ""} placeholder="Your full name" />
                      {getFieldError("fullName") && <p className="text-red-500 text-sm mt-1">{getFieldError("fullName")}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} className={getFieldError("email") ? "border-red-500" : ""} placeholder="your.email@example.com" />
                      {getFieldError("email") && <p className="text-red-500 text-sm mt-1">{getFieldError("email")}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className={getFieldError("phone") ? "border-red-500" : ""} placeholder="+256 XXX XXX XXX" />
                      {getFieldError("phone") && <p className="text-red-500 text-sm mt-1">{getFieldError("phone")}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company (Optional)</label>
                      <Input id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder="Your company name" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                    <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zooft-primary">
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} className={getFieldError("subject") ? "border-red-500" : ""} placeholder="Brief description of your inquiry" />
                    {getFieldError("subject") && <p className="text-red-500 text-sm mt-1">{getFieldError("subject")}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className={`min-h-[120px] ${getFieldError("message") ? "border-red-500" : ""}`} placeholder="Please provide details about your project or inquiry..." />
                    {getFieldError("message") && <p className="text-red-500 text-sm mt-1">{getFieldError("message")}</p>}
                  </div>

                  <Button type="submit" disabled={formState.isSubmitting} className="w-full bg-zooft-primary hover:bg-zooft-dark text-white py-3">
                    {formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-zooft-primary">Office Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 text-zooft-primary mt-1 mr-3">📍</div>
                      <div><p className="font-medium">Address</p><p className="text-gray-600">{companyInfo.contact.address}</p></div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 text-zooft-primary mt-1 mr-3">🕒</div>
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-zooft-primary">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a href={companyInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zooft-light flex items-center justify-center text-zooft-primary hover:bg-zooft-primary hover:text-white transition-colors">🐦</a>
                    <a href={companyInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zooft-light flex items-center justify-center text-zooft-primary hover:bg-zooft-primary hover:text-white transition-colors">💼</a>
                    <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zooft-light flex items-center justify-center text-zooft-primary hover:bg-zooft-primary hover:text-white transition-colors">📘</a>
                    <a href={companyInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zooft-light flex items-center justify-center text-zooft-primary hover:bg-zooft-primary hover:text-white transition-colors">📷</a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

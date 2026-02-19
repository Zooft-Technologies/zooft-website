"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  MessageCircle,
  Clock,
  Send,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { EmailService } from "@/services/emailService";
import { ValidationService } from "@/utils/validation";
import { ContactFormData, FormState } from "@/types";
import { companyInfo } from "@/data/content";
import { fadeUp } from "@/lib/animations";

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+256 773 252 651",
    secondaryValue: "+256 709 105 749",
    href: "tel:+256773252651",
    description: "Speak directly with our team",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+256 773 252 651",
    href: "https://wa.me/256773252651",
    external: true,
    description: "Quick messaging support",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "contact@zoofttechnologies.com",
    href: "mailto:contact@zoofttechnologies.com",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Nakawa, Kampala, Uganda",
    description: "Our office location",
  },
];

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
    } catch {
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
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-zooft-primary via-zooft-dark to-zooft-accent text-white overflow-hidden">
        <div className="container mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-sm font-semibold rounded-full mb-4">
              Let&apos;s Connect
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Ready to transform your business with secure, AI-powered software?
            We&apos;d love to hear about your project.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods Cards */}
      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const inner = (
                <Card className="group h-full bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:border-zooft-primary/30 transition-all duration-300 ease-out overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zooft-primary to-zooft-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {method.label}
                    </h3>
                    <p className="text-xs text-gray-400 mb-3">
                      {method.description}
                    </p>
                    <p className="text-sm font-medium text-zooft-primary">
                      {method.value}
                    </p>
                    {method.secondaryValue && (
                      <p className="text-sm font-medium text-zooft-primary">
                        {method.secondaryValue}
                      </p>
                    )}
                  </CardContent>
                </Card>
              );

              return (
                <motion.div
                  key={method.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                  whileHover={{ y: -4 }}
                >
                  {method.href ? (
                    <a
                      href={method.href}
                      {...(method.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="block h-full"
                      aria-label={`${method.label}: ${method.value}`}
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section
        aria-labelledby="contact-form-heading"
        className="pb-20 md:pb-28 overflow-hidden"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Contact Form — 3 cols */}
            <motion.div
              className="lg:col-span-3"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={0}
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100">
                <h2
                  id="contact-form-heading"
                  className="text-2xl md:text-3xl font-bold mb-2 text-gray-900"
                >
                  Send Us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-gray-500 mb-8">
                  Fill in the form and our team will get back to you within 24
                  hours.
                </p>

                {/* Success message */}
                {formState.success && (
                  <motion.div
                    className="bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-xl mb-6 flex items-start gap-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle2
                      size={20}
                      className="shrink-0 mt-0.5 text-green-500"
                    />
                    <div>
                      <p className="font-semibold">
                        Message sent successfully!
                      </p>
                      <p className="text-sm text-green-600">
                        Thank you for reaching out. We&apos;ll get back to you
                        soon.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* General error */}
                {formState.errors.find((e) => e.field === "general") && (
                  <motion.div
                    className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl mb-6 flex items-start gap-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle
                      size={20}
                      className="shrink-0 mt-0.5 text-red-500"
                    />
                    <div>
                      <p className="font-semibold">
                        {getFieldError("general")}
                      </p>
                      <button
                        type="button"
                        onClick={handleFallbackContact}
                        className="text-sm underline hover:no-underline mt-1"
                      >
                        Try email instead
                      </button>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`h-12 rounded-xl ${getFieldError("fullName") ? "border-red-400 focus-visible:ring-red-400" : "focus-visible:ring-zooft-primary"}`}
                        placeholder="Your full name"
                      />
                      {getFieldError("fullName") && (
                        <p className="text-red-500 text-xs mt-1.5">
                          {getFieldError("fullName")}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`h-12 rounded-xl ${getFieldError("email") ? "border-red-400 focus-visible:ring-red-400" : "focus-visible:ring-zooft-primary"}`}
                        placeholder="you@example.com"
                      />
                      {getFieldError("email") && (
                        <p className="text-red-500 text-xs mt-1.5">
                          {getFieldError("email")}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`h-12 rounded-xl ${getFieldError("phone") ? "border-red-400 focus-visible:ring-red-400" : "focus-visible:ring-zooft-primary"}`}
                        placeholder="+256 XXX XXX XXX"
                      />
                      {getFieldError("phone") && (
                        <p className="text-red-500 text-xs mt-1.5">
                          {getFieldError("phone")}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company{" "}
                        <span className="text-gray-400 font-normal">
                          (Optional)
                        </span>
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="h-12 rounded-xl focus-visible:ring-zooft-primary"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 border border-gray-200 rounded-xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-zooft-primary focus:border-transparent transition-colors"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="sales">Project / Sales</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject <span className="text-red-400">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`h-12 rounded-xl ${getFieldError("subject") ? "border-red-400 focus-visible:ring-red-400" : "focus-visible:ring-zooft-primary"}`}
                        placeholder="How can we help?"
                      />
                      {getFieldError("subject") && (
                        <p className="text-red-500 text-xs mt-1.5">
                          {getFieldError("subject")}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`min-h-[140px] rounded-xl ${getFieldError("message") ? "border-red-400 focus-visible:ring-red-400" : "focus-visible:ring-zooft-primary"}`}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                    {getFieldError("message") && (
                      <p className="text-red-500 text-xs mt-1.5">
                        {getFieldError("message")}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={formState.isSubmitting}
                    className="w-full bg-zooft-primary hover:bg-zooft-dark text-white h-12 text-base font-semibold rounded-xl disabled:opacity-50"
                  >
                    {formState.isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send size={18} />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar — 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Contact Info */}
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={1}
              >
                <h3 className="text-xl font-bold mb-6 text-gray-900">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+256 773 252 651",
                      sub: "+256 709 105 749",
                      href: "tel:+256773252651",
                    },
                    {
                      icon: MessageCircle,
                      label: "WhatsApp",
                      value: "+256 773 252 651",
                      href: "https://wa.me/256773252651",
                      ext: true,
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: companyInfo.contact.email,
                      href: `mailto:${companyInfo.contact.email}`,
                    },
                    {
                      icon: Globe,
                      label: "Website",
                      value: companyInfo.contact.website,
                      href: `https://${companyInfo.contact.website}`,
                      ext: true,
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: companyInfo.contact.address,
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zooft-primary to-zooft-secondary flex items-center justify-center shrink-0">
                          <Icon className="text-white" size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium text-gray-900 group-hover:text-zooft-primary transition-colors">
                            {item.value}
                          </p>
                          {item.sub && (
                            <p className="text-sm font-medium text-gray-900">
                              {item.sub}
                            </p>
                          )}
                        </div>
                      </div>
                    );

                    if (item.href) {
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          {...(item.ext
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="block"
                          aria-label={`${item.label}: ${item.value}`}
                        >
                          {content}
                        </a>
                      );
                    }
                    return <div key={item.label}>{content}</div>;
                  })}
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                className="bg-gradient-to-br from-zooft-primary via-zooft-dark to-zooft-accent p-8 rounded-2xl text-white"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={2}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                    <Clock className="text-white" size={18} />
                  </div>
                  <h3 className="text-xl font-bold">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2.5 border-b border-white/15">
                    <span className="text-white/75 text-sm">
                      Monday &ndash; Friday
                    </span>
                    <span className="font-semibold text-sm">
                      8:00 AM &ndash; 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-white/15">
                    <span className="text-white/75 text-sm">Saturday</span>
                    <span className="font-semibold text-sm">
                      9:00 AM &ndash; 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2.5">
                    <span className="text-white/75 text-sm">Sunday</span>
                    <span className="font-semibold text-sm text-white/50">
                      Closed
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Quick WhatsApp CTA */}
              <motion.div
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={3}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Prefer a quick chat?
                </h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  Start a WhatsApp conversation and get a response in minutes
                  during business hours.
                </p>
                <Button
                  className="w-full bg-[#25D366] hover:bg-[#1da851] text-white h-12 rounded-xl font-semibold"
                  asChild
                >
                  <a
                    href="https://wa.me/256773252651"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="pb-20 md:pb-28 overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <span className="inline-block px-4 py-1.5 bg-zooft-primary/10 text-zooft-primary text-sm font-semibold rounded-full mb-4">
              Our Location
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Us in <span className="gradient-text">Kampala</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Visit our office in Nakawa, Kampala, Uganda — or reach out online
              from anywhere in the world.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.151093095697!2d32.61680544999999!3d0.3221164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0f5fdb0e1f%3A0x7de10f76e5f3e7d3!2sNakawa%2C%20Kampala!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zooft Technologies Office Location — Nakawa, Kampala, Uganda"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-zooft-primary via-zooft-dark to-zooft-accent text-white overflow-hidden">
        <div className="container mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-sm font-semibold rounded-full mb-4">
              Let&apos;s Work Together
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
          >
            Ready to Start Your Project?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
          >
            Whether you need custom software, a mobile app, or strategic IT
            guidance — our team is ready to help you succeed.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={3}
          >
            <Button
              size="lg"
              className="bg-white text-zooft-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/services" className="flex items-center">
                Explore Our Services{" "}
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-zooft-primary px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

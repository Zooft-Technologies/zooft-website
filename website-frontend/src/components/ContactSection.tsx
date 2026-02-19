"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  MessageCircle,
  Clock,
  Send,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+256 773 252 651",
    secondaryValue: "+256 709 105 749",
    href: "tel:+256773252651",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+256 773 252 651",
    href: "https://wa.me/256773252651",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@zoofttechnologies.com",
    href: "mailto:contact@zoofttechnologies.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.zoofttechnologies.com",
    href: "https://www.zoofttechnologies.com",
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nakawa, Kampala, Uganda",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-gray-50 to-white hexagon-bg overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
        >
          <span className="inline-block px-4 py-1.5 bg-zooft-primary/10 text-zooft-primary text-sm font-semibold rounded-full mb-4">
            Contact Us
          </span>
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or need expert guidance? We&apos;d love to
            hear from you — let&apos;s build something great together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              Send Us a Message
            </h3>
            <p className="text-gray-500 mb-6">
              Fill in the form and our team will get back to you within 24
              hours.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="contact-name"
                    name="fullName"
                    placeholder="Your full name"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    placeholder="+256 XXX XXX XXX"
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <Input
                    id="contact-subject"
                    name="subject"
                    placeholder="How can we help?"
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full min-h-[140px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-zooft-primary hover:bg-zooft-dark text-white py-6 text-base font-semibold"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info + Business Hours */}
          <div className="flex flex-col gap-6">
            <motion.div
              className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Contact Information
              </h3>
              <div className="space-y-5">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start group">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-zooft-primary to-zooft-secondary flex items-center justify-center mr-4 shrink-0">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-0.5">
                          {item.label}
                        </p>
                        <p className="font-medium text-gray-900 group-hover:text-zooft-primary transition-colors">
                          {item.value}
                        </p>
                        {item.secondaryValue && (
                          <p className="font-medium text-gray-900">
                            {item.secondaryValue}
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
                        {...(item.external
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                        className="block"
                      >
                        {content}
                      </a>
                    );
                  }

                  return <div key={item.label}>{content}</div>;
                })}
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-zooft-primary via-zooft-dark to-zooft-accent p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] text-white"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
            >
              <div className="flex items-center mb-5">
                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center mr-4">
                  <Clock className="text-white" size={20} />
                </div>
                <h3 className="text-2xl font-bold">Business Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/15">
                  <span className="text-white/80">Monday &ndash; Friday</span>
                  <span className="font-semibold">8:00 AM &ndash; 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/15">
                  <span className="text-white/80">Saturday</span>
                  <span className="font-semibold">9:00 AM &ndash; 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">Sunday</span>
                  <span className="font-semibold text-white/60">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

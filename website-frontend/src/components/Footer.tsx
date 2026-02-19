"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/data/content";
import { fadeUp } from "@/lib/animations";

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Custom Software Development", href: "/services" },
  { label: "Web Application Development", href: "/services" },
  { label: "Mobile App Development", href: "/services" },
  { label: "Data Analytics & Insights", href: "/services" },
  { label: "IT Consultancy", href: "/services" },
  { label: "Software Development Training", href: "/services" },
];

const socialLinks = [
  { icon: Youtube, href: companyInfo.social.youtube, label: "YouTube" },
  { icon: TikTokIcon, href: companyInfo.social.tiktok, label: "TikTok" },
  { icon: XIcon, href: companyInfo.social.twitter, label: "X (Twitter)" },
  {
    icon: Instagram,
    href: companyInfo.social.instagram,
    label: "Instagram",
  },
  { icon: Linkedin, href: companyInfo.social.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: companyInfo.social.facebook, label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container mx-auto pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10">
                <Image
                  src="/images/zooft logo.png"
                  alt="Zooft Technologies Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="ml-2 text-xl font-bold">
                Zooft Technologies
              </span>
            </div>
            <p className="text-gray-400 mb-5 leading-relaxed text-sm">
              We build secure, AI-powered software solutions that help
              businesses scale faster and operate smarter. Based in Kampala,
              serving Uganda and East Africa.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-zooft-primary hover:to-zooft-secondary transition-all duration-300"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            aria-label="Quick links"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-zooft-secondary hover:pl-1 transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Services */}
          <motion.nav
            aria-label="Our services"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
          >
            <h3 className="text-lg font-semibold mb-5">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-zooft-secondary hover:pl-1 transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
          >
            <h3 className="text-lg font-semibold mb-5">Get In Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-zooft-secondary transition-colors group"
                >
                  <Phone
                    size={16}
                    className="text-zooft-secondary shrink-0"
                  />
                  <div className="text-sm">
                    <span className="block">+256 773 252 651</span>
                    <span className="block">+256 709 105 749</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${companyInfo.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-zooft-secondary transition-colors text-sm"
                >
                  <MessageCircle
                    size={16}
                    className="text-zooft-secondary shrink-0"
                  />
                  +256 773 252 651
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-zooft-secondary transition-colors text-sm"
                >
                  <Mail
                    size={16}
                    className="text-zooft-secondary shrink-0"
                  />
                  {companyInfo.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin
                  size={16}
                  className="text-zooft-secondary shrink-0"
                />
                {companyInfo.contact.address}
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Zooft Technologies. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/about"
                className="text-gray-500 hover:text-zooft-secondary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/about"
                className="text-gray-500 hover:text-zooft-secondary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

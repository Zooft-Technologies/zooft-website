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

const ZooftLogoWhite = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 140 159"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M69.6 7.20001L132 43.2V115.2L69.6 151.2L7.19995 115.2V43.2L69.6 7.20001Z"
      stroke="#009973"
      strokeWidth="3.6"
    />
    <path
      d="M69.5999 14.4C73.5764 14.4 76.7999 11.1764 76.7999 7.2C76.7999 3.22355 73.5764 0 69.5999 0C65.6235 0 62.3999 3.22355 62.3999 7.2C62.3999 11.1764 65.6235 14.4 69.5999 14.4Z"
      fill="#009973"
    />
    <path
      d="M132 50.4C135.976 50.4 139.2 47.1764 139.2 43.2C139.2 39.2235 135.976 36 132 36C128.024 36 124.8 39.2235 124.8 43.2C124.8 47.1764 128.024 50.4 132 50.4Z"
      fill="#00CC99"
    />
    <path
      d="M132 122.4C135.976 122.4 139.2 119.176 139.2 115.2C139.2 111.224 135.976 108 132 108C128.024 108 124.8 111.224 124.8 115.2C124.8 119.176 128.024 122.4 132 122.4Z"
      fill="#009973"
    />
    <path
      d="M69.5999 158.4C73.5764 158.4 76.7999 155.176 76.7999 151.2C76.7999 147.224 73.5764 144 69.5999 144C65.6235 144 62.3999 147.224 62.3999 151.2C62.3999 155.176 65.6235 158.4 69.5999 158.4Z"
      fill="#006644"
    />
    <path
      d="M7.2 122.4C11.1764 122.4 14.4 119.176 14.4 115.2C14.4 111.224 11.1764 108 7.2 108C3.22355 108 0 111.224 0 115.2C0 119.176 3.22355 122.4 7.2 122.4Z"
      fill="#00CC99"
    />
    <path
      d="M7.2 50.4C11.1764 50.4 14.4 47.1764 14.4 43.2C14.4 39.2235 11.1764 36 7.2 36C3.22355 36 0 39.2235 0 43.2C0 47.1764 3.22355 50.4 7.2 50.4Z"
      fill="#006644"
    />
    <path
      d="M69.6001 7.20001L100.8 61.2"
      stroke="#009973"
      strokeWidth="3.6"
    />
    <path
      d="M100.8 67.2C104.114 67.2 106.8 64.5137 106.8 61.2C106.8 57.8863 104.114 55.2 100.8 55.2C97.4863 55.2 94.8 57.8863 94.8 61.2C94.8 64.5137 97.4863 67.2 100.8 67.2Z"
      fill="#00CC99"
    />
    <path
      d="M132 43.2L85.2 97.2"
      stroke="#00CC99"
      strokeWidth="3.6"
    />
    <path
      d="M85.2 103.2C88.5137 103.2 91.2 100.514 91.2 97.2C91.2 93.8863 88.5137 91.2 85.2 91.2C81.8862 91.2 79.2 93.8863 79.2 97.2C79.2 100.514 81.8862 103.2 85.2 103.2Z"
      fill="#80E5CC"
    />
    <path
      d="M132 115.2L87.6001 127.2"
      stroke="#009973"
      strokeWidth="3.6"
    />
    <path
      d="M87.6001 133.2C90.9138 133.2 93.6001 130.514 93.6001 127.2C93.6001 123.886 90.9138 121.2 87.6001 121.2C84.2864 121.2 81.6001 123.886 81.6001 127.2C81.6001 130.514 84.2864 133.2 87.6001 133.2Z"
      fill="#00CC99"
    />
    <path
      d="M69.6001 151.2L45.6001 103.2"
      stroke="#006644"
      strokeWidth="3.6"
    />
    <path
      d="M45.6001 109.2C48.9138 109.2 51.6001 106.514 51.6001 103.2C51.6001 99.8863 48.9138 97.2 45.6001 97.2C42.2864 97.2 39.6001 99.8863 39.6001 103.2C39.6001 106.514 42.2864 109.2 45.6001 109.2Z"
      fill="#80E5CC"
    />
    <path
      d="M7.19995 115.2L39.6 79.2"
      stroke="#00CC99"
      strokeWidth="3.6"
    />
    <path
      d="M39.6001 85.2C42.9138 85.2 45.6001 82.5137 45.6001 79.2C45.6001 75.8863 42.9138 73.2 39.6001 73.2C36.2864 73.2 33.6001 75.8863 33.6001 79.2C33.6001 82.5137 36.2864 85.2 39.6001 85.2Z"
      fill="#80E5CC"
    />
    <path
      d="M7.19995 43.2L51.6 31.2"
      stroke="#006644"
      strokeWidth="3.6"
    />
    <path
      d="M51.6001 37.2C54.9138 37.2 57.6001 34.5137 57.6001 31.2C57.6001 27.8863 54.9138 25.2 51.6001 25.2C48.2864 25.2 45.6001 27.8863 45.6001 31.2C45.6001 34.5137 48.2864 37.2 51.6001 37.2Z"
      fill="#009973"
    />
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
              <ZooftLogoWhite />
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

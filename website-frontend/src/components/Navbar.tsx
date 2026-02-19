"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActivePage = (path: string) => {
    return pathname === path;
  };

  const linkClass = (path: string) => 
    `transition-colors ${
      isActivePage(path) 
        ? "text-zooft-primary font-semibold" 
        : "text-gray-700 hover:text-zooft-primary"
    }`;

  return (
    <header className="fixed w-full top-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="mr-2">
            <ZooftLogo />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-zooft-primary to-zooft-secondary text-transparent bg-clip-text">
            Zooft <span className="text-black">Technologies</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link href="/services" className={linkClass("/services")}>
            Services
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
          <Button className="bg-zooft-primary hover:bg-zooft-accent text-white" asChild>
            <Link href="/contact">
              Get Started
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <Link
              href="/" 
              className={linkClass("/")}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about" 
              className={linkClass("/about")}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className={linkClass("/services")}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={linkClass("/contact")}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-zooft-primary hover:bg-zooft-accent text-white w-full" asChild>
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const ZooftLogo = () => (
  <svg width="40" height="40" viewBox="0 0 140 159" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M69.6 7.20001L132 43.2V115.2L69.6 151.2L7.19995 115.2V43.2L69.6 7.20001Z" stroke="#009973" strokeWidth="3.6"/>
<path d="M69.5999 14.4C73.5764 14.4 76.7999 11.1764 76.7999 7.2C76.7999 3.22355 73.5764 0 69.5999 0C65.6235 0 62.3999 3.22355 62.3999 7.2C62.3999 11.1764 65.6235 14.4 69.5999 14.4Z" fill="#009973"/>
<path d="M132 50.4C135.976 50.4 139.2 47.1764 139.2 43.2C139.2 39.2235 135.976 36 132 36C128.024 36 124.8 39.2235 124.8 43.2C124.8 47.1764 128.024 50.4 132 50.4Z" fill="#00CC99"/>
<path d="M132 122.4C135.976 122.4 139.2 119.176 139.2 115.2C139.2 111.224 135.976 108 132 108C128.024 108 124.8 111.224 124.8 115.2C124.8 119.176 128.024 122.4 132 122.4Z" fill="#009973"/>
<path d="M69.5999 158.4C73.5764 158.4 76.7999 155.176 76.7999 151.2C76.7999 147.224 73.5764 144 69.5999 144C65.6235 144 62.3999 147.224 62.3999 151.2C62.3999 155.176 65.6235 158.4 69.5999 158.4Z" fill="#006644"/>
<path d="M7.2 122.4C11.1764 122.4 14.4 119.176 14.4 115.2C14.4 111.224 11.1764 108 7.2 108C3.22355 108 0 111.224 0 115.2C0 119.176 3.22355 122.4 7.2 122.4Z" fill="#00CC99"/>
<path d="M7.2 50.4C11.1764 50.4 14.4 47.1764 14.4 43.2C14.4 39.2235 11.1764 36 7.2 36C3.22355 36 0 39.2235 0 43.2C0 47.1764 3.22355 50.4 7.2 50.4Z" fill="#006644"/>
<path d="M69.6001 7.20001L100.8 61.2" stroke="#009973" strokeWidth="3.6"/>
<path d="M100.8 67.2C104.114 67.2 106.8 64.5137 106.8 61.2C106.8 57.8863 104.114 55.2 100.8 55.2C97.4863 55.2 94.8 57.8863 94.8 61.2C94.8 64.5137 97.4863 67.2 100.8 67.2Z" fill="#00CC99"/>
<path d="M132 43.2L85.2 97.2" stroke="#00CC99" strokeWidth="3.6"/>
<path d="M85.2 103.2C88.5137 103.2 91.2 100.514 91.2 97.2C91.2 93.8863 88.5137 91.2 85.2 91.2C81.8862 91.2 79.2 93.8863 79.2 97.2C79.2 100.514 81.8862 103.2 85.2 103.2Z" fill="#80E5CC"/>
<path d="M132 115.2L87.6001 127.2" stroke="#009973" strokeWidth="3.6"/>
<path d="M87.6001 133.2C90.9138 133.2 93.6001 130.514 93.6001 127.2C93.6001 123.886 90.9138 121.2 87.6001 121.2C84.2864 121.2 81.6001 123.886 81.6001 127.2C81.6001 130.514 84.2864 133.2 87.6001 133.2Z" fill="#00CC99"/>
<path d="M69.6001 151.2L45.6001 103.2" stroke="#006644" strokeWidth="3.6"/>
<path d="M45.6001 109.2C48.9138 109.2 51.6001 106.514 51.6001 103.2C51.6001 99.8863 48.9138 97.2 45.6001 97.2C42.2864 97.2 39.6001 99.8863 39.6001 103.2C39.6001 106.514 42.2864 109.2 45.6001 109.2Z" fill="#80E5CC"/>
<path d="M7.19995 115.2L39.6 79.2" stroke="#00CC99" strokeWidth="3.6"/>
<path d="M39.6001 85.2C42.9138 85.2 45.6001 82.5137 45.6001 79.2C45.6001 75.8863 42.9138 73.2 39.6001 73.2C36.2864 73.2 33.6001 75.8863 33.6001 79.2C33.6001 82.5137 36.2864 85.2 39.6001 85.2Z" fill="#80E5CC"/>
<path d="M7.19995 43.2L51.6 31.2" stroke="#006644" strokeWidth="3.6"/>
<path d="M51.6001 37.2C54.9138 37.2 57.6001 34.5137 57.6001 31.2C57.6001 27.8863 54.9138 25.2 51.6001 25.2C48.2864 25.2 45.6001 27.8863 45.6001 31.2C45.6001 34.5137 48.2864 37.2 51.6001 37.2Z" fill="#009973"/>
</svg>

);

export default Navbar;

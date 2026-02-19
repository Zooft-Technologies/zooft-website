"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
          <div className="mr-2 w-10 h-10">
            <Image
              src="/images/zooft logo.png"
              alt="Zooft Technologies Logo"
              width={40}
              height={40}
              priority
              className="object-contain"
            />
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
          <Link href="/careers" className={linkClass("/careers")}>
            Careers
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
              href="/careers"
              className={linkClass("/careers")}
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
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

export default Navbar;

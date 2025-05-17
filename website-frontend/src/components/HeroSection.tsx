
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 hexagon-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Transforming</span> Ideas into <span className="gradient-text">Digital Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Zooft Technologies provides innovative tech solutions to help businesses thrive in the digital era. 
              <span className="block mt-2 font-medium italic text-zooft-dark">The better way to do it.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-zooft-primary hover:bg-zooft-dark text-white px-8 py-6 text-lg">
                <a href="#services" className="flex items-center">
                  Our Services <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-zooft-primary text-zooft-primary hover:bg-zooft-light px-8 py-6 text-lg">
                <a href="#contact">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-zooft-primary to-zooft-secondary opacity-20 rounded-3xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Tech Solutions" 
                className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-xl shadow-lg z-20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-zooft-primary"></div>
                  <p className="font-semibold text-gray-800">
                    <span className="text-zooft-primary">100+</span> Projects Delivered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

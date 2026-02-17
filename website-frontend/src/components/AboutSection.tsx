import React from "react";
import { Check } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

const AboutSection = () => {
  const benefits = [
    "25+ projects sucessfully implemented",
    "Expert team of certified professionals",
    "Cutting-edge technology solutions",
    "Customer-centric approach",
    "Timely delivery and deployment",
    "Continuous support and maintenance"
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-zooft-primary to-zooft-secondary opacity-10 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Zooft Technologies Team"
                width={800}
                height={600}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-3xl shadow-xl relative z-10"
              />
              <div className="absolute -top-6 -left-6 p-5 bg-white rounded-xl shadow-lg">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-zooft-primary">98%</span>
                  <span className="text-sm font-medium text-gray-600">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Zooft Technologies</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Zooft Technologies is a leading tech company specializing in innovative digital solutions. Founded with a vision to transform how businesses leverage technology, we've been helping organizations of all sizes navigate their digital transformation journey.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our team of experts combines technical expertise with industry knowledge to deliver solutions that drive efficiency, growth, and competitive advantage.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-zooft-light flex items-center justify-center mr-3">
                    <Check size={14} className="text-zooft-primary" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

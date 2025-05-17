
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe, BarChart, ShieldCheck, Cloud, Layers } from "lucide-react";

const services = [
  {
    icon: <Code className="h-8 w-8 text-zooft-primary" />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your unique business needs and challenges."
  },
  {
    icon: <Globe className="h-8 w-8 text-zooft-primary" />,
    title: "Web Application Development",
    description: "Responsive and user-friendly web applications that deliver exceptional digital experiences."
  },
  {
    icon: <Cloud className="h-8 w-8 text-zooft-primary" />,
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure to optimize your business operations."
  },
  {
    icon: <BarChart className="h-8 w-8 text-zooft-primary" />,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights to drive informed business decisions."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-zooft-primary" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets from evolving threats."
  },
  {
    icon: <Layers className="h-8 w-8 text-zooft-primary" />,
    title: "AI agent Development",
    description: "Innovative AI agents to automate processes and enhance customer interactions."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We offer a comprehensive range of technology solutions to help your business thrive in today's digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-shadow overflow-hidden border-t-4 border-t-zooft-primary">
              <CardHeader className="pb-2">
                <div className="mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

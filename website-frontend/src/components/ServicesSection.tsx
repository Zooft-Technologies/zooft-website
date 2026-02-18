"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  Globe,
  DatabaseZap,
  Smartphone,
  MessagesSquare,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Purpose-built, security-first applications engineered around your workflows — from internal tools to AI-powered customer-facing platforms that drive real business outcomes.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "High-performance web applications built with modern architectures, secure coding practices, and AI integrations that deliver seamless, intelligent user experiences.",
  },
  {
    icon: DatabaseZap,
    title: "Data Analytics & Insights",
    description:
      "Transform raw data into clear, actionable intelligence with AI-driven dashboards, automated reporting pipelines, and analytics systems built for decision-makers.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications with intuitive interfaces, built-in security layers, and smart AI features that perform seamlessly across iOS and Android.",
  },
  {
    icon: MessagesSquare,
    title: "IT Consultancy",
    description:
      "Strategic technology guidance to align your IT investments with business goals — from security audits and system architecture reviews to AI adoption and digital transformation roadmaps.",
  },
  {
    icon: GraduationCap,
    title: "Software Development Training",
    description:
      "Hands-on training programs for tech students and enthusiasts — from beginner fundamentals to advanced development practices, secure coding, and AI-powered tooling.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-gradient-to-b from-zooft-light/40 via-white to-white hexagon-bg overflow-hidden"
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
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From custom-built software to mobile apps and developer training
            — we deliver the technology and knowledge that helps businesses and
            individuals thrive.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                whileHover={{ y: -4 }}
              >
                <Card className="group h-full bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:border-zooft-primary/30 transition-all duration-300 ease-out text-center">
                  <CardHeader className="pt-10 pb-4 items-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zooft-primary to-zooft-secondary flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-zooft-primary/25 transition-shadow duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pb-10">
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

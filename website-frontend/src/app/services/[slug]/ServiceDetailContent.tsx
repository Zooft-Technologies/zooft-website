"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Code,
  Globe,
  DatabaseZap,
  Smartphone,
  MessagesSquare,
  GraduationCap,
  Check,
  Star,
  ArrowRight,
  ArrowLeft,
  Quote,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/types";
import { services } from "@/data/content";
import { fadeUp } from "@/lib/animations";

const serviceIcons: Record<string, LucideIcon> = {
  "software-development": Code,
  "web-development": Globe,
  "data-analytics": DatabaseZap,
  "mobile-development": Smartphone,
  "it-consultancy": MessagesSquare,
  "dev-training": GraduationCap,
};

export default function ServiceDetailContent({
  service,
}: {
  service: Service;
}) {
  const Icon = serviceIcons[service.id] || Code;
  const currentIndex = services.findIndex((s) => s.id === service.id);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService =
    currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDescription,
    provider: {
      "@type": "Organization",
      name: "Zooft Technologies",
      url: "https://zoofttechnologies.com",
    },
    areaServed: {
      "@type": "Place",
      name: "Uganda, East Africa",
    },
    serviceType: service.title,
  };

  // FAQ structured data
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-zooft-primary via-zooft-dark to-zooft-accent text-white overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to All Services
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <motion.div
              className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <Icon className="h-10 w-10 text-white" />
            </motion.div>
            <div>
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                {service.title}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                {service.description}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description + Features/Benefits */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Description */}
            <motion.div
              className="lg:col-span-3"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What We <span className="gradient-text">Deliver</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {service.longDescription}
              </p>
              <Button
                size="lg"
                className="bg-zooft-primary hover:bg-zooft-dark text-white px-8 py-6 text-base font-semibold"
                asChild
              >
                <Link href="/contact" className="flex items-center">
                  Start Your Project{" "}
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>

            {/* Right: Features + Benefits */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={1}
              >
                <Card className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="font-semibold text-gray-900 mb-5 text-sm uppercase tracking-wide">
                      What You Get
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <div className="w-6 h-6 rounded-lg bg-zooft-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check
                              size={14}
                              className="text-zooft-primary"
                            />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={2}
              >
                <Card className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="font-semibold text-gray-900 mb-5 text-sm uppercase tracking-wide">
                      Why It Matters
                    </h3>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <Star
                            size={16}
                            className="text-yellow-400 fill-yellow-400 mt-0.5 shrink-0"
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-gray-50 to-white overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-zooft-primary to-zooft-secondary flex items-center justify-center mx-auto mb-8">
              <Quote className="h-7 w-7 text-white" />
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 italic">
              &ldquo;{service.testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900 text-lg">
                {service.testimonial.name}
              </p>
              <p className="text-gray-500">
                {service.testimonial.role},{" "}
                {service.testimonial.company}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="py-16 md:py-24 overflow-hidden"
      >
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
              Common Questions
            </span>
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="bg-white border border-gray-100 rounded-2xl px-6 shadow-[0_4px_12px_rgba(0,0,0,0.04)] data-[state=open]:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-zooft-primary py-5 text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Navigation Between Services */}
      <section className="py-12 border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevService ? (
              <Link
                href={`/services/${prevService.id}`}
                className="group flex items-center gap-3 text-gray-600 hover:text-zooft-primary transition-colors"
              >
                <ArrowLeft
                  size={18}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Previous
                  </p>
                  <p className="font-semibold">{prevService.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextService ? (
              <Link
                href={`/services/${nextService.id}`}
                className="group flex items-center gap-3 text-gray-600 hover:text-zooft-primary transition-colors text-right sm:ml-auto"
              >
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Next
                  </p>
                  <p className="font-semibold">{nextService.title}</p>
                </div>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
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
              Ready to Start?
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
            Let&apos;s Build Something Great
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
          >
            Tell us about your {service.title.toLowerCase()} needs and
            let&apos;s explore how we can help.
          </motion.p>
          <motion.div
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
              <Link href="/contact" className="flex items-center">
                Contact Us <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Quote,
  Users,
  Repeat,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/content";
import TechLogos from "@/components/TechLogos";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

const serviceIcons: Record<string, LucideIcon> = {
  "software-development": Code,
  "web-development": Globe,
  "data-analytics": DatabaseZap,
  "mobile-development": Smartphone,
  "it-consultancy": MessagesSquare,
  "dev-training": GraduationCap,
};

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We listen to understand your business goals, challenges, and users before writing a single line of code.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "We design a detailed project roadmap with clear milestones, architecture decisions, and timelines.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "We build iteratively using agile sprints, with regular demos and feedback loops to keep you in control.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We deploy, monitor, and provide ongoing support to ensure your product runs smoothly in production.",
  },
];

const engagementModels = [
  {
    icon: Handshake,
    title: "Fixed Price",
    description:
      "Ideal for projects with well-defined scope and requirements. You get a clear budget upfront with no surprises.",
    bestFor: "MVPs, landing pages, small to mid-sized projects",
  },
  {
    icon: Repeat,
    title: "Monthly Retainer",
    description:
      "A dedicated allocation of development hours each month for ongoing feature work, maintenance, and support.",
    bestFor: "Growing products, continuous improvement, long-term partnerships",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "A full development team embedded in your workflow — designers, developers, and QA engineers working as your own.",
    bestFor: "Large-scale projects, enterprise solutions, rapid scaling",
  },
];

const generalFaqs = [
  {
    question: "How do we get started with a project?",
    answer:
      "It starts with a conversation. Reach out through our contact page or WhatsApp, and we will schedule a free discovery call to understand your needs, timeline, and budget. From there, we provide a detailed proposal.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Most projects run 8–16 weeks from discovery to launch, depending on complexity. We work in 2-week agile sprints so you see progress regularly and can provide feedback throughout the process.",
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer:
      "We work with both. Whether you are a startup building your first MVP or an established company modernizing legacy systems, we tailor our approach to your stage and budget.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We have delivered solutions across fintech, healthcare, agriculture, logistics, e-commerce, education, and more. Our team adapts quickly to domain-specific requirements.",
  },
  {
    question: "How do you ensure quality and security?",
    answer:
      "Every project includes code reviews, automated testing, security best practices (OWASP), and CI/CD pipelines. We follow secure-by-default principles and conduct regular security audits.",
  },
  {
    question: "Can you take over an existing project?",
    answer:
      "Yes. We regularly take over and improve existing codebases. We start with a technical audit to assess the current state, then create a prioritized plan for improvements and new features.",
  },
];

// JSON-LD structured data for the services page
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Zooft Technologies Services",
  description:
    "Custom software development, web and mobile apps, data analytics, IT consultancy, and developer training in Uganda and East Africa.",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: `https://zoofttechnologies.com/services/${service.id}`,
      provider: {
        "@type": "Organization",
        name: "Zooft Technologies",
      },
    },
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: generalFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative max-w-3xl mx-auto">
      {/* Static background line */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
      {/* Animated progress line */}
      <motion.div
        className="absolute left-6 md:left-8 top-0 w-0.5 bg-gradient-to-b from-zooft-primary to-zooft-secondary origin-top"
        style={{ height: lineHeight }}
      />

      <div className="space-y-12 md:space-y-16">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.step}
            className="relative flex items-start gap-6 md:gap-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            {/* Step circle */}
            <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-zooft-primary to-zooft-secondary flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(22,160,133,0.3)]">
              <span className="text-white font-bold text-sm md:text-base">
                {step.step}
              </span>
            </div>

            {/* Content */}
            <div className="pt-1 md:pt-3">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPageContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-zooft-primary via-zooft-dark to-zooft-accent text-white overflow-hidden">
        <div className="container mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-sm font-semibold rounded-full mb-4">
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            From custom software and mobile apps to data analytics and developer
            training — we deliver secure, AI-powered solutions that help
            businesses scale.
          </motion.p>
        </div>
      </section>

      {/* Services Detail Grid */}
      <section
        aria-labelledby="services-detail-heading"
        className="py-20 md:py-28 overflow-hidden"
      >
        <div className="container mx-auto">
          <h2 id="services-detail-heading" className="sr-only">
            Our Services in Detail
          </h2>

          <div className="space-y-12">
            {services.map((service) => {
              const Icon = serviceIcons[service.id] || Code;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  custom={0}
                >
                  <Card className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row">
                      {/* Left: Info */}
                      <div className="flex-1 p-8 md:p-10">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zooft-primary to-zooft-secondary flex items-center justify-center shrink-0">
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          <CardTitle className="text-2xl font-bold text-gray-900">
                            {service.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
                          {service.description}
                        </CardDescription>

                        {/* Testimonial snippet */}
                        <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
                          <div className="flex items-start gap-3">
                            <Quote
                              size={16}
                              className="text-zooft-primary shrink-0 mt-1"
                            />
                            <div>
                              <p className="text-gray-600 text-sm italic leading-relaxed">
                                &ldquo;{service.testimonial.quote}&rdquo;
                              </p>
                              <p className="text-gray-900 text-sm font-semibold mt-2">
                                {service.testimonial.name}
                              </p>
                              <p className="text-gray-400 text-xs">
                                {service.testimonial.role},{" "}
                                {service.testimonial.company}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Button
                            className="bg-zooft-primary hover:bg-zooft-dark text-white"
                            asChild
                          >
                            <Link
                              href={`/services/${service.id}`}
                              className="flex items-center"
                            >
                              Learn More{" "}
                              <ArrowRight className="ml-2" size={16} />
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            className="border-zooft-primary/30 text-zooft-primary hover:bg-zooft-primary hover:text-white"
                            asChild
                          >
                            <Link href="/contact">Get a Quote</Link>
                          </Button>
                        </div>
                      </div>

                      {/* Right: Features & Benefits */}
                      <div className="flex-1 bg-gray-50 p-8 md:p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                              What You Get
                            </h4>
                            <ul className="space-y-3">
                              {service.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-gray-700 text-sm"
                                >
                                  <Check
                                    size={16}
                                    className="text-zooft-primary mt-0.5 shrink-0"
                                  />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                              Why It Matters
                            </h4>
                            <ul className="space-y-3">
                              {service.benefits.map((benefit, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-gray-700 text-sm"
                                >
                                  <Star
                                    size={14}
                                    className="text-yellow-400 fill-yellow-400 mt-0.5 shrink-0"
                                  />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section
        aria-labelledby="process-heading"
        className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-gray-50 to-white overflow-hidden"
      >
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <span className="inline-block px-4 py-1.5 bg-zooft-primary/10 text-zooft-primary text-sm font-semibold rounded-full mb-4">
              How We Work
            </span>
            <h2
              id="process-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A proven four-step methodology that ensures successful project
              delivery, every time.
            </p>
          </motion.div>

          <ProcessTimeline />
        </div>
      </section>

      {/* Engagement Models */}
      <section
        aria-labelledby="engagement-heading"
        className="py-20 md:py-28 overflow-hidden"
      >
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <span className="inline-block px-4 py-1.5 bg-zooft-primary/10 text-zooft-primary text-sm font-semibold rounded-full mb-4">
              Flexible Partnerships
            </span>
            <h2
              id="engagement-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              How We <span className="gradient-text">Engage</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Choose the engagement model that fits your project scope, timeline,
              and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => {
              const ModelIcon = model.icon;
              return (
                <motion.div
                  key={model.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                  whileHover={{ y: -4 }}
                >
                  <Card className="group h-full bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:border-zooft-primary/30 transition-all duration-300 ease-out">
                    <CardHeader className="pt-10 pb-4 items-center text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-zooft-primary to-zooft-secondary flex items-center justify-center mb-4">
                        <ModelIcon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {model.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-10 text-center">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {model.description}
                      </p>
                      <div className="inline-block bg-zooft-light rounded-full px-4 py-1.5">
                        <p className="text-zooft-primary text-xs font-semibold">
                          Best for: {model.bestFor}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <p className="text-gray-500 text-sm">
              Not sure which model fits?{" "}
              <Link
                href="/contact"
                className="text-zooft-primary font-semibold hover:underline"
              >
                Let&apos;s talk
              </Link>{" "}
              — we&apos;ll help you find the right fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section
        aria-labelledby="tech-heading"
        className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-gray-50 to-white overflow-hidden"
      >
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <span className="inline-block px-4 py-1.5 bg-zooft-primary/10 text-zooft-primary text-sm font-semibold rounded-full mb-4">
              Our Stack
            </span>
            <h2
              id="tech-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Technologies We <span className="gradient-text">Use</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Modern tools and frameworks to build fast, secure, and scalable
              solutions.
            </p>
          </motion.div>

          <TechLogos />
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="py-20 md:py-28 overflow-hidden"
      >
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <span className="inline-block px-4 py-1.5 bg-zooft-primary/10 text-zooft-primary text-sm font-semibold rounded-full mb-4">
              Got Questions?
            </span>
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about working with us.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={1}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {generalFaqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="bg-white border border-gray-100 rounded-2xl px-6 shadow-[0_4px_12px_rgba(0,0,0,0.04)] data-[state=open]:shadow-[0_8px_24px_rgba(0,0,0,0.08)] data-[state=open]:border-zooft-primary/20 transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-zooft-primary py-5 text-base [&[data-state=open]]:text-zooft-primary">
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
              Let&apos;s Get Started
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
            Have a Project in Mind?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
          >
            Tell us about your project and let&apos;s explore how our services
            can help you achieve your goals.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
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

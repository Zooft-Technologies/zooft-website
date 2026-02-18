"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

const benefits = [
  "25+ projects successfully delivered",
  "Expert team of certified developers",
  "Security-first development approach",
  "AI-powered, modern tech stack",
  "Agile delivery with clear timelines",
  "Ongoing support and maintenance",
];

const AboutSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-gray-50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Image Side */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            <div className="relative ml-6 mt-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-zooft-primary to-zooft-secondary opacity-10 rounded-3xl transform translate-x-4 translate-y-4" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Zooft Technologies team collaborating on software development projects"
                width={800}
                height={600}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-3xl shadow-xl relative z-10"
              />
              <motion.div
                className="absolute -top-6 -left-6 p-5 bg-white rounded-xl shadow-lg z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-zooft-primary">
                    98%
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    Client Satisfaction
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
            >
              <span className="inline-block px-4 py-1.5 bg-zooft-primary/10 text-zooft-primary text-sm font-semibold rounded-full mb-4">
                Who We Are
              </span>
              <h2
                id="about-heading"
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                About{" "}
                <span className="gradient-text">Zooft Technologies</span>
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-gray-700 mb-5 leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
            >
              We are a Ugandan technology company building secure, AI-powered
              software that helps businesses operate smarter. From custom web
              and mobile applications to data-driven analytics platforms, we
              turn complex challenges into clean, scalable digital products.
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={2}
            >
              Beyond building software, we train the next generation of
              developers and provide strategic IT consultancy — combining deep
              technical expertise with a genuine understanding of local and
              regional business needs.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-zooft-primary to-zooft-secondary flex items-center justify-center mr-3 shrink-0">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

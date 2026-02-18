"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

const SolutionsSection = () => {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="py-20 md:py-28 bg-gradient-to-br from-zooft-primary via-zooft-dark to-zooft-accent text-white overflow-hidden"
    >
      <div className="container mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
        >
          <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-sm font-semibold rounded-full mb-4">
            Let&apos;s Build Together
          </span>
        </motion.div>

        <motion.h2
          id="solutions-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
        >
          Ready to Transform Your Business?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
        >
          Whether you need a custom web application, a mobile app, data-driven
          insights, or strategic IT guidance — our team is ready to turn your
          vision into a secure, scalable digital product.
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
              Start Your Project <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white bg-white/10 text-white hover:bg-white hover:text-zooft-primary px-8 py-6 text-lg"
            asChild
          >
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;

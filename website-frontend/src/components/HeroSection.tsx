"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";

const projectImages = [
  "/images/projects/kubwa.jpg",
  "/images/team/clintonie.jpg",
  "/images/projects/wardrobe.jpg",
  "/images/team/gibson.jpg",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projectImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 hexagon-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="gradient-text">Transforming</span> Ideas into{" "}
              <span className="gradient-text">Digital Reality</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Zooft Technologies provides innovative tech solutions to help
              businesses thrive in the digital era.
              <span className="block mt-2 font-medium italic text-zooft-dark">
                The better way to do it.
              </span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <Button
                className="bg-zooft-primary hover:bg-zooft-dark text-white px-8 py-6 text-lg"
                asChild
              >
                <Link href="/services" className="flex items-center">
                  Our Services <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-zooft-primary text-zooft-primary hover:bg-zooft-light px-8 py-6 text-lg"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>

          {/* Image Carousel */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-zooft-primary/5 to-zooft-secondary/5 rounded-3xl transform -rotate-3" />

              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 aspect-[4/3]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={currentIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" as const }}
                  >
                    <ImageWithFallback
                      src={projectImages[currentIndex]}
                      alt="Zooft Technologies"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Dots */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {projectImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className="group p-1"
                  >
                    <motion.div
                      className="h-2 rounded-full bg-zooft-primary"
                      animate={{ width: i === currentIndex ? 24 : 8 }}
                      transition={{ duration: 0.3 }}
                      style={{ opacity: i === currentIndex ? 1 : 0.3 }}
                    />
                  </button>
                ))}
              </div>

              {/* Stats Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 p-4 bg-white rounded-xl shadow-lg z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-zooft-primary" />
                  <p className="font-semibold text-gray-800">
                    <span className="text-zooft-primary">100+</span> Projects
                    Delivered
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

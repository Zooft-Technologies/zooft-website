"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Megaphone,
  Palette,
  BarChart3,
  Code,
  Figma,
  Briefcase,
  Shield,
  GraduationCap,
  Globe,
  Clock,
  Heart,
  Sprout,
  Users,
  Laptop,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

interface RoleCategory {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  openRoles: number;
  hiring: boolean;
}

const roleCategories: RoleCategory[] = [
  {
    slug: "digital-marketing-and-sales",
    icon: Megaphone,
    title: "Digital Marketing & Sales",
    tagline:
      "Help us tell our story and connect with businesses that need great software.",
    openRoles: 2,
    hiring: true,
  },
  {
    slug: "graphics-design",
    icon: Palette,
    title: "Graphics Design",
    tagline:
      "Create visuals that communicate clearly — from brand assets to social content.",
    openRoles: 0,
    hiring: false,
  },
  {
    slug: "data-science-and-analytics",
    icon: BarChart3,
    title: "Data Science & Analytics",
    tagline:
      "Turn raw data into insights that help businesses make better decisions.",
    openRoles: 0,
    hiring: false,
  },
  {
    slug: "software-engineering",
    icon: Code,
    title: "Software Engineering",
    tagline:
      "Build secure, AI-powered applications that solve real business problems.",
    openRoles: 0,
    hiring: false,
  },
  {
    slug: "ui-ux-design",
    icon: Figma,
    title: "UI/UX Design",
    tagline:
      "Design interfaces that people genuinely enjoy using — research-driven and user-centered.",
    openRoles: 0,
    hiring: false,
  },
  {
    slug: "project-management",
    icon: Briefcase,
    title: "Project Management",
    tagline:
      "Keep projects on track, teams aligned, and clients informed at every milestone.",
    openRoles: 0,
    hiring: false,
  },
  {
    slug: "quality-assurance",
    icon: Shield,
    title: "Quality Assurance",
    tagline:
      "Ensure every product we ship meets the highest standards of quality and security.",
    openRoles: 0,
    hiring: false,
  },
  {
    slug: "internships-and-training",
    icon: GraduationCap,
    title: "Internships & Training",
    tagline:
      "Learn by doing — hands-on remote internships for students and tech enthusiasts.",
    openRoles: -1, // always open
    hiring: true,
  },
];

const cultureValues = [
  {
    icon: Globe,
    title: "Remote-First, Always",
    description:
      "We believe the future of work is remote. Our team works from wherever they are most productive — home, a co-working space, or a coffee shop. We have occasional in-person meetups in Kampala, but remote is our default.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description:
      "We care about output, not hours logged. As long as you are available for team syncs and deliver quality work, you manage your own schedule. We trust our people.",
  },
  {
    icon: Sprout,
    title: "Room to Grow",
    description:
      "We are a startup — which means you will wear different hats, tackle real challenges, and grow faster than at a large company. We invest in your learning and give you ownership of your work.",
  },
  {
    icon: Heart,
    title: "Honest Culture",
    description:
      "We are not going to promise perks we cannot deliver. What we can promise: meaningful work, a supportive team, fair treatment, and a genuine commitment to building something worth being part of.",
  },
  {
    icon: Users,
    title: "Small Team, Big Impact",
    description:
      "Every person here matters. Your ideas will be heard, your contributions will be visible, and you will directly shape the products and the company as we grow together.",
  },
  {
    icon: Laptop,
    title: "Modern Tools & Practices",
    description:
      "We work with modern tech stacks, agile workflows, and AI-powered development tools. You will be on the cutting edge — not maintaining legacy systems from 2005.",
  },
];

export default function CareersPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-zooft-primary via-zooft-dark to-zooft-accent text-white overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-sm font-semibold rounded-full mb-4">
                  Join Our Team
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Build the Future
                  <br />
                  <span className="text-white/80">With Us</span>
                </h1>
              </motion.div>
              <motion.p
                className="text-lg md:text-xl text-white/85 max-w-xl leading-relaxed mb-8"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                We are a remote-first software company based in Uganda, building
                secure, AI-powered solutions for businesses across East Africa.
                We are looking for curious, driven people who want to do
                meaningful work — from anywhere.
              </motion.p>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                <Button
                  size="lg"
                  className="bg-white text-zooft-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold"
                  asChild
                >
                  <a href="#open-roles" className="flex items-center">
                    View Open Roles{" "}
                    <ArrowRight className="ml-2" size={18} />
                  </a>
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="hidden lg:block"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/programmer-working.jpg"
                  alt="Remote developer working on software at Zooft Technologies"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Remote-First */}
      <section className="py-20 md:py-28 overflow-hidden">
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
              Why Zooft
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The future of working is remote — and the earlier we embrace it,
              the better positioned we all are. Here is what it is like to be
              part of Zooft.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                  whileHover={{ y: -4 }}
                >
                  <Card className="h-full bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:border-zooft-primary/30 transition-all duration-300">
                    <CardContent className="p-7">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zooft-primary to-zooft-secondary flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-gray-50 to-white overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
            >
              <Image
                src="/images/business-meeting.jpg"
                alt="Zooft Technologies team collaboration"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
            >
              <span className="inline-block px-4 py-1.5 bg-zooft-primary/10 text-zooft-primary text-sm font-semibold rounded-full mb-4">
                What to Expect
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Working at <span className="gradient-text">Zooft</span>
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: BookOpen,
                    text: "Compliance with employment laws of the country where you reside",
                  },
                  {
                    icon: Clock,
                    text: "Paid time off and vacation days",
                  },
                  {
                    icon: Sprout,
                    text: "A conducive environment for personal and professional growth",
                  },
                  {
                    icon: Laptop,
                    text: "Remote-first flexibility with optional in-person collaboration in Kampala",
                  },
                  {
                    icon: Users,
                    text: "Mentorship and knowledge sharing across the team",
                  },
                  {
                    icon: Heart,
                    text: "An honest, respectful workplace where your voice matters",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-zooft-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={18} className="text-zooft-primary" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section
        id="open-roles"
        aria-labelledby="roles-heading"
        className="py-20 md:py-28 overflow-hidden scroll-mt-24"
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
              Open Positions
            </span>
            <h2
              id="roles-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Explore <span className="gradient-text">Roles</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Browse our departments below. Click any category to learn more
              about the role, required skills, and how to apply.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {roleCategories.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.slug}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  custom={index}
                  whileHover={{ y: -3 }}
                >
                  <Link href={`/careers/${role.slug}`} className="block h-full">
                    <Card className="group h-full bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:border-zooft-primary/30 transition-all duration-300 overflow-hidden">
                      <CardContent className="p-7 flex items-start gap-5">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zooft-primary to-zooft-secondary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-bold text-gray-900 group-hover:text-zooft-primary transition-colors">
                              {role.title}
                            </h3>
                            <ArrowRight
                              size={16}
                              className="text-gray-300 group-hover:text-zooft-primary group-hover:translate-x-1 transition-all shrink-0 ml-2"
                            />
                          </div>
                          <p className="text-gray-500 text-sm leading-relaxed mb-3">
                            {role.tagline}
                          </p>
                          {role.hiring ? (
                            role.openRoles === -1 ? (
                              <span className="inline-block px-3 py-1 bg-zooft-primary/10 text-zooft-primary text-xs font-semibold rounded-full">
                                Always Open
                              </span>
                            ) : (
                              <span className="inline-block px-3 py-1 bg-zooft-primary/10 text-zooft-primary text-xs font-semibold rounded-full">
                                {role.openRoles} Open Role
                                {role.openRoles > 1 ? "s" : ""}
                              </span>
                            )
                          ) : (
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full">
                              No Current Openings
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internships Highlight */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-gray-50 to-white overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
            >
              <span className="inline-block px-4 py-1.5 bg-zooft-primary/10 text-zooft-primary text-sm font-semibold rounded-full mb-4">
                For Students & Tech Enthusiasts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Remote <span className="gradient-text">Internships</span> &
                Training
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Go from novice to expert with hands-on, project-based training
                led by our senior team. Whether you are a university student
                completing an academic placement, a self-taught learner, or
                someone switching careers — this program is designed to give you
                real skills, a real portfolio, and a real head start.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                Imagine building your own fully functional e-commerce platform,
                a data dashboard, or a mobile app — from zero to finish — with
                guidance every step of the way. That is the kind of
                life-changing project you will work on here.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Training fees range from{" "}
                <span className="font-semibold text-gray-700">
                  UGX 150,000 to 500,000
                </span>{" "}
                depending on the internship period and area of study. Apply
                through our form and we will get back to you for a detailed
                discussion.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Software Development",
                  "Graphics Design",
                  "Project Management",
                  "Data Science",
                  "AI & ML",
                  "Microsoft Office",
                  "UI/UX Design",
                  "Digital Marketing",
                  "Cloud & DevOps",
                ].map((track) => (
                  <span
                    key={track}
                    className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-full"
                  >
                    {track}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-zooft-primary hover:bg-zooft-dark text-white px-6"
                  asChild
                >
                  <a
                    href="https://forms.gle/8gJgGx97GH4pTKWE7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Apply Now{" "}
                    <ArrowRight className="ml-2" size={16} />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-zooft-primary/30 text-zooft-primary hover:bg-zooft-primary hover:text-white px-6"
                  asChild
                >
                  <Link
                    href="/careers/internships-and-training"
                    className="flex items-center"
                  >
                    Learn More
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
            >
              <Image
                src="/images/innovative-ideas.jpg"
                alt="Students collaborating on tech projects at Zooft Technologies"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </motion.div>
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
              Don&apos;t See Your Role?
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
            We&apos;re Always Open to Great People
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
          >
            If you believe you can contribute to what we are building, reach out.
            Send us your portfolio or CV and tell us how you would like to help.
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

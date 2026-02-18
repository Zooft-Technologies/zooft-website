"use client";

import { motion } from "framer-motion";
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
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Users,
  Award,
  Handshake,
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";
import { companyInfo, teamMembers } from "@/data/content";
import ImageWithFallback from "@/components/ImageWithFallback";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

const valueIcons = [Lightbulb, ShieldCheck, Users, Award, Handshake];

const stats = [
  { number: "25+", label: "Projects Delivered" },
  { number: "20+", label: "Happy Clients" },
  { number: "10+", label: "Team Members" },
  { number: "98%", label: "Client Satisfaction" },
];

export default function AboutPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-zooft-primary via-zooft-dark to-zooft-accent text-white overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <motion.div
              className="w-full lg:w-1/2"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-sm font-semibold rounded-full mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Building the Future of{" "}
                <span className="text-zooft-light">Technology</span> in East
                Africa
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                {companyInfo.description}
              </p>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-3xl transform translate-x-4 translate-y-4" />
                <ImageWithFallback
                  src="/images/business-meeting.jpg"
                  alt="Zooft Technologies team in a business meeting"
                  width={700}
                  height={470}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="rounded-3xl shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        aria-labelledby="mission-vision-heading"
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
              What Drives Us
            </span>
            <h2
              id="mission-vision-heading"
              className="text-3xl md:text-4xl font-bold"
            >
              Our Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
            >
              <Card className="h-full bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zooft-primary to-zooft-secondary flex items-center justify-center mb-4">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {companyInfo.mission}
                  </p>
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
              <Card className="h-full bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zooft-primary to-zooft-secondary flex items-center justify-center mb-4">
                    <Eye className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {companyInfo.vision}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-zooft-primary via-zooft-dark to-zooft-accent text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/75 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        aria-labelledby="values-heading"
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
              What We Stand For
            </span>
            <h2
              id="values-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The principles that guide every decision we make and every line of
              code we write.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyInfo.values.map((value, index) => {
              const Icon = valueIcons[index];
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
                  <Card className="group h-full bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:border-zooft-primary/30 transition-all duration-300 ease-out text-center">
                    <CardHeader className="pt-10 pb-4 items-center">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zooft-primary to-zooft-secondary flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-zooft-primary/25 transition-shadow duration-300">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-10">
                      <CardDescription className="text-gray-600 text-base leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <motion.div
              className="w-full lg:w-1/2"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-zooft-primary to-zooft-secondary opacity-10 rounded-3xl transform translate-x-4 translate-y-4" />
                <ImageWithFallback
                  src="/images/programmer-working.jpg"
                  alt="Software developer working on code at Zooft Technologies"
                  width={700}
                  height={470}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="rounded-3xl shadow-xl relative z-10"
                />
              </div>
            </motion.div>

            <div className="w-full lg:w-1/2">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={0}
              >
                <span className="inline-block px-4 py-1.5 bg-zooft-primary/10 text-zooft-primary text-sm font-semibold rounded-full mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  From Kampala to the{" "}
                  <span className="gradient-text">World</span>
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
                Founded in 2025 in Nakawa, Kampala, Zooft Technologies was born
                from a simple belief: that businesses in Uganda and East Africa
                deserve the same caliber of technology solutions available
                anywhere in the world.
              </motion.p>

              <motion.p
                className="text-lg text-gray-700 mb-5 leading-relaxed"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={2}
              >
                What started as a small team of passionate developers has grown
                into a full-service technology company delivering custom
                software, mobile applications, data analytics, and IT
                consultancy to clients across the region.
              </motion.p>

              <motion.p
                className="text-lg text-gray-700 leading-relaxed"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={3}
              >
                Beyond building software, we are invested in training the next
                generation of developers — because we believe that growing
                Uganda&apos;s tech talent is just as important as growing its
                tech industry.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        aria-labelledby="team-heading"
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
              The People Behind Zooft
            </span>
            <h2
              id="team-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Passionate professionals dedicated to building exceptional
              technology solutions for businesses across East Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                whileHover={{ y: -4 }}
              >
                <Card className="group h-full bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:border-zooft-primary/30 transition-all duration-300 ease-out text-center">
                  <CardHeader className="pt-8 pb-3 items-center">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-zooft-primary/20 to-zooft-secondary/20 p-1 mb-4">
                      <div className="w-full h-full rounded-full overflow-hidden relative">
                        <ImageWithFallback
                          src={member.imageUrl}
                          alt={`${member.name} - ${member.position} at Zooft Technologies`}
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-zooft-primary font-semibold text-sm">
                      {member.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-8">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex justify-center gap-3">
                      {member.socialLinks.linkedin && (
                        <a
                          href={member.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                          className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gradient-to-br hover:from-zooft-primary hover:to-zooft-secondary hover:text-white transition-all duration-300"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                      {member.socialLinks.email && (
                        <a
                          href={`mailto:${member.socialLinks.email}`}
                          aria-label={`Email ${member.name}`}
                          className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gradient-to-br hover:from-zooft-primary hover:to-zooft-secondary hover:text-white transition-all duration-300"
                        >
                          <Mail size={16} />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Let&apos;s Work Together
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
            Ready to Build Something Great?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
          >
            Partner with Zooft Technologies and let&apos;s transform your ideas
            into secure, scalable digital products that drive real results.
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
    </>
  );
}

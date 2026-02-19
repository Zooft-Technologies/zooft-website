"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Megaphone,
  Palette,
  BarChart3,
  Code,
  Figma,
  Briefcase,
  Shield,
  GraduationCap,
  Check,
  Globe,
  Clock,
  Heart,
  Sprout,
  Rocket,
  Award,
  Handshake,
  Star,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

export interface Role {
  slug: string;
  icon: LucideIcon;
  title: string;
  metaDescription: string;
  description: string;
  hiring: boolean;
  openRoles: number;
  responsibilities: string[];
  skills: string[];
  niceToHave: string[];
  isInternship?: boolean;
  internshipTracks?: string[];
  applyNote: string;
}

const roleIcons: Record<string, LucideIcon> = {
  "digital-marketing-and-sales": Megaphone,
  "graphics-design": Palette,
  "data-science-and-analytics": BarChart3,
  "software-engineering": Code,
  "ui-ux-design": Figma,
  "project-management": Briefcase,
  "quality-assurance": Shield,
  "internships-and-training": GraduationCap,
};

export const roles: Role[] = [
  {
    slug: "digital-marketing-and-sales",
    icon: Megaphone,
    title: "Digital Marketing & Sales",
    metaDescription:
      "Join Zooft Technologies as a Digital Marketer or Sales Representative. Remote-first role helping connect businesses with great software solutions in Uganda and East Africa.",
    description:
      "Our marketing and sales team is the bridge between Zooft and the businesses we serve. You will help craft our messaging, manage our online presence, generate leads, and build relationships with potential clients across Uganda and East Africa. This is a hands-on role where you will directly impact our growth.",
    hiring: true,
    openRoles: 2,
    responsibilities: [
      "Develop and execute digital marketing campaigns across social media, email, and search",
      "Create compelling content that communicates the value of our services",
      "Manage our social media accounts (LinkedIn, X, Instagram, TikTok, YouTube)",
      "Generate and qualify inbound leads through content marketing and outreach",
      "Conduct sales conversations with potential clients and understand their needs",
      "Track marketing metrics and report on campaign performance",
      "Collaborate with the design team on brand assets and campaign visuals",
    ],
    skills: [
      "Experience with social media marketing and content creation",
      "Strong written and verbal communication in English",
      "Familiarity with digital marketing tools (Google Analytics, social media schedulers, email platforms)",
      "Ability to communicate technical services in clear, business-friendly language",
      "Self-motivated and comfortable working independently in a remote setting",
    ],
    niceToHave: [
      "Experience marketing B2B technology services",
      "Knowledge of SEO and content marketing strategies",
      "Familiarity with CRM tools",
      "Previous experience in the East African market",
    ],
    applyNote:
      "These roles are always available. If you are passionate about tech marketing and sales, reach out to us with your CV and a brief note about why you would be a great fit.",
  },
  {
    slug: "graphics-design",
    icon: Palette,
    title: "Graphics Design",
    metaDescription:
      "Explore Graphics Design roles at Zooft Technologies. Create brand assets, social media visuals, and marketing materials for a remote-first tech company in Uganda.",
    description:
      "As a graphic designer at Zooft, you would create visual content that represents our brand and supports our marketing and product teams. From social media graphics and presentation decks to pitch materials and brand guidelines — your work would shape how the world sees Zooft Technologies.",
    hiring: false,
    openRoles: 0,
    responsibilities: [
      "Design brand-consistent visuals for social media, marketing campaigns, and presentations",
      "Create illustrations, infographics, and visual assets for our website and blog",
      "Collaborate with the marketing team on campaign visuals and ad creatives",
      "Maintain and evolve our brand identity and design system",
      "Design pitch decks and client-facing materials",
      "Support the product team with UI assets when needed",
    ],
    skills: [
      "Proficiency in design tools (Figma, Adobe Creative Suite, or Canva Pro)",
      "Strong understanding of typography, color theory, and visual hierarchy",
      "Ability to translate ideas into clean, professional visuals",
      "Experience creating designs for digital platforms (social media, web)",
      "Good communication and ability to receive and implement feedback",
    ],
    niceToHave: [
      "Motion graphics and video editing skills",
      "Experience with brand identity projects",
      "Familiarity with UI/UX design principles",
      "Portfolio showcasing diverse design work",
    ],
    applyNote:
      "There are no current openings in this department, but we are always interested in talented designers. Send us your portfolio and we will keep you in mind for future opportunities.",
  },
  {
    slug: "data-science-and-analytics",
    icon: BarChart3,
    title: "Data Science & Analytics",
    metaDescription:
      "Explore Data Science and Analytics roles at Zooft Technologies. Build dashboards, predictive models, and AI-driven insights for businesses across East Africa.",
    description:
      "Our data team helps businesses make sense of their information. As a data scientist or analyst at Zooft, you would build dashboards, create predictive models, design data pipelines, and deliver insights that drive real business decisions. You would work directly with clients to understand their data challenges and deliver solutions that create measurable impact.",
    hiring: false,
    openRoles: 0,
    responsibilities: [
      "Design and build custom analytics dashboards and reporting systems",
      "Develop predictive models and machine learning solutions",
      "Clean, transform, and analyze data from diverse sources",
      "Create clear data visualizations that communicate insights to non-technical stakeholders",
      "Collaborate with engineering teams to integrate analytics into software products",
      "Stay current with emerging tools and techniques in data science and AI",
    ],
    skills: [
      "Proficiency in Python, SQL, and data analysis libraries (pandas, NumPy, scikit-learn)",
      "Experience with data visualization tools (D3.js, Recharts, Power BI, or Metabase)",
      "Understanding of statistical analysis and machine learning fundamentals",
      "Ability to communicate complex findings in simple, actionable terms",
      "Experience working with databases (PostgreSQL, MongoDB, or similar)",
    ],
    niceToHave: [
      "Experience with cloud data platforms (AWS, GCP, or Azure)",
      "Knowledge of deep learning frameworks (TensorFlow, PyTorch)",
      "Experience building real-time data pipelines",
      "Domain experience in fintech, agriculture, or healthcare data",
    ],
    applyNote:
      "There are no current openings in data science, but we regularly take on new analytics projects. Send us your CV and we will reach out when a suitable role opens.",
  },
  {
    slug: "software-engineering",
    icon: Code,
    title: "Software Engineering",
    metaDescription:
      "Explore Software Engineering roles at Zooft Technologies. Build secure, AI-powered web and mobile applications using React, Next.js, Node.js, Python, and more.",
    description:
      "Software engineers at Zooft build the products at the heart of everything we do — custom web and mobile applications, APIs, AI integrations, and data platforms. You would work in small, focused teams using modern tech stacks (React, Next.js, Node.js, Python, React Native) with a strong emphasis on security, clean code, and user experience.",
    hiring: false,
    openRoles: 0,
    responsibilities: [
      "Design, build, and maintain web and mobile applications",
      "Write clean, secure, well-tested code following best practices",
      "Collaborate with designers and product managers to deliver features",
      "Participate in code reviews and contribute to architectural decisions",
      "Integrate AI-powered features and third-party APIs",
      "Deploy and monitor applications in production environments",
    ],
    skills: [
      "Strong proficiency in JavaScript/TypeScript and at least one backend language (Node.js, Python)",
      "Experience with modern frontend frameworks (React, Next.js, or Vue.js)",
      "Understanding of RESTful APIs, databases, and server-side architecture",
      "Familiarity with version control (Git) and CI/CD workflows",
      "Commitment to writing secure, maintainable code",
    ],
    niceToHave: [
      "Experience with React Native or mobile development",
      "Knowledge of AI/ML integration and LLM APIs",
      "Experience with cloud platforms (AWS, Vercel, Docker)",
      "Contributions to open-source projects",
    ],
    applyNote:
      "There are no current openings for software engineers, but we grow our team as new projects come in. Send us your CV and GitHub profile and we will get in touch when a role opens.",
  },
  {
    slug: "ui-ux-design",
    icon: Figma,
    title: "UI/UX Design",
    metaDescription:
      "Explore UI/UX Design roles at Zooft Technologies. Design user-centered interfaces for web and mobile applications in a remote-first environment.",
    description:
      "UI/UX designers at Zooft are responsible for making our products intuitive, accessible, and enjoyable to use. You would conduct user research, create wireframes and prototypes, design pixel-perfect interfaces, and work closely with engineers to bring designs to life. Every product we build starts with understanding the people who will use it.",
    hiring: false,
    openRoles: 0,
    responsibilities: [
      "Conduct user research and translate findings into design decisions",
      "Create wireframes, user flows, and interactive prototypes",
      "Design responsive interfaces for web and mobile applications",
      "Build and maintain a design system with reusable components",
      "Collaborate with developers to ensure design fidelity in implementation",
      "Run usability tests and iterate based on feedback",
    ],
    skills: [
      "Proficiency in Figma (our primary design tool)",
      "Strong understanding of UX principles, accessibility, and responsive design",
      "Ability to create and communicate design rationale clearly",
      "Experience designing for both web and mobile platforms",
      "Portfolio demonstrating user-centered design thinking",
    ],
    niceToHave: [
      "Experience with design tokens and component libraries",
      "Knowledge of frontend development (HTML, CSS, React basics)",
      "Experience with motion design and micro-interactions",
      "Familiarity with design for B2B SaaS products",
    ],
    applyNote:
      "There are no current openings for UI/UX designers, but we are always interested in talented designers. Share your portfolio and we will reach out when an opportunity arises.",
  },
  {
    slug: "project-management",
    icon: Briefcase,
    title: "Project Management",
    metaDescription:
      "Explore Project Management roles at Zooft Technologies. Lead software projects, coordinate remote teams, and ensure successful delivery for clients across East Africa.",
    description:
      "Project managers at Zooft keep our projects on track and our clients happy. You would be the main point of contact between clients and our engineering teams — managing timelines, coordinating sprints, resolving blockers, and making sure every project delivers on its promises. Strong communication and organizational skills are essential in our remote-first environment.",
    hiring: false,
    openRoles: 0,
    responsibilities: [
      "Plan and manage software projects from kickoff to delivery",
      "Coordinate cross-functional teams (engineering, design, QA) in a remote setting",
      "Run sprint ceremonies — standups, planning, retrospectives",
      "Communicate project status, risks, and decisions to clients and stakeholders",
      "Manage project scope, timelines, and resource allocation",
      "Document requirements, decisions, and process improvements",
    ],
    skills: [
      "Experience managing software development projects",
      "Strong organizational and communication skills",
      "Familiarity with agile methodologies (Scrum, Kanban)",
      "Ability to manage multiple priorities in a fast-paced environment",
      "Comfortable using project management tools (Jira, Notion, Linear, or similar)",
    ],
    niceToHave: [
      "PMP, Scrum Master, or equivalent certification",
      "Technical background or understanding of software development",
      "Experience working with remote teams across time zones",
      "Client-facing project management experience",
    ],
    applyNote:
      "There are no current openings for project managers, but we are growing and will need strong PMs as our project pipeline expands. Get in touch and we will keep you on our radar.",
  },
  {
    slug: "quality-assurance",
    icon: Shield,
    title: "Quality Assurance",
    metaDescription:
      "Explore QA roles at Zooft Technologies. Ensure product quality through manual and automated testing for web and mobile applications.",
    description:
      "Quality assurance engineers at Zooft are the last line of defense before any product reaches users. You would design test plans, write automated tests, perform manual testing, and work with developers to catch and fix bugs before they ship. In a company that emphasizes security-first development, QA plays a critical role in maintaining the trust our clients place in us.",
    hiring: false,
    openRoles: 0,
    responsibilities: [
      "Design and execute test plans for web and mobile applications",
      "Write and maintain automated test suites",
      "Perform manual testing including regression, integration, and exploratory testing",
      "Report and track bugs with clear reproduction steps",
      "Collaborate with developers to understand features and identify edge cases",
      "Contribute to improving our testing processes and CI/CD quality gates",
    ],
    skills: [
      "Experience with manual and automated testing methodologies",
      "Familiarity with testing frameworks (Cypress, Playwright, Jest, or similar)",
      "Understanding of web and mobile application architecture",
      "Strong attention to detail and analytical thinking",
      "Ability to communicate bugs and issues clearly to developers",
    ],
    niceToHave: [
      "Experience with API testing (Postman, REST clients)",
      "Knowledge of security testing basics (OWASP)",
      "Experience with performance and load testing",
      "ISTQB or equivalent certification",
    ],
    applyNote:
      "There are no current openings in QA, but quality is central to everything we do. If QA is your strength, we would love to hear from you for future roles.",
  },
  {
    slug: "internships-and-training",
    icon: GraduationCap,
    title: "Internships & Training",
    metaDescription:
      "Apply for remote internships and training programs at Zooft Technologies. Learn software development, data science, AI, design, project management, and more — hands-on, from anywhere.",
    description:
      "Our internship and training program is a structured, hands-on learning experience designed for students, recent graduates, career switchers, and anyone with a genuine desire to build real tech skills. You will learn from novice to expert level throughout the duration of your training, working on real personal and group projects alongside our senior team. This is not passive learning — you will write code, design interfaces, analyse data, and build things that work. The program is fully remote because we believe the future of work is remote, and learning to collaborate effectively across distances is itself a valuable skill you will carry for life.",
    hiring: true,
    openRoles: -1,
    isInternship: true,
    internshipTracks: [
      "Software Development (HTML, CSS, JavaScript, React, Python, Node.js)",
      "Graphics Design (Figma, Adobe Creative Suite, Canva, brand identity)",
      "UI/UX Design (user research, wireframing, prototyping, usability testing)",
      "Data Science & Analytics (Python, SQL, data visualization, machine learning basics)",
      "AI & Machine Learning (LLM APIs, prompt engineering, AI integration, model training fundamentals)",
      "Project Management (agile methodologies, Scrum, stakeholder communication, tools)",
      "Digital Marketing (social media strategy, content creation, SEO, analytics)",
      "Microsoft Office Suite (Excel, Word, PowerPoint, Teams — professional productivity skills)",
      "Cloud & DevOps (AWS basics, Docker, CI/CD pipelines, version control with Git)",
    ],
    responsibilities: [
      "Progress from novice to expert through structured, hands-on learning modules",
      "Work on real personal and group projects — not hypothetical exercises",
      "Develop your own ideated project from zero to finish with guidance from Zooft seniors (imagine building your own e-commerce platform, portfolio site, or data dashboard — that is what we mean)",
      "Acquire professional communication and collaboration skills through daily remote teamwork",
      "Participate in team standups, code reviews, and feedback sessions",
      "Present your work and progress to the team in regular showcase sessions",
      "Collaborate remotely using modern industry tools (Slack, GitHub, Figma, Notion)",
    ],
    skills: [
      "A genuine desire to learn and willingness to put in the work",
      "Basic computer literacy and reliable internet access",
      "Good written communication in English",
      "Self-discipline and time management skills for remote work",
      "Openness to feedback and a growth mindset",
    ],
    niceToHave: [
      "Some prior exposure to coding, design, or data (online courses, tutorials, personal projects)",
      "A laptop or desktop computer capable of running development tools",
      "Familiarity with collaborative tools (Google Workspace, Slack, GitHub)",
      "Previous volunteer or community involvement in tech",
    ],
    applyNote:
      "Our internship program is always open for applications. Training fees range from UGX 150,000 to 500,000 depending on the internship period and area of study. Apply through our form and we will get back to you for a detailed discussion regarding the internship and training.",
  },
];

const perks = [
  {
    icon: Globe,
    text: "Fully remote — work from anywhere in the world",
  },
  {
    icon: Clock,
    text: "Flexible hours that respect your schedule",
  },
  {
    icon: Heart,
    text: "Compliance with employment laws of your country of residence",
  },
  {
    icon: Sprout,
    text: "Paid time off and vacation days",
  },
];

const internshipBenefits = [
  {
    icon: Rocket,
    title: "Novice to Expert",
    text: "Structured learning that takes you from the basics all the way to expert-level skills in your chosen track",
  },
  {
    icon: Code,
    title: "Real Projects, Real Portfolio",
    text: "Work on personal and group projects — build things you can show employers, like your own e-commerce platform or data dashboard",
  },
  {
    icon: BookOpen,
    title: "Your Own Innovation",
    text: "Develop your own ideated project from zero to finish with support and guidance from Zooft seniors — this could be a life-changing innovation",
  },
  {
    icon: Handshake,
    title: "Communication & Collaboration",
    text: "Gain professional communication and teamwork skills through daily remote collaboration using industry tools",
  },
  {
    icon: Star,
    title: "Full-Time Job Opportunity",
    text: "Outstanding interns get the chance to land a full-time role at Zooft Technologies after completing the program",
  },
  {
    icon: Award,
    title: "Strong Recommendations",
    text: "Receive strong professional recommendations from Zooft to any company of your choice when you complete the programme",
  },
  {
    icon: GraduationCap,
    title: "Academic Coordination",
    text: "We coordinate with your university, institute, or school administration to ensure smooth internships for students doing academic placements",
  },
  {
    icon: Globe,
    title: "Remote-First Experience",
    text: "Learn to work remotely from day one — the future of work is remote, and the earlier you embrace it, the better positioned you are",
  },
];

export default function RoleDetailContent({ slug }: { slug: string }) {
  const role = roles.find((r) => r.slug === slug)!;
  const Icon = roleIcons[role.slug] || Code;

  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.description,
    hiringOrganization: {
      "@type": "Organization",
      name: "Zooft Technologies",
      sameAs: "https://zoofttechnologies.com",
      logo: "/images/zooft logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kampala",
        addressCountry: "UG",
      },
    },
    jobLocationType: "TELECOMMUTE",
    employmentType: role.isInternship ? "INTERN" : "FULL_TIME",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "Uganda",
    },
  };

  return (
    <>
      {role.hiring && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jobPostingJsonLd),
          }}
        />
      )}

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
              href="/careers"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to All Roles
            </Link>
          </motion.div>

          <div className="flex items-start gap-6">
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
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                {role.title}
              </motion.h1>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                <span className="px-3 py-1 bg-white/15 text-white text-sm rounded-full">
                  Remote
                </span>
                {role.hiring ? (
                  role.openRoles === -1 ? (
                    <span className="px-3 py-1 bg-white/25 text-white text-sm font-semibold rounded-full">
                      Always Open
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-white/25 text-white text-sm font-semibold rounded-full">
                      {role.openRoles} Open Role
                      {role.openRoles > 1 ? "s" : ""}
                    </span>
                  )
                ) : (
                  <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full">
                    No Current Openings
                  </span>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0}
              >
                <h2 className="text-2xl font-bold mb-4">
                  About This Role
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {role.description}
                </p>
              </motion.div>

              {/* Internship Tracks */}
              {role.isInternship && role.internshipTracks && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0}
                >
                  <h2 className="text-2xl font-bold mb-4">
                    Available Tracks
                  </h2>
                  <div className="space-y-3">
                    {role.internshipTracks.map((track, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
                      >
                        <div className="w-7 h-7 rounded-lg bg-zooft-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check
                            size={14}
                            className="text-zooft-primary"
                          />
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {track}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Responsibilities */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0}
              >
                <h2 className="text-2xl font-bold mb-4">
                  {role.isInternship
                    ? "What You Will Do"
                    : "Responsibilities"}
                </h2>
                <ul className="space-y-3">
                  {role.responsibilities.map((item, idx) => (
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
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Skills */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0}
              >
                <h2 className="text-2xl font-bold mb-4">
                  {role.isInternship
                    ? "What We Look For"
                    : "Required Skills"}
                </h2>
                <ul className="space-y-3">
                  {role.skills.map((skill, idx) => (
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
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Nice to Have */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0}
              >
                <h2 className="text-2xl font-bold mb-4">Nice to Have</h2>
                <ul className="space-y-3">
                  {role.niceToHave.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-500"
                    >
                      <span className="text-gray-300 mt-1 shrink-0">
                        +
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Internship Benefits */}
              {role.isInternship && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0}
                >
                  <h2 className="text-2xl font-bold mb-6">
                    What You Will Gain
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {internshipBenefits.map((benefit, idx) => {
                      const BenefitIcon = benefit.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-gray-50 rounded-xl p-5 border border-gray-100"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zooft-primary to-zooft-secondary flex items-center justify-center mb-3">
                            <BenefitIcon
                              size={18}
                              className="text-white"
                            />
                          </div>
                          <h3 className="font-bold text-gray-900 mb-1 text-sm">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-500 text-xs leading-relaxed">
                            {benefit.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Card */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={1}
              >
                <Card className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] sticky top-28">
                  <CardContent className="p-7">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {role.hiring ? "Apply Now" : "Interested?"}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {role.applyNote}
                    </p>

                    {role.isInternship ? (
                      <>
                        <Button
                          className="w-full bg-zooft-primary hover:bg-zooft-dark text-white h-12 rounded-xl font-semibold mb-3"
                          asChild
                        >
                          <a
                            href="https://forms.gle/8gJgGx97GH4pTKWE7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            Apply for Internship
                            <ArrowRight size={16} />
                          </a>
                        </Button>
                        <div className="bg-zooft-light/50 rounded-lg p-3 mb-3">
                          <p className="text-xs text-gray-600 text-center leading-relaxed">
                            Training fees:{" "}
                            <span className="font-semibold text-gray-800">
                              UGX 150,000 — 500,000
                            </span>
                            <br />
                            depending on period & area of study
                          </p>
                        </div>
                      </>
                    ) : role.hiring ? (
                      <Button
                        className="w-full bg-zooft-primary hover:bg-zooft-dark text-white h-12 rounded-xl font-semibold mb-3"
                        asChild
                      >
                        <Link
                          href="/contact"
                          className="flex items-center justify-center gap-2"
                        >
                          Get In Touch
                          <ArrowRight size={16} />
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full border-zooft-primary/30 text-zooft-primary hover:bg-zooft-primary hover:text-white h-12 rounded-xl font-semibold mb-3"
                        asChild
                      >
                        <Link
                          href="/contact"
                          className="flex items-center justify-center gap-2"
                        >
                          Send Your CV
                          <ArrowRight size={16} />
                        </Link>
                      </Button>
                    )}

                    <p className="text-xs text-gray-400 text-center">
                      Email: contact@zoofttechnologies.com
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Perks */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={2}
              >
                <Card className="bg-gradient-to-br from-zooft-primary via-zooft-dark to-zooft-accent text-white rounded-2xl">
                  <CardContent className="p-7">
                    <h3 className="text-lg font-bold mb-5">What We Offer</h3>
                    <div className="space-y-4">
                      {perks.map((perk, idx) => {
                        const PerkIcon = perk.icon;
                        return (
                          <div
                            key={idx}
                            className="flex items-start gap-3"
                          >
                            <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                              <PerkIcon size={16} className="text-white" />
                            </div>
                            <p className="text-white/85 text-sm leading-relaxed">
                              {perk.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-gray-50 to-white overflow-hidden">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            Explore Other <span className="gradient-text">Roles</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
          >
            Not the right fit? Browse all our departments and find where you
            belong.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
          >
            <Button
              size="lg"
              className="bg-zooft-primary hover:bg-zooft-dark text-white px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/careers" className="flex items-center">
                View All Roles{" "}
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

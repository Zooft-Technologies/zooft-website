export interface RoleMeta {
  slug: string;
  title: string;
  metaDescription: string;
  hiring: boolean;
  openRoles: number;
}

export const roleSlugs: RoleMeta[] = [
  {
    slug: "digital-marketing-and-sales",
    title: "Digital Marketing & Sales",
    metaDescription:
      "Join Zooft Technologies as a Digital Marketer or Sales Representative. Remote-first role helping connect businesses with great software solutions in Uganda and East Africa.",
    hiring: true,
    openRoles: 2,
  },
  {
    slug: "graphics-design",
    title: "Graphics Design",
    metaDescription:
      "Explore graphics design opportunities at Zooft Technologies. Create stunning visuals, brand assets, and UI components for software products serving East African businesses.",
    hiring: false,
    openRoles: 0,
  },
  {
    slug: "data-science-and-analytics",
    title: "Data Science & Analytics",
    metaDescription:
      "Discover data science and analytics roles at Zooft Technologies. Work with real-world datasets, build dashboards, and drive data-informed decisions for growing businesses.",
    hiring: false,
    openRoles: 0,
  },
  {
    slug: "software-engineering",
    title: "Software Engineering",
    metaDescription:
      "Software engineering careers at Zooft Technologies. Build custom web and mobile applications using modern stacks like React, Next.js, Node.js, and Python.",
    hiring: false,
    openRoles: 0,
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    metaDescription:
      "UI/UX design opportunities at Zooft Technologies. Craft intuitive, user-centered interfaces for web and mobile applications serving businesses across East Africa.",
    hiring: false,
    openRoles: 0,
  },
  {
    slug: "project-management",
    title: "Project Management",
    metaDescription:
      "Project management roles at Zooft Technologies. Coordinate software development projects, manage timelines, and ensure quality delivery for clients across Uganda.",
    hiring: false,
    openRoles: 0,
  },
  {
    slug: "quality-assurance",
    title: "Quality Assurance",
    metaDescription:
      "Quality assurance careers at Zooft Technologies. Test web and mobile applications, write automated tests, and help ship reliable software products.",
    hiring: false,
    openRoles: 0,
  },
  {
    slug: "internships-and-training",
    title: "Internships & Training",
    metaDescription:
      "Remote internship and training programmes at Zooft Technologies. Gain hands-on experience in software development, data science, AI/ML, graphics design, and more.",
    hiring: true,
    openRoles: 0,
  },
];

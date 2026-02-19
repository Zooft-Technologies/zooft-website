import { Service, BlogPost, TeamMember, Project } from '@/types';

export const services: Service[] = [
  {
    id: 'software-development',
    title: 'Custom Software Development',
    description: 'Purpose-built, security-first applications engineered around your workflows — from internal tools to AI-powered customer-facing platforms.',
    longDescription: 'We design and build custom software solutions tailored to your specific business processes. Whether you need an internal operations tool, a client-facing platform, or a complex enterprise system, our team delivers production-ready software with security baked in from day one. Every application we build leverages modern architectures, automated testing, and AI-powered features where they add real value — not just buzzwords.',
    icon: '💻',
    features: [
      'Enterprise & Internal Tools',
      'API Development & Integration',
      'Database Design & Optimization',
      'AI-Powered Features',
      'Security-First Architecture'
    ],
    benefits: [
      'Increased operational efficiency',
      'Scalable, future-proof architecture',
      'Reduced manual processes',
      'Enhanced user experience'
    ],
    testimonial: {
      name: 'David Mukasa',
      role: 'Operations Director',
      company: 'Kampala Logistics Ltd',
      quote: 'Zooft built us a custom fleet management system that reduced our delivery times by 35%. Their security-first approach gave us confidence from the start.'
    },
    faqs: [
      { question: 'How long does a custom software project typically take?', answer: 'Timelines depend on complexity, but most projects run 8–16 weeks from discovery to launch. We work in agile sprints with regular demos so you see progress every two weeks.' },
      { question: 'Can you integrate with our existing systems?', answer: 'Absolutely. We specialize in building APIs and integrations that connect your new software with existing tools like ERPs, CRMs, payment gateways, and third-party services.' },
      { question: 'What happens after the software is delivered?', answer: 'We provide ongoing maintenance, monitoring, and support packages. We also offer feature enhancement sprints as your business needs evolve.' },
      { question: 'Do you build AI features into custom software?', answer: 'Yes. Where it adds genuine value, we integrate AI capabilities like intelligent search, automated document processing, predictive analytics, and smart recommendations.' }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Application Development',
    description: 'High-performance web applications built with modern architectures, secure coding practices, and AI integrations that deliver seamless user experiences.',
    longDescription: 'We create fast, responsive web applications that look great and perform even better. Using frameworks like Next.js, React, and Node.js, we build everything from marketing websites and e-commerce stores to complex SaaS platforms and real-time dashboards. Every project is optimized for SEO, accessibility, and security — ensuring your web presence works hard for your business.',
    icon: '🌐',
    features: [
      'Responsive Web Applications',
      'Progressive Web Apps (PWA)',
      'E-Commerce Platforms',
      'Content Management Systems',
      'Real-Time Dashboards'
    ],
    benefits: [
      'Fast, SEO-optimized performance',
      'Cross-browser compatibility',
      'Engaging user experiences',
      'Easy content management'
    ],
    testimonial: {
      name: 'Sarah Nalwanga',
      role: 'Founder',
      company: 'Wardrobe UG',
      quote: 'Our e-commerce platform went from concept to launch in just 10 weeks. The site is fast, beautiful, and our customers love the shopping experience.'
    },
    faqs: [
      { question: 'What web technologies do you use?', answer: 'We primarily use React, Next.js, TypeScript, and Tailwind CSS on the frontend, with Node.js, Python, PostgreSQL, and MongoDB on the backend. We choose the best stack for each project.' },
      { question: 'Will my website be SEO-friendly?', answer: 'Yes. We build with server-side rendering, semantic HTML, structured data, and performance optimization as standard. Your site will be fully indexable and fast-loading.' },
      { question: 'Can you build a Progressive Web App?', answer: 'Absolutely. PWAs offer app-like experiences in the browser — offline support, push notifications, and home screen installation. Great for reaching users without app store friction.' },
      { question: 'Do you handle hosting and deployment?', answer: 'Yes. We deploy to platforms like Vercel, AWS, or your preferred infrastructure, and set up CI/CD pipelines for seamless updates.' }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Insights',
    description: 'Transform raw data into clear, actionable intelligence with AI-driven dashboards, automated reporting pipelines, and analytics systems.',
    longDescription: 'Data without insight is just noise. We help businesses collect, process, and visualize their data through custom dashboards, automated reports, and AI-driven analytics tools. Whether you need to track KPIs in real time, build predictive models, or simply make sense of your spreadsheets, our data team delivers clarity that drives better decisions.',
    icon: '📊',
    features: [
      'Custom Analytics Dashboards',
      'Automated Reporting Pipelines',
      'Data Visualization',
      'Business Intelligence Tools',
      'AI-Driven Insights'
    ],
    benefits: [
      'Data-driven decision making',
      'Real-time business insights',
      'Automated report generation',
      'Competitive intelligence'
    ],
    testimonial: {
      name: 'James Ochieng',
      role: 'CEO',
      company: 'AgroTech East Africa',
      quote: 'The analytics dashboard Zooft built helps us track crop yields, weather patterns, and market prices in one place. It has fundamentally changed how we make decisions.'
    },
    faqs: [
      { question: 'What kind of data can you work with?', answer: 'We work with structured and unstructured data from any source — databases, APIs, spreadsheets, IoT devices, social media, and more. We can also help you set up proper data collection.' },
      { question: 'Do you build real-time dashboards?', answer: 'Yes. We build interactive, real-time dashboards that update automatically as your data changes. You can filter, drill down, and export insights on demand.' },
      { question: 'Can you add AI predictions to our data?', answer: 'Absolutely. We build predictive models for forecasting, anomaly detection, customer segmentation, and more — trained on your specific data for accurate, actionable predictions.' },
      { question: 'What tools do you use for data visualization?', answer: 'We use a combination of custom-built React dashboards, D3.js for complex visualizations, and tools like Recharts. For simpler needs, we can integrate with Power BI or Metabase.' }
    ]
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications with intuitive interfaces, built-in security layers, and smart AI features across iOS and Android.',
    longDescription: 'We build mobile apps that people actually want to use. Using React Native for cross-platform efficiency and native development where performance demands it, we create apps with beautiful interfaces, smooth animations, and robust offline capabilities. Every app ships with security best practices, analytics integration, and App Store optimization to maximize your reach.',
    icon: '📱',
    features: [
      'iOS & Android Development',
      'Cross-Platform (React Native)',
      'Offline-First Architecture',
      'Push Notifications & Analytics',
      'App Store Optimization'
    ],
    benefits: [
      'Reach users on any device',
      'Seamless offline experience',
      'Faster time to market',
      'Lower development costs'
    ],
    testimonial: {
      name: 'Grace Achieng',
      role: 'Product Manager',
      company: 'PayGo Mobile',
      quote: 'Zooft delivered our fintech app on both iOS and Android in record time. The offline-first approach was critical for our users in areas with unreliable connectivity.'
    },
    faqs: [
      { question: 'Should I build a native or cross-platform app?', answer: 'For most projects, cross-platform (React Native) gives you 90%+ code sharing between iOS and Android at a fraction of the cost. We recommend native only when performance-intensive features like gaming or AR are required.' },
      { question: 'How do you handle app store submission?', answer: 'We manage the entire submission process — app store assets, screenshots, descriptions, and compliance. We also optimize listings for discoverability (ASO).' },
      { question: 'Can the app work offline?', answer: 'Yes. We build offline-first architectures that store data locally and sync when connectivity returns. This is especially important for users in East Africa.' },
      { question: 'How do you ensure app security?', answer: 'We implement certificate pinning, encrypted local storage, secure authentication flows, and follow OWASP mobile security guidelines for every app we build.' }
    ]
  },
  {
    id: 'it-consultancy',
    title: 'IT Consultancy',
    description: 'Strategic technology guidance to align your IT investments with business goals — from security audits and architecture reviews to AI adoption roadmaps.',
    longDescription: 'Making the right technology decisions can save your business years of wasted effort and millions in misguided investments. Our consultancy services give you access to senior engineering expertise for architecture reviews, security audits, technology selection, and AI adoption planning. We help you build a clear, practical roadmap that aligns your technology with your business goals.',
    icon: '💬',
    features: [
      'Technology Strategy Planning',
      'Security Audits & Reviews',
      'System Architecture Design',
      'AI Adoption Roadmaps',
      'Digital Transformation Planning'
    ],
    benefits: [
      'Informed technology decisions',
      'Optimized IT investments',
      'Reduced security risks',
      'Clear digital roadmap'
    ],
    testimonial: {
      name: 'Robert Kigongo',
      role: 'CTO',
      company: 'Nile Financial Services',
      quote: 'The security audit and architecture review from Zooft identified critical vulnerabilities we had missed for years. Their AI adoption roadmap gave us a clear path forward.'
    },
    faqs: [
      { question: 'What does a technology audit involve?', answer: 'We review your current systems, codebase, infrastructure, and security posture. You receive a detailed report with prioritized recommendations, risk assessment, and an improvement roadmap.' },
      { question: 'Can you help us adopt AI in our business?', answer: 'Yes. We assess where AI can genuinely add value to your operations, create a practical adoption roadmap, and help you implement AI solutions — from chatbots to predictive analytics.' },
      { question: 'How is consultancy priced?', answer: 'We offer consultancy in flexible formats — one-time assessments, weekly advisory retainers, or embedded team engagements. Pricing depends on scope and duration.' },
      { question: 'Do you work with non-technical teams?', answer: 'Absolutely. We translate complex technical concepts into clear business language. Our recommendations are practical and actionable, regardless of your team\'s technical background.' }
    ]
  },
  {
    id: 'dev-training',
    title: 'Software Development Training',
    description: 'Hands-on training programs for tech students and enthusiasts — from beginner fundamentals to advanced development practices, secure coding, and AI tooling.',
    longDescription: 'We are committed to growing the next generation of software developers in Uganda and East Africa. Our training programs combine hands-on project work with mentorship from experienced engineers. Students learn industry-standard tools, secure coding practices, and modern AI-powered development workflows — graduating with real portfolios and job-ready skills, not just certificates.',
    icon: '🎓',
    features: [
      'Beginner to Advanced Tracks',
      'Full-Stack Development',
      'Secure Coding Practices',
      'AI-Powered Development Tools',
      'Project-Based Learning'
    ],
    benefits: [
      'Job-ready practical skills',
      'Industry-standard tooling',
      'Mentorship from experts',
      'Portfolio-building projects'
    ],
    testimonial: {
      name: 'Patricia Namubiru',
      role: 'Junior Developer',
      company: 'Graduate — Zooft Training Program',
      quote: 'The training program changed my career path completely. I went from zero coding experience to landing my first developer job in six months. The project-based approach made all the difference.'
    },
    faqs: [
      { question: 'Do I need prior coding experience?', answer: 'No. Our beginner track starts from the fundamentals — HTML, CSS, JavaScript — and builds up. We also have advanced tracks for experienced developers looking to level up.' },
      { question: 'How long are the training programs?', answer: 'Our core full-stack program runs 12–16 weeks. We also offer shorter intensive workshops (1–4 weeks) on specific topics like React, Python, or AI tools.' },
      { question: 'Will I build real projects?', answer: 'Yes. Every track includes hands-on projects that you can showcase in your portfolio. By the end, you will have built multiple functional applications from scratch.' },
      { question: 'Do you offer job placement support?', answer: 'Yes. We connect graduates with hiring partners, provide CV and portfolio reviews, and offer mock interviews. Many of our graduates have been hired by companies in Uganda and remotely.' }
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'digital-transformation-guide',
    title: 'The Complete Guide to Digital Transformation for Uganda Businesses',
    excerpt: 'Learn how Ugandan businesses can leverage technology to compete globally while addressing local market challenges.',
    content: '',
    author: 'Zooft Technologies Team',
    publishDate: '2025-08-15',
    category: 'business',
    imageUrl: '/images/blog/digital-transformation.jpg',
    readTime: 8
  },
  {
    id: 'cybersecurity-best-practices',
    title: 'Essential Cybersecurity Practices for Small and Medium Enterprises',
    excerpt: 'Protect your business from cyber threats with these practical security measures tailored for SMEs.',
    content: '',
    author: 'Zooft Technologies Team',
    publishDate: '2025-08-10',
    category: 'cybersecurity',
    imageUrl: '/images/blog/cybersecurity.jpg',
    readTime: 6
  },
  {
    id: 'cloud-migration-benefits',
    title: 'Why Cloud Migration is Essential for Modern Businesses',
    excerpt: 'Discover the benefits of moving to the cloud and how it can transform your business operations.',
    content: '',
    author: 'Zooft Technologies Team',
    publishDate: '2025-08-05',
    category: 'technology',
    imageUrl: '/images/blog/cloud-migration.jpg',
    readTime: 7
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'ceo',
    name: 'NAHURIRA CLINTONIE',
    position: 'CEO & Founder',
    bio: 'Visionary leader with over 10 years of experience in technology and business development.',
    imageUrl: '/images/team/clintonie.jpg',
    socialLinks: {
      linkedin: '#',
      email: 'clintonie@zoofttechnologies.com'
    }
  },
  {
    id: 'cto',
    name: 'OLUKA GIBSON',
    position: 'CTO & Founder',
    bio: 'Technology expert specializing in software architecture and innovative solutions.',
    imageUrl: '/images/team/gibson.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/fred-sseginda-4822b6236/',
      email: 'gibson@zoofttechnologies.com'
    }
  },
  {
    id: 'HR',
    name: 'FRED SSEGINDA',
    position: 'HR & Founder',
    bio: 'Full-stack developer with expertise in modern web technologies and cloud solutions.',
    imageUrl: '/images/team/Fred.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/fred-sseginda-4822b6236/',
      email: 'fred@zoofttechnologies.com'
    }
  },
  {
    id: 'ACC',
    name: 'JOVIC MUWANGUZI BIRAALO',
    position: 'ACCOUNTANT & Founder',
    bio: 'Full-stack developer with expertise in modern web technologies and cloud solutions.',
    imageUrl: '/images/team/Fred.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/fred-sseginda-4822b6236/',
      email: 'jovic@zoofttechnologies.com'
    }
  },{
    id: 'MARKETER',
    name: 'HENRY AHABWE',
    position: 'MARKETER & Founder',
    bio: 'Full-stack developer with expertise in modern web technologies and cloud solutions.',
    imageUrl: '/images/team/Fred.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/fred-sseginda-4822b6236/',
      email: 'henry@zoofttechnologies.com'
    }
  }
];

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Comprehensive online marketplace solution with payment integration and inventory management.',
    category: 'E-Commerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    imageUrl: '/images/projects/kubwa.jpg',
    completedDate: '2025-07-15'
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    description: 'Complete healthcare management solution including patient records, appointments, and billing.',
    category: 'Healthcare',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
    imageUrl: '/images/projects/hospital-system.jpg',
    completedDate: '2025-06-20'
  },
  {
    id: 'inventory-system',
    title: 'Inventory Management System',
    description: 'Real-time inventory tracking and management system for retail businesses.',
    category: 'Retail',
    technologies: ['Angular', 'Java', 'MySQL', 'AWS'],
    imageUrl: '/images/projects/wardrobe.jpg',
    completedDate: '2025-05-10'
  }
];

export const companyInfo = {
  name: 'Zooft Technologies',
  tagline: 'Innovative Technology Solutions for Modern Businesses',
  description: 'We build secure, AI-powered software solutions — custom web and mobile apps, data analytics, IT consultancy, and developer training — that help businesses scale faster and operate smarter.',
  founded: '2025',
  location: 'Nakawa, Kampala, Uganda',
  mission: 'To empower businesses and individuals with secure, AI-powered software solutions that drive growth, efficiency, and competitive advantage in the digital age.',
  vision: 'To become the leading technology partner for businesses across Uganda and East Africa, fostering digital transformation and building the next generation of tech talent.',
  values: [
    { title: 'Innovation', description: 'We embrace emerging technologies and creative problem-solving to deliver solutions that keep our clients ahead of the curve.' },
    { title: 'Integrity', description: 'We build trust through transparency, honest communication, and doing the right thing — even when no one is watching.' },
    { title: 'Customer Focus', description: 'Every line of code we write starts with understanding your business goals, challenges, and the people who use your products.' },
    { title: 'Excellence', description: 'We hold ourselves to the highest standards of quality — from clean, secure code to pixel-perfect interfaces and reliable delivery.' },
    { title: 'Collaboration', description: 'We work as an extension of your team, combining our technical expertise with your domain knowledge to build better products together.' },
  ],
  contact: {
    email: 'contact@zoofttechnologies.com',
    phone: '+256773252651',
    phone2: '+256709105749',
    whatsapp: '+256773252651',
    address: 'Nakawa, Kampala, Uganda',
    website: 'www.zoofttechnologies.com'
  },
  social: {
    twitter: 'https://x.com/Zoofttech',
    instagram: 'https://www.instagram.com/zoofttech/',
    tiktok: 'https://www.tiktok.com/@zooft.technologie',
    youtube: 'https://www.youtube.com/@ZooftTechnologies',
    linkedin: 'https://linkedin.com/company/zooft-technologies',
    facebook: 'https://facebook.com/zoofttechnologies'
  }
};

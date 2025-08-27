import { Service, BlogPost, TeamMember, Project } from '@/types';

export const services: Service[] = [
  {
    id: 'software-development',
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs and drive growth.',
    icon: '💻',
    features: [
      'Web Application Development',
      'Mobile App Development',
      'API Development & Integration',
      'Database Design & Optimization',
      'Cloud-Based Solutions'
    ],
    benefits: [
      'Increased operational efficiency',
      'Scalable architecture',
      'Reduced manual processes',
      'Enhanced user experience'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security measures to protect your digital assets and ensure business continuity.',
    icon: '🛡️',
    features: [
      'Security Audits & Assessments',
      'Vulnerability Testing',
      'Network Security Implementation',
      'Data Encryption Solutions',
      'Security Training & Awareness'
    ],
    benefits: [
      'Protected sensitive data',
      'Compliance with regulations',
      'Reduced security risks',
      'Business continuity assurance'
    ]
  },
  {
    id: 'cloud-services',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions that grow with your business and optimize your IT infrastructure.',
    icon: '☁️',
    features: [
      'Cloud Migration Services',
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Cloud Security Implementation',
      '24/7 Monitoring & Support'
    ],
    benefits: [
      'Reduced IT costs',
      'Improved scalability',
      'Enhanced accessibility',
      'Automatic backups & recovery'
    ]
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Strategic technology guidance to help you make informed decisions and optimize your IT investments.',
    icon: '📊',
    features: [
      'Technology Strategy Planning',
      'Digital Transformation Consulting',
      'System Architecture Design',
      'Process Optimization',
      'Technology ROI Analysis'
    ],
    benefits: [
      'Informed technology decisions',
      'Optimized IT investments',
      'Streamlined business processes',
      'Competitive advantage'
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
    imageUrl: '/images/projects/hospital.jpg',
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
  description: 'We specialize in delivering cutting-edge technology solutions that drive business growth and digital transformation.',
  founded: '2025',
  location: 'Nakawa-kampala,Uganda',
  mission: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.',
  vision: 'To become the leading technology partner for businesses across Uganda and East Africa, fostering digital transformation and economic growth.',
  values: [
    'Innovation',
    'Integrity',
    'Customer Focus',
    'Excellence',
    'Collaboration'
  ],
  contact: {
    email: 'contact@zoofttechnologies.com',
    phone: '+2560776546326/0709105749',
    whatsapp: '+2560776546326',
    address: 'P.O.BOX 202097,NAKAWA UG'
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

import { Layout, Server, Database, Code2 } from 'lucide-react';

export const HERO_DATA = {
  name: "Md. Monjurul Islam",
  role: "MERN Stack Developer",
  description: "A backend-focused Full Stack Developer specializing in the MERN stack. I build scalable applications from first principles, with a strong emphasis on robust API design, state management, and optimized database schemas.",
  github: "https://github.com/Prottoy123",
  linkedin: "https://linkedin.com/in/monjurul-islam-146601249",
  email: "Monjurulislamprottoy@gmail.com"
};

export const SKILLS_DATA = [
  {
    category: "Frontend",
    icon: Layout,
    skills: ["JavaScript (ES6+)", "React.js", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "WebSockets", "RESTful APIs"]
  },
  {
    category: "Database & Storage",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "Appwrite", "Cloudinary"]
  },
  {
    category: "Tools & Architecture",
    icon: Code2,
    skills: ["Redux Toolkit", "React Hook Form", "Git & GitHub", "Postman", "Vercel"]
  }
];

export const PROJECTS_DATA = [
  {
    title: "GroFresh Platform",
    description: "An enterprise-grade, full-stack grocery e-commerce platform built using the MERN stack. Emphasizes complex cart state management and optimized media delivery via Cloudinary.",
    features: [
      "JWT-based stateless authentication with secure HTTP-only cookies",
      "Complex cart state management and Stripe checkout integration",
      "Optimized media delivery and hosting via Cloudinary & Multer",
      "MongoDB connection caching for Vercel serverless environments",
      "Dual Dashboards: Comprehensive Admin/Seller & Customer interfaces"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind"],
    liveLink: "https://gro-fresh-silk.vercel.app",
    githubLink: "https://github.com/Prottoy123/GroFresh"
  },
  {
    title: "MegaBlog",
    description: "A modern, highly responsive blogging architecture. Highlighted by a 40% reduction in API calls using Redux Toolkit and secure data flow via Appwrite BaaS.",
    features: [
      "40% reduction in API calls using Redux Toolkit state management",
      "Robust Authentication and advanced CRUD operations via Appwrite BaaS",
      "Service Layer Abstraction for clean backend separation",
      "Rich Text Editing with TinyMCE integration",
      "Premium UI with Glassmorphism and Contextual Navigation"
    ],
    tech: ["React", "Redux Toolkit", "Appwrite", "Tailwind CSS"],
    liveLink: "https://blog-app-ten-ruby.vercel.app",
    githubLink: "https://github.com/Prottoy123/Blog_APP"
  }
];

export const EDUCATION_DATA = {
  degree: "B.Sc. in Computer Science and Engineering",
  institution: "Daffodil International University, Dhaka, Bangladesh",
  period: "2022 - 2025",
  coursework: "Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Engineering."
};

export const THESIS_DATA = {
  title: "AI adoption among engineering students",
  status: "Successfully Defended (Jan 2026)",
  description: "A comprehensive research study analyzing the impact and adoption rates of artificial intelligence tools among engineering students, identifying key trends in modern educational workflows."
};

export const EXTRACURRICULARS_DATA = [
  "Participated in the Unlock the Algorithm Competition (2023) and Take-Off Problem Solving Competition (2022) at DIU.",
  "Executive Member of the DIU Computer Programming Club (CPC) and Member of the DIU Robotics Club."
];

export const SERVICES_DATA = [
  {
    title: "Custom API Development",
    description: "Designing and building secure, scalable, and fully documented RESTful and GraphQL APIs from scratch."
  },
  {
    title: "Database & Schema Design",
    description: "Architecting optimized NoSQL and SQL database schemas focused on fast read/write speeds and data integrity."
  },
  {
    title: "Scalable E-commerce Backends",
    description: "Implementing robust cart states, Stripe payment processing, and secure seller authentication systems."
  }
];

export const SPOTLIGHT_DATA = {
  title: "HealthBridge - Smart Healthcare System",
  description: "An ongoing mega-project bridging the gap between patients and healthcare providers with real-time features.",
  tags: ["WebSockets", "Redis", "Node.js", "React"]
};

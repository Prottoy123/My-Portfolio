import { Layout, Server, Database, Code2, Cloud } from 'lucide-react';

export const HERO_DATA = {
  name: "Md. Monjurul Islam",
  role: "MERN Stack Developer",
  description: "Software Engineer with hands-on experience building web applications across the MERN and PERN stacks through different types of projects. Comfortable owning a feature end-to-end, from designing REST APIs and well-structured database schemas to implementing role-based access control and real-time functionality. Particularly drawn to the backend, writing server-side logic that stays clean and easy to reason about as an application grows.",
  github: "https://github.com/Prottoy123",
  linkedin: "https://linkedin.com/in/md-monjurul-islam-146601249",
  email: "Monjurulislamprottoy@gmail.com",
  facebook: "https://www.facebook.com/nirob.prottoy.9",
  instagram: "https://www.instagram.com/nirobprottoy"
};

export const SKILLS_DATA = [
  {
    category: "Frontend",
    icon: Layout,
    skills: ["JavaScript (ES6+)", "React.js", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "WebSockets", "RESTful APIs"]
  },
  {
    category: "Database & Storage",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Redis", "Mongoose", "Prisma", "Appwrite", "Cloudinary"]
  },
  {
    category: "Tools & Architecture",
    icon: Code2,
    skills: ["React Hook Form", "Multer", "Git & GitHub", "Postman", "Gemini API Integration"]
  },
  {
    category: "Deployment",
    icon: Cloud,
    skills: ["Docker", "AWS EC2", "Vercel"]
  }
];

export const PROJECTS_DATA = [
  {
    title: "HealthBridge - Smart Healthcare System",
    description: "A comprehensive, real-time healthcare platform bridging the gap between patients, doctors, and staff. Features an AI-powered symptom triage system, live queue management, and secure telemedicine capabilities.",
    features: [
      "Architected a scalable system with Role-Based Access Control (RBAC) for patients, doctors, staff, and admins.",
      "Implemented real-time bidirectional communication using Socket.io and Redis for instant chat and live queue updates.",
      "Integrated Gemini Vision AI for automated symptom triage and prescription decoding.",
      "Engineered an optimized 'Cache-Aside' pattern using Upstash Redis to reduce API latency, alongside distributed locking to prevent booking race conditions."
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Redis", "Gemini AI", "Docker", "AWS EC2", "Vercel"],
    liveLink: "https://health-bridge-gamma.vercel.app/",
    githubLink: "https://github.com/Prottoy123/HealthBridge"
  },
  {
    title: "GroFresh - Full-Stack E-commerce Platform",
    description: "Built a full-stack e-commerce web application with separate panels for buyers and sellers, featuring secure payments and optimized media uploads.",
    features: [
      "Built a full-stack e-commerce web application with separate panels for buyers and sellers.",
      "Developed backend APIs using Node.js, Express, and MongoDB to manage user login, product listings, and shopping carts.",
      "Integrated Stripe payment gateway to process secure online transactions during checkout.",
      "Used Multer and Cloudinary for uploading and storing product images."
    ],
    tech: ["React", "Context API", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind", "Vercel"],
    liveLink: "https://gro-fresh-silk.vercel.app",
    githubLink: "https://github.com/Prottoy123/GroFresh"
  },
  {
    title: "Dhaka Tesla Pool - EV Ride-Pooling System",
    description: "Built a real-time electric vehicle ride-pooling platform for Dhaka commuters, featuring concurrency locking, corridor matching, and fair fare-splitting.",
    features: [
      "Engineered row-level locking (SELECT ... FOR UPDATE) in PostgreSQL to prevent concurrent seat overbooking.",
      "Developed an in-memory corridor matcher using an adjacency graph for transit routes with zero external map APIs.",
      "Implemented an exact integer-poysha fare splitting engine to completely avoid floating-point rounding errors."
    ],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Vercel"],
    liveLink: "https://tesla-pool-roben-devs.vercel.app/",
    githubLink: "https://github.com/Prottoy123/TeslaPool---RobenDevs"
  },
  {
    title: "EchoGPT - Multi-AI Backend REST API",
    description: "Developed a production-ready RESTful backend API for the EchoGPT Chrome Extension, supporting multi-provider AI chat and intelligent web search.",
    features: [
      "Built modular multi-provider AI chat routing (Gemini, Claude, OpenAI) using NestJS and Vercel AI SDK.",
      "Secured provider API keys using AES-256-GCM encryption and implemented dual-token JWT authentication.",
      "Integrated Server-Sent Events (SSE) for real-time streaming, search caching, and automated Swagger docs."
    ],
    tech: ["NestJS", "PostgreSQL", "Prisma", "Vercel AI SDK", "Swagger", "Docker"],
    liveLink: "#",
    githubLink: "https://github.com/Prottoy123/EchoGPT",
    swaggerLink: "https://prottoy123.github.io/EchoGPT/"
  },
  {
    title: "MegaBlogAPP - Modern Blogging Platform",
    description: "Created a blogging platform using React.js and Tailwind CSS for a clean and responsive user interface, featuring robust state management and cloud integration.",
    features: [
      "Created a blogging platform using React.js and Tailwind CSS for a clean and responsive user interface.",
      "Used Redux Toolkit to manage global data, keeping track of logged-in users and blog posts across different pages.",
      "Integrated Appwrite to handle secure user authentication and store blog articles."
    ],
    tech: ["React.js", "Tailwind", "Redux Toolkit", "Appwrite", "Vercel"],
    liveLink: "https://blog-app-ten-ruby.vercel.app",
    githubLink: "https://github.com/Prottoy123/Blog_APP"
  }
];

export const EDUCATION_DATA = {
  degree: "B.Sc. in Computer Science and Engineering",
  institution: "Daffodil International University, Dhaka, Bangladesh",
  period: "2022 - 2026",
  coursework: "Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Engineering."
};

export const HSC_DATA = {
  degree: "Higher Secondary Certificate (HSC)",
  institution: "Charghat Alhaj Hadi College",
  period: "2018 - 2020",
  background: "Science"
};

export const SSC_DATA = {
  degree: "Secondary School Certificate (SSC)",
  institution: "Charghat Pilot High School",
  period: "2016 - 2018",
  background: "Science"
};

export const THESIS_DATA = {
  title: "Predictive Modeling of AI Adoption: A Hybrid Approach",
  status: "Successfully Defended (Preparing for Publication)",
  description: "An analytical study examining the behavioral drivers of advanced AI adoption among engineering students. The research bridges traditional statistical modeling with modern predictive algorithms to forecast technology acceptance.",
  methodology: [
    { title: "Theoretical Modeling (SEM)", text: "Developed an extended structural equation model to identify and quantify the core psychological and environmental drivers behind AI adoption." },
    { title: "Predictive Engine (ML)", text: "Trained and evaluated multiple machine learning classifiers on a large-scale demographic dataset to accurately predict user adoption intentions." }
  ],
  keyFindings: [
    "Identified the primary usability and risk-assessment factors that serve as the strongest catalysts and bottlenecks for student adoption.",
    "Demonstrated that advanced ensemble machine learning methods significantly outperform traditional linear models in predicting complex behavioral intents.",
    "Successfully bridged theoretical behavioral science with practical, algorithmic implementation for real-world application."
  ]
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
  },
  {
    title: "Modern Frontend Engineering",
    description: "Building highly responsive, interactive, and optimized Single Page Applications using React and Tailwind CSS."
  }
];

export const SPOTLIGHT_DATA = {
  title: "HealthBridge - Smart Healthcare System",
  description: "A comprehensive, deployed mega-project bridging the gap between patients and healthcare providers with real-time features and AI integrations.",
  tags: ["WebSockets", "Redis", "Node.js", "React", "Docker", "AWS EC2"],
  github: "https://github.com/Prottoy123/HealthBridge"
};

export const ONGOING_PROJECT_DATA = {
  title: "NexaCommand - Enterprise SaaS Platform",
  description: "An advanced, highly scalable multi-tenant SaaS architecture ('The Engine Room') designed for robust enterprise operations. Features strict tenant isolation, dynamic inventory, unified billing, and AI-driven insights.",
  features: [
    "Architecting a secure Multi-Tenant core with isolated data environments and advanced RBAC using PostgreSQL and Prisma.",
    "Implementing an Idempotent Unified Billing Engine to guarantee transaction safety and prevent double-charging.",
    "Integrating AI Time-Travel capabilities via Gemini API for dynamic PnL (Profit and Loss) simulation.",
    "Developing real-time ledger tracking and a dynamic 'Dead-Stock' inventory system with Upstash Redis."
  ],
  tech: ["PostgreSQL", "React", "Node.js", "Express", "Docker", "Redis", "WebSocket", "Redux Toolkit", "AWS EC2", "Prisma"],
  liveLink: "#",
  githubLink: "https://github.com/Prottoy123/NexaCommand",
  status: "Active Development 🚀"
};

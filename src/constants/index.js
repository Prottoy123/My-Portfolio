import { Layout, Server, Database, Code2, Cloud } from 'lucide-react';

export const HERO_DATA = {
  name: "Md. Monjurul Islam",
  role: "MERN Stack Developer",
  description: "A backend-focused Software Engineer specializing in the MERN stack. Proven ability to architect scalable applications from first principles, with a strong emphasis on robust API design, state management, and optimized database schemas to solve complex real-world data flow challenges",
  github: "https://github.com/Prottoy123",
  linkedin: "https://linkedin.com/in/monjurul-islam-146601249",
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
    skills: ["MongoDB", "Redis", "Mongoose", "Appwrite", "Cloudinary", { name: "MySQL", isFamiliar: true }]
  },
  {
    category: "Tools & Architecture",
    icon: Code2,
    skills: ["React Hook Form", "Multer", "Git & GitHub", "Postman", "Gemini API Integration"]
  },
  {
    category: "Deployment",
    icon: Cloud,
    skills: ["Docker", "AWS", "Vercel"]
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
  period: "2022 - 2025",
  coursework: "Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Engineering."
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

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
    title: "GroFresh - Full-Stack E-commerce Platform",
    description: "Built a full-stack e-commerce web application with separate panels for buyers and sellers, featuring secure payments and optimized media uploads.",
    features: [
      "Built a full-stack e-commerce web application with separate panels for buyers and sellers.",
      "Developed backend APIs using Node.js, Express, and MongoDB to manage user login, product listings, and shopping carts.",
      "Integrated Stripe payment gateway to process secure online transactions during checkout.",
      "Used Multer and Cloudinary for uploading and storing product images."
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind"],
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
    tech: ["React.js", "Tailwind", "Redux Toolkit", "Appwrite"],
    liveLink: "https://blog-app-ten-ruby.vercel.app",
    githubLink: "https://github.com/Prottoy123/Blog_APP"
  },
  {
    title: "HealthBridge (Ongoing)",
    description: "A Smart Healthcare System bridging the gap between patients and healthcare providers. Focuses on real-time features and secure data handling.",
    features: [
      "Real-time bidirectional communication using WebSockets",
      "In-memory data caching utilizing Redis for high performance",
      "Secure patient-provider interactions and scheduling",
      "Ongoing development integrating advanced analytics"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "Redis"],
    liveLink: "#",
    githubLink: "https://github.com/Prottoy123/HealthBridge"
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
  },
  {
    title: "Modern Frontend Engineering",
    description: "Building highly responsive, interactive, and optimized Single Page Applications using React and Tailwind CSS."
  }
];

export const SPOTLIGHT_DATA = {
  title: "HealthBridge - Smart Healthcare System",
  description: "An ongoing mega-project bridging the gap between patients and healthcare providers with real-time features.",
  tags: ["WebSockets", "Redis", "Node.js", "React"],
  github: "https://github.com/Prottoy123/HealthBridge"
};

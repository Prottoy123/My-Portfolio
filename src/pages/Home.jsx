import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, Code2, Database, Server, Activity, ArrowRight, Download, Briefcase, Layout, BookOpen, Microscope, Cpu, CheckCircle2 } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { HERO_DATA, SERVICES_DATA, PROJECTS_DATA, THESIS_DATA } from '../constants';

// Import local assets
import profileImage from '../assets/Profile Image.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Home = () => {
  return (
    <div className="flex flex-col gap-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden pt-10">
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
            {/* Left Text Content */}
            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp}
              className="flex-1 text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                <Activity size={16} /> Software Engineer | Backend Focused
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                Hi, I'm <span className="text-gradient">{HERO_DATA.name}</span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold mb-6 leading-tight text-slate-300">
                Architecting Scalable APIs <br className="hidden md:block"/>
                & Robust Data Flow.
              </h2>
              <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
                {HERO_DATA.description}
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                <Link to="/contact" className="btn btn-primary px-8 py-4 text-lg shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                  <Briefcase size={20} /> Hire Me
                </Link>
                <a href="/Prottoy_Resume__Final__V2.pdf" download="Prottoy_Resume.pdf" className="btn btn-outline px-8 py-4 text-lg">
                  <Download size={20} /> Download Resume
                </a>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
                <a href={HERO_DATA.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 shadow-sm">
                  <Github size={22} />
                </a>
                <a href={HERO_DATA.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 shadow-sm">
                  <Linkedin size={22} />
                </a>
              </div>
            </motion.div>

            {/* Right Image / Terminal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
              className="flex-1 flex justify-center md:justify-end relative w-full"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[80px] rounded-full -z-10"></div>
              
              {/* Profile Image alongside Terminal */}
              <div className="relative w-full max-w-md">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden glass p-2 mx-auto mb-[-60px] relative z-20 shadow-[0_0_40px_rgba(99,102,241,0.3)]">
                  <img src={profileImage} alt={HERO_DATA.name} className="w-full h-full object-cover rounded-full" />
                </div>
                
                {/* Live Backend Demo (Mock Terminal) */}
                <div className="glass rounded-xl overflow-hidden font-mono text-xs sm:text-sm shadow-2xl border border-white/10 pt-16 relative z-10 w-full">
                  <div className="absolute top-0 left-0 right-0 px-4 py-2 bg-surface/80 flex items-center gap-2 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="ml-2 text-slate-500">server_monitor.sh</span>
                  </div>
                  <div className="p-5 text-slate-300 space-y-2 h-[200px] overflow-hidden relative">
                    <div className="flex items-center gap-2"><span className="text-green-400">➜</span> <span>yarn run start:prod</span></div>
                    <div className="text-slate-500">[INFO] Starting production server...</div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-primary">[Mongoose] Connected to MongoDB Cluster</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-secondary">[Redis] Cache layer initialized</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>[Server] API listening on port 4000</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="flex items-center gap-2">
                      <span className="text-yellow-400">GET /api/v1/health</span> <span className="text-green-400">200 OK - 12ms</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="flex items-center gap-2">
                      <span className="text-blue-400">POST /api/v1/orders</span> <span className="text-green-400">201 Created - 45ms</span>
                    </motion.div>
                    
                    {/* Blinking cursor overlay */}
                    <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-4 bg-slate-300 mt-2"></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SPECIALIZED SERVICES (Grid) */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized <span className="text-gradient">Services</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Delivering high-performance architecture tailored for scalability and security.</p>
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const Icon = index === 0 ? Code2 : index === 1 ? Database : index === 2 ? Server : Layout;
            return (
              <motion.div key={index} variants={fadeUp} className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* 3. ACADEMIC & RESEARCH BACKGROUND */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic & <span className="text-gradient">Research</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{THESIS_DATA.status}</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-primary/5 blur-[120px] rounded-full"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6 border border-secondary/20">
              <Microscope size={16} /> B.Sc. Computer Science Thesis
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">{THESIS_DATA.title}</h3>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-4xl">{THESIS_DATA.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Methodology */}
              <div>
                <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 text-primary">
                  <Cpu size={20} /> Methodology & Architecture
                </h4>
                <div className="space-y-6">
                  {THESIS_DATA.methodology.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-300 border border-white/10">
                        {i + 1}
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-1">{item.title}</h5>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Key Findings */}
              <div className="bg-surface/50 p-6 md:p-8 rounded-2xl border border-white/5">
                <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 text-secondary">
                  <CheckCircle2 size={20} /> Critical Findings
                </h4>
                <ul className="space-y-4">
                  {THESIS_DATA.keyFindings.map((finding, i) => (
                    <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                      <div className="text-secondary mt-1 shrink-0"><BookOpen size={16} /></div>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. FEATURED PROJECTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured <span className="text-gradient">Work</span></h2>
            <p className="text-slate-400">A glimpse into my production-ready applications.</p>
          </div>
          <Link to="/projects" className="hidden md:flex items-center gap-2 text-primary hover:text-indigo-400 font-semibold transition-colors">
            View All Projects <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.slice(0, 2).map((project, i) => (
            <motion.div key={i} variants={fadeUp} className="glass p-8 rounded-2xl flex flex-col h-full group hover:border-primary/30 transition-colors">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.slice(0, 4).map((tech, j) => (
                  <span key={j} className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-outline w-full justify-center">
                Explore Demo
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/projects" className="btn btn-primary w-full justify-center">
            View All Projects
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;

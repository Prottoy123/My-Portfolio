import { ExternalLink, BookOpen, CheckCircle, Activity } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import { PROJECTS_DATA, ONGOING_PROJECT_DATA } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="flex flex-col gap-16">
          {[ONGOING_PROJECT_DATA, ...PROJECTS_DATA].map((project, index) => (
            <div 
              key={index} 
              className={`glass flex flex-col overflow-hidden group relative transform transition-all duration-500 hover:-translate-y-2 ${
                project.status 
                  ? 'border border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.15)] hover:border-yellow-500/50 hover:shadow-[0_20px_40px_-15px_rgba(234,179,8,0.3)]' 
                  : 'hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)]'
              }`}
            >
              {project.status && (
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
              )}
              {/* Fake Window Header */}
              <div className="flex items-center px-6 py-4 bg-surface/80 border-b border-white/5 backdrop-blur-md">
                <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.4)]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.4)]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
                </div>
                <div className="mx-auto flex items-center gap-2 text-sm font-mono text-slate-400 opacity-80">
                  <BookOpen size={16} /> {project.title.toLowerCase().replace(/\s+/g, '-')}-readme.md
                </div>
              </div>
              
              {project.status && (
                <div className="w-full flex items-center justify-center gap-4 pt-8 md:pt-10 px-8">
                  <div className="h-[1px] bg-gradient-to-r from-transparent to-yellow-500/30 w-16 md:w-32"></div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-sm md:text-base font-semibold tracking-wide shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                    <Activity size={18} className="animate-pulse" /> Ongoing Project
                  </div>
                  <div className="h-[1px] bg-gradient-to-l from-transparent to-yellow-500/30 w-16 md:w-32"></div>
                </div>
              )}

              <div className={`p-8 md:p-12 flex flex-col lg:flex-row gap-12 ${project.status ? 'pt-6 md:pt-8' : ''}`}>
                
                {/* Left side: Context */}
                <div className="flex-1 space-y-8 flex flex-col">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className={`text-xs font-semibold px-4 py-1.5 rounded-full border shadow-sm transition-colors ${tech.toLowerCase() === 'postgresql' ? 'text-blue-400 bg-blue-400/10 border-blue-400/30 shadow-[0_0_10px_rgba(96,165,250,0.2)] font-bold' : 'text-secondary bg-secondary/10 border-secondary/20'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6 mt-auto">
                    {project.liveLink !== "#" && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn btn-primary"
                      >
                        <ExternalLink size={18} /> Live Link
                      </a>
                    )}
                    {project.githubLink !== "#" && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn btn-outline"
                      >
                        <Github size={18} /> Source Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Right side: Readme / Features */}
                <div className="flex-1 bg-background/60 rounded-xl p-8 border border-white/5 font-mono text-sm shadow-inner relative overflow-hidden group-hover:border-primary/20 transition-colors duration-500">
                  {/* Subtle terminal background glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                  
                  <h4 className="text-primary font-bold mb-6 flex items-center gap-2 text-lg">
                    <span className="text-slate-500">&gt;</span> ## Key_Features
                  </h4>
                  <ul className="space-y-5 text-slate-300">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="text-secondary mt-0.5 shrink-0"><CheckCircle size={18} /></span>
                        <span className="leading-relaxed text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

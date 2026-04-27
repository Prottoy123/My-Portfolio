import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { HERO_DATA } from '../constants';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left Text Content */}
          <div className="flex-1 animate-fade-up text-center md:text-left">
            <p className="text-primary font-display font-semibold mb-4 tracking-widest uppercase">{HERO_DATA.role}</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm <br className="hidden md:block"/>
              <span className="text-gradient">{HERO_DATA.name}</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
              {HERO_DATA.description}
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
              <div className="flex items-center gap-4 ml-0 md:ml-2">
                <a href={HERO_DATA.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.1)] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                  <Github size={22} />
                </a>
                <a href={HERO_DATA.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.1)] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            {/* Background Glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-primary/20 blur-[80px] rounded-full -z-10 animate-float"></div>
            
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-3xl overflow-hidden glass p-2 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-shadow duration-500">
              <img 
                src="/profile.png" 
                alt={HERO_DATA.name} 
                className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

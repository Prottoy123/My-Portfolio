import { Trophy } from 'lucide-react';
import { EDUCATION_DATA, EXTRACURRICULARS_DATA } from '../constants';

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Education & <span className="text-gradient">Achievements</span>
        </h2>
        
        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-1/2 md:-ml-px top-0 h-full w-[2px] bg-white/10"></div>
          
          {/* Education Item */}
          <div className="relative mb-16 md:w-1/2 md:pr-12 md:ml-0 md:text-right">
            <div className="absolute -left-12 md:-right-[26px] md:left-auto top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-[0_0_0_8px_rgba(99,102,241,0.2)] z-10"></div>
            <div className="font-display font-bold text-primary mb-2">{EDUCATION_DATA.period}</div>
            <div className="glass p-8 relative hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold mb-2">{EDUCATION_DATA.degree}</h3>
              <h4 className="text-slate-400 font-medium mb-4">{EDUCATION_DATA.institution}</h4>

              <p className="text-sm text-slate-400 leading-relaxed">
                <strong className="text-slate-300">Relevant Coursework:</strong> {EDUCATION_DATA.coursework}
              </p>
            </div>
          </div>

          {/* Extracurriculars Item */}
          <div className="relative md:w-1/2 md:pl-12 md:ml-auto">
            <div className="absolute -left-12 md:-left-[6px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-[0_0_0_8px_rgba(99,102,241,0.2)] z-10"></div>
            <div className="font-display font-bold text-primary mb-2">Extracurriculars</div>
            <div className="glass p-8 relative hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 md:justify-start">
                <Trophy size={24} className="text-primary" />
                Competitive Programming & Tech
              </h3>
              <ul className="space-y-4 text-sm text-slate-400">
                {EXTRACURRICULARS_DATA.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

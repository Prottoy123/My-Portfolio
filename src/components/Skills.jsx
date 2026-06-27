import { SKILLS_DATA } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {SKILLS_DATA.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <div 
                key={index} 
                className="glass p-5 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1rem)] hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.3)] transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 shrink-0">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {skillGroup.skills.map((skill, i) => {
                    const skillName = typeof skill === 'object' ? skill.name : skill;
                    const isFamiliar = typeof skill === 'object' ? skill.isFamiliar : false;

                    return (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 flex items-center gap-1.5"
                      >
                        {skillName}
                        {isFamiliar && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 uppercase tracking-wider font-medium">
                            Familiar
                          </span>
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

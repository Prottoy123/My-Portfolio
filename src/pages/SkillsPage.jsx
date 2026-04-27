import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const SkillsPage = () => {
  return (
    <div className="py-20 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A categorized breakdown of my tech stack, heavily focused on backend scalability, API design, and modern frontend architecture.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
        >
          {SKILLS_DATA.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={index} 
                variants={fadeUp}
                className="glass p-8 md:p-10 rounded-3xl group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden"
              >
                {/* Glow behind card on hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/0 group-hover:bg-primary/10 blur-[60px] rounded-full -z-10 transition-colors duration-500"></div>
                
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 bg-surface/50 px-4 py-3 rounded-xl border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="font-medium text-slate-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;

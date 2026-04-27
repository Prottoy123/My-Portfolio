import { motion } from 'framer-motion';
import { Trophy, GraduationCap, BookOpen } from 'lucide-react';
import { EDUCATION_DATA, EXTRACURRICULARS_DATA, THESIS_DATA } from '../constants';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const EducationPage = () => {
  return (
    <div className="py-20 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Academic <span className="text-gradient">Foundation</span>
          </h1>
          <p className="text-slate-400 text-lg">
            My formal education and research background that laid the groundwork for robust software engineering.
          </p>
        </motion.div>
        
        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-1/2 md:-ml-px top-0 h-full w-[2px] bg-white/10"></div>
          
          {/* Education Item */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative mb-16 md:w-1/2 md:pr-12 md:ml-0 md:text-right">
            <div className="absolute -left-12 md:-right-[26px] md:left-auto top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-[0_0_0_8px_rgba(99,102,241,0.2)] z-10"></div>
            <div className="font-display font-bold text-primary mb-2 flex items-center md:justify-end gap-2">
              <GraduationCap size={18} className="md:order-last" /> {EDUCATION_DATA.period}
            </div>
            <div className="glass p-8 relative hover:-translate-y-1 transition-transform group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10 group-hover:bg-primary/10 transition-colors"></div>
              <h3 className="text-xl font-bold mb-2">{EDUCATION_DATA.degree}</h3>
              <h4 className="text-slate-400 font-medium mb-6">{EDUCATION_DATA.institution}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                <strong className="text-slate-300">Relevant Coursework:</strong> <br/> {EDUCATION_DATA.coursework}
              </p>
            </div>
          </motion.div>

          {/* Thesis Item */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative mb-16 md:w-1/2 md:pl-12 md:ml-auto">
            <div className="absolute -left-12 md:-left-[6px] top-6 w-4 h-4 rounded-full bg-secondary ring-4 ring-background shadow-[0_0_0_8px_rgba(236,72,153,0.2)] z-10"></div>
            <div className="font-display font-bold text-secondary mb-2 flex items-center gap-2">
              <BookOpen size={18} /> {THESIS_DATA.status}
            </div>
            <div className="glass p-8 relative hover:-translate-y-1 transition-transform group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl -z-10 group-hover:bg-secondary/10 transition-colors"></div>
              <h3 className="text-xl font-bold mb-3">Thesis: {THESIS_DATA.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {THESIS_DATA.description}
              </p>
            </div>
          </motion.div>

          {/* Extracurriculars Item */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative md:w-1/2 md:pr-12 md:ml-0 md:text-right">
            <div className="absolute -left-12 md:-right-[26px] md:left-auto top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-[0_0_0_8px_rgba(99,102,241,0.2)] z-10"></div>
            <div className="font-display font-bold text-primary mb-2 flex items-center md:justify-end gap-2">
              <Trophy size={18} className="md:order-last" /> Extracurriculars
            </div>
            <div className="glass p-8 relative hover:-translate-y-1 transition-transform group text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10 group-hover:bg-primary/10 transition-colors"></div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
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
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default EducationPage;

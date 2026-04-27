import { motion } from 'framer-motion';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="pb-24"
    >
      <div className="pt-10 text-center px-6 max-w-4xl mx-auto mb-[-60px] relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Comprehensive <span className="text-gradient">Case Studies</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 text-lg"
        >
          Deep dives into my production-ready applications, highlighting complex state management, API efficiency, and architectural problem-solving.
        </motion.p>
      </div>
      
      {/* Reusing the highly customized Projects component */}
      <Projects />
    </motion.div>
  );
};

export default ProjectsPage;

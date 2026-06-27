import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';
import { 
  SiTailwindcss, SiExpress, SiSocketdotio, SiMongodb, SiMongoose,
  SiAppwrite, SiCloudinary, SiRedux, SiReacthookform,
  SiPostman, SiVercel, SiMysql, SiDocker, SiRedis
} from 'react-icons/si';
import { FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaAws } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const getSkillIcon = (skillName) => {
  switch(skillName) {
    case "JavaScript (ES6+)": return <FaJs className="text-yellow-400 text-lg" />;
    case "React.js": return <FaReact className="text-blue-400 text-lg" />;
    case "Tailwind CSS": return <SiTailwindcss className="text-cyan-400 text-lg" />;
    case "HTML5": return <FaHtml5 className="text-orange-500 text-lg" />;
    case "CSS3": return <FaCss3Alt className="text-blue-500 text-lg" />;
    case "Node.js": return <FaNodeJs className="text-green-500 text-lg" />;
    case "Express.js": return <SiExpress className="text-gray-300 text-lg" />;
    case "WebSockets": return <SiSocketdotio className="text-white text-lg" />;
    case "RESTful APIs": return <TbApi className="text-blue-300 text-lg" />;
    case "MongoDB": return <SiMongodb className="text-green-500 text-lg" />;
    case "Mongoose": return <SiMongoose className="text-red-500 text-lg" />;
    case "Appwrite": return <SiAppwrite className="text-pink-500 text-lg" />;
    case "Cloudinary": return <SiCloudinary className="text-blue-500 text-lg" />;
    case "MySQL": return <SiMysql className="text-blue-600 text-lg" />;
    case "Redux Toolkit": return <SiRedux className="text-purple-500 text-lg" />;
    case "React Hook Form": return <SiReacthookform className="text-pink-400 text-lg" />;
    case "Git & GitHub": return <FaGitAlt className="text-orange-600 text-lg" />;
    case "Postman": return <SiPostman className="text-orange-500 text-lg" />;
    case "Vercel": return <SiVercel className="text-white text-lg" />;
    case "Docker": return <SiDocker className="text-blue-400 text-lg" />;
    case "AWS": return <FaAws className="text-amber-500 text-lg" />;
    case "Redis": return <SiRedis className="text-red-500 text-lg" />;
    default: return <div className="w-2 h-2 rounded-full bg-secondary"></div>;
  }
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
          className="flex flex-wrap justify-center gap-8"
        >
          {SKILLS_DATA.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={index} 
                variants={fadeUp}
                className="glass p-6 md:p-8 rounded-3xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden flex flex-col"
              >
                {/* Glow behind card on hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/0 group-hover:bg-primary/10 blur-[60px] rounded-full -z-10 transition-colors duration-500"></div>
                
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                  {category.skills.map((skill, i) => {
                    const skillName = typeof skill === 'object' ? skill.name : skill;
                    const isFamiliar = typeof skill === 'object' ? skill.isFamiliar : false;

                    return (
                      <div key={i} className="flex items-center gap-2.5 bg-surface/50 px-3.5 py-2.5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                        {getSkillIcon(skillName)}
                        <span className="font-medium text-slate-200 text-sm flex flex-wrap items-center gap-1.5">
                          {skillName}
                          {isFamiliar && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 uppercase tracking-wider font-medium">
                              Familiar
                            </span>
                          )}
                        </span>
                      </div>
                    );
                  })}
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

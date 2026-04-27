import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Terminal, Send, CheckCircle } from 'lucide-react';
import { FaLinkedin as Linkedin } from 'react-icons/fa';
import { HERO_DATA } from '../constants';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ContactPage = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    setIsSuccess(false);
    
    const formData = new FormData(event.target);
    
    // Web3Forms Access Key - You can get your free key at https://web3forms.com/
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        setIsSuccess(true);
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error", error);
      setResult("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setResult("");
        setIsSuccess(false);
      }, 5000);
    }
  };

  return (
    <div className="py-20 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to scale your backend or need a robust custom API? I'm currently looking for new opportunities and would love to hear about your project.
          </p>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="glass p-10 md:p-16 relative overflow-hidden rounded-3xl">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-8">Reach Out directly</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-semibold mb-1">Email</h4>
                    <a href={`mailto:${HERO_DATA.email}`} className="text-slate-400 hover:text-primary transition-colors text-sm">
                      {HERO_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-semibold mb-1">LinkedIn</h4>
                    <a href={HERO_DATA.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors text-sm">
                      {HERO_DATA.linkedin.replace('https://', '').replace('www.', '')}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-semibold mb-1">Facebook</h4>
                    <a href={HERO_DATA.facebook} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors text-sm">
                      {HERO_DATA.facebook.replace('https://www.facebook.com/', '')}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-semibold mb-1">Instagram</h4>
                    <a href={HERO_DATA.instagram} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors text-sm">
                      {HERO_DATA.instagram.replace('https://www.instagram.com/', '')}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-semibold mb-1">GitHub</h4>
                    <a href={HERO_DATA.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors text-sm">
                      {HERO_DATA.github.replace('https://github.com/', '')}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <form className="flex flex-col gap-6" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  id="name"
                  required
                  placeholder="Your Name" 
                  className="w-full px-5 py-4 rounded-xl bg-surface/50 border border-white/10 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  required
                  placeholder="Your Email" 
                  className="w-full px-5 py-4 rounded-xl bg-surface/50 border border-white/10 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  name="message"
                  id="message"
                  required
                  placeholder="Tell me about your project..." 
                  rows="4" 
                  className="w-full px-5 py-4 rounded-xl bg-surface/50 border border-white/10 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-y"
                ></textarea>
              </div>
              
              <div className="flex items-center justify-between mt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary self-start disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  {!isSubmitting && <Send size={18} />}
                </button>
                
                {result && (
                  <span className={`text-sm font-medium flex items-center gap-2 ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
                    {isSuccess && <CheckCircle size={16} />}
                    {result}
                  </span>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;

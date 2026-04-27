import { useState } from 'react';
import { Mail, Terminal, Send, CheckCircle } from 'lucide-react';
import { FaLinkedin as Linkedin } from 'react-icons/fa';
import { HERO_DATA } from '../constants';

const Contact = () => {
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
    formData.append("access_key", "569175f7-50fc-4cf4-bad1-5193c1bf2fc4");

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
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass p-10 md:p-16 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's <span className="text-gradient">Connect</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-md">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-semibold mb-1">Email</h4>
                    <a href={`mailto:${HERO_DATA.email}`} className="text-slate-400 hover:text-primary transition-colors">
                      {HERO_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-semibold mb-1">LinkedIn</h4>
                    <a href={HERO_DATA.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                      {HERO_DATA.linkedin.replace('https://', '')}
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
                  placeholder="Your Message" 
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
        </div>
      </div>
    </section>
  );
};

export default Contact;

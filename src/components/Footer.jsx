import { HERO_DATA } from '../constants';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {HERO_DATA.name}. Built with React, Tailwind CSS & Vite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

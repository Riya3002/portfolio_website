import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-cyber-950/90 backdrop-blur-md border-cyber-primary/20 py-3' : 'bg-transparent border-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight text-white font-mono flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
            <span className="text-cyber-primary group-hover:animate-pulse">{'>'}</span>
            <span className="glitch-text" data-text={PERSONAL_INFO.name}>{PERSONAL_INFO.name}</span>
            <span className="animate-pulse text-cyber-secondary">_</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-mono text-slate-400">
            {['Services', 'Experience', 'Projects', 'Skills'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-cyber-primary transition relative group overflow-hidden"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 border border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-black transition rounded-sm font-bold relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative">INIT_CONTACT</span>
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-cyber-900 border-b border-cyber-800 p-6 flex flex-col gap-4 shadow-2xl z-50">
             {['Services', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-lg font-mono text-slate-300 py-2 border-b border-cyber-800 last:border-0 hover:text-cyber-primary"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Cpu, Github, Wifi } from 'lucide-react';
import LogicAnalyzer from './LogicAnalyzer';
import SystemMonitor from './SystemMonitor';
import { PERSONAL_INFO } from '../constants';

const HeroSection: React.FC = () => {
  const [text, setText] = useState('');
  
  useEffect(() => {
    const fullText = "Firmware | PCB Design | IoT | Semiconductor Fabrication";
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden">
        <LogicAnalyzer />
        
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 pt-10 md:pl-8 lg:pl-20 md:pt-0">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-900/80 border border-cyber-primary/30 text-cyber-secondary text-[10px] md:text-xs font-mono mb-6 backdrop-blur-sm">
                  <Wifi className="w-3 h-3 animate-pulse" />
                  <span>LEARNING_STRENGTH: 100%</span>
               </div>
               
               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tighter">
                  Engineer <br/>
                  <div className=" text-cyber-secondary font-bold glitch-text" data-text="Embedded & controls ">
                 Embedded & Controls
                  </div>
               </h1>
               
               <div className="h-8 mb-6 md:mb-8 font-mono text-cyber-primary font-bold text-sm md:text-lg">
                  {'>'} {text}<span className="cursor-blink bg-cyber-secondary text-black px-1 ml-1"> </span>
               </div>

               <p className="text-base md:text-lg text-slate-400 mb-8 md:mb-10 max-w-xl leading-relaxed border-l-2 border-cyber-dim pl-4">
                  {PERSONAL_INFO.about}
               </p>

               <div className="flex flex-wrap gap-4 font-mono">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="group relative px-6 py-3 md:px-8 md:py-4 bg-transparent overflow-hidden border border-cyber-primary text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] text-xs md:text-sm"
                  >
                     <span className="absolute inset-0 w-full h-full bg-cyber-primary/10 group-hover:bg-cyber-primary group-hover:text-black transition duration-300"></span>
                     <span className="relative flex items-center gap-2 group-hover:text-black">
                        <Cpu className="w-4 h-4 md:w-5 md:h-5" /> VIEW_MODULES
                     </span>
                  </button>
                  <a 
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 md:px-8 md:py-4 bg-cyber-900 border border-cyber-800 text-slate-300 hover:text-white hover:border-cyber-secondary transition flex items-center gap-2 text-xs md:text-sm"
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5" /> GITHUB
                  </a>
               </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center md:justify-end relative mt-8 md:mt-0">
               <div className="relative z-10 w-full max-w-sm md:max-w-md">
                 <div className="absolute -inset-4 bg-cyber-primary/20 blur-3xl rounded-full"></div>
                 <SystemMonitor />
                 
                 <div className="absolute -bottom-6 -left-2 md:-bottom-10 md:-left-10 bg-cyber-950 border border-cyber-secondary/50 p-3 md:p-4 rounded shadow-2xl animate-bounce hidden sm:block" style={{ animationDuration: '3s' }}>
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 md:w-10 md:h-10 bg-cyber-secondary/20 rounded flex items-center justify-center">
                          <Cpu className="w-5 h-5 md:w-6 md:h-6 text-cyber-secondary" />
                       </div>
                       <div>
                          <div className="text-[10px] md:text-xs text-slate-400 font-mono">MCU STATUS</div>
                          <div className="text-xs md:text-sm font-bold text-white">STM32: READY</div>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
        </div>
      </header>
  );
};

export default HeroSection;
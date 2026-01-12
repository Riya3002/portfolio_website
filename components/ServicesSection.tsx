import React from 'react';
import { Cpu, CircuitBoard, Globe } from 'lucide-react';
import { SERVICES } from '../constants';

const ServicesSection: React.FC = () => {
  return (
      <section id="services" className="py-16 md:py-24 relative bg-cyber-950 border-t border-cyber-800">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-mono font-bold mb-4 flex items-center gap-4 text-white">
                <span className="text-cyber-primary">01.</span> 
                <span className="glitch-text" data-text="TECHNICAL_ARSENAL">TECHNICAL_ARSENAL</span>
                <div className="flex-1 h-px bg-cyber-800"></div>
              </h2>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6">
              {SERVICES.map((service, idx) => {
                 const Icon = service.id === 'firmware' ? Cpu : service.id === 'pcb' ? CircuitBoard : Globe;
                 return (
                   <div key={idx} className="bg-cyber-900/40 p-6 md:p-8 rounded-lg border border-cyber-800 hover:border-cyber-primary/50 hover:bg-cyber-900/60 transition group relative overflow-hidden">
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-cyber-primary/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                      
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-cyber-950 rounded-lg flex items-center justify-center border border-cyber-800 mb-6 group-hover:scale-110 group-hover:border-cyber-primary transition relative z-10">
                         <Icon className="w-6 h-6 md:w-7 md:h-7 text-cyber-primary" />
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-bold text-white mb-3 relative z-10">{service.title}</h3>
                      <p className="text-slate-400 mb-6 leading-relaxed text-sm h-auto md:h-30 relative z-10">{service.description}</p>
                      
                      <div className="flex flex-wrap gap-2 relative z-10">
                         {service.tags.map(tag => (
                            <span key={tag} className="text-[10px] px-3 py-1 bg-cyber-950 rounded text-cyber-secondary border border-cyber-800">
                               {tag}
                            </span>
                         ))}
                      </div>
                   </div>
                 )
              })}
           </div>
        </div>
      </section>
  );
};

export default ServicesSection;
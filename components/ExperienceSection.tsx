import React from 'react';
import { Terminal, Zap, Search } from 'lucide-react';
import { EXPERIENCE, JOURNEY_IMAGES } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
      <section id="experience" className="py-16 md:py-24 bg-cyber-900/20 border-t border-cyber-800 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
           <h2 className="text-2xl md:text-3xl font-mono font-bold mb-16 md:mb-24 flex items-center gap-4 text-white">
            <span className="text-cyber-primary">02.</span> 
            <span className="glitch-text" data-text="CAREER_JOURNEY">CAREER_JOURNEY</span>
            <div className="flex-1 h-px bg-cyber-800"></div>
          </h2>
          
          <div className="space-y-20 md:space-y-32 mb-20 md:mb-32">
            {EXPERIENCE.map((exp, index) => (
              <div key={exp.id} className="relative grid md:grid-cols-12 gap-8 md:gap-12 items-center group">
                {/* Connecting Line */}
                <div className="hidden md:block absolute left-[50%] top-[-8rem] bottom-[-8rem] w-px bg-cyber-800 border-r border-dashed border-cyber-800/50 -z-10 group-last:bottom-0"></div>
                
                {/* Text Side */}
                <div className={`md:col-span-6 ${index % 2 === 0 ? 'md:order-1 md:text-right md:pr-12' : 'md:order-3 md:pl-12 text-left'}`}>
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <span className="inline-block px-3 py-1 mb-3 md:mb-4 text-[10px] md:text-xs font-mono text-cyber-primary border border-cyber-primary/20 rounded bg-cyber-primary/5">
                        {exp.period}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyber-primary transition">{exp.role}</h3>
                    <h4 className="text-base md:text-lg text-slate-400 mb-4 md:mb-6 font-mono">
                        <span className="text-cyber-secondary">@</span>
                        {exp.website ? (
                           <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline decoration-cyber-secondary/40 underline-offset-2 hover:text-cyber-primary hover:decoration-cyber-primary transition"
                           >
                              {exp.company}
                           </a>
                        ) : (
                           exp.company
                        )}
                     </h4>
                      <p className="text-slate-400 leading-relaxed mb-4 md:mb-6 text-sm max-w-md">
                         {exp.description}
                      </p>
                      {exp.highlights && (
                        <ul className={`text-sm text-slate-500 space-y-2 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                          {exp.highlights.slice(0, 8).map((h, i) => (
                             <li key={i} className="flex gap-2 items-center">
                                {index % 2 !== 0 && <span className="text-cyber-secondary">›</span>}
                                {h}
                                {index % 2 === 0 && <span className="text-cyber-secondary">‹</span>}
                             </li>
                          ))}
                        </ul>
                      )}
                    </div>
                </div>

                {/* Scrapbook Visual Side */}
                <div className={`md:col-span-6 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                   {exp.images ? (
                      <div className="relative h-60 md:h-72 w-full max-w-sm mx-auto group-hover:scale-105 transition duration-500 ease-out mt-8 md:mt-0">
                         {exp.images.map((img, i) => (
                            <div 
                              key={i} 
                              className={`absolute top-0 left-0 w-full h-full p-3 bg-white shadow-2xl transform transition-transform duration-500 ${i === 0 ? 'rotate-[-3deg] z-10 group-hover:rotate-[-6deg] group-hover:translate-x-[-15px]' : 'rotate-[2deg] z-0 group-hover:rotate-[5deg] group-hover:translate-x-[15px]'}`}
                            >

                               <div className="w-full h-full overflow-hidden bg-slate-200 relative">
                                  <div className="absolute inset-0 bg-cyber-primary/10 mix-blend-overlay"></div>
                                  <img src={img} alt="Work memory" className="w-full h-full object-cover filter contrast-125 hover:grayscale-0 transition" />
                               </div>
                               {/* Tape effect */}
                               <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/80 rotate-[-1deg] backdrop-blur-sm opacity-90 shadow-sm"></div>
                            </div>
                         ))}
                      </div>
                   ) : (
                      <div className="bg-cyber-900/50 h-56 md:h-64 w-full max-w-sm mx-auto rounded-lg border border-cyber-800 flex items-center justify-center relative overflow-hidden group-hover:border-cyber-primary/30 transition mt-8 md:mt-0">
                          <Terminal className="w-16 h-16 text-cyber-800" />
                          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                      </div>
                   )}
                </div>

                {/* Timeline Center Dot */}
                <div className="hidden md:flex md:col-span-12 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-cyber-950 border-4 border-cyber-800 z-10 group-hover:border-cyber-primary group-hover:scale-125 transition duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Improved Creative Carousel Section */}
        <div className="relative pt-10 pb-20 border-t border-cyber-800 bg-cyber-950/50">
           {/* Section Label */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyber-950 px-6 py-1 border border-cyber-primary/30 rounded-full z-20 w-max">
              <span className="font-mono text-[10px] md:text-xs text-cyber-primary animate-pulse tracking-widest flex items-center gap-2">
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyber-accent rounded-full animate-ping"></div>
                 VISUAL_MEMORY_STREAM // ENCRYPTED
              </span>
           </div>

           {/* Carousel Track */}
           <div className="flex overflow-hidden relative group py-8">
              {/* Vignette Gradients */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-cyber-950 via-cyber-950/80 to-transparent z-20 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-cyber-950 via-cyber-950/80 to-transparent z-20 pointer-events-none"></div>

              {/* Infinite Loop Track */}
              <div className="flex animate-marquee gap-4 md:gap-8 group-hover:[animation-play-state:paused] px-8">
                 {[...JOURNEY_IMAGES, ...JOURNEY_IMAGES, ...JOURNEY_IMAGES].map((img, idx) => (
                    <div 
                      key={idx} 
                      className="group/card relative w-[240px] h-[160px] md:w-[320px] md:h-[220px] flex-shrink-0 cursor-pointer transition-all duration-500 ease-out transform -skew-x-3 md:-skew-x-6 hover:skew-x-0 hover:scale-105 md:hover:scale-110 hover:z-30 perspective-1000"
                    >
                        {/* Connection Lines (Decoration) */}
                        <div className="absolute -top-4 left-1/2 w-px h-4 bg-cyber-800 group-hover/card:bg-cyber-primary transition-colors"></div>
                        
                        {/* Main Card Container */}
                        <div className="relative w-full h-full bg-cyber-900 border border-cyber-800 group-hover/card:border-cyber-primary overflow-hidden shadow-lg group-hover/card:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all">
                           
                           {/* Image */}
                           <img 
                             src={img} 
                             alt={`Log ${idx}`} 
                             className="w-full h-full object-cover opacity-60 group-hover/card:opacity-100 grayscale group-hover/card:grayscale-0 transition-all duration-500"
                           />
                           
                           {/* Holographic Overlay (Default State) */}
                           <div className="absolute inset-0 bg-cyber-primary/10 mix-blend-overlay opacity-100 group-hover/card:opacity-0 transition-opacity duration-300 pointer-events-none">
                              <div className="w-full h-full bg-[linear-gradient(transparent_2px,#000_2px)] bg-[length:100%_4px] opacity-20"></div>
                           </div>

                           {/* Scanning Effect (Hover State) */}
                           <div className="absolute inset-0 hidden group-hover/card:block pointer-events-none overflow-hidden">
                              <div className="absolute inset-x-0 h-1 bg-cyber-primary/80 shadow-[0_0_15px_#00f0ff] animate-scan top-0"></div>
                           </div>
                           
                           {/* Metadata Overlay (Hover State) */}
                           <div className="absolute bottom-0 left-0 right-0 bg-cyber-950/90 backdrop-blur-sm p-2 md:p-3 translate-y-full group-hover/card:translate-y-0 transition-transform duration-300 border-t border-cyber-primary/30">
                              <div className="flex justify-between items-center font-mono text-[9px] md:text-[10px] text-cyber-primary">
                                 <span className="flex items-center gap-1"><Search className="w-3 h-3"/> DATA_LOG_0{idx}</span>
                                 <span className="text-slate-400">42.3°N, 71.1°W</span>
                              </div>
                              <div className="text-[8px] md:text-[9px] text-slate-500 mt-1 font-mono uppercase tracking-tighter">
                                 Sector 7G // Fabrication Module
                              </div>
                           </div>

                           {/* Corner Accents */}
                           <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white opacity-50"></div>
                           <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white opacity-50"></div>
                           <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white opacity-50"></div>
                           <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white opacity-50"></div>
                           
                           {/* Floating Status Badge */}
                           <div className="absolute top-2 right-2 bg-black/70 border border-cyber-accent/50 text-cyber-accent text-[8px] font-bold px-1 py-0.5 rounded opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100 flex items-center gap-1">
                              <Zap className="w-2 h-2" /> LIVE
                           </div>
                        </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
  );
};

export default ExperienceSection;
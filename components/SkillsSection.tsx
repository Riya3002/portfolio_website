import React from 'react';
import { Cpu, Globe, Code, Radio, Zap, Box, Terminal, Palette, Wrench, MessageSquare, Briefcase } from 'lucide-react';
import { SKILLS } from '../constants';

const SkillsSection: React.FC = () => {
  // Rotate through a series of cyber colors for different domains
  const domainColors = [
    { primary: 'text-cyber-primary', border: 'border-cyber-primary', shadow: 'shadow-[0_0_15px_rgba(0,240,255,0.3)]', glow: 'shadow-[0_0_8px_rgba(0,240,255,0.5)]', bgGlow: 'bg-cyber-primary' },
    { primary: 'text-cyber-secondary', border: 'border-cyber-secondary', shadow: 'shadow-[0_0_15px_rgba(0,255,157,0.3)]', glow: 'shadow-[0_0_8px_rgba(0,255,157,0.5)]', bgGlow: 'bg-cyber-secondary' },
    { primary: 'text-purple-400', border: 'border-purple-400', shadow: 'shadow-[0_0_15px_rgba(168,85,247,0.3)]', glow: 'shadow-[0_0_8px_rgba(168,85,247,0.5)]', bgGlow: 'bg-purple-400' },
    { primary: 'text-pink-400', border: 'border-pink-400', shadow: 'shadow-[0_0_15px_rgba(244,114,182,0.3)]', glow: 'shadow-[0_0_8px_rgba(244,114,182,0.5)]', bgGlow: 'bg-pink-400' },
    { primary: 'text-yellow-400', border: 'border-yellow-400', shadow: 'shadow-[0_0_15px_rgba(250,204,21,0.3)]', glow: 'shadow-[0_0_8px_rgba(250,204,21,0.5)]', bgGlow: 'bg-yellow-400' },
  ];

  const getDomainIcon = (domain: string) => {
    const d = domain.toLowerCase();
    if (d.includes('embedded')) return Cpu;
    if (d.includes('web')) return Globe;
    if (d.includes('testing') || d.includes('tools')) return Wrench;
    if (d.includes('graphic')) return Palette;
    if (d.includes('soft') || d.includes('professional')) return Briefcase;
    return Box;
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-cyber-800 bg-cyber-900/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-12 md:mb-16 flex items-center gap-4 text-white">
          <span className="text-cyber-primary">04.</span>
          <span className="glitch-text" data-text="TECH_STACK_MODULES">TECH_STACK_MODULES</span>
          <div className="flex-1 h-px bg-cyber-800"></div>
        </h2>

        <div className="space-y-20">
          {SKILLS.map((domain, domainIdx) => {
            const color = domainColors[domainIdx % domainColors.length];
            const DomainIcon = getDomainIcon(domain.domain);

            return (
              <div key={domain.domain} className="flex flex-col">
                {/* Domain Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center border-2 ${color.border} ${color.primary} ${color.shadow}`}>
                    <DomainIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{domain.domain}</h3>
                    <div className={`h-1 w-12 mt-1 rounded-full ${color.bgGlow} ${color.glow}`}></div>
                  </div>
                </div>

                {/* IC Chips Grid */}
                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8 md:gap-10">
                  {domain.categories.map((category) => {
                    const name = category.name.toLowerCase();
                    const CategoryIcon = name.includes('lang') ? Code : 
                                       name.includes('micro') ? Cpu : 
                                       name.includes('proto') ? Radio : 
                                       name.includes('front') ? Box : 
                                       name.includes('back') ? Zap : 
                                       name.includes('design') ? Palette : 
                                       name.includes('lead') || name.includes('comm') ? MessageSquare : 
                                       Terminal;

                    return (
                      <div 
                        key={category.name} 
                        className={`group relative bg-cyber-900 p-6 md:p-8 border border-cyber-800 transition-all duration-300 hover:border-white/20 shadow-lg overflow-hidden`}
                      >
                        {/* IC Chip Side Legs - Left */}
                        <div className="absolute -left-1 top-4 bottom-4 w-1.5 flex flex-col justify-between py-2 z-10">
                          {[...Array(6)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-full h-2 rounded-l-sm transition-all duration-300 bg-slate-700 group-hover:${color.bgGlow} group-hover:shadow-[0_0_8px_rgba(0,240,255,0.6)]`}
                              style={{ transitionDelay: `${i * 30}ms` }}
                            ></div>
                          ))}
                        </div>

                        {/* IC Chip Side Legs - Right */}
                        <div className="absolute -right-1 top-4 bottom-4 w-1.5 flex flex-col justify-between py-2 z-10">
                          {[...Array(6)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-full h-2 rounded-r-sm transition-all duration-300 bg-slate-700 group-hover:${color.bgGlow} group-hover:shadow-[0_0_8px_rgba(0,240,255,0.6)]`}
                              style={{ transitionDelay: `${i * 30}ms` }}
                            ></div>
                          ))}
                        </div>
                        
                        {/* IC Circle Indent (Pin 1 Indicator) */}
                        <div className={`absolute top-4 left-4 w-3 h-3 rounded-full bg-cyber-950 border transition-colors ${color.border} opacity-30 group-hover:opacity-100 group-hover:shadow-[0_0_5px_rgba(0,240,255,0.5)]`}></div>

                        <div className="pl-6 relative z-10 cursor-crosshair">
                          <div className="flex items-center gap-3 mb-6">
                            <div className={`${color.primary}`}>
                              <CategoryIcon size={20} />
                            </div>
                            <h4 className="text-base md:text-lg font-bold text-white tracking-wide uppercase font-mono">
                              {category.name}
                            </h4>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {category.items.map((skill) => (
                              <span 
                                key={skill} 
                                className={`px-3 py-1 text-[10px] md:text-xs font-mono border transition-all duration-300 rounded-sm cursor-crosshair bg-cyber-950 text-slate-300 border-cyber-800 hover:text-white hover:${color.border} shadow-[0_0_5px_rgba(0,0,0,0.3)]`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Micro-Interaction Colored Slider Line */}
                        <div className={`absolute bottom-0 left-0 h-0.5 transition-all duration-700 w-0 group-hover:w-full ${color.bgGlow} ${color.glow}`}></div>

                        {/* Diagnostic HUD Data (Aesthetic Only) */}
                        <div className="absolute bottom-2 right-4 opacity-0 group-hover:opacity-40 transition-opacity duration-500 font-mono text-[8px] text-slate-500 pointer-events-none hidden md:block">
                          CHIP_ID: {category.name.toUpperCase().substring(0,4)}<br/>
                          STATUS: INTEGRATED
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Footer Technical Note */}
        <div className="mt-16 p-4 bg-cyber-950/50 border border-cyber-800 rounded-lg text-center">
           <p className="text-[10px] md:text-xs font-mono text-slate-500 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyber-secondary animate-pulse"></span>
              ALL SYSTEMS OPERATIONAL // READY FOR INTEGRATION
           </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
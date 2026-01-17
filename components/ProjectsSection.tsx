import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectsSection: React.FC = () => {
  return (
      <section id="projects" className="py-16 md:py-24 relative bg-cyber-950 border-t border-cyber-800">
        <div className="container mx-auto px-6 max-w-7xl">
           <h2 className="text-2xl md:text-3xl font-mono font-bold mb-10 md:mb-16 flex items-center gap-4 text-white">
            <span className="text-cyber-primary">03.</span> 
            <span className="glitch-text" data-text="FEATURED_PROJECTS">FEATURED_PROJECTS</span>
            <div className="flex-1 h-px bg-cyber-800"></div>
          </h2>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project) => (
                 <div key={project.id} className="group relative h-[380px] md:h-[400px] rounded-xl overflow-hidden border border-cyber-800 bg-cyber-900 transition-all duration-500 hover:border-cyber-primary/50 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)]">
                    
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                       <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40 grayscale group-hover:grayscale-0" />
                       <div className="absolute inset-0 bg-gradient-to-t from-cyber-950 via-cyber-950/90 to-transparent opacity-90"></div>
                    </div>

                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
                       {/* Floating Tags */}
                       <div className="absolute top-6 right-6 flex flex-col gap-2 translate-y-[-10px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 delay-100">
                          {project.tags.slice(0,8).map(tag => (
                             <span key={tag} className="px-3 py-1 bg-cyber-950/80 backdrop-blur-md text-[10px] font-mono text-cyber-primary border border-cyber-primary/20 rounded text-right shadow-lg">
                                {tag}
                             </span>
                          ))}
                       </div>

                       <h3 className="text-xl md:text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition duration-300">{project.title}</h3>
                       
                       <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                           <p className="text-slate-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-300 delay-75">
                              {project.description}
                           </p>
                       </div>
                       
                       <div className="flex gap-4 items-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-300 delay-150 mt-2">
                          {/* {project.github && (
                            <a href={project.github} className="p-2 rounded bg-cyber-800 hover:bg-cyber-primary hover:text-black text-white transition">
                               <Github className="w-5 h-5" />
                            </a>
                          )} */}
                          <a 
                              href={project.link}
                              className="text-xs font-mono font-bold text-cyber-secondary flex items-center gap-2 hover:text-white transition uppercase tracking-wider">
                             View Case Study <ExternalLink className="w-3 h-3" />
                          </a>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>
  );
};

export default ProjectsSection;
import React from 'react';
import { BookOpen, Trophy } from 'lucide-react';
import { EDUCATION, AWARDS } from '../constants';

const AwardsSection: React.FC = () => {
  return (
      <section id="awards" className="py-16 md:py-24 bg-cyber-950 border-t border-cyber-800">
         <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-10 md:gap-16">
            
            {/* Education */}
            <div>
               <h2 className="text-xl md:text-2xl font-mono font-bold mb-6 md:mb-8 text-white flex items-center gap-3">
                  <BookOpen className="text-cyber-primary"/> ACADEMIC_KERNEL
               </h2>
               {EDUCATION.map(edu => (
                  <div key={edu.id} className="bg-cyber-900/30 p-6 border-l-2 border-cyber-primary relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-5">
                        <BookOpen size={64} />
                     </div>
                     <h3 className="text-base md:text-lg font-bold text-white mb-2">{edu.degree}</h3>
                     <p className="text-cyber-secondary text-xs md:text-sm mb-1">{edu.institution}</p>
                     <p className="text-slate-500 text-xs font-mono mb-4">{edu.period} | GPA: {edu.gpa}</p>
                     <div className="flex flex-wrap gap-1">
                        {edu.courses.map(c => (
                           <span key={c} className="text-[10px] bg-cyber-950 px-2 py-1 text-slate-400 border border-cyber-800 rounded">{c}</span>
                        ))}
                     </div>
                  </div>
               ))}
            </div>

            {/* Awards */}
            <div>
               <h2 className="text-xl md:text-2xl font-mono font-bold mb-6 md:mb-8 text-white flex items-center gap-3">
                  <Trophy className="text-yellow-500"/> ACHIEVEMENTS
               </h2>
               <div className="space-y-4">
                  {AWARDS.map(award => (
                     <div key={award.id} className="flex gap-4 p-4 bg-cyber-900/30 border border-cyber-800 hover:border-yellow-500/30 transition group rounded">
                        <div className="mt-1">
                           <Trophy className="w-5 h-5 text-slate-600 group-hover:text-yellow-500 transition" />
                        </div>
                        <div>
                           <h3 className="font-bold text-white group-hover:text-yellow-400 transition text-sm md:text-base">{award.title}</h3>
                           <p className="text-[10px] md:text-xs font-mono text-slate-500 mb-2">{award.organization} // {award.date}</p>
                           <p className="text-xs md:text-sm text-slate-400">{award.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
  );
};

export default AwardsSection;
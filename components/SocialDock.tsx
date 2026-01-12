import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const SocialDock: React.FC = () => {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      <div className="flex flex-col gap-4 bg-cyber-950/80 backdrop-blur-md p-3 rounded-2xl border border-cyber-800 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        {[
          { icon: Github, link: PERSONAL_INFO.socials.github, color: 'hover:text-white' },
          { icon: Linkedin, link: PERSONAL_INFO.socials.linkedin, color: 'hover:text-blue-400' },
          { icon: Mail, link: `mailto:${PERSONAL_INFO.email}`, color: 'hover:text-red-400' },
          { icon: Instagram, link: PERSONAL_INFO.socials.instagram, color: 'hover:text-sky-400' },
        ].map((item, idx) => (
           <a 
             key={idx}
             href={item.link}
             target="_blank"
             rel="noreferrer"
             className={`p-2 rounded-xl text-slate-400 transition-all duration-300 transform hover:scale-110 hover:bg-white/10 ${item.color}`}
           >
             <item.icon className="w-5 h-5" />
           </a>
        ))}
      </div>
    </div>
  );
};

export default SocialDock;
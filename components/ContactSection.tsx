import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { useState } from 'react';
import ContactPanel from './contactpanel';

const ContactSection: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
      <section id="contact" className="py-16 md:py-24 border-t border-cyber-800 relative bg-cyber-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyber-900 via-cyber-950 to-cyber-950 opacity-50"></div>
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white tracking-tight glitch-text" data-text="INITIATE HANDSHAKE">
            INITIATE HANDSHAKE
          </h2>
          <p className="text-slate-400 mb-10 md:mb-12 max-w-xl mx-auto text-base md:text-lg">
            My inbox is open for firmware audits, full-stack contracts, or just geeking out over new microcontrollers.
          </p>
          
          <button
           onClick={() => {
              setOpen(true);
            }}
            className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-cyber-primary text-black font-bold font-mono text-base md:text-lg rounded-sm hover:bg-white transition hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
          >
            <Mail className="w-5 h-5" />
            SEND_PACKET
          </button>
          <ContactPanel open={open} onClose={() => setOpen(false)} />
          <div className="mt-16 md:mt-24 pt-8 border-t border-cyber-800 flex flex-col md:flex-row justify-between items-center text-slate-600 text-[10px] md:text-xs font-mono">
            <p>© {new Date().getFullYear()} {PERSONAL_INFO.name} // SYSTEM_NORMAL</p>
            <div className="flex gap-8 mt-4 md:mt-0">
               <a href={PERSONAL_INFO.socials.github} className="hover:text-cyber-primary transition flex items-center gap-2"><Github className="w-4 h-4"/> GITHUB</a>
               <a href={PERSONAL_INFO.socials.linkedin} className="hover:text-cyber-primary transition flex items-center gap-2"><Linkedin className="w-4 h-4"/> LINKEDIN</a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactSection;
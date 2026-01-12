import React from 'react';
import SocialDock from './components/SocialDock';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AwardsSection from './components/AwardsSection';
import ContactSection from './components/ContactSection';
import ChatWidget from './components/ChatWidget';
import { useEffect } from 'react';

const App: React.FC = () => {
    useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "05c84c1f-39ac-4756-90ac-3a943f26260d";
    const s = document.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = true;
    document.body.appendChild(s);

      // hide the bubble
    window.$crisp.push(["do", "chat:hide"]);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-950 text-slate-300 font-sans selection:bg-cyber-primary selection:text-black overflow-x-hidden relative">
      <SocialDock />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AwardsSection />
      <ContactSection />
      <ChatWidget />
    </div>
  );
};

export default App;
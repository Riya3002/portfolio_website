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

const App: React.FC = () => {

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
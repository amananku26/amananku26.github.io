import React from "react";
import dynamic from 'next/dynamic';
import NavPart from "../NavPart";
import Home from "./Home";

const About = dynamic(() => import('./About'));
const Projects = dynamic(() => import('./Projects'));
const Experience = dynamic(() => import('./Experience'));
const Skills = dynamic(() => import('./Skills'));
const Now = dynamic(() => import('./Now'));
const Elsewhere = dynamic(() => import('./Elsewhere'));
const Contact = dynamic(() => import('./Contact'));
const Footer = dynamic(() => import('../Footer'));

const HomePage = ({ recruiterMode, setRecruiterMode, soundEnabled, toggleSound, theme, toggleTheme, onSignal }) => {
  return (
    <div>
      <NavPart recruiterMode={recruiterMode} setRecruiterMode={setRecruiterMode} soundEnabled={soundEnabled} toggleSound={toggleSound} theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <About />
      <Projects onSignal={onSignal} />
      <Experience />
      <Skills />
      <Now />
      <Elsewhere />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;

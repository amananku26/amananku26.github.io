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

const HomePage = ({ recruiterMode, setRecruiterMode, xrayMode, setXrayMode, soundEnabled, toggleSound, theme, toggleTheme, onSignal }) => {
  return (
    <>
      <NavPart recruiterMode={recruiterMode} setRecruiterMode={setRecruiterMode} xrayMode={xrayMode} setXrayMode={setXrayMode} soundEnabled={soundEnabled} toggleSound={toggleSound} theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content">
        <Home xrayMode={xrayMode} setXrayMode={setXrayMode} />
        <About />
        <Projects onSignal={onSignal} />
        <Experience />
        <Skills xrayMode={xrayMode} />
        <Now />
        <Elsewhere />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

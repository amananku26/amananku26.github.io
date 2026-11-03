import React from "react";
import dynamic from 'next/dynamic';
import NavPart from "../NavPart";
import Home from "./Home";

const About = dynamic(() => import('./About'));
const TaglineReveal = dynamic(() => import('./TaglineReveal'));
const Projects = dynamic(() => import('./Projects'));
const Approach = dynamic(() => import('./Approach'));
const Experience = dynamic(() => import('./Experience'));
const Skills = dynamic(() => import('./Skills'));
const Now = dynamic(() => import('./Now'));
const Elsewhere = dynamic(() => import('./Elsewhere'));
const Faq = dynamic(() => import('./Faq'));
const Contact = dynamic(() => import('./Contact'));
const Footer = dynamic(() => import('../Footer'));

const HomePage = ({ recruiterMode, setRecruiterMode, xrayMode, setXrayMode, soundEnabled, toggleSound, theme, toggleTheme, onSignal }) => {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <NavPart />
      <main id="main-content">
        <Home />
        <TaglineReveal />
        <Projects onSignal={onSignal} />
        <Approach />
        <Experience />
        <About />
        <Skills xrayMode={xrayMode} />
        <Now />
        <Elsewhere />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

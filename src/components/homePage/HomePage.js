import React from "react";
import NavPart from "../NavPart";
import "../../styles/_homePage.scss";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../Footer";
import Skills from "./Skills";
import Now from "./Now";
import Elsewhere from "./Elsewhere";
import Experience from "./Experience";

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

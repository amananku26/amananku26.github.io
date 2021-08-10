import React from "react";
import NavPart from "../NavPart";
import "../../styles/_homePage.scss";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../Footer";
import Skills from "./Skills";
import GitHub from "./GiHub";
import SocialProfiles from "./Social_profiles";

const HomePage = () => {
  return (
    <div>
      <NavPart />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GitHub/>
      <SocialProfiles/>
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;

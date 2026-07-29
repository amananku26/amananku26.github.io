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

const HomePage = ({countData}) => {
  return (
    <div>
      <NavPart />
      <Home countData={countData}/>
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Now />
      <Elsewhere />
      {/* <GitHub/> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;

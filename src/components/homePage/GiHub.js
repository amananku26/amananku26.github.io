import { motion } from "framer-motion";
import React from "react";
import { Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import CodersRankActivity from "@codersrank/activity";
window.customElements.define("codersrank-activity", CodersRankActivity);
const GitHub = () => {
  const [element, controls] = useScroll();
  return (
    <div id="skills" className="skills-section">
      <motion.div
        variants={scrollReveal}
        ref={element}
        animate={controls}
        className="container"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Social</span>Profiles
          </h1>
        </div>
        <Row>
          <codersrank-activity username="amananku26"></codersrank-activity>
          <br />
          <img
            src="https://activity-graph.herokuapp.com/graph?username=amananku26&theme=github"
            alt="GitHub Activity Graph"
            width="100%"
          />
          <br />
          <br />
          <img src="https://github-readme-stats.vercel.app/api?username=amananku26&bg_color=30,e96443,904e95&title_color=fff&text_color=fff" width="100%" alt="Aman's github stats" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=amananku26&layout=compact" width="100%" alt="Aman's github stats" />
          <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=amananku26&repo=covidSaharsa" width="100%" alt="Aman's github stats" />
        </Row>
        <Row></Row>
      </motion.div>
    </div>
  );
};

export default GitHub;

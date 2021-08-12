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
          <img src="https://github-readme-stats.vercel.app/api?username=amananku26&count_private=true&&show_icons=true&count_private=true&line_height=27" width="100%" alt="Aman's github stats" />
          
        </Row>
        <Row></Row>
      </motion.div>
    </div>
  );
};

export default GitHub;

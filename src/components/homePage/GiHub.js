import { motion } from "framer-motion";
import React from "react";
import { Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import CodersRankActivity from "@codersrank/activity";
import CodersRankSkillsChart from "@codersrank/skills-chart";

window.customElements.define("codersrank-skills-chart", CodersRankSkillsChart);
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
          <codersrank-skills-chart username="amananku26"></codersrank-skills-chart>
          <img
            src="https://activity-graph.herokuapp.com/graph?username=amananku26&theme=github"
            alt="GitHub Activity Graph"
            width="100%"
          />
          <img
            src="https://activity-graph.herokuapp.com/graph?username=amananku26&theme=github"
            alt="GitHub Activity Graph"
            width="100%"
          />
        </Row>
        <Row></Row>
      </motion.div>
    </div>
  );
};

export default GitHub;

import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import CodersRankActivity from '@codersrank/activity';
// import CodersrankSummary from '@codersrank/summary';

// register web component as <codersrank-summary> element
// window.customElements.define('codersrank-summary', CodersrankSummary);
window.customElements.define('codersrank-activity', CodersRankActivity);
const GitHub = () => {
  const [element, controls] = useScroll();
//   
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
        </Row>
        <Row>
        {/* <codersrank-summary username="amananku26"></codersrank-summary> */}
        </Row>
      </motion.div>
    </div>
  );
};

export default GitHub;

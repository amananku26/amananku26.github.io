import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Img from "react-cool-img";

const skills = [
  {
    logo: "/images/skills/html.png",
    name: "Html",
    link: "https://www.w3schools.com/html/",
  },
  {
    logo: "/images/skills/css-3.png",
    name: "Css",
    link: "https://www.w3schools.com/css/",
  },
  {
    logo: "/images/skills/js.png",
    name: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    logo: "/images/skills/git-logo.png",
    name: "Git",
    link: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control",
  },
  {
    logo: "/images/skills/bootstrap.png",
    name: "Bootstrap",
    link: "https://react-bootstrap.github.io/getting-started/introduction/",
  },
  {
    logo: "/images/skills/logo.png",
    name: "Material UI",
    link: "https://material-ui.com/",
  },
  {
    logo: "/images/skills/react.png",
    name: "ReactJS",
    link: "https://reactjs.org/",
  },
  {
    logo: "/images/skills/nextjs.png",
    name: "NextJS",
    link: "https://nextjs.org/",
  },
  {
    logo: "/images/skills/redux.png",
    name: "Redux/Redux-thunk/Redux-Saga",
    link: "https://redux.js.org/",
  },
  {
    logo: "/images/skills/sass.png",
    name: "Sass",
    link: "https://sass-lang.com/",
  },
  {
    logo: "/images/skills/node.jpeg",
    name: "NodeJS",
    link: "https://nodejs.org/en/docs/",
  },
  {
    logo: "/images/skills/ex.jpg",
    name: "ExpressJS",
    link: "https://expressjs.com/",
  },
  {
    logo: "/images/skills/db.png",
    name: "MongoDB",
    link: "https://docs.mongodb.com/",
  },
  {
    logo: "/images/skills/sentry.png",
    name: "Sentry.io",
    link: "https://docs.sentry.io/",
  },
  {
    logo: "/images/skills/i18.png",
    name: "i18next",
    link: "https://www.i18next.com/",
  },
];

const Skills = () => {
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
            <span className="chonburi-font green-text">Ski</span>lls
          </h1>
        </div>
        <Row>
          {skills.map((skill, index) => {
            return (
              <Col key={index + 1}>
                <div className="skills">
                  <Img
                    placeholder="/images/skills/lod.jpeg"
                    src={skill.logo}
                    error="/images/skills/error.png"
                    alt="React Cool Img"
                  />
                  <a rel="noopener noreferrer" href={skill.link} target="_blank">
                    {" "}
                    <h6>{skill.name}</h6>{" "}
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </motion.div>
    </div>
  );
};

export default Skills;

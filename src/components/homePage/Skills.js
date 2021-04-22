import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";

const skills = [
  {
    logo: "/images/skills/html.png",
    name: "Html",
    link:"https://www.w3schools.com/html/"
  },
  {
    logo: "/images/skills/css-3.png",
    name: "Css",
    link:"https://www.w3schools.com/css/"
  },
  {
    logo: "/images/skills/js.png",
    name: "Javascript",
    link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  // {
  //   logo: "/images/skills/java.png",
  //   name: "Java",
  // },
  // {
  //   logo: "/images/skills/c-sharp.png",
  //   name: "C#",
  // },
  {
    logo: "/images/skills/git-logo.png",
    name: "Git",
    link:"https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
  },
  {
    logo: "/images/skills/bootstrap.png",
    name: "Bootstrap",
    link:"https://react-bootstrap.github.io/getting-started/introduction/"
  },
  {
    logo: "/images/skills/logo.png",
    name: "Material UI",
    link:"https://material-ui.com/"
  },
  {
    logo: "/images/skills/react.png",
    name: "React",
    link:"https://reactjs.org/"
  },
  {
    logo: "https://iconape.com/wp-content/files/gm/82643/svg/next-js.svg",
    name: "NextJS",
    link:"https://nextjs.org/"
  },
  {
    logo: "/images/skills/redux.png",
    name: "Redux/Redux-thunk/Redux-Saga",
    link:"https://redux.js.org/"
  },
  {
    logo: "/images/skills/sass.png",
    name: "Sass",
    link:"https://sass-lang.com/"
  },
  {
    logo: "https://img.icons8.com/color/80/000000/nodejs.png",
    name: "NodeJS",
    link:"https://nodejs.org/en/docs/"
  },
  {
    logo: "https://kalvanaveen.github.io/WebDevelopmentResources.github.io/Images/Express-JS-min.png",
    name: "ExpressJS",
    link:"https://expressjs.com/"
  },
  {
    logo: "https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png",
    name: "MongoDB",
    link:"https://docs.mongodb.com/"
  },
  {
    logo: "https://a.slack-edge.com/95b9/img/services/sentry_512.png",
    name: "Sentry.io",
    link:"https://docs.sentry.io/"
  },
  {
    logo: "https://gblobscdn.gitbook.com/spaces%2F-L9iS6WpW81N7RGRTQ-K%2Favatar.png?alt=media",
    name: "i18next",
    link:"https://www.i18next.com/"
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
          {skills.map((skill) => {
            return (
              <Col>
                <div className="skills">
                  <img src={skill.logo} alt="" />
                  <a href={skill.link} target="_blank" rel="noreferrer"> <h6>{skill.name}</h6> </a>
                 
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

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import WorkIcon from "@material-ui/icons/Work";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SkillSvg from "../../images/about-shape.svg";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";

const About = () => {
  const [tab, setTab] = useState("experience");
  const [element, controls] = useScroll();

  return (
    <motion.div id="about" className="about pb-6 pt-6">
      <img className="skills-img" src={SkillSvg} alt="" />

      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container"
      >
        <Row className="">
          <Col className="p-0 text-center" md={5}>
            <img
              placeholder="/images/skills/lod.jpeg"
              src="/images/222.gif"
              error="/images/skills/error.png"
              alt="React Cool Img"
              height="50%"
            />
          </Col>
          <Col className="" md={7}>
            <div className="about-info">
              <h1 className="pb-4">
                <span className="chonburi-font green-text ">Abo</span>ut Me
              </h1>
              <p className="details">
                Senior Frontend Engineer with 5+ years of experience building
                scalable frontend systems with React, Next.js, and TypeScript.
                I specialize in SSR/SSG, Core Web Vitals, internationalization,
                Headless CMS integrations, and reusable component architecture.
                I enjoy translating complex business needs into fast,
                accessible, reliable product experiences.
              </p>
              <div className="d-flex align-items-center resume-section ">
                <h6>Resume :</h6>
                <a rel="noopener noreferrer" href="/Aman_Anku_FE_Resume.pdf" target="_blank">
                  View
                </a>
              </div>
              <div className="mt-5">
                <Row className="tabs mb-2">
                  <Col
                    className={`
                      ${tab === "experience"
                        ? "active-tab custom-mr-3"
                        : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("experience")}
                  >
                    <WorkIcon />
                    <h5>Work Experiences</h5>
                  </Col>
                  <Col
                    className={`
                      ${tab === "education"
                        ? "active-tab custom-ml-3"
                        : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("education")}
                  >
                    <LocalLibraryIcon />
                    <h5>Educations</h5>
                  </Col>
                </Row>
                <br/>
                <div className="about-sub-data">
                  {tab === "experience" ? (
                    <div className="work-experiences">
                      <h5>Grid Dynamics <small>(Jul 2025 – Present)</small></h5>
                      <ul>
                        <li>
                          Senior Frontend Engineer delivering scalable React.js and TypeScript UI components for VISA’s global enterprise platform.
                        </li>
                        <li>Own Core Web Vitals and accessibility improvements across cross-functional teams.</li>
                      </ul>
                      <h5>Pintar Pvt. Ltd. <small>(Sep 2022 – Jul 2025)</small></h5>
                      <ul>
                        <li>
                          Built a Next.js SSR/SSG recruitment platform with i18n and real-time API integrations for thousands of daily active users.
                        </li>
                        <li>Designed a reusable component library and led microfrontend delivery with independent CI/CD deployments.</li>
                      </ul>
                      <h5>Nextory Pvt. Ltd. <small>(Jan 2021 – Sep 2022)</small></h5>
                      <ul>
                        <li>Led a React.js to Next.js migration, improving Core Web Vitals and SEO; received two Spot Awards.</li>
                      </ul>
                    </div>
                  ) : null}
                  {tab === "education" ? (
                    <div className="education">
                      <div>
                        <h5>B.tech</h5>
                        <ul>
                          <li className="text-justify">
                            Graduated in Computer Science & engineering from
                            Bengal College of Engineering and Technology in
                            2019.
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </motion.div>
  );
};

export default About;

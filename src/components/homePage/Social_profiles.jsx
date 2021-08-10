// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Badge from 'react-bootstrap/Badge'
import Img from 'react-cool-img';

const myProjects = [
  {
    image: "https://blog.masaischool.com/wp-content/uploads/2021/06/Aman-1024x441.jpg",
    title: "My Journey",
    demoLink: "https://blog.masaischool.com/amans-never-ending-dream-of-becoming-a-coder-finally-came-true-this-is-how/",
  }
];

const SocialProfiles = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects" id="projects">
      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Achieve</span>ment
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project,index) => {
              return (
                <Col md={4} className="mb-5" key={index+1}>
                  <div className="project-card">
                    <div className="img-section">
                    <Img
                      placeholder="/images/loading.gif"
                      src={project.image}
                       error="/images/download.png"
                       alt="React Cool Img"
                      />
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <div className="d-flex justify-content-between mr-4">
                        <a
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Read ...
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </motion.div>
    </div>
  );
};

export default SocialProfiles;

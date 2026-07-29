// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Badge from "react-bootstrap/Badge";
import Img from "react-cool-img";

const myProjects = [
  {
    image: "/images/project-bg.jpg",
    title: "Job Recruitment Platform — Pintar",
    description:
      "Full-stack SSR/SSG platform built with Next.js, React, TypeScript, Redux, REST APIs, and i18n. Delivered reusable design-system components, real-time API feeds, and optimized Core Web Vitals for thousands of concurrent users.",
    source: "https://github.com/amananku26",
    demoLink: "https://www.linkedin.com/in/amananku26/",
    badge: "Next.js + TypeScript",
  },
  {
    image: "/images/project-bg.jpg",
    title: "Global VISA Website — Grid Dynamics",
    description:
      "Enterprise-grade React.js and TypeScript platform with Headless CMS integrations (AEM and Stencil), SSR, centralized design tokens, MCP-assisted workflows, and WCAG-accessible UI serving millions of users globally.",
    source: "https://github.com/amananku26",
    demoLink: "https://www.linkedin.com/in/amananku26/",
    badge: "React + AEM + SSR",
  },
];

const Projects = () => {
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
            <span className="chonburi-font green-text">Pro</span>jects
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project, index) => {
              return (
                <Col md={4} className="mb-5" key={index + 1}>
                  <Badge className="lmckdncd" pill variant="warning">
                    {project.badge}
                  </Badge>
                  {project.liveweb && (
                    <Badge className="jdnkcjd" pill variant="danger">
                      <a rel="noopener noreferrer"
                        href={project.liveweb}
                        target="_blank"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Youtube
                      </a>
                    </Badge>
                  )}
                  <div className="project-card">
                    <div className="img-section">
                      <Img
                        placeholder="https://p4.wallpaperbetter.com/wallpaper/990/450/548/loading-wallpaper-preview.jpg"
                        src={project.image}
                        error="/images/download.png"
                        alt={`${project.title} preview`}
                      />
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.description}</p>
                      <div className="d-flex justify-content-between mr-4">
                        <a rel="noopener noreferrer"
                          href={project.source}
                          className="project-card-btn"
                          target="_blank"
                        >
                          GitHub
                        </a>
                        <a rel="noopener noreferrer"
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                        >
                          Learn More
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

export default Projects;

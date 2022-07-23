// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Img from 'react-cool-img';

const myProjects = [
  {
    image: "https://blog.masaischool.com/content/images/size/w2000/2022/05/Aman-Anku.png",
    title: "My Journey",
    dLink:"Aman’s Never-Ending Dream Of Becoming A Coder Finally.........",
    demoLink: "https://blog.masaischool.com/amans-never-ending-dream-of-becoming-a-coder-finally-came-true-this-is-how/",
  },
  {
    image: "https://img.freepik.com/free-vector/winner-gold-trophy-with-red-pleated-badge-rosette-award-realistic-closeup-composition-blurry-light_1284-27888.jpg?w=2000",
    title: "EMPLOYEE SPOT AWARD MAY 2021",
    dLink: "Got the Spot award for May 2021 at Nextory Pvt Lmt For my contribution of integrating and successfully deliver it in a time, A new module to our Spain website and parallelly working on the other bugs and tasks.",
  },
  {
    image: "https://img.freepik.com/free-vector/winner-gold-trophy-with-red-pleated-badge-rosette-award-realistic-closeup-composition-blurry-light_1284-27888.jpg?w=2000",
    title: "EMPLOYEE SPOT AWARD NOVEMBER 2021",
    dLink: "Got The Spot Award for my contribution and dedication to the work and also taking more tasks and its responsibility, adding value to the discussion for my views ahead for the functionality to be discussed.I communicate across the team and other teams as well to get the dependencies discussed and get to completion",
  }
];

const SocialProfiles = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects1" id="projects">
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
                  <div className="project-card1">
                    <div className="img-section">
                    <Img
                      placeholder="/images/Loading.mp4"
                      src={project.image}
                       error="/images/download.png"
                       alt="React Cool Img"
                       className='fixImageDynamic'
                      />
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info1">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.dLink}</p>
                     {project.demoLink && <div className="d-flex justify-content-between mr-4">
                        <a rel="noopener noreferrer"
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                        >
                          Read ...
                        </a>
                      </div>}
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

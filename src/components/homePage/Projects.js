import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Badge from 'react-bootstrap/Badge'

const myProjects = [
  {
    image: "/images/img1.jpg",
    title: "Whatsapp Clone",
    description:
      "Tried to replicate WhatsApp UI, and some features also. - Can Create Groups - Can Switch B/w the groups - send messages to any groups Used Firebase for the databases",
    source: "https://github.com/amananku26/whatsapp-clone",
    demoLink: "https://whatsapp-clone-53d8c.web.app/rooms/QIPEvsdzwLBr8AcT1WVD",
    badge:"ReactJS",
    liveweb:"https://www.youtube.com/watch?v=4DTHrXOLHnQ&t=52s"
  },
  {
    image: "/images/fbclone.jpg",
    title: "Facebook Clone",
    description:
      "The aim of this project is to make a pixel-perfect clone of Facebook. I used the BEM naming Convention Used Firebase for the databases",
    source: "https://github.com/amananku26/Facebook-Clone",
    demoLink: "https://facebook-clone-ccd54.web.app/",
    badge:"ReactJS",
    liveweb:"https://www.youtube.com/watch?v=_5Q8vTcpjhI"
  },
  {
    image: "/images/linkedclone.jpg",
    title: "Linkedin Clone",
    description:
      "This page is designed using HTML, CSS and Reactjs , redux , reduxthunk , json mocker User can upload post Like and comment on other post also.",
    source: "https://github.com/amananku26/Linkedin-Clone",
    demoLink: "https://linkedin-clone-a7ba5.web.app/",
    badge:"ReactJS",
    liveweb:"https://www.youtube.com/watch?v=CA1xCJvSCw8&t=32s"
  },
  {
    image: "/images/invoice.png",
    title: "Invoice Application",
    description:
      "User can Signup with google api and from iserting own data. After Login They can create a invoice Bonus- Can generate bill in form of PDF",
    source: "https://github.com/amananku26/kontext-invoice-app",
    badge:"ReactJS"
    // demoLink: "https://headphoonestore.netlify.app/",
  },
  {
    image: "/images/Screenshot 2020-10-14 115302.jpg",
    title: "Shopping Cart",
    description:
      "Concept used ContextApi, Axios, Styled-Components, React-Router-Dom. User can Filter thrughout the Products ex - Sort Price , filter category",
    source: "https://github.com/amananku26/Basic-Shopping-Cart",
    demoLink: "https://shopping-cart-a0d9a.web.app/",
    badge:"ReactJS",
    liveweb:"https://www.youtube.com/watch?v=ukYdUnHidq8"
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
            {myProjects.map((project) => {
              return (
                <Col md={4} className="mb-5">
                <Badge pill variant="warning">
                  {project.badge}
                  </Badge>
                {
                  project.liveweb &&   <Badge pill variant="danger" >
                     <a href={project.liveweb} target="_blank" style={{textDecoration:"none",color:'white'}}>Youtube</a>
                      </Badge>
                }
                  <div className="project-card">
                    <div className="img-section">
                      <img src={project.image} alt="" />
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.description}</p>
                      <div className="d-flex justify-content-between mr-4">
                        <a
                          href={project.source}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>
                        <a
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
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

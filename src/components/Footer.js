import React from "react";
import "../styles/_footer.scss";
import { Col, Nav, Row } from "react-bootstrap";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  return (
    <div className="footer pb-5 pt-5 ">
      <div className="container">
        <Row className="justify-content-between align-items-center">
          <Col md={3} xs={12}>
            <div className="d-flex justify-content-between footer-info mt-4">
            <Nav.Link
                  href="https://www.linkedin.com/in/amananku26/"
                  className="nav-item cursor-pointer"
                  target="_blank"
                >
                 <LinkedInIcon/>
                </Nav.Link>
                <Nav.Link
                  href="https://github.com/amananku26"
                  className="nav-item cursor-pointer"
                  target="_blank"
                >
                  <GitHubIcon />
                </Nav.Link>
                <Nav.Link
                  href="https://www.hackerrank.com/amananku26"
                  className="nav-item cursor-pointer"
                  target="_blank"
                >
                  <img
                    height="25px"
                    src="images/hr.jpeg"
                    alt="icon"
                  />
                </Nav.Link>
                <Nav.Link
                  href="https://medium.com/@amananku"
                  className="nav-item cursor-pointer"
                  target="_blank"
                >
                  <img
                    height="25px"
                    src="images/med.png"
                    alt="icon"
                  />
                </Nav.Link>
                <Nav.Link
                  href="https://www.youtube.com/c/AmanAnku"
                  className="nav-item cursor-pointer"
                  target="_blank"
                >
                  <YouTubeIcon/>
                </Nav.Link>
                <Nav.Link
                  href="https://stackoverflow.com/users/14988771/aman-anku"
                  className="nav-item cursor-pointer"
                  target="_blank"
                >
                  <img
                    height="25px"
                    src="images/so.png"
                    alt="icon"
                  />
                </Nav.Link>
            </div>
          </Col>
          <Col md={5} xs={12}>
            <ul className="d-flex justify-content-between p-0 w-100 footer-info mt-4 ">
              <li className="p-1">
                <a rel="noopener noreferrer" href="#home">Home</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#about">About</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#skills">Skills</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#projects">Projects</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#contact">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="text-center mt-4  footer-end">
          <p>
            Designed & Developed by{" "}
            <span className="chonburi-font green-text"> Aman Anku</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

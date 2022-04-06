import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../styles/_nav.scss";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from "@material-ui/icons/GitHub";


const NavPart = () => {
  return (
    <div className="fixed ">
      <div className={window.innerWidth > 767 ? "px-5" : "px-2"}>
        <Navbar collapseOnSelect expand="lg" className=" p-0">
          <Navbar.Brand href="/" className="logo p-0">
            Aman
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ml-4 nav-left-side">
              <Nav.Link rel="noopener noreferrer" href="#home" className="nav-item">
                Home
              </Nav.Link>
              <Nav.Link rel="noopener noreferrer" href="#about" className="nav-item">
                About
              </Nav.Link>

              <Nav.Link rel="noopener noreferrer" href="#skills" className="nav-item">
                Skills
              </Nav.Link>
              <Nav.Link rel="noopener noreferrer" href="#projects" className="nav-item">
                Projects
              </Nav.Link>

              <Nav.Link rel="noopener noreferrer" href="#contact" className="nav-item">
                Contact
              </Nav.Link>
            </Nav>
            <Nav
              className={`ml-auto ${
                window.innerWidth > 767 ? "w-25" : "mt-5 w-100"
              }`}
            >
              <div className="d-flex justify-content-between w-100">
                <Nav.Link rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/amananku26/"
                  className="nav-item cursor-pointer"
                  aria-label="Linkedin"
                  target="_blank"
                >
                 <LinkedInIcon/>
                </Nav.Link>
                <Nav.Link rel="noopener noreferrer"
                  href="https://github.com/amananku26"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="github"
                >
                  <GitHubIcon />
                </Nav.Link>
                <Nav.Link rel="noopener noreferrer"
                  href="https://medium.com/@amananku"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="medium"
                >
                  <img
                    height="25px"
                    src="images/med.png"
                    alt="icon"
                  />
                </Nav.Link>
                <Nav.Link rel="noopener noreferrer"
                  href="https://www.youtube.com/c/AmanAnku"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="youtube"
                >
                  <YouTubeIcon/>
                </Nav.Link>
                <Nav.Link rel="noopener noreferrer"
                  href="https://stackoverflow.com/users/14988771/aman-anku"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="stackoverflow"
                >
                  <img
                    height="25px"
                    src="images/so.png"
                    alt="icon"
                  />
                </Nav.Link>
                <Nav.Link
                  rel="noopener noreferrer"
                  href="https://opensea.io/coder26"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="stackoverflow"
                >
                  <img
                    height="25px"
                    src="https://styles.redditmedia.com/t5_4147ke/styles/communityIcon_lwl9gso33qk61.png"
                    alt="icon"
                  />
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavPart;

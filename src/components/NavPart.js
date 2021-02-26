import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../styles/_nav.scss";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import Overlay from 'react-bootstrap/Overlay'

// const renderTooltip = (props) => (
//   <Tooltip id="button-tooltip" {...props}>
//     Simple tooltip
//   </Tooltip>
// )

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
              <Nav.Link href="#home" className="nav-item">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="nav-item">
                About
              </Nav.Link>

              <Nav.Link href="#skills" className="nav-item">
                Skills
              </Nav.Link>
              <Nav.Link href="#projects" className="nav-item">
                Projects
              </Nav.Link>

              <Nav.Link href="#contact" className="nav-item">
                Contact
              </Nav.Link>
            </Nav>
            <Nav
              className={`ml-auto ${
                window.innerWidth > 767 ? "w-25" : "mt-5 w-100"
              }`}
            >
              <div className="d-flex justify-content-between w-100">
  //          
                <Nav.Link
                  href="https://www.linkedin.com/in/amananku26/"
                  className="nav-item cursor-pointer"
                  target="_blank"
                >
                  <LinkedInIcon />
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
                  <img height="25px" src="https://1.bp.blogspot.com/-ULT9oDhqr24/XJYCrttOEpI/AAAAAAAAJYE/inXHXlzblBI3SbcGpiUj4TMNj-E8uPlaQCK4BGAYYCw/s1600/logo%2Bhackerrank%2Bicon.png" />
                </Nav.Link>
                <Nav.Link
                  href="https://medium.com/@amananku"
                  className="nav-item cursor-pointer"
                  target="_blank"
                >
                  <img height="25px" src="https://icons-for-free.com/iconfiles/png/512/media+medium+social+icon-1320086141126884384.png" />
                </Nav.Link>
                <Nav.Link
                  href="https://www.youtube.com/c/AmanAnku"
                  className="nav-item cursor-pointer"
                  target="_blank"
                >
                  <img height="25px" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png" />
                </Nav.Link>
                {/* <Nav.Link href="#contact" className="nav-item cursor-pointer">
                  <TwitterIcon />
                </Nav.Link> */}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavPart;

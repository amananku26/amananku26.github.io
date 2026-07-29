import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../styles/_nav.scss";

const NavPart = () => (
  <header className="site-header">
    <div className="container">
      <Navbar collapseOnSelect expand="lg" className="site-nav">
        <Navbar.Brand href="#home" className="site-logo">AMAN<span>.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navigation" />
        <Navbar.Collapse id="portfolio-navigation">
          <Nav className="ml-auto align-items-lg-center">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <a className="nav-resume" href="/Aman_Anku_FE_Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </header>
);

export default NavPart;

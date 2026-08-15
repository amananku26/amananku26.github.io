import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavPart = ({ recruiterMode, setRecruiterMode, soundEnabled, toggleSound, theme, toggleTheme }) => (
  <header className="site-header">
    <div className="container">
      <Navbar collapseOnSelect expand="lg" className="site-nav">
        <Navbar.Brand href="#home" className="site-logo">Aman<span>.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navigation" />
        <Navbar.Collapse id="portfolio-navigation">
          <Nav className="ml-auto align-items-lg-center">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <a className="nav-resume" href="/Aman_Anku_FE_Resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
            <button className={`nav-utility ${recruiterMode ? "is-active" : ""}`} type="button" aria-pressed={recruiterMode} onClick={() => setRecruiterMode(!recruiterMode)}>{recruiterMode ? "Show all" : "Quick view"}</button>
            <button className={`nav-utility sound-control ${soundEnabled ? "is-active" : ""}`} type="button" onClick={toggleSound} aria-pressed={soundEnabled}>{soundEnabled ? "Sound on" : "Sound off"}</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </header>
);

export default NavPart;

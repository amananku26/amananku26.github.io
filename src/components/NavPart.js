import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../styles/_nav.scss";

const NavPart = ({ recruiterMode, setRecruiterMode, soundEnabled, toggleSound, theme, toggleTheme }) => (
  <header className="site-header">
    <div className="container">
      <Navbar collapseOnSelect expand="lg" className="site-nav">
        <Navbar.Brand href="#home" className="site-logo">AA//MC<span>_01</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navigation" />
        <Navbar.Collapse id="portfolio-navigation">
          <Nav className="ml-auto align-items-lg-center">
            <Nav.Link href="#about">Log</Nav.Link>
            <Nav.Link href="#work">Archive</Nav.Link>
            <Nav.Link href="#experience">History</Nav.Link>
            <Nav.Link href="#contact">Channel</Nav.Link>
            <a className="nav-resume" href="/Aman_Anku_FE_Resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
            <button className={`nav-utility ${recruiterMode ? "is-active" : ""}`} type="button" aria-pressed={recruiterMode} onClick={() => setRecruiterMode(!recruiterMode)}>{recruiterMode ? "Full mode" : "Recruiter mode"}</button>
            <button className="nav-utility theme-control" type="button" aria-pressed={theme === "dark"} onClick={toggleTheme}>{theme === "dark" ? "Light mode" : "Dark mode"}</button>
            <button className={`nav-utility sound-control ${soundEnabled ? "is-active" : ""}`} type="button" onClick={toggleSound} aria-pressed={soundEnabled}>{soundEnabled ? "Sound on" : "Sound off"}</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </header>
);

export default NavPart;

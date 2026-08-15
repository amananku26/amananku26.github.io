import React from "react";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <span>© {new Date().getFullYear()} Aman Anku · Mission control online</span>
      <div>
        <a href="https://www.linkedin.com/in/amananku26/" target="_blank" rel="noreferrer" aria-label="Aman Anku on LinkedIn">LinkedIn</a>
        <a href="https://github.com/amananku26" target="_blank" rel="noreferrer" aria-label="Aman Anku on GitHub">GitHub</a>
        <a href="https://linktr.ee/amananku26" target="_blank" rel="noreferrer" aria-label="Aman Anku on Linktree">Linktree</a>
        <a href="mailto:amankumaranku@gmail.com" aria-label="Send email to Aman Anku">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;

import React from "react";
import "../styles/_footer.scss";

const Footer = () => (
  <footer className="site-footer">
    <div className="container"><span>© {new Date().getFullYear()} Aman Anku · Mission control online</span><div><a href="https://www.linkedin.com/in/amananku26/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/amananku26" target="_blank" rel="noreferrer">GitHub</a><a href="https://linktr.ee/amananku26" target="_blank" rel="noreferrer">Linktree</a><a href="mailto:amankumaranku@gmail.com">Email</a></div></div>
  </footer>
);

export default Footer;

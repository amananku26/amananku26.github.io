import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const Home = () => {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => reduceMotion ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] } };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <motion.div {...reveal()} className="hero-topline"><span>Portfolio / 2026</span><span>Bangalore, India</span></motion.div>
        <div className="hero-main">
          <div className="hero-copy-block">
            <motion.p {...reveal(0.07)} className="eyebrow">Aman Anku · Senior Frontend Engineer</motion.p>
            <motion.h1 {...reveal(0.14)}>I build the frontend behind <em>useful products.</em></motion.h1>
            <motion.p {...reveal(0.21)} className="hero-copy">I partner with product teams to create fast, accessible, and maintainable web experiences with React, Next.js, and TypeScript.</motion.p>
            <motion.div {...reveal(0.28)} className="hero-actions">
              <a className="button button-primary" href="#work">See selected work <span>↓</span></a>
              <a className="button button-secondary" href="/Aman_Anku_FE_Resume.pdf" target="_blank" rel="noreferrer">Download résumé</a>
            </motion.div>
            <motion.div {...reveal(0.35)} className="hero-meta"><span className="availability"><i />Open to meaningful product conversations</span><span>5+ years of frontend engineering</span></motion.div>
          </div>
          <motion.aside {...reveal(0.18)} className="portrait-column">
            <div className="portrait-label"><span>01</span><span>About Aman</span></div>
            <div className="portrait-ring"><img src="/images/IMG_1480.PNG" alt="Aman Anku" /></div>
            <div className="portrait-caption"><strong>Aman Anku</strong><span>Senior Frontend Engineer</span></div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Home;

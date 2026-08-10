import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const Home = () => {
  const reduceMotion = useReducedMotion();
  const [clock, setClock] = useState("--:--:--");
  useEffect(() => {
    const updateClock = () => setClock(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "UTC" }).format(new Date()));
    updateClock();
    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);
  const reveal = (delay = 0) => reduceMotion ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] } };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <motion.div {...reveal()} className="hero-topline"><span>MISSION AA-01 / FRONTEND SYSTEMS</span><span>LOC: BANGALORE, IN</span></motion.div>
        <div className="hero-main">
          <div className="hero-copy-block">
            <motion.p {...reveal(0.07)} className="eyebrow status-line"><i />Signal acquired · status: online</motion.p>
            <motion.h1 {...reveal(0.14)}>Aman Anku <span>builds dependable interfaces for complex products.</span></motion.h1>
            <motion.p {...reveal(0.21)} className="hero-copy">Senior Frontend Engineer. React, Next.js, and TypeScript systems built for speed, accessibility, and teams that need to ship with confidence.</motion.p>
            <motion.div {...reveal(0.28)} className="hero-actions">
              <a className="button button-primary" href="#work">Open mission archive <span>↓</span></a>
              <a className="button button-secondary" href="/Aman_Anku_FE_Resume.pdf" target="_blank" rel="noreferrer">Download resume</a>
            </motion.div>
            <motion.div {...reveal(0.35)} className="hero-meta"><span className="availability"><i />Open to product engineering roles</span><span>5+ years</span><span>UTC {clock}</span></motion.div>
          </div>
          <motion.aside {...reveal(0.18)} className="portrait-column">
            <div className="portrait-label"><span>OBS-01</span><span>Operator profile</span></div>
            <div className="portrait-ring"><img src="/images/IMG_1480.PNG" alt="Aman Anku" /></div>
            <div className="portrait-caption"><strong>Aman Anku</strong><span>Senior frontend engineer · clearance: active</span></div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Home;

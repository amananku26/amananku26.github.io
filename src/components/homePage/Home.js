import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

const Clock = () => {
  const [clock, setClock] = useState("--:--:--");
  useEffect(() => {
    const updateClock = () => setClock(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "UTC" }).format(new Date()));
    updateClock();
    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return <span>{clock} UTC</span>;
};

const Home = ({ xrayMode, setXrayMode }) => {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 65, damping: 18 });
  const springY = useSpring(pointerY, { stiffness: 65, damping: 18 });
  const rotateY = useTransform(springX, [-.5, .5], [-5, 5]);
  const rotateX = useTransform(springY, [-.5, .5], [4, -4]);
  const reveal = (delay = 0) => reduceMotion ? {} : { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] } };

  return (
    <section id="home" className="hero-section" onPointerMove={(event) => {
      if (reduceMotion) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      pointerX.set((event.clientX - bounds.left) / bounds.width - .5);
      pointerY.set((event.clientY - bounds.top) / bounds.height - .5);
    }} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}>
      <div className="container hero-content">
        <motion.div {...reveal()} className="hero-topline"><span>PORTFOLIO / 2026</span><span>BANGALORE, INDIA</span></motion.div>
        <div className="hero-main">
          <div className="hero-copy-block">
            <p className="eyebrow status-line"><i />Available for the next challenge</p>
            <h1>Aman Anku <span>makes digital products feel effortless.</span></h1>
            <p className="hero-copy">Senior Frontend Engineer. React, Next.js, and TypeScript systems built for speed, accessibility, and teams that need to ship with confidence.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <span>↓</span></a>
              <a className="button button-secondary" href="/Aman_Anku_FE_Resume.pdf" target="_blank" rel="noreferrer">Download resume</a>
            </div>
            <button className="xray-launch" type="button" onClick={() => setXrayMode(!xrayMode)} aria-pressed={xrayMode}>
              <span className="xray-launch-mark" aria-hidden="true">⌁</span>
              <span><b>{xrayMode ? "X-Ray mode is on" : "Inspect the build"}</b><small>{xrayMode ? "Implementation notes are visible across the page" : "A technical tour of the portfolio itself"}</small></span>
              <i aria-hidden="true">{xrayMode ? "×" : "→"}</i>
            </button>
            <div className="hero-meta"><span className="availability"><i />Open to product engineering roles</span><span>5+ years experience</span><Clock /></div>
            {xrayMode && <aside className="xray-note xray-note-hero" aria-label="Hero implementation notes"><span>01 / HERO SYSTEM</span><p><b>Motion-safe by design.</b> Cursor movement uses spring physics and automatically yields to the visitor’s reduced-motion setting.</p><p><b>Fast first paint.</b> The portrait is prioritized and served with responsive image dimensions.</p></aside>}
          </div>
          <aside className="portrait-column" style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}>
            <div className="portrait-label"><span>Introducing</span><span>Frontend engineer</span></div>
            <div className="portrait-ring">
              <Image src="/images/IMG_1480.webp" alt="Aman Anku" width={320} height={390} priority fetchPriority="high" sizes="(max-width: 768px) 260px, 320px" />
            </div>
            <div className="portrait-caption"><strong>Aman Anku</strong><span>Senior frontend engineer</span></div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Home;

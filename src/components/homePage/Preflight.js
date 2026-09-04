import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Preflight = ({ onClose }) => {
  const launchButton = useRef(null);

  useEffect(() => {
    launchButton.current?.focus();
    const handleKeyDown = (event) => { if (event.key === "Escape") onClose(); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return <div className="preflight-overlay" role="presentation">
    <section className="preflight-card" role="dialog" aria-modal="true" aria-labelledby="preflight-title" aria-describedby="preflight-summary">
      <div className="preflight-topline"><span><i /> PORTFOLIO PRE-FLIGHT</span><span>PROFILE / 01</span><button type="button" onClick={onClose} aria-label="Close portfolio introduction">ESC <b>×</b></button></div>
      <div className="preflight-body">
        <div className="preflight-portrait">
          <div className="portrait-orbit orbit-one" aria-hidden="true" /><div className="portrait-orbit orbit-two" aria-hidden="true" />
          <div className="preflight-photo"><Image src="/images/IMG_1480.webp" alt="Aman Anku" width={340} height={410} priority sizes="(max-width: 767px) 210px, 340px" /><span className="photo-scan" aria-hidden="true" /></div>
          <div className="portrait-coordinates"><span>12.9716° N</span><span>77.5946° E</span></div>
        </div>
        <div className="preflight-copy">
          <p className="preflight-label">ENGINEER / PRODUCT THINKER / COLLABORATOR</p>
          <h2 id="preflight-title">Aman Anku<span>Senior frontend engineer</span></h2>
          <p id="preflight-summary">I turn complicated product constraints into interface systems that feel clear, fast, and dependable.</p>
          <div className="preflight-vitals" aria-label="Quick professional details"><div><span>FOCUS</span><strong>React · Next.js · TypeScript</strong></div><div><span>BASED IN</span><strong>Bangalore, India</strong></div><div><span>EXPERIENCE</span><strong>05+ years</strong></div><div><span>STATUS</span><strong className="preflight-available"><i /> Open to roles</strong></div></div>
          <div className="preflight-route"><span>YOUR TOUR</span><p><b>01</b> Product brief <i /> <b>02</b> Selected work <i /> <b>03</b> Career trajectory</p></div>
          <button className="preflight-launch" type="button" ref={launchButton} onClick={onClose}><span>Enter the portfolio</span><i aria-hidden="true">↘</i></button>
        </div>
      </div>
      <div className="preflight-footer"><span>ALL SYSTEMS READY</span><span>BUILT WITH INTENT · 2026</span></div>
    </section>
  </div>;
};

export default Preflight;

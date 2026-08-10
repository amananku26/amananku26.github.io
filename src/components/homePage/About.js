import React from "react";
import Recommendations from "./Recommendations";

const About = () => (
  <section id="about" className="about-section section-space">
    <div className="container">
      <div className="section-intro two-column-intro">
        <p className="eyebrow">Transmission log / 2026.08.07</p>
        <div>
          <h2>Complex product requirements, resolved into calm and reliable interfaces.</h2>
          <p>Focus areas: speed, clarity, accessibility, and frontend systems that keep delivering after the initial launch.</p>
        </div>
      </div>
      <div className="story-grid">
        <article className="story-card">
          <p className="eyebrow">Log entry / origin</p>
          <h3>From unfamiliar problems to systems that help teams move faster.</h3>
          <p>My career started at Nextory, where I learned to take ownership of unknown problems, communicate the trade-offs, and raise the quality bar. That curiosity carried from individual product features into scalable frontend architecture.</p>
          <p>Current operating principle: turn open-ended ideas into interfaces that are clear for users and dependable for the teams who maintain them.</p>
        </article>
        <Recommendations />
      </div>
    </div>
  </section>
);

export default About;

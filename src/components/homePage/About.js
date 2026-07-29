import React from "react";
import Recommendations from "./Recommendations";

const About = () => (
  <section id="about" className="about-section section-space">
    <div className="container">
      <div className="section-intro two-column-intro">
        <p className="eyebrow">About me</p>
        <div>
          <h2>I turn complex product requirements into calm, reliable interfaces.</h2>
          <p>I care about the details users notice: speed, clarity, accessibility, and a system that helps teams ship confidently long after launch.</p>
        </div>
      </div>
      <div className="story-grid">
        <article className="story-card">
          <p className="eyebrow">My story</p>
          <h3>From learning fast to building systems that help others move faster.</h3>
          <p>I started my career at Nextory as an Associate Software Engineer, where I learned to take ownership of unfamiliar problems, communicate clearly, and keep raising the quality bar. That curiosity has carried me from product features to scalable frontend architecture.</p>
          <p>Today, I enjoy the messy part of product engineering: turning an open-ended idea into an interface that is clear for users and dependable for the teams who maintain it.</p>
        </article>
        <Recommendations />
      </div>
    </div>
  </section>
);

export default About;

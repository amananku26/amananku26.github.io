import React, { useState } from "react";

const roles = [
  { period: "2025 — Present", company: "Grid Dynamics", role: "Senior Frontend Engineer", detail: "Building scalable React and TypeScript UI for VISA’s global enterprise platform. I focus on performance, accessibility, and engineering standards that help teams move with confidence." },
  { period: "2022 — 2025", company: "Pintar Pvt. Ltd.", role: "Software Development Engineer", detail: "Built a Next.js recruitment platform for thousands of daily active users, and created a reusable design system that reduced content publishing time by about 60%." },
  { period: "2021 — 2022", company: "Nextory Pvt. Ltd.", role: "Associate Software Engineer", detail: "Led a React.js to Next.js migration and helped improve Core Web Vitals and SEO. Received two Spot Awards for technical ownership and delivery." },
];

const Experience = () => {
  const [activeRole, setActiveRole] = useState(0);
  return (
    <section id="experience" className="experience-section section-space">
      <div className="container">
        <div className="experience-heading"><p className="eyebrow">Flight history / career trajectory</p><h2>Ownership gained through product work and useful collaboration.</h2></div>
        <div className="timeline">{roles.map((role, index) => <article className={`timeline-item ${activeRole === index ? "is-active" : ""}`} key={role.company}><p className="timeline-number">WP-{String(index + 1).padStart(2, "0")}</p><button type="button" className="timeline-heading" aria-pressed={activeRole === index} onClick={() => setActiveRole(index)}><p>{role.period}</p><h3>{role.company}</h3><span>{role.role}</span><small>{activeRole === index ? "Waypoint selected" : "Select waypoint"}</small></button><div className="timeline-detail"><p>{role.detail}</p>{activeRole === index && <p className="waypoint-readout">NAV// {role.company.toUpperCase()} · ROLE TRACK CONFIRMED</p>}</div></article>)}</div>
      </div>
    </section>
  );
};

export default Experience;

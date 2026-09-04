import React, { useState } from "react";

const roles = [
  { period: "2025 — Present", company: "Grid Dynamics", role: "Senior Frontend Engineer", code: "CURRENT / 03", mission: "Build a frontend platform that lets a global enterprise move quickly without losing quality.", detail: "Building scalable React and TypeScript UI for VISA’s global enterprise platform. I focus on performance, accessibility, and engineering standards that help teams move with confidence.", signal: "Enterprise platform work", proof: "Performance · accessibility · engineering standards", systems: ["React", "TypeScript", "Enterprise UI", "a11y"] },
  { period: "2022 — 2025", company: "Pintar Pvt. Ltd.", role: "Software Development Engineer", code: "SYSTEMS / 02", mission: "Turn a fast-growing recruitment product into a reusable, high-leverage interface system.", detail: "Built a Next.js recruitment platform for thousands of daily active users, and created a reusable design system that reduced content publishing time by about 60%.", signal: "~60% faster publishing", proof: "Next.js platform · reusable design system", systems: ["Next.js", "Design systems", "SEO", "Product scale"] },
  { period: "2021 — 2022", company: "Nextory Pvt. Ltd.", role: "Associate Software Engineer", code: "LAUNCH / 01", mission: "Modernize a web experience and establish a reputation for dependable technical ownership.", detail: "Led a React.js to Next.js migration and helped improve Core Web Vitals and SEO. Received two Spot Awards for technical ownership and delivery.", signal: "2 Spot Awards", proof: "React → Next.js migration · Web Vitals", systems: ["React", "Next.js", "Core Web Vitals", "SEO"] },
];

const Experience = () => {
  const [activeRole, setActiveRole] = useState(0);
  const active = roles[activeRole];

  return <section id="experience" className="experience-section section-space">
    <div className="container">
      <div className="experience-heading"><p className="eyebrow">Flight history / career trajectory</p><h2>A career built by taking on the harder version of the problem.</h2></div>
      <div className="trajectory-console">
        <div className="trajectory-status" aria-label="Career trajectory summary">
          <div><span>FLIGHT TIME</span><strong>05<span>+</span></strong><small>years in product engineering</small></div>
          <div><span>TRAJECTORY</span><strong>01 → 03</strong><small>from migration work to platform ownership</small></div>
          <div className="trajectory-radar" aria-hidden="true"><i /><b /><em /></div>
        </div>
        <div className="trajectory-layout">
          <nav className="trajectory-route" aria-label="Career waypoints">
            <p>SELECT A WAYPOINT <span>↓</span></p>
            {roles.map((role, index) => <button type="button" key={role.company} className={`trajectory-stop ${activeRole === index ? "is-active" : ""}`} onClick={() => setActiveRole(index)} aria-current={activeRole === index ? "step" : undefined} aria-controls="trajectory-dossier">
              <i aria-hidden="true" /><span><small>{role.code}</small><strong>{role.company}</strong><em>{role.period}</em></span>
            </button>)}
            <div className="route-line" aria-hidden="true"><i style={{ height: `${((roles.length - activeRole) / roles.length) * 100}%` }} /></div>
          </nav>
          <article className="trajectory-dossier" id="trajectory-dossier" aria-live="polite">
            <div className="dossier-topline"><span>{active.code}</span><span>WAYPOINT LOCKED <i /></span></div>
            <p className="dossier-period">{active.period}</p>
            <h3>{active.role}<span>@ {active.company}</span></h3>
            <p className="dossier-mission">{active.mission}</p>
            <div className="dossier-grid"><div><span>THE WORK</span><p>{active.detail}</p></div><div className="dossier-proof"><span>STRONGEST SIGNAL</span><strong>{active.signal}</strong><p>{active.proof}</p></div></div>
            <div className="system-tags" aria-label={`Systems used at ${active.company}`}>{active.systems.map((system) => <span key={system}>{system}</span>)}</div>
            <p className="dossier-footer">CAREER TELEMETRY // scope ↑ &nbsp;·&nbsp; ownership ↑ &nbsp;·&nbsp; product impact ↑</p>
          </article>
        </div>
      </div>
    </div>
  </section>;
};

export default Experience;

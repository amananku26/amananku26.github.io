import React, { useState } from "react";

const roles = [
  {
    period: "2025 to present",
    company: "Grid Dynamics",
    role: "Senior Frontend Engineer",
    mission:
      "Build a frontend platform that lets a global enterprise move quickly without losing quality.",
    detail:
      "Building scalable React and TypeScript UI for VISA’s global enterprise platform. I focus on performance, accessibility, and engineering standards that help teams move with confidence.",
    signal: "Enterprise platform work",
    proof: "Performance · accessibility · engineering standards",
    systems: ["React", "TypeScript", "Enterprise UI", "Accessibility"],
  },
  {
    period: "2022 to 2025",
    company: "Pintar Pvt. Ltd.",
    role: "Software Development Engineer",
    mission:
      "Turn a fast growing recruitment product into a reusable, high leverage interface system.",
    detail:
      "Built a Next.js recruitment platform for thousands of daily active users, and created a reusable design system that reduced content publishing time by about 60%.",
    signal: "About 60% faster publishing",
    proof: "Next.js platform · reusable design system",
    systems: ["Next.js", "Design systems", "SEO", "Product scale"],
  },
  {
    period: "2021 to 2022",
    company: "Nextory Pvt. Ltd.",
    role: "Associate Software Engineer",
    mission:
      "Modernize a web experience and establish a reputation for dependable technical ownership.",
    detail:
      "Led a React.js to Next.js migration and helped improve Core Web Vitals and SEO. Received two Spot Awards for technical ownership and delivery.",
    signal: "Two Spot Awards",
    proof: "React to Next.js migration · Web Vitals",
    systems: ["React", "Next.js", "Core Web Vitals", "SEO"],
  },
];

const Experience = () => {
  const [activeRole, setActiveRole] = useState(0);
  const active = roles[activeRole];

  return (
    <section id="experience" className="experience-section section-space">
      <div className="container">
        <div className="career-intro">
          <div>
            <p className="eyebrow">Career path</p>
            <h2>From dependable delivery to platform ownership.</h2>
          </div>
          <p>
            Each role has widened the work: from improving a product foundation,
            to creating repeatable systems, to shaping enterprise frontend quality.
          </p>
        </div>

        <div className="career-summary" aria-label="Career summary">
          <div>
            <strong>5+ years</strong>
            <span>in product engineering</span>
          </div>
          <div>
            <strong>Three companies</strong>
            <span>across product and enterprise teams</span>
          </div>
          <div>
            <strong>Growing scope</strong>
            <span>from migrations to platform ownership</span>
          </div>
        </div>

        <div className="career-layout">
          <nav className="career-list" aria-label="Select a role">
            <p>Select a role</p>
            {roles.map((role, index) => (
              <button
                type="button"
                key={role.company}
                className={`career-role ${activeRole === index ? "is-active" : ""}`}
                onClick={() => setActiveRole(index)}
                aria-current={activeRole === index ? "step" : undefined}
                aria-controls="career-detail"
              >
                <span className="career-marker" aria-hidden="true" />
                <span>
                  <small>{role.period}</small>
                  <strong>{role.company}</strong>
                  <em>{role.role}</em>
                </span>
              </button>
            ))}
          </nav>

          <article
            className="career-detail"
            id="career-detail"
            aria-live="polite"
          >
            <p className="career-detail-period">{active.period}</p>
            <h3>{active.role}</h3>
            <p className="career-company">{active.company}</p>
            <p className="career-mission">{active.mission}</p>

            <div className="career-evidence">
              <div>
                <span>The work</span>
                <p>{active.detail}</p>
              </div>
              <div>
                <span>Outcome</span>
                <strong>{active.signal}</strong>
                <p>{active.proof}</p>
              </div>
            </div>

            <div
              className="system-tags career-system-tags"
              aria-label={`Systems used at ${active.company}`}
            >
              {active.systems.map((system) => (
                <span key={system}>{system}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;

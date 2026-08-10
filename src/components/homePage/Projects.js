import React, { useState } from "react";

const projects = [
  { number: "MSN-01", title: "Job recruitment platform", company: "Pintar", stack: "Next.js · React · TypeScript · Redux · REST APIs · i18n", objective: "Make a job marketplace fast and maintainable for both job seekers and employers.", description: "Contributed to the reusable design system, microfrontend architecture, and high-performance SSR/SSG user flows.", impact: "Thousands of daily active users · ~60% faster content publishing" },
  { number: "MSN-02", title: "Global VISA website", company: "Grid Dynamics", stack: "React · TypeScript · AEM · Stencil · SSR · MCP AI workflows", objective: "Create accessible, consistent frontend delivery for a global enterprise platform.", description: "Built on Headless CMS integrations, centralized design tokens, and performance-conscious components across international surfaces.", impact: "Millions of users · 30+ countries · performance and accessibility led" },
];

const Projects = ({ onSignal }) => {
  const [openMission, setOpenMission] = useState(null);
  return (
    <section id="work" className="work-section section-space">
      <div className="container">
        <div className="section-intro work-intro"><div><p className="eyebrow">Mission archive / selected deployments</p><h2>Product systems, engineered for the conditions they operate in.</h2></div><p>Selected professional work. Details remain within the boundaries of client confidentiality.</p></div>
        <div className="case-study-list">
          {projects.map((project) => {
            const isOpen = openMission === project.number;
            const toggleMission = () => {
              setOpenMission(isOpen ? null : project.number);
              onSignal();
            };
            return <article className={`case-study ${isOpen ? "is-open" : ""}`} key={project.number}>
              <div className="case-number">{project.number}</div>
              <div className="case-body"><p className="case-company">Operator: {project.company}</p><h3>{project.title}</h3><p className="case-objective"><span>Objective</span>{project.objective}</p><p className="case-description">{project.description}</p><p className="case-stack"><span>Payload</span>{project.stack}</p></div>
              <div className="case-outcome"><p className="case-impact"><span>Result</span>{project.impact}</p><button type="button" className="mission-toggle" aria-expanded={isOpen} onClick={toggleMission}>{isOpen ? "Close data" : "Read mission data"}<b>{isOpen ? "−" : "+"}</b></button></div>
              {isOpen && <div className="mission-detail" aria-live="polite"><span>SYS//READOUT</span><p>Architecture and delivery choices were guided by a single constraint: preserve a clear, accessible experience while the platform scales across content, teams, and locales.</p></div>}
            </article>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

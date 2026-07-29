import React from "react";

const projects = [
  { number: "01", title: "Job Recruitment Platform", company: "Pintar", stack: "Next.js · React · TypeScript · Redux · REST APIs · i18n", description: "A full-stack SSR/SSG recruitment platform that connected job seekers and employers at scale. I helped shape its reusable design system, microfrontend architecture, and high-performance user flows.", impact: "Thousands of daily active users · ~60% faster content publishing" },
  { number: "02", title: "Global VISA Website", company: "Grid Dynamics", stack: "React · TypeScript · AEM · Stencil · SSR · MCP AI workflows", description: "Enterprise frontend work for VISA’s global platform, combining Headless CMS integrations, centralized design tokens, and WCAG-accessible experiences for an international audience.", impact: "Millions of users · 30+ countries · performance and accessibility led" },
];

const Projects = () => (
  <section id="work" className="work-section section-space">
    <div className="container">
      <div className="section-intro work-intro"><div><p className="eyebrow">Selected work</p><h2>Large-scale products, thoughtfully engineered.</h2></div><p>Selected professional work. Details are shared at a level that respects client confidentiality.</p></div>
      <div className="case-study-list">
        {projects.map((project) => <article className="case-study" key={project.number}>
          <div className="case-number">{project.number}</div>
          <div className="case-body"><p className="case-company">{project.company}</p><h3>{project.title}</h3><p className="case-description">{project.description}</p><p className="case-stack">{project.stack}</p></div>
          <p className="case-impact">{project.impact}</p>
        </article>)}
      </div>
    </div>
  </section>
);

export default Projects;

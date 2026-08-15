import React from "react";

const skillGroups = [
  ["Frontend interface systems", "React.js, Next.js, TypeScript, JavaScript, HTML, CSS, SCSS, Tailwind CSS, Material UI", 94],
  ["Architecture & delivery", "SSR, SSG, Microfrontends, Headless CMS (AEM/Stencil), i18n, Code splitting, Lazy loading", 88],
  ["Quality & performance", "Core Web Vitals, Lighthouse, WCAG accessibility, Jest, React Testing Library, Cypress, TDD", 91],
  ["Platform & tooling", "Redux, REST APIs, GraphQL, WebRTC, Git, Webpack, Vite, Rush, Jenkins, CI/CD, AWS, Docker", 84],
];

const Skills = () => (
  <section id="skills" className="skills-section section-space">
    <div className="container">
      <div className="section-intro"><p className="eyebrow">Systems / instrumentation</p><h2>Capabilities calibrated for product teams that plan beyond launch.</h2></div>
      <div className="capability-grid">
        {skillGroups.map(([title, skills, signal], index) => <article className="capability-card" key={title}><div className="capability-heading"><h3>SYS-{String(index + 1).padStart(2, "0")} / {title}</h3><span>{signal}% SIGNAL</span></div><div className="signal-meter" role="meter" aria-valuenow={signal} aria-valuemin={0} aria-valuemax={100} aria-label={`${title} signal strength ${signal}%`}><i style={{ width: `${signal}%` }} /></div><p>{skills}</p></article>)}
      </div>
    </div>
  </section>
);

export default Skills;

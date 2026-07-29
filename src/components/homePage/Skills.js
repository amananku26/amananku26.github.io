import React from "react";

const skillGroups = [
  ["Frontend", "React.js, Next.js, TypeScript, JavaScript, HTML, CSS, SCSS, Tailwind CSS, Material UI"],
  ["Architecture", "SSR, SSG, Microfrontends, Headless CMS (AEM/Stencil), i18n, Code splitting, Lazy loading"],
  ["Quality & performance", "Core Web Vitals, Lighthouse, WCAG accessibility, Jest, React Testing Library, Cypress, TDD"],
  ["Platform & tooling", "Redux, REST APIs, GraphQL, WebRTC, Git, Webpack, Vite, Rush, Jenkins, CI/CD, AWS, Docker"],
];

const Skills = () => (
  <section id="skills" className="skills-section section-space">
    <div className="container">
      <div className="section-intro"><p className="eyebrow">Capabilities</p><h2>Built for product teams that care about the long term.</h2></div>
      <div className="capability-grid">
        {skillGroups.map(([title, skills]) => <article className="capability-card" key={title}><h3>{title}</h3><p>{skills}</p></article>)}
      </div>
    </div>
  </section>
);

export default Skills;

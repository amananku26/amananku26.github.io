import React from "react";
import {
  SiAmazonaws,
  SiCypress,
  SiDocker,
  SiFigma,
  SiGit,
  SiGraphql,
  SiJenkins,
  SiJest,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skillGroups = [
  {
    id: "BUILD",
    title: "Build the interface",
    signal: 96,
    skills: [
      ["Next.js", "Production-ready React", SiNextdotjs],
      ["React", "Component systems", SiReact],
      ["TypeScript", "Safer frontends", SiTypescript],
      ["Tailwind", "Fast visual iteration", SiTailwindcss],
      ["JavaScript", "Modern browser APIs", SiJavascript],
      ["Redux", "Predictable state", SiRedux],
    ],
  },
  {
    id: "AMPLIFY",
    title: "Ship with leverage",
    signal: 91,
    skills: [
      ["Claude Code", "AI-assisted delivery", "CC"],
      ["MCP", "Connected AI workflows", "MCP"],
      ["GraphQL", "Typed data layers", SiGraphql],
      ["Git", "Collaborative delivery", SiGit],
      ["Docker", "Consistent environments", SiDocker],
      ["AWS", "Cloud deployment", SiAmazonaws],
    ],
  },
  {
    id: "PROVE",
    title: "Protect the experience",
    signal: 94,
    skills: [
      ["Jest", "Reliable units", SiJest],
      ["Cypress", "Confident releases", SiCypress],
      ["Jenkins", "Automated pipelines", SiJenkins],
      ["Figma", "Design handoff", SiFigma],
      ["WCAG", "Accessible by default", "AA"],
      ["Web Vitals", "Performance obsessed", "CWV"],
    ],
  },
];

const SkillIcon = ({ icon: Icon, label }) => typeof Icon === "string"
  ? <span className={`skill-monogram skill-monogram-${label.toLowerCase().replace(/\s+/g, "-")}`} aria-hidden="true">{Icon}</span>
  : <Icon aria-hidden="true" />;

const Skills = ({ xrayMode }) => (
  <section id="skills" className="skills-section section-space">
    <div className="container">
      <div className="section-intro skills-intro">
        <p className="eyebrow">Selected toolkit / 2026</p>
        <h2>Tools are only useful when they make a team move faster.</h2>
        <p className="skills-lede">A working set for turning ambitious product ideas into thoughtful, resilient experiences.</p>
      </div>
      <div className="skill-spectrum" aria-label="Core engineering toolkit">
        <div className="spectrum-pulse" aria-hidden="true"><span /><span /><span /></div>
        {skillGroups.map((group, index) => <article className="capability-card skill-cluster" key={group.id} style={{ "--cluster-delay": `${index * 110}ms` }}>
          <div className="capability-heading"><h3>{group.id} / {group.title}</h3><span>{group.signal}% SIGNAL</span></div>
          <div className="signal-meter" role="meter" aria-valuenow={group.signal} aria-valuemin={0} aria-valuemax={100} aria-label={`${group.title} signal strength ${group.signal}%`}><i style={{ width: `${group.signal}%` }} /></div>
          <ul className="skill-icon-grid">
            {group.skills.map(([name, description, icon]) => <li key={name} className="skill-icon-card" tabIndex="0">
              <span className="skill-icon"><SkillIcon icon={icon} label={name} /></span>
              <span><strong>{name}</strong><small>{description}</small></span>
            </li>)}
          </ul>
        </article>)}
      </div>
      {xrayMode && <aside className="xray-note xray-note-skills" aria-label="Skills implementation notes"><span>02 / TOOLKIT SYSTEM</span><p><b>One content model, three perspectives.</b> Each card is generated from structured data, so the visual system stays consistent as the toolkit grows.</p><p><b>Designed for every input.</b> Cards work with mouse, keyboard focus, and responsive grid breakpoints.</p></aside>}
    </div>
  </section>
);

export default Skills;

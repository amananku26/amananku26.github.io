import React, { useEffect, useState } from "react";

const briefs = [
  {
    label: "Fast",
    request: "Interfaces that feel fast when the work gets complex.",
    decision: "Prioritise the critical path. Ship the smallest useful experience first, then add depth when it earns its place.",
    evidence: "React to Next.js migration · Core Web Vitals and SEO improvement",
    system: ["Visitor", "Fast interface", "Resilient content"],
    outcome: "Experience quality",
    metric: "FAST",
    note: "Render strategy · code splitting · performance budget",
  },
  {
    label: "Inclusive",
    request: "Experiences that work for every person who needs them.",
    decision: "Build accessible defaults into the system through semantic structure, keyboard flow, contrast, and feedback from day one.",
    evidence: "WCAG minded UI · inclusive interaction patterns · tested release quality",
    system: ["Person", "Inclusive UI", "Trusted product"],
    outcome: "Reach & trust",
    metric: "AA",
    note: "Semantic HTML · focus states · motion safe feedback",
  },
  {
    label: "Scalable",
    request: "A frontend system that helps teams ship with confidence.",
    decision: "Turn repeated decisions into reusable patterns: a component system, quality rails, and a clear delivery workflow.",
    evidence: "Reusable design system · ~60% faster content publishing",
    system: ["Teams", "Shared system", "Confident releases"],
    outcome: "Engineering leverage",
    metric: "60%",
    note: "Component contracts · design tokens · CI quality checks",
  },
];

const Clock = () => {
  const [clock, setClock] = useState("");
  useEffect(() => {
    const updateClock = () => setClock(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "UTC" }).format(new Date()));
    updateClock();
    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return clock ? <span>{clock} UTC</span> : null;
};

const Home = () => {
  const [activeBrief, setActiveBrief] = useState(0);
  const brief = briefs[activeBrief];

  return <>
    <section id="home" className="hero-section product-brief-hero">
    <div className="container hero-content">
      <div className="hero-topline"><span>Aman Anku</span><span>Frontend engineer · Bengaluru, India</span></div>
      <div className="brief-layout">
        <div className="brief-copy">
          <div className="brief-incoming"><span><i /> Available for selected roles</span><span>Product systems</span></div>
          <p className="brief-byline">Senior frontend engineer. React, Next.js, TypeScript.</p>
          <h1 className="heading-1">{brief.request}</h1>
          <p className="hero-subhead">I build clear, accessible frontend systems for product teams that need to move quickly without losing quality.</p>
          <div className="brief-selector" role="tablist" aria-label="Select a product constraint">
            <span>What I optimise for</span>
            <div>{briefs.map((item, index) => <button key={item.label} type="button" role="tab" aria-selected={activeBrief === index} className={activeBrief === index ? "is-active" : ""} onClick={() => setActiveBrief(index)}>{item.label}</button>)}</div>
          </div>
          <div className="brief-decision" aria-live="polite"><span>The approach</span><p>{brief.decision}</p></div>
          <div className="brief-actions">
            <a className="button button-primary" href="#contact">Start a conversation</a>
          </div>
          <div className="hero-meta"><span className="availability"><i />Open to product engineering roles</span><span>5+ years of experience</span><span>Enterprise, recruitment, and content platforms</span><Clock /></div>
          <div className="hero-proof" aria-label="Career proof points"><span>Career experience</span><strong>Grid Dynamics</strong><strong>Pintar</strong><strong>Nextory</strong></div>
        </div>
        <aside className="brief-stage" aria-label="Interactive engineering system model">
          <div className="stage-toolbar"><span><i /> How I build</span><span>Focus {String(activeBrief + 1).padStart(2, "0")} / 03</span></div>
          <div className={`system-model system-${activeBrief}`}>
            <div className="model-grid" aria-hidden="true" />
            <div className="system-line line-one" aria-hidden="true"><i /></div><div className="system-line line-two" aria-hidden="true"><i /></div>
            {brief.system.map((name, index) => <div className={`system-node node-${index + 1}`} key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><small>{index === 0 ? "Input" : index === 1 ? "Decision" : "Outcome"}</small></div>)}
            <div className="model-caption"><span>Active principle</span><strong>{brief.note}</strong></div>
          </div>
          <div className="stage-evidence"><div><span>Proof in practice</span><p>{brief.evidence}</p></div><div className="stage-metric"><span>{brief.outcome}</span><strong>{brief.metric}</strong></div></div>
          <div className="stage-footer"><span>Product thinking, made visible</span><span>Aman · 2026</span></div>
        </aside>
      </div>
    </div>
    </section>
  </>;
};

export default Home;

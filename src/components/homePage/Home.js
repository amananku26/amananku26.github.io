import React, { useEffect, useRef, useState } from "react";
import Preflight from "./Preflight";

const briefs = [
  {
    label: "Performance",
    request: "Make a global product feel instant, even when the system behind it is not.",
    decision: "Prioritise the critical path. Ship the smallest useful experience first, then progressively enrich it.",
    evidence: "React → Next.js migration · Core Web Vitals & SEO improvement",
    system: ["Visitor", "Fast interface", "Edge-ready content"],
    outcome: "Experience quality",
    metric: "FAST",
    note: "Render strategy · code splitting · performance budget",
  },
  {
    label: "Accessibility",
    request: "Make the experience work for every person, not just the happy-path user.",
    decision: "Build accessible defaults into the system—semantic structure, keyboard flow, contrast, and feedback from day one.",
    evidence: "WCAG-minded UI · inclusive interaction patterns · tested release quality",
    system: ["Person", "Inclusive UI", "Trusted product"],
    outcome: "Reach & trust",
    metric: "AA",
    note: "Semantic HTML · focus states · motion-safe feedback",
  },
  {
    label: "Scale",
    request: "Help multiple teams ship a consistent product without slowing each other down.",
    decision: "Turn repeated decisions into reusable patterns: a component system, quality rails, and a clear delivery workflow.",
    evidence: "Reusable design system · ~60% faster content publishing",
    system: ["Teams", "Shared system", "Confident releases"],
    outcome: "Engineering leverage",
    metric: "60%",
    note: "Component contracts · design tokens · CI quality checks",
  },
];

const Clock = () => {
  const [clock, setClock] = useState("--:--:--");
  useEffect(() => {
    const updateClock = () => setClock(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "UTC" }).format(new Date()));
    updateClock();
    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return <span>{clock} UTC</span>;
};

const Home = ({ xrayMode, setXrayMode }) => {
  const [activeBrief, setActiveBrief] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showPreflight, setShowPreflight] = useState(true);
  const runTimers = useRef([]);
  const brief = briefs[activeBrief];

  useEffect(() => () => runTimers.current.forEach(window.clearTimeout), []);

  const runScenarios = () => {
    runTimers.current.forEach(window.clearTimeout);
    setIsRunning(true);
    briefs.forEach((_, index) => runTimers.current.push(window.setTimeout(() => setActiveBrief(index), index * 900)));
    runTimers.current.push(window.setTimeout(() => setIsRunning(false), briefs.length * 900));
  };

  return <>
    {showPreflight && <Preflight onClose={() => setShowPreflight(false)} />}
    <section id="home" className="hero-section product-brief-hero">
    <div className="container hero-content">
      <div className="hero-topline"><span>AMAN ANKU / PRODUCT BRIEF 01</span><span>BANGALORE, INDIA</span></div>
      <div className="brief-layout">
        <div className="brief-copy">
          <div className="brief-incoming"><span><i /> INCOMING PRODUCT REQUEST</span><span>2026.09 / OPEN</span></div>
          <p className="brief-byline">From Aman Anku — Senior frontend engineer</p>
          <h1>{brief.request}</h1>
          <div className="brief-selector" role="tablist" aria-label="Select a product constraint">
            <span>CHOOSE THE CONSTRAINT</span>
            <div>{briefs.map((item, index) => <button key={item.label} type="button" role="tab" aria-selected={activeBrief === index} className={activeBrief === index ? "is-active" : ""} onClick={() => setActiveBrief(index)}>{item.label}</button>)}</div>
          </div>
          <div className="brief-decision" aria-live="polite"><span>THE ENGINEERING DECISION</span><p>{brief.decision}</p></div>
          <div className="brief-actions">
            <a className="button button-primary" href="#work">See the evidence <span>↓</span></a>
            <button className="brief-run" type="button" onClick={runScenarios} disabled={isRunning}>{isRunning ? "Running brief…" : "Run all scenarios"}<i aria-hidden="true">▶</i></button>
          </div>
          <button className="xray-launch brief-xray" type="button" onClick={() => setXrayMode(!xrayMode)} aria-pressed={xrayMode}><span className="xray-launch-mark" aria-hidden="true">⌁</span><span><b>{xrayMode ? "X-Ray mode is on" : "Inspect this portfolio"}</b><small>See the engineering choices behind the experience</small></span><i aria-hidden="true">{xrayMode ? "×" : "→"}</i></button>
          <div className="hero-meta"><span className="availability"><i />Open to product engineering roles</span><span>5+ years experience</span><Clock /></div>
          {xrayMode && <aside className="xray-note xray-note-hero" aria-label="Hero implementation notes"><span>01 / PRODUCT BRIEF SYSTEM</span><p><b>State with a purpose.</b> Each scenario changes the brief, architecture model, technical decision, and evidence as one connected story.</p><p><b>One brief, three outcomes.</b> The visitor can explore the constraints individually or run the complete decision sequence.</p></aside>}
        </div>
        <aside className="brief-stage" aria-label="Interactive engineering system model">
          <div className="stage-toolbar"><span><i /> LIVE DECISION MODEL</span><span>SCENARIO {String(activeBrief + 1).padStart(2, "0")} / 03</span></div>
          <div className={`system-model system-${activeBrief}`}>
            <div className="model-grid" aria-hidden="true" />
            <div className="system-line line-one" aria-hidden="true"><i /></div><div className="system-line line-two" aria-hidden="true"><i /></div>
            {brief.system.map((name, index) => <div className={`system-node node-${index + 1}`} key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><small>{index === 0 ? "Input" : index === 1 ? "Decision" : "Outcome"}</small></div>)}
            <div className="model-caption"><span>ACTIVE PRINCIPLE</span><strong>{brief.note}</strong></div>
          </div>
          <div className="stage-evidence"><div><span>PROOF IN PRACTICE</span><p>{brief.evidence}</p></div><div className="stage-metric"><span>{brief.outcome}</span><strong>{brief.metric}</strong></div></div>
          <div className="stage-footer"><span>DECISION PATH LOCKED</span><span>AMAN / FE SYSTEMS</span></div>
        </aside>
      </div>
    </div>
    </section>
  </>;
};

export default Home;

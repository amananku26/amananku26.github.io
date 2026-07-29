import React from "react";

const Now = () => (
  <section id="now" className="now-section section-space">
    <div className="container now-layout">
      <div>
        <p className="eyebrow">Currently exploring</p>
        <h2>How can AI make engineering teams more capable—not just faster?</h2>
      </div>
      <div className="now-content">
        <p>I’m learning how to design practical agentic harnesses: the guardrails, tool access, feedback loops, and evaluation that make AI-assisted work reliable in real teams.</p>
        <ul>
          <li><strong>Claude-powered workflows</strong> — exploring where agents can reduce repetitive engineering work while keeping human judgment in the loop.</li>
          <li><strong>MCP & plugins</strong> — connecting agents to the tools and context they need to do useful, grounded work.</li>
          <li><strong>AI-aware frontend delivery</strong> — applying these ideas to component generation, testing, accessibility, and documentation.</li>
        </ul>
        <p className="now-note">I’m especially interested in systems that make good engineering practices easier to follow by default.</p>
      </div>
    </div>
  </section>
);

export default Now;

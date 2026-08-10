import React from "react";

const Elsewhere = () => (
  <section className="elsewhere-section section-space" aria-labelledby="elsewhere-title">
    <div className="container elsewhere-layout">
      <div><p className="eyebrow">External channels / public record</p><h2 id="elsewhere-title">The work continues in public.</h2></div>
      <div className="elsewhere-links">
        <a href="https://github.com/amananku26" target="_blank" rel="noreferrer"><span>EXT-01</span><div><strong>Open source & experiments</strong><p>Past builds, prototypes, and code shared in public.</p></div><b>↗</b></a>
        <a href="https://medium.com/@amananku" target="_blank" rel="noreferrer"><span>EXT-02</span><div><strong>Writing & reflections</strong><p>Notes on learning, building, and growing through engineering work.</p></div><b>↗</b></a>
      </div>
    </div>
  </section>
);

export default Elsewhere;

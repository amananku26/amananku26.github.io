import React from "react";

const steps = [
  ["01", "Find the real constraint", "I clarify the user need, product goal, and technical tradeoffs before choosing an implementation path."],
  ["02", "Design the smallest useful system", "I turn the decision into reusable interface patterns that are accessible, testable, and easy to extend."],
  ["03", "Ship with the next team in mind", "I leave clear component contracts and quality checks so the work stays dependable after launch."],
];

const Approach = () => (
  <section id="approach" className="approach-section section-space" aria-labelledby="approach-title">
    <div className="container">
      <div className="approach-intro">
        <p className="eyebrow">How I work</p>
        <h2 id="approach-title">A practical path from product question to dependable interface.</h2>
      </div>
      <ol className="approach-list">
        {steps.map(([number, title, description]) => (
          <li key={number} className="approach-card">
            <span className="approach-number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Approach;

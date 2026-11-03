import React, { useState } from "react";

const questions = [
  ["What roles are you open to?", "I am open to senior frontend and product engineering roles where clear interfaces, accessibility, and sustainable systems matter."],
  ["Which technologies do you work with?", "My core toolkit includes React, Next.js, TypeScript, JavaScript, Redux, GraphQL, and modern frontend testing tools."],
  ["How much experience do you have?", "I have more than five years of experience building frontend products and reusable interface systems."],
  ["What kinds of products have you supported?", "My experience includes a recruitment platform, a global enterprise website, and content driven product experiences."],
  ["Where are you based?", "I am based in Bengaluru, India, and open to discussing opportunities with distributed product teams."],
  ["What is the best way to start a conversation?", "Use the form below or connect on LinkedIn. Tell me a little about the product, team, and challenge you are working through."],
];

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <section className="faq-section section-space" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="faq-intro">
          <p className="eyebrow">Useful context</p>
          <h2 id="faq-title">A few answers before we talk.</h2>
        </div>
        <div className="faq-list">
          {questions.map(([question, answer], index) => {
            const isOpen = openQuestion === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article className={`faq-item ${isOpen ? "is-open" : ""}`} key={question}>
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenQuestion(isOpen ? null : index)}
                >
                  <span>{question}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </button>
                <div className="faq-answer" id={answerId} aria-hidden={!isOpen}>
                  <div>
                    <p>{answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;

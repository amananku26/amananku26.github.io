import React, { useEffect, useRef, useState } from "react";

const lines = [
  ["Clear", "interfaces", "help", "focused", "teams", "ship", "with", "confidence."],
  ["Maintainable", "systems", "keep", "progress", "moving."],
];

const TaglineReveal = () => {
  const words = useRef([]);
  const [visibleWords, setVisibleWords] = useState(() => new Set());

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleWords(new Set(words.current.map((_, index) => index)));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = Number(entry.target.dataset.wordIndex);
        setVisibleWords((current) => new Set([...current, index]));
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -28%" });

    words.current.forEach((word) => word && observer.observe(word));
    return () => observer.disconnect();
  }, []);

  let index = 0;
  return (
    <section className="tagline-section" aria-label="How Aman works">
      <div className="container">
        <div className="tagline-layout">
          <div className="tagline-aside" aria-hidden="true">
            <p>How I work</p>
            <span />
          </div>
          <p className="tagline-reveal" aria-label="Clear interfaces help focused teams ship with confidence. Maintainable systems keep progress moving.">
            {lines.map((line, lineIndex) => (
              <span className="tagline-line" key={lineIndex}>
                {line.map((word) => {
                  const wordIndex = index++;
                  return (
                    <span
                      className={`tagline-word ${visibleWords.has(wordIndex) ? "is-visible" : ""}`}
                      data-word-index={wordIndex}
                      key={`${word}-${wordIndex}`}
                      ref={(element) => {
                        words.current[wordIndex] = element;
                      }}
                      aria-hidden="true"
                    >
                      {word}
                    </span>
                  );
                })}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TaglineReveal;

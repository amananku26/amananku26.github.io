import React, { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";

const recommendations = [
  { quote: "Aman consistently impressed me with his speed, attention to detail, and ability to bring a fresh perspective into every product discussion.", name: "Demen Sanjaya Putra Harefa", role: "Co-Founder & CPO at JOIN" },
  { quote: "Aman started fresh at Nextory, learned new things quickly, and became a valuable member of the team. He always went the extra mile to get the job done.", name: "Philip Westermark", role: "Lead Business Development Manager" },
  { quote: "A multi-talented software engineer with great attention to detail, Aman enjoys the challenge of learning new technologies and working on a tight schedule.", name: "Thanuja Tennakoon", role: "Technical Lead" },
  { quote: "A highly skilled developer with great potential. Aman consistently collaborated with full support throughout the Nextory project.", name: "Nadun Sirimevan", role: "Senior Software Engineer" },
  { quote: "Aman brings energy to providing quality deliverables on time. His potential, communication skills, and ability to explain complex tasks stand out.", name: "Parthipan Kugathasan", role: "Full Stack Engineer" },
  { quote: "A hard worker, helpful, and positive by nature. I had the pleasure of working with Aman on several tasks.", name: "Nandini Gupta", role: "Senior Software Developer" },
  { quote: "His ability to work through a crisis and develop new ways to achieve targets was always inspiring.", name: "Ashish Raj", role: "MarTech SaaS Team Lead" },
  { quote: "There is no better colleague than Aman. He is one of the most dedicated professionals I have worked with and is always willing to help.", name: "Suman Kumar", role: "Senior Frontend Engineer" },
  { quote: "Aman is one of the smartest teammates I have worked with. His learning attitude towards every task and assignment stands out.", name: "Amit Singh", role: "Senior Full Stack Engineer" },
];

const Recommendations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeRecommendation = recommendations[activeIndex];

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % recommendations.length), 6500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const select = (index) => setActiveIndex((index + recommendations.length) % recommendations.length);

  return (
    <aside className="recommendation-card" aria-label="LinkedIn recommendations" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocus={() => setIsPaused(true)} onBlur={() => setIsPaused(false)}>
      <div className="recommendation-topline"><div className="recommendation-source"><span className="linkedin-mark" aria-label="LinkedIn"><FaLinkedinIn /></span><p className="eyebrow">LinkedIn recommendations</p></div><span>{String(activeIndex + 1).padStart(2, "0")} / {String(recommendations.length).padStart(2, "0")}</span></div>
      <div className="recommendation-content" aria-live="polite"><blockquote>“{activeRecommendation.quote}”</blockquote><p>— {activeRecommendation.name}<br /><span>{activeRecommendation.role} · LinkedIn recommendation</span></p></div>
      <div className="recommendation-controls">
        <button type="button" onClick={() => select(activeIndex - 1)} aria-label="Show previous recommendation">←</button>
        <div className="recommendation-dots" aria-label="Choose a recommendation">{recommendations.map((item, index) => <button type="button" key={item.name} onClick={() => select(index)} className={index === activeIndex ? "active" : ""} aria-label={`Show recommendation from ${item.name}`} aria-current={index === activeIndex ? "true" : undefined} />)}</div>
        <button type="button" onClick={() => select(activeIndex + 1)} aria-label="Show next recommendation">→</button>
      </div>
    </aside>
  );
};

export default Recommendations;

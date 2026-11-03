import React, { useState } from "react";

const Contact = () => {
  const [isTransmitting, setIsTransmitting] = useState(false);
  const transmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${form.get("name") || "a visitor"}`);
    const message = encodeURIComponent(`Reply email: ${String(form.get("email") || "").trim()}\n\n${String(form.get("message") || "").trim()}`);
    setIsTransmitting(true);
    window.setTimeout(() => {
      window.location.href = `mailto:amankumaranku@gmail.com?subject=${subject}&body=${message}`;
      setIsTransmitting(false);
    }, 520);
  };
  return (
    <section id="contact" className="contact-section section-space">
      <div className="container contact-card">
        <div className="contact-intro"><p className="eyebrow">Let’s work together</p><h2>Have a frontend problem that deserves careful thinking?</h2><p>For product engineering, frontend architecture, and senior frontend roles. Send a note and I will get back to you.</p><a className="text-link" href="https://www.linkedin.com/in/amananku26/" target="_blank" rel="noreferrer">Connect on LinkedIn</a></div>
        <form className={`comms-panel ${isTransmitting ? "is-transmitting" : ""}`} onSubmit={transmit}>
          <div className="comms-header"><span>Start a conversation</span><span>{isTransmitting ? "Opening email" : "Ready"}</span></div>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" autoComplete="name" placeholder="Your name" />
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" required rows="4" placeholder="What would you like to build?" />
          <button className="button button-primary" type="submit">Start a conversation</button>
          <p className="contact-reassurance">No sign up. This opens your email client.</p>
          <div className="signal-wave" role="presentation" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

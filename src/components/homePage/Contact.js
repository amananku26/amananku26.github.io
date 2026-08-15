import React, { useState } from "react";

const Contact = () => {
  const [isTransmitting, setIsTransmitting] = useState(false);
  const transmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio transmission from ${form.get("name") || "a visitor"}`);
    const message = encodeURIComponent(String(form.get("message") || "").trim());
    setIsTransmitting(true);
    window.setTimeout(() => {
      window.location.href = `mailto:amankumaranku@gmail.com?subject=${subject}&body=${message}`;
      setIsTransmitting(false);
    }, 520);
  };
  return (
    <section id="contact" className="contact-section section-space">
      <div className="container contact-card">
        <div className="contact-intro"><p className="eyebrow">Open channel / secure comms</p><h2>Have a complex frontend problem worth solving?</h2><p>For product engineering, frontend architecture, and senior frontend opportunities. The channel is open.</p><a className="text-link" href="https://www.linkedin.com/in/amananku26/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></div>
        <form className={`comms-panel ${isTransmitting ? "is-transmitting" : ""}`} onSubmit={transmit}>
          <div className="comms-header"><span>COMMS//OUTBOUND</span><span>{isTransmitting ? "TRANSMITTING" : "READY"}</span></div>
          <label htmlFor="contact-name">IDENTIFIER</label>
          <input id="contact-name" name="name" autoComplete="name" placeholder="Your name" />
          <label htmlFor="contact-message">MESSAGE</label>
          <textarea id="contact-message" name="message" required rows="4" placeholder="What would you like to build?" />
          <button className="button button-primary" type="submit">Transmit message <span>→</span></button>
          <div className="signal-wave" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

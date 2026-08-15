import React, { useState } from "react";
import styles from "./Feeder.module.css";

// Simple lightweight feedback form to replace the feeder-react-feedback widget.
// Opens the user's mail client using mailto: on submit (same behaviour as Contact form).
const FeedbackForm = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(`Feedback from ${name || "a visitor"}`);
    const body = encodeURIComponent(message || "");
    // small delay for UX parity with previous widget
    setTimeout(() => {
      window.location.href = `mailto:amankumaranku@gmail.com?subject=${subject}&body=${body}`;
      setSending(false);
      setOpen(false);
      setName("");
      setMessage("");
    }, 300);
  };

  return (
    <div>
      <button type="button" className={styles.triggerButton} onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="feedback-form">Send feedback</button>
      {open && (
        <form id="feedback-form" onSubmit={submit} style={{ marginTop: 8 }} className="frf-feedback-container">
          <label style={{ display: "block", marginBottom: 6 }}>Email (optional)<input value={name} onChange={(e) => setName(e.target.value)} style={{ display: "block", width: "100%" }} /></label>
          <label style={{ display: "block", marginBottom: 6 }}>Message<textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={3} style={{ display: "block", width: "100%" }} /></label>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="button button-primary" type="submit" disabled={sending}>{sending ? "Sending…" : "Send"}</button>
            <button type="button" className="button" onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
import React, { useEffect, useRef, useState } from "react";
import CommandPalette from "./components/CommandPalette";

// Layout component: provides the app-level state (theme, sound, recruiterMode) and injects
// those props into the page component(s) rendered as its children.
const Layout = ({ children }) => {
  // Start with server-consistent defaults. Hydration mismatches occur when
  // initial client state differs from server-rendered markup. Defer reading
  // from localStorage until after mount, then update state.
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);
  const audioContext = useRef(null);
  const themeTimer = useRef(null);

  // On mount, read persisted preferences and apply them. This avoids
  // server/client markup mismatch during hydration.
  useEffect(() => {
    if (typeof window === "undefined") return;
    setMounted(true);
    try {
      const savedRecruiter = localStorage.getItem("portfolio-recruiter-mode");
      setRecruiterMode(savedRecruiter === "true");
      const savedTheme = localStorage.getItem("portfolio-theme");
      if (savedTheme) setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme || "dark";
    } catch (err) {
      // ignore localStorage read errors
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Persist recruiter mode when it changes (only relevant on client).
    try { localStorage.setItem("portfolio-recruiter-mode", String(recruiterMode)); } catch (e) {}
  }, [recruiterMode]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try { localStorage.setItem("portfolio-theme", theme); } catch (e) {}
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => () => window.clearTimeout(themeTimer.current), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const elements = Array.from(document.querySelectorAll(".section-intro, .story-card, .recommendation-card, .case-study, .timeline-item, .capability-card, .now-layout > *, .elsewhere-layout > *, .contact-card > *"));
    elements.forEach((element, index) => {
      element.classList.add("motion-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 85}ms`);
    });
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const toggleSound = async () => {
    if (typeof window === "undefined") return;
    if (!audioContext.current) audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
    const context = audioContext.current;

    if (!soundEnabled && context.state === "suspended") await context.resume();
    setSoundEnabled((enabled) => !enabled);
  };
  const playSignal = () => {
    if (!soundEnabled || !audioContext.current) return;
    const context = audioContext.current;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.setValueAtTime(880, context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(440, context.currentTime + .12);
    gain.gain.setValueAtTime(.035, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .14);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + .14);
  };
  const toggleTheme = () => {
    if (typeof window === "undefined") return;
    window.clearTimeout(themeTimer.current);
    setIsThemeTransitioning(true);
    setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark");
    themeTimer.current = window.setTimeout(() => setIsThemeTransitioning(false), 1100);
  };

  const renderChildWithProps = (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { recruiterMode, setRecruiterMode, soundEnabled, toggleSound, theme, toggleTheme, onSignal: playSignal });
    }
    return child;
  };

  return (
    <div className={`App theme-${theme} ${mounted && recruiterMode ? "recruiter-mode" : ""}`}>
      <CommandPalette />
      {React.Children.map(children, renderChildWithProps)}
      <div className={`theme-transition ${isThemeTransitioning ? "is-active" : ""}`} aria-hidden="true"><i /><i /><i /></div>
    </div>
  );
};

export default Layout;

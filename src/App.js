import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/homePage/HomePage";
import CommandPalette from "./components/CommandPalette";

const App = () => {
  const [recruiterMode, setRecruiterMode] = useState(() => localStorage.getItem("portfolio-recruiter-mode") === "true");
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);
  const audioContext = useRef(null);
  const themeTimer = useRef(null);

  useEffect(() => localStorage.setItem("portfolio-recruiter-mode", String(recruiterMode)), [recruiterMode]);
  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  useEffect(() => () => window.clearTimeout(themeTimer.current), []);

  const toggleSound = async () => {
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
    window.clearTimeout(themeTimer.current);
    setIsThemeTransitioning(true);
    setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark");
    themeTimer.current = window.setTimeout(() => setIsThemeTransitioning(false), 1100);
  };

  return (
    <div className={`App theme-${theme} ${recruiterMode ? "recruiter-mode" : ""}`}>
      <CommandPalette />
      <HomePage recruiterMode={recruiterMode} setRecruiterMode={setRecruiterMode} soundEnabled={soundEnabled} toggleSound={toggleSound} theme={theme} toggleTheme={toggleTheme} onSignal={playSignal} />
      <div className={`theme-transition ${isThemeTransitioning ? "is-active" : ""}`} aria-hidden="true"><i /><i /><i /></div>
    </div>
  );
};

export default App;

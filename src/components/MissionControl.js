import React, { useEffect, useState } from "react";

const launchDate = Date.UTC(2021, 5, 1, 0, 0, 0);

const formatUptime = (milliseconds) => {
  const totalMinutes = Math.floor(milliseconds / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  return `${String(days).padStart(4, "0")}D ${String(hours).padStart(2, "0")}H ${String(minutes).padStart(2, "0")}M`;
};

const stars = [
  [9, 19, 1.4], [18, 33, 1], [26, 13, 1.8], [35, 28, 1.2], [47, 16, 2.3],
  [57, 39, 1.1], [68, 22, 1.8], [78, 10, 1.2], [88, 31, 2.2], [93, 18, 1],
  [7, 62, 1.3], [16, 79, 2.1], [29, 57, 1.1], [39, 72, 1.5], [52, 61, 2],
  [63, 87, 1.2], [74, 57, 1.8], [84, 74, 1], [95, 62, 1.6], [42, 47, 2.4],
];

const MissionControl = () => {
  const [telemetry, setTelemetry] = useState({ utc: "--:--:--", uptime: "0000D 00H 00M", progress: 0, x: "000", y: "000" });

  useEffect(() => {
    const updateTelemetry = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      setTelemetry((current) => ({
        ...current,
        utc: new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "UTC" }).format(new Date()),
        uptime: formatUptime(Date.now() - launchDate),
        progress: documentHeight > 0 ? Math.round((window.scrollY / documentHeight) * 100) : 0,
      }));
    };
    const updateCoordinates = (event) => setTelemetry((current) => ({
      ...current,
      x: String(Math.round((event.clientX / window.innerWidth) * 359)).padStart(3, "0"),
      y: String(Math.round(90 - (event.clientY / window.innerHeight) * 180)).padStart(3, "0"),
    }));
    updateTelemetry();
    const timer = window.setInterval(updateTelemetry, 1000);
    window.addEventListener("scroll", updateTelemetry, { passive: true });
    window.addEventListener("resize", updateTelemetry);
    window.addEventListener("pointermove", updateCoordinates, { passive: true });
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("scroll", updateTelemetry);
      window.removeEventListener("resize", updateTelemetry);
      window.removeEventListener("pointermove", updateCoordinates);
    };
  }, []);

  return (
    <>
      <div className="celestial-backdrop" aria-hidden="true">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <g className="celestial-grid">
            {[10, 30, 50, 70, 90].map((position) => <line key={`v-${position}`} x1={position} x2={position} y1="0" y2="100" />)}
            {[15, 35, 55, 75, 95].map((position) => <line key={`h-${position}`} x1="0" x2="100" y1={position} y2={position} />)}
            <ellipse cx="50" cy="50" rx="34" ry="16" />
            <ellipse cx="50" cy="50" rx="19" ry="38" />
          </g>
          <g className="catalog-stars">
            {stars.map(([cx, cy, r], index) => <circle key={index} cx={cx} cy={cy} r={r / 8} />)}
          </g>
        </svg>
      </div>
      <aside className="mission-hud" aria-label="Live site telemetry">
        <span>UTC {telemetry.utc}</span>
        <span>UP {telemetry.uptime}</span>
        <span>RA {telemetry.x}° / DEC {telemetry.y}°</span>
      </aside>
      <div className="trajectory" aria-hidden="true">
        <span className="trajectory-label">NAV</span>
        <div className="trajectory-track"><i style={{ height: `${telemetry.progress}%` }} /><b style={{ top: `${telemetry.progress}%` }} /></div>
        <span className="trajectory-label">{String(telemetry.progress).padStart(3, "0")}%</span>
      </div>
    </>
  );
};

export default MissionControl;

import React, { useEffect, useState } from "react";

const commands = [
  { key: "A", label: "Open mission archive", detail: "Selected project work", action: () => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" }) },
  { key: "H", label: "View flight history", detail: "Experience and roles", action: () => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" }) },
  { key: "C", label: "Open channel", detail: "Start a conversation", action: () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }) },
  { key: "R", label: "Download resume", detail: "PDF document", action: () => window.open("/Aman_Anku_FE_Resume.pdf", "_blank", "noopener,noreferrer") },
];

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target;
      const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;
      const key = event.key.toLowerCase();
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((open) => !open);
        return;
      }
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }
      if (!isTyping && !event.metaKey && !event.ctrlKey && isOpen) {
        const command = commands.find((item) => item.key.toLowerCase() === key);
        if (command) {
          event.preventDefault();
          command.action();
          setIsOpen(false);
        }
        return;
      }
      if (!isTyping && !event.metaKey && !event.ctrlKey && key === "c") {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const runCommand = (command) => {
    command.action();
    setIsOpen(false);
  };

  return (
    <>
      <button className="command-trigger" type="button" onClick={() => setIsOpen(true)} aria-label="Open command palette">⌘K</button>
      {isOpen && <div className="command-overlay" role="dialog" aria-modal="true" aria-label="Mission command palette" onMouseDown={() => setIsOpen(false)}>
        <div className="command-palette" onMouseDown={(event) => event.stopPropagation()}>
          <div className="command-heading"><span>COMMAND//NAVIGATION</span><button type="button" onClick={() => setIsOpen(false)} aria-label="Close command palette">ESC</button></div>
          <p>SELECT AN AVAILABLE ACTION</p>
          <div className="command-list">{commands.map((command) => <button type="button" key={command.key} onClick={() => runCommand(command)}><kbd>{command.key}</kbd><span><strong>{command.label}</strong><small>{command.detail}</small></span><b>→</b></button>)}</div>
        </div>
      </div>}
    </>
  );
};

export default CommandPalette;

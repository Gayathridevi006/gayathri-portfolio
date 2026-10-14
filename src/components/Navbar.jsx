import { useState } from "react";

const links = [
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Education", "education"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <img className="brand-avatar" src="/Profile_1.jpg" alt="" />
          <span>Gayathri Devi<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-links" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? "Close" : "Open"} navigation menu</span>
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <div id="primary-links" className={`nav-links${open ? " is-open" : ""}`}>
          {links.map(([label, target]) => (
            <a key={target} href={`#${target}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-resume" href="/Gayathridevi_resume.pdf" target="_blank" rel="noreferrer">Resume <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
}

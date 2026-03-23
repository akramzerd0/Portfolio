import { useState, useEffect, useRef } from "react";
import { DATA, ACCENT_COLORS, NAV_ITEMS } from "../data/data.jsx";
import { IconFloppy, IconProjects, IconPlay, IconCV, IconConnect, IconAbout, IconMoon, IconSun } from "./Icons.jsx";
import "../styles/sidebar.css";

const NAV_ICONS = {
  projects: IconProjects,
  play:     IconPlay,
  cv:       IconCV,
  about:    IconAbout,
  connect:  IconConnect,
};

export default function Sidebar({ theme, onThemeToggle, accentIndex, onAccentChange, activeSection, onNav }) {
  const [colorOpen, setColorOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setColorOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <aside className="sidebar">
      {/* Logo — clicking goes back to top/home */}
      <div className="sidebar-top">
        <button className="site-logo" onClick={() => onNav("home")}>
          <IconFloppy />
          <span className="logo-domain">{DATA.fullName}</span>
        </button>

        <div className="sidebar-controls" ref={dropdownRef}>
          <button
            className={`color-dot-btn${colorOpen ? " open" : ""}`}
            onClick={() => setColorOpen(o => !o)}
            title="Change accent color"
            style={{ background: ACCENT_COLORS[accentIndex][theme] }}
          />
          {colorOpen && (
            <div className="color-dropdown">
              {ACCENT_COLORS.map((c, i) => (
                <button
                  key={c.name}
                  className={`color-option${i === accentIndex ? " selected" : ""}`}
                  style={{ background: c[theme] }}
                  onClick={() => { onAccentChange(i); setColorOpen(false); }}
                  title={c.name}
                />
              ))}
            </div>
          )}
          <button
            className={`theme-toggle${theme === "dark" ? " dark" : ""}`}
            onClick={onThemeToggle}
            title={theme === "dark" ? "Switch to light" : "Switch to dark"}
          >
            <div className="theme-toggle-knob">
              {theme === "dark" ? <IconSun size={13} /> : <IconMoon size={13} />}
            </div>
          </button>
        </div>
      </div>

      <hr className="sidebar-hr" />

      {/* About blurb */}
     <p className="sidebar-bio">
  {"I'm "}
  <span style={{ color: "var(--accent)", fontWeight: 700 }}>Akram</span>
  {", software engineer and data scientist. This is my corner of the internet. "}
  <IconFloppy size={15} style={{ display: "inline", verticalAlign: "middle" }} />
</p>

      <hr className="sidebar-hr" />

      {/* Nav */}
      <nav className="sidebar-nav">
        {NAV_ITEMS.map(({ id, label }) => {
          const Icon = NAV_ICONS[id];
          return (
            <button
              key={id}
              className={`nav-btn${activeSection === id ? " active" : ""}`}
              onClick={() => onNav(id)}
            >
              <span className="nav-icon"><Icon /></span>
              {label}
            </button>
          );
        })}
      </nav>

      <hr className="sidebar-hr" />

      {/* Stay Connected */}
      <div>
        <div className="sidebar-connect-title">Stay Connected</div>
        <div className="sidebar-connect-links">
          {DATA.social.map((s, i) => (
            <a key={i} className="sidebar-connect-link" href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
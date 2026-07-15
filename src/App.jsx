import { useState, useEffect } from "react";

import "./styles/Global.css";
import "./styles/Sidebar.css";
import "./styles/Sections.css";

import { ACCENT_COLORS, NAV_ITEMS } from "./data/data.jsx";

import Sidebar  from "./components/Sidebar.jsx";
import Hero     from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Play     from "./components/Play.jsx";
import CV       from "./components/Cv.jsx";
import About    from "./components/About.jsx";
import Connect  from "./components/Connect.jsx";
import Footer from './components/Footer.jsx';
import { IconFloppy, IconMoon, IconSun } from "./components/Icons.jsx";

export default function App() {
  const [theme, setTheme]             = useState("light");
  const [accentIndex, setAccentIndex] = useState(4);
  const [page, setPage]               = useState("home"); // "home" | "about"
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const color = ACCENT_COLORS[accentIndex][theme];
    document.documentElement.style.setProperty("--accent", color);
  }, [accentIndex, theme]);

  // Track which section is in view while on home page
  useEffect(() => {
    if (page !== "home") return;
    const sections = ["home", "projects", "play", "cv", "connect"];
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o && o.disconnect());
  }, [page]);

  // Scroll fade-in for .section elements
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, [page]);

  const handleNav = (id) => {
    if (id === "about") {
  setPage("about");
  setActiveSection("about");
  setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  return;
}
    // If coming from about page, go back to home first then scroll
    if (page === "about") {
      setPage("home");
      setActiveSection(id);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
      return;
    }
    // Already on home — just scroll
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Mobile header */}
      <header className="mobile-header">
        <div className="mobile-logo">
          <IconFloppy size={16} /> akram.dev
        </div>
        <nav className="mobile-nav">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              className={`mobile-nav-btn${activeSection === id ? " active" : ""}`}
              onClick={() => handleNav(id)}
            >
              {label}
            </button>
          ))}
        </nav>
        <button
          style={{ background:"none", border:"none", cursor:"pointer", color:"var(--text)", display:"flex", padding:"4px", flexShrink:0 }}
          onClick={() => setTheme(t => t === "light" ? "dark" : "light")}
        >
          {theme === "dark" ? <IconSun size={16} /> : <IconMoon size={16} />}
        </button>
      </header>

      <div className="layout">
        <Sidebar
          theme={theme}
          onThemeToggle={() => setTheme(t => t === "light" ? "dark" : "light")}
          accentIndex={accentIndex}
          onAccentChange={setAccentIndex}
          activeSection={activeSection}
          onNav={handleNav}
        />

        <main className="main-content" key={page}>
          {page === "about" ? (
            <>
              <About />
              <Footer />
            </>
          ) : (
            <>
              <section id="home"><Hero onNav={handleNav} /></section>
              <section id="projects"><Projects /></section>
              <section id="play"><Play /></section>
              <section id="cv"><CV /></section>
              <section id="connect"><Connect /></section>
              <Footer />
            </>
          )}
        </main>
      </div>
    </>
  );
}
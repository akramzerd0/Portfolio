import { DATA } from "../data/data.jsx";
import { IconAbout } from "./Icons.jsx";

export default function About() {
  const { about, languages, hobbies, openTo } = DATA;

  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="section-icon"><IconAbout /></span>
        <h2 className="section-title">About Me</h2>
      </div>

      {/* Contact */}
      <div className="about-block">
        <h3 className="about-block-title">Contact</h3>
        <p className="about-block-text">{about.contact.intro}</p>
        <ul className="about-list">
          <li>Email: <a href={`mailto:${about.contact.email}`}>{about.contact.email}</a></li>
          {about.contact.links.map((l, i) => (
            <li key={i}><a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a></li>
          ))}
        </ul>
      </div>

      <hr className="about-hr" />

      {/* Languages */}
      <div className="about-block">
        <h3 className="about-block-title">Languages</h3>
        <ul className="about-list">
          {languages.map((l, i) => (
            <li key={i}><strong>{l.language}</strong> — {l.level}</li>
          ))}
        </ul>
      </div>

      <hr className="about-hr" />

      {/* Hobbies */}
      <div className="about-block">
        <h3 className="about-block-title">Interests & Hobbies</h3>
        <ul className="about-list">
          {hobbies.map((h, i) => (
            <li key={i}>{h.emoji} {h.label} — {h.note}</li>
          ))}
        </ul>
      </div>

      <hr className="about-hr" />

      {/* Open To */}
      <div className="about-block">
        <h3 className="about-block-title">Open To</h3>
        <ul className="about-list">
          <li><strong>Roles:</strong> {openTo.roles.join(', ')}</li>
          <li><strong>Type:</strong> {openTo.types.join(', ')}</li>
          <li><strong>Location:</strong> {openTo.locations.join(', ')}</li>
        </ul>
      </div>

      <hr className="about-hr" />

      {/* Now */}
      <div className="about-block">
        <h3 className="about-block-title">What I'm Doing Now</h3>
        <p className="about-updated">Updated {about.now.updated}</p>
        <ul className="about-list">
          {about.now.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <hr className="about-hr" />

      {/* Tools */}
      <div className="about-block">
        <h3 className="about-block-title">Tools</h3>
        <h4 className="about-sub-title">Software</h4>
        <p className="about-block-text">{about.tools.software.intro}</p>
        <ul className="about-list">
          {about.tools.software.items.map((item, i) => (
            <li key={i}>
              {item.label}
              {item.sub && (
                <ul className="about-list about-list--nested">
                  {item.sub.map((s, j) => <li key={j}>{s.label}</li>)}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <h4 className="about-sub-title" style={{ marginTop: "1.5rem" }}>Hardware</h4>
        <ul className="about-list">
          {about.tools.hardware.map((item, i) => (
            <li key={i}>
              {item.label}
              {item.sub && (
                <ul className="about-list about-list--nested">
                  {item.sub.map((s, j) => <li key={j}>{s.label}</li>)}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
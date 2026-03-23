import { DATA } from "../data/data.jsx";
import { IconConnect } from "./Icons.jsx";

export default function Connect() {
  return (
    <section id="connect" className="section">
      <div className="section-header">
        <span className="section-icon"><IconConnect /></span>
        <h2 className="section-title">Stay Connected</h2>
      </div>
      <p className="section-sub">Find me around the web.</p>

      <div className="connect-links">
        {DATA.social.map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noopener noreferrer">
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
import { DATA } from "../data/data.jsx";
import { IconProjects } from "./Icons.jsx";


//add our cyber security projects-- check my github  it's there

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <span className="section-icon"><IconProjects /></span>
        <h2 className="section-title">Projects</h2>
      </div>
      <p className="section-sub">Things I've built and shipped.</p>

      <div className="entry-list">
        {DATA.projects.map((p, i) => (
          <div className="entry-row" key={i}>
            <div className="entry-year">{p.year}</div>
            <div>
              <div className="entry-title">{p.title}</div>
              <p className="entry-desc">{p.description}</p>
              <div className="tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="entry-links">
                {p.github && <a className="entry-link" href={p.github} target="_blank" rel="noopener noreferrer">Source →</a>}
                {p.demo && <a className="entry-link" href={p.demo} target="_blank" rel="noopener noreferrer">Demo →</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
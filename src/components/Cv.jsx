import { DATA } from "../data/data.jsx";
import { IconCV } from "./Icons.jsx";

export default function CV() {
  const { education, experience, skills } = DATA.cv;

  return (
    <section id="cv" className="section">
      <div className="section-header">
        <span className="section-icon"><IconCV /></span>
        <h2 className="section-title">CV / Résumé</h2>
      </div>
      <p className="section-sub">My education, experience, and skills.</p>

      {/* Education */}
      <div className="cv-block">
        <div className="cv-label">Education</div>
        <div className="cv-list">
          {education.map((e, i) => (
            <div className="cv-row" key={i}>
              <div className="cv-role">{e.degree}</div>
              <div className="cv-where">{e.institution} — {e.location}</div>
              <div className="cv-period">{e.year}</div>
              <div className="cv-courses-label">Relevant Courses</div>
              <div className="cv-courses">
                {e.courses.map(c => (
                  <span className="tag" key={c}>{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="cv-block">
        <div className="cv-label">Experience</div>
        <div className="cv-list">
          {experience.map((e, i) => (
            <div className="cv-row" key={i}>
              <div className="cv-role">{e.role}</div>
              <div className="cv-where">{e.company}</div>
              <div className="cv-period">{e.period}</div>
              <ul className="cv-bullets">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="cv-block">
        <div className="cv-label">Skills</div>
        <div className="skills-grid">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <div className="skill-group-name">{group}</div>
              <div className="tags">
                {items.map(s => <span className="tag" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
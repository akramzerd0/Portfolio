import { DATA } from "../data/data.jsx";
import { IconCV, IconAbout } from "./Icons.jsx";

export default function Hero({ onNav }) {
  return (
    <section id="home" className="hero">
      {/* Photo floated top-right like Tania's mascot */}
      <div className="hero-photo-wrap">
        {DATA.photo ? (
          <img src={DATA.photo} alt={DATA.name} className="hero-photo" />
        ) : (
          <div className="hero-photo-placeholder">
            {DATA.name.charAt(0)}
          </div>
        )}
      </div>

      <h1>Hey, I'm {DATA.name}!</h1>
      <p className="hero-body">{DATA.heroBio}</p>
      <p className="hero-note">{DATA.heroNote}</p>
      <div className="hero-btns">
        <button className="hero-btn" onClick={() => onNav("cv")}>
          <IconCV size={16} /> CV / Résumé
        </button>
        <button className="hero-btn" onClick={() => onNav("about")}>
          <IconAbout size={16} /> About Me
        </button>
      </div>
    </section>
  );
}
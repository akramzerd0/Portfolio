import { DATA } from "../data/data.jsx";
import { IconPlay } from "./Icons.jsx";

export default function Play() {
  return (
    <section id="play" className="section">
      <div className="section-header">
        <span className="section-icon"><IconPlay /></span>
        <h2 className="section-title">Play</h2>
      </div>
      <p className="section-sub">When I'm not coding, I'm probably here.</p>

      <div className="games-list">
        {DATA.games.map((g, i) => (
          <div className="game-row" key={i}>
            <div className="game-emoji">{g.emoji}</div>
            <div>
              <div className="game-title">{g.title}</div>
              <div className="game-meta">{g.genre} · {g.platform}</div>
              <p className="game-note">{g.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import { DATA } from "../data/data.jsx";

const FOOTER_LINKS = [
  { label: "GitHub",   href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Discord",  href: "#" },
  { label: "Email",    href: "mailto:akram@email.com" },
];

const BUILT_WITH = [
  { label: "React",   href: "https://react.dev" },
  { label: "Vite",    href: "https://vitejs.dev" },
  { label: "Netlify", href: "https://netlify.com" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        {FOOTER_LINKS.map((l, i) => (
          <a key={i} className="footer-link" href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label}
          </a>
        ))}
      </div>

      <div className="footer-built">
        {BUILT_WITH.map((l, i) => (
          <a key={i} className="footer-built-link" href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label}
          </a>
        ))}
      </div>

      <p className="footer-credit">
        Crafted by {DATA.fullName}
      </p>
    </footer>
  );
}
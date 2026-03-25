
---

## Tech stack

- [React](https://react.dev) — UI
- [Vite](https://vitejs.dev) — build tool
- [Netlify](https://netlify.com) — hosting

---

## Getting started

### Prerequisites
- Node.js 18+
- npm

### Clone the repo
```bash
git clone https://github.com/Elby2112/akram-portfolio.git
cd akram-portfolio
```

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Customization

All content — bio, projects, experience, skills, games, hobbies — lives in one file:
```plaintext
src/data/data.jsx
```

Edit that file to update anything on the site. No other files need to change for content updates.

To change the accent color default, update `accentIndex` in `src/App.jsx`:
- 0 = purple
- 1 = red
- 2 = gold
- 3 = green
- 4 = blue (default)

---

## Build & deploy

### Build for production
```bash
npm run build
```

Output goes to `/dist`. This is what Netlify serves.

### Deploy to Netlify

Connect this repo to your Netlify account and use these build settings:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |

Any push to `main` will trigger an automatic redeploy.

---

## Project structure
```plaintext
src/
  components/    # all UI components
  data/          # data.jsx — all site content lives here
  hooks/         # useScrollReveal.js
  styles/        # CSS files
public/
  favicon.svg    # pixel floppy icon
```

---

*// built by Loubna, with 💾*

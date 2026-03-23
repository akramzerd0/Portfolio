# akram.dev
> Hey Akram 💾
>
> I wanted to build something for you — something that I hoped would help you,
> or bring back that spark for tech, because truly, you are the smartest person I know.
> This idea had been on my mind for a while, but these past two days I pushed hard to make it real,
> because you mean so much to me and I love you deeply.
>
> **About the portfolio:**
> It's clean and simple — fitting for someone graduating soon.
> I added a gaming touch throughout: the icons are all custom-made in pixel art style, just for you.
> I hope this helps you land an amazing job. You deserve it.
>
> **How to make it yours:**
> All your data — bio, projects, experience, links — lives in one file: `src/data/jsx`.
> Update it with your real info and it becomes fully you.
>
> **A few notes:**
> - Mobile responsiveness is still a work in progress
> - If you don't like something, want to change it, or want to add a new section — just tell me
> - This repo is ours, we can work on it together 🤝
>
> And lastly — I'm sorry. I have absolutely no problem with you gaming.
> My reactions get the best of me sometimes and I know that.
> You are the best gamer I know, and I deeply mean that apology.
>
> — Loubna 🤍

---

## Tech stack

- [React](https://react.dev) — UI
- [Vite](https://vitejs.dev) — build tool
- [Netlify](https://netlify.com) — hosting (just a suggestion for deployment )

---

## Getting started

### Prerequisites
- Node.js 18+
- npm

### Clone the repo

\```bash
git clone https://github.com/Elby2112/akram-portfolio.git
cd akram-portfolio
\```

### Install dependencies

\```bash
npm install
\```

### Run locally

\```bash
npm run dev
\```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Customization

All content — bio, projects, experience, skills, games, hobbies — lives in one file:

\```
src/data/data.jsx
\```

Edit that file to update anything on the site. No other files need to change for content updates.

To change the accent color default, update `accentIndex` initial value in `src/App.jsx`:
- 0 = purple
- 1 = red
- 2 = gold
- 3 = green
- 4 = blue (default)

---

## Build & deploy

### Build for production

\```bash
npm run build
\```

Output goes to `/dist`. This is what Netlify serves.

### Deploy to Netlify

We'll connect the repo to a netifly account 

Build settings:
| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |

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

*// built by Loubna, with love*

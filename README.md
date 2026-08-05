# Ayush Sharma — Personal Portfolio

A fast, responsive personal portfolio built with **React + Vite** for a
Data Scientist / Data Analyst profile. Every piece of personal content
(profile info, skills, projects, certificates, experience) lives in plain
JavaScript data files under `src/data/`, so you can update the site without
touching any component code.

**Theme:** "Signal & Noise" — a dark data-console aesthetic with two accent
colors (orange + blue) echoing a chart legend, monospace "code-comment"
section labels, and a quiet animated node-graph in the hero.

---

## 1. Requirements
- [Node.js](https://nodejs.org/) v18+ (v20+ recommended)
- npm (comes with Node.js)

## 2. Setup
```bash
npm install       # install dependencies (only needed once)
npm run dev        # start local dev server → http://localhost:5173
npm run build       # build production files into /dist
npm run preview      # preview the production build locally
```

## 3. Folder structure
```
ayush-portfolio/
├── index.html                 # HTML shell + SEO meta tags + favicon links
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg            # AS monogram / node-motif favicon
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
└── src/
    ├── main.jsx / App.jsx      # entry point, router, layout
    ├── index.css                # design tokens + global styles
    ├── assets/
    │   └── ayush-photo.jpg       # your portrait, used in Hero & About
    ├── data/                      # <-- EDIT THESE FILES TO UPDATE CONTENT
    │   ├── profile.js              # name, roles, bio, contact, education
    │   ├── skills.js                # skills grouped by category
    │   ├── projects.js               # your 5 GitHub projects
    │   ├── certificates.js            # your 13 certificates
    │   └── experience.js               # your 2 internships
    ├── hooks/                    # useReveal, useSEO, useTypingEffect
    ├── components/                 # all reusable UI building blocks
    └── pages/                        # Home, Projects, Certificates,
                                        # Experience, Contact, NotFound
```

## 4. How to update your content
Edit the matching file in `src/data/` — no component code changes needed.

- **Add/edit a project** → `src/data/projects.js` (schema comment at top)
- **Add/edit a certificate** → `src/data/certificates.js`
- **Add/edit experience** → `src/data/experience.js`
- **Update skills** → `src/data/skills.js` (give `level: 0-100` for a bar,
  or omit it for a plain tag)
- **Update name/bio/contact/education/photo** → `src/data/profile.js` and
  swap `src/assets/ayush-photo.jpg` for a new image (keep the same filename,
  or update the import in `Hero.jsx` / `About.jsx`)

## 5. SEO configuration
- Per-page titles/descriptions via the `useSEO` hook, called at the top of
  every file in `src/pages/`.
- Global meta tags (Open Graph, Twitter cards, keywords) live in `index.html`.
- Update the placeholder domain in `public/robots.txt`, `public/sitemap.xml`,
  and `index.html`'s canonical tag once you have a real deployed URL.
- Add a real Open Graph image at `public/og-cover.png` (1200×630px) for
  nice link previews on LinkedIn/social media.

## 6. Favicon
`public/favicon.svg` — an "AS" monogram on a node/graph motif, already
wired up in `index.html`. For extra fallback icons (older browsers / iOS
home screens), generate a full set at
[realfavicongenerator.net](https://realfavicongenerator.net) using this SVG
as the source, and drop the output into `public/`.

## 7. Deploying

### Vercel (recommended — simplest, no config needed)
1. Push this project to a GitHub repo (already done if you've been following along)
2. Go to [vercel.com](https://vercel.com) → Sign Up → **Continue with GitHub**
3. Click **Add New... → Project**, select your repo, click **Import**
4. Vercel auto-detects Vite — don't change any settings, just click **Deploy**
5. Live in ~1-2 minutes at a URL like `your-project.vercel.app`

Every future `git push` automatically redeploys — no extra commands needed.

### Netlify (also simple)
Drag-and-drop the `/dist` folder after `npm run build`, or connect the repo
(build command `npm run build`, publish directory `dist`).

### GitHub Pages (more setup, use only if you specifically want a
`github.io` URL)
1. In `vite.config.js`, change `base: "/"` to `base: "/your-repo-name/"`
2. In `src/main.jsx`, switch `BrowserRouter` back to `HashRouter`
   (GitHub Pages can't do server-side rewrites for client-side routes)
3. In `package.json`, set `homepage` to `https://YOUR-USERNAME.github.io/your-repo-name`
4. Run `npm install` then `npm run deploy`
5. Repo → **Settings → Pages** → Source: "Deploy from a branch" → Branch: `gh-pages`, folder `/ (root)` → Save

## 8. Tech stack
- React 18, React Router 6, Vite 5
- Plain CSS with a small design-token system (no framework)
- No animation library — scroll reveals use `IntersectionObserver`, hero
  background is a hand-written `<canvas>` animation, both respecting
  `prefers-reduced-motion`

## 9. Notes
- All 5 projects, 13 certificates, and 2 internships are already filled in
  with your real data and links.
- Two TCS iON certificates (Young Professional, AI Foundation) show a
  Certificate ID instead of a clickable link, since no public verification
  URL was provided — add a `credentialUrl` field in `src/data/certificates.js`
  if you get one later.

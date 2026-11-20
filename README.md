# Dang / SEC — Cybersecurity Portfolio

A responsive GitHub Pages portfolio with dark UI, searchable write-up cards, projects, learning notes, and an article template.

## Deploy (do not delete your existing GitHub repository)

1. Open `https://github.com/dang2503/dang2503.github.io`.
2. Ensure `index.html`, `.nojekyll`, `assets/style.css`, `assets/main.js`, and `writeups/template.html` are uploaded to **the repository root**, keeping folders.
3. If `index.md` remains from the old Jekyll site, delete it. Remove `_config.yml` with `jekyll-theme-hacker` if not using Jekyll anymore.
4. Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/ (root)` → Save.
5. Check Actions for successful Pages deployment; then visit `https://dang2503.github.io/?v=4`.

## Add a write-up

1. Copy `writeups/template.html` and rename, e.g. `writeups/tryhackme-intro.html`.
2. Edit its title, body, and metadata.
3. Add an entry to the `posts` array in `assets/main.js`, e.g.:

```javascript
{ title: 'Intro to Networking', category: 'TryHackMe', level: 'Easy', date: '2026-11-20', description: 'What I learned about TCP/IP and network investigation.', url: 'writeups/tryhackme-intro.html' },
```

4. Commit both files. Cards will update automatically.

## Important

- The initial posts are **templates**, not finished labs.
- Only publish content you are allowed to disclose; omit secrets and credentials.
- If the page shows the old green Jekyll theme, confirm Pages deployed from `main` root, remove obsolete `index.md`, inspect workflow results and hard-refresh.

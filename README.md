# Dang's Cybersecurity Portfolio

Static GitHub Pages site: HTML + CSS + JavaScript (no build tools required).

## Deploy
1. Upload `index.html`, `.nojekyll`, `assets/`, and `writeups/` to the root of `dang2503/dang2503.github.io`.
2. Delete or rename the old `index.md` and remove the old Jekyll theme configuration `_config.yml` if you no longer need it.
3. GitHub → Repository → Settings → Pages → Deploy from a branch → `main` / `(root)`.
4. Visit https://dang2503.github.io after deployment.

## Add write-ups
1. Copy `writeups/template.html` to a new file such as `writeups/first-lab.html` and edit its content.
2. In `assets/main.js`, add one entry to `posts` with title, category, level, date, description, and url.
3. Commit both files. Categories already supported: `TryHackMe`, `CTF`, `SOC / DFIR`, `Networking`.

Current write-up cards and projects are explicitly placeholder templates, not completed work.

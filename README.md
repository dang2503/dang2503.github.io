<div align="center">

# DANG / SEC

### Cybersecurity Portfolio · Write-ups · Projects · Learning Notes

**Learn. Practice. Document. Repeat.**

[![Website](https://img.shields.io/badge/Website-Live-54e3ae?style=for-the-badge&logo=githubpages&logoColor=white)](https://dang2503.github.io/)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-111827?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)
[![HTML](https://img.shields.io/badge/HTML5-Frontend-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-Styling-1572B6?style=flat-square&logo=css&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Interaction-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[**Visit Portfolio**](https://dang2503.github.io/) · [**Browse Write-ups**](https://dang2503.github.io/#writeups) · [**GitHub Profile**](https://github.com/dang2503)

</div>

---

## Overview

A personal cybersecurity portfolio documenting a hands-on learning journey across **SOC / Blue Team, digital forensics (DFIR), network security, Linux and CTF labs**. Designed to turn practical exercises into clear, reproducible write-ups while showcasing security projects and technical notes.

> **Note:** The starter write-ups and project cards are placeholders. They do not represent completed labs or published projects. Replace them with your own work.

## Features

| Section | Purpose |
| --- | --- |
| **Home** | A concise introduction, focus areas and terminal-inspired visual |
| **Write-ups** | Medium-inspired write-up explorer with compact topic chips below category tabs, combined search, and click-to-filter tags |
| **Projects** | Space to showcase scripts, automations and security lab projects |
| **Achievements** | Certifications, CTF recognition, badges and milestones |
| **About** | Interests, learning direction and GitHub contact |

- Responsive dark interface for desktop and mobile
- Lightweight static site: no framework, database or build process
- Reusable HTML article template
- GitHub Pages compatible

## Tech Stack

- **HTML5** — page structure and write-up templates
- **CSS3** — layout, typography, responsive design and animations
- **Vanilla JavaScript** — write-up search, category filters and dynamic cards
- **GitHub Pages** — static hosting and deployment

## Repository Structure

```text
dang2503.github.io/
├── .nojekyll                 # Serve static files without Jekyll processing
├── index.html                # Main portfolio page
├── README.md                 # Project documentation
├── assets/
│   ├── style.css             # All site styles
│   └── main.js               # Write-up data, search and filters
└── writeups/
    └── template.html         # Reusable write-up article template
```

**Important:** Keep `assets/` and `writeups/` alongside `index.html` at the repository root. If the site shows unstyled text, check that `https://dang2503.github.io/assets/style.css` is reachable.

## Deploy to GitHub Pages

1. Open the repository: [dang2503/dang2503.github.io](https://github.com/dang2503/dang2503.github.io).
2. **Extract the ZIP** and upload its **contents**, not the ZIP file itself. Preserve the directory structure shown above.
3. Commit the changes on `main`.
4. Go to **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, `main`, `/ (root)`, then **Save**.
5. Open [Actions](https://github.com/dang2503/dang2503.github.io/actions) and confirm the Pages deployment finished successfully.
6. Visit **https://dang2503.github.io/** and hard-refresh (`Ctrl + Shift + R`) if necessary.

If you still have `index.md` or `_config.yml` from the old Jekyll Hacker theme, remove them **only if you no longer need them**. Back up any content first.

## Publish a New Write-up

**1. Copy the template**

Copy `writeups/template.html` to a descriptive filename, for example:

```text
writeups/tryhackme-network-fundamentals.html
```

**2. Replace placeholders**

Update the page title, platform, difficulty, objective, investigation, findings and lessons learned. Prefer explanations of *why* each step worked over a command-only solution.

**3. Register the card**

Open `assets/main.js` and add an object inside the `posts` array:

```javascript
{
  title: 'Network Fundamentals — Lab Notes',
  category: 'Networking',
  tags: ['TCP/IP', 'DNS'],
  level: 'Easy',
  date: '2026-11-20',
  description: 'TCP/IP, DNS and practical troubleshooting notes.',
  url: 'writeups/tryhackme-network-fundamentals.html'
},
```

Supported filter categories are `TryHackMe`, `CTF` and `Incident Report` (match the spelling exactly). Add optional `tags` to describe topics; for an incident investigation use `category: 'Incident Report'`. Search matches tags, and clicking a card outside its topic buttons opens the article. Clicking a topic chip instead filters related write-ups. The Popular topics chips and counts below the search are populated automatically from the posts array. Click a selected filter chip to remove it. Commit the HTML article and the updated JavaScript file together.

### Suggested Write-up Structure

1. **Objective** — what the lab or challenge is about
2. **Environment** — tools, scope and authorized setup
3. **Methodology** — analysis, commands and reasoning
4. **Findings** — evidence and interpretation
5. **Lessons Learned** — security implications and defensive insights

## Local Development

You can open `index.html` directly in a browser. For a local HTTP server, run from the repository root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| Page shows plain text / missing design | `assets/style.css` exists at the correct path and loads without 404 |
| Write-up cards are missing | `assets/main.js` loads and browser console shows no errors |
| Old website still appears | `Settings → Pages` branch/root, latest Actions deployment, browser cache |
| Link to article is broken | The `url` in `posts` matches the file path, including case |
| GitHub Pages shows 404 | An `index.html` exists at the published root and deployment succeeded |

## Responsible Disclosure & Content Policy

This portfolio is for education, authorized lab practice and defensive security. Do not publish credentials, access tokens, sensitive data or walkthrough content restricted by the lab platform. Clearly distinguish template pages from completed investigations.

## Contact

- GitHub: [@dang2503](https://github.com/dang2503)
- Portfolio: [dang2503.github.io](https://dang2503.github.io/)

---

<div align="center">

Built with curiosity and consistency. **Keep learning, keep documenting.**

</div>

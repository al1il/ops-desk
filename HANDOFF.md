# HANDOFF — OPS DESK → Cloudflare Pages

Self-contained instructions for the next agent. You need nothing else to publish this site.

Repository: https://github.com/al1il/ops-desk  
Owner account: al1il  
Production branch: main

---

## 1. Project summary

**What it is:** A personal portfolio presented as a live broadcast **OPS DESK** (control-room surface). Dark technical panels, status lights, expandable “channel” cards for projects, live clock, ON AIR indicator, scrolling operational log. Not a standard hero/about/projects/contact template.

**One-line reason:** The owner runs sports broadcast operations and builds lean, private-first automations (Google Apps Script, Sheets, single-file HTML, Workers/D1). The site itself is the same kind of tool — an operator desk, not a marketing page.

**Tech:** Plain HTML + CSS + JS only. No build step, no npm, no frameworks, no dependencies. Static files at the repository root.

---

## 2. File map

| Path | Purpose |
|------|---------|
| `index.html` | **Entry point.** Full page: top bar, identity panel, five project channels, log ticker, contact strip. |
| `styles.css` | Control-room styling: charcoal surfaces, amber/green/cyan status, system fonts, mobile, reduced-motion, light theme toggle. |
| `script.js` | Live clock, channel expand/collapse (click + keyboard), motion toggle, theme toggle, ticker loop. |
| `README.md` | Human-facing project description and Cloudflare Pages deploy notes. |
| `HANDOFF.md` | This file — instructions for the publishing agent. |

No other files or folders. Entry point is `index.html` at the root.

---

## 3. Deployment spec (Cloudflare Pages)

Exact settings:

- **Framework preset:** None  
- **Build command:** *(leave empty)*  
- **Build output directory:** `/`  
- **Production branch:** `main`  
- **Root directory:** *(leave empty)*  
- **Environment variables:** none required  

### Click-by-click (dashboard)

1. Log in to Cloudflare dashboard.  
2. Go to **Workers & Pages**.  
3. Click **Create** → **Pages** → **Connect to Git**.  
4. Authorize GitHub if needed, then select the repository **al1il/ops-desk**.  
5. On the setup screen set:  
   - Project name: `ops-desk` (or any available name)  
   - Production branch: `main`  
   - Framework preset: **None**  
   - Build command: leave blank  
   - Build output directory: `/`  
6. Click **Save and Deploy**.  
7. Wait for the first deployment. Note the generated `*.pages.dev` URL.

### Alternative (CLI)

From a clone of the repo root (or any directory that contains the four static files):

```sh
npx wrangler pages deploy . --project-name ops-desk
```

No build, no env vars. The current directory is the site root.

---

## 4. Pre-publish checklist (already run)

### TODO search (whole repo)

| File | Line | Text |
|------|------|------|
| `index.html` | 74 | `TODO: quantitative uptime / alert volume once approved for public use.` |
| `index.html` | 98 | `TODO: measured reduction in investigation time once figures are cleared for public display.` |
| `index.html` | 122 | `TODO: days saved per week / report volume when shareable.` |
| `index.html` | 146 | `TODO: sync success rate / volume once cleared.` |
| `index.html` | 201 | `Email / LinkedIn / photo — TODO (add your preferred public contact)` |

No other TODOs in CSS, JS, or README.

### Sensitive-content search

- No secrets, API keys, tokens, passwords, or webhook URLs.  
- No colleague names.  
- No internal company links or private Worker URLs.  
- Product names that appear (Slack, Wyscout) are used generically as public tools; no internal endpoints.  
- Words such as “competition”, “secrets stay server-side” are intentional generic operational language, not data leaks.  
- All asset references (`styles.css`, `script.js`) are relative and resolve from the root.

### Asset paths

Confirmed relative; site works when served from `/`.

### Post-deploy verification (next agent must do)

After the Pages URL is live:

1. Desktop: open the URL, expand each channel, confirm clock ticks.  
2. Mobile width (~375px): layout stacks cleanly, channels still expand.  
3. Reduced motion: enable OS “reduce motion” or click the Motion button; animations stop.  
4. Keyboard: Tab to a channel, Enter/Space expands, Escape collapses. Skip link works.

---

## 5. Open items the owner still owes

These must **not** be invented by the next agent. Leave the existing TODOs in place and report them back:

- Public email address  
- LinkedIn URL  
- Avatar / photo  
- Preferred display name or callsign (currently “al1il // broadcast ops”)  
- Any approved impact numbers (uptime, time saved, report volume, etc.)

Until the owner supplies them, the contact line and the four impact TODOs stay as written.

---

## 6. Rules for the next agent

1. Do **not** redesign the concept, visual language, or content structure.  
2. Only make changes required to deploy, or to fix bugs discovered while running the checklist above.  
3. Commit in small, clear steps (e.g. “fix: …”, “chore: …”).  
4. When finished, report:  
   - Live URL  
   - Exactly what (if anything) was changed  
   - What is still pending (the open items in section 5)

That is the entire handoff.

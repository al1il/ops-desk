# OPS DESK

Personal portfolio presented as a live broadcast control surface — not a template.

Built for [al1il](https://github.com/al1il): sports broadcast operations + lean automation (Google Apps Script, Sheets, single-file HTML, Workers when needed).

## What this is

A single static page that feels like an ops desk:

- Top bar with live clock and status
- Expandable “channel” panels for each project (problem → solution → tech → impact)
- Scrolling operational log of real working principles
- Keyboard accessible, mobile-first, respects `prefers-reduced-motion`
- Zero build step, system fonts only, no frameworks

## Deploy on Cloudflare Pages

1. Push this repository to GitHub (already under `al1il/ops-desk`).
2. In the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the `ops-desk` repository.
4. Configure:
   - **Framework preset**: None
   - **Build command**: leave empty
   - **Build output directory**: `/` (or leave blank / set to root)
5. Save and deploy. Every push to the production branch updates the site.

No Node, no npm, no bundler. The files at the repository root are the site.

## Local preview

Open `index.html` in a browser, or serve the folder with any static server:

```sh
npx serve .
# or
python3 -m http.server 8080
```

## Structure

```
/
├── index.html    # full page
├── styles.css    # control-room styles
├── script.js     # clock, channel expand, motion/theme toggles
└── README.md
```

## License

Private use / portfolio. Code may be reused with attribution if desired.

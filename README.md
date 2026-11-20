# HawkBots // FRC Team 4619 — Homepage

Single-page cyberpunk homepage for Ocean View High School's FIRST Robotics Competition team.

Plain HTML/CSS/JS with no build step. Open `index.html` in a browser, or serve the folder with any static host (e.g. GitHub Pages).

- `index.html` holds the page content
- `styles.css` holds the theme. Colors are CSS variables at the top (`--red`, `--gold`, …), taken from the team logo.
- `script.js` handles the mobile menu, scroll reveal and title glitch. All motion is disabled for users who prefer reduced motion.
- `assets/logo.png` is the team logo, also used as the favicon.

## Filling in content

Every placeholder is wrapped in square brackets. Find them with:

```sh
grep -n "\[" index.html
```

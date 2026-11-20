# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page cyberpunk homepage for HawkBots, FIRST Robotics Competition Team 4619 (Ocean View High School). Plain HTML/CSS/JS: no build step, package manager, linter, or tests. Preview by opening `index.html` directly or serving the folder (e.g. `python3 -m http.server`). Intended for static hosting such as GitHub Pages.

## Structure

- `index.html`: all content. Sections in order: hero (`#top`), `#about`, `#robot` (robot spec sheet plus the Season Log timeline), `#shop`, `#sponsors`, `#join`, then the footer. Nav links in the header point to these ids.
- `styles.css`: the theme. Design tokens are CSS variables in `:root` (`--red`, `--red-neon`, `--gold`, `--cut`, fonts), with colors taken from `assets/logo.png`. The file is split by `/* ---------- Section ---------- */` comments that match the page sections.
- `script.js`: one IIFE that adds the mobile nav toggle, the scroll reveal and the title glitch.
- `assets/logo.png`: team logo, also used as the favicon and apple-touch-icon.

## Conventions and cross-file contracts

- **Placeholders**: unfilled content is written in square brackets (`[TEAM EMAIL]`, `[XX]`, `[ROBOT NAME]`, …). List them with `grep -n "\[" index.html`. When filling one in, also replace any copies of it (for example, `[TEAM EMAIL]` appears in several `mailto:` links).
- **Scroll reveal**: an inline script in `<head>` adds the `js` class to `<html>`. CSS hides `.js .reveal` until `script.js` adds `.visible`, so the page stays visible when JS is off. New sections should use `class="section reveal"`.
- **Glitch title**: `.glitch` needs a `data-text` attribute that matches its text, because the `::before`/`::after` layers render `attr(data-text)`.
- **Reduced motion**: every animation must respect `prefers-reduced-motion`. JS checks it with `matchMedia`, and the media query at the end of `styles.css` turns off reveal and animation. New motion has to be handled in both places.
- **Clipped corners**: panels and buttons use the shared `clip-path: polygon(...)` chamfer, sized by `--cut`, in place of `border-radius`.
- **Season Log** (`ol.timeline` inside `#robot`): one `<li>` per year, newest first (`reversed`). Each event uses `<strong>` for the event name, an optional `<span class="tag">` (`off-season`, `rookie year`), and `<span class="res">` with the rank and `<span class="rec">W-L-T</span>` (qualification record). Add `is-highlight` to a year's `<li>` to accent it. Results come from The Blue Alliance (https://www.thebluealliance.com/team/4619/history), and the source line under the timeline credits it.
- **External links**: use `target="_blank" rel="noopener"`.

## Git workflow and deployment

Commit directly to `main` and push to `origin` (`github.com:Hawkbots/homepage`).

The site is hosted on GitHub Pages from the `main` branch, so pushing to `main` is the deployment. Changes go live within a few minutes and there is no staging step. Preview locally and check the page before pushing.

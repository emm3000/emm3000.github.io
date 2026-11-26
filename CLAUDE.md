# CLAUDE.md

One-page portfolio of a Senior Android Developer, served by GitHub Pages at `https://emm3000.github.io/` from the root of `main`. The reader is a recruiter for remote LATAM roles who gives the page about 30 seconds: the first screen carries name, role, a one-line value statement, "Remoto, LATAM" and the contact links (CV PDF, email, LinkedIn, GitHub).

## Stack

Static HTML and CSS served as-is: `index.html`, `styles.css`, `assets/`. GitHub Pages publishes the files exactly as committed, with no build step, package manager or framework. JavaScript only for what CSS cannot do, inline, a few lines.

## Content

- Page copy is neutral LATAM Spanish. Code, file names, commits and this file are English.
- Sections, in order: header, projects, experience, stack, contact.
- Each project is a case: problem, own role, stack, measurable result, proof (screenshot, repo, store link). Three or four cases; an empty section is cut, never filled.
- Client work (the 2FA SDK and the Jetpack Compose migration for the bank client at Encora) is told at the level the contract allows: problem, role, impact. Code, internal names and screenshots of client apps stay out.
- JustChill (`emm3000/Just-Chill`, `emm3000/justchill-ios`) is in closed testing on Google Play: label it "En pruebas cerradas en Google Play", link both repos, show phone screenshots. It gets the store badge once it reaches production.
- Every claim matches the owner's CV. `CLAUDE.local.md` holds its path; a claim the CV lacks is a question for the owner.

## Design

- Every visual value is a token: CSS custom properties in `:root` (`--color-*`, `--space-*`, `--radius-*`, `--font-*`), dark values under `@media (prefers-color-scheme: dark)`. Rules reference tokens; a new value becomes a new token first.
- One typeface, one accent color, generous whitespace.
- Accessibility floor, in both themes:
  - Contrast at least 4.5:1 for text, 3:1 for large text and control borders.
  - Interactive targets at least 44×44 CSS px.
  - Every icon-only link has an `aria-label`; a decorative image has `alt=""`.
  - Motion lives inside `@media (prefers-reduced-motion: no-preference)`.
- Icons are inline SVG.
- Images carry `width` and `height`; images below the first screen take `loading="lazy"`.

## Layout changes

Load `mattpocock-skills:prototype` before a new layout or a section redesign: two or three throwaway variants, the owner picks one, the rest are deleted. `mattpocock-skills:grilling` stress-tests the copy of a case when the owner asks for it.

## Verification

A change is done when the page has been seen, not only written:

1. Serve it with `/usr/bin/timeout -k 1 900 python3 -m http.server 8000` in the background.
2. Open `http://localhost:8000` with Claude in Chrome and screenshot at 320, 390 and 1280 px wide, light and dark.
3. Confirm: no horizontal scroll at 320 px, every link resolves, the first screen at 390 px shows name, role and contact.
4. Stop the server and confirm with `pgrep -fl http.server` that it is gone.

## Git

- Conventional commits, linear history, no AI attribution trailer; `scripts/trailer-check` blocks one.
- Pushing, changing the repo's visibility and changing Pages settings each take the owner's explicit yes, every time.

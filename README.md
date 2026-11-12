# portfolio-v2

A second design for my personal site, built to compare against the one at
[marcos-ruizflores.github.io](https://marcos-ruizflores.github.io). Same content, different look:
dark, full-width project rows and an animated WebGL hero. Available in English and Spanish.

**Live:** https://marcos-ruizflores.github.io/portfolio-v2/ (kept out of search results with `noindex`)

## Stack

- [Astro](https://astro.build) for a fully static site, with i18n routing (`/` English, `/es/` Spanish)
- Tailwind CSS v4, Inter Tight
- A small hand-written WebGL shader for the hero ribbons, no libraries
- GitHub Actions builds and deploys to GitHub Pages on every push to `main`

## Running it locally

Requires Node 24 (see `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:4321/portfolio-v2/
npm run build     # output in dist/
```

## Where things live

```
src/i18n/content.ts   shared text, in both languages
src/i18n/v2.ts        text specific to this design
src/data/profile.ts   links and the tech strip
src/components/       one component per section
public/cv/            the downloadable CV
```

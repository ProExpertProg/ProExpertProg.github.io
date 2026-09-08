# proexpertprog.github.io

Personal site. Astro, no client-side JS, deployed to GitHub Pages by Actions on every push to
`main`.

```
npm install
npm run dev      # localhost:4321
npm run build    # writes dist/
```

## Adding things

**A news item** — `src/data/news.ts`, newest first. `body` takes HTML so you can link out:

```ts
{ date: 'Oct 2026', body: 'Talk at PLDI — <a href="...">recording</a>.' }
```

**A project** — `src/data/projects.ts`. Same shape, optional `href`.

**A paper** — one markdown file in `src/content/publications/`. The Research section is switched
off until there's enough to show; flip `enabled: true` in `src/site.config.ts` when there is.

```yaml
---
title: A functional operator IR for LLM inference
authors: ['Luka Govedič', 'Sai Qian Zhang']   # your name is bolded automatically
venue: PLDI 2027
inProgress: false                              # true renders a grey badge instead of teal
year: 2027
gist: One sentence. This is what someone reads instead of the abstract.
figure: /figures/ir-dialect.svg                # optional, put the file in public/figures/
figureAlt: Operator graph lowering to fused kernels
links:                                         # any labels you want
  pdf: https://...
  code: https://...
  talk: https://...
---
```

**A blog post** — markdown in `src/content/posts/` with `title`, `date`, optional `description`,
and `draft: true` until it's ready. Posts appear at `/blog`. Add
`{ id: 'blog', label: 'Writing', enabled: true }` to the sections list if you want it in the nav —
it links to the page rather than an anchor, so point it at `/blog` in `Base.astro`.

**A whole new top-level section** (teaching, talks, software):

1. add an entry to `sections` in `src/site.config.ts`
2. create `src/components/sections/Thing.astro`
3. register it in the `sectionComponents` map in `src/pages/index.astro`

Removing one is setting `enabled: false` — the nav link and the section both disappear, the content
stays in the repo. `Teaching.astro` is already there as a worked example.

## Structure

```
src/
  site.config.ts          identity, links, which sections exist and render
  data/news.ts            hand-maintained news list
  data/projects.ts        non-paper work
  content.config.ts       schemas for publications and blog posts
  content/publications/   one markdown file per paper
  content/posts/          blog posts
  components/
    Intro.astro           the header block
    PaperCard.astro       figure + title + venue + one-line gist + links
    sections/             one file per top-level section
  layouts/Base.astro      html shell, nav, footer
  pages/                  index, blog, 404
  styles/global.css       all styling; the palette is the six vars at the top
```

## Design notes

Palette is six CSS variables in `global.css`. Teal (`--accent`) is only used where it means
something: published venue badges, links, section rules. In-progress work gets the grey badge, so a
short list reads honestly. Line length is capped at 44rem for readability.

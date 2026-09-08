import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One markdown file per paper. Hidden from the site until
// sections.research.enabled is true in src/site.config.ts.
const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(), // 'PLDI 2027', 'MEng thesis, 2023', 'In progress'
    inProgress: z.boolean().default(false),
    year: z.number(),
    gist: z.string(), // one sentence, shown on the card
    figure: z.string().optional(), // e.g. '/figures/ir-dialect.svg'
    figureAlt: z.string().optional(),
    links: z.record(z.string()).default({}), // { pdf: '...', code: '...', talk: '...' }
  }),
});

// Blog posts. Wire up when you want them; see src/pages/blog/.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { publications, posts };

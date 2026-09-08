/**
 * Hand-maintained. Newest first. `body` may contain HTML (links are the point).
 * `date` is free text — whatever reads well next to the item.
 */
export type NewsItem = { date: string; body: string };

export const news: NewsItem[] = [
  {
    date: 'Aug 2026',
    body: 'Talk on the vLLM compiler stack at the vLLM Conference — <a href="#">recording</a>.',
  },
  {
    date: 'Jun 2026',
    body: 'Wrote about torch.compile and fusion passes on the <a href="https://blog.vllm.ai/">vLLM blog</a>.',
  },
  {
    date: 'May 2026',
    body: 'Received a Google TPU Research Cloud award for work on portable operator IR.',
  },
  { date: 'Mar 2026', body: 'Joining NYU Courant this fall for a PhD.' },
];

/**
 * Hand-maintained. Newest first. `body` may contain HTML (links are the point).
 * `date` is free text — whatever reads well next to the item.
 */
export type NewsItem = { date: string; body: string };

export const news: NewsItem[] = [
  {
    date: 'Sep 2026',
    body: 'Talk on vLLM at <a href="https://www.youtube.com/watch?v=SAqktpwcE4M&t=2164s">PyTorch ATX</a> in Austin, TX.',
  },
  { date: 'Sep 2026', body: 'Joining NYU Courant for a PhD.' },
  {
    date: 'Aug 2026',
    body: 'Poster accepted to <a href="https://events.linuxfoundation.org/pytorch-conference/">PyTorch Conference 2026</a>.',
  },
  {
    date: 'Feb 2026',
    body: 'Talk at <a href="https://luma.com/psfg44lt">NVIDIA Developer Day</a>.',
  },
  {
    date: 'Jun 2025',
    body: 'Presented at <a href="https://www.youtube.com/watch?v=1aEFHpF69Lc">vLLM Office Hours</a> on torch.compile and fusion passes, later written up on the <a href="https://blog.vllm.ai/2025/08/20/torch-compile.html">vLLM blog</a>.',
  },
  {
    date: 'May 2025',
    body: 'Talk at the first <a href="https://luma.com/c1rqyf1f">NYC vLLM meetup</a>.',
  },
];

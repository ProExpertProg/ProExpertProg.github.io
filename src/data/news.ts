/**
 * Hand-maintained. Newest first. `body` may contain HTML (links are the point).
 * `date` is free text — whatever reads well next to the item.
 */
export type NewsItem = { date: string; body: string };

export const news: NewsItem[] = [
  { date: 'Sep 2026', body: 'Starting a PhD at NYU Courant!' },
  {
    date: 'Aug 2026',
    body: 'Poster accepted to <a href="https://events.linuxfoundation.org/pytorch-conference/">PyTorch Conference 2026</a>.',
  },
  {
    date: 'Feb 2026',
    body: 'Gave a talk at <a href="https://luma.com/psfg44lt">NVIDIA Developer Day</a>.',
  },
  {
    date: 'Sep 2025',
    body: 'Talk on vLLM at <a href="https://www.youtube.com/watch?v=SAqktpwcE4M&t=2164s">PyTorch ATX</a> in Austin, TX.',
  },
  {
    date: 'Jun 2025',
    body: 'Presented at <a href="https://www.youtube.com/watch?v=1aEFHpF69Lc">vLLM Office Hours</a> on custom torch.compile passes in vLLM. ' +
        'Also available as a <a href="https://blog.vllm.ai/2025/08/20/torch-compile.html">vLLM blog post</a>.',
  },
  {
    date: 'May 2025',
    body: 'Gave a talk at the first <a href="https://luma.com/c1rqyf1f">NYC vLLM meetup</a>.',
  },
  {
    date: 'Jan 2025',
    body: 'Joined Red Hat following the <a href="https://www.redhat.com/en/about/press-releases/red-hat-acquire-neural-magic">Neural Magic acquisition!</a>',
  },
  {
    date: 'Jul 2023',
    body: 'Joined <a href="https://github.com/neuralmagic">Neural Magic</a>, a fast CPU inference startup.',
  },
  {
    date: 'June 2023',
    body: 'Graduated from MIT with M.Eng in EECS. Thesis: <a href="https://dspace.mit.edu/entities/publication/dba23bfb-7699-4032-b133-81da23bc0d45>">"Improving the Performance of Parallel Loops in OpenCilk"</a>.',
  }
];

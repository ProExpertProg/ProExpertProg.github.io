/**
 * Everything that changes often lives here.
 *
 * To add a top-level section:
 *   1. add an entry to `sections` below
 *   2. create src/components/sections/<Name>.astro
 *   3. register it in the `sectionComponents` map in src/pages/index.astro
 * To hide a section, set `enabled: false`. Nav link and content both disappear.
 */

export const site = {
  name: 'Luka Govedič',
  pronunciation: 'GOH-veh-deech',
  email: 'lg@example.edu', // TODO
  description:
    'PhD student at NYU Courant working on compilers for machine learning systems, and a maintainer of vLLM.',
  links: [
    { label: 'CV', href: '/cv.pdf' },
    { label: 'GitHub', href: 'https://github.com/ProExpertProg/' },
    { label: 'Google Scholar', href: '#' }, // TODO
    { label: 'Twitter', href: 'https://twitter.com/luka_govedic' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luka-govedic/' },
  ],
};

export type Section = {
  id: string;
  label: string;
  enabled: boolean;
};

export const sections: Section[] = [
  { id: 'news', label: 'News', enabled: true },
  { id: 'research', label: 'Research', enabled: false }, // turn on when there is something to show
  { id: 'projects', label: 'Projects', enabled: true },
  { id: 'vllm', label: 'vLLM', enabled: true },
  { id: 'teaching', label: 'Teaching', enabled: false },
  { id: 'music', label: 'Music', enabled: true },
  { id: 'contact', label: 'Contact', enabled: true },
];

export const enabledSections = sections.filter((s) => s.enabled);

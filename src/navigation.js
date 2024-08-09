import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: { links: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Experience',
      href: '#experience'
    },
    {
      text: 'Learning',
      href: '#learning'
    },
    {
      text: 'Blog',
      href: getBlogPermalink()
    },
    {
      text: 'Events',
      href: getPermalink('events', 'category'),
    },
  ]},
  actions: [{variant: 'primary', text: 'Architecting Systems', href: 'https://architectingsystems.com/', target: '_blank' }],
  isSticky: true,
  showRssFeed: true, 
  showToggleTheme: true,
};

export const footerData = {
  links: [],
  secondaryLinks: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Blog',
      href: getBlogPermalink()
    },
    {
      text: 'Events',
      href: getPermalink('events', 'category'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
     },
    
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/dianamontalion#' },
    { ariaLabel: 'Fediverse', icon: 'tabler:brand-mastodon', href: 'https://hachyderm.io/@diana' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-linkedin', href: '#https://www.linkedin.com/in/dianamontalion/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/mentrix.bsky.social' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://mentrixgroup.com/"> Diana Montalion</a> · All rights reserved.
  `,
};

import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mts'

export default defineConfig({
  srcDir: 'docs',

  title: 'Dashboard',
  description: 'Full-Stack scaffold.',
  themeConfig: {
    logo: '/images/icon.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/getting-started/introduction' },
      {
        text: 'Request access',
        link: 'https://redothub.com/access-requests/create',
      },
      {
        text: 'Help',
        link: 'https://github.com/redot-src/dashboard-issues/issues',
      },
    ],

    sidebar: sidebar,

    socialLinks: [{ icon: 'github', link: 'https://github.com/redot-src' }],

    footer: {
      copyright: `All rights reserved for Redot ${new Date().getFullYear()} &copy;`,
    },

    editLink: {
      pattern: 'https://github.com/redot-src/dashboard-docs/edit/master/docs/:path',
    },

    search: {
      provider: 'local',
    },
  },
})

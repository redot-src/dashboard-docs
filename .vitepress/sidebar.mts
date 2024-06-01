import type { DefaultTheme } from 'vitepress'

export default [
  {
    text: 'Getting Started',
    items: [
      {
        text: 'Introduction',
        link: '/getting-started/introduction',
      },
      {
        text: 'Dependencies',
        link: '/getting-started/dependencies',
      },
      {
        text: 'Code of Conduct',
        link: '/getting-started/code-of-conduct',
      }
    ],
  },
] satisfies DefaultTheme.Sidebar

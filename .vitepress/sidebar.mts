import type { DefaultTheme } from 'vitepress'

export default [
  {
    text: 'Getting Started',
    collapsed: false,
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
      },
    ],
  },

  {
    text: 'Architecture',
    collapsed: false,
    items: [
      {
        text: 'Overview',
        link: '/architecture/overview',
      },
      {
        text: 'Core Concepts',
        link: '/architecture/core-concepts',
      },
      {
        text: 'Design Principles',
        link: '/architecture/design-principles',
      },
    ],
  },

  {
    text: 'Layouts',
    collapsed: false,
    items: [
      {
        text: 'Scaffold',
        link: '/layouts/scaffold',
      },

      {
        text: 'Dashboard',
        link: '/layouts/dashboard',
      },
      {
        text: 'Website',
        link: '/layouts/website',
      },
    ],
  },

  {
    text: 'Components',
    collapsed: false,
    items: [
      {
        text: 'Introduction',
        link: '/components/introduction',
      },
      {
        text: 'Alert',
        link: '/components/alert',
      },
      {
        text: 'Avatar',
        link: '/components/avatar',
      },
      {
        text: 'Empty',
        link: '/components/empty',
      },
      {
        text: 'icon',
        link: '/components/icon',
      },
      {
        text: 'Image Hint',
        link: '/components/image-hint',
      },
      {
        text: 'Status',
        link: '/components/status',
      },
    ],
  },

  {
    text: 'Forms',
    collapsed: false,
    items: [
      {
        text: 'Form',
        link: '/forms/form',
      },
      {
        text: 'Input',
        link: '/forms/input',
      },
      {
        text: 'Textarea',
        link: '/forms/textarea',
      },
      {
        text: 'Rich Editor',
        link: '/forms/rich-editor',
      },
      {
        text: 'Checkbox',
        link: '/forms/checkbox',
      },
      {
        text: 'Radio',
        link: '/forms/radio',
      },
      {
        text: 'Switch',
        link: '/forms/switch',
      },
      {
        text: 'Rating',
        link: '/forms/rating',
      },
      {
        text: 'Select',
        link: '/forms/select',
      },
      {
        text: 'Color Picker',
        link: '/forms/color-picker',
      },
      {
        text: 'Date Picker',
        link: '/forms/date-picker',
      },
      {
        text: 'Icon Picker',
        link: '/forms/icon-picker',
      },
      {
        text: 'Translatable',
        link: '/forms/translatable',
      },
      {
        text: 'Repeater',
        link: '/forms/repeater',
      },
    ],
  },

  {
    text: 'Console',
    collapsed: false,
    items: [
      {
        text: 'Make Entity',
        link: '/console/make-entity',
      },
      {
        text: 'Make View',
        link: '/console/make-view',
      },
      {
        text: 'Languages',
        link: '/console/languages',
      },
      {
        text: 'Utilities',
        link: '/console/utilities',
      },
    ],
  },

  {
    text: 'Traits',
    collapsed: false,
    items: [
      {
        text: 'CanUploadFile',
        link: '/traits/can-upload-file',
      },
      {
        text: 'Taggable',
        link: '/traits/taggable',
      },
      {
        text: 'UserAuditable',
        link: '/traits/user-auditable',
      },
    ],
  },

  {
    text: 'Utilities',
    collapsed: false,
    items: [
      {
        text: 'Themer',
        link: '/utilities/themer',
      },
      {
        text: 'PHP Helpers',
        link: '/utilities/php-helpers',
      },
      {
        text: 'JavaScript Helpers',
        link: '/utilities/javascript-helpers',
      },
      {
        text: 'Service Worker',
        link: '/utilities/service-worker',
      },
      {
        text: 'Validation',
        link: '/utilities/validation',
      },
      {
        text: 'Visibility',
        link: '/utilities/visibility',
      },
    ],
  },
] satisfies DefaultTheme.Sidebar

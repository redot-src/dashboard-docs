import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Redot Dashboard',
  description: 'Documentation for the Redot Dashboard Laravel starter kit.',
  cleanUrls: true,
  lastUpdated: false,
  themeConfig: {
    siteTitle: false,
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg'
    },
    nav: [
      { text: 'Documentation', link: '/' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: 'On This Page'
    },
    footer: {
      message: 'All rights reserved.',
      copyright: `Copyright © ${new Date().getFullYear()} Redot`
    },
    sidebar: [
      {
        text: 'Documentation',
        items: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Quick Start', link: '/getting-started/quick-start' },
              { text: 'Local Development', link: '/getting-started/local-development' },
              { text: 'Project Structure', link: '/getting-started/project-structure' }
            ]
          },
          {
            text: 'Architecture',
            items: [
              { text: 'Runtime Bootstrap', link: '/architecture/runtime-bootstrap' },
              { text: 'Routing and Surfaces', link: '/architecture/routing-and-surfaces' },
              { text: 'Permissions', link: '/architecture/permissions' }
            ]
          },
          {
            text: 'Foundation',
            items: [
              { text: 'Runtime Options', link: '/foundation/runtime-options' },
              { text: 'Authentication', link: '/foundation/authentication' },
              { text: 'Settings', link: '/foundation/settings' },
              { text: 'Localization', link: '/foundation/localization' },
              { text: 'Datatables', link: '/foundation/datatables' },
              { text: 'Sidebar and Navigation', link: '/foundation/sidebar-and-navigation' },
              { text: 'Commands', link: '/foundation/commands-and-helpers' },
              { text: 'Helpers', link: '/foundation/helpers' },
              {
                text: 'Traits',
                items: [
                  { text: 'CanUploadFile', link: '/foundation/traits/can-upload-file' },
                  { text: 'RespondAsApi', link: '/foundation/traits/respond-as-api' },
                  { text: 'Taggable', link: '/foundation/traits/taggable' },
                  { text: 'UserAuditable', link: '/foundation/traits/user-auditable' }
                ]
              }
            ]
          },
          {
            text: 'Frontend',
            items: [
              { text: 'Assets and Init System', link: '/frontend/assets-and-init-system' },
              {
                text: 'Forms and Content',
                items: [
                  { text: 'Form Validation', link: '/frontend/form-validation' },
                  { text: 'Remote Selects', link: '/frontend/remote-selects' },
                  { text: 'Uploads', link: '/frontend/uploads' },
                  { text: 'Rich Text Editing', link: '/frontend/rich-text-editing' }
                ]
              },
              {
                text: 'Components',
                items: [
                  { text: 'Alert', link: '/frontend/components/alert' },
                  { text: 'Attachments', link: '/frontend/components/attachments' },
                  { text: 'Avatar', link: '/frontend/components/avatar' },
                  { text: 'Captcha', link: '/frontend/components/captcha' },
                  { text: 'Checkboxes', link: '/frontend/components/checkboxes' },
                  { text: 'Color Picker', link: '/frontend/components/color-picker' },
                  { text: 'Countries', link: '/frontend/components/countries' },
                  { text: 'Date Picker', link: '/frontend/components/date-picker' },
                  { text: 'Empty', link: '/frontend/components/empty' },
                  { text: 'Facebook Pixel', link: '/frontend/components/facebook-pixel' },
                  { text: 'File Hint', link: '/frontend/components/file-hint' },
                  { text: 'Flag', link: '/frontend/components/flag' },
                  { text: 'Form', link: '/frontend/components/form' },
                  { text: 'Google Analytics', link: '/frontend/components/google-analytics' },
                  { text: 'Hint', link: '/frontend/components/hint' },
                  { text: 'Icon Picker', link: '/frontend/components/icon-picker' },
                  { text: 'Icon', link: '/frontend/components/icon' },
                  { text: 'Input', link: '/frontend/components/input' },
                  { text: 'Label', link: '/frontend/components/label' },
                  { text: 'Logo', link: '/frontend/components/logo' },
                  { text: 'Page Header', link: '/frontend/components/page-header' },
                  { text: 'Page Loader', link: '/frontend/components/page-loader' },
                  { text: 'Pagination', link: '/frontend/components/pagination' },
                  { text: 'Radios Colored', link: '/frontend/components/radios-colored' },
                  { text: 'Radios', link: '/frontend/components/radios' },
                  { text: 'Rating', link: '/frontend/components/rating' },
                  { text: 'Repeater Card', link: '/frontend/components/repeater-card' },
                  { text: 'Repeater', link: '/frontend/components/repeater' },
                  { text: 'Rich Editor', link: '/frontend/components/rich-editor' },
                  { text: 'Select', link: '/frontend/components/select' },
                  { text: 'Social Icon', link: '/frontend/components/social-icon' },
                  { text: 'Status', link: '/frontend/components/status' },
                  { text: 'Textarea', link: '/frontend/components/textarea' },
                  { text: 'Toggle', link: '/frontend/components/toggle' },
                  { text: 'Translatable Switcher', link: '/frontend/components/translatable-switcher' },
                  { text: 'Translatable', link: '/frontend/components/translatable' },
                  { text: 'Uploader', link: '/frontend/components/uploader' }
                ]
              },
              {
                text: 'Plugins',
                items: [
                  { text: 'RedotIconPicker', link: '/frontend/plugins/redot-icon-picker' },
                  { text: 'RedotRepeater', link: '/frontend/plugins/redot-repeater' },
                  { text: 'RedotUploader', link: '/frontend/plugins/redot-uploader' },
                  { text: 'RedotValidator', link: '/frontend/plugins/redot-validator' },
                  { text: 'RedotValidatorRules', link: '/frontend/plugins/redot-validator-rules' },
                  { text: 'RedotVisibility', link: '/frontend/plugins/redot-visibility' }
                ]
              },
              {
                text: 'Inits',
                items: [
                  { text: 'Coloris Init', link: '/frontend/inits/coloris' },
                  { text: 'Icon Picker Init', link: '/frontend/inits/icon-picker' },
                  { text: 'Repeater Init', link: '/frontend/inits/repeater' },
                  { text: 'Sortable Init', link: '/frontend/inits/sortable' },
                  { text: 'Tempus Dominus Init', link: '/frontend/inits/tempus-dominus' },
                  { text: 'TinyMCE Init', link: '/frontend/inits/tinymce' },
                  { text: 'Tom Select Init', link: '/frontend/inits/tomselect' },
                  { text: 'Turnstile Init', link: '/frontend/inits/turnstile' },
                  { text: 'Uploader Init', link: '/frontend/inits/uploader' }
                ]
              }
            ]
          },
          {
            text: 'Reference',
            items: [
              { text: 'Layouts', link: '/reference/layouts' },
              { text: 'Modules', link: '/reference/modules' }
            ]
          },
          {
            text: 'Workflows',
            items: [
              { text: 'CRUD and Scaffolding', link: '/workflows/crud-and-scaffolding' },
              { text: 'Testing', link: '/workflows/testing' },
              { text: 'Documentation Plan', link: '/workflows/documentation-plan' }
            ]
          }
        ]
      }
    ]
  }
})

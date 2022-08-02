// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const socialConfigs = require('./src/common').socialConfigs

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LedgerSync',
  tagline: 'An open-source library for easily syncing with accounting software, general ledgers, ERPs, and other ledgers.',
  url: 'https://www.ledgersync.dev/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ledgerSync', // Usually your GitHub org/user name.
  projectName: 'ledger_sync', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'lib/core/docs',
          routeBasePath: 'core',
          sidebarPath: require.resolve('./lib/core/sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        blog: {
          path: 'lib/core/blog',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'netsuite',
        path: 'lib/netsuite/docs',
        routeBasePath: 'netsuite',
        sidebarPath: require.resolve('./lib/netsuite/sidebars.js')
      }
    ]
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'LedgerSync',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guides'
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'dropdown',
            label: 'References',
            position: 'right',
            items: [
              {
                type: 'doc',
                docsPluginId: 'netsuite',
                label: 'Netsuite SOAP',
                docId: 'soap/README'
              },
              {
                type: 'doc',
                docsPluginId: 'netsuite',
                label: 'Netsuite REST',
                docId: 'rest/README'
              }
            ]
          },
          {
            href: socialConfigs.github,
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: '/core/intro'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: socialConfigs.slack
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                label: 'GitHub',
                href: socialConfigs.github
              }
            ]
          }
        ],
        copyright: `© Modern Treasury Inc. All rights reserved.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'RISC-V Developer Portal',
  tagline: 'RISC-V: The Open Standard ISA',
  favicon: 'img/favicon.ico',
  staticDirectories: ['antora/build/', 'static'],

  // Set the production url of your site here
  url: 'https://docs.riscv.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs.riscv.org/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'riscv-admin', // Usually your GitHub org/user name.
  projectName: 'docs.riscv.org', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  customFields:{
    description: "All the developer resources for the RISC-V ecosystem.",
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'RISC-V Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {to: '/isa', label: 'Specifications', position: 'left'},
        {
          label:'Specifications',
          position:'left',
          items:[
            {
              type: 'doc',
              docId: 'spec/intro',
              label: 'ISA',
              // docsPluginId: 'tool1',
              to:"/docs/spec/intro",
            },
            {
              type: 'doc',
              docId: 'spec/profiles',
              label: 'Profiles',
              // docsPluginId: 'tool1',
              to:"/docs/spec/profiles",
            },
            {
              
              // href: '/docs/category/non-isa-specifications',
              label: 'Non-ISA',
              // docsPluginId: 'tool1',
              to:"/docs/category/non-isa-specifications",
            },
            {
              type: 'doc',
              docId: 'software/intro',
              label: 'In Development',
              // docsPluginId: 'tool1',
              to:"/docs/software/intro",
            },
          ]
        },
        {
          label:'Developers',
          position:'left',
          items:[
            {
              type: 'doc',
              docId: 'spec/intro',
              label: 'Specification Developers',
              // docsPluginId: 'tool1',
              to:"/docs/spec/intro",
            },
            {
              type: 'doc',
              docId: 'hardware/intro',
              label: 'Hardware Developers',
              // docsPluginId: 'tool1',
              to:"/docs/hardware/intro",
            },
            {
              type: 'doc',
              docId: 'software/intro',
              label: 'Software Developers',
              // docsPluginId: 'tool1',
              to:"/docs/software/intro",
            },
          ]
        },
        {
          label: 'Blog',
          to: '/blog',  
          position: 'left'
        },
        {
          label: 'Events', 
          href: 'https://riscv.org/community/calendar/', 
          position: 'left'
        },
        {
          type: 'search',
          position:'right',
        },
      ],
    },
    docs:{
      sidebar:{
        hideable: true,
      },
    },
    announcementBar: {
      id: 'announcement-bar',
      isCloseable: true,
      content:'congratulations, you found the RISC-V Developer Portal! 🎉 . This site is under active development and not meant for public consumption yet.',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Example',
              to: '/docs/spec/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://slack.riscv.org',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UC5gLmcFuvdGbajs4VL-WU3g',
            },
            // {
            //   label: 'X',
            //   href: 'https://twitter.com/risc_v',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/riscv/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RISC-V International`,
    },

    plugins: [
      ['docusaurus-plugin-sass'],
    ],

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

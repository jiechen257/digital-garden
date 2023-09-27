import { defineConfig } from 'vitepress'
import { navItems, sidebarItems } from './route'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Digital Garden",
  description: "Study materials standing on the shoulders of giant.",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    [
      'link',{ rel: 'icon', href: '/favicon.png' }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: navItems,

    sidebar: sidebarItems,
    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jiechen257/digital-garden' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present jiechen257'
    },
  }
})

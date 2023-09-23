import { defineConfig } from 'vitepress'
import { navItems, sidebarItems } from './route'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "digital-garden",
  description: "Study materials standing on the shoulders of giant.",
  head: [
    [
      'link',{ rel: 'icon', href: '/favicon.ico' }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: navItems,

    sidebar: sidebarItems,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jiechen257/digital-garden' }
    ]
  }
})

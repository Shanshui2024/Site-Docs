import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "山水的文档",
  description: "这里是Minecraft_山水的文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于Minecraft_山水', link: '/introduce/' }
    ],

    sidebar: [
      {
        text: '关于Minecraft_山水',
        items: [
          { text: '简介', link: '/introduce/' },
          { text: '关于山水画路社区', link: '/introduce/sps' }
        ]
      },
      {
        text: '历史迁移文档',
        items: [
          { text: '简介', link: '/old/' },
          { text: '计划', link: '/old/get' },
          { text: '时间轴', link: '/old/timeline' },
          { text: ' 千 万 别 点 ', link: 'https://qwbd.shanshui.site' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Shanshui2024' }
    ]
  }
})

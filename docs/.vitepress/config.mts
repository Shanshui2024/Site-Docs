import { defineConfig } from 'vitepress'
import { 
  InlineLinkPreviewElementTransform 
} from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'
import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { 
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
        'vitepress', 
        '@nolebase/ui', 
        '@nolebase/vitepress-plugin-inline-link-preview/client', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
        '@nolebase/ui', 
        '@nolebase/vitepress-plugin-inline-link-preview', 
        '@nolebase/vitepress-plugin-highlight-targeted-heading', 
      ], 
    }, 
    plugins: [ 
      GitChangelog({ 
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/Shanshui2024/Site-Docs', 
      }), 
      GitChangelogMarkdownSection(), 
    ],
  }, 

  markdown: { 
    config(md) { 
      // 其他 markdown-it 配置...
      md.use(InlineLinkPreviewElementTransform) 
    } 
  },
  title: "光锥备忘录",
  description: "这里是Minecraft_山水的文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/introduce/' },
      { text: '个人主页', link: 'https://shanshui.site/' },
      { text: '山水画路社区', link: 'https://spr.dpdns.org/' },
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

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/learningDocs/',
  title: "凡尘轩",
  description: "个人学习记录",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '学习分类', link: '/class' }
    ],

    sidebar: [
      {
        text: '分类导航',
        items: [
          { text: '首页', link: '/' },
          { text: '学习分类', link: '/class' },
          { text: '前端技术', link: '' },
          { text: 'JavaScript基础', link: '/text/JavaScript基础' },
          { text: 'typescript基础', link: '/text/typescript基础' },
          { text: 'vue3基础', link: '/text/vue3基础' },
          { text: '后端技术', link: '' },
          { text: 'python基础', link: '/text/python基础' },
          { text: 'Linux基础', link: '/text/linux基础' },
          { text: '计算机基础', link: '' },
          { text: 'windiws快捷键', link: '/text/Windows常用快捷键' },
          { text: 'mac快捷键', link: '/text/mac常用快捷键' },
          { text: 'typora基础', link: '/text/typora基础语法' },
          { text: '美工设计', link: '' },
          { text: 'PS基础', link: '/text/PS基础教程' },
          { text: '电商基础', link: '/text/电商基础' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jmsht7355zyf' }
    ]
  }
})

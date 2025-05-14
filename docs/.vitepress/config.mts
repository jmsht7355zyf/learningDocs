import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/learningDocs/',
  title: "凡尘轩",
  description: "个人学习记录",
  // logo: "/logo.svg",
  siteTitle: false,



//主题设置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 导航栏
    nav: [
      {text: '首页', link: '/'},
      {text: '学习分类', link: '/class'},
    ],


    // 搜索设置
    search: {
      provider: 'local', // 默认值，可省略
      options: {
        placeholder: '搜索文档...', // 自定义占位文本
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    // markdown标题显示
    outline: {
      level: [1, 6], // 显示h1到h6所有级别的标题,
      label: '目录',
      //   可折叠目录
      collapsible: true,
      // 默认展开所有标题
      expand: 'always',
      // 显示标题
      text: true,


    },
  },



// 侧边导航栏
  // sidebar: [
  //   {
  //     text: '分类导航',
  //     items: [
  //       { text: '首页', link: '/' },
  //       { text: '学习分类', link: '/class' },
  //       { text: '前端技术', link: '' },
  //       { text: 'JavaScript基础', link: '/text/JavaScript基础' },
  //       { text: 'typescript基础', link: '/text/typescript基础' },
  //       { text: 'vue3基础', link: '/text/vue3基础' },
  //       { text: '后端技术', link: '' },
  //       { text: 'python基础', link: '/text/python基础' },
  //       { text: 'Linux基础', link: '/text/linux基础' },
  //       { text: '计算机基础', link: '' },
  //       { text: 'windiws快捷键', link: '/text/Windows常用快捷键' },
  //       { text: 'mac快捷键', link: '/text/mac常用快捷键' },
  //       { text: 'typora基础', link: '/text/typora基础语法' },
  //       { text: '美工设计', link: '' },
  //       { text: 'PS基础', link: '/text/PS基础教程' },
  //       { text: '电商基础', link: '/text/电商基础' },
  //
  //     ]
  //   }
  // ],

  // 页脚
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2019-present fcx'
  },

  socialLinks: [
    {icon: 'github', link: 'https://github.com/jmsht7355zyf'}
  ],


})

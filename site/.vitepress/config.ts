import { defineConfig } from 'vitepress';
import { getNav } from './config/nav.ts';
import { getSidebar } from './config/sidebar.ts';
export default defineConfig({
  title: 'vue3组件库站点',
  themeConfig: {
    nav: getNav(),
    sidebar: getSidebar()
  }
});

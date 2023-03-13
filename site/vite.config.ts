import { defineConfig } from 'vite';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'; //让代码支持jsx格式的代码
import { VitePluginVitepressDemo } from 'vite-plugin-vitepress-demo';
export default defineConfig({
  plugins: [
    vueJsxPlugin(),
    VitePluginVitepressDemo({
      glob: ['**/demos/**/*.vue']
    })
  ]
});

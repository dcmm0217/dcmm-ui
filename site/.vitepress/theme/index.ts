import type { Theme } from 'vitepress'
// eslint-disable-next-line import/no-named-as-default
import DefaultTheme from 'vitepress/theme'
import { AntdTheme } from 'vite-plugin-vitepress-demo/theme'
import dcmmUI from 'dcmm-ui'
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx)
    ctx.app.component('Demo', AntdTheme)
    ctx.app.use(dcmmUI)
  }
} as Theme
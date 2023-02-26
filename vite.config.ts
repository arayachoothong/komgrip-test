import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 8080,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [vue(), Pages({
    dirs: 'src/pages',
    exclude: ['**/components/*.vue'],
  }),
  Layouts({
    layoutsDirs: 'src/layouts',
    defaultLayout: 'default',
  }),
  AutoImport({
    imports: [
      // presets
      'vue',
      'vue-router',
    ],
    dts: './src/auto-imports.d.ts',
    eslintrc: {
      enabled: true, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
  }),],
  envDir: "./env",
})

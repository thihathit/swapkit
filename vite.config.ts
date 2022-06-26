import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsPaths from 'rollup-plugin-ts-paths-resolve'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsPaths(), vue()]
})

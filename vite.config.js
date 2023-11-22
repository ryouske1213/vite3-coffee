import {
  defineConfig,
  loadEnv
} from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({
  command,
  mode
}) => {
  let env = loadEnv(mode, process.cwd())
  return {
    base: './',
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },
    define: {
      __VITE_FONTEND__: JSON.stringify(env.VITE_FONTEND),
    },
  }
})
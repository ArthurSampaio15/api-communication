import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        delete: resolve(__dirname, 'HTML/delete.html'),
        exit: resolve(__dirname, 'HTML/exit.html'),
        post: resolve(__dirname, 'HTML/post.html'),
        report: resolve(__dirname, 'HTML/report.html'),
        slots: resolve(__dirname, 'HTML/slots.html'),
        sobre: resolve(__dirname, 'HTML/sobre.html'),
        time: resolve(__dirname, 'HTML/time.html'),
        update: resolve(__dirname, 'HTML/update.html'),
        active: resolve(__dirname, 'HTML/active.html'),
        check: resolve(__dirname, 'HTML/check.html')
      }
    }
  }
})
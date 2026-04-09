
import { defineConfig } from 'vite';
import Terminal from 'vite-plugin-terminal';
import mkcert from 'vite-plugin-mkcert';

// vite.config.js
export default {
  server: {
    host: true,
    port: 5173,
    https: true
  },
  plugins: [
    mkcert(),
    Terminal({
      console: 'terminal',
      output: ['terminal', 'console']
    })
  ]
}

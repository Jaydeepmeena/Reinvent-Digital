import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

// /sitemap.xml, /robots.txt and /llms.txt are Vercel functions in api/ (routed
// in vercel.json). This serves the same handlers under `vite dev`.
const SITE_FILES = { '/sitemap.xml': 'sitemap', '/robots.txt': 'robots', '/llms.txt': 'llms' }

function siteFiles() {
  return {
    name: 'site-files',
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), '')
      process.env.VITE_BLOG_API_URL ??= env.VITE_BLOG_API_URL
      server.middlewares.use(async (req, res, next) => {
        const name = SITE_FILES[req.url?.split('?')[0]]
        if (!name) return next()
        try {
          // Absolute: this config runs from a bundled copy in node_modules/.vite-temp.
          const file = pathToFileURL(resolve(server.config.root, 'api', `${name}.js`)).href
          const { default: handler } = await import(file)
          await handler(req, res)
        } catch (error) {
          next(error)
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), siteFiles()],
})

import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  integrations: [react(), mdx()],
  site: 'https://adjanour.github.io',
  base: '/react-components',
  srcDir: path.join(__dirname, 'src'),
  outDir: path.join(__dirname, 'dist'),
  publicDir: path.join(__dirname, 'public'),
})

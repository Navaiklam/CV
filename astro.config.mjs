// astro.config.mjs

import { defineConfig } from 'astro';

export default defineConfig({
  buildOptions: {
    out: "dist",
  },
  site: {
    url: 'https://navaiklam.github.io/CV',
  },
  integrations: [tailwind()]
});
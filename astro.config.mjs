// astro.config.mjs

import { defineConfig } from 'astro';

export default defineConfig({
  buildOptions: {
    out: "dist",
  },
    site:'https://navaiklam.github.io/CV',
  integrations: [tailwind()]
});
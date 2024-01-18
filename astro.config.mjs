// astro.config.mjs

import { defineConfig } from 'astro';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  buildOptions: {
    out: "dist",
  },
  site: {
    url: 'https://navaiklam.github.io/CV',
    base: '/CV',
  },
  integrations: [tailwind()],
});

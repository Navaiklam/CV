// astro.config.mjs

import { defineConfig } from 'astro';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  buildOptions: {
    out: "dist",
  },
    site: 'https://navaiklam.github.io/',
    base: '/CV',
  integrations: [tailwind()],
});

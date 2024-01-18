// astro.config.mjs

import { defineConfig } from 'astro';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    site: 'https://navaiklam.github.io/',
    base: '/CV',
  integrations: [tailwind()],
});

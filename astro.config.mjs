import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  buildOptions: {
    // Configura la carpeta de salida
    out: "dist",
  },
  site: 'https://navaiklam.github.io',
  integrations: [tailwind()]
});
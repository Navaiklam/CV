export default defineConfig({
  buildOptions: {
    out: "dist",
  },
  site: {
    url: 'https://navaiklam.github.io',
    base: '/CV',
  },
  integrations: [tailwind()]
});
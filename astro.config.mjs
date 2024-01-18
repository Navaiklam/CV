export default defineConfig({
  buildOptions: {
    out: "dist",
  },
  site: {
    // Configura la base para GitHub Pages
    base: "/CV/",
  },
  integrations: [tailwind()]
});
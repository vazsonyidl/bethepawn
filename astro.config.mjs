import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import sitemap from "@astrojs/sitemap";

const URL = 'https://bethepawn.com';
// https://astro.build/config

export default defineConfig({
  site: URL,
  integrations: [
      robotsTxt({
    sitemap: [
        `${URL}/sitemap-0.xml`,
        `${URL}/sitemap-index.xml`,
    ]
  }),
    sitemap()],
    build: {
      inlineStylesheets: 'never'
    }
});
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jimkittridge.github.io',
  base: '/TestGithub',
  integrations: [sitemap()],
});

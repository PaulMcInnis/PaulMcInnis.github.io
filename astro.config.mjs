import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://paulmcinnis.github.io',
  integrations: [tailwind()],
  output: 'static',
});

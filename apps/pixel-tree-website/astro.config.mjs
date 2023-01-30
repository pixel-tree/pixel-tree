import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://pixel-tree.netlify.app',
  integrations: [tailwind(), react(), sitemap({
    i18n: {
      // TODO: Blog routes
      defaultLocale: 'es',
      locales: {
        es: 'es-ES'
      }
    }
  }), mdx()]
});
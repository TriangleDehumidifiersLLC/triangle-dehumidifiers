import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.triangledehumidifiers.com',
  // All 301 redirects are handled by Cloudflare Pages via public/_redirects
  // (edge-level, faster, handles both trailing-slash variants).
  // Keeping Astro redirects only for non-trailing-slash to avoid route collisions.
  redirects: {
    '/crawl-space-dehumidifier-installation-raleigh': '/crawl-space-dehumidifier-raleigh-nc/',
    '/crawlspace-dehumidifier-installation-raleigh': '/crawl-space-dehumidifier-raleigh-nc/',
    '/crawlspace-mold-treatment-raleigh': '/crawl-space-mold-treatment-raleigh/',
    '/encapsulated-crawlspace-dehumidifier-raleigh':
      '/encapsulated-crawl-space-dehumidifier-raleigh-nc/',
    '/encapsulated-crawlspace-dehumidifier-raleigh-nc':
      '/encapsulated-crawl-space-dehumidifier-raleigh-nc/',
    '/crawlspace-closed': '/encapsulated-crawl-space-dehumidifier-raleigh-nc/',
    '/crawlspace-vented': '/crawl-space-dehumidifier-raleigh-nc/',
    '/mold-treatment': '/crawl-space-mold-treatment-raleigh/',
    '/whole-home': '/whole-house-dehumidifier-raleigh/',
    '/erv': '/erv-installation-raleigh-nc/',
    '/ventilation': '/erv-installation-raleigh-nc/',
    '/erv-installation-raleigh': '/erv-installation-raleigh-nc/',
    '/whole-home-dehumidifier-installation-raleigh': '/whole-house-dehumidifier-raleigh/',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you') && !page.includes('/404'),
      serialize(item) {
        item.lastmod = new Date();
        return item;
      },
    }),
  ],
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      assetsInlineLimit: 1048576, // 1MB — forces ALL assets including CSS to inline
      cssCodeSplit: false, // CHANGED: was true — splitting was causing external files
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
});

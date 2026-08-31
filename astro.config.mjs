// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import { ALL_LOCALES, DEFAULT_LOCALE } from './src/i18n/index';

// https://astro.build/config
export default defineConfig({
  site: 'https://gustadev.app',
  env: {
    schema: {
      SITE_URL: envField.string({
        context: 'client',
        access: 'public',
        default: 'https://gustadev.app',
      }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  i18n: {
    locales: ALL_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

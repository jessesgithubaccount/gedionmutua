import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tina from '@tinacms/astro/integration';
import { tinaAdminDevRedirect } from '@tinacms/astro/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',

  adapter: netlify({
    // Disables the edge function emulator only in local development.
    // Your edge functions will still work when deployed to Netlify.
    devFeatures: {
      edgeFunctions: false,
    },
  }),

  integrations: [tina(), sitemap()],

  vite: {
    plugins: [
      tinaAdminDevRedirect(),
    ],

    ssr: {
      noExternal: [
        '@tinacms/astro',
        '@tinacms/bridge',
      ],
    },
  },
});
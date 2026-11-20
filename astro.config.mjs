import { defineConfig } from 'astro/config';

// Static build. Cloudflare serves /dist as static assets; the small
// worker in /worker handles the enquiry form endpoint (/api/enquiry).
//
// GitHub Pages preview (see .github/workflows/deploy.yml) sets SITE_URL=https://choki-dev.github.io and
// BASE_PATH=/norlhatravels.com, so the site is served from https://choki-dev.github.io/norlhatravels.com/.
// Without those variables (local dev, Cloudflare deploy) the site builds for the root of its own domain.
export default defineConfig({
  site: process.env.SITE_URL || 'https://norlha.bt', // TODO: replace with the final domain
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});

import { defineConfig } from 'astro/config';

// Static build. Cloudflare serves /dist as static assets; the small
// worker in /worker handles the enquiry form endpoint (/api/enquiry).
export default defineConfig({
  site: 'https://norlha.bt', // TODO: replace with the final domain
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});

# NorLha — Bhutan, Your Way

Astro static site deployed on Cloudflare (Workers + static assets).

## Commands
| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server with hot reload (http://localhost:4321) |
| `npm run preview` | Build, then run on the Cloudflare runtime incl. the enquiry API (http://localhost:8787) |
| `npm run deploy` | Build and deploy to Cloudflare (`npx wrangler login` first) |

## Editing content
- `src/data/site.js` — contact details, social links, navigation (**replace the placeholders**)
- `src/data/journeys.js` — the 5 packages, day-by-day itineraries, accommodation tiers
- `src/data/styles.js` — travel styles (Luxury, Cultural, Himalayan, Romance, Family, Wellness)
- `src/data/destinations.js` — destinations
- `src/assets/photos/` — drop photos in by slot name (see README there)

## Enquiry form
Posts to `/api/enquiry` (`worker/index.js`). To forward enquiries somewhere, set a webhook:
`npx wrangler secret put ENQUIRY_WEBHOOK_URL`. Without it, enquiries are only logged
(visible with `npx wrangler tail`).

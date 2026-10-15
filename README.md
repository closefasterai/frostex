# FrosTex demo preview

Demo site for FrosTex Air Conditioning & Heating LLC in Edinburg, Texas. It is not the live business site. Pages send `noindex, nofollow`. The quote form and the scheduler stay in the browser. Nothing is emailed or booked.

## Scripts

- `npm run dev` starts Next.js locally.
- `npm run build` runs the Next.js build.
- `npm run lint` and `npm run typecheck` check the project.
- `npm run opennext:build` builds the OpenNext Cloudflare worker.
- `npm run deploy:dry-run` packages the worker without deploying it.

Worker name: `frostex-demo-preview`. Workers.dev only. No custom domain.

Turnstile uses Cloudflare's public always-pass test sitekey. Do not commit `.env` files or real secrets.

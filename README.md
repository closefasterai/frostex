# FrosTex demo preview

Demo site for FrosTex Air Conditioning & Heating LLC in Edinburg, Texas. It is not the live business site. Pages send `noindex, nofollow`. The quote form and the scheduler stay in the browser. Nothing is emailed or booked.

Worker name: `frostex-demo-preview`. `workers_dev` is true. The config has no routes and no custom domains.

The Turnstile test site key is the plain Wrangler var `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (`1x00000000000000000000AA`, Cloudflare's public always-pass site key). It is not a secret. Do not commit `.env` files or real secrets.

## Build

From the repo root, after `npm install`:

```bash
npx opennextjs-cloudflare build
```

`npm run opennext:build` runs that same command. It writes the worker to `.open-next/worker.js`.

## Deploy

Run this only after the OpenNext build above:

```bash
npx wrangler deploy --name frostex-demo-preview
```

`npm run deploy` runs that same command. Wrangler sees the OpenNext app and deploys the worker that the build already produced. The `--name` flag matches `name` in `wrangler.jsonc`.

Check the package without uploading:

```bash
npx wrangler deploy --name frostex-demo-preview --dry-run
```

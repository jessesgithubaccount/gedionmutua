# Gedion Mutua — Astro + TinaCMS + Netlify

This project converts the supplied Gedion Mutua site into an Astro application while preserving the existing visual direction and adding TinaCMS editing for the Home, About, and Work pages.

## Routes

- `/` — Home
- `/about` — About
- `/work` — Work
- `/contact` — Contact / 1:1 booking
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service
- `/admin/index.html` — TinaCMS editor

## TinaCMS content

Editable content is stored as JSON under:

- `content/home/index.json`
- `content/about/index.json`
- `content/work/index.json`

Images are stored in `public/images/` and the Tina media library is configured to use that folder.

## Local setup

Use Node.js 22.12+.

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:4321/admin/index.html
```

For a TinaCloud production build, create `.env` from `.env.example` and provide:

```text
NEXT_PUBLIC_TINA_CLIENT_ID=...
TINA_TOKEN=...
NEXT_PUBLIC_TINA_BRANCH=main
```

## Netlify

The project includes `netlify.toml` and uses the official Astro Netlify adapter.

Netlify build command:

```text
npm run build
```

Publish directory:

```text
dist
```

Add these environment variables in Netlify before the first production build:

- `NEXT_PUBLIC_TINA_CLIENT_ID`
- `TINA_TOKEN`
- `NEXT_PUBLIC_TINA_BRANCH` = `main`

The build command runs `tinacms build` before `astro build`, so `/admin/index.html` is included in the deployed site.

# Kefoueg Frank Portfolio

A personal portfolio website built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Three.js.

The site showcases:
- portfolio projects and technical experience
- animated HUD-style visuals and 3D particle background
- a contact form integrated with Resend
- responsive navbar and mobile navigation

## Project structure

- `src/app` — Next.js app router entrypoints
- `src/components` — UI, layout, canvas, and section components
- `src/constants` — static content and project data
- `src/types` — TypeScript interfaces and data models

## Local development

1. Install dependencies:

```bash
pnpm install
```

2. Create a local environment file:

```bash
cp .env.example .env.local
```

3. Add your Resend API key to `.env.local`:

```bash
RESEND_API_KEY=your_actual_api_key_here
```

4. Start the development server:

```bash
pnpm dev
```

5. Open http://localhost:3000

## Environment variables

The project currently requires:

- `RESEND_API_KEY` — used by `src/app/api/contact/route.ts` to send portfolio contact emails.

## Deployment

This project is ready to deploy to Vercel, but it can also run on any Node-compatible provider supporting Next.js.

## Future improvements

- implement actual localization for the language selector
- add tests for the contact API and page rendering
- optimize Three.js particle rendering for mobile
- add a production `robots.txt` and sitemap if deployed publicly

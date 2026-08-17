# Deployment

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and fill the values.

Required for production:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`

Optional until integrations are chosen:

- `SANITY_API_READ_TOKEN`
- `AUDIT_FORM_WEBHOOK_URL`
- `NEWSLETTER_WEBHOOK_URL`

## Vercel

1. Push the repository to GitHub.
2. Import the GitHub repository into Vercel.
3. Add all required environment variables for Preview and Production.
4. Run a production build.
5. Verify redirects, sitemap, robots, forms, Studio and canonical URLs.
6. Move the production domain only after QA passes.

## Sanity

Studio is embedded at `/studio`. Configure Sanity CORS origins for:

- `http://localhost:3000`
- Vercel preview deployment URL
- Production domain

## Rollback

Use Vercel's previous deployment rollback if a production deploy introduces a regression. Keep the legacy HTML exports untouched as the fallback visual/content reference until the migration is fully signed off.

# Hire Kader Next.js Migration

Production-oriented migration of the legacy bundled HTML website into Next.js App Router, TypeScript and Sanity CMS.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```

## Routes

- `/`
- `/blog`
- `/blog/why-your-leads-are-lying-to-you`
- `/studio`

## Environment Variables

See `.env.example`.

## Current Migration State

The site has been moved into a typed Next.js structure with static content parity pages and starter Sanity schemas. The next phase is to extract final assets, migrate content documents into Sanity, connect pages to Sanity queries, and run visual QA against the original HTML exports.

## Forms

The legacy forms had no submission backend. This project includes `/api/audit` and `/api/newsletter`. In production, set:

- `AUDIT_FORM_WEBHOOK_URL`
- `NEWSLETTER_WEBHOOK_URL`

Without those variables, the routes validate and acknowledge submissions but do not send them to an external CRM/email system.

## Sanity

Schemas are under `sanity/schemas`. Studio is embedded at `/studio`.

Editors can manage:

- Site settings and contact details
- Navigation
- Footer links
- Services
- FAQs
- Blog categories
- Blog posts
- SEO fields

## Legacy Source

The original HTML exports remain in the project root and must not be deleted until the migration is fully approved.

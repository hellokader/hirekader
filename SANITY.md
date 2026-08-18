# Hire Kader Sanity CMS

## Access CMS

Production Studio:

```text
https://www.hirekader.com/studio
```

Local Studio:

```text
http://localhost:3000/studio
```

Sanity handles Studio authentication. Only invited Sanity project members can edit content.

## Environment Variables

Required public variables:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-08-18
NEXT_PUBLIC_SANITY_STUDIO_URL=https://www.hirekader.com/studio
```

Server-only variables:

```text
SANITY_API_READ_TOKEN=
SANITY_REVALIDATE_SECRET=
```

Do not prefix private tokens with `NEXT_PUBLIC_`.

## Content Structure

The Studio sidebar is organized for non-technical editing:

```text
HIRE KADER CMS

Website
- Homepage
- Site Settings
- Navigation

Content
- Services
- Portfolio
- Blog Posts
- Testimonials
- FAQs
```

Homepage, Site Settings, and Navigation are presented as singleton-style documents so editors do not accidentally create duplicates from the main sidebar.

## Current Migration Status

The website design is still served from the approved legacy HTML so the public design remains unchanged.

The first CMS-backed section is the homepage audit facts block:

```text
Direct email
WhatsApp
Turnaround
Timezone
```

If Sanity is not configured or a document has not been published yet, the frontend falls back to:

```text
hello@hirekader.com
+8801941171135
Within 48h
GMT+6 · US/UK/AU hours
```

## How to Edit Homepage Audit Details

1. Open `/studio`.
2. Go to `Website -> Homepage`.
3. Open the `Audit Section` tab.
4. Edit Direct email, WhatsApp, Turnaround, or Timezone.
5. Publish.

The website route that serves the legacy homepage shell revalidates every 60 seconds and uses Sanity data when available.

## How to Edit Site Settings

1. Open `/studio`.
2. Go to `Website -> Site Settings`.
3. Update brand, contact, social, or default SEO fields.
4. Publish.

Site Settings can also provide fallback contact values for the homepage audit block.

## How to Add a Service

1. Open `/studio`.
2. Go to `Content -> Services`.
3. Add a new Service.
4. Fill Title and Slug.
5. Add content, benefits, FAQs, CTA, and SEO as needed.
6. Publish.

Approved public URL casing remains:

```text
/Services/[slug]
```

## How to Add a Blog Post

1. Open `/studio`.
2. Go to `Content -> Blog Posts`.
3. Add Title, Slug, Excerpt, Body, image details, date, category, and SEO.
4. Publish.

Approved public URL casing remains:

```text
/Blog/[slug]
```

## How to Import Existing Blog Posts

The initial blog migration file lives at:

```text
sanity/import/blog-posts.ndjson
```

Import it into the `production` dataset:

```bash
npx sanity dataset import sanity/import/blog-posts.ndjson production --replace
```

After import, open:

```text
/studio/structure/content;blogPost
```

You should see the existing Blog Posts in Sanity. Published Sanity posts are used by `/Blog` and `/Blog/[slug]`; if Sanity is empty, the website keeps the current fallback posts instead of going blank.

## How to Add a Portfolio Project

1. Open `/studio`.
2. Go to `Content -> Portfolio`.
3. Add project overview, challenge, strategy, work completed, results, metrics, media, testimonial, CTA, and SEO.
4. Publish.

## SEO

Use the reusable SEO object on Homepage, Services, Blog Posts, Portfolio Projects, and Site Settings.

The Studio route exports Sanity's default Studio metadata, including `noindex`, and is not listed in the sitemap.

## CORS

Configure Sanity CORS for only the origins used by the site:

```text
http://localhost:3000
https://hirekader.com
https://www.hirekader.com
```

Add Vercel preview origins only if draft preview or Visual Editing needs them. Do not use unrestricted `*` for production.

## Vercel

Set the required Sanity variables in Vercel for Development, Preview, and Production.

After changing env vars, redeploy the Vercel project.

## Preview And Publishing

Draft Mode and Visual Editing are planned for the next migration step after the first CMS-backed content is verified. Draft content must remain protected behind a server-only read token.

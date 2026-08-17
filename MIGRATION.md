# Migration Report

## Status Checklist

- [x] Legacy audit
- [x] Route map
- [x] Next.js initialization
- [x] Global layout
- [x] Header
- [x] Footer
- [x] Homepage static migration
- [x] Blog index static migration
- [x] Blog article static migration
- [x] Starter Sanity schemas
- [x] SEO metadata scaffold
- [x] Redirect scaffold
- [ ] Extract final image/font assets from legacy bundle
- [ ] Connect rendered pages to Sanity data
- [ ] Migrate content into Sanity
- [ ] Visual parity screenshots
- [ ] Production form destination
- [ ] Vercel deployment
- [ ] Production domain QA

## Route Map

| Legacy | Next.js | CMS | SEO | Redirect | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `Hire Kader - Homepage (offline).html` | `/` | Planned | Partial | N/A | Static migrated | Homepage source lacked canonical and meta description. |
| `Kader - Redesign (hirekader).html` | `/` | Planned | Partial | Yes | Configured | Legacy filename appears in internal links. |
| `Hire Kader - Blog Index (offline).html` | `/blog` | Planned | Yes | N/A | Static migrated | Breadcrumb schema migrated. |
| `Blog Index.html` | `/blog` | Planned | Yes | Yes | Configured | Legacy internal filename. |
| `Hire Kader - Blog Article (offline).html` | `/blog/why-your-leads-are-lying-to-you` | Planned | Yes | N/A | Static migrated | BlogPosting and Breadcrumb schema migrated. |
| `Blog Article Template.html` | `/blog/why-your-leads-are-lying-to-you` | Planned | Yes | Yes | Configured | Legacy internal filename. |

## Open Migration Notes

- Contact values are placeholders in the legacy HTML: `{{EMAIL}}` and `{{WHATSAPP}}`.
- Newsletter and audit forms had no backend in the legacy export. Next.js API routes now exist and can forward to webhooks when configured.
- Several blog cards were present as teasers only; they remain listed but are not published as full article routes.
- The original files were bundled offline exports with embedded assets; production assets still need final extraction and naming.

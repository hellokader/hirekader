# hirekader.com

Professional website for Abdul Kader - Google Ads Specialist for Home Service Businesses.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email**: Nodemailer
- **Validation**: Zod
- **Deployment**: CloudPanel VPS with PM2 & NGINX

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   └── contact/       # Contact form endpoint
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/
│   ├── sections/          # Page sections (Hero, Services, etc.)
│   ├── Analytics.tsx      # Analytics & tracking
│   └── StructuredData.tsx # SEO structured data
├── data/
│   └── content.ts         # Site content (services, testimonials, etc.)
├── lib/
│   ├── cms.ts             # WordPress CMS abstraction
│   └── validation.ts      # Form validation schemas
├── styles/
│   └── globals.css        # Global styles
└── types/
    └── index.ts           # TypeScript interfaces
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Environment Variables

Copy `.env.example` to `.env.local` for development or `.env.production` for production.

Required variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production URL (https://hirekader.com) |
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP server port |
| `SMTP_USER` | SMTP username |
| `SMTP_PASSWORD` | SMTP password |
| `CONTACT_RECEIVER_EMAIL` | Email address to receive contact form submissions |

Optional variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile secret key |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager ID |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 ID |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel ID |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity ID |
| `WORDPRESS_API_URL` | WordPress CMS API URL (for blog) |

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions to CloudPanel VPS.

Quick summary:

```bash
# On CloudPanel server
cd ~/htdocs/hirekader.com

# After pulling new changes
npm ci
npm run build
pm2 restart hirekader --update-env
```

## Features

- Responsive design (mobile, tablet, desktop)
- SEO optimized with metadata, Open Graph, and structured data
- Contact form with server-side validation
- Email notifications via SMTP
- Rate limiting
- Honeypot spam protection
- Cloudflare Turnstile support
- WordPress CMS ready (optional)
- Analytics integration (GTM, GA4, Meta Pixel, Clarity)
- Security headers

## License

Private - All rights reserved

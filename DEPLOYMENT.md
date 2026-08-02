# Deployment Guide - hirekader.com

This guide covers deploying the hirekader.com Next.js application to a CloudPanel VPS with NGINX reverse proxy and PM2 process manager.

## Prerequisites

- CloudPanel VPS with Node.js LTS installed
- Domain: hirekader.com configured with DNS
- SSH access to the server
- Git installed locally

## Server Setup in CloudPanel

### 1. Create Node.js Site in CloudPanel

1. Log into CloudPanel
2. Navigate to: **Sites → Create Site → Node.js**
3. Configure:
   - **Domain**: hirekader.com
   - **Node.js Version**: 20.x LTS (or latest stable)
   - **Application Port**: 3000
   - **Website Root**: `/htdocs/hirekader.com`
   - **Site User**: your-username

### 2. DNS Configuration

Ensure these DNS records are set in your DNS provider:

```
A  @       YOUR_SERVER_IP
A  www     YOUR_SERVER_IP
```

### 3. SSL Certificate

In CloudPanel, navigate to **SSL Certificates** and issue Let's Encrypt certificates for:
- hirekader.com
- www.hirekader.com

### 4. NGINX Configuration

CloudPanel auto-configures NGINX. The reverse proxy will forward requests from port 443 (HTTPS) to port 3000 (Node.js app).

---

## Local Setup & Deployment

### 1. Clone the Repository

```bash
# On your local machine
cd ~/projects
git clone https://github.com/YOUR_USERNAME/hirekader.git hirekader.com
cd hirekader.com
```

### 2. Install Dependencies

```bash
npm ci
```

### 3. Create Environment File

```bash
# Copy example env file
cp .env.example .env.production

# Edit with your actual values
nano .env.production
```

Required environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://hirekader.com
PORT=3000
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@domain.com
SMTP_PASSWORD=your-smtp-password
CONTACT_RECEIVER_EMAIL=abdul@hirekader.com
```

### 4. Build the Application

```bash
npm run build
```

### 5. Setup PM2

```bash
# Create logs directory
mkdir -p logs

# Start with PM2
pm2 start ecosystem.config.cjs

# Save PM2 process list (auto-restart on reboot)
pm2 save

# Setup PM2 startup script (run the command PM2 outputs)
pm2 startup
```

### 6. Verify Deployment

```bash
# Check if app is running
curl http://127.0.0.1:3000

# View PM2 status
pm2 status

# View logs
pm2 logs hirekader
```

---

## Ongoing Deployment (Git Pull)

### SSH into Server

```bash
ssh SITE_USER@SERVER_IP
cd ~/htdocs/hirekader.com
```

### Pull Latest Changes

```bash
# Pull from git
git pull origin main

# Install any new dependencies
npm ci

# Rebuild
npm run build

# Restart PM2 (update environment variables)
pm2 restart hirekader --update-env
```

---

## PM2 Commands Reference

```bash
# View status
pm2 status

# View logs
pm2 logs hirekader

# Restart
pm2 restart hirekader

# Stop
pm2 stop hirekader

# Delete from PM2
pm2 delete hirekader

# Monitor in real-time
pm2 monitor

# Show detailed info
pm2 info hirekader
```

---

## Troubleshooting

### App Won't Start

```bash
# Check logs for errors
pm2 logs hirekader --err

# Try starting manually to see full error output
node_modules/.bin/next start
```

### Port Already in Use

```bash
# Find what's using port 3000
lsof -i :3000

# Kill the process
kill -9 PROCESS_ID
```

### NGINX 502 Bad Gateway

1. Check if Node.js app is running: `pm2 status`
2. Check NGINX error logs in CloudPanel
3. Verify app starts: `curl http://127.0.0.1:3000`

### SSL Certificate Issues

1. In CloudPanel, navigate to **SSL Certificates**
2. Delete existing certificate
3. Re-issue Let's Encrypt certificate

---

## Cloudflare Settings (if using Cloudflare)

Recommended SSL mode: **Full (strict)**

Do NOT use Flexible SSL as it allows unencrypted connections to your server.

---

## Security Checklist

- [ ] SSL certificate issued and auto-renewal enabled
- [ ] Environment variables set in `.env.production`
- [ ] `.env` files NOT committed to git
- [ ] PM2 startup script configured
- [ ] Firewall rules configured in CloudPanel
- [ ] Cloudflare SSL set to Full (strict)

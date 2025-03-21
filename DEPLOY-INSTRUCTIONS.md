# PumpTogether Website Deployment Instructions

This document provides instructions for deploying the PumpTogether website to Cloudflare Workers using local pre-built assets.

## Option 1: Automated Deployment

### Step 1: Build locally
Run the local build script to create a pre-built version of the website:

```bash
./build-local.sh
```

This script will:
1. Create case-variant components to fix import issues
2. Configure Next.js for static export
3. Build the website into the `out` directory

### Step 2: Deploy to Cloudflare
After the local build is complete, deploy directly to Cloudflare:

```bash
cp direct-wrangler.toml wrangler.toml
npx wrangler deploy
```

This will deploy your pre-built website to Cloudflare Workers without using Cloudflare's build process.

## Option 2: Manual Deployment

If you prefer more control over the process, you can follow these manual steps:

1. **Create component variants**:
   ```bash
   mkdir -p .tmp-components/ui
   cp components/footer.tsx components/Footer.tsx
   cp components/footer.tsx .tmp-components/Footer.tsx
   ```

2. **Update next.config.mjs** for static export:
   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: { unoptimized: true },
     // ...other settings
   };
   ```

3. **Build the site locally**:
   ```bash
   npm run build
   ```

4. **Configure wrangler.toml**:
   ```toml
   name = "pumptogether-website"
   main = "static-site-worker.js"
   compatibility_date = "2024-03-20"
   
   [site]
   bucket = "./out"
   ```

5. **Deploy using Wrangler**:
   ```bash
   npx wrangler deploy
   ```

## Custom Domain Setup

The deployment includes configuration for the `pumptogether.xyz` custom domain. To manage this domain:

1. Make sure the domain is added to your Cloudflare account
2. Verify the custom domain is configured in your Workers settings
3. Ensure DNS records point correctly to Cloudflare

## Troubleshooting

If you encounter issues during deployment:

- **Case sensitivity errors**: Check that component imports match the case of the component files
- **Build failures**: Try using the fallback HTML in the `out` directory
- **Worker errors**: Check Cloudflare Workers logs in the dashboard

## Redeploying

To redeploy after making changes:

1. Run `./build-local.sh` again to rebuild the site
2. Run `npx wrangler deploy` to deploy the updated version

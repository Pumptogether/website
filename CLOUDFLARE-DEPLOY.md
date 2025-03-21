# PumpTogether Website Deployment Guide

This guide outlines how to deploy the PumpTogether website using a pre-build approach with GitLab and Cloudflare integration.

## Deployment Workflow

### Local Development & Pre-Building

1. Make changes to the website code locally
2. Test locally using `npm run dev`
3. When ready to deploy, run the pre-build script:
   ```bash
   chmod +x pre-build.sh  # Make executable (first time only)
   ./pre-build.sh
   ```
4. Commit and push ALL files, including the `out` directory:
   ```bash
   git add -A
   git commit -m "Update site with pre-built files"
   git push origin main
   ```

### What Happens Next

1. GitLab CI will validate that the pre-built files exist
2. Cloudflare will detect the push and deploy your pre-built files

## Required Cloudflare Settings

1. In your Cloudflare Workers & Pages dashboard:
   - Project: `website`
   - Build command: `echo "Using pre-built files"`
   - Build output directory: `out`
   - Root directory: (leave blank)

2. Add the following environment variable:
   - `SKIP_BUILD=true`

3. Configure your custom domain:
   - Domain: `pumptogether.xyz`
   - Ensure DNS records point to Cloudflare

## Troubleshooting

- If the build fails locally, check the component imports and fix case sensitivity issues
- If the deployment fails, check Cloudflare logs in the dashboard
- GitLab CI will report if pre-built files are missing

## Notes

- Always run `./pre-build.sh` before committing changes
- Never delete the `out` directory from your repository
- The pre-build script handles case sensitivity issues automatically

## Local Development

Normal local development workflow continues to work:
```bash
npm run dev
```

This will not affect the deployment process.

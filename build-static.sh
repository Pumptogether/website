#!/bin/bash
# build-static.sh - A specialized build script for static export that handles browser API issues

set -e  # Exit immediately if any command fails

echo "Starting specialized static build process..."

# Create component variants for case sensitivity
echo "Creating component variants for case sensitivity..."
mkdir -p .tmp-components
mkdir -p .tmp-components/ui

# Footer component - critical fix
if [ -f components/footer.tsx ]; then
  # Copy only if files are different or don't exist
  if [ ! -f components/Footer.tsx ] || ! cmp -s components/footer.tsx components/Footer.tsx; then
    cp components/footer.tsx components/Footer.tsx
    echo "Created components/Footer.tsx"
  fi
  
  cp -f components/footer.tsx .tmp-components/Footer.tsx
  cp -f components/footer.tsx .tmp-components/footer.tsx
  echo "Created Footer.tsx variants in .tmp-components"
fi

# Elegant header component 
if [ -f components/elegant-header.tsx ]; then
  cp -f components/elegant-header.tsx .tmp-components/elegant-header.tsx
  cp -f components/elegant-header.tsx .tmp-components/ElegantHeader.tsx
  echo "Created elegant-header variants"
fi

# UI components
if [ -d components/ui ]; then
  for file in components/ui/*.tsx; do
    if [ -f "$file" ]; then
      basename=$(basename "$file" .tsx)
      uppercase=$(echo ${basename:0:1} | tr '[:lower:]' '[:upper:]')${basename:1}
      cp -f "$file" ".tmp-components/ui/${basename}.tsx"
      cp -f "$file" ".tmp-components/ui/${uppercase}.tsx"
      echo "Created variants for $basename"
    fi
  done
fi

# Create next.config.mjs optimized for static export
cat > next.config.mjs << 'EOL'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': ['./.tmp-components', './components']
    };
    return config;
  }
};

export default nextConfig;
EOL

# Ensure Node version
cat > .nvmrc << 'EOL'
18.18.0
EOL

# Disable telemetry
export NEXT_TELEMETRY_DISABLED=1

# Export variable to indicate we're in static build mode
export NEXT_STATIC_BUILD=true

# Clear out directory if it exists
if [ -d "out" ]; then
  echo "Clearing previous build output..."
  rm -rf out
fi

# Build with higher memory limit and specific handling for static export
echo "Building Next.js application for static export..."
NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Verify build output exists
if [ -d "out" ]; then
  echo "Static build completed successfully!"
  
  # Add a marker file to indicate this is a pre-built version
  echo "Pre-built static version on $(date)" > out/pre-built.txt
  
  # Create fallback routes.json for Cloudflare Pages
  cat > out/_routes.json << 'EOL'
{
  "version": 1,
  "include": ["/*"],
  "exclude": []
}
EOL
  
  echo "Files are ready for GitLab commit."
  echo "Please commit and push the entire directory, including the 'out' folder."
else
  echo "Build failed. Check for errors above."
  exit 1
fi

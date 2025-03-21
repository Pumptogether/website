#!/bin/bash
# pre-build.sh - Build locally and prepare for GitLab commit

# Stop on any error
set -e

echo "Starting pre-build process for Cloudflare deployment via GitLab..."

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

# Update next.config.mjs for static export
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

# Build the Next.js application
echo "Building Next.js application..."
NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Verify build output exists
if [ -d "out" ]; then
  echo "Build completed successfully!"
  
  # Add a marker file to indicate this is a pre-built version
  echo "Pre-built on $(date)" > out/pre-built.txt
  
  echo "Files are ready for GitLab commit."
  echo "Please commit and push the entire directory, including the 'out' folder."
else
  echo "Build failed. Check for errors above."
  exit 1
fi

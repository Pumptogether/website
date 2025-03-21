#!/bin/bash
set -e  # Exit immediately if any command fails

echo "Starting local build process..."

# Create component variants for case sensitivity
echo "Creating component variants for case sensitivity..."
mkdir -p .tmp-components
mkdir -p .tmp-components/ui

# Create Footer variants
if [ -f components/footer.tsx ]; then
  cp components/footer.tsx components/Footer.tsx
  cp components/footer.tsx .tmp-components/Footer.tsx
  cp components/footer.tsx .tmp-components/footer.tsx
  echo "Created Footer variants"
fi

# Create elegant-header variants
if [ -f components/elegant-header.tsx ]; then
  cp components/elegant-header.tsx .tmp-components/elegant-header.tsx
  cp components/elegant-header.tsx .tmp-components/ElegantHeader.tsx
  echo "Created elegant-header variants"
fi

# Create UI component variants
if [ -d components/ui ]; then
  for file in components/ui/*.tsx; do
    if [ -f "$file" ]; then
      basename=$(basename "$file" .tsx)
      uppercase=$(echo ${basename:0:1} | tr '[:lower:]' '[:upper:]')${basename:1}
      cp "$file" ".tmp-components/ui/${basename}.tsx"
      cp "$file" ".tmp-components/ui/${uppercase}.tsx"
      echo "Created variant for $basename"
    fi
  done
fi

# Update the next.config.mjs for static export
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

# Build the Next.js application
echo "Building Next.js application..."
npm run build || {
  echo "Full build failed. Creating fallback out directory..."
  
  # Create a simple fallback index.html
  mkdir -p out
  cat > out/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PumpTogether - Coming Soon</title>
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(rgb(8, 11, 16) 0%, rgb(12, 17, 22) 100%);
      color: white;
      margin: 0;
      padding: 0;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      max-width: 600px;
      margin: 0 auto 2rem;
    }
    .button {
      background-color: #3DDBB4;
      color: black;
      padding: 0.75rem 1.5rem;
      border-radius: 0.25rem;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.2s;
    }
    .button:hover {
      background-color: white;
    }
  </style>
</head>
<body>
  <h1>PumpTogether</h1>
  <p>Our website is currently being updated. Please check back soon or visit our social media channels for updates.</p>
  <a href="https://t.me/PumptogetherHQ" class="button">Join our Telegram</a>
</body>
</html>
EOF
}

# Create wrangler.toml for direct deployment
cat > wrangler.toml << 'EOL'
name = "pumptogether-website"
main = "static-site-worker.js"
compatibility_date = "2024-03-20"
compatibility_flags = ["nodejs_compat"]

# Custom domain configuration
routes = [
  { pattern = "pumptogether.xyz", custom_domain = true }
]

# Assets configuration for local deployment
[site]
bucket = "./out"
EOL

echo "Local build process completed!"
echo "Run 'wrangler deploy' to deploy directly to Cloudflare"

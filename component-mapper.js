// component-mapper.js
// This file creates symlinks to ensure imports work properly in all case variations

// Key components that need mapping to match their import usage
const componentMapping = [
  // Problem components
  { from: 'footer.tsx', to: 'Footer.tsx' },
  { from: 'elegant-header.tsx', to: 'elegant-header.tsx' },
  { from: 'ui/pixel-background.tsx', to: 'ui/pixel-background.tsx' },
  
  // Also add other case-sensitive components
  { from: 'ui/pixel-background.tsx', to: 'ui/PixelBackground.tsx' },
  { from: 'elegant-header.tsx', to: 'ElegantHeader.tsx' },
  
  // Map both directories
  { from: 'Footer/index.ts', to: 'Footer.tsx' },
];

module.exports = componentMapping;

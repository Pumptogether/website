// fix-imports.js - simplified and robust version
const fs = require('fs');
const path = require('path');

// Error handling wrapper to ensure script continues even with problems
function tryOperation(operation, fallback) {
  try {
    return operation();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return fallback;
  }
}

// Create tmp components directory structure
tryOperation(() => {
  // Create a temporary directory to hold components with correct case
  const componentsDir = path.join(__dirname, 'components');
  const tmpDir = path.join(__dirname, '.tmp-components');

  // Ensure tmp directory exists
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir, { recursive: true });
  }

  // Create ui directory in tmp
  const tmpUiDir = path.join(tmpDir, 'ui');
  if (!fs.existsSync(tmpUiDir)) {
    fs.mkdirSync(tmpUiDir, { recursive: true });
  }

  // Handle the most critical components - Footer.tsx
  if (fs.existsSync(path.join(componentsDir, 'footer.tsx'))) {
    fs.copyFileSync(
      path.join(componentsDir, 'footer.tsx'), 
      path.join(tmpDir, 'Footer.tsx')
    );
    fs.copyFileSync(
      path.join(componentsDir, 'footer.tsx'), 
      path.join(tmpDir, 'footer.tsx')
    );
    console.log('Created Footer.tsx and footer.tsx');
  }

  // Handle elegant-header.tsx
  if (fs.existsSync(path.join(componentsDir, 'elegant-header.tsx'))) {
    fs.copyFileSync(
      path.join(componentsDir, 'elegant-header.tsx'), 
      path.join(tmpDir, 'elegant-header.tsx')
    );
    fs.copyFileSync(
      path.join(componentsDir, 'elegant-header.tsx'), 
      path.join(tmpDir, 'ElegantHeader.tsx')
    );
    console.log('Created elegant-header.tsx and ElegantHeader.tsx');
  }

  // Handle pixel-background.tsx
  const uiDir = path.join(componentsDir, 'ui');
  if (fs.existsSync(uiDir) && fs.existsSync(path.join(uiDir, 'pixel-background.tsx'))) {
    fs.copyFileSync(
      path.join(uiDir, 'pixel-background.tsx'), 
      path.join(tmpUiDir, 'pixel-background.tsx')
    );
    fs.copyFileSync(
      path.join(uiDir, 'pixel-background.tsx'), 
      path.join(tmpUiDir, 'PixelBackground.tsx')
    );
    console.log('Created ui/pixel-background.tsx and ui/PixelBackground.tsx');
  }

  console.log('Created all necessary component case variants in .tmp-components');
  return true;
}, false);

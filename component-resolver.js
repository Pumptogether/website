// component-resolver.js
const fs = require('fs');
const path = require('path');

// Function to create direct symbolic links for problem components
function createDirectSymlinks() {
  const tmpDir = path.join(__dirname, '.tmp-components');
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir, { recursive: true });
  }

  // List of components to directly address
  const componentMap = [
    { source: 'footer.tsx', target: 'Footer.tsx' },
    { source: 'elegant-header.tsx', target: 'elegant-header.tsx' },
    { source: 'ui/pixel-background.tsx', target: 'ui/pixel-background.tsx' }
  ];

  componentMap.forEach(({ source, target }) => {
    const sourcePath = path.join(__dirname, 'components', source);
    const targetPath = path.join(tmpDir, target);
    
    // Ensure target directory exists
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Create a direct copy of the file
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Created direct symlink: ${source} -> ${target}`);
    } else {
      console.error(`Source file not found: ${sourcePath}`);
    }
  });
}

module.exports = {
  createDirectSymlinks
};

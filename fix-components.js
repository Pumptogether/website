// fix-components.js
// Script to fix component case sensitivity issues
// Can be run directly on the server if needed

const fs = require('fs');
const path = require('path');

console.log('Fixing component case sensitivity issues...');

// Function to ensure directory exists
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Create .tmp-components directories
ensureDir(path.join(__dirname, '.tmp-components'));
ensureDir(path.join(__dirname, '.tmp-components/ui'));

// Critical components that need case fixes
const componentMappings = [
  { from: 'components/footer.tsx', to: ['components/Footer.tsx', '.tmp-components/Footer.tsx', '.tmp-components/footer.tsx'] },
  { from: 'components/elegant-header.tsx', to: ['.tmp-components/elegant-header.tsx', '.tmp-components/ElegantHeader.tsx'] }
];

// Process each mapping
componentMappings.forEach(({ from, to }) => {
  const sourcePath = path.join(__dirname, from);
  
  if (fs.existsSync(sourcePath)) {
    to.forEach(targetRelative => {
      const targetPath = path.join(__dirname, targetRelative);
      ensureDir(path.dirname(targetPath));
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Created: ${targetRelative}`);
    });
  } else {
    console.warn(`Source file not found: ${from}`);
  }
});

// Process UI components
const uiDir = path.join(__dirname, 'components/ui');
if (fs.existsSync(uiDir)) {
  fs.readdirSync(uiDir).forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const sourcePath = path.join(uiDir, file);
      const basename = path.basename(file, path.extname(file));
      const upperFirst = basename.charAt(0).toUpperCase() + basename.slice(1);
      
      const targetPaths = [
        path.join(__dirname, '.tmp-components/ui', file),
        path.join(__dirname, '.tmp-components/ui', upperFirst + path.extname(file))
      ];
      
      targetPaths.forEach(targetPath => {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`Created: ${path.relative(__dirname, targetPath)}`);
      });
    }
  });
}

console.log('Component case sensitivity fixes completed.');

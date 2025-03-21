// patch-imports.js
const fs = require('fs');
const path = require('path');

// Find all pages that import from '@/components/Footer'
const pagesDir = path.join(__dirname, 'app');

// Function to recursively find TypeScript files
function findTsFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findTsFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Find all TypeScript files
const tsFiles = findTsFiles(pagesDir);

// Fix the imports in each file
tsFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if the file contains problematic imports
  if (content.includes("@/components/Footer") || 
      content.includes("@/components/elegant-header") || 
      content.includes("@/components/ui/pixel-background")) {
    
    console.log(`Patching imports in: ${filePath}`);
    
    // Replace problematic imports with direct imports
    let updatedContent = content
      .replace(
        /import\s+(\w+)\s+from\s+["']@\/components\/Footer["']/g, 
        "import $1 from '../components/footer'"
      )
      .replace(
        /import\s+(\w+)\s+from\s+["']@\/components\/elegant\-header["']/g,
        "import $1 from '../components/elegant-header'"
      )
      .replace(
        /import\s+(\w+)\s+from\s+["']@\/components\/ui\/pixel\-background["']/g,
        "import $1 from '../components/ui/pixel-background'"
      );
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Fixed imports in: ${filePath}`);
  }
});

console.log('Import patching completed!');

// direct-deploy.js
// A simple script to directly deploy a static site to Cloudflare Workers
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Configuration
const config = {
  workerName: 'pumptogether-website',
  workerScript: 'static-site-worker.js',
  assetDir: './out',
  compatibilityDate: '2024-03-20',
  customDomain: 'pumptogether.xyz'
};

// Function to execute shell commands
function execCommand(command) {
  return new Promise((resolve, reject) => {
    console.log(`Executing: ${command}`);
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.warn(`Warning: ${stderr}`);
      }
      console.log(stdout);
      resolve(stdout);
    });
  });
}

// Main deployment function
async function deploy() {
  try {
    console.log('Starting direct deployment to Cloudflare Workers...');
    
    // 1. Build the website locally if it hasn't been built yet
    if (!fs.existsSync(config.assetDir)) {
      console.log('Asset directory not found. Building the website first...');
      await execCommand('./build-local.sh');
    }
    
    // 2. Deploy using wrangler
    console.log('Deploying to Cloudflare Workers...');
    await execCommand('npx wrangler deploy');
    
    console.log('Deployment completed successfully!');
    console.log(`Your website should now be available at: https://${config.customDomain}`);
  } catch (error) {
    console.error('Deployment failed:', error);
    process.exit(1);
  }
}

// Run the deployment
deploy();

// static-site-worker.js
// A simple worker to serve pre-built static files for the PumpTogether website

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;
    
    // Add trailing slash to directory requests
    if (path.endsWith('/') && !path.endsWith('/index.html')) {
      path = path + 'index.html';
    }
    
    // Handle root
    if (path === '/') {
      path = '/index.html';
    }
    
    // Remove leading slash
    path = path.replace(/^\//, '');
    
    // Determine content type based on file extension
    const contentType = getContentType(path);
    
    try {
      // Fetch asset from static assets
      const asset = await env.ASSETS.fetch(new URL(path, request.url));
      
      if (asset.status === 200) {
        // Create a new response with the asset body and appropriate headers
        return new Response(asset.body, {
          headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=14400',
          },
          status: 200,
        });
      }
      
      // If not found, check for index.html for potentially routed paths
      if (asset.status === 404 && !path.includes('.')) {
        const indexResponse = await env.ASSETS.fetch(new URL('index.html', request.url));
        if (indexResponse.status === 200) {
          return new Response(indexResponse.body, {
            headers: {
              'Content-Type': 'text/html',
              'Cache-Control': 'public, max-age=14400',
            },
            status: 200,
          });
        }
      }
      
      // If still not found, return 404
      return new Response('Not Found', {
        status: 404,
        headers: { 'Content-Type': 'text/plain' },
      });
    } catch (error) {
      return new Response('Server Error: ' + error.message, {
        status: 500,
        headers: { 'Content-Type': 'text/plain' },
      });
    }
  }
};

// Helper function to determine content type
function getContentType(path) {
  const extension = path.split('.').pop().toLowerCase();
  
  const contentTypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'application/javascript',
    'json': 'application/json',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'ico': 'image/x-icon',
    'txt': 'text/plain',
    'pdf': 'application/pdf',
    'woff': 'font/woff',
    'woff2': 'font/woff2',
    'ttf': 'font/ttf',
    'otf': 'font/otf',
    'eot': 'application/vnd.ms-fontobject',
  };
  
  return contentTypes[extension] || 'application/octet-stream';
}

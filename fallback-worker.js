// fallback-worker.js
// This is a simplified worker that will be used if the OpenNext build fails

export default {
  async fetch(request, env, ctx) {
    try {
      // Try to serve static assets first
      const url = new URL(request.url);
      const assetPath = url.pathname === '/' ? '/index.html' : url.pathname;
      
      // Attempt to fetch from the KV store or SITE_ASSETS binding
      let response;
      if (env.SITE_ASSETS) {
        response = await env.SITE_ASSETS.fetch(request);
        if (response.status === 200) return response;
      }
      
      // Fallback to a simple HTML response
      return new Response(
        `<!DOCTYPE html>
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
        </html>`,
        {
          headers: {
            'Content-Type': 'text/html;charset=UTF-8',
          },
        }
      );
    } catch (error) {
      return new Response('An error occurred: ' + error.message, { status: 500 });
    }
  },
};

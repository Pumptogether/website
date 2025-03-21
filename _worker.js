export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      
      // Handle static assets
      if (
        url.pathname.startsWith('/_next/') ||
        url.pathname.match(/\.(jpg|jpeg|png|gif|ico|svg|css|js)$/)
      ) {
        return env.ASSETS.fetch(request);
      }

      // Default to serving static HTML
      const response = await env.ASSETS.fetch(request);
      
      // Add security headers
      const headers = new Headers(response.headers);
      headers.set('X-Content-Type-Options', 'nosniff');
      headers.set('X-Frame-Options', 'DENY');
      headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

      return new Response(response.body, {
        status: response.status,
        headers
      });
    } catch (error) {
      return new Response('Internal Error', { status: 500 });
    }
  }
};
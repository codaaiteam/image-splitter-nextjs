/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; " +
                   "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://scratch.mit.edu; " +
                   "frame-src https://scratch.mit.edu; " +
                   "style-src 'self' 'unsafe-inline' https://scratch.mit.edu; " +
                   "img-src 'self' data: https://scratch.mit.edu; " +
                   "connect-src 'self' https://scratch.mit.edu;"
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
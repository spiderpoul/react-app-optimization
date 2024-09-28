module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  output: "standalone",
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/:path*' // Proxy to Backend
      }
    ]
  }
};

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', '127.0.0.1', 'images.ctfassets.net'],
  },
};

module.exports = nextConfig;

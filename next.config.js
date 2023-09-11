/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    domains: [
      'images.unsplash.com',
      'localhost',
      'lh3.googleusercontent.com',
      'github.com',
    ],
  },
}

module.exports = nextConfig

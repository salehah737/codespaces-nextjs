/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placehold.co', 'images.unsplash.com'],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'matmoto-pomenpro.vercel.app'],
    },
    serverComponentsExternalPackages: ['@prisma/client'],
  },
};

// Only use PWA in production to avoid development issues
const withPWA = process.env.NODE_ENV === 'production'
  ? require('next-pwa')({
      dest: 'public',
      register: true,
      skipWaiting: true,
    })
  : (config) => config;

module.exports = withPWA(nextConfig);
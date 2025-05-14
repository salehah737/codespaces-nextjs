/** @type {import('next').NextConfig} */
const nextConfig = {
  // Using default output mode for development
  basePath: process.env.NODE_ENV === 'production' ? '/MatMoto-PomenPro' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
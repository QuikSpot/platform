/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '../../dist/apps/landing',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

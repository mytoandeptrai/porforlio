/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove ignore flags for production
  eslint: {
    ignoreDuringBuilds: false, // ✅ Catch linting errors
  },
  typescript: {
    ignoreBuildErrors: false, // ✅ Catch TypeScript errors
  },
  images: {
    unoptimized: true, // Keep for static export compatibility
  },
  // Production optimizations
  reactStrictMode: true,
}

export default nextConfig

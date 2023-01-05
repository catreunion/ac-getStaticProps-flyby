/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["stardewvalleywiki.com", "res.cloudinary.com"]
  }
}

module.exports = nextConfig

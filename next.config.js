/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img.shields.io",
      "camo.githubusercontent.com",
      "raw.githubusercontent.com"
    ],
  }
}

module.exports = nextConfig
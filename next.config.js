/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    API_URL: process.env.API_URL,
  },
}

module.exports = nextConfig

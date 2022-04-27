/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    REACT_APP_NEXT_PUBLIC_ANALYTICS_ID: process.env.REACT_APP_NEXT_PUBLIC_ANALYTICS_ID, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
}

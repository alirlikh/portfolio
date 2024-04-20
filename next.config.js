/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   pwa: {
//     dest: "public",
//     disable: process.env.NODE_ENV === "development",
//     register: true,
//     scope: "/",
//     sw: "service-worker.js",
//     skipWaiting: true,
//     version: "v1.0.0"
//   }
// }

// export default nextConfig

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development"
})

const nextConfig = {}
module.exports = withPWA(nextConfig)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  env: {
    FAUNA_SECRET: process.env.FAUNA_SECRET,
    FAUNA_DOMAIN: process.env.FAUNA_DOMAIN,
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ['ibb.co', 'https://ibb.co'],
  },
};

module.exports = nextConfig;

import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactStrictMode: true, 
  images: {
    domains: ['example.com'], 
  },
};

module.exports = createNextIntlPlugin('./src/i18n/request.ts'); 

export default nextConfig;

import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  // Boshqa Next.js konfiguratsiyalari
  reactStrictMode: true, // react mode va boshqa parametrlar
  images: {
    domains: ['example.com'], // tasvirlarni ko'rsatish uchun domainlar
  },
};

// next-intl pluginni import qilish va sozlash
module.exports = createNextIntlPlugin('./i18n/request.ts'); // request.ts faylini to'g'ri yo'l bilan ko'rsating

export default nextConfig;

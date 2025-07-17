import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts'); // next-intl pluginini import qilish

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // eslint ni build jarayonida o'chirish
  },
  typescript: {
    ignoreBuildErrors: true, // TypeScript xatoliklarini build jarayonida e'tiborsiz qoldirish
  },
  images: {
    unoptimized: true, // Tasvirlarni optimallashtirmaslik
  },
};

export default withNextIntl(nextConfig); // Pluginni nextConfig bilan eksport qilish

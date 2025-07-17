import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
const createNextIntlPlugin = require("next-intl/plugin");

module.exports = createNextIntlPlugin("./i18n/request.ts");  // request.ts faylini ko'rsating

module.exports = {
  // Boshqa Next.js konfiguratsiyalari
};

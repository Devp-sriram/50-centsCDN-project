// next.config.ts
import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  // No need for experimental.appDir - Pages Router is automatically used when pages/ exists
  // Add other configurations as needed:
  images: {
    domains: ['example.com'], // If using Next.js Image
  },
  // Enable compiler optimizations (optional)
  compiler: {
    styledComponents: true, // If using styled-components
  }
};

export default config;

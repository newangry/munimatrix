import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpackDevMiddleware: (config: any) => {
    // Disable error overlay in Webpack
    config.client = {
      overlay: false,
    };
    return config;
  },
};

export default nextConfig;

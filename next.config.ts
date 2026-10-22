import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  cacheComponents: false,
  partialPrefetching: false,

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  sassOptions: {
    includePaths: ["./app"],
  },
};

export default nextConfig;

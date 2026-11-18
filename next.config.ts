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
      // Only run Tailwind on files that import it. An unconditional rule
      // also catches compiled *.module.scss files and strips their
      // CSS-module exports, so styles.xyz comes back undefined.
      "*.css": {
        condition: { content: /@import\s+["']tailwindcss["']/ },
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

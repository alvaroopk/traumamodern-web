import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to the project's own directory so Next.js does
  // not climb up to a parent lockfile when building from a monorepo-like
  // checkout. `process.cwd()` is the project directory at build time.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;

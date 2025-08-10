import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://images.microcms-assets.io/assets/**")],
  },
}

export default nextConfig

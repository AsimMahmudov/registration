import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.tenor.com",
        port: "",
        pathname: "**", // Allows all paths on media.tenor.com
      },
    ],
  },
};

export default nextConfig;

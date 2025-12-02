import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aymuvxysygrwoicsjgxj.supabase.co",
      },
    ],
  },
};

export default nextConfig;

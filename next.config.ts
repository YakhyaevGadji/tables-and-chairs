import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '212.193.48.233',
                pathname: '/uploads/**',
            },
        ],
    },
};

export default nextConfig;

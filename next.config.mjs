/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["uploading.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/f/**",
      },
    ],
  },
};

export default nextConfig;

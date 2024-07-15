import WorkboxPlugin from "workbox-webpack-plugin";

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new WorkboxPlugin.InjectManifest({
          swSrc: "./sw.js",
          swDest: "service-worker.js",
          maximumFileSizeToCacheInBytes: 20 * 1024 * 1024, // 20 MB
        })
      );
    }
    return config;
  },
};

export default nextConfig;

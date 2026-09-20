import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
export default function nextConfig(phase) {
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER;
  const landingOrigin =
    process.env.NEXT_PUBLIC_LANDING_ORIGIN ||
    (isDevelopment ? undefined : "https://info.ments.app");
  const imageOrigin = new URL(
    landingOrigin || "http://localhost:3000"
  ).origin;
  const imageUrl = new URL(imageOrigin);

  return {
    // The web app proxies its root page to info.ments.app. Keep Next's
    // runtime chunks on the landing origin so www.ments.app never asks the
    // web app for landing-page RSC or static files.
    assetPrefix: landingOrigin,
    images: {
      // The root proxy must send optimized images to the landing app. The
      // absolute path keeps the built-in optimizer on info.ments.app.
      path: `${imageOrigin}/_next/image`,
      remotePatterns: [
        {
          protocol: imageUrl.protocol.replace(":", ""),
          hostname: imageUrl.hostname,
          port: imageUrl.port,
          pathname: "/**",
        },
      ],
    },
  };
}

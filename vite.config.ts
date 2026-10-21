// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { imagetools } from "vite-imagetools";

const sharedHostingBuild = process.env.SHARED_HOSTING_BUILD === "1";

export default defineConfig(
  sharedHostingBuild
    ? {
        tanstackStart: {
          server: { entry: "server" },
          pages: [
            { path: "/" },
            { path: "/about" },
            { path: "/capabilities" },
            { path: "/contact" },
            { path: "/gallery" },
            { path: "/products" },
            { path: "/sustainability" },
          ],
          prerender: { enabled: true, autoStaticPathsDiscovery: false },
        },
        nitro: { preset: "static" },
        vite: { plugins: [imagetools()] },
      }
    : {
        tanstackStart: {
          // Redirect TanStack Start's server bundle to the shared SSR error wrapper.
          server: { entry: "server" },
        },
        vite: { plugins: [imagetools()] },
      },
);

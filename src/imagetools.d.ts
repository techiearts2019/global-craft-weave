/// <reference types="vite/client" />

// vite-imagetools: query-suffixed image imports resolve to a URL string
// (or a comma-separated srcset string when `as=srcset` is used).
declare module "*&as=srcset" {
  const srcset: string;
  export default srcset;
}

declare module "*?w=1600&format=webp" {
  const src: string;
  export default src;
}

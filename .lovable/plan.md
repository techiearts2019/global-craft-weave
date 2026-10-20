# Shared-hosting deployment

## Build
- Add a dedicated static export mode for the seven existing public pages while leaving the normal Lovable preview/deployment configuration unchanged.
- Configure Apache directory routing and include a PHP inquiry handler in the static public files.

## Website experience
- Connect the inquiry form to the PHP handler so it only reports success when the host accepts the email; retain contact details as fallback.

## Handoff
- Add concise shared-hosting instructions covering the export command, upload location, PHP/mail requirements, and output contents.
- Verify the existing app build and inspect static-hosting configuration and files.

## Technical details
- Use TanStack Start prerendering with an explicit allowlist of `/`, `/about`, `/capabilities`, `/contact`, `/gallery`, `/products`, and `/sustainability`.
- Use Nitro's static preset for the separate shared-hosting mode; keep the existing Cloudflare target for the default mode.

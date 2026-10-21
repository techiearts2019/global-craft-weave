# ASPL Global shared-hosting website

## Upload

1. Build the website with `bun run build:shared-hosting` from the project folder.
2. Upload **the contents** of `.output/public/` to the domain's document root (usually `public_html/`). Upload hidden files too, especially `.htaccess`.
3. Open the domain and check the home page and each page: About, Products, Our Strength, Sustainability, Gallery, and Contact.

The export contains pre-rendered pages, optimized image files, the Apache routing file, and the inquiry handler. The separate export does not change the regular Lovable preview or deployment build.

## Hosting requirements

- Apache hosting with `.htaccess` overrides and `mod_rewrite` enabled.
- PHP 8.0 or newer, with the `mail()` function enabled for `contact.php`.
- The hosting account must be authorized to send email for `dilshad@aspiglobal.com`. Ask the hosting provider to configure outbound mail and the domain's SPF/DKIM records if needed.

The inquiry form sends to `dilshad@aspiglobal.com`. A success message appears only when the host's mail service accepts the message. If sending is unavailable, visitors are directed to contact ASPL by email or phone instead.

## Test the email-handling rule

With PHP CLI installed, run `python3 tests/test_shared_hosting_mail.py` from the project folder. The test substitutes a local mail command and verifies both accepted and rejected messages without sending real email.
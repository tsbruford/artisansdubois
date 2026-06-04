# Hosting and deployment

## Where the site runs

Cloudflare Pages hosts the site. The Pages project is named `artisansdubois` and connects to the GitHub repo `tsbruford/artisansdubois`.

| Setting | Value |
|---------|-------|
| Production branch | `main` |
| Framework preset | None |
| Build command | (none) |
| Build output directory | `/` (the repo root) |

Every push to `main` triggers a production deploy, live in about 30 seconds. A push to any other branch gets its own preview URL, which is useful for reviewing a change before it goes live.

Production URLs:

- https://artisansdubois.com (apex)
- https://www.artisansdubois.com
- https://artisansdubois.pages.dev (Cloudflare's project URL, always current)

To watch deploys or grab a preview link: Cloudflare dashboard, Workers & Pages, `artisansdubois`, Deployments.

## Domains and DNS

artisansdubois.com is registered at Cloudflare (nameservers `brit`/`chip.ns.cloudflare.com`). Both the apex and `www` are attached as Custom Domains on the Pages project, so Cloudflare manages their DNS records and TLS certificates for you. To review or change them: Cloudflare dashboard, Workers & Pages, `artisansdubois`, Custom domains.

The proxied (orange-cloud) record is correct here. Cloudflare Pages wants the proxy on. This is the opposite of the grey-cloud setup that GitHub Pages needed, so do not switch the apex to DNS-only.

## History: moved off GitHub Pages

The site first ran on GitHub Pages. During the domain cutover its HTTPS certificate broke, so it moved to Cloudflare Pages, which issued a valid certificate and simplified the domain setup. Two things follow from that move:

1. **The repo has no `CNAME` file, and should not get one.** A `CNAME` file is a GitHub Pages mechanism. Cloudflare Pages does not use it, and adding one would re-point GitHub Pages at the domain.
2. **GitHub Pages is still enabled** for the repo and serves a copy at https://tsbruford.github.io/artisansdubois/, but it no longer holds the custom domain. Leave it or turn it off (repo Settings, Pages, Source: None). It does not affect the live site.

## Caching: why CSS and JS changes need a version bump

Cloudflare serves the HTML with `Cache-Control: max-age=0, must-revalidate`. Every visit fetches the current page, so edits to `index.html` (text, structure) appear on the next reload.

It serves `styles.css` and `script.js` with `max-age=14400` (four hours). That value comes from a Cloudflare zone setting (Caching, Configuration, Browser Cache TTL), and it overrides the repo's `_headers` file. So a browser that already loaded the old CSS or JS keeps it for up to four hours.

To force every browser to fetch the new file, the HTML links them with a version query: `styles.css?v=3` and `script.js?v=3`. Raise that number whenever you change either file. The new file then reaches everyone on their next visit, because the page itself always revalidates.

Two ways to handle this going forward:

- **Keep bumping `?v=N`** on the two links in `index.html` when you edit CSS or JS (currently `v=3`). Reliable, and nothing else to manage.
- **Or set the zone's Browser Cache TTL to "Respect Existing Headers."** The `_headers` file already requests no-cache on those two files, so that change makes them revalidate on their own and removes the need to bump. It is a zone-wide setting, so weigh it against any other site in the same Cloudflare zone.

## Rolling back

Cloudflare keeps every deploy. To revert:

- Open Workers & Pages, `artisansdubois`, Deployments, find a known-good build, and use its menu to roll back. This is instant and needs no git change. Or
- Revert the offending commit on `main` with `git revert`, which deploys the prior state fresh.

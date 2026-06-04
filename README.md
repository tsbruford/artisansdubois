# Artisans du Bois

Marketing website for **Artisans du Bois LLC**: Old World custom doors, furniture, and architectural woodwork by Nick Bruford, in the French *menuisier* and *ébéniste* tradition. Nick apprenticed under Swiss master André Liardet from 1974, established the firm in Southern California in 1979, and moved the shop to Utah Valley in 2005.

- **Live site:** https://artisansdubois.com (also www.artisansdubois.com)
- **Host:** Cloudflare Pages, auto-deployed from this repo's `main` branch
- **Stack:** plain HTML, CSS, and JavaScript. No build step, no framework, no dependencies.

The site replaces the firm's previous Wix site. All text and imagery were recovered from the original; see [docs/project-history.md](docs/project-history.md).

## Repository layout

| Path | What it is |
|------|------------|
| `index.html` | The entire page: markup and all visible copy. |
| `styles.css` | All styling. Walnut, cream, and rust palette; responsive. |
| `script.js` | Behavior: nav menu, gallery filter, lightbox, slideshow, scroll reveals, footer year. |
| `_headers` | Cloudflare Pages cache rules for the CSS and JS. |
| `images/` | Web-optimized images the site uses. |
| `images/gallery/` | Door photographs, named by category: `exterior-N`, `interior-N`, `custom-N`, `hardware-N`. |
| `assets/originals/` | The 111 full-resolution source images recovered from Wix, named by Wix media ID. |
| `assets/wix-media-urls.txt` | The CDN manifest used to download those originals. |
| `CONTENT.md` | Verbatim transcript of the original Wix copy (a historical record). |
| `docs/` | Detailed documentation (below). |

Local scratch such as thumbnails and contact sheets is not committed (see `.gitignore`).

## Making changes

Edit the files, push to a feature branch, open a pull request, merge to `main`. Cloudflare redeploys production in about 30 seconds. Full steps are in [docs/editing-guide.md](docs/editing-guide.md).

**One rule to remember:** after you change `styles.css` or `script.js`, raise the `?v=N` number on their links in `index.html` (currently `v=3`), or returning browsers keep the cached old file for up to four hours. The reason is in [docs/hosting-and-deployment.md](docs/hosting-and-deployment.md). Text-only edits to `index.html` need no version bump; the page always revalidates.

## Documentation

- [docs/hosting-and-deployment.md](docs/hosting-and-deployment.md): how the site is hosted and deployed, the domains, the cache behavior, and how to roll back.
- [docs/editing-guide.md](docs/editing-guide.md): how to change copy, images, the gallery, contact details, and social links.
- [docs/project-history.md](docs/project-history.md): where the content came from, the timeline of record, and the design decisions.

## Key facts

| | |
|---|---|
| Business | Artisans du Bois LLC |
| Founder | Nick Bruford (apprenticed under Swiss master André Liardet from 1974) |
| Founded | 1979, Southern California. Relocated to Utah Valley, 2005. |
| Address | 1133 N 450 W, Unit A, Springville, UT 84663 |
| Phone | (801) 319-8188 |
| Email | nick@bruford.com |
| Instagram | [@artisansdubois](https://www.instagram.com/artisansdubois/) |
| Facebook | [ArtisansDuBoisLlc](https://www.facebook.com/ArtisansDuBoisLlc) |
| Repo | github.com/tsbruford/artisansdubois |
| Host | Cloudflare Pages (project `artisansdubois`) |

# Artisans du Bois

Marketing site for **Artisans du Bois LLC** — Old World custom doors and architectural woodwork, hand-built in the French *menuisier* / *ébéniste* tradition since 1979. Based in Orem, Utah; serving clients nationwide.

A single self-contained static site (no build step, no framework) — fast, durable, and trivial to host. It replaces the firm's previous Wix site; all text and imagery were recovered from the original.

## Structure

```
index.html        # the whole page (Home, About, Craftsmanship, Gallery, Contact)
styles.css        # all styling — walnut/cream/rust palette, responsive
script.js         # gallery filtering, lightbox, mobile nav, scroll effects, contact form
images/           # web-optimized imagery used by the site
  gallery/        #   curated portfolio photos (exterior / interior / custom / hardware)
CONTENT.md        # every page's text, captured verbatim from the original site
assets/originals/ # full-resolution source images recovered from the Wix media library (archive)
```

## Run locally

No build needed. From this folder:

```bash
python3 -m http.server 8000
# then open http://127.0.0.1:8000
```

## Deployment

Hosted on **GitHub Pages** from the `main` branch (root). The custom domain `artisansdubois.com` is configured via the `CNAME` file plus DNS records at the registrar (see below).

## Contact form

The form composes a `mailto:` to `nick@bruford.com` (works with no backend). To switch to in-page submission, create a free [Formspree](https://formspree.io) form, set the `<form>` `action` to your endpoint with `method="POST"` in `index.html`, and remove the submit handler in `script.js` (it's commented there).

## Content & imagery

All copy and photographs are the property of Artisans du Bois LLC, recovered from the firm's original website (2026). Portfolio images were downsized for web; full-resolution originals are archived under `assets/originals/`.

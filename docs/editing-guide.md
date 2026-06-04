# Editing guide

All content lives in three files at the repo root: `index.html` (markup and copy), `styles.css` (styling), and `script.js` (behavior). There is no build step, so what you commit is what ships.

## The workflow

The house rule is a feature branch and a pull request for every change to `main`.

1. Pull the latest `main`.
2. Create a branch, for example `git checkout -b edit/contact-hours`.
3. Make your edits.
4. Commit, push the branch, open a PR, merge it.
5. Cloudflare redeploys production in about 30 seconds.

To preview locally before committing, serve the folder and open it:

```
cd ~/Projects/artisansdubois
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Changing text

All visible copy is in `index.html`. Find the words and edit them in place. The page revalidates on every load, so text changes appear on the next reload with no version bump.

`CONTENT.md` holds a transcript of the original Wix copy for reference. The live copy has been edited since; `index.html` is the source of truth.

## Changing styling or behavior

Edit `styles.css` or `script.js`, then raise the version on their links in `index.html` so visitors get the new file:

- Near the top of `index.html`: `<link rel="stylesheet" href="styles.css?v=3">`
- Near the bottom: `<script src="script.js?v=3"></script>`

Increase the number on the file you changed (to `v=4`, and so on). Skip this and returning visitors keep the cached old file for up to four hours. The full reason is in [hosting-and-deployment.md](hosting-and-deployment.md).

## Replacing or adding images

Web-ready images live in `images/`. The originals recovered from the old site live in `assets/originals/`, named by their Wix media ID. To use one:

1. Pick the source from `assets/originals/`.
2. Make a web-sized copy in `images/` with a clear name. On a Mac:
   ```
   sips -s format jpeg -s formatOptions 86 -Z 1600 assets/originals/SOURCE.png --out images/new-name.jpg
   ```
3. Reference it in `index.html`: `<img src="images/new-name.jpg" alt="describe the image">`.

Keep `alt` text accurate; it is read by screen readers and search engines.

## The gallery

`script.js` builds the gallery grid from the files in `images/gallery/`, named by category: `exterior-N`, `interior-N`, `custom-N`, `hardware-N`. The cross-fading slideshow above the grid uses a short list near the top of the gallery code in `script.js` (the `SLIDES` array).

To add a photo: drop the file in `images/gallery/` with the right category name and the next number, then, if you want it in the slideshow, add its name to the `SLIDES` array. Bump the `?v` on the script link for the JS change.

## Contact details and social links

The address, phone, and email appear in two places in `index.html`: the **Contact** section and the **footer**. Update both. The embedded Google map in the Contact section also encodes the address in its URL; update that to match.

Social links are anchors in the footer (Instagram and Facebook). Current targets: `https://www.instagram.com/artisansdubois/` and `https://www.facebook.com/ArtisansDuBoisLlc`.

## Common edits at a glance

| Edit | File(s) | Version bump? |
|------|---------|---------------|
| Reword copy, fix a fact | `index.html` | No |
| Change a color, spacing, layout | `styles.css` | Yes |
| Change behavior (gallery, slideshow, nav) | `script.js` | Yes |
| Swap a photo | `images/`, and the reference in `index.html` | No, unless you touched CSS/JS |
| Add a gallery photo | `images/gallery/`, `script.js` (slideshow only) | Yes if you edited `script.js` |
| Update address, phone, email | `index.html` (Contact and footer, plus the map URL) | No |

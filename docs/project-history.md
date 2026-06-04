# Project history and provenance

## What this is

A rebuild of the Artisans du Bois website, moved off Wix to a self-contained static site and hosted on Cloudflare Pages. It went live at https://artisansdubois.com in June 2026.

## Timeline of record

These are the confirmed facts behind the copy. Keep new copy consistent with them.

- **1974:** Nick Bruford began his apprenticeship under Swiss master craftsman André Liardet.
- **1979:** Nick established Artisans du Bois in Southern California.
- **2005:** the shop relocated to Utah Valley (Springville, Utah).

The original Wix site wrongly implied a recent move to Utah. The current copy avoids that: it states the firm is located in Utah and serves a clientele across the nation. The 1979 Southern California founding and the 2005 move are recorded here for accuracy; the owner chose not to put that history in the live copy.

## Where the content came from

The original site lived on Wix at `artisansduboisutah.wixsite.com/artisansdubois`. A second Wix development site, "1979" (`artisansduboisutah.wixsite.com/1979`), held a richer design and extra photography. Both belonged to the same Wix account and shared one media library, ID `6bd0ff`.

Wix offers no full-site export, so the recovery was manual:

- **Text** was read from the live pages and transcribed into `CONTENT.md`.
- **Images** were pulled from the Wix Media Manager. A deep scan of the manager (the root files plus the "edited image" folder) produced the full media-ID list, and the originals were downloaded from Wix's CDN at full resolution.

The result is 111 source images in `assets/originals/`, named by Wix media ID, with the download manifest in `assets/wix-media-urls.txt`. The web-sized copies the site actually loads are in `images/`.

## Design

The look follows the firm's mark: a walnut, cream, and rust palette, the vintage hand-plane logo, and the "depuis 1979" line. Several elements came from the "1979" development site:

- **The Heritage band:** André Liardet's sepia shopfront photograph (his atelier sign reads "André Liardet, Maître Artisan") and a heritage portrait.
- **The door-anatomy diagram** in the Craftsmanship section, labeling the parts of a mortise-and-tenon door.
- **The cross-fading slideshow** above the gallery grid.

Page order, top to bottom: Hero, About, Heritage, Craftsmanship (four cards plus the diagram), Gallery (category filter, lightbox, slideshow), Contact (details plus an embedded map), Footer (logo, tagline, social links).

## Editorial pass

After the rebuild, the copy went through an owner review. In that pass:

- The address was corrected to the Springville location.
- The fillable contact form was removed in favor of phone and email; the map took its place in the Contact layout.
- Instagram and Facebook links were added to the footer.
- The prose was cleaned of AI writing tells, em-dashes in particular.

## Hosting history

The site first ran on GitHub Pages, then moved to Cloudflare Pages when the GitHub Pages HTTPS certificate broke during the domain cutover. See [hosting-and-deployment.md](hosting-and-deployment.md) for the current setup and the reasons the repo carries no `CNAME` file.

## Contact and social (current)

- 1133 N 450 W, Unit A, Springville, UT 84663
- (801) 319-8188
- nick@bruford.com
- Instagram: @artisansdubois
- Facebook: ArtisansDuBoisLlc

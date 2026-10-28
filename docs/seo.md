# Search and sharing metadata

`astro.config.mjs` sets the public origin to `https://anshgoyal.dev`.
`src/layouts/Base.astro` uses this origin for canonical URLs and the shared
social image, including in local previews. Queries and fragments are excluded
from canonical URLs, and page URLs use a trailing slash to match directory builds.

The base layout supplies the homepage title and description, Open Graph and
Twitter card tags, and JSON-LD describing the Person, WebSite, and current
WebPage. Journey overrides its title and description through layout props.
These tags help search engines and sharing services understand the pages;
they do not guarantee rankings, indexing, or a particular search appearance.

`public/robots.txt` permits crawling and advertises `public/sitemap.xml`.
The sitemap lists the two public pages. Add new page URLs to it when pages
are introduced; individual trips currently use fragments within Journey,
so they are not separate sitemap entries. Do not add artificial last-modified
dates each time a build runs.

## Social image

`public/social-preview.png` is a 1200×630 PNG used by both pages.
The editable text-and-shape source is `assets/social-preview.svg`.
To regenerate it using Sharp, which is included in the current Astro dependency tree,
run this from the project root after `npm ci`:

```sh
node --input-type=module -e "import sharp from 'sharp'; await sharp('assets/social-preview.svg').png().toFile('public/social-preview.png')"
```

Font rendering uses the fonts installed on the rendering machine; review the
PNG after regenerating it. When changing the image, use a new filename and
update `imageURL` in the layout: the VPS serves image assets with a long-lived
immutable cache header, and sharing services may also cache their previews.

## After deployment

Add the domain to Google Search Console and submit
`https://anshgoyal.dev/sitemap.xml` when ready. That is a separate manual
account action; it is not performed by the site build. Sharing services fetch
the metadata and PNG only after they are publicly deployed.

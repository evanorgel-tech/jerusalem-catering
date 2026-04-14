# Jerusalem Catering Website

Kosher catering website for Jerusalem Catering, serving NJ and surrounding communities.
Built with pure HTML/CSS/JS — no build step required.

## Stack
- HTML5 / CSS3 / Vanilla JS
- Google Fonts: Playfair Display + Inter
- Deployed via Bluehost (cPanel file upload)

## Deployment to Bluehost
1. Zip the entire `jerusalem-catering-new/` folder contents
2. Upload via cPanel File Manager to `public_html/` (or subdirectory)
3. Extract in place

## Updating Content

### Menu PDF
1. Replace `menu.pdf` with the new file (keep the same filename)
2. Update the "Last updated" note in `index.html` (search for "Menu updated seasonally")
3. Commit and push, then re-upload to Bluehost

### Kashrut Certificate
1. Replace `kashrut-certificate.jpg` with the new file (keep the same filename)
2. Update the "Certification valid thru" date in `index.html` (search for "Certification valid thru")
3. Commit and push, then re-upload to Bluehost

### Contact Info / Phone / Email
Search `index.html` for the old value and replace — it appears in the hero, menu section, contact section, and footer.

### Food Photos
Replace any of `images/food-1.jpg` through `images/food-7.jpg` with new photos.
Keep the same filenames. Recommended minimum size: 800px wide.

### Domain Goes Live
1. Update the canonical URL in `index.html` (search for `jerusalemcatering.com`)
2. Update `sitemap.xml` URLs
3. Update Open Graph `og:url` and `og:image` meta tags

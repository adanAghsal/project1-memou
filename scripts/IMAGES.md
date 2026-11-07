# Image assets

Run `npm run images:optimize` after changing the source images in `src/assets`.
The script retains originals, applies EXIF orientation, and writes responsive
WebP variants and their dimensions to `src/assets/optimized`.
Commit the generated images and manifest with component changes.

Gallery cards use 320/640px variants. Opening a photo allows the browser to
select up to 960px. Backgrounds use 960px and original-size variants (up to
1920px), without enlarging the source. The script also generates a 1200x630
JPEG landscape preview in `public/og-image.jpg`.

Set `VITE_SITE_URL` to the public HTTPS origin before building for deployment
so Open Graph and Twitter image URLs are absolute. Without it, previews use
the relative path `/og-image.jpg`.

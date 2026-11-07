import sharp from "sharp";
import { copyFile, mkdir, stat, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const source = new URL("../src/assets/", import.meta.url);
const output = new URL("../src/assets/optimized/", import.meta.url);
await mkdir(output, { recursive: true });
const manifest = {};
for (const name of [
  "tree.webp",
  "street.jpg",
  "3.png",
  "4.png",
  "7.png",
  "9.png",
  "foto1.png",
  "foto2.png",
  "foto3.jpg",
]) {
  const stem = name.split(".")[0];
  const photo = stem.startsWith("foto");
  const widths = photo ? [320, 640, 960] : [960, 1920];
  const variants = [];
  for (const width of widths) {
    const filename = `${stem}-${width}.webp`;
    const inputPath = fileURLToPath(new URL(name, source));
    const outputPath = fileURLToPath(new URL(filename, output));
    const info = await sharp(inputPath)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: photo ? 85 : 82, effort: 6 })
      .toFile(outputPath);
    if (name.endsWith(".webp") && width === widths.at(-1)) {
      const original = await stat(inputPath);
      if (original.size < info.size) {
        await copyFile(inputPath, outputPath);
        info.size = original.size;
      }
    }
    variants.push({ filename, width: info.width, height: info.height, bytes: info.size });
  }
  manifest[stem] = variants;
}
await writeFile(new URL("manifest.json", output), JSON.stringify(manifest, null, 2) + "\n");
// Use the landscape rather than personal photos for shared-link previews.
await sharp(fileURLToPath(new URL("tree.webp", source)))
  .resize(1200, 630, { fit: "cover" })
  .jpeg({ quality: 85 })
  .toFile(fileURLToPath(new URL("../public/og-image.jpg", import.meta.url)));
console.log(JSON.stringify(manifest, null, 2));

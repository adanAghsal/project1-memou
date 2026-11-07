import manifest from "@/assets/optimized/manifest.json";

const files = import.meta.glob<string>("../assets/optimized/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

export function imageVariants(name: keyof typeof manifest, thumbnail = false) {
  const variants = thumbnail ? manifest[name].slice(0, 2) : manifest[name];
  const full = variants[variants.length - 1];
  if (!full) throw new Error(`Missing image variants: ${name}`);
  const url = (filename: string) => files[`../assets/optimized/${filename}`];
  return {
    src: url(full.filename),
    srcSet: variants.map((image) => `${url(image.filename)} ${image.width}w`).join(", "),
    width: full.width,
    height: full.height,
  };
}

export const heroImage = imageVariants("tree");

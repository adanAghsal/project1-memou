import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { heroImage } from "@/lib/images";
import { Hero } from "@/components/birthday/Hero";
import { Story } from "@/components/birthday/Story";
import { Gallery } from "@/components/birthday/Gallery";
import { Wishes } from "@/components/birthday/Wishes";
import { Letter } from "@/components/birthday/Letter";
import { Finale } from "@/components/birthday/Finale";
import { MusicPlayer } from "@/components/birthday/MusicPlayer";

const siteUrl = import.meta.env["VITE_SITE_URL"];
const socialImage = siteUrl ? new URL("/og-image.jpg", siteUrl).href : "/og-image.jpg";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        href: heroImage.src,
        imageSrcSet: heroImage.srcSet,
        imageSizes: "100vw",
        fetchPriority: "high",
      },
    ],
    meta: [
      { name: "twitter:image", content: socialImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "A dreamy birthday landscape" },
      { property: "og:image", content: socialImage },
      { title: "Happy Birthday Angelika ♡" },
      { name: "description", content: "Happy Birthday Angelika ♡." },
      { property: "og:title", content: "Happy Birthday Angelika ♡" },
      { property: "og:description", content: "Happy Birthday Angelika ♡." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const storyRef = useRef<HTMLElement>(null);
  const [letterOpen, setLetterOpen] = useState(false);
  const [key, setKey] = useState(0);
  return (
    <main className="overflow-x-hidden">
      <div key={key}>
        <Hero
          onStart={() => {
            window.dispatchEvent(new CustomEvent("birthday:play-music"));
            storyRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <Story ref={storyRef} />
        <Gallery />
        <Wishes />
        <Letter open={letterOpen} setOpen={setLetterOpen} />
        <Finale
          onReplay={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(() => {
              setLetterOpen(false);
              setKey((k) => k + 1);
            }, 1200);
          }}
        />
      </div>
      <MusicPlayer />
    </main>
  );
}

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { imageVariants } from "@/lib/images";
const street = imageVariants("7");
import { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { birthday } from "@/config/birthday";
import { Petals } from "./Petals";

const tilts = [-6, 4, -3, 5, -4, 3];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const item = open !== null ? birthday.gallery[open] : null;

  return (
    <section className="relative overflow-hidden px-6 py-28">
      <div className="absolute inset-0">
        <img
          {...street}
          sizes="100vw"
          decoding="async"
          alt=""
          aria-hidden
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-night via-night/20 to-night" />
      <Petals count={18} className="opacity-80" />
      <div className="relative z-10 text-center">
        <p className="font-hand text-2xl text-gold">Chapter III</p>
        <h2 className="mt-2 font-display text-4xl italic text-cream text-glow md:text-6xl">
          Memories
        </h2>
      </div>
      <div className="relative z-10 mx-auto mt-16 flex max-w-6xl flex-wrap justify-center gap-10 [perspective:1200px]">
        {birthday.gallery.map((g, i) => (
          <motion.button
            key={i}
            onClick={(event) => {
              trigger.current = event.currentTarget;
              setOpen(i);
            }}
            initial={{ opacity: 0, y: 60, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: tilts[i % 6] ?? 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: i * 0.15 }}
            whileHover={{ rotate: 0, scale: 1.06, rotateY: 8, z: 40 }}
            whileFocus={{ rotate: 0, scale: 1.04 }}
            className="w-64 rounded-sm bg-card p-3 pb-5 text-left shadow-card outline-none ring-sakura focus-visible:ring-2 md:w-72"
            style={{ animationDelay: `${i * 0.8}s` }}
            aria-label={`Buka kenangan: ${g.title}`}
          >
            <div className="animate-floaty" style={{ animationDelay: `${i}s` }}>
              <img
                {...g.thumbnail}
                sizes="(min-width: 768px) 256px, 224px"
                alt={`Kenangan ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full rounded-sm border-4 border-sakura/40 bg-night/10 object-contain"
              />
              <p className="mt-3 font-hand text-2xl text-ink">{g.title}</p>
              {/* <p className="text-sm text-ink/70">{g.caption}</p> */}
            </div>
          </motion.button>
        ))}
      </div>
      <Dialog.Root
        open={item !== null}
        onOpenChange={(value) => {
          if (!value) setOpen(null);
        }}
      >
        {item && (
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-night/85 backdrop-blur-md" />
            <Dialog.Content
              aria-describedby={undefined}
              onCloseAutoFocus={(event) => {
                event.preventDefault();
                trigger.current?.focus();
              }}
              className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-sm bg-card p-4 pt-12 shadow-glow"
            >
              <Dialog.Close
                aria-label="Tutup"
                className="absolute right-3 top-3 rounded-full bg-primary p-2 text-primary-foreground focus-visible:outline focus-visible:outline-2"
              >
                <X size={18} />
              </Dialog.Close>
              <img
                {...item.image}
                sizes="(min-width: 544px) 480px, calc(100vw - 64px)"
                alt={`Kenangan ${(open ?? 0) + 1}`}
                decoding="async"
                className="max-h-[calc(100dvh-11rem)] w-full rounded-sm object-contain"
              />
              <Dialog.Title className="mt-4 font-hand text-3xl text-ink">{item.title}</Dialog.Title>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </Dialog.Root>
    </section>
  );
}

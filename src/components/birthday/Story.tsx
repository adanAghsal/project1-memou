import { motion, useScroll, useTransform } from "framer-motion";
import { forwardRef, useRef } from "react";
import { imageVariants } from "@/lib/images";
const street = imageVariants("street");
import { birthday } from "@/config/birthday";
import { Petals } from "./Petals";

export const Story = forwardRef<HTMLElement>(function Story(_, fwd) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  return (
    <section ref={fwd} id="story" className="relative min-h-screen overflow-hidden">
      <div ref={ref} className="absolute inset-0">
        <motion.img
          style={{ y, scale: 1.25 }}
          {...street}
          sizes="100vw"
          decoding="async"
          alt="Sunset street with cherry blossoms"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-night via-night/20 to-night" />
      <div className="absolute inset-y-0 -left-1/4 w-2/3 bg-gold/30 blur-3xl animate-leak mix-blend-screen" />
      <Petals count={25} />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-28 text-center">
        <p className="font-hand text-2xl text-gold">Chapter II</p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1.2 }}
          className="mt-2 font-display text-4xl italic text-cream text-glow md:text-6xl"
        >
          {birthday.storyTitle}
        </motion.h2>
        <div className="mt-12 space-y-3">
          {birthday.birthdayMessage.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.9 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="font-display italic text-lg leading-relaxed text-cream/95 text-glow md:text-4xl"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
});

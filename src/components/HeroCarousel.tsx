import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GoldParticles from "./GoldParticles";

export type Slide = {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

type Props = {
  slides: Slide[];
  children?: React.ReactNode;
  interval?: number;
};

export default function HeroCarousel({ slides, children, interval = 5000 }: Props) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), interval);
    return () => clearInterval(t);
  }, [slides.length, interval]);

  return (
    <section className="relative h-screen w-screen overflow-hidden bg-[color:var(--background)]">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          <img
            src={slides[i].image}
            alt={slides[i].title}
            className="ken-burns absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[color:var(--cream)]/55" />

        </motion.div>
      </AnimatePresence>

      <GoldParticles count={40} />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-5xl"
          >
            {slides[i].eyebrow && (
              <p className="eyebrow mb-6">{slides[i].eyebrow}</p>
            )}
            <h1 className="heading-display text-5xl md:text-7xl lg:text-8xl">
              <span className="text-gold-gradient">{slides[i].title}</span>
            </h1>
            {slides[i].subtitle && (
              <p className="heading-serif mx-auto mt-6 max-w-2xl text-xl md:text-2xl text-[color:var(--ivory)] italic">
                {slides[i].subtitle}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
        {children && <div className="mt-10 flex flex-wrap items-center justify-center gap-4">{children}</div>}
      </div>

      {/* dot indicators */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === idx ? "w-10 bg-[color:var(--gold-bright)]" : "w-2 bg-[color:var(--gold)]/40"
            }`}
          />
        ))}
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-[10px] tracking-[0.4em] text-[color:var(--gold)]/60">
        SCROLL
      </div>
    </section>
  );
}

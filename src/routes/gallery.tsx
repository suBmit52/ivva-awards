import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play, Instagram } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import SectionDivider from "@/components/SectionDivider";
import Reveal from "@/components/Reveal";
import heroGala from "@/assets/hero-gala.jpg";
import heroStage from "@/assets/hero-stage.jpg";
import heroTrophy from "@/assets/hero-trophy.jpg";
import trophyFeature from "@/assets/trophy-feature.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Frames of Glory — IVVA Gallery" },
      { name: "description", content: "Cinematic moments from IVVA International Awards ceremonies, laureate portraits, and red-carpet reels." },
      { property: "og:title", content: "Frames of Glory — IVVA Gallery" },
      { property: "og:description", content: "Step inside the IVVA International ceremony." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const slides = [
    { image: heroGala, eyebrow: "Gallery", title: "Frames of Glory", subtitle: "Cinematic moments from the IVVA stage" },
    { image: g4, eyebrow: "Red Carpet", title: "The Arrival" },
    { image: heroStage, eyebrow: "The Ceremony", title: "An Evening of Honour" },
  ];

  const reels = [g1, g3, g1, g3, g1, g3, g1, g3];
  const masonry = [
    { src: g1, span: "row-span-2" },
    { src: g4, span: "" },
    { src: heroStage, span: "" },
    { src: g3, span: "row-span-2" },
    { src: heroGala, span: "" },
    { src: trophyFeature, span: "" },
    { src: g2, span: "row-span-2" },
    { src: heroTrophy, span: "" },
  ];

  return (
    <>
      <HeroCarousel slides={slides} />

      {/* INSTAGRAM REELS */}
      <section className="bg-[color:var(--background)] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow mb-5"><Instagram className="mr-1 inline" size={12} /> @ivva.international</p>
            <h2 className="heading-display text-4xl md:text-6xl text-[color:var(--ink)]">
              IVVA on <span className="text-gold-gradient italic heading-serif">Instagram</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[color:var(--ivory)]/65">
              Behind the velvet rope — exclusive reels, laureate stories, and gala highlights.
            </p>
            <a href="#" className="btn-gold mt-8">Follow Us</a>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {reels.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                whileHover={{ scale: 1.04 }}
                className="group relative aspect-[9/16] overflow-hidden border border-[color:var(--gold)]/30"
              >
                <img src={img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0    " />
                <div className="absolute inset-0 grid place-items-center bg-[color:var(--gold)]/0 transition-all duration-300 group-hover:bg-[color:var(--gold)]/15">
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-[color:var(--gold-bright)] bg-[color:var(--surface)] opacity-0  transition-opacity duration-300 group-hover:opacity-100">
                    <Play className="ml-0.5 text-[color:var(--gold-bright)]" size={20} />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--gold)]">Reel · {1245 + i * 31} views</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* PHOTO MASONRY */}
      <section className="bg-[color:var(--background)] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12">
            <p className="eyebrow mb-5">Photography</p>
            <h2 className="heading-display text-4xl md:text-6xl text-[color:var(--ink)]">
              The <span className="text-gold-gradient italic heading-serif">Photo Archive</span>
            </h2>
          </Reveal>
          <div className="grid auto-rows-[260px] grid-cols-2 gap-4 md:grid-cols-4">
            {masonry.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className={`group relative overflow-hidden border border-[color:var(--gold)]/25 ${m.span}`}
              >
                <img src={m.src} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[color:var(--gold)]/0 transition-all duration-500 group-hover:bg-[color:var(--gold)]/20" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full    p-4 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="eyebrow">Frame · 0{i + 1}</p>
                  <p className="heading-serif mt-1 text-lg italic text-[color:var(--ink)]">A moment of honour</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* VIDEO HIGHLIGHTS */}
      <section className="bg-[color:var(--background)] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12">
            <p className="eyebrow mb-5">Cinematic</p>
            <h2 className="heading-display text-4xl md:text-6xl text-[color:var(--ink)]">
              Video <span className="text-gold-gradient italic heading-serif">Highlights</span>
            </h2>
          </Reveal>
          <div className="-mx-6 overflow-x-auto px-6 pb-4">
            <div className="flex gap-6">
              {[g4, heroStage, heroGala, g4, heroStage].map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="group relative aspect-video w-[420px] shrink-0 overflow-hidden border border-[color:var(--gold)]/30"
                >
                  <img src={img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[color:var(--surface)]" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-20 w-20 place-items-center rounded-full border-2 border-[color:var(--gold-bright)] bg-[color:var(--surface)]  transition-all group-hover:scale-110 group-hover:bg-[color:var(--gold)]">
                      <Play className="ml-1 text-[color:var(--gold-bright)] group-hover:text-black" size={28} />
                    </div>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="eyebrow">Ceremony 2024</p>
                    <p className="heading-display mt-1 text-xl text-[color:var(--ink)]">Highlight Reel — Vol. {i + 1}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

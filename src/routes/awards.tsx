import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Quote, ChevronRight } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import SectionDivider from "@/components/SectionDivider";
import Reveal from "@/components/Reveal";
import GoldParticles from "@/components/GoldParticles";
import { AWARDS } from "@/lib/awards";
import heroStage from "@/assets/hero-stage.jpg";
import heroGala from "@/assets/hero-gala.jpg";
import heroTrophy from "@/assets/hero-trophy.jpg";
import trophyFeature from "@/assets/trophy-feature.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards of Distinction — IVVA International" },
      { name: "description", content: "Discover the nine prestigious IVVA award categories, including the flagship Business Tycoon Award." },
      { property: "og:title", content: "Awards of Distinction — IVVA" },
      { property: "og:description", content: "Nine prestigious categories celebrating visionary achievement worldwide." },
      { property: "og:url", content: "/awards" },
    ],
    links: [{ rel: "canonical", href: "/awards" }],
  }),
  component: AwardsPage,
});

function AwardsPage() {
  const slides = [
    { image: heroGala, eyebrow: "IVVA 2025", title: "Awards of Distinction", subtitle: "Nine honors. One standard. Absolute excellence." },
    { image: heroTrophy, eyebrow: "The IVVA Honors", title: "Crafted for the Extraordinary" },
    { image: heroStage, eyebrow: "Recognition Without Compromise", title: "The Standard of Excellence" },
  ];

  const featured = AWARDS.find((a) => a.featured)!;
  const others = AWARDS.filter((a) => !a.featured);

  return (
    <>
      <HeroCarousel slides={slides} />

      {/* INTRO */}
      <section className="bg-[color:var(--background)] py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <Quote className="mx-auto text-[color:var(--gold)]" size={40} />
            <p className="heading-serif mt-8 text-3xl md:text-4xl italic leading-relaxed text-[color:var(--ink)]">
              "We do not celebrate success. We celebrate the courage, the integrity, and the relentless pursuit that precede it. The IVVA exists for those who built the bridges that the next generation will walk across."
            </p>
            <p className="eyebrow mt-8">— IVVA Founding Charter</p>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* FEATURED — BUSINESS TYCOON */}
      <section className="relative overflow-hidden bg-[color:var(--background)] py-32">
        <GoldParticles count={35} />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative border-2 border-[color:var(--gold-bright)]     p-10 md:p-20 gold-pulse">
              <div className="absolute -top-4 left-10 bg-[color:var(--background)] px-4">
                <p className="eyebrow text-[color:var(--gold-bright)]">★ The Flagship Honour</p>
              </div>
              <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
                <div>
                  <p className="heading-serif text-xl italic text-[color:var(--gold)]">Spotlight</p>
                  <h2 className="heading-display mt-3 text-5xl md:text-7xl">
                    <span className="text-gold-gradient">IVVA Business</span>
                    <br />
                    <span className="text-gold-gradient italic heading-serif font-normal">Tycoon Award</span>
                  </h2>
                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--ivory)]/85">{featured.description}</p>
                  <div className="my-8 gold-divider max-w-md" />
                  <p className="heading-serif text-2xl italic text-[color:var(--gold-bright)]">
                    "The pinnacle of entrepreneurial recognition."
                  </p>
                  <Link to="/nominate" className="btn-gold mt-10">Nominate a Tycoon</Link>
                </div>
                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-[color:var(--gold)]/25 blur-3xl"
                  />
                  <img src={trophyFeature} alt="Business Tycoon Trophy" className="relative mx-auto max-h-[600px]" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* ALL AWARDS — alternating */}
      <section className="bg-[color:var(--background)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-20 text-center">
            <p className="eyebrow mb-5">The Complete Honor Roll</p>
            <h2 className="heading-display text-4xl md:text-6xl text-[color:var(--ink)]">
              Every Award. <span className="text-gold-gradient italic heading-serif">Every Story.</span>
            </h2>
          </Reveal>

          <div className="space-y-32">
            {others.map((a, i) => (
              <Reveal key={a.slug}>
                <div className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative aspect-[4/5] overflow-hidden border border-[color:var(--gold)]/30">
                    <img
                      src={[g1, heroTrophy, g3, trophyFeature][i % 4]}
                      alt={a.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0    " />
                    <div className="absolute bottom-6 left-6 text-7xl heading-display text-gold-gradient opacity-60">
                      0{i + 1}
                    </div>
                  </div>
                  <div>
                    <p className="eyebrow mb-4">{a.category}</p>
                    <h3 className="heading-display text-4xl md:text-5xl text-[color:var(--ink)]">
                      {a.name.replace("IVVA ", "")}
                    </h3>
                    <div className="my-6 h-px w-20 bg-[color:var(--gold)]" />
                    <p className="text-lg leading-relaxed text-[color:var(--ivory)]/75">{a.description}</p>
                    <Link to="/nominate" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[color:var(--gold)] hover:text-[color:var(--gold-bright)]">
                      Nominate <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* STRUCTURE FLOWCHART */}
      <section className="bg-[color:var(--background)] py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-16 text-center">
            <p className="eyebrow mb-5">Hierarchy of Honour</p>
            <h2 className="heading-display text-4xl md:text-5xl text-[color:var(--ink)]">The IVVA Award Structure</h2>
          </Reveal>
          <Reveal>
            <div className="relative border border-[color:var(--gold)]/30 bg-[color:var(--surface)] p-10">
              <div className="flex flex-col items-center gap-6">
                <div className="border border-[color:var(--gold-bright)] bg-[color:var(--background)] px-10 py-5 text-center gold-pulse">
                  <p className="eyebrow text-[color:var(--gold-bright)]">Apex</p>
                  <p className="heading-display mt-2 text-2xl text-gold-gradient">Hall of Fame & Lifetime Achievement</p>
                </div>
                <div className="h-10 w-px bg-[color:var(--gold)]/40" />
                <div className="border border-[color:var(--gold-bright)] bg-[color:var(--background)] px-10 py-5 text-center">
                  <p className="eyebrow text-[color:var(--gold-bright)]">Flagship</p>
                  <p className="heading-display mt-2 text-2xl text-gold-gradient">Business Tycoon Award ★</p>
                </div>
                <div className="h-10 w-px bg-[color:var(--gold)]/40" />
                <div className="grid w-full gap-4 sm:grid-cols-3">
                  {["Legacy", "Nation Builder", "Women Inspiration", "Academic & Research", "Creative Excellence", "Youth Icon"].map((n) => (
                    <div key={n} className="border border-[color:var(--gold)]/35 bg-[color:var(--surface)] px-4 py-3 text-center text-sm text-[color:var(--ivory)]/85">
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* PAST LAUREATES */}
      <section className="bg-[color:var(--background)] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12">
            <p className="eyebrow mb-5">Hall of Excellence</p>
            <h2 className="heading-display text-4xl md:text-5xl text-[color:var(--ink)]">Past Laureates</h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="group relative aspect-[3/4] overflow-hidden border border-[color:var(--gold)]/25 bg-[color:var(--surface)]">
                  <div className="absolute inset-0   " />
                  <div className="absolute inset-0 grid place-items-center">
                    <p className="heading-display text-6xl text-[color:var(--gold)]/30">{i + 1}</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0    p-4">
                    <p className="eyebrow">Laureate · 2024</p>
                    <p className="heading-serif mt-1 text-lg italic text-[color:var(--ink)]">Awaiting Disclosure</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

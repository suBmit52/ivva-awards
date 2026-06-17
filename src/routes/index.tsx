import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Trophy, Globe, Crown, Sparkles, Award, Users, Star, Play, ArrowRight, Calendar,
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import SectionDivider from "@/components/SectionDivider";
import Reveal from "@/components/Reveal";
import AwardCard from "@/components/AwardCard";
import GoldParticles from "@/components/GoldParticles";
import { AWARDS } from "@/lib/awards";
import heroStage from "@/assets/hero-stage.jpg";
import heroTrophy from "@/assets/hero-trophy.jpg";
import heroGala from "@/assets/hero-gala.jpg";
import trophyFeature from "@/assets/trophy-feature.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IVVA International — Where Vision Meets Victory" },
      { name: "description", content: "The IVVA International Awards honor visionaries, entrepreneurs, and changemakers shaping the world. Discover our awards, nominate excellence." },
      { property: "og:title", content: "IVVA International — Where Vision Meets Victory" },
      { property: "og:description", content: "The world's most prestigious recognition of visionary achievers." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1800;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function HomePage() {
  const slides = [
    { image: heroStage, eyebrow: "IVVA INTERNATIONAL 2025", title: "Where Vision Meets Victory", subtitle: "The world's most prestigious recognition of human excellence" },
    { image: heroGala, eyebrow: "GLOBAL HONOURS", title: "Celebrating Excellence Across Nations", subtitle: "From boardrooms to laboratories, from studios to villages" },
    { image: heroTrophy, eyebrow: "THE IVVA TROPHY", title: "An Icon of Achievement", subtitle: "Hand-crafted in gold, awarded only to the legendary" },
  ];

  return (
    <>
      <HeroCarousel slides={slides}>
        <Link to="/nominate" className="btn-gold">Nominate Now</Link>
        <Link to="/awards" className="btn-ghost-gold">Explore Awards</Link>
      </HeroCarousel>

      {/* ABOUT */}
      <section className="relative overflow-hidden bg-[color:var(--background)] py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-5">About IVVA</p>
            <h2 className="heading-display text-4xl md:text-6xl text-[color:var(--ink)]">
              An institution of <span className="text-gold-gradient italic heading-serif">distinction.</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--ivory)]/75">
              The International Visionary Victory Achievers Awards exist to honor those whose courage, conviction, and craft have shaped the contours of our age. We do not measure achievement in revenue alone — we measure it in legacy.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[color:var(--ivory)]/60">
              Across nine categories and five continents, the IVVA stands as the gold standard of recognition for the visionaries who refuse to accept the world as it is.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { n: 10, s: "+", label: "Years of Excellence" },
                { n: 50, s: "+", label: "Countries" },
                { n: 9, s: "", label: "Categories" },
              ].map((x) => (
                <div key={x.label} className="border-l border-[color:var(--gold)]/40 pl-4">
                  <div className="heading-display text-4xl text-gold-gradient">
                    <Counter to={x.n} suffix={x.s} />
                  </div>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[color:var(--ivory)]/60">{x.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2} className="relative">
            <div className="relative">
              <div className="absolute -inset-6     blur-3xl" />
              <img src={trophyFeature} alt="IVVA Trophy" className="relative w-full border border-[color:var(--gold)]/30" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-8 top-12 hidden md:block border border-[color:var(--gold)]/50 bg-[color:var(--surface)]  p-5"
              >
                <Trophy className="text-[color:var(--gold-bright)]" />
                <p className="mt-2 heading-display text-2xl text-[color:var(--ink)]">200+</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--gold)]">Laureates</p>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* FEATURED — BUSINESS TYCOON */}
      <section className="relative overflow-hidden bg-[color:var(--background)] py-32">
        <GoldParticles count={25} />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative border-4 border-[color:var(--burgundy)] bg-[color:var(--cream)] p-10 md:p-20 gold-pulse">
              <div className="absolute -top-4 left-10 bg-[color:var(--background)] px-4">
                <p className="eyebrow text-[color:var(--gold-bright)]">★ Featured Award</p>
              </div>
              <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className="heading-serif text-2xl italic text-[color:var(--gold)]">The pinnacle of</p>
                  <h2 className="heading-display mt-2 text-5xl md:text-7xl">
                    <span className="text-gold-gradient">Business Tycoon</span>
                  </h2>
                  <p className="heading-serif mt-2 text-3xl italic text-[color:var(--ink)]">Award</p>
                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--ivory)]/80">
                    Reserved for the titans of industry — visionaries who transformed bold ideas into empires. The IVVA Business Tycoon Award celebrates entrepreneurs who didn't just build businesses, they built legacies that redefined markets, empowered communities, and inspired the next generation of leaders.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link to="/awards" className="btn-gold">Learn More</Link>
                    <Link to="/nominate" className="btn-ghost-gold">Nominate a Tycoon</Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
                  <img src={trophyFeature} alt="Business Tycoon Trophy" className="relative mx-auto max-h-[500px] w-auto" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* CATEGORIES GRID */}
      <section className="bg-[color:var(--background)] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 text-center">
            <p className="eyebrow mb-5">Nine Honors</p>
            <h2 className="heading-display text-4xl md:text-6xl text-[color:var(--ink)]">
              Awards of <span className="text-gold-gradient italic heading-serif">Distinction</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[color:var(--ivory)]/65">
              Each IVVA Award honors a different dimension of human excellence — together they form the most complete portrait of greatness in our time.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AWARDS.map((a, i) => <AwardCard key={a.slug} award={a} index={i} />)}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* INSTAGRAM REELS */}
      <section className="bg-[color:var(--background)] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-5">@ivva.international</p>
              <h2 className="heading-display text-4xl md:text-6xl text-[color:var(--ink)]">
                Moments of <span className="text-gold-gradient italic heading-serif">Glory</span>
              </h2>
            </div>
            <a href="#" className="btn-ghost-gold">Follow Us</a>
          </Reveal>
          <div className="-mx-6 overflow-x-auto px-6 pb-4">
            <div className="flex gap-5">
              {[g1, g3, g1, g3, g1, g3].map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="group relative aspect-[9/16] w-[240px] shrink-0 overflow-hidden border border-[color:var(--gold)]/25"
                >
                  <img src={img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0    " />
                  <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="grid h-14 w-14 place-items-center rounded-full border border-[color:var(--gold-bright)] bg-[color:var(--surface)] ">
                      <Play className="ml-0.5 text-[color:var(--gold-bright)]" size={20} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs text-[color:var(--ink)]">Ceremony Highlight {i + 1}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* WHY IVVA */}
      <section className="bg-[color:var(--background)] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 text-center">
            <p className="eyebrow mb-5">Why IVVA</p>
            <h2 className="heading-display text-4xl md:text-6xl text-[color:var(--ink)]">
              The mark of <span className="text-gold-gradient italic heading-serif">true honour</span>
            </h2>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { Icon: Globe, stat: "50+", label: "Global Reach", text: "Laureates from over 50 nations — a truly international institution of recognition." },
              { Icon: Crown, stat: "9", label: "Curated Categories", text: "Every category meticulously designed to honor a distinct dimension of excellence." },
              { Icon: Sparkles, stat: "0%", label: "Conflicts of Interest", text: "An independent jury of veteran leaders ensures absolute integrity in every selection." },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.15} className="border-t border-[color:var(--gold)]/30 pt-10">
                <p.Icon size={36} className="text-[color:var(--gold-bright)]" />
                <p className="heading-display mt-6 text-5xl text-gold-gradient">{p.stat}</p>
                <p className="eyebrow mt-2">{p.label}</p>
                <p className="mt-4 text-[color:var(--ivory)]/70 leading-relaxed">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NOMINATION CTA */}
      <section className="relative overflow-hidden">
        <div className="relative     py-28">
          <GoldParticles count={20} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.15)_0%,transparent_70%)]" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <Reveal>
              <p className="eyebrow mb-5"><Calendar className="mr-2 inline" size={12} /> Nominations Open · Closes Dec 31, 2025</p>
              <h2 className="heading-display text-5xl md:text-7xl text-[color:var(--ink)]">
                Nominate a <span className="text-gold-gradient italic heading-serif">Visionary</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-[color:var(--ivory)]/75">
                Greatness is not always loud. Sometimes it lives quietly, building, healing, teaching. Help us find them.
              </p>
              <Link to="/nominate" className="btn-gold mt-10">
                Begin Nomination <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

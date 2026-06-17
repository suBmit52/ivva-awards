import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import HeroCarousel from "@/components/HeroCarousel";
import SectionDivider from "@/components/SectionDivider";
import Reveal from "@/components/Reveal";
import heroStage from "@/assets/hero-stage.jpg";
import heroGala from "@/assets/hero-gala.jpg";
import heroTrophy from "@/assets/hero-trophy.jpg";
import trophyFeature from "@/assets/trophy-feature.jpg";
import g1 from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The IVVA Story — About IVVA International" },
      { name: "description", content: "The mission, philosophy, and people behind the IVVA International Awards." },
      { property: "og:title", content: "The IVVA Story" },
      { property: "og:description", content: "Discover the philosophy and people behind IVVA International." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 2000;
        const s = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - s) / dur);
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

function AboutPage() {
  const slides = [
    { image: heroStage, eyebrow: "Our Story", title: "The IVVA Story", subtitle: "An institution built to outlast trends and honour what truly endures." },
    { image: heroGala, eyebrow: "Founded On Conviction", title: "A Decade of Distinction" },
    { image: heroTrophy, eyebrow: "Independent. International.", title: "The Standard We Set" },
  ];

  return (
    <>
      <HeroCarousel slides={slides} />

      {/* VISION */}
      <section className="bg-[color:var(--background)] py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="eyebrow mb-8">Our Vision</p>
            <p className="heading-serif text-3xl md:text-5xl italic leading-tight text-gold-gradient">
              "To build the most trusted recognition platform on Earth — where every honour is earned, every story is verified, and every laureate becomes a lesson for the generations who follow."
            </p>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* MISSION */}
      <section className="bg-[color:var(--background)] py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-5">Our Mission</p>
            <h2 className="heading-display text-4xl md:text-5xl text-[color:var(--ink)]">
              Find them. <span className="text-gold-gradient italic heading-serif">Honour them. Remember them.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-[color:var(--ivory)]/75">
              The IVVA exists to do three things — and to do them better than any institution in our category. We find the people history is too busy to notice. We honour them with the gravity and grandeur their work deserves. And we ensure the record of their contribution outlives any of us.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--ivory)]/60">
              We are independent. We are international. And we are deeply, deliberately allergic to mediocrity.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden border border-[color:var(--gold)]/40">
              <img src={g1} alt="Mission" className="h-full w-full object-cover" />
              <div className="absolute inset-0    " />
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* PHILOSOPHY */}
      <section className="bg-[color:var(--background)] py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="eyebrow mb-5">Founding Philosophy</p>
            <h2 className="heading-display text-4xl md:text-5xl text-[color:var(--ink)]">A Note from the Founders</h2>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--ivory)]/80">
              <p>The world has no shortage of awards. It has, in our view, a shortage of the courage to give awards properly — to demand verification, to refuse celebrity bias, to honour the unfashionable, to remember the dead, to lift the unseen.</p>
              <p className="heading-serif text-2xl italic text-[color:var(--gold)]">We began the IVVA because somebody had to.</p>
              <p>We have no shareholders. We have no advertisers in our jury room. We have no quotas to fill and no friends to flatter. What we have is a single, slightly old-fashioned conviction: that recognition, done well, is one of the most powerful instruments a civilization possesses to encourage its own better angels.</p>
              <p>This is the work. It is slow, it is ceremonial, it is sometimes lonely. And it is the most important thing we know how to do.</p>
              <p className="eyebrow pt-4">— The IVVA Founding Council</p>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* JURY */}
      <section className="bg-[color:var(--background)] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 text-center">
            <p className="eyebrow mb-5">The Jury</p>
            <h2 className="heading-display text-4xl md:text-5xl text-[color:var(--ink)]">
              The <span className="text-gold-gradient italic heading-serif">Advisory Board</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[color:var(--ivory)]/65">
              An independent council of veterans drawn from industry, academia, the arts, and public life.
            </p>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { n: "Dr. A. Mehta", t: "Chair · Academia" },
              { n: "S. Okonjo", t: "Vice Chair · Public Policy" },
              { n: "L. Rossi", t: "Council · Industry" },
              { n: "K. Tanaka", t: "Council · Arts" },
              { n: "M. Al-Farsi", t: "Council · Innovation" },
              { n: "P. Singh", t: "Council · Philanthropy" },
              { n: "E. Laurent", t: "Council · Media" },
              { n: "R. Nakamura", t: "Council · Science" },
            ].map((j, i) => (
              <Reveal key={j.n} delay={i * 0.05}>
                <div className="group">
                  <div className="relative aspect-[3/4] overflow-hidden border border-[color:var(--gold)]/30 bg-[color:var(--surface)]">
                    <div className="absolute inset-0    " />
                    <div className="absolute inset-0 grid place-items-center">
                      <p className="heading-display text-7xl text-[color:var(--gold)]/40">
                        {j.n.split(" ").pop()![0]}
                      </p>
                    </div>
                  </div>
                  <p className="heading-display mt-4 text-lg text-[color:var(--ink)]">{j.n}</p>
                  <p className="eyebrow mt-1">{j.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* BY THE NUMBERS */}
      <section className="bg-[color:var(--background)] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 text-center">
            <p className="eyebrow mb-5">By the Numbers</p>
            <h2 className="heading-display text-4xl md:text-5xl text-[color:var(--ink)]">A Decade of Distinction</h2>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {[
              { n: 50, s: "+", l: "Countries" },
              { n: 200, s: "+", l: "Laureates" },
              { n: 9, s: "", l: "Categories" },
              { n: 10, s: "+", l: "Years" },
            ].map((x, i) => (
              <Reveal key={x.l} delay={i * 0.08}>
                <div className="border border-[color:var(--gold)]/30 bg-[color:var(--surface)] p-10 text-center">
                  <div className="heading-display text-6xl text-gold-gradient">
                    <Counter to={x.n} suffix={x.s} />
                  </div>
                  <p className="eyebrow mt-4">{x.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* MEDIA STRIP */}
      <section className="bg-[color:var(--background)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-10 text-center">
            <p className="eyebrow">As Featured In</p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 items-center gap-8 border-y border-[color:var(--gold)]/20 py-10 opacity-70 sm:grid-cols-3 md:grid-cols-6">
              {["FORBES", "BLOOMBERG", "REUTERS", "WIRED", "TIME", "ECONOMIST"].map((m) => (
                <p key={m} className="heading-display text-center text-xl tracking-widest text-[color:var(--ivory)]/60 hover:text-[color:var(--gold)] transition-colors">
                  {m}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARALLAX BAND */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${trophyFeature})` }} />
        <div className="absolute inset-0    " />
        <div className="relative grid h-full place-items-center px-6 text-center">
          <Reveal>
            <p className="eyebrow mb-5">Ceremony Highlights</p>
            <p className="heading-serif text-3xl md:text-5xl italic text-gold-gradient max-w-3xl">
              "A standing ovation from history."
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

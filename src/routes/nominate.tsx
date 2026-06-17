import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, FileText, Users, Award as AwardIcon, ArrowRight } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import SectionDivider from "@/components/SectionDivider";
import Reveal from "@/components/Reveal";
import { AWARDS } from "@/lib/awards";
import heroStage from "@/assets/hero-stage.jpg";
import heroGala from "@/assets/hero-gala.jpg";

export const Route = createFileRoute("/nominate")({
  head: () => ({
    meta: [
      { title: "Nominate — IVVA International Awards" },
      { name: "description", content: "Nominate a visionary for the IVVA International Awards. Be the voice of excellence." },
      { property: "og:title", content: "Be the Voice of Excellence — Nominate" },
      { property: "og:description", content: "Submit a nomination for the IVVA International Awards 2025." },
      { property: "og:url", content: "/nominate" },
    ],
    links: [{ rel: "canonical", href: "/nominate" }],
  }),
  component: NominatePage,
});

function NominatePage() {
  const slides = [
    { image: heroStage, eyebrow: "Nominations 2025", title: "Be the Voice of Excellence", subtitle: "Greatness deserves to be recognized — by you." },
    { image: heroGala, eyebrow: "Submit a Nomination", title: "Champion a Visionary" },
  ];

  const [submitted, setSubmitted] = useState(false);

  const orderedAwards = [
    ...AWARDS.filter((a) => a.featured),
    ...AWARDS.filter((a) => !a.featured),
  ];

  return (
    <>
      <HeroCarousel slides={slides} />

      {/* WHY NOMINATE */}
      <section className="bg-[color:var(--background)] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 text-center">
            <p className="eyebrow mb-5">Why Nominate</p>
            <h2 className="heading-display text-4xl md:text-5xl text-[color:var(--ink)]">
              Three reasons to <span className="text-gold-gradient italic heading-serif">step forward</span>
            </h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { Icon: AwardIcon, t: "Honour an Architect", d: "Give a deserving visionary the recognition history owes them." },
              { Icon: Users, t: "Inspire the Next Generation", d: "Every laureate becomes a beacon for those who follow." },
              { Icon: FileText, t: "Shape the Record", d: "Your nomination contributes to the global ledger of human excellence." },
            ].map((x, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border border-[color:var(--gold)]/30 bg-[color:var(--surface)] p-10 text-center transition-all hover:border-[color:var(--gold)] hover:shadow-[0_20px_60px_-20px_rgba(201,168,76,0.4)]">
                  <x.Icon className="mx-auto text-[color:var(--gold-bright)]" size={36} />
                  <h3 className="heading-display mt-6 text-2xl text-[color:var(--ink)]">{x.t}</h3>
                  <p className="mt-4 text-[color:var(--ivory)]/70">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ELIGIBILITY */}
      <section className="bg-[color:var(--cream)] py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="eyebrow mb-5">Eligibility</p>
            <h2 className="heading-display text-4xl text-[color:var(--ink)] mb-10">Who can be nominated</h2>
            <ul className="space-y-4">
              {[
                "Individuals or organizations from any country, of any age above 18.",
                "Demonstrated, verifiable contribution within the relevant category.",
                "Active or retired professionals; posthumous nominations are accepted.",
                "Self-nominations are permitted but require independent endorsement.",
                "All claims subject to independent verification by the IVVA Jury.",
                "Previous IVVA laureates are eligible for additional categories.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-4 border-l border-[color:var(--gold)]/30 pl-6 py-2">
                  <Check className="mt-0.5 shrink-0 text-[color:var(--gold-bright)]" size={20} />
                  <span className="text-[color:var(--ivory)]/85">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* FORM */}
      <section className="bg-[color:var(--surface)] py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow mb-5">Nomination Form</p>
            <h2 className="heading-display text-4xl md:text-5xl text-[color:var(--ink)]">
              Submit a <span className="text-gold-gradient italic heading-serif">Nomination</span>
            </h2>
          </Reveal>

          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="border border-[color:var(--gold)]/40 bg-[color:var(--surface)] p-8 md:p-12 space-y-6"
            >
              {submitted ? (
                <div className="py-12 text-center">
                  <Check className="mx-auto text-[color:var(--gold-bright)]" size={48} />
                  <h3 className="heading-display mt-6 text-3xl text-gold-gradient">Nomination Received</h3>
                  <p className="mt-4 text-[color:var(--ivory)]/80">Thank you. Our jury will review and respond within 30 days.</p>
                </div>
              ) : (
                <>
                  <Field label="Nominee Full Name" name="name" required />
                  <div>
                    <label className="eyebrow mb-2 block">Award Category</label>
                    <select required className="w-full border border-[color:var(--gold)]/40 bg-[color:var(--background)] px-4 py-3 text-[color:var(--ivory)] focus:border-[color:var(--gold-bright)] focus:outline-none">
                      <option value="">Select a category…</option>
                      {orderedAwards.map((a) => (
                        <option key={a.slug} value={a.slug}>
                          {a.featured ? "★ FEATURED — " : ""}{a.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Field label="Organization / Institution" name="org" />
                  <Field label="Country" name="country" required />
                  <div>
                    <label className="eyebrow mb-2 block">Brief Achievement Description</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full border border-[color:var(--gold)]/40 bg-[color:var(--background)] px-4 py-3 text-[color:var(--ivory)] focus:border-[color:var(--gold-bright)] focus:outline-none"
                      placeholder="Tell us why this nominee deserves recognition…"
                    />
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Your Name" name="nominator" required />
                    <Field label="Your Email" name="email" type="email" required />
                  </div>
                  <button type="submit" className="btn-gold w-full">
                    Submit Nomination <ArrowRight size={16} />
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* PROCESS */}
      <section className="bg-[color:var(--sand)] py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-16 text-center">
            <p className="eyebrow mb-5">Nomination Process</p>
            <h2 className="heading-display text-4xl md:text-5xl text-[color:var(--ink)]">From Submission to Stage</h2>
          </Reveal>
          <div className="relative grid gap-12 md:grid-cols-3">
            <div className="absolute left-0 right-0 top-10 hidden h-px     md:block" />
            {[
              { n: "01", t: "Submit", d: "Complete the nomination form with relevant details and supporting context." },
              { n: "02", t: "Review", d: "Our independent jury evaluates each nomination over 30 days." },
              { n: "03", t: "Honour", d: "Laureates are announced and felicitated at the IVVA Annual Gala." },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="relative bg-[color:var(--background)] text-center">
                  <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full border-2 border-[color:var(--gold-bright)] bg-[color:var(--background)] heading-display text-2xl text-gold-gradient">
                    {s.n}
                  </div>
                  <h3 className="heading-display text-2xl text-[color:var(--ink)]">{s.t}</h3>
                  <p className="mt-3 text-[color:var(--ivory)]/70">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow mb-2 block">{label}{required && <span className="text-[color:var(--gold-bright)] ml-1">*</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border border-[color:var(--gold)]/40 bg-[color:var(--background)] px-4 py-3 text-[color:var(--ivory)] focus:border-[color:var(--gold-bright)] focus:outline-none"
      />
    </div>
  );
}
